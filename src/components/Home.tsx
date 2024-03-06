import { useNavigate } from "react-router-dom";
import Flag from "./Flag";

const Home = () => {
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
    navigate('/get-started');
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
        <div className="tag">
          <h1>
            Discover, Learn, Grows
            <br />
            <span>:Ignite Your Learning Journey</span>
          </h1>

          <button className="button-getStarted" data-text="Awesome"
          onClick={clickHandler}>
            Get-Started
          </button>
          <button className="button-Signup">
            <span>Signup</span>
          </button>
        </div>
      </div>
      <Flag />
    </>
  );
};

export default Home;
