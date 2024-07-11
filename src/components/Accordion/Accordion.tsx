import React, { ReactNode, useState } from "react";

import "./accordion.css";

interface AccordionProps {
  children: ReactNode | string;
  title: ReactNode | string;
  open?: boolean;
  onChange?: Function;
}

const Accordion = ({ title, children, open, onChange }: AccordionProps) => {

  return (
    <div className="Aurora_accordion">
      <details
        open={!!open}
        
      >
        <summary className="Aroura_accordion_title">
          {title}
  
        </summary>
        <p>{children}</p>
      </details>
    </div>
  );
};

export default Accordion;
