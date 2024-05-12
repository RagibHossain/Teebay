import React from "react";

const MyHeader: React.FC<{ content: string }> = ({ content }) => {
  return (
    <div style={{ display: "flex", justifyContent: "center", margin: "20px" }}>
      <p style={{ fontSize: "40px", fontWeight: "bolder" }}>{content}</p>
    </div>
  );
};

export default MyHeader;
