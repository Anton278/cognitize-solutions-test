import GripVert from "../Icons/GripVert";

import s from "./Card.module.scss";

type CardProps = {
  title: string;
  tasksCount: number;
  hourPrice: number;
  id: number;
  onSelect: (id: number) => void;
  selected: boolean;
};

function Card({
  title,
  tasksCount,
  hourPrice,
  onSelect,
  selected,
  id,
}: CardProps) {
  return (
    <div
      className={`${s.card} ${selected ? s.cardActive : ""}`}
      onClick={() => onSelect(id)}
    >
      <div className={s.cardLeft}>
        <GripVert />
        <div>
          <h5 className={s.cardTitle}>{title}</h5>
          <p className={s.cardSubtitle}>{tasksCount} заданий</p>
        </div>
      </div>
      <p className={s.cardPrice}>
        <span className={s.cardPriceAccent}>${hourPrice}</span> / час
      </p>
    </div>
  );
}

export default Card;
