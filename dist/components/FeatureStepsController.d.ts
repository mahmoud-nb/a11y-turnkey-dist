import { RangeFeature } from "../helpers/features";
import { Step } from "./ui/StepsController";
import { Primitive } from "../types/global";
type FeatureStepsControllerProps = {
    featureKey: RangeFeature;
    description?: string;
    steps: Step[];
    initValue: Primitive | null;
    className?: string | null;
};
export declare function FeatureStepsController({ featureKey, steps, initValue, className, }: FeatureStepsControllerProps): import("react/jsx-runtime").JSX.Element;
export {};
