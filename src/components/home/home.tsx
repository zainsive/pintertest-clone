import { useState } from "react";
import { Header } from "../header/header";
import "./home.css";

enum Tabs {
  FORYOU,
  EXPLORE,
}
export const HomePage = () => {
  const [activeTab, setActiveTab] = useState(Tabs.FORYOU);
  return (
    <>
      <Header />
      <div className="home-body-wrapper">
        <div className="home-tabs-wrapper">
          <span
            className={`home-tab ${activeTab === Tabs.FORYOU ? "active" : ""}`}
            onClick={() => setActiveTab(Tabs.FORYOU)}
          >
            For you
          </span>
          <span
            className={`home-tab ${activeTab === Tabs.EXPLORE ? "active" : ""}`}
            onClick={() => setActiveTab(Tabs.EXPLORE)}
          >
            Explore
          </span>
        </div>
      </div>
    </>
  );
};
