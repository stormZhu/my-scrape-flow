"use client";

import { ThemeProvider } from "next-themes";
import React, { type ReactNode } from "react";

const AppProviders = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </ThemeProvider>
  );
};

export default AppProviders;
