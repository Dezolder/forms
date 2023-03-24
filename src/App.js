import './App.css';
import SignIn from "./SignIn";
import SignOn from "./SignOn";
import { MantineProvider } from '@mantine/core';

function App() {
  const handleSubmit = (e, from) => {
    e.preventDefault()
    console.log(from)
  }
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>

      <div className="App">
        <header className="App-header">
          <SignIn onSubmit={handleSubmit} />
          <hr />
          <SignOn onSubmit={handleSubmit}/>
        </header>
      </div>
    </MantineProvider>

  );
}

export default App;
