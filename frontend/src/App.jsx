import Sidebar from "./components/Sidebar";
// import Dashboard from "./pages/Dashboard";
import "./App.css";
import Page from "./pages/Page";
function App() {
  return (
    <>
      <div className="app-container">
        <Sidebar />
        <Page/>
      </div>
    </>
  );
}

export default App;
