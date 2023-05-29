import { Parallax } from 'react-parallax';
import bg from '../../../assets/home/chef-service.jpg';
import Cover from '../../Shared/Cover/Cover';

const Intro = () => {
    return (
        <Parallax
            blur={{ min: -15, max: 15 }}
            bgImage={bg}
            bgImageAlt=""
            strength={-200}
            bgImageSize='contain'
        >

            <div className="hero py-20">
                <div className="text-center w-5/6 bg-white py-12 px-8 text-black cursive">
                    <h1 className="mb-5 text-5xl font-medium  uppercase italic">bistro boss</h1>
                    <p className="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
                </div>
            </div>
            <div style={{ height: 'max-content' }} />
        </Parallax>
    );
};

export default Intro;