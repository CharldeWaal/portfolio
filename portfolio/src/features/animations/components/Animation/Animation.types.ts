import { PropsWithChildren } from "react";

export type TransitionType = 'transition' | 'transition-all' | 'transition-colors' | 'transition-opacity' | 'transition-shadow' | 'transition-transform' | 'transition-none';

export enum CustomAnimation {
    Fade = 'Fade',
    Translate = 'Translate'
}
export type AnimationType = `${CustomAnimation}`;

export type TimingFunction = 'ease-linear' | 'ease-in' | 'ease-out' | 'ease-in-out' | 'ease-initial'

export type Duration = 'duration-2000';

export type AnimationProps = PropsWithChildren<{
    className?: string;
    animation?: AnimationType | AnimationType[]
    transitionType?: TransitionType,
    duration?: Duration,
    delay?: number
    timingFunction?: TimingFunction;
}> 