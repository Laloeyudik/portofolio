'use client';    

import React from "react";

type ModalState<T = unknown> = {
  type?: string | null;
  isOpen: boolean;
  data?: T | null;
};

export default function useModals<T = unknown>() {
  const [modal, setModal] = React.useState<ModalState<T>>({
    type: null,
    isOpen: false,
    data: undefined,
  });

  const openModal = React.useCallback((type: string, data?: T) => {
    setModal({ type, isOpen: true, data });
  }, []);

  const closeModal = React.useCallback(() => {
    setModal({ type: null, isOpen: false, data: undefined });
  }, []);

  const isModalOpen = React.useCallback(
    (type: string) => {
      return modal.type === type && modal.isOpen;
    },
    [modal.type, modal.isOpen]
  );

  return {
    modal,
    openModal,
    closeModal,
    isModalOpen,
  } as const;
}
