import "@/styles/globals.css";

import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import Provider from "./components/Provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Agri Bot",
  description: "Your personal bot for all agriculture related queries",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Provider>
        <body className={`font-sans ${inter.variable}`}>
          <Navbar></Navbar>
          {children}
        </body>
      </Provider>
    </html>
  );
}
