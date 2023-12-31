import React from "react";
import SidePanel from "../../components/site-manager/sidepanel";

const Layout = ({ children }) => {
  return (
    <>
      <div className="flex w-full h-full gap-4">
        <SidePanel />
        <div className="grow shrink flex justify-start py-2 h-screen">
          {children}
        </div>
      </div>
    </>
  );
};

export default Layout;
