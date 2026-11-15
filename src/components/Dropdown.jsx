import React from "react";

const Dropdown = ({ label, isOpen, onToggle, children }) => {
  return (
    <div className="dropdown-wrapper">
      <button
        type="button"
        aria-expanded={isOpen}
        aria-haspopup="menu"
        onClick={onToggle}
      >
        {label}
      </button>
      {isOpen && (
        <div role="menu" className="dropdown-menu">
          {children}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
