import { FC } from 'react';
type Language = {
    name: string;
    key: string;
    Flag?: FC;
    direction?: 'lrt' | 'rtl';
};
export declare const languages: Language[];
interface State {
    locale: string;
    setLocale: (l: string) => void;
    isRTL: () => boolean;
    t: (key: string) => string;
}
export declare const useTranslation: import("zustand").UseBoundStore<Omit<import("zustand").StoreApi<State>, "persist"> & {
    persist: {
        setOptions: (options: Partial<import("zustand/middleware").PersistOptions<State, State>>) => void;
        clearStorage: () => void;
        rehydrate: () => void | Promise<void>;
        hasHydrated: () => boolean;
        onHydrate: (fn: (state: State) => void) => () => void;
        onFinishHydration: (fn: (state: State) => void) => () => void;
        getOptions: () => Partial<import("zustand/middleware").PersistOptions<State, State>>;
    };
}>;
export {};
