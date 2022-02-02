import React, { useState } from "react";

export default function Textform(props) {
  const handleUpClick = () => {
    //console.log("button clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.alertFunction("Text has been converted to uppercase", "Success");
  };

  const handleDownClick = () => {
    //console.log("button clicked");
    let newText = text.toLowerCase();
    setText(newText);
    props.alertFunction("Text has been converted to lowercase", "Success");
  };

  const handleClear = () => {
    //console.log("clear the textarea");
    let newText = "";
    setText(newText);
    props.alertFunction("Text has been removed", "Success");
  };

  const handleCopy = () => {
    //console.log("copying the above text");
    var text = document.getElementById("myText");
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    props.alertFunction("Text has been copied", "Success");
  };

  const handleOnChange = (event) => {
    //console.log("change occured");
    setText(event.target.value);
  };

  const handleExtraSpaces = () => {
    //console.log("removing extra whitespaces");
    let newText = text.split(/[ ]+/); //all spaces either one or more will be removed and an array will be formed
    setText(newText.join(" ")); //one single whitespace will be added after above step
    props.alertFunction("Extra whitespaces have been removed", "Success");
  };

  const [text, setText] = useState("");
  //text= state variable, setText= updation function

  return (
    <>
      <div className="container">
        <div className="mb-3">
          <label htmlFor="myText" className="form-label">
            <h3
              style={{
                color: props.mode === "light" ? "black" : "white",
              }}
            >
              Demo textarea:
            </h3>
          </label>
          <textarea
            className="form-control"
            value={text}
            id="myText"
            rows="8"
            placeholder="Type here..."
            onChange={handleOnChange}
          ></textarea>
        </div>
        <button
          className="btn btn-primary  mx-2 my-2"
          onClick={handleExtraSpaces}
          disabled={text.length === 0}
        >
          Remove extra spaces
        </button>
        <button
          className="btn btn-primary  mx-2 my-2"
          onClick={handleUpClick}
          disabled={text.length === 0}
        >
          Uppercase
        </button>
        <button
          className="btn btn-primary  mx-2 my-2"
          onClick={handleDownClick}
          disabled={text.length === 0}
        >
          Lowercase
        </button>
        <button
          className="btn btn-primary  mx-2 my-2"
          onClick={handleClear}
          disabled={text.length === 0}
        >
          Clear
        </button>
        <button
          className="btn btn-primary  mx-2 my-2"
          onClick={handleCopy}
          disabled={text.length === 0}
        >
          Copy
        </button>
      </div>

      <div className="container my-5">
        <h5
          style={{
            color: props.mode === "light" ? "black" : "white",
          }}
        >
          Text summary:
        </h5>
        <ul
          style={{
            color: props.mode === "light" ? "black" : "white",
          }}
        >
          <li>
            No. of words-{" "}
            {
              text.split(" ").filter((element) => {
                return element.length !== 0;
              }).length
            }
          </li>
          <li>No. of characters- {text.replace(/ /g, "").length}</li>
          <li>
            Avg. time taken to read above text-{" "}
            {0.008 *
              text.split(" ").filter((element) => {
                return element.length !== 0;
              }).length}{" "}
            minutes
          </li>
          <li>
            Preview-{" "}
            {text.length > 0 ? text : "Type something to preview it here..."}
          </li>
        </ul>
      </div>
    </>
  );
}
