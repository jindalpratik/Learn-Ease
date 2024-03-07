import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearState } from "../Redux/slices";
const Results = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const resetHandler = (): void => {
    dispatch(clearState());
    navigate("/");
  };

  const { words, result } = useSelector(
    (state: { root: StateType }) => state.root
  );

  const matched = (words: WordType[], result: string[]): number => {
    let count: number = 0;
    for (let i = 0; i < words.length; i++) {
      if (words[i].meaning === result[i]) {
        count++;
      }
    }
    return count;
  };

  const correctAns = matched(words, result);
  const percentage = (correctAns / words.length) * 100;
  const passOrFail = percentage > 60 ? "Pass" : "Fail";
  const gifSrc =
    passOrFail === "Pass"
      ? "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExam5jN2w2eDEwcXIwaG55cDZsNTFiMHRraTh2eGQzbXk4ODdldzAycCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/IFDOiyx7yHbzO/giphy.gif"
      : "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExMGU4aHZzN2wxaWJ1Y2plZ29pcjg1NjVvdjAzNDk0bmh6NTNqMTR1biZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/EXHHMS9caoxAA/giphy.gif";

  return (
    <div className="resultgif">
      <img src={gifSrc} alt={passOrFail} className="gif" />

      <div className="result">
        <h1>Results</h1>

        <p>
          You got {correctAns} out of {words.length}
        </p>

        <div className="result-sheet">
          <div className="your">
            <h2>Your Answers</h2>
            {result.map((i, idx) => (
              <div key={idx} className="each1">
                <h2>{idx + 1}-</h2>
                <h2>{i}</h2>
              </div>
            ))}
          </div>
          <div className="actual">
            <h2>Correct Answers</h2>
            {words.map((i, idx) => (
              <div key={idx} className="each2">
                <h2>{idx + 1}-</h2>
                <h2>{i.meaning}</h2>
              </div>
            ))}
          </div>
        </div>
        <h2 className={passOrFail === "Pass" ? "pass" : "fail"}>
          {passOrFail}
        </h2>
        <button onClick={resetHandler} className="reset">
          Reset
        </button>
      </div>
    </div>
  );
};

export default Results;
