import React, { useEffect, useState } from "react";
import bcrypt from "bcryptjs";

const PasswordCheck = ({ plainTextPassword, hashedPassword, onTextChange }) => {
  const [isMatch, setIsMatch] = useState(null);
  const [paragraphText, setParagraphText] = useState(
    "Enter a password to check."
  );

  useEffect(() => {
    if (plainTextPassword && hashedPassword) {
      bcrypt.compare(plainTextPassword, hashedPassword, (err, result) => {
        if (err) {
          console.error("Error comparing passwords:", err);
          setIsMatch(false);
          setParagraphText("Error comparing passwords.");
        } else {
          setIsMatch(result);
          setParagraphText(
            result ? "Password matches!" : "Password does not match."
          );
        }
        // Pass the paragraph text to the parent component through the callback
        onTextChange(result ? "Password matches!" : "Password does not match.");
      });
    }
  }, [plainTextPassword, hashedPassword, onTextChange]);

  return (
    <div className="lg:p-2 p-1">
      <p
        className={
          isMatch === null
            ? "text-secondary text-xs"
            : isMatch
            ? "text-[#67ff64] text-sm"
            : "text-[#ff5e5e] text-sm"
        }
      >
        {paragraphText}
      </p>
    </div>
  );
};

export default PasswordCheck;
