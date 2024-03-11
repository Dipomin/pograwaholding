import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Menu from "@/components/menu";
import Footer from "@/components/footer";
import { Toaster } from "@/components/ui/toaster";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "Pograwa Holding",
  description: "L'immobilier c'est notre passion",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={roboto.className}>
        <main>{children}</main>
        <Toaster />
      </body>
    </html>
  );
}
