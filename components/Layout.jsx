import Header from "./Header";
import Footer from "./Footer";
import Navigation from "./Navigation";

export default function Layout({ children }) {
  return (
    <div className="overflow-x-hidden">
      <Navigation />
      <Header />
      {children}
      <Footer />
    </div>
  );
}
