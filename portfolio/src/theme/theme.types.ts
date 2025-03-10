import { TypographyStructure } from "./typography";

export interface BorderRadius {
    small: number;
    medium: number;
    large: number;
}

export interface Sizing {
    borderRadius: BorderRadius,
}

export interface FontSize {
    small: number;
    medium: number;
    large: number;
}

export interface Theme {
    size: Sizing,
    fontSize: FontSize,
    typography: TypographyStructure
}