import { IAccessibility, IAccessibilityOptions, ISessionState } from "./interfaces/accessibility.interfaces";
export declare class Accessibility implements IAccessibility {
    private _html;
    private _body;
    private _allElms;
    private _options;
    options: IAccessibilityOptions;
    private _initValues;
    private _defaultStateValues;
    private _sessionState;
    private _common;
    constructor(options?: IAccessibilityOptions);
    private get defaultOptions();
    get sessionState(): ISessionState;
    set sessionState(value: ISessionState);
    initData(): void;
    initFontSize(): void;
    initLineHeight(): void;
    initBg(): void;
    alterProperty(cssProperty: 'fontSize' | 'lineHeight' | 'wordSpacing', rangeIndex?: number): void;
    alterFilter(filterKey: keyof ISessionState['filter'], filterValue: ISessionState['filter'][keyof ISessionState['filter']]): void;
    getFilterValues(): {
        filters: string;
        invertFilter: string;
    };
    enableReadingGuide(enable?: boolean): void;
    enableBigCursor(enable?: boolean): void;
    enableEnableDyslexie(enable?: boolean): void;
    enableHighlightTitles(enable?: boolean): void;
    enableHighlightLinks(enable?: boolean): void;
    enableHiddenImages(enable?: boolean): void;
    enableNoTransitions(enable?: boolean): void;
    rootElementToggleClass(enable: boolean | undefined, className: string): void;
    alterFonts(font: 'dyslexia' | 'legible' | null): void;
    textAlignSwitchClass(className: string): void;
    useOneOfClassList(targetClass: string | null, classList: string[]): void;
}
