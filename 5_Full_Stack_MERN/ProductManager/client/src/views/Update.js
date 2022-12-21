import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import ProductForm from "../components/ProductForm";

const Update = (props) => {
  const { id } = useParams();
  const [product, setproduct] = useState({});
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    axios.get("http://localhost:8000/api/product/" + id).then((res) => {
      setproduct(res.data);
      setLoaded(true);
      console.log(product.title);
    });
  }, []);
  const updateProduct = (product) => {
    axios
      .put(`http://localhost:8000/api/product/${id}`, product)
      .then((res) => console.log(res));
  };
  return (
    <div>
      {loaded && (
        <ProductForm
          onSubmitProp={updateProduct}
          initialdescription={product.description}
          initialprice={product.price}
          initialtitle={product.title}
        ></ProductForm>
      )}
    </div>
  );
};

export default Update;
