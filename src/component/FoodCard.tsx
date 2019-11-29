import React, { useState, useEffect } from "react";
import data from "../assets/data.json";
import SelectedFood from "./SelectedFood";

const FoodCard = (props: any) => {
  const [_data, setData]: any = useState(data);
  const [_selectedItem, setItem]: any = useState([]);
  const [search, setsearch]: any = useState("");
  const [state, changeState] = useState(false);

  const searchFood = (val: any) => {
    setsearch(val);
    const temp = data.filter(e => {
      return e.itemname.toLowerCase().indexOf(val.toLowerCase().trim()) > -1;
    });
    setData(temp);
  };

  const addItem = (e: any, i: number) => {
    e.number = 1;
    setItem([..._selectedItem, e]);
  };

  const removeItem = (name: string) => {
    const item = _selectedItem.filter((e: any) => {
      return e.itemname !== name;
    });
    setItem(item);
  };

  const increaseItem = (name: any) => {
    let item = _selectedItem;
    item.map((e: any, i: any) => {
      if (e.itemname === name) {
        e.number++;
      }
    });
    setItem(item);
    changeState(!state);
  };
  const decreaseItem = (name: any) => {
    let item = _selectedItem;
    item.map((e: any, i: any) => {
      if (e.itemname === name) {
        e.number = e.number > 1 ? e.number - 1 : removeItem(name);
      }
    });
    changeState(!state);
  };
  const sort = (way: any) => {
    const temp = _data.sort((a: any, b: any) => {
      return way === "high" ? b.price - a.price : a.price - b.price;
    });
    setData(temp);
    changeState(!state);
  };

  localStorage.setItem("foods", JSON.stringify(_selectedItem));
  return (
    <div>
      <div className="columns">
        <div className="columns">
          <div className="column">
            <div className="control has-icons-left has-icons-right">
              <input
                type="text"
                className="input"
                value={search}
                placeholder="search..."
                onChange={e => {
                  searchFood(e.target.value);
                }}
              />
              <span className="icon is-medium is-left">
                <i className="fa fa-search"></i>
              </span>
            </div>
          </div>
          <div className="column is-pulled-right">
            <button
              className="button is-link"
              onClick={e => {
                sort("high");
              }}
            >
              high to low
            </button>
            &nbsp;
            <button
              className="button is-warning"
              onClick={e => {
                sort("low");
              }}
            >
              low to high
            </button>
          </div>
        </div>
      </div>
      <div className="columns is-multiline">
        {_data.map((e: any, i: number) => {
          return (
            <div className="column is-3" key={i}>
              <div className="card">
                <div className="card-content">
                  <p className="title">{e.itemname}</p>
                  <p className="subtitle">
                    {e.availabletime.replace(",", " & ")}
                  </p>
                </div>
                <footer className="card-footer">
                  <p className="card-footer-item">
                    <span>
                      <i className="fa fa-rupee"></i>
                      {" " + e.price}
                    </span>
                  </p>
                  <p className="card-footer-item">
                    {e.number === undefined ? (
                      <span>
                        <button
                          className="button is-dark"
                          onClick={eve => addItem(e, i)}
                        >
                          Add
                        </button>
                      </span>
                    ) : (
                      <span>
                        <button
                          className="button is-warning"
                          onClick={eve => {
                            decreaseItem(e.itemname);
                          }}
                        >
                          <i className="fa fa-minus"></i>
                        </button>
                        <span className="subtitle has-text-info">
                          {e.number === undefined ? 0 : e.number}
                        </span>
                        <button
                          className="button is-warning"
                          onClick={eve => {
                            increaseItem(e.itemname);
                          }}
                        >
                          <i className="fa fa-plus"></i>
                        </button>
                      </span>
                    )}
                  </p>
                </footer>
              </div>
            </div>
          );
        })}
      </div>
      <SelectedFood items={_selectedItem} {...props} />
    </div>
  );
};

export default FoodCard;
