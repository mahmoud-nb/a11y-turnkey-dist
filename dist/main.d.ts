import AccessibilityTurnkey from './AccessibilityTurnkey.tsx';
import { IAccessibilityOptions } from './lib/interfaces/accessibility.interfaces.ts';
import { ThemeParams } from './helpers/theme.ts';
export default AccessibilityTurnkey;
export type AppSettings = {
    enableProfiles: boolean;
    theme?: ThemeParams;
};
type AccessibilityTurnkeyParams = {
    libOptions?: IAccessibilityOptions;
    appSettings: AppSettings;
};
declare global {
    interface Window {
        AccessibilityTurnkeyOptions: AccessibilityTurnkeyParams;
        loadAccessibilityTurnkey?: () => void;
    }
}
export declare const loadAccessibilityTurnkey: (options?: AccessibilityTurnkeyParams) => void;
