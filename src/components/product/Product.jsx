import { Link } from "react-router-dom";
import "./product.css";

const Product = (props) => {
  const { item } = props;
  return (
    <div className="p">
      <div className="p-browser">
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
      </div>
      <Link to={`/projects/${item.id}`} target="_blank" rel="noreferrer">
        <img src={item.img1} alt="" className="p-img" />
      </Link>
    </div>
  );
};

export default Product;
