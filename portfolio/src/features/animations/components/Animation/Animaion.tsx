"use client";

import { useTranslate } from "../../hooks/useTranslate/useTranslate";
import { AnimationProps } from "./Animation.types"
import { useFade } from "@/features/animations/hooks/useFade/useFade";

export const Animation = ({ className, animation, children, delay, duration, timingFunction = 'ease-in-out' }: AnimationProps) => {
    const { opacity } = useFade({ enabled: !!animation?.includes('Fade'), delay });
    const { translate } = useTranslate({ enabled: !!animation?.includes('Translate'), delay, initialY: '-translate-y-40', y: 'translate-y-0' })
    //`translate-20`
    return <div className={`${className} transition-all ${translate} ${opacity} ${duration} ${timingFunction}`}>{children}</div>
}