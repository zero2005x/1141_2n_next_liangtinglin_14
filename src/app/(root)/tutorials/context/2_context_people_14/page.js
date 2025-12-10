"use client";
import React from "react";
import Wrapper from "@/assets/wrappers/Tutorials_14";

import {
  PeopleContextProvider_14,
  usePeopleContext_14,
} from "../2_context_people_14/_context/_context";

const PropDrilling_14 = () => {
  return (
    <PeopleContextProvider_14>
      <Wrapper>
        <div className="container">
          <h3>prop drilling</h3>
          <List />
        </div>
      </Wrapper>
    </PeopleContextProvider_14>
  );
};

const List = () => {
  const { people } = usePeopleContext_14();
  return (
    <>
      {people.map((person) => {
        return <SinglePerson key={person.id} {...person} />;
      })}
    </>
  );
};

const SinglePerson = ({ id, name }) => {
  const { removePerson } = usePeopleContext_14();
  return (
    <Wrapper>
      <div className="item">
        <h4>{name}</h4>
        <button type="button" className="btn" onClick={() => removePerson(id)}>
          remove
        </button>
      </div>
    </Wrapper>
  );
};

export default PropDrilling_14;
