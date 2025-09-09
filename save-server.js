import express from 'express';
import fs from 'fs';
import path from 'path';
import cors from 'cors';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json({ limit: '10mb' }));

app.post('/api/save-portfolio-data', (req, res) => {
  const { content } = req.body;
  
  if (!content) {
    return res.status(400).json({ error: 'No content provided' });
  }
  
  const filePath = path.join(__dirname, 'src', 'data', 'portfolioData.ts');
  
  try {
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log('✅ Portfolio data saved successfully');
    res.json({ success: true });
  } catch (error) {
    console.error('❌ Error saving file:', error);
    res.status(500).json({ error: 'Failed to save file' });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Save server running on http://localhost:${PORT}`);
  console.log('📝 Ready to save portfolio data...');
});