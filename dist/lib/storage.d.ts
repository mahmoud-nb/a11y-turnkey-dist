export declare class Storage {
    constructor();
    has(key: string): boolean;
    set(key: string, value: string | object): void;
    get(key: string, defaultValue?: string): any;
    clear(): void;
    remove(key: string): void;
    isSupported(): boolean;
}
