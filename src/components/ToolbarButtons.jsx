import React, { useState } from "react";
import "../toolbar.css";
import { BiUndo, BiRedo } from "react-icons/bi";
import { BsCurrencyDollar, BsPercent, BsTypeBold } from "react-icons/bs";
import { FaItalic, FaMinus, FaPlus } from "react-icons/fa6";
import { MdFormatColorText, MdVerticalAlignBottom } from "react-icons/md";
import { IoMdColorFill } from "react-icons/io";
import { TbSum } from "react-icons/tb";
import { CiTextAlignLeft } from "react-icons/ci";

const ToolbarButtons = () => {
  const [fontSize, setFontSize] = useState(10);

  return (
    <div className="toolbar-buttons-row">
      <button type="button" aria-label="Undo" title="Undo">
        <BiUndo />
      </button>
      <button type="button" aria-label="Redo" title="Redo">
        <BiRedo />
      </button>

      <div role="separator" aria-orientation="vertical" />

      <button type="button" aria-label="Format as currency" title="Currency">
        <BsCurrencyDollar />
      </button>
      <button type="button" aria-label="Format as percent" title="Percent">
        <BsPercent />
      </button>

      <div role="separator" aria-orientation="vertical" />

      <button
        type="button"
        aria-label="Decrease font size"
        title="Decrease font size"
        onClick={() => setFontSize((prev) => Math.max(1, prev - 1))}
      >
        <FaMinus />
      </button>
      <span className="font-size-display">{fontSize}</span>
      <button
        type="button"
        aria-label="Increase font size"
        title="Increase font size"
        onClick={() => setFontSize((prev) => prev + 1)}
      >
        <FaPlus />
      </button>

      <div role="separator" aria-orientation="vertical" />

      <button type="button" aria-label="Bold" title="Bold">
        <BsTypeBold />
      </button>
      <button type="button" aria-label="Italic" title="Italic">
        <FaItalic />
      </button>
      <button type="button" aria-label="Text color" title="Text color">
        <MdFormatColorText />
      </button>
      <button type="button" aria-label="Fill color" title="Fill color">
        <IoMdColorFill />
      </button>

      <div role="separator" aria-orientation="vertical" />

      <button type="button" aria-label="Horizontal align" title="Align left">
        <CiTextAlignLeft />
      </button>
      <button type="button" aria-label="Vertical align" title="Align bottom">
        <MdVerticalAlignBottom />
      </button>

      <div role="separator" aria-orientation="vertical" />

      <button type="button" aria-label="Sum" title="Functions (SUM)">
        <TbSum />
      </button>
    </div>
  );
};

export default ToolbarButtons;
