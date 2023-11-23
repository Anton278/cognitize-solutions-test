import { useState } from "react";

import Button from "../Button";
import Input from "../Input";
import { usePositions } from "@/stores/positions";

import s from "./CreatePosition.module.scss";

type CreatePositionProps = {
  id: number;
  onSuccess: () => void;
};

function CreatePosition({ id, onSuccess }: CreatePositionProps) {
  const createPosition = usePositions((state) => state.createPosition);
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [sellProduct, setSellProduct] = useState(false);
  const [setPrices, setSetPrices] = useState(false);
  const [viewAnalytics, setViewAnalytics] = useState(false);
  const [duel, setDuel] = useState(false);
  const [makeClaims, setMakeClaims] = useState(false);
  const [purchaseRawMaterials, setPurchaseRawMaterials] = useState(false);
  const [assignWorkers, setAssignWorkers] = useState(false);
  const [assignPositions, setAssignPositions] = useState(false);
  const [kickOutFromTheGang, setKickOutFromTheGang] = useState(false);

  const onSaveClick = async () => {
    if (!name.trim().length) {
      return setNameError("Поле должно быть заполнено");
    }
    try {
      setError("");
      setIsSending(true);
      await createPosition({
        name,
        tasksCount: 5,
        hourPrice: 50,
        duties: {
          trade: { sellProduct, setPrices, viewAnalytics },
          showdown: { duel, makeClaims },
          production: { purchaseRawMaterials, assignWorkers },
          control: { assignPositions, kickOutFromTheGang },
        },
        id,
      });
      onSuccess();
    } catch (err) {
      setError("Не удалось отправить данные");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className={s.tabContentRight}>
      <div className={s.nameBox}>
        <label htmlFor="name" className={s.inpLabel}>
          Название
        </label>
        <Input
          type="text"
          id="name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            setNameError("");
          }}
          error={nameError}
        />
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
                      id="sell-product"
                      checked={sellProduct}
                      onChange={(e) => setSellProduct(e.target.checked)}
                    />
                    <label htmlFor="sell-product" className={s.checkboxLabel}>
                      Продавать продукт
                    </label>
                  </div>
                </li>
                <li>
                  <div className={s.checkboxGroup}>
                    <Input
                      type="checkbox"
                      id="set-prices"
                      checked={setPrices}
                      onChange={(e) => setSetPrices(e.target.checked)}
                    />
                    <label htmlFor="set-prices" className={s.checkboxLabel}>
                      Выставлять цены
                    </label>
                  </div>
                </li>
                <li>
                  <div className={s.checkboxGroup}>
                    <Input
                      type="checkbox"
                      id="check-analytics"
                      checked={viewAnalytics}
                      onChange={(e) => setViewAnalytics(e.target.checked)}
                    />
                    <label
                      htmlFor="check-analytics"
                      className={s.checkboxLabel}
                    >
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
                    <Input
                      type="checkbox"
                      id="duel"
                      checked={duel}
                      onChange={(e) => setDuel(e.target.checked)}
                    />
                    <label htmlFor="duel" className={s.checkboxLabel}>
                      Дуель
                    </label>
                  </div>
                </li>
                <li>
                  <div className={s.checkboxGroup}>
                    <Input
                      type="checkbox"
                      id="make-claims"
                      checked={makeClaims}
                      onChange={(e) => setMakeClaims(e.target.checked)}
                    />
                    <label htmlFor="make-claims" className={s.checkboxLabel}>
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
                      id="purchase-raw-materials"
                      checked={purchaseRawMaterials}
                      onChange={(e) =>
                        setPurchaseRawMaterials(e.target.checked)
                      }
                    />
                    <label
                      htmlFor="purchase-raw-materials"
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
                      id="assign-workers"
                      checked={assignWorkers}
                      onChange={(e) => setAssignWorkers(e.target.checked)}
                    />
                    <label htmlFor="assign-workers" className={s.checkboxLabel}>
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
                      id="assign-positions"
                      checked={assignPositions}
                      onChange={(e) => setAssignPositions(e.target.checked)}
                    />
                    <label
                      htmlFor="assign-positions"
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
                      id="kick"
                      checked={kickOutFromTheGang}
                      onChange={(e) => setKickOutFromTheGang(e.target.checked)}
                    />
                    <label htmlFor="kick" className={s.checkboxLabel}>
                      Выгонять из банды
                    </label>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Button onClick={onSaveClick} disabled={isSending}>
        Сохранить
      </Button>
      {error && <p className={s.errorMessage}>{error}</p>}
    </div>
  );
}

export default CreatePosition;
