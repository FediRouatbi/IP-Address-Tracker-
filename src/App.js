import "./App.css";
import AddressContext from "./context/AddressContext";
import Search from "./components/Search";
import Data from "./components/Data";
import Map from "./components/Map";
function App() {
  return (
    <AddressContext>
      <div className="App">
        <Search />
        <Data />
        <Map />
      </div>
    </AddressContext>
  );
}

export default App;
