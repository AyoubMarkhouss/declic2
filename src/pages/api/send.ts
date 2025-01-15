import type { NextApiRequest, NextApiResponse } from "next";
import { EmailTemplate } from "~/components/email-template";
import { Resend } from "resend";

const resend = new Resend("re_YtH7aaGx_PVN2w8z8EuEkihXrVorVFMML");

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { firstName, lastName, email, description } = req.body;
  const { data, error } = await resend.emails.send({
    from: "email@beausoleil.ma",
    to: ["delivered@resend.dev"],
    subject: "Hello world",
    react: EmailTemplate({
      fullName: `${firstName} ${lastName}`,
      description: description,
      email: email,
    }),
  });

  if (error) {
    return res.status(400).json(error);
  }

  res.status(200).json(data);
};

export default handler;
