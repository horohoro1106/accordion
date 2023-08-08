import { useState } from "react";
import { AccordionItem } from "./AccordionItem";

export function Accordion({ data }) {
  const [curOpen, setCurOpen] = useState(null);
  return (
    <div className="accordion">
      {data.map((item, i) => (
        <AccordionItem
          curOpen={curOpen}
          onOpen={setCurOpen}
          text={item.text}
          title={item.title}
          num={i}
          key={item.title}
        >
          {item.text}
        </AccordionItem>
      ))}
    </div>
  );
}
