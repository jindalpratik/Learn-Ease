import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { saveResults } from "../Redux/slices";

const Quiz = () => {
  const [result, setResult] = useState<string[]>([]);

  const [count, setCount] = useState<number>(0);

  const [ans, setAns] = useState<string>("");

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { words } = useSelector((state: { root: StateType }) => state.root);
  const nextHandler = (): void => {
    setResult((prev) => [...prev, ans]);
    setCount(count + 1);
    setAns("");
  };

  useEffect(() => {
    dispatch(saveResults(result));
    if (count === 8) {
      console.log(result);

      navigate("/result");
    }
  }, [result]);

  return (
    <div className="quiz">
      <p>Quiz-</p>
      <h1>
        {count + 1}-{words[count]?.word}
      </h1>
      <h3>Meaning:</h3>

      <RadioGroup value={ans} onChange={(e) => setAns(e.target.value)}>
        {words[count]?.options.map((i, idx) => (
          <FormControlLabel value={i} control={<Radio />} label={i} key={idx} />
        ))}
      </RadioGroup>

      <button className="next2" onClick={nextHandler} disabled={ans === ""}>
        {count === 7 ? "Submit" : "Next"}
      </button>
    </div>
  );
};

export default Quiz;
