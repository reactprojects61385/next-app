import Navbar from "./navbar";
import Footer from "./footer";

export default function Layout({ children, font }) {
  return (
    <>
      <Navbar />
      <main className={font}>{children}</main>
      <Footer />
    </>
  );
}
