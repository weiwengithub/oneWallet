"use client";

import * as RToast from "@radix-ui/react-toast";
import { useToastStore } from "@/lib/toast-store";
import { useEffect, useState } from "react";
import clsx from "clsx";

export default function Toaster() {
  const toasts = useToastStore((s) => s.toasts);
  const remove = useToastStore((s) => s.remove);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  // 将不同位置的 toast 分组
  const grouped = toasts.reduce<Record<string, typeof toasts>>((acc, toast) => {
    const pos = toast.position ?? "bottom-right";
    if (!acc[pos]) acc[pos] = [];
    acc[pos].push(toast);
    return acc;
  }, {});

  const positionClasses: Record<string, string> = {
    "bottom-right": "bottom-4 right-4",
    "bottom-left": "bottom-4 left-4",
    "top-right": "top-4 right-4",
    "top-left": "top-4 left-4",
    "top-center": "top-4 left-1/2 -translate-x-1/2",
    "bottom-center": "bottom-4 left-1/2 -translate-x-1/2",
  };

  return (
    <RToast.Provider swipeDirection="right">
      {Object.entries(grouped).map(([pos, list]) => (
        <RToast.Viewport
          key={pos}
          className={clsx(
            "fixed z-[100] flex flex-col gap-2 outline-none",
            positionClasses[pos]
          )}
        >
          {list.map((t) => {
            const [open, setOpen] = [true, (v: boolean) => !v && remove(t.id)];
            const variant = t.variant ?? "default";
            return (
              <RToast.Root
                key={t.id}
                duration={t.duration ?? 3000}
                className={clsx(
                  "w-[360px] max-w-[92vw] rounded-lg border px-4 py-3 shadow-lg backdrop-blur-sm",
                  "data-[state=open]:animate-in data-[state=closed]:animate-out",
                  {
                    "bg-gray-900/80 border-gray-800 text-white": variant === "default",
                    "bg-emerald-600 text-white border-emerald-500": variant === "success",
                    "bg-red-600 text-white border-red-500": variant === "error",
                    "bg-amber-500 text-black border-amber-400": variant === "warning",
                    "bg-[#0047C4] text-white border-[#0047C4]": variant === "info",
                  }
                )}
                open={open}
                onOpenChange={(o) => setOpen(o)}
              >
                {t.title && (
                  <RToast.Title className="text-[15px] font-semibold">
                    {t.title}
                  </RToast.Title>
                )}
                {t.description && (
                  <RToast.Description className="mt-0.5 text-sm/5 opacity-90">
                    {t.description}
                  </RToast.Description>
                )}
                <RToast.Close className="absolute right-2 top-2">✕</RToast.Close>
              </RToast.Root>
            );
          })}
        </RToast.Viewport>
      ))}
    </RToast.Provider>
  );
}
