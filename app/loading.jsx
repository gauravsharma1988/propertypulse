"use client";
import ClipLoader from "react-spinners/ClipLoader";

const override = {
  margin: "100px auto",
  display: "block",
};
const Loader = ({ loading }) => {
  return (
    <ClipLoader
      color="rgb(29 78 216)"
      loading={loading}
      cssOverride={override}
      size={150}
      aria-label="Loading Spinner"
    />
  );
};

export default Loader;
