export default function handler(req, res) {
  if (req.method === "POST") {
    let { user, pass } = req.body;
    if (
      user === process.env.development_user &&
      pass === process.env.development_pass
    ) {
      res.status(200).json({ message: "ok" });
    } else {
      res.status(401).json({});
    }
  } else {
    res.status(401).json({});
  }
}
