import React from "react";
import Email from "./Email";
import ResetPassword from "./ResetPassword";

function ForgotPassword() {
  return (
    <div className="bg-primary text-secondary w-full h-[95vh] flex justify-center items-center">
      <Email />
    </div>
  );
}

export default ForgotPassword;
