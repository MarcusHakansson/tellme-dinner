import React, { useState } from "react";
import firebase from "firebase";

export const ColorInput = ({ color }) => {
  const [name, setName] = useState(color.name);

  const onUpdate = () => {
    const db = firebase.firestore();
    db.collection("colors")
      .doc(color.id)
      .set({ ...color, name });
  };

  const onDelete = () => {
    const db = firebase.firestore();
    db.collection("colors")
      .doc(color.id)
      .delete();
  };

  return (
    <>
      <input
        value={name}
        onChange={e => {
          setName(e.target.value);
        }}
      />
      <button onClick={onUpdate}>Update</button>
      <button onClick={onDelete}>Delete</button>
    </>
  );
};
