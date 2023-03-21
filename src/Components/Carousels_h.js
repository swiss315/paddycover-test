import Carousel from "react-bootstrap/Carousel";

import { ReactComponent as Arrowicon } from "../Assets/Icons/arrowicon.svg";
import landingimage from "../Assets/Images/landingpage.png";

function CarouselHome() {
  return (
    <div>
      <Carousel className="carousal-container" controls={false}>
      <Carousel.Item>
        <img className="d-block w-100" src={landingimage} alt="First slide"/>
        <Carousel.Caption className="carousel-home-caption">
          <h3>Explore our Showroom</h3>
          <p>
            Not sure of what you’re looking for? No worries, use Lighting
            Xplorer to see what you can get.
          </p>
          <button>
            <span>Proceed to Lighting Xplorer</span> <Arrowicon />
          </button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={landingimage} alt="Second slide" />
        <Carousel.Caption className="carousel-home-caption">
          <h3>Explore our Showroom</h3>
          <p>
            Not sure of what you’re looking for? No worries, use Lighting
            Xplorer to see what you can get.
          </p>
          <button>
            <span>Proceed to Lighting Xplorer</span> <Arrowicon />
          </button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={landingimage} alt="Third slide" />

        <Carousel.Caption className="carousel-home-caption">
          <h3>Explore our Showroom</h3>
          <p>
            Not sure of what you’re looking for? No worries, use Lighting
            Xplorer to see what you can get.
          </p>
          <button>
            <span>Proceed to Lighting Xplorer</span> <Arrowicon />
          </button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <div className="carousel-home-caption home-mobile">
    <h3>Explore our Showroom</h3>
          <p>
            Not sure of what you’re looking for? No worries, use Lighting
            Xplorer to see what you can get.
          </p>
          <button>
            <span>Proceed to Lighting Xplorer</span> <Arrowicon />
          </button>
    </div>
    </div>
  );
}

export default CarouselHome;
