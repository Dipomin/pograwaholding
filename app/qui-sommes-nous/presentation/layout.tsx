import { Metadata } from "next";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "Pograwa Holding • Présentation",
  description: "Société immobilière en Côte d'Ivoire",
  openGraph: {
    title: "Pograwa Holding",
    description: "Pograwa Holding est une société immobilière en Côte d'Ivoire",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={roboto.className}>
        <main>{children}</main>
      </body>
    </html>
  );
}
