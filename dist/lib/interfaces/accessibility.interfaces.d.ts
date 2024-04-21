export interface IAccessibility {
}
export type TextSizeMode = 'PIXEL' | 'EM';
export type saturationFilter = 'default' | 'low' | 'high' | 'desaturate';
export interface IAccessibilityOptions {
    textPixelMode?: boolean;
    textEmlMode?: boolean;
    textSizeMode?: TextSizeMode;
}
export interface IinitValues {
    underlineLinks?: boolean;
    textToSpeech?: boolean;
    bigCursor?: boolean;
    readingGuide?: boolean;
    invertColors?: boolean;
    grayHues?: boolean;
    speechToText?: boolean;
    disableAnimations?: boolean;
    speechRate?: number;
    body?: Record<string, string>;
    html?: Record<string, string>;
}
export interface IStateValues {
    underlineLinks: boolean;
    textToSpeech: boolean;
    bigCursor: boolean;
    readingGuide: boolean;
    invertColors?: boolean;
    grayHues?: boolean;
    speechToText?: boolean;
    disableAnimations?: boolean;
    speechRate?: number;
    body: Record<string, string>;
    html: Record<string, string>;
}
export interface ISessionState {
    textSize: number;
    textSpace: number;
    lineHeight: number;
    filter: {
        saturation: saturationFilter;
        invertColors: boolean;
        grayscale: boolean;
    };
    underlineLinks: boolean;
    bigCursor: boolean;
    readingGuide: boolean;
}
