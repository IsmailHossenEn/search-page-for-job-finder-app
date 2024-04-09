"use client";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { MdOutlineSearch } from "react-icons/md";
import RadioGroup from "./components/RadioGroup";
import {
  Design,
  Engineering,
  Management,
  Marketing,
  Operations,
  Other,
  Product,
  Sales,
} from "./components/Checkboxes";
import { Locations } from "./components/Joblocation";

export default function Home() {
  const [searchInput, setSearchInput] = useState("");
  const items = [
    { value: "Engineering", label: "Engineering" },
    { value: "Design", label: "Design" },
    { value: "Sales", label: "Sales" },
    { value: "Product", label: "Product" },
    { value: "Operations", label: "Operations" },
    { value: "Marketing", label: "Marketing" },
    { value: "Management", label: "Management" },
    { value: "Other", label: "Other" },
  ];
  const locations = [
    { value: "Onsite", label: "Onsite" },
    { value: "Onsite or remote", label: "Onsite or remote" },
    { value: "Remote", label: "Remote" },
  ];

  const [value, setValue] = useState(null);

  return (
    <form className="px-[50px] py-[50px] h-screen w-screen">
      <div className="border-b-2 border-[#121420] border-opacity-25">
        <h1 className="font-semibold text-[24px] leading-[34px]">
          New saved search
        </h1>
        <p className="my-[16px] font-medium text-[18px] leading-[28px] text-[#121420e0]">
          Build a saved search to define the types of candidates you're looking
          for.
        </p>
      </div>
      <div>
        <div className="flex flex-col ">
          <label
            htmlFor="input"
            className="text-[#121420] font-semibold text-[16px] leading-[28px] mt-[20px] pb-[10px]"
          >
            Search name
          </label>
          <input
            type="text"
            id="input"
            placeholder="e.g Job title"
            className=" focus:border-[black] border border-[#595B63] text-[13px] leading-[13px] outline-none px-5 py-4 rounded-md w-[700px]"
          />
        </div>

        <h1 className="text-[16px] leading-7 text-[#121420] pt-[15px] font-semibold">
          Broadly speaking, what function are you hiring for?
        </h1>

        <div className="grid grid-cols-6 gap-1 py-2">
          <RadioGroup
            name="Sectors"
            items={items}
            value={value}
            onChange={setValue}
          />
        </div>
        <div className="mt-10 mb-2">
          <h1 className="font-semibold text-[16px] leading-7 text-[#121420]">
            What Engineering role are you looking to fill?
          </h1>
          <p className="text-[13px] leading-3 text-[#121420] tracking-tight opacity-75">
            Hint: Select as many as you like.
          </p>
        </div>
        {value === "Engineering" && (
          <div className="my-4">
            <ul className="grid grid-cols-3 gap-4">
              {Engineering.map(({ name }, index) => (
                <li
                  key={index}
                  className="font-medium text-[16px] py-1 leading-3 tracking-tight"
                >
                  <input
                    type="checkbox"
                    value={name}
                    className="h-[16px] w-[16px] mr-1 text-[#101420]"
                  />
                  {name}
                </li>
              ))}
            </ul>
          </div>
        )}
        {value === "Design" && (
          <div className="mt-4">
            <ul className="grid grid-cols-3 gap-4">
              {Design.map(({ name }, index) => (
                <li
                  key={index}
                  className="font-medium text-[16px] py-1 leading-3 tracking-tight"
                >
                  <input
                    type="checkbox"
                    value={name}
                    className="h-[16px] w-[16px] mr-1 text-[#101420]"
                  />
                  {name}
                </li>
              ))}
            </ul>
          </div>
        )}
        {value === "Sales" && (
          <div className="my-4">
            <ul className="grid grid-cols-3 gap-4">
              {Sales.map(({ name }, index) => (
                <li
                  key={index}
                  className="font-medium text-[16px] py-1 leading-3 tracking-tight"
                >
                  <input
                    type="checkbox"
                    value={name}
                    className="h-[16px] w-[16px] mr-1 text-[#101420]"
                  />
                  {name}
                </li>
              ))}
            </ul>
          </div>
        )}
        {value === "Product" && (
          <div className="my-4">
            <ul className="grid grid-cols-3 gap-4">
              {Product.map(({ name }, index) => (
                <li
                  key={index}
                  className="font-medium text-[16px] py-1 leading-3 tracking-tight"
                >
                  <input
                    type="checkbox"
                    value={name}
                    className="h-[16px] w-[16px] mr-1 text-[#101420]"
                  />
                  {name}
                </li>
              ))}
            </ul>
          </div>
        )}
        {value === "Operations" && (
          <div className="my-4">
            <ul className="grid grid-cols-3 gap-4">
              {Operations.map(({ name }, index) => (
                <li
                  key={index}
                  className="font-medium text-[16px] py-1 leading-3 tracking-tight"
                >
                  <input
                    type="checkbox"
                    value={name}
                    className="h-[16px] w-[16px] mr-1 text-[#101420]"
                  />
                  {name}
                </li>
              ))}
            </ul>
          </div>
        )}
        {value === "Marketing" && (
          <div className="my-4">
            <ul className="grid grid-cols-3 gap-4">
              {Marketing.map(({ name }, index) => (
                <li
                  key={index}
                  className="font-medium text-[16px] py-1 leading-3 tracking-tight"
                >
                  <input
                    type="checkbox"
                    value={name}
                    className="h-[16px] w-[16px] mr-1 text-[#101420]"
                  />
                  {name}
                </li>
              ))}
            </ul>
          </div>
        )}
        {value === "Management" && (
          <div className="my-4">
            <ul className="grid grid-cols-3 gap-4">
              {Management.map(({ name }, index) => (
                <li
                  key={index}
                  className="font-medium text-[16px] py-1 leading-3 tracking-tight"
                >
                  <input
                    type="checkbox"
                    value={name}
                    className="h-[16px] w-[16px] mr-1 text-[#101420]"
                  />
                  {name}
                </li>
              ))}
            </ul>
          </div>
        )}
        {value === "Other" && (
          <div className="my-4">
            <ul className="grid grid-cols-3 gap-4">
              {Other.map(({ name }, index) => (
                <li
                  key={index}
                  className="font-medium text-[16px] py-1 leading-3 tracking-tight"
                >
                  <input
                    type="checkbox"
                    value={name}
                    className="h-[16px] w-[16px] mr-1 text-[#101420]"
                  />
                  {name}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-5">
          <h1 className="font-semibold text-[16px] leading-7 text-[#121420]">
            Location preference
          </h1>
          <p className="text-[13px] leading-3 text-[#121420] tracking-tight opacity-75">
            Select if candidates should be onsite or remote.
          </p>
          <div className="grid grid-cols-5 py-5">
            {locations.map((item) => (
              <div key={item.value}>
                <label
                  htmlFor={locations + item.value}
                  className={`text-[13px] leading-[13px]  font-semibold border-gray-500 border  rounded-[50px] py-[13px] px-[6px] mt-5 w-[150px] flex hover:bg-[#FA5F4B] hover:cursor-pointer items-center gap-3  ${
                    value === item.value
                      ? "bg-[#FA5F4B] border border-[#FA5F48] text-white"
                      : ""
                  } `}
                >
                  <input
                    name="Locations"
                    type="radio"
                    value={item.value}
                    id={locations + item.value}
                    checked={value === item.value}
                    onChange={(e) => setValue(e.target.value)}
                    className="ms-3 checked:bg-[#FA5F4B] h-[26px] w-[26px] accent-[#FA5F4B]"
                  />
                  <span>{item.label}</span>
                </label>
              </div>
            ))}
          </div>
          <div>
            {value === "Onsite" && (
              <div>
                <h1 className="font-semibold text-[16px] leading-7 text-[#121420]">
                  Onsite
                </h1>
                <p className="text-[13px] leading-7 text-[#121420] text-opacity-70">
                  Select where onsite candidates should be based in or open to
                  relocate to
                </p>
                <div className="relative">
                  <input
                    type="text"
                    id="input"
                    placeholder="Find Location"
                    className="border border-[#595B63] text-[13px] leading-[13px] outline-none px-10 py-4 rounded-md w-[700px] "
                    onChange={(e) => setSearchInput(e.target.value)}
                  />
                  <MdOutlineSearch className="h-[24px] w-[24px] text-[#595B63] absolute top-[12px] left-[10px]" />
                </div>
                <div className="flex gap-2">
                  {Locations.filter((location) => {
                    if (searchInput == "") {
                      return "";
                    } else if (
                      location &&
                      location.locationName &&
                      location.locationName.includes(searchInput)
                    ) {
                      return location;
                    }
                  }).map((location) => {
                    return (
                      <div
                        key={location.id}
                        className="mt-4 flex items-center justify-center py-3 px-4 bg-[#FFF8F2] rounded-xl"
                      >
                        <span className="text-[#FA6754] pr-1 -ml-1">
                          <RxCross2 />
                        </span>
                        <h1 className="text-[13px] leading-[13px] text-[#121420] font-semibold ">
                          {location.locationName}
                        </h1>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
            {value === "Onsite or remote" && (
              <div className="flex flex-col gap-2">
                <div>
                  <h1 className="font-semibold text-[16px] leading-7 text-[#121420]">
                    Onsite
                  </h1>
                  <p className="text-[13px] leading-7 text-[#121420] text-opacity-70">
                    Select where onsite candidates should be based in or open to
                    relocate to
                  </p>
                  <div className="relative">
                    <input
                      type="text"
                      id="input"
                      placeholder="Find Location"
                      className="border border-[#595B63] text-[13px] leading-[13px] outline-none px-10 py-4 rounded-md w-[700px]"
                    />
                    <MdOutlineSearch className="h-[24px] w-[24px] text-[#595B63] absolute top-[12px] left-[10px]" />
                  </div>
                  <div className="flex gap-2">
                    {Locations.filter((location) => {
                      if (searchInput == "") {
                        return "";
                      } else if (
                        location &&
                        location.locationName &&
                        location.locationName.includes(searchInput)
                      ) {
                        return location;
                      }
                    }).map((location) => {
                      return (
                        <div
                          key={location.id}
                          className="mt-4 flex items-center justify-center py-3 px-4 bg-[#FFF8F2] rounded-xl"
                        >
                          <span className="text-[#FA6754] pr-1 -ml-1">
                            <RxCross2 />
                          </span>
                          <h1 className="text-[13px] leading-[13px] text-[#121420] font-semibold ">
                            {location.locationName}
                          </h1>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div>
                  <h1 className="font-semibold text-[16px] leading-7 text-[#121420]">
                    Remote
                  </h1>
                  <p className="text-[13px] leading-7 text-[#121420] text-opacity-70">
                    Select where remote candidates should be based in, e.g.
                    United States, Europe, etc. You may select multiple
                    locations
                  </p>
                  <div className="relative">
                    <input
                      type="text"
                      id="input"
                      placeholder="Find Location"
                      className="border border-[#595B63] text-[13px] leading-[13px] outline-none px-10 py-4 rounded-md w-[700px]"
                    />
                    <MdOutlineSearch className="h-[24px] w-[24px] text-[#595B63] absolute top-[12px] left-[10px]" />
                  </div>
                  <div className="flex gap-2">
                    {Locations.filter((location) => {
                      if (searchInput == "") {
                        return "";
                      } else if (
                        location &&
                        location.locationName &&
                        location.locationName.includes(searchInput)
                      ) {
                        return location;
                      }
                    }).map((location) => {
                      return (
                        <div
                          key={location.id}
                          className="mt-4 flex items-center justify-center py-3 px-4 bg-[#FFF8F2] rounded-xl"
                        >
                          <span className="text-[#FA6754] pr-1 -ml-1">
                            <RxCross2 />
                          </span>
                          <h1 className="text-[13px] leading-[13px] text-[#121420] font-semibold ">
                            {location.locationName}
                          </h1>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}
            {value === "Remote" && (
              <div>
                <h1 className="font-semibold text-[16px] leading-7 text-[#121420]">
                  Remote
                </h1>
                <p className="text-[13px] leading-7 text-[#121420] text-opacity-70">
                  Select where remote candidates should be based in, e.g. United
                  States, Europe, etc. You may select multiple locations
                </p>
                <div className="relative">
                  <input
                    type="text"
                    id="input"
                    placeholder="Find Location"
                    className="border border-[#595B63] text-[13px] leading-[13px] outline-none px-10 py-4 rounded-md w-[700px]"
                  />
                  <MdOutlineSearch className="h-[24px] w-[24px] text-[#595B63] absolute top-[12px] left-[10px]" />
                </div>
                <div className="flex gap-2">
                  {Locations.filter((location) => {
                    if (searchInput == "") {
                      return "";
                    } else if (
                      location &&
                      location.locationName &&
                      location.locationName.includes(searchInput)
                    ) {
                      return location;
                    }
                  }).map((location) => {
                    return (
                      <div
                        key={location.id}
                        className="mt-4 flex items-center justify-center py-3 px-4 bg-[#FFF8F2] rounded-xl"
                      >
                        <span className="text-[#FA6754] pr-1 -ml-1">
                          <RxCross2 />
                        </span>
                        <h1 className="text-[13px] leading-[13px] text-[#121420] font-semibold ">
                          {location.locationName}
                        </h1>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="flex gap-6 py-10">
        <button className="text-[16px] leading-[26px] text-white px-6 py-2 bg-[#FA5F4B] rounded-md">
          Create Search
        </button>
        <button className="text-[16px] leading-[26px] text-[#121420] border border-[#121420] px-6 py-2  rounded-md">
          Cancel
        </button>
      </div>
    </form>
  );
}
