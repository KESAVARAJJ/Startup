import React from "react";

function Section() {
  return (
    <div>
      <div className="grid grid-cols-2 p-10 items-center justify-items-center">
        <div className="Container">
          <h1 className="text-blue-800 text-3xl font-bold pt-9">
            “We have set ourselves an ambitious target of becoming a $1 Trillion
            economy by 2030”
          </h1>
          <h3 className="text-gray-500 text-xl font-semibold">
            - Thiru. M.K. Stalin
          </h3>
          <p className="text-gray-500 text-xlfont-light">
            Hon'ble Chief Minister of Tamil Nadu
          </p>
        </div>
        <div>
          <img src="https://startuptn.in/images/cmimage.png" />
        </div>
      </div>
    </div>
  );
}

export default Section;
