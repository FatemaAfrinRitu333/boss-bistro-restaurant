import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { FaUtensils } from "react-icons/fa";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";


const image_hosting_token = import.meta.env.VITE_IMG_UPLOAD_token;

const AddItem = () => {
    const [axiosSecure] = useAxiosSecure();

    const { handleSubmit, register, watch, reset, formState: { errors } } = useForm();
    const image_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_token}`
    const onSubmit = data => {
        // console.log(data)
        const formData = new FormData();
        formData.append('image', data.image[0])
        fetch(image_hosting_url, {
            method: 'POST',
            body: formData //no stringifying
        })
        .then(res=> res.json())
        .then(imgResponse=>{
            if(imgResponse.success){
                const imgURL = imgResponse.data.display_url;
                const {name, price, category, recipe} = data;
                const newItem = {name, price: parseFloat(price), category, recipe, image:imgURL};
                
                axiosSecure.post('menu', newItem)
                .then(data=>{
                    // console.log('after posting new menu item', data);
                    if(data.data.insertedId){
                        Swal.fire({
                            icon: 'success',
                            title: `${name} is added to the menu!`,
                            showConfirmButton: false,
                            timer: 1500
                          });
                          reset();
                    }
                })
            }

        })
    };
  
  return (
    <div className="w-full mx-auto container mb-9">
      <Helmet>
        <title>Boss | Add An Item</title>
      </Helmet>
      <SectionTitle
        subHeading={"What's New?"}
        heading="Add an item"
      ></SectionTitle>
      <div className="w-full bg-slate-100 rounded-md p-9">
        <form className="space-y-3" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-semibold">
                Recipe Name <span className="text-red-600">*</span>
              </span>
            </label>
            <input
              type="text"
              {...register("name", { required: true, maxLength: 120 })}
              placeholder="Recipe Name"
              className="input bg-white w-full"
            />
            {errors.name && <span className="text-red-600 font-thin italic text-sm">This field is required</span>}
          </div>
          <div className="flex gap-4">
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text">
                  Category <span className="text-red-600">*</span>
                </span>
              </label>
              <select defaultValue="Pick One" className="select bg-white"
              {...register("category", {required: true})}
              >
                {errors.category && <span className="text-red-600 font-thin italic text-sm">This field is required</span>}
                <option disabled>
                  Category
                </option>
                <option>Pizza</option>
                <option>Soup</option>
                <option>Salad</option>
                <option>Drinks</option>
                <option>Dessert</option>
              </select>
            </div>
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text font-semibold">
                  Price <span className="text-red-600">*</span>
                </span>
              </label>
              <input
                type="number"
                {...register("price", { required: true })}
                placeholder="Price"
                className="input bg-white w-full"
              />
              {errors.price && <span className="text-red-600 font-thin italic text-sm">This field is required</span>}
            </div>
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-semibold">
                Recipe Details <span className="text-red-600">*</span>
              </span>
            </label>
            <textarea
              type="text"
              {...register("recipe", { required: true })}
              placeholder="Recipe Details"
              className="textarea bg-white w-full"
            />
            {errors.recipe && <span className="text-red-600 font-thin italic text-sm">This field is required</span>}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
            <span className="label-text font-semibold">
                Recipe Image <span className="text-red-600">*</span>
              </span>
            </label>
            <input
              type="file"
              {...register("image", { required: true })}
              className="file-input w-full bg-white max-w-xs"
            />
            {errors.image && <span className="text-red-600 font-thin italic text-sm">This field is required</span>}
          </div>
          <button
            type="submit"
            className="btn btn-outline rounded-xs"
          >
            Add Item <FaUtensils />
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddItem;
