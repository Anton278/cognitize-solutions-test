import { create } from "zustand";
import { devtools } from "zustand/middleware";

import { Position } from "@/models/Position";
import positionsService from "@/services/positions";

interface State {
  positions: Position[];
  isLoading: boolean;
  error: string;

  getPositions: () => Promise<void>;
}

export const usePositions = create<State>()(
  devtools((set) => ({
    positions: [],
    isLoading: true,
    error: "",

    getPositions: async () => {
      try {
        const res = await positionsService.getAll();
        set({ positions: res, isLoading: false });
      } catch (err) {
        set({ isLoading: false, error: "Failed to get positions" });
      }
    },
  }))
);
