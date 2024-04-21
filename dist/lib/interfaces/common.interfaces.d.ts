export interface ICommon {
    warn(msg: string): void;
    getFormattedDim(value: string): IFormattedDim;
    getElementLineHeightInPercent(elm: HTMLElement): number;
}
export interface IFormattedDim {
    size: string | number;
    suffix: string;
}
