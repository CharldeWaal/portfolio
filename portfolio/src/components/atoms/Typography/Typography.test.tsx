import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { Typography } from './Typography';

describe('Typography', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    })
    describe('When variant is Title', () => {
        it('should render title', () => {
            const { getByTestId } = render(<Typography testId='test-title' variant='Title' text='TestTitle' />)
            const title = getByTestId('typography-test-title')
            expect(title).toBeTruthy()
        })
    })
})