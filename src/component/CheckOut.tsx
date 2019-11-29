import React from "react";
import { Link } from "react-router-dom";

const CheckOut = (props: any) => {
  console.log(props);
  let _item: any = localStorage.getItem("foods");
  _item = _item === null ? [] : JSON.parse(_item);
  const _data = _item;
  return (
    <div className="columns">
      <div className="column is-three-fifths is-5 is-offset-3">
        <div className="message">
          <div className="message-header">selected item</div>
          <div className="message-body">
            <div className="card">
              {_data.map((e: any, i: number) => {
                return <SelectedItem item={e} />;
              })}
              <footer className="card-footer">
                <p className="card-footer-item">
                  <Link to="/card">
                    <button className="button is-rounded is-dark">
                      Chekout
                    </button>
                  </Link>
                </p>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SelectedItem = (props: any) => {
  return (
    <div className="card-content">
      <div className="columns ">
        <div className="column">
          <span className="title"> {props.item.itemname}</span>
        </div>
        <div className="column is-pulled-right">
          <span className="is-pulled-right subtitle">
            <i className="fa fa-rupee"></i>
            {props.item.number * props.item.price}
          </span>
        </div>
      </div>
      <span className="subtitle">
        {props.item.number} x <i className="fa fa-rupee"></i>
        {props.item.price}
      </span>
    </div>
  );
};

export default CheckOut;
