import GripVert from "@/components/Icons/GripVert";
import s from "@/styles/Home.module.scss";

function HomePage() {
  return (
    <div className={s.wrapper}>
      <div className={s.box}>
        <div className={s.tabs}>
          <button className={s.tab}>Иерархия</button>
          <button className={[s.tab, s.tabActive].join(" ")}>Должности</button>
          <button className={s.tab}>Список персонала</button>
          <button className={s.tab}>Наборы экипировки</button>
        </div>
        <div className={s.tabContent}>
          <div className={s.contentWrapper}>
            <div className={s.tabContentLeft}>
              <div className={s.cards}>
                <div className={[s.card, s.cardActive].join(" ")}>
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
                <div className={s.card}>
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
                <div className={s.card}>
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
                <div className={s.card}>
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
                <div className={s.card}>
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
                <div className={s.card}>
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
                <div className={s.card}>
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
              </div>
              <button className={s.blueButton}>Создать новую должность</button>
            </div>
            <div className={s.tabContentRight}>
              <div className={s.nameBox}>
                <label htmlFor="name" className={s.inpLabel}>
                  Название
                </label>
                <input
                  type="text"
                  id="name"
                  defaultValue={"Новобранец"}
                  className={s.input}
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
                            <input type="checkbox" id="sell-product" />
                            <label
                              htmlFor="sell-product"
                              className={s.checkboxLabel}
                            >
                              Продавать продукт
                            </label>
                          </div>
                        </li>
                        <li>
                          <div className={s.checkboxGroup}>
                            <input type="checkbox" id="set-prices" />
                            <label
                              htmlFor="set-prices"
                              className={s.checkboxLabel}
                            >
                              Выставлять цены
                            </label>
                          </div>
                        </li>
                        <li>
                          <div className={s.checkboxGroup}>
                            <input type="checkbox" id="check-analytics" />
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
                            <input type="checkbox" id="duel" />
                            <label htmlFor="duel" className={s.checkboxLabel}>
                              Дуель
                            </label>
                          </div>
                        </li>
                        <li>
                          <div className={s.checkboxGroup}>
                            <input type="checkbox" id="make-claims" />
                            <label
                              htmlFor="make-claims"
                              className={s.checkboxLabel}
                            >
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
                            <input
                              type="checkbox"
                              id="purchase-raw-materials"
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
                            <input type="checkbox" id="assign-workers" />
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
                            <input type="checkbox" id="assign-positions" />
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
                            <input type="checkbox" id="kick" />
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
              <button className={s.blueButton}>Сохранить</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
