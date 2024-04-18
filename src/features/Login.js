/** @format */
import "./Login.css";
function Login() {
  const loginToApp = () => {};
  const register = () => {};
  return (
    <div className="login">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/LinkedIn_Logo_2013.svg/568px-LinkedIn_Logo_2013.svg.png?20131205172212"
        alt="linkedin icon"
      />

      <form>
        <input placeholder="Full name (required if regestring)" type="text" />
        <input placeholder="Profile pic URL (optional)" type="text" />
        <input placeholder="Email" type="email" />
        <input placeholder="Password" type="password" />

        <button type="submit" onClick={loginToApp}>
          Sign in
        </button>
      </form>
      <p>
        Not a memeber?{" "}
        <span className="login__register" onClick={register}>
          Register Now
        </span>
      </p>
    </div>
  );
}

export default Login;
