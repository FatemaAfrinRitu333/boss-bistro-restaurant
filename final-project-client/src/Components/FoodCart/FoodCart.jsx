import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import useCart from '../../Hooks/useCart';
import useAuth from '../../Hooks/useAuth';

const FoodCart = ({ item }) => {
    const {user} = useAuth();
    const { name, recipe, image, price, _id } = item;
    const [, refetch] = useCart();
    const navigate = useNavigate();
    const location = useLocation();

    const handleAddToCart = (item) =>{
        console.log(item);
        if(user){
            const cartItem = {menuItemId: _id, name, price, image, email: user.email}
            fetch('https://bistro-boss-server-ja6l.onrender.com/carts',{
                method: 'POST',
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(cartItem)

            })
            .then(res=> res.json())
            .then(data=>{
                if(data.acknowledged){
                    refetch(); //refetch cart to update the number of items in the cart
                    Swal.fire("Added!", "Your food is added to the cart", "success");
                }
            })
        }
        else{
            Swal.fire({
                icon: "warning",
                title: "Invalid User",
                text: `User not recognized. Please login/register first to add foods in your cart!`,
                confirmButtonColor: 'primary',
                confirmButtonText: 'Okay'
              }).then((result)=>{
                if(result.isConfirmed){
                    navigate('/login', {state: {from: location}})
                }
              })
        }
    }

    return (
        <div className="card w-full bg-base-100 shadow-xl">
            <figure className='relative'>
                <img src={image} alt="Food" />
                <p className='absolute px-3 bg-[#111827] top-2 right-2 rounded-md text-white'>${price}</p>
            </figure>

            <div className="card-body text-center px-4 bg-white text-black">
                <h2 className="card-title justify-center">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-center">
                    <button onClick={()=>handleAddToCart(item)} className="btn btn-outline border-0 border-b-2 text-[#BB8506]">add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCart;