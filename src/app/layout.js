
import "./globals.css";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
//import Card from "./components/home-components/Card";
import Sidebar from "./components/common/Sidebar";


export const metadata = {
  title: "Drinkit",
  description: "Drinkit Online Liquor Shop",
  icons: {
    icon: "/drinkitfavicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
    >
      <body className="min-h-full flex flex-col">
        <Header />
         <Sidebar />
        {children}
       
        <Footer />
      </body>
    </html>
  );
}
