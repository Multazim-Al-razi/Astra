import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { MobileNav } from '@/components/layout/MobileNav';
import { CartProvider } from '@/context/CartContext';
import { Toaster } from "@/components/ui/sonner";
import { ComparisonModal } from "@/components/product/ComparisonModal";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata = {
    title: "Astrabyte | Premium Electronics Store",
    description: "Your one-stop shop for the latest gadgets and verified tech.",
};

export default async function LocaleLayout({
    children,
    params
}: {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    // Ensure that the incoming `locale` is valid
    if (!routing.locales.includes(locale as any)) {
        notFound();
    }

    // Providing all messages to the client
    // side is the easiest way to get started
    const messages = await getMessages();

    return (
        <html lang={locale}>
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}>
                <NextIntlClientProvider messages={messages}>
                    <CartProvider>
                        <Header />
                        <main className="flex-1">
                            {children}
                        </main>
                        <Footer />
                        <MobileNav />
                        <Toaster />
                        <ComparisonModal />
                    </CartProvider>
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
