import React from "react";
import Dropdown from "./Dropdown";
import ToolbarButtons from "./ToolbarButtons";
import { useState } from "react";
import { calculateSum } from "./spreadsheetHelpers";

const Toolbar = () => {
  const [openMenu, setOpenMenu] = useState(null);
  const toolbarRef = useRef(null);
  const toggleMenu = (menuName) => {
    setOpenMenu((prev) => (prev === menuName ? null : menuName));
  };

  //  DROPDOWN HANDLERS
  const handleNewFile = () => {
    // open menu for user to enter name location
    // call to create file and save as appropriate file type
    return;
  };

  const applyBorder = (cell, borderStyle) => {
    // style={{borderStyle(s)}}
    // loop over each cell and update its style
    return;
  };

  return (
    <div role="toolbar" aria-label="Spreadsheet tools" className="toolbar">
      <div
        role="group"
        aria-label="Text formatting"
        className="toolbar-group-top"
      >
        <Dropdown
          label="File"
          isOpen={openMenu === "file"}
          onToggle={() => toggleMenu("file")}
        >
          <button type="button" onClick={handleNewFile}>
            New
          </button>
          <button type="button" onClick={handleNewFile}>
            Save
          </button>
        </Dropdown>
        <Dropdown
          label="Borders"
          isOpen={openMenu === "borders"}
          onToggle={() => toggleMenu("borders")}
        >
          <button type="button" onClick={() => applyBorder("all")}>
            All Borders
          </button>
          <button type="button" onClick={() => applyBorder("none")}>
            Clear Borders
          </button>
        </Dropdown>
      </div>
      <div
        role="group"
        aria-label="Text formatting"
        className="toolbar-group-top"
      >
        <ToolbarButtons />
      </div>
      <div role="group" aria-label="Text formatting" className="toolbar-group">
        1
      </div>
      <div role="separator" aria-orientation="vertical" />
      <div role="group" aria-label="Text formatting" className="toolbar-group">
        1
      </div>
      <div role="separator" aria-orientation="vertical" />
      <div role="group" aria-label="Text formatting" className="toolbar-group">
        1
      </div>
      <div role="separator" aria-orientation="vertical" />
      <div role="group" aria-label="Text formatting" className="toolbar-group">
        1
      </div>
    </div>
  );
};

export default Toolbar;
