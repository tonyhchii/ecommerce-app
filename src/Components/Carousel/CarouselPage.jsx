import { Carousel } from "react-responsive-carousel";
import "./CarouselPage.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const CarouselPage = () => {
  return (
    <div className="carousel-container">
      <Carousel
        showThumbs={false}
        width="100%"
        infiniteLoop={true}
        showStatus={false}
        showIndicators={false}
        showArrows={false}
        interval={3000}
        autoPlay={true}
      >
        <div>
          <img src="https://media.rawg.io/media/games/106/1069e754e7e6012b0cf42b4b04704792.jpg" />
        </div>
        <div>
          <img src="https://media.rawg.io/media/games/6cd/6cd653e0aaef5ff8bbd295bf4bcb12eb.jpg" />
        </div>
        <div>
          <img src="https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg" />
        </div>
      </Carousel>
    </div>
  );
};
export default CarouselPage;
