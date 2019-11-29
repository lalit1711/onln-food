import React from "react";
import { Link } from "react-router-dom";
const SelectedFood = (props: any) => {
  let _item: any = localStorage.getItem("foods");
  _item = _item === null ? [] : JSON.parse(_item);
  let price = 0;
  return (
    <footer className="footer fix-footer has-background-white">
      <div className="content ">
        <div>
          {props.items.map((e: any) => {
            price = price + e.number * e.price;
            return (
              <strong>
                {" " + e.number} X {e.itemname + " "}
              </strong>
            );
          })}
          <div className="is-pulled-right">
            <strong>
              <i className="fa fa-rupee"></i> {price ? price : ""}
            </strong>
            <Link to="/checkout">
              <button
                className=" button is-dark"
                disabled={props.items.length === 0 ? true : false}
              >
                Chekout
              </button>
            </Link>
          </div>
          .
        </div>
      </div>
    </footer>
  );
};

export default SelectedFood;
