import Header from "../components/header";
import Footer from "../components/footer";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <Header />
      <Outlet /> {/* сюда вставляются страницы */}
      <Footer />
    </>
  );
}

export default Layout;