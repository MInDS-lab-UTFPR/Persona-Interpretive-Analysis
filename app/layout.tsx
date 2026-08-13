import type { Metadata } from "next";
import "./globals.css";

const fullTitle =
  "Persona Prompting in Multimodal Urban Perception: Descriptive Convergence and Interpretive Variation";

export const metadata: Metadata = {
  metadataBase: new URL(
    "https://neemiasbsilva.github.io/Persona-Interpretive-Analysis-Portfolio/",
  ),
  title: fullTitle,
  description:
    "A research project on how persona prompting changes interpretive framing more than descriptive grounding in multimodal urban perception.",
  applicationName: "Persona Prompting in Multimodal Urban Perception",
  authors: [
    { name: "Neemias da Silva" },
    { name: "Matt Ratto" },
    { name: "Myriam Delgado" },
    { name: "Rodrigo Minetto" },
    { name: "Daniel Silver" },
    { name: "Thiago H Silva" },
  ],
  keywords: [
    "persona prompting",
    "multimodal LLM",
    "urban perception",
    "interpretive variation",
    "synthetic personas",
  ],
  icons: {
    icon: "favicon.png",
    shortcut: "favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
