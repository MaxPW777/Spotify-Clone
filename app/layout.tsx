import type { Metadata } from "next";
import "./globals.css";
import SupabaseProvider from "@/providers/SupabaseProvider";

export const metadata: Metadata = {
  title: "Spotify Clone",
  description: "By Ludo and Max",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SupabaseProvider>
          {children}
        </SupabaseProvider>
      </body>
    </html>
  );
}
