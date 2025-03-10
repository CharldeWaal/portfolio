import theme from "@/theme";
import { FontWrapperProps } from "./FontStyle.types";
import { useMemo } from "react";
import { TypographyStructure, TypographyStyle } from "@/theme/typography";

export const FontStyle = ({ variant, children }: FontWrapperProps) => {
    const typographyStyle: TypographyStyle | undefined = useMemo(() => theme.typography[variant as keyof TypographyStructure], [variant])

    return <div className={typographyStyle?.fontFamily}>
        <div className={`${typographyStyle?.fontSize}`}>{children}</div></div>
}