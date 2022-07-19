import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AddInput from '../AddInput.component';

const mockedSetTodos = jest.fn();

describe('Add input component functionality', () => {
  it('should render the input element', () => {
    render(<AddInput todos={[]} setTodos={mockedSetTodos} />);
    const inputElement = screen.getByPlaceholderText(/Add a new todo here.../i);
    expect(inputElement).toBeInTheDocument();
  });
  it('should be able to type in input element', async () => {
    const user = userEvent.setup();
    render(<AddInput todos={[]} setTodos={mockedSetTodos} />);
    const inputElement = screen.getByPlaceholderText(/Add a new todo here.../i);
    await user.click(inputElement);
    await user.type(inputElement, 'Feed cat');
    expect(inputElement.value).toBe('Feed cat');
  });
  it('should be able to fire mock SetTodos function when button element clicked', async () => {
    const user = userEvent.setup();
    render(<AddInput todos={[]} setTodos={mockedSetTodos} />);
    const inputElement = screen.getByPlaceholderText(/Add a new todo here.../i);
    await user.click(inputElement);
    await user.type(inputElement, 'Feed cat');
    const buttonElement = screen.getByRole('button', { name: /add todo/i });
    await userEvent.click(buttonElement);
    expect(mockedSetTodos).toBeCalled();
  });

  it('input textbox should clear when Add todo button clicked', () => {
    
  })
});
