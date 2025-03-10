import { JSX, useMemo } from "react"
import { TypographyProps, TypographyVariant } from "./Typography.types"
import { FontStyle } from "../../atoms/FontStyle/FontStyle";
import { Transition } from "@/features/transitions";

export const Typography = ({ text, variant, bold, italic, strong, code, animation, transitionType, delay, duration, timingFunction, testId }: TypographyProps) => {
    const getTestId = (testId: string) => 'typography'.concat(`-${testId}`);

    const htmlElement = useMemo(() => {
        if (variant === TypographyVariant.Heading1) {
            return <h1 >{text}</h1>
        } else if (variant === TypographyVariant.Heading3) {
            return <h2>{text}</h2>
        } else if (variant === TypographyVariant.Heading3) {
            return <h3>{text}</h3>
        } else if (variant === TypographyVariant.Title) {
            return <h1>{text}</h1>
        } else if (variant === TypographyVariant.Subtitle) {
            return <h2>{text}</h2>
        } else if (variant === TypographyVariant.Paragraph) {
            return <p>{text}</p>
        } else {
            return <h3>{text}</h3>
        }
    }, [variant, text])

    const formattedHtmlElement = useMemo(() => {
        if (!htmlElement) return undefined;
        let element: JSX.Element = htmlElement;
        element = bold && !strong ? <b>{htmlElement}</b> : htmlElement
        element = !bold && strong ? <strong>{htmlElement}</strong> : htmlElement;
        element = italic ? <em>{element}</em> : element;
        element = code ? <code>{element}</code> : element;
        return element;
    }, [htmlElement])




    return <Transition animation={animation} transitionType={transitionType} delay={delay} duration={duration} timingFunction={timingFunction}><FontStyle variant={variant} data-testId={getTestId(testId)}>{formattedHtmlElement}</FontStyle></Transition>
}
