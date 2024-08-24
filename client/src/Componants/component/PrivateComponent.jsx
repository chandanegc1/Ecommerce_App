import React, {useEffect} from "react";
import { useNavigate } from "react-router-dom";

const PrivateComponent = (props) => {
  const { Component } = props;
  const navigate = useNavigate();

  useEffect(() => {
    const local = localStorage.getItem("user");
    if (!local) {
      navigate("/login");
    }
  }, []);

  return (
    <div>
      <Component />
    </div>
  );
};
export default PrivateComponent;
