import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import "./style.css";

import Layout from "./Components/Layout";
import NavBar from "./Components/NavBar";
import SideBar from "./Components/SideBar";
import Content from "./Components/Content";
import Posts from "./Components/Contents";

class App extends React.Component {
  render() {
    return (
      <Suspense fallback={<>Loading...</>}>
        <Layout>
          <NavBar />
          <main className="main">
            <SideBar />
            <Suspense>
              <Content>
                <Routes>
                  <Route path="" element={<Posts.Welcome />} />
                  <Route path="batch" element={<Posts.BatchContent />} />
                  <Route path="suspense" element={<Posts.SuspenseContent />} />
                  <Route path="transition" element={<Posts.Transition />} />
                  <Route
                    path="rendering"
                    element={<Posts.RenderingAPIContent />}
                  />
                  <Route
                    path="strictmode"
                    element={<Posts.StrictModeContent />}
                  />
                  <Route path="newhooks" element={<Posts.HooksContent />} />
                  <Route
                    path="installation"
                    element={<Posts.InstallationContent />}
                  />
                  <Route path="working" element={<Posts.WorkingContent />} />
                  <Route path="*" element={<>Not Found</>} />
                </Routes>
              </Content>
            </Suspense>
          </main>
        </Layout>
      </Suspense>
    );
  }
}

export default App;
