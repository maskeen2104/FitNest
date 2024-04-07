const express = require('express');
const { CohereClient } = require('cohere-ai');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Adjust CORS options to allow requests from your React app's origin
const corsOptions = {
  origin: 'http://localhost:5173', // Adjust this as per your React app's serving address
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use(express.json());

// Initialize Cohere client with environment variable for the token
const cohere = new CohereClient({
  token: "kgHhAG7T02t1NRsjPK9TefcBitztWTn4KfrC7Jw4", // Ensure you have COHERE_TOKEN in your .env file
});

// Example product descriptions
const productDescriptions = [
  'This is a red toy car for children aged 3-5.',
  'Eco-friendly bamboo toothbrush for adults.',
];

// Generate trends endpoint
app.post('/generate-trends', async (req, res) => {
  try {
    const { prompt } = req.body;
    if (typeof prompt !== 'string') {
      return res.status(400).json({ error: 'Prompt must be a string.' });
    }
    const generateResponse = await cohere.generate({
      prompt: prompt,
      max_tokens: 50,
    });
    res.json(generateResponse.body);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get recommendations endpoint (Assuming you have a function for this)
app.post('/get-recommendations', (req, res) => {
  // Implementation assumed
});

// Search outfits endpoint aligned with frontend expectations
app.post('/search-outfits', async (req, res) => {
  const { user_input } = req.body; // Aligned with frontend

  try {
    const queryResponse = await cohere.embed({
      texts: [user_input],
      model: "large",
      input_type: "query",
    });

    const outfits = [
      "Our lightest GORE-TEX climbing shell",
      "Light, breathable softshell for high-output travel",
      "Ultralight sun protection",
    ];

    const outfitsResponse = await cohere.embed({
      texts: outfits,
      model: "large",
      input_type: "document",
    });

    const queryEmbedding = queryResponse.embeddings[0];
    const outfitEmbeddings = outfitsResponse.embeddings;

    const similarityScores = outfitEmbeddings.map(outfitEmbedding => cosineSimilarity(queryEmbedding, outfitEmbedding));

    const bestMatchIndex = similarityScores.indexOf(Math.max(...similarityScores));
    const bestMatchOutfit = outfits[bestMatchIndex];
    
    res.json({ message: `Best match outfit: ${bestMatchOutfit}` });
  } catch (error) {
    console.error('Error during outfit search:', error);
    res.status(500).json({ error: error.message });
  }
});

// Cosine similarity calculation
function cosineSimilarity(vecA, vecB) {
  const dotProduct = vecA.reduce((acc, curr, idx) => acc + curr * vecB[idx], 0);
  const normA = Math.sqrt(vecA.reduce((acc, curr) => acc + curr ** 2, 0));
  const normB = Math.sqrt(vecB.reduce((acc, curr) => acc + curr ** 2, 0));
  return dotProduct / (normA * normB);
}

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
