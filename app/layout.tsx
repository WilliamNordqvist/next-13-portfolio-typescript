import { Background } from "@/components/background/background";
import "./globals.css";
import { Exo } from "@next/font/google";
import { AnalyticsWrapper } from "@/components/analytics/analytics";

const ubuntu = Exo({
  weight: ["100", "200", "300", "400", "500"],
});
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
          <AnalyticsWrapper/>
          </Background>
      </body>
    </html>
  );
}
