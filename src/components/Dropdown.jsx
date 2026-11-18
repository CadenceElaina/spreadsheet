import React from "react";
const Dropdown = ({ label, isOpen, onToggle, children }) => {
  /*
   each dropdown calls onToggle when clicked which passes in the name of the dropdown to the toggleMenu() 
   which sets the state of the open menu to the name of the menu that should be opened. Each dropdown is passed
   isOpen which checks if the openMenu === 'nameOfDropdown' this is passed to each Dropdown component
   if it is true then the aria-expanded =true and isOpen evaluates to true so it shows the children of the dropdown
   once it evaluates to false because openMenu === 'null' or 'anotherDropdownName' it will close.
   */

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
