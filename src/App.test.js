import React from 'react';
import ReactDOM from 'react-dom';
import { render, screen } from '@testing-library/react' 
import '@testing-library/jest-dom/extend-expect'
import App from './App';

function sum(a,b) { return a+ b; }

// test('adds 1 + 2 to equal 3', () => {
//   expect(sum(1, 2)).toBe(3);
// });


// describe('grouping test', () => {
//   test('adds 1 + 2 to equal 3', () => {
//     expect(sum(1, 2)).toBe(3);
//   });
//   test('adds 1 + 2 to equal 3', () => {
//     expect(typeof(sum)).toBe("function");
//   });
// })


 it("App renders", () => {
   render(<App />);
 });


//  screen.debug();
//  screen.getByText('TodoList');
//  expect(screen.getByText('TodoList')).toBeInTheDocument();
// expect(screen.queryByText(/Searches for JavaScript/)).toBeNull();

// getByText
// getByRole
// getByLabelText
// getByPlaceholderText
// getByAltText
// getByDisplayValue

//Query 

//queryByText

// Find

// findAllBy

//Assertive Functions

/*
toBeDisabled
toBeEnabled
toBeEmpty
toBeEmptyDOMElement
toBeInTheDocument
toBeInvalid
toBeRequired
toBeValid
toBeVisible
toContainElement
toContainHTML
toHaveAttribute
toHaveClass
toHaveFocus
toHaveFormValues
toHaveStyle
toHaveTextContent
toHaveValue
toHaveDisplayValue
toBeChecked
toBePartiallyChecked
toHaveDescription
*/