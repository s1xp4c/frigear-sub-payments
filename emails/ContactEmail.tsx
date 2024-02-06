import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Tailwind,
  Preview,
  Text,
  Img,
  Hr,
} from "@react-email/components";
import * as React from "react";

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

interface ContactEmailProps {
  name: string;
  emailAddress: string;
  phoneNumber: string;
  subject: string;
  content: string;
}

const ContactEmail = ({
  name,
  emailAddress,
  subject,
  content,
  phoneNumber,
}: ContactEmailProps) => {
  const previewText = `Mail fra ${name}`;
  <Html>
    <Head />
    <Preview>{previewText}</Preview>
    <Tailwind>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>
            Mail fra {name} med emne: {subject}
          </Heading>
          <Img
            src={`${baseUrl}/six-logo.png`}
            width="49"
            height="21"
            alt="Stripe"
          />
          <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />
          <Text style={{ ...text, marginBottom: "14px" }}>{content}</Text>
          <Text style={footer}>
            Sendt fra email: {emailAddress} Fon: +45 {phoneNumber}
          </Text>
        </Container>
      </Body>
    </Tailwind>
  </Html>;
};

export default ContactEmail;

const main = {
  backgroundColor: "purple",
};

const container = {
  paddingLeft: "12px",
  paddingRight: "12px",
  margin: "0 auto",
};

const h1 = {
  color: "white",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "24px",
  fontWeight: "bold",
  margin: "40px 0",
  padding: "0",
};

// const link = {
//   color: "white",
//   fontFamily:
//     "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
//   fontSize: "14px",
//   textDecoration: "underline",
// };

const text = {
  color: "#fff",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "14px",
  margin: "24px 0",
};

const footer = {
  color: "darkblue",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "12px",
  lineHeight: "22px",
  marginTop: "12px",
  marginBottom: "24px",
};

// const code = {
//   display: "inline-block",
//   padding: "16px 4.5%",
//   width: "90.5%",
//   backgroundColor: "#f4f4f4",
//   borderRadius: "5px",
//   border: "1px solid #eee",
//   color: "#333",
// };
