Quick Review of React

useState 

in a counter component
const [count, setCount] = useState(0);
this is where we keep dynamic pieces of data within our component


Props pass data from one component to another

useEffect uses a conditional based on which states have updated or changed
we call a function based on those states changed

When does a component rerender?
When the state  or props change the parent component and its children will also rerender
