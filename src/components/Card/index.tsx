import GripVert from "../Icons/GripVert";

import s from "./Card.module.scss";

function Card() {
  return (
    // s.cardActive
    <div className={[s.card].join(" ")}>
      <div className={s.cardLeft}>
        <GripVert />
        <div>
          <h5 className={s.cardTitle}>Рядовой</h5>
          <p className={s.cardSubtitle}>15 заданий</p>
        </div>
      </div>
      <p className={s.cardPrice}>
        <span className={s.cardPriceAccent}>$80</span> / час
      </p>
    </div>
  );
}

export default Card;
