import "./App.css";
import Header from "./components/header/header";
import Search from "./components/search/search";
import Card from "./components/card/card";
import Toolbar from "./components/toolbar/toolbar";
function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="pointer-events-auto relative  pb-4  sm:pb-0">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row sm:items-center">
            <Search />
          </div>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <Toolbar />
            <div className="content pt-4">
              <Card />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
