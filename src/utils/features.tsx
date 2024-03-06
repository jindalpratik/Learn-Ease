import axios from "axios";
import _ from "lodash";
import { generate } from "random-words";

const generateMcqs = (
  meaning: {
    Text: string;
  }[],
  idx: number
): string[] => {
  const correctAns: string = meaning[idx].Text;

  // console.log("meaning");
  // console.log(meaning);

  const exceptCorrect = meaning.filter((i) => i.Text !== correctAns);
  // console.log("except");
  // console.log(exceptCorrect);

  const incorrectOptions: string[] = _.sampleSize(exceptCorrect, 3).map(
    (i) => i.Text
  );
  // console.log("incorrect options:");
  // console.log(incorrectOptions);

  const mcqOptions = _.shuffle([...incorrectOptions, correctAns]);

  return mcqOptions;
};

export const translateWords = async (lang: LangType): Promise<WordType[]> => {
  try {
    const generatedWords = generate(8);
    const words = ([] as string[]).concat(generatedWords).map((i: string) => ({
      Text: i,
    }));
  const TranslateKey = import.meta.env.VITE_TRANSLATE_RAPID_KEY;

    const response = await axios.post(
      "https://microsoft-translator-text.p.rapidapi.com/translate",
      words,
      {
        params: {
          "to[0]": lang,
          "api-version": "3.0",
          profanityAction: "NoAction",
          textType: "plain",
        },
        headers: {
          "content-type": "application/json",
          "X-RapidAPI-Key":TranslateKey,
          "X-RapidAPI-Host": "microsoft-translator-text.p.rapidapi.com",
        },
      }
    );
    const receive: FetchDataType[] = response.data;

    const arr: WordType[] = receive.map((i, index) => {
      const options = generateMcqs(words, index);
      // console.log("options");
      // console.log(options);
      // // console.log(words);

      return {
        word: i.translations[0].text,
        meaning: words[index].Text,
        options,
      };
    });

    return arr;
  } catch (error) {
    // console.log(error);
    throw new Error("Some Error");
  }
};

export const fetchAudio = async (
  text: string,
  language: LangType
): Promise<string> => {
  const key = import.meta.env.VITE_API_KEY;
  const RapidKey = import.meta.env.VITE_RAPID_KEY;
  var lang: string = "";

  const encodedParams = new URLSearchParams();
  encodedParams.set("src", text);
  encodedParams.set("r", "0");
  encodedParams.set("c", "mp3");
  encodedParams.set("f", "8khz_8bit_mono");
  encodedParams.set("b64", "true");

  if (language === "ja") {
    lang = "ja-jp";
  } else if (language === "es") {
    lang = "es-es";
  } else if (language === "fr") {
    lang = "fr-fr";
  } else {
    lang = "hi-in";
  }

  encodedParams.set("hl", lang);

  const { data }: { data: string } = await axios.post(
    "https://voicerss-text-to-speech.p.rapidapi.com/",
    encodedParams,
    {
      params: { key: key },
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        "X-RapidAPI-Key": RapidKey,
        "X-RapidAPI-Host": "voicerss-text-to-speech.p.rapidapi.com",
      },
    }
  );

  return data;
};
