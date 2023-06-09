import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";

// TODO: provide publishable key
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY);
const Payment = () => {
  return (
    <div className="w-full mb-9">
      <SectionTitle
        subHeading={"please process"}
        heading={"payment"}
      ></SectionTitle>
      <div className="md:w-2/3 md:mx-auto mx-9 rounded-md p-8 text-center bg-slate-100">
        <Elements stripe={stripePromise}>
          <CheckoutForm></CheckoutForm>
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
