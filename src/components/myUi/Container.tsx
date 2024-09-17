import React from "react";
import { cn } from "@/lib/utils";

const Container = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <main className={cn("flex flex-col gap-5 p-4", className)}>{children}</main>
  );
};

export default Container;
