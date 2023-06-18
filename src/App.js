import Dashboard from "./components/Dashboard/Dashboard";
import Header from "./components/Header";
import SideNavbar from "./components/SideNavbar";

function App() {
  return (
    <div className="m-[6px] h-[750px] bg-[#FFFFFF] rounded-2xl flex shadow-lg overflow-hidden">
      <SideNavbar />
      <div className="w-full">
        <Header />
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
