import React, { useState } from "react";
import { DropdownLink, DropdownMenu } from "../../styled/common/Dropdown";
import { DropdownItems } from "./DropdownItem";

const Dropdown = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <div>
      <ul onClick={handleClick}>
        {DropdownItems.map((item, index) => {
          return (
            <DropdownMenu>
              <DropdownLink to={item.path} onClick={() => setClick(false)}>
                {item.title}
              </DropdownLink>
            </DropdownMenu>
          );
        })}
      </ul>
    </div>
  );
};

export default Dropdown;
