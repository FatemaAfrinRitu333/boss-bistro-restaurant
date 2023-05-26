import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import img1 from '../../../assets/home/01.jpg'
import img2 from '../../../assets/home/02.jpg'
import img3 from '../../../assets/home/03.png'
import img4 from '../../../assets/home/04.jpg'
import img5 from '../../../assets/home/05.png'
import img6 from '../../../assets/home/06.png'


const Banner = () => {

    const banner = [img1, img2, img3, img4, img5, img6]

    return (
            <Carousel className="relative">
                {
                    banner.map((img, index)=><div
                    key={index}
                    >
                        <img src={img} />
                    </div>)
                }
            </Carousel>
    );
};

export default Banner;