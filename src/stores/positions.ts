import { create } from "zustand";
import { devtools } from "zustand/middleware";

import { Position } from "@/models/Position";
import positionsService from "@/services/positions";

interface State {
  positions: Position[];
  isLoading: boolean;
  error: string;

  getPositions: () => Promise<void>;
  createPosition: (position: Position) => Promise<void>;
  updatePosition: (position: Position) => Promise<void>;
  changeOrder: (positions: Position[]) => void;
}

export const usePositions = create<State>()(
  devtools((set, get) => ({
    positions: [],
    isLoading: true,
    error: "",

    getPositions: async () => {
      try {
        const res = await positionsService.getAll();
        res.reverse();
        set({ positions: res, isLoading: false });
      } catch (err) {
        set({ isLoading: false, error: "Failed to get positions" });
      }
    },
    createPosition: async (position: Position) => {
      try {
        const oldPositions = get().positions;
        const res = await positionsService.create(position);
        set({ positions: [res, ...oldPositions] });
      } catch (err) {}
    },
    updatePosition: async (position: Position) => {
      try {
        const oldPositions = get().positions;
        const res = await positionsService.update(position);
        set({
          positions: oldPositions.map((oldPosition) =>
            oldPosition.id === res.id ? res : oldPosition
          ),
        });
      } catch (err) {}
    },
    changeOrder: (positions) => {
      set({ positions });
    },
  }))
);
