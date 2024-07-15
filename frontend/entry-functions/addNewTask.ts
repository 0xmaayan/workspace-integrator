import { InputTransactionData } from "@aptos-labs/wallet-adapter-react";

export const addNewTaskTransaction = (task: string): InputTransactionData => {
  return {
    data: {
      function: `${import.meta.env.VITE_MODULE_ADDRESS}::todolist::create_task`,
      functionArguments: [task],
    },
  };
};
