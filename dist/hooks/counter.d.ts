export declare function useCounter(initialValue: number, min: number, max: number, step?: number): {
    value: number;
    step: number;
    min: number;
    max: number;
    increment: () => void;
    decrement: () => void;
    reset: () => void;
    canIncrement: boolean;
    canDecrement: boolean;
};
