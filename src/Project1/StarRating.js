import { FaStar } from 'react-icons/fa';
import '../Project1/style.css'
const StarRating = ({ totalStars }) => {
  const stars = [];

  // Create an array of stars based on the totalStars prop
  for (let i = 0; i < totalStars; i++) {
    stars.push(<FaStar key={i} />);
  }

  return (
    <div className="star">
      {stars.map((star, index) => (
        <span style={{ color: "rgb(241, 190, 5)", fontSize: "18px", padding: "2px" }} key={index}>{star}</span>
      ))}
      <span style={{ color: "black" }}>({totalStars})</span>
    </div>
  );
};

export default StarRating;
