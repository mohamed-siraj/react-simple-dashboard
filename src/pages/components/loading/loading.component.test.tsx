import { render, screen } from '@testing-library/react';
import LoadingComponent from './loading.component';


test('Loading component rendering', () => {
    render(<LoadingComponent color={'#212121'} textColor={'#212121'} />);
    const screenText = screen.getByText('Loading...');
    expect(screenText).toBeInTheDocument();
});