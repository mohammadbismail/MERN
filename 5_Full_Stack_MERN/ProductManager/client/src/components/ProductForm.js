import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default (props) => {
  let navigate = useNavigate();
  const { initialtitle, initialprice, initialdescription, onSubmitProp } =
    props;

  const [title, setTitle] = useState(initialtitle);
  const [price, setPrice] = useState(initialprice);
  const [description, setDescription] = useState(initialdescription);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    onSubmitProp({ title, price, description });
    navigate("/");
  };
  return (
    <div>
      <p>hi</p>
      <form onSubmit={onSubmitHandler}>
        <p>
          <label>Title</label>
          <br />
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </p>
        <p>
          <label>Price</label>
          <br />
          <input
            type="text"
            onChange={(e) => setPrice(e.target.value)}
            value={price}
          />
        </p>
        <p>
          <label>Description</label>
          <br />
          <input
            type="text"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          />
        </p>
        <input type="submit" />
      </form>
    </div>
  );
};
