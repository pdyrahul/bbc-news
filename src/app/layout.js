import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import MockData from "../../public/data/mock.json"
export const metadata = {
  title: "BBC News – Frontend POC",
  description: "BBC News homepage UI POC built with Next.js and Bootstrap",
};

export default function RootLayout({ children }) {
  const data  = MockData;
  return (
    <html lang="en">
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />

        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css"
          rel="stylesheet"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />

        <link rel="stylesheet" href="/css/novacept.css" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>

      <body>
        <Header data={data.navigation} />
        {children}
        <Footer data={data.footer}/>
      </body>
    </html>
  );
}
