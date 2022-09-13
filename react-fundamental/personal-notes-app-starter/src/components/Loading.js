import React from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Loading = () => {
  return (
    <section className="notes-loading">
      <AiOutlineLoading3Quarters className="notes-loading-icon" />
      <p>Fetching data...</p>
    </section>
  );
};

export default Loading;
