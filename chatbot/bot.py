from flask import Flask, request, jsonify
import products
import pandas as pd

app = Flask(__name__)

# Load the product data
products_df = products.df_filtered

# # Assuming the stores CSV is formatted with columns: ['store_name', 'address', 'products_available']
# # Where 'products_available' could be a list or a string of product IDs
# stores_df = pd.read_csv('path_to_your_stores.csv')  # Adjust path as necessary

@app.route('/recommend', methods=['POST'])
def recommend_products():
    content = request.json
    gender = content.get('gender')
    max_price = content.get('max_price')

    recommendations = products_df[
        (products_df['gender'].str.lower() == gender.lower()) & 
        (products_df['price_ca'] <= max_price)
    ][['pid', 'title', 'description']]

    if recommendations.empty:
        return jsonify({'message': 'No products found matching your criteria.'})
    else:
        return jsonify(recommendations.to_dict(orient='records'))

# @app.route('/find_store', methods=['POST'])
# def find_store():
#     content = request.json
#     product_id = content.get('product_id')
    
#     # This example assumes 'products_available' is a comma-separated list of product IDs
#     # You might need to adjust this logic depending on how your data is structured
#     matching_stores = stores_df[stores_df['products_available'].apply(lambda x: str(product_id) in x.split(','))]

#     if matching_stores.empty:
#         return jsonify({'message': 'No stores found carrying this product.'})
#     else:
#         return jsonify(matching_stores[['store_name', 'address']].to_dict(orient='records'))

if __name__ == '__main__':
    app.run(debug=True)
