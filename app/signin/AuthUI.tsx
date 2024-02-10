"use client";

import { useSupabase } from "@/app/supabase-provider";
import { getURL } from "@/utils/helpers";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
// import { Turnstile } from "@marsidev/react-turnstile";
// import { useState } from "react";

export default function AuthUI() {
  // const turnstileSiteKey = process.env.TURNSTILE_SITE_KEY;
  const { supabase } = useSupabase();
  // const [captchaToken, setCaptchaToken] = useState<string>();

  return (
    <div className="flex flex-col space-y-4">
      <Auth
        supabaseClient={supabase}
        providers={["github", "google"]}
        redirectTo={`${getURL()}/auth/callback`}
        magicLink={true}
        appearance={{
          theme: ThemeSupa,
          variables: {
            default: {
              colors: {
                brand: "#4338ca",
                brandAccent: "#52525b",
              },
            },
          },
        }}
        localization={{
          variables: {
            sign_in: {
              email_label: "Email adresse",
              email_input_placeholder: "Din awesome email her...",
              password_label: "Dit password",
              password_input_placeholder: "Mega svært Frigear password...",
              button_label: "LOG IND",
              loading_button_label: "Dobbelttjekker lige...",
              social_provider_text: "⬅ Log ind",
              link_text: "Allerede oprettet? Log ind her!",
            },
            sign_up: {
              email_label: "Email adresse",
              email_input_placeholder: "Din awesome email her... ",
              password_label: "Dit password",
              password_input_placeholder: "Mega svært Frigear password... ",
              button_label: "OPRET BRUGER",
              loading_button_label: "Dobbelttjekker lige...",
              social_provider_text: "Opret konto med ",
              link_text: "IKKE oprettet endnu? Opret her!",
            },
            magic_link: {
              email_input_label: "Email adresse",
              email_input_placeholder: "Din awesome email her... ",
              button_label: "FÅ MAGIC LINK",
              loading_button_label: "Sender magisk link...",
              link_text: "Log ind med Magic link? Få et her!",
              confirmation_text: "BUM! - Tjek din email for Magic link",
            },
            forgotten_password: {
              email_label: "Email adresse",
              email_input_placeholder: "Din awesome email her...",
              button_label: "NULSTIL PASSWORD",
              loading_button_label: "Sender nulstil info...",
              link_text: "Har du glemt dit password?",
              confirmation_text:
                "BUM! - Tjek din email for Nulstil password link",
            },
            update_password: {
              password_label: "Nyt password",
              password_input_placeholder: "Dit nye vilde PW her...",
              button_label: "OPDATÉR PASSWORD",
              loading_button_label: "Opdaterer password...",
              confirmation_text: "Whoosh! Dit password er opdateret",
            },
          },
        }}
        theme="dark"
      >
        {/* <Turnstile
          id="Auth"
          siteKey={turnstileSiteKey as string}
          onSuccess={(token) => {
            setCaptchaToken(token);
          }}
        /> */}
      </Auth>
    </div>
  );
}
