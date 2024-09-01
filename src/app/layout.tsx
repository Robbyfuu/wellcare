"use client";
import "../styles/index.css";
import { Roboto, Oswald } from "next/font/google";
import { Provider } from "react-redux";
import store from "@/redux/store";

const body = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
  variable: "--eg-body-font-family",
});

const heading = Oswald({
  weight: ["200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--eg-heading-font-family",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta
          name="description"
          content="Wellcall Chile - Empresa de distribución de toxinas botulínicas y rellenos dérmicos en Chile."
        />
        <link rel="icon" href="/favicon.png" type="image/png" />
      </head>
      <body
        suppressHydrationWarning={true}
        className={` ${body.variable} ${heading.variable}`}
      >
        <Provider store={store}>{children}</Provider>
      </body>
    </html>
  );
}
