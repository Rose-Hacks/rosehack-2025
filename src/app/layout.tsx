/* eslint-disable new-cap */
import "./globals.css";
import { Solway, Inclusive_Sans } from "next/font/google";
import Providers from "@/components/providers";
import { Toaster } from "react-hot-toast";
import { getServerSession } from "next-auth";
import { options } from "@/utils/auth";

const solway = Solway({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500"],
  variable: "--font-rosehack-main",
});

const inclusive_sans = Inclusive_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
  variable: "--font-rosehack-alt",
});

type Props = {
  children: React.ReactNode;
};

const RootLayout = async ({ children }: Props) => {
  const session = await getServerSession(options);

  return (
    <html lang="en" className="h-full">
      <body
        className={`${solway.variable} ${inclusive_sans.variable} flex h-full flex-col bg-rosehack-blue-100 lg:flex-row`}
      >
        <div className="flex h-full w-full">
          <Providers session={session}>
            <Toaster />
            {children}
          </Providers>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
