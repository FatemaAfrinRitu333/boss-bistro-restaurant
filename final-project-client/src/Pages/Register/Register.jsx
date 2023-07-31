import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate, Link, useLocation } from "react-router-dom";
import bg from "../../assets/others/authentication2.png";
import {
  RiFacebookCircleLine,
  RiGithubFill,
  RiGoogleFill,
} from "react-icons/ri";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password)
      .then((result) => {
        const loggedUser = result.user;
        loggedUser.displayName = data.name;
        loggedUser.photoURL = data.photo;

        const saveUser = { name: data.name, email: data.email };

        fetch(`https://bistro-boss-server-ja6l.onrender.com/users`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(saveUser),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              console.log(data);
              Swal.fire(
                "Success!",
                "You are successfully registered!!",
                "success"
              );
              navigate(from, { replace: true });
              reset();
            }
          });
      })
      .catch((error) => {
        console.log("Error: ", error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${error.message}`,
        });
      });
  };
  //   console.log(watch("example"));

  const { createUser, GoogleSignIn } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  const handleGoogleSignin = () => {
    GoogleSignIn()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);

        const saveUser = { name: loggedUser.name, email: loggedUser.email };
        fetch(`https://bistro-boss-server-ja6l.onrender.com/users`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(saveUser),
        })
          .then((res) => res.json())
          .then(() => {
              navigate(from, { replace: true });
          });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${error.message}`, 
        });
      });
  };

  return (
    <>
      <Helmet>
        <title>Sign Up</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center md:w-1/2 lg:text-left lg:relative absolute">
            <img src={bg} alt="" />
          </div>
          <div className="card md:w-1/2 w-full shadow-2xl bg-white/60 relative">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <h1 className="text-3xl font-bold text-center">Register</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  name="name"
                  placeholder="Your Full Name"
                  className="input"
                  // {errors.name && <span className="text-error">This field is required</span>}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  name="email"
                  placeholder="email"
                  className="input"
                  // {errors.email && <span className="text-error">This field is required</span>}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="link"
                  {...register("photo", { required: true })}
                  name="photo"
                  placeholder="Photo URL"
                  className="input"
                  // {errors.email && <span className="text-error">This field is required</span>}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  {...register("password", {
                    required: true,
                    maxLength: 20,
                    minLength: 6,
                  })}
                  name="password"
                  placeholder="password"
                  className="input"
                  // {errors.password && <span className="text-error">This field is required</span>}
                />
              </div>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  value=" sign up"
                  className="btn btn-accent"
                />
              </div>
              <div className="text-center my-4">
                <p className="text-neutral">
                  Already Registered? <Link to="/login">Go to login</Link>
                </p>
                <p>Or sign in with</p>
                <div className="flex justify-center gap-4 mt-3 text-2xl">
                  <RiFacebookCircleLine />
                  <RiGoogleFill
                    className="hover:text-error hover:cursor-pointer"
                    onClick={handleGoogleSignin}
                  />
                  <RiGithubFill />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
