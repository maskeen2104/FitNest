# from flask import Flask, request, jsonify
# import products
# import pandas as pd
# import openai

# import requests
# import products
# import cohere

# COHERE_KEY = "kgHhAG7T02t1NRsjPK9TefcBitztWTn4KfrC7Jw4"
# co = cohere.Client(COHERE_KEY)

# def generate_text(prompt, temp=0):
#     response = co.chat(
#         message=prompt,
#         temperature=temp,
#         stream=True)

#     generated_text = []

#     for event in response:
#         if event.event_type == "text-generation":
#             generated_text.append(event.text)
#     return ''.join(generated_text)

import cohere
import pandas as pd
from products import df_filtered  # Import the filtered DataFrame from products.py
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
import numpy as np

# Initialize Cohere client
COHERE_KEY = "kgHhAG7T02t1NRsjPK9TefcBitztWTn4KfrC7Jw4"  # Use your Cohere API key
co = cohere.Client(COHERE_KEY)

def generate_text(prompt, temp=0.5):
    response = co.generate(
        model='command-light-nightly',  # Ensure this is a valid model for your Cohere account
        prompt=prompt,
        temperature=temp,
        max_tokens=50,
        k=0,
        p=0.75,
        frequency_penalty=0,
        presence_penalty=0,
        stop_sequences=["\n"],
        return_likelihoods='NONE'
    )
    
    # Assuming the response object has a .generations attribute
    if response.generations:
        # Access the first generation's text. Adjust if you expect multiple generations.
        generated_text = response.generations[0].text.strip()
        return generated_text
    else:
        return "No generation produced."

def get_product_recommendations(user_description):
    # Combine user description with product descriptions
    descriptions = df_filtered['description'].tolist()
    descriptions.insert(0, user_description)  # Insert user description at the beginning
    
    # Convert descriptions to TF-IDF vectors
    vectorizer = TfidfVectorizer()
    tfidf_matrix = vectorizer.fit_transform(descriptions)
    
    # Calculate cosine similarity between user description and all product descriptions
    cos_similarities = cosine_similarity(tfidf_matrix[0:1], tfidf_matrix[1:])
    
    # Find the index of the highest similarity score
    best_match_index = np.argmax(cos_similarities)
    
    if cos_similarities[0, best_match_index] > 0:  # Ensure there's at least some similarity
        best_match = df_filtered.iloc[best_match_index]
        return best_match
    else:
        return None

# def get_product_recommendations(user_description):
#     # This function will match the user's description with product descriptions
#     # and return the most relevant product details.

#     # Assuming that the description provided by the user is a string
#     # that we want to match against the 'description' column in df_filtered
#     best_match = None
#     best_score = float('inf')

#     for _, row in df_filtered.iterrows():
#         # Generate a similarity score or use some heuristic for matching
#         # For simplicity, we're using string length difference as a placeholder for matching logic
#         # In practice, you'd use more sophisticated text similarity measures
#         score = abs(len(row['description']) - len(user_description))
#         if score < best_score:
#             best_match = row
#             best_score = score

#     if best_match is not None:
#         return best_match
#     else:
#         return None

# Example interaction
user_input = "I'm looking for something most durable ski jacket."
user_description = generate_text(user_input)  # This could be a direct user input in a practical scenario

recommended_product = get_product_recommendations(user_description)

if recommended_product is not None:
    print(f"Recommended Product: {recommended_product['title']}, ID: {recommended_product['pid']}, Cost: ${recommended_product['price_ca']}")
else:
    print("Sorry, we couldn't find a product that matches your description.")



# app = Flask(__name__)

# # Load your product data
# products_df = products.df_filtered

# # Set your OpenAI API key
# openai.api_key = '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'

# def get_product_recommendations(user_query):
#     """
#     Function to process the user query with OpenAI and return product recommendations.
#     """
#     # Use OpenAI API to understand the user query
#     response = openai.Completion.create(
#       engine="text-davinci-003",  # Check for the latest available model
#       prompt=f"Given the user requirements: {user_query}, which product attributes should we match?",
#       temperature=0.5,
#       max_tokens=100,
#       top_p=1.0,
#       frequency_penalty=0.0,
#       presence_penalty=0.0
#     )

#     # Assume the response contains keywords or categories to match products
#     # For simplicity, this example directly uses the response text as a keyword
#     # In practice, you might want to further process the response
#     keyword = response.choices[0].text.strip().lower()

#     # Filter products based on the keyword
#     # This is a basic example; you might need a more complex matching logic
#     matched_products = products_df[products_df['description'].str.lower().str.contains(keyword)]

#     return matched_products.to_dict('records')

# @app.route('/recommend', methods=['POST'])
# def recommend():
#     user_query = request.json.get('query', '')
#     recommendations = get_product_recommendations(user_query)
    
#     if recommendations:
#         return jsonify({"message": "Here are your product recommendations:", "products": recommendations})
#     else:
#         return jsonify({"message": "Sorry, we couldn't find any products matching your requirements."})

# if __name__ == '__main__':
#     app.run(debug=True)
