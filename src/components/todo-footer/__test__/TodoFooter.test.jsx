import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import TodoFooter from '../TodoFooter.component';

// test('renders same text passed into title prop', () => {
//   render(<TodoFooter incompleteTasks={5} />, { wrapper: BrowserRouter });
//   const paragraphElement = screen.getByText(/5 tasks left/i);
//   expect(paragraphElement).toBeInTheDocument();
// });

// OR we can wrap TodoFooter in Mock Component

const MockTodoFooter = ({ incompleteTasks }) => {
  return (
    <BrowserRouter>
      <TodoFooter incompleteTasks={incompleteTasks} />
    </BrowserRouter>
  );
};

describe('TodoFooter Functionality', () => {
  it('should render the correct number of incomplete tasks', () => {
    render(<MockTodoFooter incompleteTasks={5} />);
    const paragraphElement = screen.getByText(/5 tasks left/i);
    expect(paragraphElement).toBeInTheDocument();
  });

  it('should render "task" when number of incomplete tasks is one', () => {
    render(<MockTodoFooter incompleteTasks={1} />);
    const paragraphElement = screen.getByText(/1 task left/i);
    expect(paragraphElement).toBeInTheDocument();
  });

  it('... is component visible to user', () => {
    render(<MockTodoFooter incompleteTasks={1} />);
    const paragraphElement = screen.getByText(/1 task left/i);
    expect(paragraphElement).toBeVisible();
  });

  it('... not.toBeFalsy', () => {
    render(<MockTodoFooter incompleteTasks={1} />);
    const paragraphElement = screen.getByText(/1 task left/i);
    expect(paragraphElement).not.toBeFalsy();
  });

  it('... get value of element', () => {
    render(<MockTodoFooter incompleteTasks={1} />);
    const paragraphElement = screen.getByTestId('p1');
    expect(paragraphElement.textContent).toBe('1 task left');
  });
});
