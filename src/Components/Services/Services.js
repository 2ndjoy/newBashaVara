import React, { useContext, useEffect, useState } from "react";

import { AuthContext } from "../../UserContext/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import Cards from "./Cards";

const Services = () => {
  return (
    <div className="grid lg:grid-cols-3 md:gap-16 gap-0 lg:mx-32 justify-center lg:justify-center my-11">
      <Cards></Cards>
      <Cards></Cards>
      <Cards></Cards>
      <Cards></Cards>
      <Cards></Cards>
      <Cards></Cards>
      <Cards></Cards>
    </div>
  );
};

export default Services;
