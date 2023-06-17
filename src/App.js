import Dashboard from "./components/Dashboard/Dashboard";
import Header from "./components/Header";
import SideNavbar from "./components/SideNavbar";

function App() {
  return (
    <div className="m-2 min-h-[650px] bg-[#FFFFFF] rounded-2xl flex shadow-lg">
      <SideNavbar />
      <div className="w-full">
        <Header />
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
