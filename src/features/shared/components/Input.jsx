import React from "react";
import { FastField, ErrorMessage, } from "formik";
import { VisibilityOffOutlined, VisibilityOutlined } from "@mui/icons-material"
import { TextField } from '@mui/material'
const Input = ({
  label,
  name,
  type = "text",
  as = "",
  rows = 1,
  placeholder = "",
}) => {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block mb-1 font-semibold">
        {label}
      </label>
      <FastField
        as={as}
        rows={rows}
        id={name}
        name={name}
        type={type}
        className="w-full px-4 py-2 max-w-3xl min-w-80 border rounded-md focus:ring-indigo-500 focus:outline-none"
        placeholder={placeholder}
        
      />

      <ErrorMessage
        name={name}
        component="div"
        className="text-red-500 mt-1 text-sm"
      />
    </div>
  );
};
export default React.memo(Input);
