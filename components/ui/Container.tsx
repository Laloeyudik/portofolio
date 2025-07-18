import React from "react";

export default function Container({
  children,
  className,
}: React.ComponentProps<"div">) {
  return (
    <div className={`w-full lg:max-w-[62rem] mx-auto px-6 ${className}`}>
      {children}
    </div>
  );
}
