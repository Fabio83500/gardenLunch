import "@/styles/globals.css";
import Layout from "../components/Layout/layout";
import { Poppins } from "next/font/google";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], // Ajoute les poids que tu veux
  variable: "--font-poppins",
});
export default function App({ Component, pageProps }) {
 
  return (
    <Layout >
     
     <div className={poppins.variable}>
     <Component {...pageProps} />

     </div>
    </Layout>
  );
}
