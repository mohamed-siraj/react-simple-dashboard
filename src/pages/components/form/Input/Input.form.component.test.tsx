import { render, screen } from "@testing-library/react";
import InputFormComponent from "./Input.form.component";

test('Input component rendering', () => {
    const register = jest.fn();
    render(<InputFormComponent error={false} name={"email"} placeholder={"email"} type={'TEXT'} register={register} />);
    const inputText = screen.getByTestId('email');
    expect(inputText).toBeInTheDocument();
});