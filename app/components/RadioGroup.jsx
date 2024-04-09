"use client";
const RadioGroup = ({ name, items, value, onChange }) => {
  return (
    <>
      {items.map((item) => (
        <div key={item.value}>
          <label
            htmlFor={name + item.value}
            className={`text-[13px] leading-[13px]  font-semibold border-gray-500 border  rounded-[50px] py-[13px] px-[6px] mt-5 w-[150px] flex items-center gap-3 text-[#121420] hover:bg-[#FA5F4B] hover:cursor-pointer hover:text-white transition-all
              ${
                value === item.value
                  ? "bg-[#FA5F4B] border border-[#FA5F48] text-white"
                  : ""
              } `}
          >
            <input
              name={name}
              type="radio"
              value={item.value}
              id={name + item.value}
              checked={value === item.value}
              onChange={(e) => onChange(e.target.value)}
              className="ms-3 checked:bg-[#FA5F4B] accent-[#FA5F4B] h-[26px] w-[26px]"
            />
            <span> {item.label}</span>
          </label>
        </div>
      ))}
    </>
  );
};

export default RadioGroup;
