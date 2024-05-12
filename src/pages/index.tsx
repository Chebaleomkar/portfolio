import Image from "next/image";
import { Inter } from "next/font/google";
import Link  from "next/link";
import { ModeToggle } from "@/components/ui/ModeToggle";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Main from "@/components/Main";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
    <Header />
   
   <Main />
   <Footer />
  </>
  );
}
