import "./App.css";

function App() {
  return (
    <div className="App">
      <Person name={"John"} age={"10"} />
      <Person name={"Janet"} age={20 + 10} />
    </div>
  );
}

function Person() {
  return (
    <div className="App">
      <h1 className="text-3xl font-bold font-mono text-cyan-300">Name: John</h1>
      <h2 className="font-bold font-mono text-2xl">Age: 30</h2>
    </div>
  );
}

export default App;
