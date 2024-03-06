import SchoolIcon from "@mui/icons-material/School";
import { useNavigate } from "react-router-dom";
const LangSelect = () => {

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

    const clickHandler = (language: string): void => {
      console.log(language);
      navigate(`/learn?language=${language}`);
    };
  return (

    <>
     <div className="Home">
       <h1>Start Learning...</h1>

       <div className="lang">
         {language.map((i) => (
          <button
            key={i.code}
            onClick={() => clickHandler(i.code)}
            className="lang-but"
          >
            {i.name}
          </button>
        ))}
      </div>

      <p>
        Select a Language to Start <SchoolIcon />
      </p>

    </div>
    
    </>
    )
}

export default LangSelect