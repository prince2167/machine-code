import React from "react";
import user from "@/components/Images/user.svg";
import Image from "next/image";
import SettingIcon from "../icons/SettingIcon";
const Profile = () => {
  return (
    <div className="flex justify-between ">
      <div className="flex gap-2">
        <Image src={user} alt="user" width={40} height={40} />
        <div className="">
          <p className="text-[12px]">Welcome back,</p>
          <h3 className="text-[#404D61] text-[18px] font-[500]">Drax</h3>
        </div>
      </div>
      <button className="bg-white  w-[50px] h-[40px] flex justify-center items-center border border=[#E0E0E0] rounded-[5px]">
        <SettingIcon />
      </button>
    </div>
  );
};

export default Profile;
