import type { Metadata } from "next";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { neobrutalism } from "@clerk/themes";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Pixalix",
  description: "AI photo editor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ClerkProvider
        appearance={{
          baseTheme: neobrutalism,
          layout: {
            socialButtonsPlacement: "bottom",
          },
        }}
      >
        <Head>
          <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
        </Head>
        <body>{children}</body>
      </ClerkProvider>
    </html>
  );
}
