import {screen, render} from '@testing-library/react'
import '@testing-library/jest-dom'
import { expect } from 'vitest'

const Component = () => {
  return (
    <p>paragraph</p>
  )
};

test('component', () => {
  const section = document.createElement('section');
  render(<Component />, {container: document.body.appendChild(section)});
  const paragraph = screen.getByText('paragraph').textContent;
  expect(paragraph).toBe('paragraph');
  screen.debug()
})