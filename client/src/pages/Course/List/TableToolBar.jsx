import Checkbox from "@mui/material/Checkbox";
import Input from "@mui/material/Input";
import React, { useState } from "react";
import { MdOutlineSearch } from "react-icons/md";
import { SelectComponent } from "../../../Components/Select";
import { NavLink } from "react-router-dom";

export const TableToolBar = ({
  isChecked,
  setIsChecked,
  searchText,
  setSearchText,
  selectedSortingOption,
  setSelectedSortingOption,
  options,
}) => {
  const SortingHandler = (event) => {
    setSelectedSortingOption(event.target.value);
  };

  return (
    <div className="w-full h-16">
      {isChecked ? (
        <div className="flex w-full items-center px-4 justify-between">
          <Checkbox
            className="text-2xl text-blue-600 cursor-pointer"
            onClick={() => setIsChecked(!isChecked)}
          />
          <span className="ml-2 text-sm font-medium text-gray-700">All</span>
        </div>
      ) : (
        <div className="flex w-full items-center px-4 justify-between">
          <div className="flex items-center px-4 gap-4">
            <Checkbox
              className="text-2xl text-blue-600 cursor-pointer"
              onClick={() => setIsChecked(!isChecked)}
            />
            <span className="ml-2 text-sm font-medium text-gray-700">Chọn</span>
          </div>
          <div className="flex items-center px-4 gap-4">
            <div className="w-64 bg-gray-200 p-1 rounded-2xl text-sm">
              <Input
                type="text"
                placeholder="Nhập thông tin cần tìm"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                disableUnderline={true}
              />
            </div>

            <MdOutlineSearch className="text-2xl text-blue-600 cursor-pointer" />
          </div>
          <SelectComponent
            options={options}
            onChange={SortingHandler}
            value={selectedSortingOption}
            label="Mới nhất"
          />
          <NavLink
            to={"/create-course"}
            className="form-submit"
          >
            Thêm Môn học
          </NavLink>
        </div>
      )}
    </div>
  );
};
