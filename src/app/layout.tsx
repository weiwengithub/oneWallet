import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "OneWallet",
  description: "Your Gateway to Future Finance",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
