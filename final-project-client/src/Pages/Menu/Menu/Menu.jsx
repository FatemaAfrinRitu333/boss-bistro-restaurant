import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import bg from '../../../assets/menu/banner3.jpg';
import DessertBg from '../../../assets/menu/dessert-bg.jpeg';
import PizzaBg from '../../../assets/menu/pizza-bg.jpg';
import SaladBg from '../../../assets/menu/salad-bg.jpg';
import SoupBg from '../../../assets/menu/soup-bg.jpg';
// import { useMenu } from '../../../Hooks/useMenu';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';
import useMenu from '../../../Hooks/useMenu';

const Menu = () => {

    const [menu] = useMenu();
    const desserts = menu.filter(dessert => dessert.category ==='dessert');
    const soups = menu.filter(soup => soup.category ==='soup');
    const salads = menu.filter(salad => salad.category ==='salad');
    const offers = menu.filter(offer => offer.category ==='offered');
    const pizzas = menu.filter(pizza => pizza.category ==='pizza');

    return (
        <div>
            <Helmet>
                <title>Bistro | Our Menu</title>
            </Helmet>
            {/* Main cover */}
            <Cover
            heading={'Our Menu'}
            subHeading={'Would you like to try a dish?'}
            imgUrl={bg}
            ></Cover>

            {/* Offered Items */}
            <SectionTitle
            subHeading={"don't miss"}
            heading={"today's offer"}
            ></SectionTitle>
            <MenuCategory
            items={offers}
            ></MenuCategory>
            
            {/* Desset */}
            <MenuCategory
            items={desserts} heading={"dessert"} imgUrl={DessertBg}
            subHeading={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
            
            ></MenuCategory>
            
            {/* pizza */}
            <MenuCategory
            items={pizzas} heading={"pizza"} imgUrl={PizzaBg}
            subHeading={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
            ></MenuCategory>
            
            {/* salad */}
            <MenuCategory
            items={salads}
            subHeading={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
            heading={"salad"}
            imgUrl={SaladBg}
            ></MenuCategory>
            
            {/* soup */}
            <MenuCategory
            items={soups}
            subHeading={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
            heading={"soup"}
            imgUrl={SoupBg}
            ></MenuCategory>
        </div>
    );
};

export default Menu;