import React from "react";
import DownArrowIcon from "../icons/DownArrowIcon";
import UpArrowIcon from "../icons/UpArrowIcon";

const BudgetList = () => {
  const budgets = [
    {
      title: "Total Budget",
      amount: "85,125.00",
      icon: <DownArrowIcon color="red" />,
    },
    {
      title: "Monthly Budget",
      amount: "85,125.00",
      icon: <DownArrowIcon color="white" />,
    },
    {
      title: "Weekly Budget",
      amount: "85,125.00",
      icon: <UpArrowIcon />,
    },
    {
      title: "Todays Budget",
      amount: "85,125.00",
      icon: <UpArrowIcon />,
    },
  ];
  return (
    <div className="py-[30px] px-[20px] flex sm:justify-between justify-center flex-wrap gap-[20px]  ">
      {budgets.map((budget) => (
        <div
          key={budget.title}
          className={`${
            budget.title === "Monthly Budget"
              ? "bg-[#5B6AD0] text-white"
              : "bg-[#F8F8F8]"
          }  w-[226px] h-[130px] rounded-[10px] p-[20px] gap-[15px] `}
        >
          <div className="flex gap-2">
            <span
              className={`${
                budget.title === "Monthly Budget"
                  ? "text-white"
                  : "text-[#757D8A]"
              }  text-[16px] font-[400] `}
            >
              {budget.title}
            </span>
            <span>{budget.icon}</span>
          </div>
          <h1
            className={`${
              budget.title === "Monthly Budget"
                ? "text-white"
                : "text-[#757D8A]"
            } text-[#404D61] text-[22px] font-[700]`}
          >
            ${budget.amount}
          </h1>
        </div>
      ))}
    </div>
  );
};

export default BudgetList;
