import Navbar from "./component/Navbar";
import News from "./component/News";

function App() {
  return (
    <>
      <Navbar />
      <News pageSize={3} country={"us"} category={"health"} />
    </>
  );
}

export default App;
