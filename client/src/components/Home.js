import { useEffect } from "react";
import "./../App.css";
import ItemCard from "./ItemCard";
import { useSelector, useDispatch } from "react-redux";
import { getAllItems } from "./../redux/itemsSlice";
function Home() {
  const dispatch = useDispatch();
  const itemsList = useSelector((state) => state.items);
  useEffect(() => {
    dispatch(getAllItems());
  });
  return (
    <div>
      Choose your items and go to my order!
      <div className="home-container">
        {itemsList.map((item, index) => (
          <ItemCard item={item} key={index} />
        ))}
      </div>
    </div>
  );
}

export default Home;
