import type { Metadata } from "next";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import {  neobrutalism } from "@clerk/themes";

export const metadata: Metadata = {
  title: "Ailume",
  description: "AI photo editor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
    appearance={{
      baseTheme: neobrutalism,
      layout: {
        socialButtonsPlacement: "bottom"
      }
    }
    }>
      <head>
        <link rel="shortcut icon" href="/logoipsum-296.svg" type="image/x-icon" />
      </head>
      <html lang="en">
        <body>{children}</body>
      </html>
    </ClerkProvider>
  );
}
