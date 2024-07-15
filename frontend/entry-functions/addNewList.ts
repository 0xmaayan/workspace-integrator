import { InputTransactionData } from "@aptos-labs/wallet-adapter-react";

export const addNewListTransaction = (): InputTransactionData => {
  return {
    data: {
      function: `${import.meta.env.VITE_MODULE_ADDRESS}::todolist::create_list`,
      functionArguments: [],
    },
  };
};
