import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import useCart from "../../../Hooks/useCart";

// TODO: provide publishable key
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY);
const Payment = () => {
  const [cart] = useCart();
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  const price = parseFloat(total.toFixed(2));
  console.log(price)

  return (
    <div className="w-full mb-9">
      <SectionTitle
        subHeading={"please process"}
        heading={"payment"}
      ></SectionTitle>
      <div className="md:w-2/3 md:mx-auto mx-9 rounded-md p-8 text-center bg-slate-100">
        <Elements stripe={stripePromise}>
          <CheckoutForm price={price} cart={cart}></CheckoutForm>
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
