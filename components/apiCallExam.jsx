import React, { useEffect, useState } from "react";

const APICallExam = () => {
  const [secretCode, setSecretCode] = useState(null);

  const handleClick = async () => {
    try {
      const passcode = "ehen2rfow";
      const response = await fetch(`https://webdev2-class-demo.vercel.app/api/sampleReqs/${passcode}`);
      const data = await response.json();
      setSecretCode(data.secretCode);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      <div className="flex items-center justify-center">
        <button className="bg-red-100 p-2 rounded-md border border-red-500" onClick={handleClick}>
          Submit
        </button>
      </div>
      {secretCode && (
        <div className="mt-4 text-center">
          <h2 className="text-lg font-bold">Secret Code:</h2>
          <p>{secretCode}</p>
        </div>
      )}
    </div>
  );
};

export default APICallExam;