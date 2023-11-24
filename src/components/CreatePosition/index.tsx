import { useState, useEffect } from "react";

import Button from "../Button";
import Input from "../Input";
import { usePositions } from "@/stores/positions";
import { Position } from "@/models/Position";

import s from "./CreatePosition.module.scss";

type CreatePositionProps = {
  id: number;
  onSuccess: () => void;
};

function CreatePosition({ id, onSuccess }: CreatePositionProps) {
  const positions = usePositions((state) => state.positions);
  const position = positions.find((position) => position.id === id);
  const createPosition = usePositions((state) => state.createPosition);
  const updatePosition = usePositions((state) => state.updatePosition);
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState("");
  const [nameError, setNameError] = useState("");

  const [data, setData] = useState({
    name: "",
    sellProduct: false,
    setPrices: false,
    viewAnalytics: false,
    duel: false,
    makeClaims: false,
    purchaseRawMaterials: false,
    assignWorkers: false,
    assignPositions: false,
    kickOutFromTheGang: false,
  });

  const onSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    if (!data.name.trim().length) {
      return setNameError("Поле должно быть заполнено");
    }
    try {
      setError("");
      setIsSending(true);
      const newPosition: Position = {
        name: data.name,
        tasksCount: 5,
        hourPrice: 50,
        duties: {
          trade: {
            sellProduct: data.sellProduct,
            setPrices: data.setPrices,
            viewAnalytics: data.viewAnalytics,
          },
          showdown: { duel: data.duel, makeClaims: data.makeClaims },
          production: {
            purchaseRawMaterials: data.purchaseRawMaterials,
            assignWorkers: data.assignWorkers,
          },
          control: {
            assignPositions: data.assignPositions,
            kickOutFromTheGang: data.kickOutFromTheGang,
          },
        },
        id,
      };
      position
        ? await updatePosition(newPosition)
        : await createPosition(newPosition);
      onSuccess();
    } catch (err) {
      setError("Не удалось отправить данные");
    } finally {
      setIsSending(false);
    }
  };

  const onChange = (e: React.ChangeEvent<HTMLFormElement>) => {
    if (e.target.id === "name") {
      setNameError("");
      setData((oldData) => ({ ...oldData, [e.target.id]: e.target.value }));
      return;
    }
    setData((oldData) => ({ ...oldData, [e.target.id]: e.target.checked }));
  };

  useEffect(() => {
    setNameError("");
    if (!position) {
      setData({
        name: "",
        sellProduct: false,
        setPrices: false,
        viewAnalytics: false,
        duel: false,
        makeClaims: false,
        purchaseRawMaterials: false,
        assignWorkers: false,
        assignPositions: false,
        kickOutFromTheGang: false,
      });
      return;
    }
    setData({
      name: position.name,
      sellProduct: position.duties.trade.sellProduct,
      setPrices: position.duties.trade.setPrices,
      viewAnalytics: position.duties.trade.viewAnalytics,
      duel: position.duties.showdown.duel,
      makeClaims: position.duties.showdown.makeClaims,
      purchaseRawMaterials: position.duties.production.purchaseRawMaterials,
      assignWorkers: position.duties.production.assignWorkers,
      assignPositions: position.duties.control.assignPositions,
      kickOutFromTheGang: position.duties.control.kickOutFromTheGang,
    });
  }, [id, position]);

  return (
    <form className={s.tabContentRight} onChange={onChange} onSubmit={onSubmit}>
      <div className={s.nameBox}>
        <label htmlFor="name" className={s.inpLabel}>
          Название
        </label>
        <Input type="text" id="name" value={data.name} error={nameError} />
      </div>
      <div className={s.dutiesBox}>
        <div className={s.dutiesHead}>
          <h5 className={s.dutiesTitle}>Обязаности</h5>
        </div>
        <div className={s.dutiesBody}>
          <div className={s.dutiesCol}>
            <div className={s.dutyGroup}>
              <p className={s.dutyCategory}>Торговля</p>
              <ul className={s.duitesList}>
                <li>
                  <div className={s.checkboxGroup}>
                    <Input
                      type="checkbox"
                      id="sellProduct"
                      checked={data.sellProduct}
                    />
                    <label htmlFor="sellProduct" className={s.checkboxLabel}>
                      Продавать продукт
                    </label>
                  </div>
                </li>
                <li>
                  <div className={s.checkboxGroup}>
                    <Input
                      type="checkbox"
                      id="setPrices"
                      checked={data.setPrices}
                    />
                    <label htmlFor="setPrices" className={s.checkboxLabel}>
                      Выставлять цены
                    </label>
                  </div>
                </li>
                <li>
                  <div className={s.checkboxGroup}>
                    <Input
                      type="checkbox"
                      id="viewAnalytics"
                      checked={data.viewAnalytics}
                    />
                    <label htmlFor="viewAnalytics" className={s.checkboxLabel}>
                      Смотреть аналитику
                    </label>
                  </div>
                </li>
              </ul>
            </div>
            <div className={s.dutyGroup}>
              <p className={s.dutyCategory}>Разборки</p>
              <ul className={s.duitesList}>
                <li>
                  <div className={s.checkboxGroup}>
                    <Input type="checkbox" id="duel" checked={data.duel} />
                    <label htmlFor="duel" className={s.checkboxLabel}>
                      Дуель
                    </label>
                  </div>
                </li>
                <li>
                  <div className={s.checkboxGroup}>
                    <Input
                      type="checkbox"
                      id="makeClaims"
                      checked={data.makeClaims}
                    />
                    <label htmlFor="makeClaims" className={s.checkboxLabel}>
                      Выставлять претензии
                    </label>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className={s.dutiesCol}>
            <div className={s.dutyGroup}>
              <p className={s.dutyCategory}>Производство</p>
              <ul className={s.duitesList}>
                <li>
                  <div className={s.checkboxGroup}>
                    <Input
                      type="checkbox"
                      id="purchaseRawMaterials"
                      checked={data.purchaseRawMaterials}
                    />
                    <label
                      htmlFor="purchaseRawMaterials"
                      className={s.checkboxLabel}
                    >
                      Закупать сырье
                    </label>
                  </div>
                </li>
                <li>
                  <div className={s.checkboxGroup}>
                    <Input
                      type="checkbox"
                      id="assignWorkers"
                      checked={data.assignWorkers}
                    />
                    <label htmlFor="assignWorkers" className={s.checkboxLabel}>
                      Назначать рабочих
                    </label>
                  </div>
                </li>
              </ul>
            </div>
            <div className={s.dutyGroup}>
              <p className={s.dutyCategory}>Управление</p>
              <ul className={s.duitesList}>
                <li>
                  <div className={s.checkboxGroup}>
                    <Input
                      type="checkbox"
                      id="assignPositions"
                      checked={data.assignPositions}
                    />
                    <label
                      htmlFor="assignPositions"
                      className={s.checkboxLabel}
                    >
                      Назначать должности
                    </label>
                  </div>
                </li>
                <li>
                  <div className={s.checkboxGroup}>
                    <Input
                      type="checkbox"
                      id="kickOutFromTheGang"
                      checked={data.kickOutFromTheGang}
                    />
                    <label
                      htmlFor="kickOutFromTheGang"
                      className={s.checkboxLabel}
                    >
                      Выгонять из банды
                    </label>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Button disabled={isSending} type="submit">
        Сохранить
      </Button>
      {error && <p className={s.errorMessage}>{error}</p>}
    </form>
  );
}

export default CreatePosition;
