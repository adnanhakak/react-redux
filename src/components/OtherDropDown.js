import React, { useState, useEffect } from "react";
import axios from "axios";

const OtherDropDown = () => {
  const [open, setOpen] = useState(false);
  const [category, setCategory] = useState([]);
  useEffect(() => {
    const getCategory = async () => {
      let res = await axios.get(
        "https://aveosoft-react-assignment.herokuapp.com/categories"
      );
      //   console.log(res.data);
      setCategory(res.data);
    };
    getCategory();
  }, []);

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label className="label">Product Category</label>
          <div
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
                  //   onClick={() => onSelectedChange(option)}
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

export default OtherDropDown;
