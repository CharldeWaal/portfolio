export interface UseFadeProps {
    enabled: boolean;
    delay?: number;
}

export type Opacity = 'opacity-0' | 'opacity-100';

export interface UseFadeReturns {
    opacity: Opacity;
}
