import pandas as pd

csv_file_path = 'chatbot/products.csv'
df = pd.read_csv(csv_file_path)

print("Original DataFrame:")
print(df.head())

columns_to_keep = ['gender', 'price_ca','pid', 'title', 'description']

df_filtered = df[columns_to_keep]

print("\nFiltered DataFrame:")
print(df_filtered.head())
