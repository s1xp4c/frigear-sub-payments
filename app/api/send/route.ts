import { Resend } from "resend";
import ContactEmail from "@/components/emails/ContactEmail";
// import * as z from "zod";
import { NextResponse } from "next/server";

// const sendRouteSchema = z.object({
//   name: z.string().min(3),
//   emailAddress: z.string().email(),
//   phoneNumber: z.string().min(8),
//   subject: z.string().min(2),
//   content: z.string().min(2),
// });

export async function POST(req: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const contactEmail = process.env.KONTAKT_EMAIL || "";
  const { name, emailAddress, subject, phoneNumber, content } =
    await req.json();

  try {
    await resend.emails.send({
      from: `Kontaktform ${name} <${contactEmail}>`,
      to: [contactEmail],
      subject: subject,
      reply_to: emailAddress,
      react: ContactEmail({
        name,
        emailAddress,
        subject,
        phoneNumber,
        content,
      }) as React.ReactElement | any | string,
    });
    return NextResponse.json(
      {
        status: "Ok",
      },
      {
        status: 200,
      }
    );
  } catch (e: unknown) {
    if (e instanceof Error) {
      console.log(`Failed to send email: ${e.message}`);
    }
    return NextResponse.json(
      {
        error: "Internal server error.",
      },
      {
        status: 500,
      }
    );
  }
}
