import clsx from "clsx";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body
        className={clsx(
          "bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-50",
          "bg-gradient-to-br from-slate-50 to-slate-200",
          "dark:from-gray-900 dark:to-slate-900"
        )}
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
