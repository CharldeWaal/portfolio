"use client";

import { useTranslate } from "../../hooks/useTranslate/useTranslate";
import { TransitionProps } from "./Transition.types"
import { useFade } from "@/features/transitions/hooks/useFade/useFade";

export const Transition = ({ animation, children, delay, duration, timingFunction = 'ease-in-out' }: TransitionProps) => {
    const { opacity } = useFade({ enabled: !!animation?.includes('Fade'), delay });
    const { translate } = useTranslate({ enabled: !!animation?.includes('Translate'), delay, initialY: '-translate-y-40', y: 'translate-y-0' })
    //`translate-20`
    return <div className={`transition-all ${translate} ${opacity} ${duration} ${timingFunction}`}>{children}</div>
}