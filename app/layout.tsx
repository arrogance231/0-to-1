import Script from "next/script";
import NavBar from "../components/NavBar";
import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en'>
      <head>
        <Script src='/live2dcubismcore.min.js' strategy='beforeInteractive' />
      </head>
      <body>{children}</body>
    </html>
  );
}
