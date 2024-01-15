import { IoIosSearch } from "react-icons/io";

const Searchbar = () => {
  return (
    <div className=" h-[36px] min-w-[304px] w-[550px] flex justify-between items-center bg-[#fff] px-[16px] text-[14px] rounded-sm shadow-xl">
      <input
        className="border border-none outline-none w-full font-normal"
        placeholder="Search for products, brands and more"
      />
      <span className="text-[#2874f0] font-bold">
        <IoIosSearch size="20" />
      </span>
    </div>
  );
};

export default Searchbar;
