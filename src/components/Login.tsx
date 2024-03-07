import { useNavigate } from "react-router-dom";

import Flag from "./Flag";

const Login = () => {
  const language = [
    {
      name: "Japanese",
      code: "ja",
    },
    {
      name: "Hindi",
      code: "hi",
    },
    {
      name: "Spanish",
      code: "es",
    },
    {
      name: "French",
      code: "fr",
    },
  ];

  const navigate = useNavigate();

  const clickHandler = (): void => {
    console.log(language);
    navigate("/get-started");
  };

  return (
    // <div className="Home">
    //   <h1>Start Learning...</h1>

    //   <div className="lang">
    //     {language.map((i) => (
    //       <button
    //         key={i.code}
    //         onClick={() => clickHandler(i.code)}
    //         className="lang-but"
    //       >
    //         {i.name}
    //       </button>
    //     ))}
    //   </div>

    //   <p>
    //     Select a Language to Start <SchoolIcon />
    //   </p>

    // </div>
    <>
      <div className="landing-page">
        <div className="photo"></div>
        <div className="Login-input">
          <form action="#">
            <label htmlFor="username">Username:</label>
            <br />
            <input type="text" id="username" name="username" />
            <br />
            <label htmlFor="password">Password:</label>
            <br />
            <input type="password" id="password" name="password" />
            <br />
            <input type="submit" className="submit" value="Login" />
          </form>
        </div>
      </div>
      <Flag />
    </>
  );
};

export default Login;
