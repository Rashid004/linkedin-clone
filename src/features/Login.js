/** @format */
import "./Login.css";
function Login() {
  return (
    <div className="login">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/LinkedIn_Logo_2013.svg/568px-LinkedIn_Logo_2013.svg.png?20131205172212"
        alt="linkedin icon"
      />

      <form>
        <input placeholder="Full name (required if regestring)" type="text" />
      </form>
    </div>
  );
}

export default Login;
