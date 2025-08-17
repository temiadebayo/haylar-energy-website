import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HAYLAR Energy Services Ltd - Regulatory Compliance Technology & Risk Management",
  description: "Leading provider of regulatory compliance technology, risk management and procurement services for Nigeria's Oil & Gas, Power and Finance sectors. NovaCore platform for real-time compliance management.",
  keywords: "regulatory compliance, risk management, procurement services, oil and gas, power sector, finance sector, NovaCore platform, compliance technology, Nigeria, regulatory technology",
  authors: [{ name: "HAYLAR Energy Services Ltd" }],
  openGraph: {
    title: "HAYLAR Energy Services Ltd - Regulatory Compliance Technology & Risk Management",
    description: "Leading provider of regulatory compliance technology, risk management and procurement services for Nigeria's Oil & Gas, Power and Finance sectors.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
