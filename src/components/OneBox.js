import React from "react";
import { useAuth } from "../context/Authcontext";

const OneBox = () => {
  const { token } = useAuth();

  console.log(token);
  return <div>OneBox</div>;
};

export default OneBox;
