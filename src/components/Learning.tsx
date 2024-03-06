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
  }, [dispatch, error, params]);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="learning">
      <button
        onClick={
          count === 0
            ? () => {
                navigate("/get-started");
              }
            : () => {
                setCount(count - 1);
              }
        }
      >
        <ArrowBackIcon />
      </button>

      <p>Learning Made Simple...</p>

      <div className="word">
        <h1>{count + 1}</h1>
        <p>-</p>
        <h1>{words[count]?.word}</h1>
        <h1>:</h1>
        <h1 className="output">{words[count]?.meaning}</h1>
        {audiosrc && <audio src={audiosrc} autoPlay></audio>}
        <VolumeUpIcon onClick={audioHandler} />
      </div>

      <button
        className="next"
        onClick={
          count === 7
            ? () => {
                navigate("/quiz");
              }
            : () => {
                setCount(count + 1);
              }
        }
      >
        {count === 7 ? "Take Test" : "Next"}
      </button>
    </div>
  );
};

export default Learning;
