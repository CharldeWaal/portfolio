import { Typography } from "../../molecules/Typography/Typography"
import { TypographyVariant } from "../../molecules/Typography/Typography.types"
import { LogoProps } from "./Logo.types"

export const Logo = ({ title, subtitle }: LogoProps) => {
    return <div className="flex flex-col items-center justify-items-center">
        <Typography animation={['Fade', 'Translate']} delay={300} duration={'duration-2000'} testId="logo-title" text={title} variant={TypographyVariant.Title} bold></Typography>
        {subtitle && <Typography className={"pt-6 mb-10"} animation={'Fade'} delay={2000} duration={'duration-2000'} testId="logo-subtitle" text={subtitle} variant={TypographyVariant.Subtitle}></Typography>}
    </div >
} 