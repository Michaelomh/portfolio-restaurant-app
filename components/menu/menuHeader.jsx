import React from "react";

const MenuHeader = (props, ref) => {
  return (
    <h1 className=" header my-12 pt-8 text-[1.75em] tracking-[8px]" ref={ref}>
      {props.children}
    </h1>
  );
};

const forwardMenuHeader = React.forwardRef(MenuHeader);

export default forwardMenuHeader;
