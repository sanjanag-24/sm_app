import "./register.scss";
import { Link } from "react-router-dom";
import { Alert } from "./Alert";

const Register = () => {
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Hello World!</h1>
          <p>
            To fill the social gap and meet fundamental human needs, we have
            come up with this brand-new social media application which could
            enable you and millions like you to build communities and stay
            connected together, forever.
          </p>
          <span>Don't you have an account?</span>
          <Link to="/">
            <button>Login</button>
          </Link>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="text" placeholder="Name" />
            <button onClick={Alert}>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
