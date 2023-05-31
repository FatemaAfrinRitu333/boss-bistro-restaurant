import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import bg from '../../../assets/shop/banner2.jpg';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from 'react';
import useMenu from '../../../Hooks/useMenu';
import FoodCart from '../../../Components/FoodCart/FoodCart';
import ShopTab from '../ShopTab/ShopTab';
import { useParams } from 'react-router-dom';
// import { useMenu } from '../../../Hooks/useMenu';


const Shop = () => {
    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks']
    const { category } = useParams();

    const initialIndex = categories.indexOf(category);
    console.log(initialIndex, category);

    const [tabIndex, setTabIndex] = useState(0);

    const [menu] = useMenu();
    const desserts = menu.filter(dessert => dessert.category === 'dessert');
    const soups = menu.filter(soup => soup.category === 'soup');
    const salads = menu.filter(salad => salad.category === 'salad');
    const drinks = menu.filter(offer => offer.category === 'drinks');
    const pizzas = menu.filter(pizza => pizza.category === 'pizza');


    return (
        <div>
            <Helmet>
                <title>{`Bistro | Our Shop - ${category}`}</title>
            </Helmet>
            {/* Main cover */}
            <Cover
                heading={'Our shop'}
                subHeading={'Would you like to try a dish?'}
                imgUrl={bg}
            ></Cover>
            <div className='w-full mx-auto my-12 px-5'>
                <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)} className="tabs justify-center">
                    <TabList>
                        <Tab className="tab tab-bordered uppercase">Salad</Tab>
                        <Tab className="tab tab-bordered uppercase">Pizza</Tab>
                        <Tab className="tab tab-bordered uppercase">soups</Tab>
                        <Tab className="tab tab-bordered uppercase">desserts</Tab>
                        <Tab className="tab tab-bordered uppercase">drinks</Tab>
                    </TabList>
                    <TabPanel>
                        <ShopTab item={salads}></ShopTab>
                    </TabPanel>
                    <TabPanel>
                        <ShopTab item={pizzas}></ShopTab>
                    </TabPanel>
                    <TabPanel>
                        <ShopTab item={soups}></ShopTab>
                    </TabPanel>
                    <TabPanel>
                        <ShopTab item={desserts}></ShopTab>
                    </TabPanel>
                    <TabPanel>
                        <ShopTab item={drinks}></ShopTab>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default Shop;