// import "./App.css";

import { Home } from "../pages/Home";
import { DataContextProvider } from "../shared/context/DataContext";

function App() {
  return (
    <DataContextProvider>
      <Home />;
    </DataContextProvider>
  );
}

export default App;
