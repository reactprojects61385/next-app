export default function handler(req, res) {
  const { pid } = req.query;
  const responseText = `Post: ${pid}`;

  // res.end(responseText);

  res.status(200).json({
    text: responseText,
  });

  // res.redirect(307, "/");
}
