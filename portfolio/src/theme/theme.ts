import { FontSize, Sizing, Theme } from "./theme.types";
import { typography } from "./typography";

export const size: Sizing = {
    borderRadius: {
        small: 4,
        medium: 8,
        large: 12,
    }
}

export const fontSize: FontSize = {
    small: 8,
    medium: 16,
    large: 24,
}

export const theme: Theme = {
    fontSize,
    size,
    typography,
}