import { LucideIcon } from "lucide-react";
import { PropsWithChildren } from "react";
import { Primitive } from "../../types/global";
export type Step = {
    name: string;
    value: Primitive;
    Icon?: LucideIcon;
    iconSize?: number;
};
type StepsControllerProps = {
    Icon?: LucideIcon;
    iconSize?: number;
    label: string;
    steps: Array<Step>;
    selectedStep: Step | null;
    isActive: boolean;
    className?: string | null;
    next?: () => void;
};
export default function StepsController({ Icon, iconSize, label, steps, selectedStep, isActive, next, className, children }: PropsWithChildren<StepsControllerProps>): import("react/jsx-runtime").JSX.Element;
export {};
