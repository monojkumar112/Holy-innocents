import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/master.css";
import "./styles/header.css";
import "./styles/footer.css";
import "./styles/style.css";
import "./styles/responsive.css";
import "./styles/page-builder-sections.css";
import "./globals.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import ClientInit from "./components/ClientInit";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ClientInit />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
