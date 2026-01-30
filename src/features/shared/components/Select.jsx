import React from "react";
import Select from "react-select";
const SelectInput = ({
  label,
  option,
  name,
  onChange,
  onBlur,
  error = null,
}) => {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium mb-1">{label}</label>
      <Select
        options={option}
        name={name}
        className=" react-select-container w-full py-1 focus:ring-indigo-500 focus:outline-none"
        classNamePrefix="react-select"
        onChange={onChange}
        onBlur={onBlur}
      />

      {error && <div className="text-red-500 text-sm mt-1">{error}</div>}
    </div>
  );
};

export default SelectInput;
