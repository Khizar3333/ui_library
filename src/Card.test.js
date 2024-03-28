import React from 'react';
import { render } from '@testing-library/react';
import Card from './components/Card';  // Assuming your component is in a file named 'Card.js'

test('Card renders the provided title', () => {
  const title = 'Test Title';
  const { getByText } = render(<Card title={title} />);
  const renderedTitle = getByText(title);
  expect(renderedTitle).toBeInTheDocument();
});

test('Card renders an image', () => {
    const { getByAltText } = render(<Card />);
    const image = getByAltText('blog');  
    expect(image).toBeInTheDocument();
  });
  test('Card renders the description and other content', () => {
    const { getByText } = render(<Card />);
    const description = getByText('Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste magnam nisi vitae omnis iure dolor.');
    const likesCount = getByText('1.2K');
    const commentsCount = getByText('6');
    expect(description).toBeInTheDocument();
    expect(likesCount).toBeInTheDocument();
    expect(commentsCount).toBeInTheDocument();
  });
  
  
  
