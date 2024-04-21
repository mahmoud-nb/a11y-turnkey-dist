declare class TextToSpeechManager {
    private synth;
    private utterance;
    constructor();
    speak(text: string): void;
    speakSelectedText(): void;
    pause(): void;
    stop(): void;
    detectPageLanguage(): string;
}
declare const ttsManager: TextToSpeechManager;
declare const detectedLanguage: string;
