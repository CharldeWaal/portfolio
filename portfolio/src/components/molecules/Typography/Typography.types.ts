import { TransitionProps } from "../../../features/transitions/components/Transition/Transition.types";

export enum TypographyVariant {
    Heading1 = 'Heading1',
    Heading2 = 'Heading2',
    Heading3 = 'Heading3',
    Title = 'Title',
    Subtitle = 'Subtitle',
    NormalText = 'NormalText',
    Paragraph = 'Paragraph',
}

export interface TypographyProps extends TransitionProps {
    text: string;
    variant: string
    bold?: boolean
    strong?: string;
    code?: string;
    italic?: boolean;
    testId: string;
}