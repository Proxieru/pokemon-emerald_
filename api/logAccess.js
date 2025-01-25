export default async function handler(req, res) {
    // Log access details
    console.log('Accessed:', {
      method: req.method,
      path: req.url,
      ip: req.headers['x-forwarded-for'] || req.socket.remoteAddress,
      userAgent: req.headers['user-agent'],
    });
  
    // Respond to the request
    res.status(200).json({ message: 'Access logged!' });
  }  