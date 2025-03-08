import { useMemo } from "react"
import { TypographyProps } from "./Typography.types"

export const Typography = ({ text, variant, bold, italic, testId }: TypographyProps) => {
    const getTestId = (testId: string) => 'typography'.concat(`-${testId}`);

    const typographyElement = useMemo(() => {
        if (variant === 'Heading1') {
            return <h1 >{text}</h1>
        } else if (variant === 'Title') {
            return <h1>{text}</h1>
        } else if (variant === "Subtitle") {
            return <h2>{text}</h2>
        }

        return <h3>{text}</h3>
    }, [variant, text])

    const transformedTypography = useMemo(() => {
        const element = bold && typographyElement ? <b>{typographyElement}</b> : typographyElement
        return italic ? <em>{element}</em> : element;
    }, [typographyElement])


    return <div data-testId={getTestId(testId)}>{transformedTypography}</div>
}
