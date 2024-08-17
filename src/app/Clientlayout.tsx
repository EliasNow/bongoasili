
// 18.35 31 jul 24 wrapper for redux server stuff in our layout.tsx (do we even need redux here?)
"use client";

import { ReactNode } from "react";
import { Provider } from "react-redux";
import store from "@/redux/store";

interface ClientLayoutProps {
  children: ReactNode;
}

const ClientLayout: React.FC<ClientLayoutProps> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ClientLayout;
