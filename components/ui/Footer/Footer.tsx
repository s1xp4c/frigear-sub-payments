import GitHub from "@/components/icons/GitHub";
import Logo from "@/components/icons/Logo";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="mx-auto max-w-[1920px] px-6 bg-zinc-900">
      <div className="grid grid-cols-1 gap-2 py-6 text-white transition-colors duration-150 border-b md:grid-cols-2 border-zinc-600 bg-zinc-900">
        <div className="mb-2">
          <Link
            href="/"
            className="flex items-center flex-initial font-bold md:mr-24"
          >
            <span className="mr-3 border rounded-full border-zinc-700 ">
              <Logo />
            </span>
            <span className="text-indigo-500 transition duration-150 ease-in-out hover:text-zinc-200">
              FRIGEAR
            </span>
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:justify-end">
          <div className="col-span-1  ">
            <ul className="flex flex-col flex-initial md:flex-1 ">
              <li className="py-1 md:py-0 md:pb-4">
                <Link
                  href="/"
                  className="text-white transition duration-150 ease-in-out hover:text-indigo-500"
                >
                  INFO
                </Link>
              </li>
              <li className="py-1 md:py-0 md:pb-4">
                <Link
                  href="/"
                  className="text-white transition duration-150 ease-in-out hover:text-indigo-500"
                >
                  SUPPORT
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-span-1 ">
            <ul className="flex flex-col flex-initial md:flex-1 ">
              <li className="py-1 md:py-0 md:pb-4">
                <Link
                  href="/"
                  className="text-white transition duration-150 ease-in-out hover:text-indigo-500"
                >
                  COOKIES
                </Link>
              </li>
              <li className="py-1 md:py-0 md:pb-4">
                <Link
                  href="/"
                  className="text-white transition duration-150 ease-in-out hover:text-indigo-500"
                >
                  SIKKERHED
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-between py-6 space-y-3 md:flex-row bg-zinc-900">
        <div>
          <span>
            &copy; {new Date().getFullYear()} Frigear ★ CVR-nr: 44353261
          </span>
        </div>
        <div className="flex items-center">
          <div className="flex items-center mr-4">
            <a
              aria-label="Github Repository"
              href="https://github.com/s1xp4c/frigear-sub-payments"
            >
              <GitHub />
            </a>
          </div>
          <span className="text-white">App udviklet af</span>
          <a
            href="https://block-folio.netlify.app/"
            aria-label="Portfolio link"
          >
            <Image
              src="/six_logo.png"
              width={25}
              height={25}
              alt="Blockstarter Logo"
              className="inline-block mx-3 text-white"
            />
            <span className="text-white">s1x</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
