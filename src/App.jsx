import useInput from "./hooks/useInput";
// import useLocalStorage from "./hooks/useLocalStorage";

function App() {
  // const [value, setValue] = useLocalStorage("query", "");
  // const handleChange = (e) => {
  //   setValue(e.target.value);
  // };

  const data = useInput("");
  console.log(data.value);

  return (
    <>
      <input type="text" {...data} />
    </>
  );
}

export default App;
