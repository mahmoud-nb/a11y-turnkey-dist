import { SettingKeys } from '../types/settings';
type SettingsToggleControllerProps = {
    settingKey: SettingKeys;
    initValue?: boolean;
    className?: string | null;
};
export default function SettingsToggleController({ settingKey, initValue, className }: SettingsToggleControllerProps): import("react/jsx-runtime").JSX.Element;
export {};
