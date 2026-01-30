import React from "react";
import Button from "../../shared/components/Button";
import { VisibilityOutlined } from "@mui/icons-material";
import { useLocation, useNavigate } from "react-router-dom";
const ProductCard = ({ data, onClick }) => {
  const naviget = useNavigate();
  const nav = useLocation();

  const path = nav.pathname;
  let result = false;
  const pathLength = path.split("/").length;
  if (path === "/") result = true;
  else if (
    path.includes(data.category) &&
    path.includes(data.subCategory) &&
    path.includes(data.location) &&
    pathLength === 4
  )
    result = true;
  else if (
    path.includes(data.category) &&
    path.includes(data.subCategory) &&
    pathLength === 3
  )
    result = true;
  else if (path.includes(data.category) && pathLength === 2) result = true;
  return (
    <>
      {result ? (
        <div
          style={{ maxWidth: 300 }}
          className="flex flex-col h-full border border-indigo-400 rounded-lg overflow-hidden shadow-sm hover:cursor-pointer hover:shadow-md transition"
        >
          <div className="relative">
            <img
              src={`https://www.ayu.server.ayubceramic.com/${data?.img_url}`}
              alt={data?.name}
              style={{ height: "300px", width: "250px" }}
            />

            <div className="text-gray-600 text-center ">
              <p>
                <b>
                  {(`${data?.location} ${data?.size} ${data?.name}`+"").toUpperCase()}
                </b>
              </p>
            </div>
          </div>
          <div className="px-4 py-1 mt-auto mb-2">
            <div className="columns-2">
              <div
                onClick={(e) => naviget(`/product/${data.Id}`)}
                style={{ float: "left" }}
              >
                <Button size="full" variant="info">
                  <VisibilityOutlined
                    className="hover:cursor-pointer "
                    titleAccess="View"
                  />
                  <span className="ml-1">View</span>
                </Button>
              </div>
              <div className="text-center">
                
                <p  >
                  <b> {data?.price} Birr</b>
                </p>
              </div>
            </div>
            <div className="mt-2">
              <Button size="full" variant="danger" onClick={onClick}>
                Order
              </Button>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};
export default ProductCard;
