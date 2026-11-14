import React from "react";
import { useState } from "react";
const Spreadsheet = () => {
  const [rows, setRows] = useState(100);
  const [cols, setCols] = useState(100);

  const getColLabel = (index) => {
    let label = "";
    let n = index;
    while (n >= 0) {
      let r = String.fromCharCode(65 + (n % 26));
      label = r + label;
      n = Math.floor(n / 26) - 1;
    }
    return label;
  };

  const spreadsheetRows = Array.from({ length: rows }, (_, rowIndex) => {
    return (
      <>
        <div className="row" key={rowIndex}>
          <div className="row-header">{rowIndex + 1}</div>
          {Array.from({ length: cols }, (_, colIndex) => {
            return (
              <input type="text" className="cell" name="cell" key={colIndex} />
            );
          })}
        </div>
      </>
    );
  });

  return (
    <>
      <div className="spreadsheet-container">
        <div className="row">
          <div className="corner-spacer"></div>
          {Array.from({ length: cols }, (_, colIndex) => {
            return (
              <div className="col-header" key={colIndex}>
                {getColLabel(colIndex)}
              </div>
            );
          })}
        </div>

        {
          <div>
            <div className="rows">{spreadsheetRows}</div>
          </div>
        }
      </div>
    </>
  );
};

export default Spreadsheet;
