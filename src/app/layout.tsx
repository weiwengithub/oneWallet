import type { Metadata } from "next";
import Toaster from "@/components/ui/Toaster";

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
      <body className="antialiased">
        {children}
        {/* 全局 Toaster：位于最底部，任何地方调用 toast 都会显示 */}
        <Toaster />
      </body>
    </html>
  );
}
