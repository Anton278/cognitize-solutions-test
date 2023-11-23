import s from "./Tabs.module.scss";

function Tabs() {
  return (
    <div className={s.tabs}>
      <button className={s.tab}>Иерархия</button>
      <button className={[s.tab, s.tabActive].join(" ")}>Должности</button>
      <button className={s.tab}>Список персонала</button>
      <button className={s.tab}>Наборы экипировки</button>
    </div>
  );
}

export default Tabs;
