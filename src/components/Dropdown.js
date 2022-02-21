import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

const Dropdown = ({ onSubmit }) => {
  const [open, setOpen] = useState(false);
  const [category, setCategory] = useState([]);

  const onSelectedChange = (id) => {
    onSubmit(id);
  };

  useEffect(() => {
    const getCategory = async () => {
      let res = await axios.get(
        "https://aveosoft-react-assignment.herokuapp.com/categories"
      );
      setCategory(res.data);
    };
    getCategory();
  }, []);

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label
            style={{ display: "inline", marginRight: "10px", fontSize: "17px" }}
            className="label"
          >
            Product Category:
          </label>
          <div
            style={{ display: "inline", width: "15%" }}
            onClick={() => {
              setOpen(!open);
            }}
            className={`ui selection dropdown ${open ? "visible active" : ""}`}
          >
            <i className="dropdown icon"></i>

            <div className="text">Select Category</div>
            <div className={`menu ${open ? "visible transition" : ""}`}>
              {category.map((each) => (
                <div
                  className="item"
                  onClick={() => onSelectedChange(each.id)}
                  key={each.id}
                >
                  {each.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dropdown;
