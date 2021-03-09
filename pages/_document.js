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
