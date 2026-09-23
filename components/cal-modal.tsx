"use client";

import React, { useEffect } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";
import { AnimatePresence, motion } from "motion/react";
import { IconX } from "@tabler/icons-react";
import { createPortal } from "react-dom";

type CalModalProps = {
  isOpen: boolean;
  onClose: () => void;
  calLink?: string;
  namespace?: string;
};

export const CalModal = ({
  isOpen,
  onClose,
  calLink = "1xcoder-xacncf/1-hour-meeting",
  namespace = "1-hour-meeting",
}: CalModalProps) => {
  const [mounted, setMounted] = React.useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    (async function () {
      try {
        const cal = await getCalApi({ namespace });
        cal("ui", {
          hideEventTypeDetails: false,
          layout: "month_view",
          theme: "auto",
        });
      } catch (err) {
        console.error("Failed to initialize Cal API", err);
      }
    })();
  }, [isOpen, namespace]);

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen ? (
        <div className="fixed inset-0 z-100 flex items-center justify-center p-3 md:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ type: "spring", damping: 25, stiffness: 350 }}
            className="relative z-101 flex h-[85vh] max-h-[750px] w-full max-w-3xl flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-2xl dark:border-neutral-800 dark:bg-neutral-900"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-neutral-200 px-5 py-3.5 dark:border-neutral-800">
              <div className="flex flex-col">
                <span className="text-foreground text-sm font-semibold md:text-base">
                  Schedule a Meeting
                </span>
                <span className="text-foreground/60 text-xs">
                  Pick a convenient time slot on my calendar
                </span>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close modal"
                className="hover:bg-neutral-100 dark:hover:bg-neutral-800 flex size-8 items-center justify-center rounded-lg text-neutral-500 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
              >
                <IconX className="size-4" />
              </button>
            </div>

            {/* Cal.com Embed */}
            <div className="relative flex-1 overflow-hidden bg-neutral-50 dark:bg-neutral-950">
              <Cal
                namespace={namespace}
                calLink={calLink}
                style={{
                  width: "100%",
                  height: "100%",
                  overflow: "auto",
                }}
                config={{
                  layout: "month_view",
                  useSlotsViewOnSmallScreen: "true",
                  theme: "auto",
                }}
              />
            </div>
          </motion.div>
        </div>
      ) : null}
    </AnimatePresence>,
    document.body,
  );
};
