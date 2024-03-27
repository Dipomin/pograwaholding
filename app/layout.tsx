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
  openGraph: {
    title: "Pograwa Holding",
    description:
      "POGRAWA HOLDING est un groupe d'entreprises qui redéfinit les standards de l'immobilier, des mines, des nouvelles technologies et des énergies renouvelables",
    images: "/pograwa_holding.png",
    siteName: "Pograwa Holding",
  },
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
