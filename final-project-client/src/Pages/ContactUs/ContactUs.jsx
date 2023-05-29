import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover/Cover";
import bg from '../../assets/contact/banner.jpg';
import SectionTitle from "../../Components/SectionTitle/SectionTitle";


const ContactUs = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro | Contact Us</title>
            </Helmet>
            {/* Main cover */}
            <Cover
                heading={'Contact us'}
                subHeading={'Would you like to try a dish?'}
                imgUrl={bg}
            ></Cover>
            <SectionTitle
            heading={'our location'}
            subHeading={'visit us'}
            ></SectionTitle>
        </div>
    );
};

export default ContactUs;