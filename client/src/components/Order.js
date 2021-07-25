import "./../App.css";
import { useHistory } from "react-router-dom";

import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createOrder, refreshCart, removeItem } from "../redux/orderSlice";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";

function Order() {
  const dispatch = useDispatch();
  const myCart = useSelector((state) => state.order);
  const history = useHistory();
  const onOrder = () => {
    if (!localStorage.getItem("user")) {
      history.push("/");
    } else {
      dispatch(createOrder(myCart));
      dispatch(refreshCart());
      history.push("/home");
    }
  };
  const onDelete = (itemId) => {
    console.log(itemId);
    dispatch(removeItem(itemId));
  };
  return (
    <Card className="order-list">
      <List component="nav" aria-label="main mailbox folders">
        {myCart.map((item) => (
          <ListItem key={item._id} className="order-list-item">
            <div>
              {item.name}({item.quantity})
            </div>
            <div onClick={() => onDelete(item._id)} className="delete-icon">
              x
            </div>
          </ListItem>
        ))}
      </List>
      <div className="order-actions">
        <Button variant="contained" onClick={() => onOrder()} color="secondary">
          Order
        </Button>
      </div>
    </Card>
  );
}

export default Order;
