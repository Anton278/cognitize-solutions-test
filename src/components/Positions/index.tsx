import { useEffect, useState } from "react";

import { usePositions } from "@/stores/positions";
import Button from "../Button";
import Card from "../Card";
import CreatePosition from "../CreatePosition";

import s from "./Positions.module.scss";

function Positions() {
  const { isLoading, error, getPositions, positions } = usePositions();
  const [selectedId, setSelectedId] = useState<null | number>(null);

  const onCreateClick = () => {
    if (isLoading || error) {
      return;
    }
    let id: number | undefined;
    if (!positions.length) {
      return setSelectedId(1);
    }
    id = positions[0].id + 1;
    setSelectedId(id);
  };

  useEffect(() => {
    getPositions();
  }, []);

  useEffect(() => {
    if (isLoading || error) {
      return;
    }
    const setDefaultSelectedId = () => {
      const firstPosition = positions[0];
      setSelectedId(firstPosition.id);
    };

    setDefaultSelectedId();
  }, [isLoading, error]);

  return (
    <div className={s.contentWrapper}>
      <div className={s.tabContentLeft}>
        <div className={s.cards}>
          {error ? (
            <p className={s.errorMessage}>{error}</p>
          ) : isLoading ? (
            <p className={s.message}>loading...</p>
          ) : !positions.length ? (
            <p className={s.message}>No positions yet</p>
          ) : (
            positions.map((position) => (
              <Card
                key={position.id}
                title={position.name}
                hourPrice={position.hourPrice}
                tasksCount={position.tasksCount}
                onSelect={(id) => setSelectedId(id)}
                selected={selectedId === position.id}
                id={position.id}
              />
            ))
          )}
        </div>
        <Button onClick={onCreateClick}>Создать новую должность</Button>
      </div>
      {selectedId && (
        <CreatePosition id={selectedId} onSuccess={() => setSelectedId(null)} />
      )}
    </div>
  );
}

export default Positions;
