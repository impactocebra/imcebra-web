import type { Metadata } from "next";
import { Anton } from "next/font/google";
import "./globals.css";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
});

export const metadata: Metadata = {
  title: "ImCebra SpA | Producción Gráfica Inteligente y de Alto Impacto",
  description: "Comercialización y gestión de producción gráfica corporativa, material POP, merchandising y soluciones a medida en Chile.",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon.png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`scroll-smooth ${anton.variable}`}>
      <body className="antialiased bg-[#050505] text-white selection:bg-[#FF007F] selection:text-white">
        {children}
      </body>
    </html>
  );
}
