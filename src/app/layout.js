import "./globals.css";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import Sidebar from "./components/common/Sidebar";
import { CartProvider } from "./components/context/CartContext";
import Profile from "./components/common/Profile";

export const metadata = {
  title: "Drinkit",
  description: "Drinkit Online Liquor Shop",
  icons: {
    icon: "/drinkitfavicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-full flex flex-col">
        <CartProvider>
          <Header />
          <Sidebar />
          <Profile />
          {children}
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}