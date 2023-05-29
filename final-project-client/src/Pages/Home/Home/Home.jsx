import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimonials/Testimonials";
import ChefRecom from "../ChefRecom/ChefRecom";
import Call from "../Call/Call";
import Intro from "../Intro/Intro";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro | Home</title>
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <Intro></Intro>
            <PopularMenu></PopularMenu>
            <Call></Call>
            <ChefRecom></ChefRecom>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;