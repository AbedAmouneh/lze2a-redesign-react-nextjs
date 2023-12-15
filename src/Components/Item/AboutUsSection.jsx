import "./AboutUsSection.scss";
import propTypes from "prop-types";

const AboutUsSection = ({ image, title, description, reverse }) => {
  return (
    <div className={`about-us-section ${reverse ? "reverse" : ""}`}>
      <div className="image-container">
        <img src={image} alt="About Us" />
      </div>
      <div className="text-container">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
};

AboutUsSection.propTypes = {
  image: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  description: propTypes.string.isRequired,
  reverse: propTypes.bool,
};

export default AboutUsSection;
