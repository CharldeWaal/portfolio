import { Typography } from "../../molecules/Typography/Typography"
import { TypographyVariant } from "../../molecules/Typography/Typography.types"
import { LogoProps } from "./Logo.types"

export const Logo = ({ title, subtitle, size }: LogoProps) => {
    return <div className="flex flex-col items-center justify-center">
        <Typography animation={['Fade', 'Translate']} delay={300} duration={'duration-2000'} testId="logo-title" text={title} variant={TypographyVariant.Title} bold></Typography>
        {subtitle && <Typography animation={'Fade'} delay={2000} duration={'duration-2000'} testId="logo-subtitle" text={subtitle} variant={TypographyVariant.Subtitle}></Typography>}</div >
} 