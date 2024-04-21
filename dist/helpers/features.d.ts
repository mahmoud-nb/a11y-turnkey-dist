import { LucideIcon } from "lucide-react";
import { SettingKeys } from "../types/settings";
export type RangeFeature = 'textSize' | 'lineHeight' | 'wordSpacing' | 'textAlign' | 'saturation' | 'fonts';
export type ToggleFeature = 'invertColors' | 'monochrome' | 'readingGuide' | 'bigCursor' | 'highlightTitles' | 'highlightLinks' | 'hiddenImages' | 'noTransitions';
export type FeatureKeys = RangeFeature | ToggleFeature;
type FeatureConfig = {
    label: string;
    Icon: LucideIcon;
};
interface AccessibilityTurnkeyConfig {
    global: {
        layoutIconSize: number;
        featuresIconSize: number;
        settingsIconSize: number;
    };
    features: Record<FeatureKeys, FeatureConfig>;
    settings: Record<SettingKeys, FeatureConfig>;
}
declare const Config: AccessibilityTurnkeyConfig;
export default Config;
