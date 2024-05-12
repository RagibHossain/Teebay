import React from "react";
interface IProps {
  height: string;
  widthPercentage: string;
  labelText: string;
  type: string;
  placeholder?: boolean;
}

const MyInput: React.FC<IProps> = ({
  height,
  widthPercentage,
  labelText,
  type,
  placeholder,
}) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", margin: "20px" }}>
      {!placeholder ? (
        <>
          {" "}
          <label style={{ fontSize: "20px", fontWeight: "bolder" }}>
            {labelText}
          </label>
          <input
            type={type}
            style={{
              height: height,
              width: widthPercentage,
              marginTop: "10px",
              borderRadius: "2%",
            }}
          />
        </>
      ) : (
        <input
          type={type}
          placeholder={labelText}
          style={{
            height: height,
            width: widthPercentage,
            marginTop: "10px",
            borderRadius: "2%",
            padding: "5px",
          }}
        />
      )}
    </div>
  );
};

export default MyInput;
