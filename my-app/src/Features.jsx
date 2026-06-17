import "./features.css";

import tv from "./1st.png";
import download from "./2nd.png";
import telescope from "./3rd.png";
import kids from "./4th.png";

export default function Features() {
  const features = [
    {
      title: "Enjoy on your TV",
      description:
        "Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.",
      icon: tv,
    },
    {
      title: "Download your shows to watch offline",
      description:
        "Save your favourites easily and always have something to watch.",
      icon: download,
    },
    {
      title: "Watch everywhere",
      description:
        "Stream unlimited movies and TV shows on your phone, tablet, laptop and TV.",
      icon: telescope,
    },
    {
      title: "Create profiles for kids",
      description:
        "Send kids on adventures with their favourite characters in a space made just for them.",
      icon: kids,
    },
  ];

  return (
    <section className="features-section">
      <h2 className="features-title">
        More reasons to join
      </h2>

      <div className="features-grid">
        {features.map((item, index) => (
          <div className="feature-card" key={index}>
            <h3>{item.title}</h3>

            <p>{item.description}</p>

            <img
              src={item.icon}
              alt={item.title}
              className="feature-icon"
            />
          </div>
        ))}
      </div>
    </section>
  );
}