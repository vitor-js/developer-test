import React, {
  useState,
  forwardRef,
  useImperativeHandle,
  createRef,
} from "react";

const Input = forwardRef((props, ref) => {
  const [error, setError] = useState(false);
  const inputRef = createRef();

  useImperativeHandle(ref, () => ({
    focusOnError() {
      setError(true);
      inputRef.current.focus();
    },
    resetError() {
      setError(false);
    },
  }));

  return (
    <>
      <div
        style={{
          marginTop: 20,
          marginBottom: 10,
          alignItems: "flex-start",
          justifyContent: "flex-start",
        }}
      >
        <p style={{ color: props.colorLabel, fontWeight: "bold" }}>
          {props.label}
        </p>
      </div>
      <div style={{ flexDirection: "row" }}>
        <input
          ref={inputRef}
          style={{
            height: 40,
            width: "100%",
            backgroundColor: "#F8F9FA",
            paddingLeft: 20,
            borderRadius: 5,
            fontSize: 15,
            borderWidth: 1,
            borderColor: error ? "#e91e63" : "#E4E7EB",
          }}
          placeholderpColor={"#7B8794"}
          {...props}
        />
      </div>
    </>
  );
});

export default Input;
