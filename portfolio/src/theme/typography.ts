import { inter, satisfy } from "@/theme/fonts";

export type FontSize =
    'text-xs' | 'text-sm' | 'text-base' | 'text-lg' | 'text-xl' | 'text-2xl' | 'text-3xl' | 'text-4xl' | 'text-5xl' | 'text-6xl' | 'text-7xl' | 'text-8xl' | 'text-9xl';


export interface TypographyStyle {
    fontFamily: string;
    fontSize: FontSize;
    textAlign?: 'left' | 'center' | 'right' | undefined;
}



export interface TypographyStructure {
    Heading1?: TypographyStyle,
    Heading2?: TypographyStyle,
    Heading3?: TypographyStyle,
    Title: TypographyStyle,
    Subtitle: TypographyStyle,
    Label?: TypographyStyle,
    Paragraph?: TypographyStyle,
}



export const typography: TypographyStructure = {
    Title: {
        fontFamily: satisfy.className,
        fontSize: 'text-4xl',
    },
    Subtitle: {
        fontFamily: inter.className,
        fontSize: 'text-lg',
    }
}