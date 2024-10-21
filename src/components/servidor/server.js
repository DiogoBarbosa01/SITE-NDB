const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 5000;

app.use(express.json());

app.post('/send-message', async (req, res) => {
  const { phoneNumber, message } = req.body;

  const instanceId = 'YOUR_INSTANCE_ID'; // Substitua com seu ID do UltraMsg
  const token = 'YOUR_TOKEN'; // Substitua com seu token do UltraMsg

  try {
    const response = await axios.post(`https://api.ultramsg.com/${instanceId}/messages/chat`, {
      token: token,
      to: phoneNumber,
      body: message
    });

    res.status(200).json({ success: true, data: response.data });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
