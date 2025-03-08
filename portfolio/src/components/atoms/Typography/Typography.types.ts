export enum TypographyVariant {
    Heading1 = 'Heading1',
    Heading2 = 'Heading2',
    Heading3 = 'Heading3',
    Title = 'Title',
    Subtitle = 'Subtitle',
    NormalText = 'NormalText'
}

export interface TypographyProps {
    text: string;
    variant: string
    bold?: boolean
    italic?: boolean;
    testId: string;
}