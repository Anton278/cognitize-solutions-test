import { useEffect, useRef, useState } from "react";
import GripVert from "../Icons/GripVert";

import s from "./Card.module.scss";
import { usePositions } from "@/stores/positions";

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
  const [styles, setStyles] = useState<React.CSSProperties>({});
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

      const cardsEl = cardRef.current.parentElement;
      if (!cardsEl) {
        return console.error("cards wrapper is null");
      }
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
        console.log("mousemove");

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
          console.log("mouseup ", e);
          if (!cardRef.current) {
            return;
          }

          document.removeEventListener("mousemove", onMouseMove);

          const elemBelow = document.elementFromPoint(
            e.clientX,
            e.clientY
          ) as HTMLElement;
          console.log(elemBelow);
          console.log("draggable ", cardRef.current);
          if (!elemBelow) {
            // outside viewport
            cardClone.remove();
          }
          if (elemBelow === cardsEl) {
            // between cards
            cardClone.remove();
          }
          if (elemBelow.dataset.isCard === "true") {
            // below element card
            const draggableIndex = cardRef.current.dataset.index;
            if (!draggableIndex) {
              return;
            }
            const droppableIndex = elemBelow.dataset.index;
            if (!droppableIndex) {
              return;
            }
            console.log("positions ", positions);

            const draggable = positions[+draggableIndex];
            console.log(draggable);

            const newOrder = positions.slice();
            newOrder.splice(+draggableIndex, 1);
            console.log("newOrder first mutation ", newOrder);

            newOrder.splice(+droppableIndex, 0, draggable);
            console.log("newOrder second mutation ", newOrder);

            changeOrder(newOrder);
            cardClone.remove();
          }
          const isPartOfCardElement = (el: Element | HTMLElement): boolean => {
            if (!el.parentElement) {
              return false;
            }
            if (el.parentElement.dataset.isCard === "true") {
              return true;
            }
            return isPartOfCardElement(el.parentElement);
          };
          console.log("isPartOfCardElement ", isPartOfCardElement(elemBelow));

          if (isPartOfCardElement(elemBelow)) {
            const draggableIndex = cardRef.current.dataset.index;
            if (!draggableIndex) {
              return;
            }
            const getUpperCardIndex = (el: Element | HTMLElement) => {
              if (!el.parentElement) {
                return;
              }
              if (el.parentElement.dataset.isCard === "true") {
                return el.parentElement.dataset.index;
              }
              return getUpperCardIndex(el.parentElement);
            };
            const droppableIndex = getUpperCardIndex(elemBelow) as string;
            if (!droppableIndex) {
              return;
            }
            console.log("positions ", positions);
            console.log(
              "draggableIndex ",
              draggableIndex,
              " droppableIndex ",
              droppableIndex
            );

            const draggable = positions[+draggableIndex];
            console.log(draggable);

            const newOrder = positions.slice();
            newOrder.splice(+draggableIndex, 1);
            console.log("newOrder first mutation ", newOrder);

            newOrder.splice(+droppableIndex, 0, draggable);
            console.log("newOrder second mutation ", newOrder);

            changeOrder(newOrder);
            cardClone.remove();
          } else {
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
      style={{ ...styles }}
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
