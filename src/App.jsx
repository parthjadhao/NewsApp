import { useState } from "react";
import Navbar from "./component/Navbar";
import News from "./component/News";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

function App() {
  const apiKey = "dcfd93b5e575418a906ed05bdffd2177"
  const [progress, setProgress] = useState(0);

  const handleSetProgress = (value) => {
    setProgress(value);
  };

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <LoadingBar color="#f11946" progress={progress} height={3} />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <News
                setProgress={handleSetProgress}
                key="general"
                pageSize={15}
                country={"us"}
                category={"general"}
                apikey={apiKey}
              />
            }
          ></Route>
          <Route
            exact
            path="/business"
            element={
              <News
                setProgress={handleSetProgress}
                key="business"
                pageSize={15}
                country={"us"}
                category={"business"}
                apikey={apiKey}
              />
            }
          ></Route>
          <Route
            exact
            path="/entertainment"
            element={
              <News
                setProgress={handleSetProgress}
                key="entertainment"
                pageSize={15}
                country={"us"}
                category={"entertainment"}
                apikey={apiKey}
              />
            }
          ></Route>
          <Route
            exact
            path="/general"
            element={
              <News
                setProgress={handleSetProgress}
                key="general"
                pageSize={15}
                country={"us"}
                category={"general"}
                apikey={apiKey}
              />
            }
          ></Route>
          <Route
            exact
            path="/health"
            element={
              <News
                setProgress={handleSetProgress}
                key="health"
                pageSize={15}
                country={"us"}
                category={"health"}
                apikey={apiKey}
              />
            }
          ></Route>
          <Route
            exact
            path="/science"
            element={
              <News
                setProgress={handleSetProgress}
                key="science"
                pageSize={15}
                country={"us"}
                category={"science"}
                apikey={apiKey}
              />
            }
          ></Route>
          <Route
            exact
            path="/sports"
            element={
              <News
                setProgress={handleSetProgress}
                key="sports"
                pageSize={15}
                country={"us"}
                category={"sports"}
                apikey={apiKey}
              />
            }
          ></Route>
          <Route
            exact
            path="/technology"
            element={
              <News
                setProgress={handleSetProgress}
                key="technology"
                pageSize={15}
                country={"us"}
                category={"technology"}
                apikey={apiKey}
              />
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
