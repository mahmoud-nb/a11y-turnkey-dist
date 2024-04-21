import { PropsWithChildren } from "react";
import { LucideIcon } from "lucide-react";
type AccordionProps = PropsWithChildren<{
    title: string;
    Icon?: LucideIcon;
    className?: string;
}>;
export declare const Accordion: ({ title, Icon, className, children }: AccordionProps) => import("react/jsx-runtime").JSX.Element;
export {};
