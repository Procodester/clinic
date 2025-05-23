import Header from "@/components/sections/Header";
import WhatsappMe from "@/components/features/WhatsappMe";
import Footer from "@/components/sections/Footer";
import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";




const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'], // Add or remove weights as needed
  display: 'swap',
  variable: '--font-playfair', // for Tailwind integration
})


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "H&A Clinic - Health  & Arthritis Clinic",
  description: "Welcome to Health  & Arthritis Clinic, your trusted healthcare provider offering comprehensive medical services. Our clinic specializes in a of treatments and services, including general health check-ups, specialist consultations, preventive care, and advanced medical procedures. With a team of experienced healthcare professionals, we are dedicated to delivering personalized care to help you achieve optimal health. Conveniently located in [Location], our clinic combines state-of-the-art facilities with compassionate care. Schedule your appointment today and experience quality healthcare at its best.",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${geistSans.variable} ${geistMono.variable} antialiased relative min-h-screen flex flex-col`}
      >
        <Header />

        {children}
       

        {/* Footer */}
        <Footer />
        <WhatsappMe />
      </body>
    </html>
  );
}
