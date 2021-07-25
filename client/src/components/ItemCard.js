import "./../App.css";
import { useState } from "react";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { useDispatch } from "react-redux";
import { addToOrder } from "../redux/orderSlice";

function ItemCard({ item }) {
  const dispatch = useDispatch();
  const [itemQuantity, setItemQuantity] = useState(1);
  function handleChange(event) {
    setItemQuantity(event.target.value);
  }
  function onOrderItem(item) {
    let orderedItem = {
      _id: item._id,
      name: item.name,
      quantity: itemQuantity,
    };
    dispatch(addToOrder(orderedItem));
  }
  return (
    <Card className="item-card">
      <div className="image-container">
        <img
          src={"data:image/png;base64," + item.image}
          height="150px"
          width="200px"
          alt="Product image"
        />
      </div>
      <div className="name-container">
        <Typography variant="h6" component="h2">
          {item.name}
        </Typography>
      </div>
      <div className="item-card-footer">
        {item.quantity !== 0 ? (
          <div className="stock-controls">
            <Typography variant="caption" display="block" gutterBottom>
              In Stock ({item.quantity})
            </Typography>
            <input
              type="number"
              min="1"
              max={item.quantity}
              value={itemQuantity}
              onChange={handleChange}
              className="quantity-input"
            />
          </div>
        ) : (
          <Typography
            variant="caption"
            display="block"
            gutterBottom
            className="warn-text"
          >
            OUT OF STOCK
          </Typography>
        )}
        <Button
          variant="contained"
          color="secondary"
          disabled={item.quantity === 0 || itemQuantity > item.quantity}
          onClick={() => onOrderItem(item)}
        >
          Add to basket
        </Button>
      </div>
    </Card>
  );
}

export default ItemCard;
