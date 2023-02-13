import React from "react";

//Loading message to be displayed
const Loader: React.FC = () => {
  return (
    <div className="spinner-border text-warning" role="status">
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default Loader;
