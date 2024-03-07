import SchoolIcon from "@mui/icons-material/School";
import { useNavigate } from "react-router-dom";
import japaneseFlag from "../Assests/japan.svg";
import hindiFlag from "../Assests/indian.svg";
import spanishFlag from "../Assests/china.svg";
import frenchFlag from "../Assests/france.svg";

const LangSelect = () => {
  const language = [
    {
      name: "Japanese",
      code: "ja",
      flag: japaneseFlag,
    },
    {
      name: "Hindi",
      code: "hi",
      flag: hindiFlag,
    },
    {
      name: "Spanish",
      code: "es",
      flag: spanishFlag,
    },
    {
      name: "French",
      code: "fr",
      flag: frenchFlag,
    },
  ];

  const navigate = useNavigate();

  const clickHandler = (languageCode: string): void => {
    console.log(languageCode);
    navigate(`/learn?language=${languageCode}`);
  };

  return (
    <>
      <div className="Home">
        <h1>Start Learning...</h1>

        <div className="lang">
          {language.map((lang) => (
            <div key={lang.code} className="lang-item" onClick={() => clickHandler(lang.code)}>
              <img src={lang.flag} alt={lang.name} className="flag" />
              <h3 className="lang-button">{lang.name}</h3>
            </div>
          ))}
        </div>

        <h2>
          Select a Language to Start <SchoolIcon />
        </h2>
      </div>
    </>
  );
};

export default LangSelect;
