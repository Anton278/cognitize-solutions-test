import Button from "../Button";
import Card from "../Card";
import Input from "../Input";

import s from "./Positions.module.scss";

function Positions() {
  return (
    <div className={s.contentWrapper}>
      <div className={s.tabContentLeft}>
        <div className={s.cards}>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <Button>Создать новую должность</Button>
      </div>
      <div className={s.tabContentRight}>
        <div className={s.nameBox}>
          <label htmlFor="name" className={s.inpLabel}>
            Название
          </label>
          <Input type="text" id="name" defaultValue={"Новобранец"} />
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
                      <Input type="checkbox" id="sell-product" />
                      <label htmlFor="sell-product" className={s.checkboxLabel}>
                        Продавать продукт
                      </label>
                    </div>
                  </li>
                  <li>
                    <div className={s.checkboxGroup}>
                      <Input type="checkbox" id="set-prices" />
                      <label htmlFor="set-prices" className={s.checkboxLabel}>
                        Выставлять цены
                      </label>
                    </div>
                  </li>
                  <li>
                    <div className={s.checkboxGroup}>
                      <Input type="checkbox" id="check-analytics" />
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
                      <Input type="checkbox" id="duel" />
                      <label htmlFor="duel" className={s.checkboxLabel}>
                        Дуель
                      </label>
                    </div>
                  </li>
                  <li>
                    <div className={s.checkboxGroup}>
                      <Input type="checkbox" id="make-claims" />
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
                      <Input type="checkbox" id="purchase-raw-materials" />
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
                      <Input type="checkbox" id="assign-workers" />
                      <label
                        htmlFor="assign-workers"
                        className={s.checkboxLabel}
                      >
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
                      <Input type="checkbox" id="assign-positions" />
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
                      <Input type="checkbox" id="kick" />
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
        <Button>Сохранить</Button>
      </div>
    </div>
  );
}

export default Positions;
