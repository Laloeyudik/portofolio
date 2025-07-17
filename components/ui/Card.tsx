import React from "react";

const Card = () => {
  return (
    <div>
      <div className="mt-24 backdrop-blur-md bg-white/10 border border-secondary/20 dark:border-white/20 hover:border-accent hover:shadow-primary rounded-2xl max-w-md text-white shadow-lg overflow-hidden">
        <div className="h-[8rem] w-full bg-accent/35 rounded-t-2xl"></div>
        <div className="p-6 ">
          <h2 className="text-2xl font-semibold mb-4 text-accent capitalize line-clamp-2">
            Glassy Gradient Card okeh ini adalah judul yang kamu lakukan dan
            jangan lai
          </h2>
          <p className="text-base dark:text-primary text-secondary">
            Ini contoh efek glassmorphism + gradient di background.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
