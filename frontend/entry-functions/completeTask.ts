import { InputTransactionData } from "@aptos-labs/wallet-adapter-react";

export const completeTaskTransaction = (taskId: string): InputTransactionData => {
  return {
    data: {
      function: `${import.meta.env.VITE_MODULE_ADDRESS}::todolist::complete_task`,
      functionArguments: [taskId],
    },
  };
};
