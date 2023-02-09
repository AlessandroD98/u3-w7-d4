import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import fantasy from "./JsonFile/fantasy.json";
import Booklist from "./BookList";

function App() {
  return (
    <div className="App">
      <Booklist books={fantasy} />
    </div>
  );
}

export default App;
