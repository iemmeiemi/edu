import React from "react";

export const PageHeader = ({ pageScope, pageName }) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <div className="flex-1/2 flex-col text-left">
          <p>Page/{pageScope}</p>
          <span className="text-bold text-2xl">{pageName}</span>
        </div>
        <div className="flex-1/2"></div>
      </div>
      <hr />
    </div>
  );
};
