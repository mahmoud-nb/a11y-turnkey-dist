import { RangeFeature } from "../helpers/features";
type FeatureRangeControllerProps = {
    featureKey: RangeFeature;
    description?: string;
    displayValue?: string;
    initValue: number;
    min: number;
    max: number;
    step?: number;
    className?: string | null;
};
export declare function FeatureRangeController({ featureKey, initValue, min, max, step, className, }: FeatureRangeControllerProps): import("react/jsx-runtime").JSX.Element;
export {};
