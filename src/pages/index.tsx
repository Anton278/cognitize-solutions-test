import Positions from "@/components/Positions";
import Tabs from "@/components/Tabs";

import s from "@/styles/Home.module.scss";

function HomePage() {
  return (
    <div className={s.wrapper}>
      <div className={s.box}>
        <Tabs />
        <div className={s.tabContent}>
          <Positions />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
