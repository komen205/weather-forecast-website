import Document, { Head, Html, Main, NextScript } from "next/document";
export default class CustomDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <link rel="manifest" href="/manifest.json" />
          <meta name="theme-color" content="#317EFB" />
          <link
          href="/icons/favicon-16x16.png"
          rel="icon"
          type="image/png"
          sizes="16x16"
        />
        <link
          href="/icons/favicon-32x32.png"
          rel="icon"
          type="image/png"
          sizes="32x32"
        />
        <link rel="apple-touch-icon" href="/apple-icon.png"></link>
        </Head>
        <body>
          <video loop autoPlay muted id="videoBackground">
            <source src="video.mp4" type="video/mp4"></source>
          </video>
          <Main />

          <NextScript />
        </body>
      </Html>
    );
  }
}
