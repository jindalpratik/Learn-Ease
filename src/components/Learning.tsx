import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import { fetchAudio, translateWords } from "../utils/features";
import { useDispatch, useSelector } from "react-redux";
import {
  clearState,
  getWordsFail,
  getWordsRequest,
  getWordsSucess,
} from "../Redux/slices";
import Loader from "./Loader";

const Learning = () => {
  const [count, setCount] = useState<number>(0);
  const [audiosrc, setAudiosrc] = useState<string>("");
  const { loading, error, words } = useSelector(
    (state: { root: StateType }) => state.root
  );
  const params = useSearchParams()[0].get("language") as LangType;
  // console.log(params);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const clickHandler = async () => {
    if (count <= 6) {
      console.log(count);
      setCount(count + 1);
    } else {
      console.log("click");
      navigate("/quiz");
    }
  };

  const audioHandler = async () => {
    const data = await fetchAudio(words[count]?.word, params);
    // console.log(data);
    setAudiosrc(data);
    setTimeout(() => {
      setAudiosrc("");
    }, 1500);
  };

  useEffect(() => {
    dispatch(getWordsRequest());
    translateWords(params || "hi")
      .then((arr) => {
        dispatch(getWordsSucess(arr));
      })
      .catch((error) => {
        console.log(error);
        dispatch(getWordsFail(error));
      });

    if (error) {
      alert("SOME ERROR");
      dispatch(clearState());
    }
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="learning-main">
      <div className="image-gify">
        <img
          src="https://media2.giphy.com/media/5Z5EOf7ChDnQIq1fgV/giphy.gif?cid=ecf05e47qxtbjapmzot50mssuh1t649hpupjmkwnybc4x2rh&ep=v1_gifs_related&rid=giphy.gif&ct=s"
          alt=""
        />
      </div>
      <div className="learning">
        <h2 className="learning-title">Learn the words...</h2>

        <div className="word">
          <h1 className="question">{count + 1}</h1>
          <p>.</p>
          <h1 className="question">{words[count]?.word}</h1>
          <h1>:</h1>
          <h1 className="output">{words[count]?.meaning}</h1>
          {audiosrc && <audio src={audiosrc} autoPlay></audio>}
          <VolumeUpIcon onClick={audioHandler} />
        </div>

        <div className="navigation-buttons">
          <button
            className="next"
            disabled={count === 0}
            onClick={() => {
              setCount((prevCount) => prevCount - 1);
            }}
          >
            Previous
          </button>
          <button
            className="next"
            // onClick={() => {
            //   setCount((prevCount) => prevCount + 1);
            // }}
            onClick={clickHandler}
          >
            {count === words.length - 1 ? "Take Test" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Learning;
