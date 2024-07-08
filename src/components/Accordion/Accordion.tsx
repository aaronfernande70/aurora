import React, { useState } from "react";

import "./accordion.css";

const Accordion = ({ title, children, open, onChange }: any) => {
  const [opened, setOpened] = useState(open);

  return (
    <div className="Aurora_accordion">
      <details
        open={open}
        onToggle={(e: any) => {
          setOpened(!!e?.target?.open);
          onChange(e.target.open);
        }}
      >
        <summary className="Aroura_accordion_title">
          <div>{title}</div>
          <svg
            className={`Aurora_svg Aurora_downArrow ${opened ? "Aurora_downArrow_inverted" : ""}`}
            focusable="false"
            aria-hidden="true"
            viewBox="0 0 24 24"
            data-testid="ArrowDropDownIcon"
          >
            <path d="m7 10 5 5 5-5z"></path>
          </svg>
        </summary>
        <p>{children}</p>
      </details>
    </div>
  );
};

export default Accordion;
