export type SettingsState = {
    displayAsAside: boolean;
    oversizedWidget: boolean;
    widgetFamilyFont: string | null;
};
interface SettingsStore {
    settings: SettingsState;
    getSetting: <T extends keyof SettingsState>(key: T) => SettingsState[T];
    setSettings: (newSettings: Partial<SettingsState>) => void;
    reset: () => void;
    set: (newState: Partial<SettingsStore>) => void;
}
export declare const useSettings: import("zustand").UseBoundStore<Omit<import("zustand").StoreApi<SettingsStore>, "persist"> & {
    persist: {
        setOptions: (options: Partial<import("zustand/middleware").PersistOptions<SettingsStore, SettingsStore>>) => void;
        clearStorage: () => void;
        rehydrate: () => void | Promise<void>;
        hasHydrated: () => boolean;
        onHydrate: (fn: (state: SettingsStore) => void) => () => void;
        onFinishHydration: (fn: (state: SettingsStore) => void) => () => void;
        getOptions: () => Partial<import("zustand/middleware").PersistOptions<SettingsStore, SettingsStore>>;
    };
}>;
export {};
