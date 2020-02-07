import React, { useEffect, useState } from "react";
import firebase from "./firebase";
import { ColorInput } from "./Colorinput";

function App() {
  const [colors, setColors] = useState([]);
  const [newColorName, setNewColorName] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const db = firebase.firestore();
      const data = await db.collection("colors").get();
      setColors(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
    };
    fetchData();
  }, []);

  const onCreate = () => {
    const db = firebase.firestore();
    db.collection("colors").add({ name: newColorName });
  };

  return (
    <ul>
      <input
        value={newColorName}
        onChange={e => setNewColorName(e.target.value)}
      />
      <button onClick={onCreate}>create</button>
      {colors.map(color => (
        <li key={color.name}>
          <ColorInput color={color} />
        </li>
      ))}
    </ul>
  );
}

export default App;
