import { ICommon, IFormattedDim } from "./interfaces/common.interfaces";
export declare class Common implements ICommon {
    warn(msg: string): void;
    getDataInitAttr(cssProperty: string): string;
    getElementLineHeightInPercent(elm: HTMLElement): number;
    getFormattedDim(value: string): IFormattedDim;
}
