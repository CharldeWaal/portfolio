import { AnimationProps } from "../../../features/animations/components/Animation/Animation.types";

export enum TypographyVariant {
    Heading1 = 'Heading1',
    Heading2 = 'Heading2',
    Heading3 = 'Heading3',
    Title = 'Title',
    Subtitle = 'Subtitle',
    NormalText = 'NormalText',
    Paragraph = 'Paragraph',
}

export interface TypographyProps extends AnimationProps {
    className?: string;
    text: string;
    variant: string
    bold?: boolean
    strong?: string;
    code?: string;
    italic?: boolean;
    testId: string;
}