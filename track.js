export default async function handler(req, res) {
  const { code } = req.query;
  
  if (!code) {
    return res.status(400).json({ error: 'Code required' });
  }
  
  try {
    const response = await fetch(`https://ext1.buyhatke.com/spend-apis/tracking/trackReferrals/${code}`);
    const data = await response.json();
    
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
