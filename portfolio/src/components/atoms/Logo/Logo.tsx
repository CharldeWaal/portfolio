import { Typography } from "../Typography/Typography"
import { TypographyVariant } from "../Typography/Typography.types"


export const Logo = ({ title, subtitle }: LogoProps) => {
    return <div className="flex flex-col items-center justify-center">
        <Typography testId="logo-title" text={title} variant={TypographyVariant.Title} bold></Typography>
        {subtitle && <Typography testId="logo-subtitle" text={subtitle} variant={TypographyVariant.Subtitle}></Typography>}</div>
}