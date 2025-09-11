import { create } from "zustand";

export type ToastVariant = "default" | "success" | "error" | "warning" | "info";

export type ToastPosition =
  | "bottom-right"
  | "bottom-left"
  | "top-right"
  | "top-left"
  | "top-center"
  | "bottom-center";

export type ToastItem = {
  id: string;
  title?: string;
  description?: string | JSX.Element;
  variant?: ToastVariant;
  duration?: number;
  position?: ToastPosition;
};

type ToastState = {
  toasts: ToastItem[];
  add: (t: Omit<ToastItem, "id"> & { id?: string }) => string;
  remove: (id: string) => void;
  clear: () => void;
};

export const useToastStore = create<ToastState>((set) => ({
  toasts: [],
  add: (t) => {
    const id = t.id ?? Math.random().toString(36).slice(2);
    set((s) => ({ toasts: [...s.toasts, { ...t, id }] }));
    return id;
  },
  remove: (id) =>
    set((s) => ({ toasts: s.toasts.filter((x) => x.id !== id) })),
  clear: () => set({ toasts: [] }),
}));
