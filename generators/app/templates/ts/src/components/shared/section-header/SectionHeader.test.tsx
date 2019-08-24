import * as React from 'react';
import { render } from '@testing-library/react';
import SectionHeader from './SectionHeader';

describe('SectionHeader', () => {
  const props = {
    title: 'Foo',
    description: 'Bar'
  };

  it('renders the title and description', () => {
    const { getByText } = render(<SectionHeader {...props} />);

    expect(getByText('Foo')).toBeInTheDocument();
    expect(getByText('Bar')).toBeInTheDocument();
  });
});
