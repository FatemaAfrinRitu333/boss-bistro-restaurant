import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import useMenu from '../../../Hooks/useMenu';
import ShopTab from '../../Shop/ShopTab/ShopTab';


const ChefRecom = () => {

    const [menu] = useMenu();
    const offered = menu.filter(offered => offered.category === 'offered');

    return (
        <div className='my-9'>
            <SectionTitle
                heading={'chef recommendation'}
                subHeading={'should try'}
            ></SectionTitle>
            <ShopTab item={offered}></ShopTab>
        </div>
    );
};

export default ChefRecom;