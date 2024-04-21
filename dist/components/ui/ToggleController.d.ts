import { PropsWithChildren } from "react";
import { LucideIcon } from "lucide-react";
type ToggleControllerProps = {
    Icon?: LucideIcon;
    iconSize: number;
    label: string;
    description?: string;
    className?: string | null;
    isChecked: boolean;
    handleToggleChange: () => void;
};
export declare function ToggleController({ Icon, iconSize, label, isChecked, handleToggleChange, className, children }: PropsWithChildren<ToggleControllerProps>): import("react/jsx-runtime").JSX.Element;
export {};
