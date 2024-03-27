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
  keywords:
    "immobilier, technologie, ascensseur, terrain, pograwa holding, mines, extraction minière, énergies renouvelables",
  applicationName: "Pograwa Holding",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/icon.png",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pograwa Holding",
    description:
      "POGRAWA HOLDING est un groupe d'entreprises qui redéfinit les standards de l'immobilier, des mines, des nouvelles technologies et des énergies renouvelables",
    siteId: "",
    creator: "",
    creatorId: "",
    images: ["https://www.pograwaholding.com/pograwa_holding.png"], // Must be an absolute URL
  },
  openGraph: {
    title: "Pograwa Holding",
    description:
      "POGRAWA HOLDING est un groupe d'entreprises qui redéfinit les standards de l'immobilier, des mines, des nouvelles technologies et des énergies renouvelables",
    url: "https://www.pograwaholding.com",
    images: {
      url: "/pograwa_holding.png",
    },
    locale: "fr_FR",
    siteName: "Pograwa Holding",
    type: "website",
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
