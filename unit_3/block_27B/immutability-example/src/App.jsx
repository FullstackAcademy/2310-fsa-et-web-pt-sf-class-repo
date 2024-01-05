import { useState } from 'react'

function App() {
  const [names, setNames] = useState(["Thomas The Train", "Jeremy Lin", "Casper"]);
  const [name, setName] = useState("");

  return (
    <>
      <form onSubmit={(e) => {
        // to grab the name inside of names
        // push the name into the array of names 
        event.preventDefault();
        //immutability
        //names values and expect it to be reflected within the state
        //we need to set the state to a new object/array
        const newArray = [...names, name];
        setNames(newArray);
      }}>
        <label>
          Name:
          <input value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <button>Click Me To Submit</button>
      </form>
      {
        names.map((name) => {
          return <div>{name}</div>
        })
      }

    </>
  )
}

export default App
