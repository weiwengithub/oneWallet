import { useToastStore } from "./toast-store";
import { ToastVariant, ToastPosition } from "./toast-store";

type ToastInput = {
  title?: string;
  description?: string | JSX.Element;
  duration?: number;
  position?: ToastPosition;
};

function baseShow(variant: ToastVariant, input: ToastInput) {
  const add = useToastStore.getState().add;
  return add({ variant, ...input });
}

export const toast = {
  show: (input: ToastInput) => baseShow("default", input),
  success: (input: ToastInput | string) =>
    baseShow("success", typeof input === "string" ? { title: input } : input),
  error: (input: ToastInput | string) =>
    baseShow("error", typeof input === "string" ? { title: input } : input),
  warning: (input: ToastInput | string) =>
    baseShow("warning", typeof input === "string" ? { title: input } : input),
  info: (input: ToastInput | string) =>
    baseShow("info", typeof input === "string" ? { title: input } : input),

  // 语法糖：toast.promise
  promise: async <T,>(
    p: Promise<T>,
    msgs: {
      loading?: ToastInput | string;
      success?: ToastInput | string | ((value: T) => ToastInput | string);
      error?: ToastInput | string | ((err: unknown) => ToastInput | string);
    }
  ) => {
    const id = baseShow(
      "info",
      typeof msgs.loading === "string"
        ? { title: msgs.loading }
        : msgs.loading ?? { title: "Loading..." }
    );

    try {
      const val = await p;
      const success =
        typeof msgs.success === "function" ? msgs.success(val) : msgs.success;
      useToastStore.getState().remove(id);
      baseShow(
        "success",
        typeof success === "string" ? { title: success } : success ?? { title: "Success" }
      );
      return val;
    } catch (err) {
      const fail =
        typeof msgs.error === "function" ? msgs.error(err) : msgs.error;
      useToastStore.getState().remove(id);
      baseShow(
        "error",
        typeof fail === "string" ? { title: fail } : fail ?? { title: "Failed" }
      );
      throw err;
    }
  },
};
