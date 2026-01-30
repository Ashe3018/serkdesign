import { useState, useEffect } from "react";
import axios from "axios";
export default function useCRUD(api) {
  const [datas, setDatas] = useState([]);
  const [loading, setLoading] = useState(false);
  const getAll = async () => {
    setLoading(true);
     try {
       const res = await axios.get(api);
      setDatas(res.data);
        } catch (error) {
      console.log(error);
     }
    setLoading(false);
  };

  const createData =async (data) => {
    try {
      await axios.post(api + "/add", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      getAll();
    } catch (error) {
      console.log(error);
    }
   console.log(data);
    
  };

  const updateData = async (data) => {
    try {
       await axios.put(api + "/update/" + data.Id, data);
    getAll();
    } catch (error) {
      console.log(error);
    }
  };
  const updateDataFile = async ({form,formData}) => {
    try {
      await axios.put(api + "/updateFile/" + form.Id, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      getAll();
    } catch (error) {
      console.log(error);
    }
  };

  const deleteData = async (id) => {
    try {
       await axios.delete(api + "/delete/" + id);
    getAll();
    } catch (error) {
      console.log(error);
    }
   
  };

  useEffect(() => {
    getAll();
  }, []);

  return { datas, loading, createData, updateData,updateDataFile, deleteData };
}