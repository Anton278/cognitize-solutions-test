import { useState } from "react";

import Positions from "@/components/Positions";
import Tabs from "@/components/Tabs";

import s from "@/styles/Home.module.scss";

function HomePage() {
  const [activeTab, setActiveTab] = useState("positions");

  return (
    <div className={s.wrapper}>
      <div className={s.box}>
        <Tabs activeTab={activeTab} onTabClick={(tab) => setActiveTab(tab)} />
        <div className={s.tabContent}>
          {activeTab === "positions" && <Positions />}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
