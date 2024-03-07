import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/clientComponents/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Van Precilla Portfolio",
  description: "van latest web developer portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <NavBar />
        {children}
      </body>
    </html>
  );
}
