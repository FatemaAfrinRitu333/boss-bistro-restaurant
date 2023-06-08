import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useCart = () => {
  // const { user } = useContext(AuthContext);
  const { user } = useAuth();
  // const token = localStorage.getItem('access-token');
  const [axiosSecure] = useAxiosSecure();

  const {
    refetch,
    // isError,
    data: cart = [],
    // error,
  } = useQuery({
    queryKey: ["carts", user?.email],
    queryFn: async () => {
      const res = await axiosSecure(
        `/carts?email=${user?.email}`)
        console.log('res from axios', res.data)
      return res.data;
    },
    // queryFn: async () => {
    //   const response = await fetch(
    //     `http://localhost:5000/carts?email=${user?.email}`, {headers: {
    //       authorization: `bearer ${token}`
    //       }}
    //   );
    //   return response.json();
    // },
  });

  return [cart, refetch];
};

export default useCart;
