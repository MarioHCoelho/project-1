
import { fireEvent, render, screen } from "@testing-library/react"
import { Button } from ".";
import {act} from 'react';
import userEvent from "@testing-library/user-event";

describe ("<Button/>", ()=>
{
    it ('should render the button with the text "Load More Posts"', () =>
    {
        render(<Button text ="Load More"/>);
        expect.assertions(1);

        const button = screen.getByRole('button', {name : /Load More/});
        expect(button).toBeInTheDocument();
    })
    it ('should call the function on button click"', () =>
        {
            const fn = jest.fn();
            render(<Button text ="Load More" onClick ={fn}/>);


            const button = screen.getByRole('button', {name : /Load More/});
            userEvent.click(button)
            expect(fn).toHaveBeenCalledTimes(1);
        })
        it ('should be disabled, when disabled is true"', () =>
            {
                render(<Button text ="Load More" disabled ={true}/>);


                const button = screen.getByRole('button', {name : /Load More/});
                userEvent.click(button)
                expect(button).toBeDisabled()
            })

})
