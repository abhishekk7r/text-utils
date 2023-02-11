import React from "react";

function Alert(props) {
  const capatalize = (words) => {
    const lower = words.toLowerCase();
    return lower[0].toUpperCase() + lower.slice(1);
  };

  return (
    <div style={{ height: "50px" }}>
      {props.alert &&
      <div
        className={`alert alert-${props.alert.type} alert-dismissible fade show`}
        role="alert"
      >
        <strong>{capatalize(props.alert.type)}</strong>: {props.alert.message}
      </div>}
    </div>
  );
}

export default Alert;
