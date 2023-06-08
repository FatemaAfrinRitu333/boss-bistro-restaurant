import { useContext, useEffect, useRef, useState } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  LoadCanvasTemplateNoReload,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate, Link, useLocation } from "react-router-dom";
import bg from "../../assets/others/authentication2.png";
import {
  RiFacebookCircleLine,
  RiGithubFill,
  RiGoogleFill,
} from "react-icons/ri";
import { Helmet } from "react-helmet-async";

const Login = () => {
  const { LogIn, GoogleSignIn } = useContext(AuthContext);
  const [disabled, setDisabled] = useState(true);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";
  // console.log(location, from);

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleValidateCaptcha = (e) => {
    const user_captcha_value = e.target.value;
    if (validateCaptcha(user_captcha_value)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    LogIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        Swal.fire("Success!", "You are successfully logged In!!", "success");
        navigate(from, { replace: true });
        form.reset();
      })
      .catch((error) => {
        console.log("Error: ", error.message);
        if (error.message === "Firebase: Error (auth/user-not-found).") {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: `User not registered. Please register first!`,
          });
          navigate("/register");
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: `${error.message}`,
          });
        }
      });
  };

  const handleGoogleSignin = () => {
    GoogleSignIn()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);

        const saveUser = { name: loggedUser.displayName, email: loggedUser.email };
        fetch(`http://localhost:5000/users`, {
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
        <title>Sign In</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center md:w-1/2 lg:text-left lg:relative absolute">
            <img src={bg} alt="" />
          </div>
          <div className="card md:w-1/2 w-full shadow-2xl bg-white/60 relative">
            <form onSubmit={handleLogin} className="card-body">
              <h1 className="text-3xl font-bold text-center">Login</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <LoadCanvasTemplate />
                </label>
                <input
                  onBlur={handleValidateCaptcha}
                  type="text"
                  name="captcha"
                  placeholder="Type the captcha text"
                  className="input w-full"
                />
              </div>
              <div className="form-control mt-6">
                <input
                  // disabled={disabled}
                  type="submit"
                  value="LOGIN"
                  className="btn btn-accent"
                />
              </div>
              <div className="text-center my-4">
                <p className="text-neutral">
                  New here? <Link to="/register">Create a New Account</Link>
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

export default Login;
