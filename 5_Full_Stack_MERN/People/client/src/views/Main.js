import React, { useEffect, useState } from "react";
import PersonForm from "../components/PersonForm";
import PersonList from "../components/PersonList";
import axios from "axios";
const Main = (props) => {
  const [people, setPeople] = useState(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/people")
      .then((res) => {
        setPeople(res.data);
        setLoaded(true);
      })
      .catch((err) => console.error(err));
  }, [people]);

  const removeFromDom = (personId) => {
    setPeople(people.filter((person) => person._id != personId));
  };

  return (
    <div>
      <PersonForm />
      {loaded && <PersonList people={people} />}
    </div>
  );
};

export default Main;
