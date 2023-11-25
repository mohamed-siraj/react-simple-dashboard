import { render, screen } from "@testing-library/react"
import LabelFormComponent from "./Label.form.component"

test('Label component rendering', () => {
    render(<LabelFormComponent text={"test"} error={false}/>);
    const text = screen.getByText('test');
    expect(text).toBeInTheDocument();
})