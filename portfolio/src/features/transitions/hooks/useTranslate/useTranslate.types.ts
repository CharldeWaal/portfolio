export type Translate = 'translate-y-40' | '-translate-y-40' | 'translate-y-0' | '';

export interface UseTranslateProps {
    enabled: boolean;
    initialX?: Translate;
    initialY?: Translate;
    x?: Translate;
    y?: Translate;
    delay?: number;
}

export interface UseTranslateReturns {
    translate: Translate | undefined;
} 