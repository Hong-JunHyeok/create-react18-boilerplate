import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import "./style.css";

import Layout from "./Components/Layout";
import NavBar from "./Components/NavBar";
import SideBar from "./Components/SideBar";
import Content from "./Components/Content";

import Transition from "./Components/Contents/Transition";
import BatchContent from "./Components/Contents/BatchContent";
import SuspenseContent from "./Components/Contents/SuspenseContent";
import WorkingContent from "./Components/Contents/WorkingContent";
import Welcome from "./Components/Contents/Welcome";

class App extends React.Component {
  render() {
    return (
      <Suspense fallback={<>Loading...</>}>
        <Layout>
          <NavBar />
          <main className="main">
            <SideBar />
            <Content>
              <Routes>
                <Route path="" element={<Welcome />} />
                <Route path="batch" element={<BatchContent />} />
                <Route path="suspense" element={<SuspenseContent />} />
                <Route path="transition" element={<Transition />} />
                <Route path="working" element={<WorkingContent />} />
                <Route path="*" element={<>Not Found</>} />
              </Routes>
            </Content>
          </main>
        </Layout>
      </Suspense>
    );
  }
}

export default App;
