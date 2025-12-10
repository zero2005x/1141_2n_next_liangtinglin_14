"use client";
import React, { useState, createContext, useContext } from "react";
import { data } from "../../../_assets/_data/data";

const PeopleContext = createContext();

export const PeopleContextProvider_14 = ({ children }) => {
  const [people, setPeople] = React.useState(data);
  console.log("people data:", people);
  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id);
    });
  };
  return (
    <PeopleContext.Provider value={{ people, removePerson }}>
      {children}
    </PeopleContext.Provider>
  );
};
export const usePeopleContext_14 = () => {
  return useContext(PeopleContext);
};
