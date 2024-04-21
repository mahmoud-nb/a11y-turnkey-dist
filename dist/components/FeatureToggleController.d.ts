import { ToggleFeature } from "../helpers/features";
type FeatureToggleControllerProps = {
    featureKey: ToggleFeature;
    initValue?: boolean;
    className?: string | null;
};
export declare function FeatureToggleController({ featureKey, initValue, className }: FeatureToggleControllerProps): import("react/jsx-runtime").JSX.Element;
export {};
