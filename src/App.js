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
          <div className="lg:ml-32 px-2 sm:px-6 lg:px-6 py-4 flex flex-col sm:flex-row sm:items-center">
            <Search />
          </div>
          <div className="lg:ml-32 ml-0 lg:mr-6 md:mr-2   px-2 sm:px-6 lg:px-6 ">
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
