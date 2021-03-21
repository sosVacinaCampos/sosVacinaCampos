// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async (req, res) => {
  const { body } = req;

  if (!Object.keys(body).length || !body || !body.number || !body.message) {
    return res.status(401).json({ error: 'Bad request' });
  }

  const whatsapp = await req.wpp;

  const number = `${body.number.replace('+', '')}@c.us`;

  whatsapp.sendText(number, 'mensagem legal');

  return res.status(200).json({ success: 'Sending message' });
};
