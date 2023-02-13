import React from "react";

interface SuccessProps {
  success: string;
}

const Success: React.FC<SuccessProps> = ({ success }) => {
  return (
    <div className="alert alert-success" role="alert">
      {success}
    </div>
  );
};

export default Success;
