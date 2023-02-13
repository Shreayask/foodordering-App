import React from "react";

interface ErrorProps {
  error: string;
}

const Error: React.FC<ErrorProps> = ({ error }) => {
  return (
    //Displays Error message
    <div className="alert alert-danger" role="alert">
      {error}
    </div>
  );
};

export default Error;
