import s from "./Tabs.module.scss";

type TabsProps = {
  activeTab: string;
  onTabClick: (tab: string) => void;
};

function Tabs({ activeTab, onTabClick }: TabsProps) {
  return (
    <div className={s.tabs}>
      <button
        className={`${s.tab} ${activeTab === "hierarchy" ? s.tabActive : ""}`}
        onClick={() => onTabClick("hierarchy")}
      >
        Иерархия
      </button>
      <button
        className={`${s.tab} ${activeTab === "positions" ? s.tabActive : ""}`}
        onClick={() => onTabClick("positions")}
      >
        Должности
      </button>
      <button
        className={`${s.tab} ${activeTab === "staff" ? s.tabActive : ""}`}
        onClick={() => onTabClick("staff")}
      >
        Список персонала
      </button>
      <button
        className={`${s.tab} ${activeTab === "equipment" ? s.tabActive : ""}`}
        onClick={() => onTabClick("equipment")}
      >
        Наборы экипировки
      </button>
    </div>
  );
}

export default Tabs;
