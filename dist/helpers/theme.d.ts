export type ThemeParams = {
    primaryColor?: string;
    secondaryColor?: string;
    tertiaryColor?: string;
    quaternaryColor?: string;
    textColor?: string;
};
export declare const defaultThemeParams: {
    primaryColor: string;
    secondaryColor: string;
    tertiaryColor: string;
    quaternaryColor: string;
    textColor: string;
};
export declare const initThemeParams: ({ primaryColor, secondaryColor, tertiaryColor, quaternaryColor, textColor }: ThemeParams) => void;
