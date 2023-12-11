import React, { Component, useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { Nav, UIEditNote } from "./ui-components";
import { DataStore } from "@aws-amplify/datastore";
import { Note } from "./models";
import "./App.css";

function EditNote() {
  return <Put />;
}

function Put() {
  const { cid } = useParams();
  const [cr, setMe] = useState({});
  
  useEffect(() => {
    const pullData = async () => {
      const found = await DataStore.query(Note, cid);
      console.log("This should be an array object: ");
      console.log(found);
      setMe(found[0]);
      console.log("Look! the name field: " + found[0]?.name);
    };

    pullData();
  }, [cid]);

  return (
    <div>
      <header className="App-header">
        <Nav />
        <UIEditNote fx={cr} />
      </header>
    </div>
  );
}

export default EditNote;
