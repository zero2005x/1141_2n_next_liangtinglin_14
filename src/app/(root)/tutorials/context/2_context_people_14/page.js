"use client";
import React from "react";
import Wrapper from "@/assets/wrappers/Tutorials_14";
import { data } from "../../_assets/_data/data";

const PropDrilling_14 = () => {
  const [people, setPeople] = React.useState(data);
  console.log("people data:", people);

  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id);
    });
  };

  return (
    <Wrapper>
      <div className="container">
        <h3>prop drilling</h3>
        <List people={people} removePerson={removePerson} />
      </div>
    </Wrapper>
  );
};

const List = ({ people, removePerson }) => {
  return (
    <div>
      {people.map((person) => {
        return (
          <SinglePerson
            key={person.id}
            {...person}
            removePerson={removePerson}
          />
        );
      })}
    </div>
  );
};

const SinglePerson = ({ id, name, removePerson }) => {
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
