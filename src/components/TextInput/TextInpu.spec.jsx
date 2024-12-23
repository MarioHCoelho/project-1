import { render, screen } from "@testing-library/react"
import { TextInput } from "."
import userEvent from "@testing-library/user-event";

describe ('<TextInut/>', () => {
    it('should have the same value as searchValue', () => {
        const fn = jest.fn();
        render (<TextInput handleChange={fn} searchValue={'testando'}/>);

        const input = screen.getByPlaceholderText(/type your search/i)
        expect(input).toBeInTheDocument();

        expect (input.value).toBe('testando');
    })
    it('should call handleChange function on each key press', () => {
        const fn = jest.fn();
        render (<TextInput handleChange={fn} searchValue={'testando'}/>);

        const input = screen.getByPlaceholderText(/type your search/i);

        const inputValue = 'o valor';
        userEvent.type(input,inputValue);

        expect(input.value).toBe(inputValue);
        expect (fn).toHaveBeenCalledTimes(inputValue.length);
    })

    it('should match snapshot', () => {
        const fn = jest.fn();
        const {container} = render (<TextInput handleChange={fn} searchValue={'testando'}/>);
        expect(container).toMatchSnapshot();
        
    })


})