import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useMenu from "../../../Hooks/useMenu";
// import { useMenu } from "../../../Hooks/useMenu";
import MenuCategory from "../../Menu/MenuCategory/MenuCategory";



const PopularMenu = () => {

    const [menu] = useMenu();
    const popular = menu.filter(popular=> popular.category === 'popular');

    // console.log(menu)
    return (
        <div className="my-9">
            <SectionTitle
            heading={'from our menu'}
            subHeading={'popular items'}
            ></SectionTitle>
            <MenuCategory
            items={popular}
            ></MenuCategory>
            <button className="btn btn-link w-full mt-6 text-center text-[#BB8506]">View full menu</button>
        </div>
    );
};

export default PopularMenu;