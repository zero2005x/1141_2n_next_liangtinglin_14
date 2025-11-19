import { Outlet } from "react-router-dom";
import NavbarShop_14 from "@/components/midterm/NavbarShop_14";
import Wrapper from "@/assets/wrappers/midterm/Shop_14";

const MidtermLayoutPage_14 = () => {
  return (
    <Wrapper>
      <div className="midterm">
        <NavbarShop_14 />
        <Outlet />
      </div>
    </Wrapper>
  );
};

export default MidtermLayoutPage_14;
