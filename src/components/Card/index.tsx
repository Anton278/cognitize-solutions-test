import { useEffect, useRef } from "react";

import GripVert from "../Icons/GripVert";
import { usePositions } from "@/stores/positions";
import { isPartOfCardElement } from "@/utils/isPartOfCardElement";

import s from "./Card.module.scss";
import { getCardIndex } from "@/utils/getCardIndex";

type CardProps = {
  title: string;
  tasksCount: number;
  hourPrice: number;
  id: number;
  onSelect: (id: number) => void;
  selected: boolean;
  index: number;
};

function Card({
  title,
  tasksCount,
  hourPrice,
  onSelect,
  selected,
  id,
  index,
}: CardProps) {
  const positions = usePositions((state) => state.positions);
  const changeOrder = usePositions((state) => state.changeOrder);
  const cardRef = useRef<HTMLDivElement>(null);
  const gripRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!gripRef.current) {
      return console.error("grip ref absent");
    }
    const onMouseDown = (e: MouseEvent) => {
      if (!cardRef.current) {
        return;
      }
      const shiftY = e.clientY - cardRef.current.getBoundingClientRect().top;
      const cardClone = cardRef.current.cloneNode(true) as HTMLElement;
      cardClone.setAttribute(
        "style",
        `position: absolute; width: ${cardRef.current.offsetWidth}px; pointer-events: none`
      );
      cardRef.current.insertAdjacentElement("afterend", cardClone);

      const onMouseMove = (e: MouseEvent) => {
        if (!cardRef.current) {
          return;
        }
        const top = e.pageY - shiftY + "px";
        cardClone.setAttribute(
          "style",
          `position: absolute; width: ${cardRef.current.offsetWidth}px; top: ${top}; pointer-events: none`
        );
      };
      document.addEventListener("mousemove", onMouseMove);

      document.addEventListener(
        "mouseup",
        (e) => {
          if (!cardRef.current) {
            return;
          }
          document.removeEventListener("mousemove", onMouseMove);
          const elemBelow = document.elementFromPoint(
            e.clientX,
            e.clientY
          ) as HTMLElement;
          if (!elemBelow) {
            // outside viewport
            cardClone.remove();
            return;
          }
          if (elemBelow === cardRef.current.parentElement) {
            // between cards
            cardClone.remove();
            return;
          }
          if (elemBelow.dataset.isCard === "true") {
            // above card element
            const draggableIndex = cardRef.current.dataset.index;
            if (!draggableIndex) {
              return;
            }
            const droppableIndex = elemBelow.dataset.index;
            if (!droppableIndex) {
              return;
            }
            const draggable = positions[+draggableIndex];
            // reorder positions
            const newOrder = positions.slice();
            newOrder.splice(+draggableIndex, 1);
            newOrder.splice(+droppableIndex, 0, draggable);
            changeOrder(newOrder);
            cardClone.remove();
            return;
          }
          if (isPartOfCardElement(elemBelow)) {
            // below element belongs to card
            const draggableIndex = cardRef.current.dataset.index;
            if (!draggableIndex) {
              return;
            }
            const droppableIndex = getCardIndex(elemBelow);
            if (!droppableIndex) {
              return;
            }
            const draggable = positions[+draggableIndex];
            // reorder
            const newOrder = positions.slice();
            newOrder.splice(+draggableIndex, 1);
            newOrder.splice(+droppableIndex, 0, draggable);
            changeOrder(newOrder);
            cardClone.remove();
          } else {
            // cursor somewhere else
            cardClone.remove();
          }
        },
        { once: true }
      );
    };
    gripRef.current.addEventListener("mousedown", onMouseDown);

    return () => {
      if (!gripRef.current) {
        return console.error("grip ref absent");
      }
      gripRef.current.removeEventListener("mousedown", onMouseDown);
    };
  }, [gripRef, positions]);

  return (
    <div
      className={`${s.card} ${selected ? s.cardActive : ""}`}
      onClick={() => onSelect(id)}
      ref={cardRef}
      data-index={index}
      data-is-card={true}
    >
      <div className={s.cardLeft}>
        <GripVert ref={gripRef} />
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
