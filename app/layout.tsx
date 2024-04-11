import "./globals.css";

import { AnalyticsWrapper } from "@/components/analytics/analytics";
import { Background } from "@/components/background/background";
import { Ubuntu } from "next/font/google";

const ubuntu = Ubuntu({ weight: ["300", "400", "500"], subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className={ubuntu.className}>
        <Background>
          {children}
          <AnalyticsWrapper />
        </Background>
      </body>
    </html>
  );
}
