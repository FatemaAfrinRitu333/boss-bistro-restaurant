import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";



const PopularMenu = () => {
    const [menu, setMenu] = useState([]);

    useEffect(()=>{
        fetch('menu.json')
        .then(res=> res.json())
        .then(data=> {
            setMenu(data.filter(item=> item.category === 'popular'))
            // console.log(data)
        });
    },[])

    console.log(menu)
    return (
        <div className="my-9">
            <SectionTitle
            heading={'from our menu'}
            subHeading={'popular items'}
            ></SectionTitle>
            <div className="mx-5 xl:mx-0 grid md:grid-cols-2 grid-cols-1 gap-8">
                {
                    menu.map(item=> <MenuItem
                    key={item._id}
                    item={item}
                    ></MenuItem>)
                }
            </div>
            <button className="btn btn-link w-full mt-6 text-center text-[#BB8506]">View full menu</button>
        </div>
    );
};

export default PopularMenu;