import React from "react";

const Links = () => {
  const items = ["HomePage", "Sevices", "Portfolio", "Contact", "About"];

  return (
    <div className="links">
      {items.map((items) => (
        <a href={`#${items}`} key={items}>
          {items}
        </a>
      ))}
    </div>
  );
};

export default Links;
