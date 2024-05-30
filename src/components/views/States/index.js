import React, { useState } from "react";
import media from "../../media";

export default function TextConvertCase() {
  const [text, setText] = useState();

  const commonHandler = (arg) => {
    console.log("LowerCase");
    let temp = "";
    switch (arg) {
      case "lower":
        temp = text.toLowerCase();
      break;

      case "upper":
        temp = text.toUpperCase();
      break;

      case "capitalized":
        if (text.length > 0) {
          temp = text[0].toUpperCase() + text.slice(1);
        } else {
          temp = text;
        }
      break;

      case "ExtraSpace":
        temp = text.replace(/\s+/g, ' ').trim();
      break;

      case "clearall":
        temp = ("");
      break;

      case "copytext":
        navigator.clipboard.writeText(temp);
      break;


      default:
        break;
    }

    setText(temp);
    // alert(`Text converted to ${arg} Successfully`);
  };

  const handleOnChange = (e) => {
    setText(e.target.value);
  };

  return (
    <>
      <div className="App">
        <div className="text-holder">
          <p className="mb-2 font-weight-bold">Text Convert Case</p>
          <textarea
            className="form-control"
            id="myBox"
            rows="8"
            value={text}
            onChange={handleOnChange}
            placeholder="Enter Text Here"
          ></textarea>

          <div className="actions">
            <button id="lower" className="btn" onClick={() => commonHandler("lower")}>
              lower case
            </button>
            <button id="upper" className="btn" onClick={() => commonHandler("upper")}>
              UPPER CASE
            </button>
            <button id="capitalized" className="btn" onClick={() => commonHandler("capitalized")}>
              Capitalized Case
            </button>
            <button id="title" className="btn" onClick={() => commonHandler("extraspace")}>
              Remove Extra Spaces
            </button>
            <button id="download" className="btn">
              Download Text
            </button>
            <button id="copy" className="btn" onClick={() => commonHandler("copytext")}>
              Copy to Clipboard
            </button>
            <button id="clear" className="btn" onClick={() => commonHandler("clearall")}>
              Clear
            </button>
          </div>
          <div className="counts mt-2">
            Character Count: <span id="char_count"> 46 </span> | Word Count:{" "}
            <span id="word_count"> 4 </span> | Sentence Count:{" "}
            <span id="sent_count"> 1 </span> | Line Count:{" "}
            <span id="line_count"> 4 </span>
          </div>
        </div>
      </div>
    </>
  );
}
