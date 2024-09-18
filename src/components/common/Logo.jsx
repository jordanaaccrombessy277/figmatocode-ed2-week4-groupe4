import React from "react";
import PlusIcon from "../../assets/plus.svg";

const Logo = () => {
  return (
    <div className="relative w-fit">
      <h3 className="text-4xl font-semibold text-blue-primary">Klinik 24.</h3>
      <img
        src={PlusIcon}
        alt="Medical Icon"
        className="inline-block absolute -top-6 -right-10"
      />
    </div>
  );
};

export default Logo;
