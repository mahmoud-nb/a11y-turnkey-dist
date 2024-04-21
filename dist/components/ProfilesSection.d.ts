import { FeaturesState } from "../stores/store";
import { LucideIcon } from "lucide-react";
export type Profile = {
    id: number;
    title: string;
    Icon?: LucideIcon;
    shortDescription: string;
    description?: string;
    checked: boolean;
    features: Partial<FeaturesState>;
    enable: boolean;
};
type ProfilesSectionProps = {
    className?: string;
};
export declare const ProfilesSection: ({ className }: ProfilesSectionProps) => import("react/jsx-runtime").JSX.Element;
export {};
