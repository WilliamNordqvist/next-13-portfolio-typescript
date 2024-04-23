import "./globals.css";

import { AnalyticsWrapper } from "@/components/analytics/analytics";
import { BackgroundBeams } from "@/components/background/backgroundNew";
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
        <BackgroundBeams>
          <div className="w-full h-full overflow-scroll">{children}</div>
          <AnalyticsWrapper />
        </BackgroundBeams>
      </body>
    </html>
  );
}
