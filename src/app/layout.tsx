/* eslint-disable new-cap */
import "./globals.css";
import { Montserrat } from "next/font/google";
import Providers from "@/components/providers";
import { Toaster } from "react-hot-toast";
import { getServerSession } from "next-auth";
import { options } from "@/utils/auth";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});

type Props = {
  children: React.ReactNode;
};

const RootLayout = async ({ children }: Props) => {
  const session = await getServerSession(options);

  return (
    <html lang="en" className="h-full">
      <body
        className={`${montserrat.className} flex h-full flex-col lg:flex-row`}
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
