import { render, screen } from '@testing-library/react';
import Saldo from './index';

describe('Componente <Saldo />', () => {
  test('Deve renderizar o saldo com valor monetario', () => {
    render(<Saldo saldo={1000} />);

    const saldo = screen.getByTextId('saldo');
    expect(saldo).toHaveTextContent('R$ 1000');
  });
});
