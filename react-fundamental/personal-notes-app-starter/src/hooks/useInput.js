import React from "react";

export const useInput = (defaultValue = "") => {
  const [value, setValue] = React.useState(defaultValue);
  const handleValueChange = (event) => setValue(event.target.value);

  return [value, handleValueChange];
};
