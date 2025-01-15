import { create } from "zustand";

interface BearState {
  cursorVariant: "default" | "text";
  setCursorVariant: (by: "default" | "text") => void;
}
export const useBearStore = create<BearState>()((set) => ({
  cursorVariant: "default",
  setCursorVariant: (d) => set(() => ({ cursorVariant: d })),
}));
