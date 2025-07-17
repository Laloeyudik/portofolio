import "../styles/globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/blocks/Navbar";
import Footer from "@/components/blocks/Footer";
import Container from "@/components/ui/Container";
import { Space_Grotesk, Inter } from "next/font/google";


const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lalu Wahyudi",
  description:
    "Hallo, I'm Lalu Wahyudi, a Full Stack Developer from Indonesia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} antialiased`}
      >
        <Container className="py-0">
          <Navbar />
          {children}
          <Footer />
        </Container>
      </body>
    </html>
  );
}
