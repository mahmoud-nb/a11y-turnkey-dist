import { SettingKeys } from "../types/settings";
import { Step } from "./ui/StepsController";
import { Primitive } from "../types/global";
type SettingsStepsControllerProps = {
    settingKey: SettingKeys;
    steps: Step[];
    initValue?: Primitive | null;
    className?: string | null;
};
export default function SettingsStepsController({ settingKey, steps, initValue, className }: SettingsStepsControllerProps): import("react/jsx-runtime").JSX.Element;
export {};
