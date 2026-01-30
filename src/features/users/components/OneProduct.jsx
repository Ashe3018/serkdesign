import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from "../../shared/components/Button";
import AlertOrderNow from "./AlertOrderNow";

export default function OneProduct() {
  const [open, setOpen] = useState(false);
  const [qty, setQty] = useState(1);
  const [tab, setTab] = useState("description");
  const { id } = useParams();
  const [data, setData] = useState();
  const fetchData = async () => {
    try {
      const res = await axios.get("https://www.ayu.server.ayubceramic.com/product");
      setData(res.data?.find(r => r.Id === parseInt(id)));
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchData()
  },[])
  return (
    <div className="App mt-14 bg-white w-full min-h-screen">
      <div className=" flex flex-col lg:flex-row p-8 gap-10">
        {/* Left Image */}

        <div className="flex-1 flex justify-center">
          <img
            src={`https://www.ayu.server.ayubceramic.com/${data?.img_url}`}
            alt="product"
            className="w-[400px] h-[500px] object-cover rounded-xl"
            style={{ border: "solid 1px black" }}
          />
        </div>

        {/* Right Details */}
        <div className="flex-1 space-y-4">
          <h1 className="text-2xl font-bold text-gray-900">{(data?.name+"").toUpperCase()}</h1>

          <p className="text-blue-600 font-medium cursor-pointer hover:underline w-fit">
            <span>{(data?.category + "").toUpperCase()} </span>
            {!!data?.subCategory && (
              <span className="ml-7">
                {(data?.subCategory + "").toUpperCase()}
              </span>
            )}
          </p>
          <div style={{ border: "solid black 1px" }}></div>
          <div className="columns-2">
            <div className="text-3xl font-semibold text-blue-600">
              {data?.price} Birr
            </div>
            {/* <div>
              <div className="flex items-center gap-2 ">
                <div className="bg-orange-200 px-2 rounded-2xl">
                  <StarBorderOutlined fontSize="small" color="warning" />
                  <span className="text-orange-500">4.0</span>
                </div>
                <div className="bg-gray-300 px-2 rounded-2xl">
                  <SmsOutlined fontSize="small" />
                  <span>(1 review)</span>
                </div>
              </div>

              <p className="text-green-600 font-semibold">
                100%{" "}
                <span className="text-black">of buyers recommended this</span>
              </p>
            </div> */}
          </div>
          <div style={{ border: "solid black 1px" }}></div>
          {/* Quantity */}
          <div className="flex items-center gap-4 pt-4">
            <div className="flex items-center border rounded">
              <button
                onClick={() => qty > 1 && setQty(qty - 1)}
                className="px-4 py-2 border-r"
              >
                -
              </button>
              <div className="px-6">{qty}</div>
              <button
                onClick={() => setQty(qty + 1)}
                className="px-4 py-2 border-l"
              >
                +
              </button>
            </div>
            <p className="text-xl">
              Total Price:{" "}
              <span className="text-blue-600 font-bold">
                {qty * parseFloat(data?.price || 0)} Birr
              </span>
            </p>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 pt-4">
            <Button variant="info" size="md" onClick={() => setOpen(true)}>
              Order Now{" "}
            </Button>
          </div>
        </div>
      </div>
      <div className="p-6 ">
        {/* Tabs */}
        <div className="flex gap-6 border-b ">
          <button
            onClick={() => setTab("description")}
            className={`pb-2 font-medium text-lg ${
              tab === "description"
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-600"
            }`}
          >
            Description
          </button>

          {/* <button
            onClick={() => setTab("reviews")}
            className={`pb-2 font-medium text-lg ${
              tab === "reviews"
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-600"
            }`}
          >
            Reviews (1)
          </button> */}
        </div>

        {/* Description Tab */}
        {tab === "description" && (
          <div className="pt-6 space-y-4 text-gray-800 leading-relaxed">
            <p>{data?.description}</p>

            {/* Product Meta */}
            <div className="pt-6 space-y-2 text-gray-700">
              <p className="flex items-center gap-2">
                {/* <AiOutlineCheckCircle className="text-blue-600" /> */}
                <strong>Availability:</strong> {data?.quantity} In Stock
              </p>

              {!!data?.model && (
                <p className="flex items-center gap-2">
                  {/* <AiOutlineCheckCircle className="text-blue-600" /> */}
                  <strong>Model:</strong> {data?.model}
                </p>
              )}

              {!!data?.brand && (
                <p className="flex items-center gap-2">
                  {/* <AiOutlineCheckCircle className="text-blue-600" /> */}
                  <strong>Brand:</strong>
                  {data?.brand}
                </p>
              )}
            </div>
          </div>
        )}

        {/* Reviews Tab */}
        {tab === "reviews" && (
          <div className="pt-6">
            <p className="text-gray-700">⭐ 4.0 — Good quality product!</p>
          </div>
        )}
      </div>
      <AlertOrderNow open={open} onClose={() => setOpen(false)} />
    </div>
  );
}
