import ManageSubscriptionButton from "./ManageSubscriptionButton";
import {
  getSession,
  getUserDetails,
  getSubscription,
} from "@/app/supabase-server";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { redirect } from "next/navigation";
import { ReactNode } from "react";

export async function SubscriptionCheck() {
  const [session, userDetails, subscription] = await Promise.all([
    getSession(),
    getUserDetails(),
    getSubscription(),
  ]);

  const user = session?.user;

  if (!session) {
    return redirect("/signin");
  }

  const subscriptionPrice =
    subscription &&
    new Intl.NumberFormat("da-DK", {
      style: "currency",
      currency: subscription?.prices?.currency!,
      minimumFractionDigits: 0,
    }).format((subscription?.prices?.unit_amount || 0) / 100);

  return (
    <section className="mb-32 bg-black">
      <div className="max-w-6xl px-4 py-8 mx-auto sm:px-6 sm:pt-24 lg:px-8">
        <div className="sm:align-center sm:flex sm:flex-col">
          <h1 className="text-4xl font-extrabold text-white sm:text-center sm:text-6xl">
            Konto
          </h1>
          <p className="max-w-2xl m-auto mt-5 text-xl text-zinc-200 sm:text-center sm:text-2xl">
            Hei {userDetails?.username ?? "dig"} 🐼 ret kontoindstillinger her
            ✅
          </p>
        </div>
      </div>
      <div className="p-4">
        {/* //---------------------------------- */}

        <Card
          title="Medlemskab"
          description={
            subscription
              ? `Du er tilknyttet: \n ${subscription?.prices?.products?.name}.`
              : "Du har ikke valgt et medlemskab af Frigear endnu."
          }
          footer={<ManageSubscriptionButton session={session} />}
        >
          <div className="mt-8 mb-4 text-xl font-semibold">
            {subscription ? (
              `${subscriptionPrice}/${subscription?.prices?.interval}`
            ) : (
              <Button variant="slim" disabled={false}>
                <Link href="/pricing">MEDLEMSKABER</Link>
              </Button>
            )}
          </div>
        </Card>
      </div>

      {/* //---------------------------------- */}
    </section>
  );
}

interface Props {
  title: string;
  description?: string;
  footer?: ReactNode;
  children: ReactNode;
}

function Card({ title, description, footer, children }: Props) {
  return (
    <div className="w-full max-w-3xl m-auto my-8 border rounded-md p border-zinc-700">
      <div className="px-5 py-4">
        <h3 className="mb-1 text-2xl font-medium">{title}</h3>
        <p className="text-zinc-300">{description}</p>
        {children}
      </div>
      <div className="p-4 border-t rounded-b-md border-zinc-700 bg-zinc-900 text-zinc-500">
        {footer}
      </div>
    </div>
  );
}
