import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const useCart = () => {
  const { user } = useContext(AuthContext);

  const {
    refetch,
    // isError,
    data: cart = [],
    // error,
  } = useQuery({
    queryKey: ["carts", user?.email],
    queryFn: async () => {
      const response = await fetch(
        `http://localhost:5000/carts?email=${user?.email}`
      );
      return response.json();
    },
  });
//   if (isLoading) {
//     return <div className="w-full h-screen flex justify-center items-center"><span className="loading loading-dots loading-lg"></span></div>
//   }
//   if (isError) {
//     return <div className="w-full h-screen flex justify-center items-center">Error: {error.message}</div>
//   }
  return [cart, refetch];
};

export default useCart;
