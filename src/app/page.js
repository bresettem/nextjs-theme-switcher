import FixedNavbar from "@/app/components/FixedNavbar";
import Footer from "@/app/components/footer/Footer";
import DarkModeButton from "@/app/components/DarkModeButton";
export default function Home() {
  return (
    <>
      <FixedNavbar />
      <DarkModeButton />
      <Footer />
    </>
  );
}
