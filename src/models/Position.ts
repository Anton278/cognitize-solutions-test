export interface Position {
  name: string;
  hourPrice: number;
  tasksCount: number | string;
  duties: {
    trade: {
      sellProduct: boolean;
      setPrices: boolean;
      viewAnalytics: boolean;
    };
    showdown: {
      duel: boolean;
      makeClaims: boolean;
    };
    production: {
      purchaseRawMaterials: boolean;
      assignWorkers: boolean;
    };
    control: {
      assignPositions: boolean;
      kickOutFromTheGang: boolean;
    };
  };
  id: number;
}
