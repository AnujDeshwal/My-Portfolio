import React, { useEffect, useRef, useState } from "react";
import HeaderElements from "./HeaderElements";
import CloseIcon from "@mui/icons-material/Close";
import { setTheMobile, unsetMobile } from "../../redux/reducers/misc.reducer";
import { useDispatch, useSelector } from "react-redux";
const Drawer = () => {
  const { isMobile } = useSelector((state) => state.misc);
  const [prop, setProp] = useState("");
  console.log(isMobile);
  const dispatch = useDispatch();
  const drawerRef = useRef();
  const [changes, setChanges] = useState(" translate-x-[50vw]");
 
  useEffect(() => {
    if (isMobile) {
      setChanges(" translate-x-0 ");
    } else setChanges("translate-x-[50vw] ");
  }, [isMobile]);
  const handleOutSideClick = (e) => {
    if (drawerRef.current && !drawerRef.current.contains(e.target)) {
      dispatch(unsetMobile());
    }
  };
  useEffect(() => {
    if (isMobile) {
      document.addEventListener("mousedown", handleOutSideClick);
    } else {
      document.removeEventListener("mousedown", handleOutSideClick);
    }
    return () => {
      document.removeEventListener("mousedown", handleOutSideClick);
    };
  }, [isMobile]);
  return (
    <>
      <div
        className={`flex absolute top-0   bg-opacity-50 ${
          isMobile ? "bg-black" : "hidden"
        } w-screen h-screen `}
      ></div>
      <div
        ref={drawerRef}
        className={` ${
          isMobile ? "" : "hidden"
        }  ${prop} flex gap-[5em] text-[1.2em] justify-center items-center flex-col absolute top-0 right-0  ${changes}  transition duration-1000 ease-in-out  w-[50vw] sm:w-[45vw] min-h-screen bg-white`}
      >
        <div
          onClick={(e) => dispatch(unsetMobile())}
          className="absolute top-12 cursor-pointer  right-8"
        >
          <CloseIcon sx={{ fontSize: "2rem" }} />
        </div>
        <HeaderElements />
      </div>
    </>
  );
};
export default Drawer;
