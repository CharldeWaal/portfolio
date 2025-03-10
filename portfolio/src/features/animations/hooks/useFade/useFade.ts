"use client";

import { useEffect, useState } from "react";
import { Opacity, UseFadeProps, UseFadeReturns } from "./useFade.types";

export const useFade = ({ enabled, delay }: UseFadeProps): UseFadeReturns => {
    const [opacity, setOpacity] = useState<Opacity>(enabled ? 'opacity-0' : 'opacity-100')

    useEffect(() => {
        enabled && delay && setTimeout(() => setOpacity('opacity-100'), delay);
    }, [enabled])

    return {
        opacity
    }
}

