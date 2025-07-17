import React from "react";

export default function Container({
  children,
  className,
}: React.ComponentProps<"div">) {
  return (
    <div className={`max-w-[62rem]  mx-auto md:px-0 px-4 ${className}`}>
      {children}
    </div>
  );
}
