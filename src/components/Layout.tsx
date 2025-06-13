
import { ReactNode } from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-yellow-50">
      <Navigation />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
