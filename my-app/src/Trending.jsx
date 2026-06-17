import "./trending.css";

import movie1 from "./1.png";
import movie2 from "./2.png";
import movie3 from "./3.png";
import movie4 from "./4.png";
import movie5 from "./5.png";
import movie6 from "./6.png";
import movie7 from "./7.png";
import movie8 from "./8.png";


export default function Trending() {
  const movies = [
    movie1,
    movie2,
    movie3,
    movie4,
    movie5,
    movie6,
    movie7,
    movie8
  ];

  return (
    <div className="trending-container">
      <h3 className="trending-title">Trending Now</h3>

      <div className="carousel">
        {movies.map((movie, index) => (
          <div className="card" key={index}>
            <span className="rank">{index + 1}</span>

            <img
              src={movie}
              alt={`Movie ${index + 1}`}
              className="card-image"
            />
          </div>
        ))}
      </div>
    </div>
  );
}