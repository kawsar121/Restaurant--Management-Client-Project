import BodyBanner from "../../Components/BodyBanner";
import CategorySection from "../../Components/CategorySection";
import MenuComponents from "../../Components/MenuComponents";
import BannerSwipper from "../../Design/BannerSwiper/BannerSwipper";

const Home = () => {
    return (
        <div>
            <BannerSwipper></BannerSwipper>
            <CategorySection></CategorySection>
            <BodyBanner></BodyBanner>
            <MenuComponents></MenuComponents>
        </div>
    );
};

export default Home;