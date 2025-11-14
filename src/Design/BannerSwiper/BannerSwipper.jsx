import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import bannerimg1 from '../../assets/home/01.jpg'
import bannerimg2 from '../../assets/home/02.jpg'
import bannerimg3 from '../../assets/home/03.png'
import bannerimg4 from '../../assets/home/04.jpg'
import bannerimg5 from '../../assets/home/05.png'
import bannerimg6 from '../../assets/home/06.png'
const BannerSwipper = () => {
  return (
    <div className="">
      <Carousel>
        <div>
          <img src={bannerimg1} alt="" srcset="" />
        </div>
        <div>
          <img src={bannerimg2} alt="" srcset="" />
        </div>
        <div>
          <img src={bannerimg3} alt="" srcset="" />
        </div>
        <div>
          <img src={bannerimg4} alt="" srcset="" />
        </div>
        <div>
          <img src={bannerimg5} alt="" srcset="" />
        </div>
        <div>
          <img src={bannerimg6} alt="" srcset="" />
        </div>
      </Carousel>
    </div>
  );
};

export default BannerSwipper;
