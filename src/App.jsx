import React from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "./Components/Layout";
import NavBar from "./Components/NavBar";
import SideBar from "./Components/SideBar";
import Content from "./Components/Content";

import Batch from "./Components/Contents/Batch";
import Welcome from "./Components/Contents/Welcome";

import "./style.css";

class App extends React.Component {
  render() {
    return (
      <>
        <Layout>
          <NavBar />
          <main className="main">
            <SideBar />
            <Content>
              <Routes>
                <Route path="" element={<Welcome />} />
                <Route path="batch" element={<Batch />} />
                <Route path="suspense" element={<>Suspense</>} />
              </Routes>
            </Content>
          </main>
        </Layout>
      </>
    );
  }
}

export default App;
