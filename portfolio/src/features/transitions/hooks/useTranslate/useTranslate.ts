"use client";

import { useEffect, useState } from "react";
import { Translate, UseTranslateProps, UseTranslateReturns } from "./useTranslate.types"

export const useTranslate = ({ enabled, initialY, y, delay }: UseTranslateProps): UseTranslateReturns => {
    const [translateY, setTranslateY] = useState<Translate>(enabled && initialY ? initialY : '')

    useEffect(() => {
        enabled && delay && y && setTimeout(() => {
            setTranslateY(y);
        }, delay)
    }, [enabled, delay, y])

    return { translate: translateY }
}