export type FeaturesState = {
    textSize: number;
    lineHeight: number;
    wordSpacing: number;
    textAlign: 'initial' | 'justify' | 'left' | 'right' | 'center' | null;
    highlightTitles: boolean;
    highlightLinks: boolean;
    hiddenImages: boolean;
    invertColors: boolean;
    monochrome: boolean;
    saturation: 'default' | 'low' | 'high' | 'desaturate' | null;
    noTransitions: boolean;
    readingGuide: boolean;
    bigCursor: boolean;
    fonts: 'dyslexia' | 'legible' | null;
};
interface FeaturesStore {
    features: FeaturesState;
    getFeature: <T extends keyof FeaturesState>(key: T) => FeaturesState[T];
    setFeatures: (newFeatures: Partial<FeaturesState>) => void;
    isSomeFeaturesSelected: () => boolean;
    applyProfileFeatures: (profileFeatures: Partial<FeaturesState>) => void;
    isProfileChecked: (profileFeatures: Partial<FeaturesState>) => boolean;
    reset: () => void;
    set: (newState: Partial<FeaturesStore>) => void;
}
export declare const useStore: import("zustand").UseBoundStore<Omit<import("zustand").StoreApi<FeaturesStore>, "persist"> & {
    persist: {
        setOptions: (options: Partial<import("zustand/middleware").PersistOptions<FeaturesStore, FeaturesStore>>) => void;
        clearStorage: () => void;
        rehydrate: () => void | Promise<void>;
        hasHydrated: () => boolean;
        onHydrate: (fn: (state: FeaturesStore) => void) => () => void;
        onFinishHydration: (fn: (state: FeaturesStore) => void) => () => void;
        getOptions: () => Partial<import("zustand/middleware").PersistOptions<FeaturesStore, FeaturesStore>>;
    };
}>;
export {};
