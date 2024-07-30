import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from '../components/Card/Card.jsx';

describe('Card Component', () => {
  const mockPokemon = {
    id: '1',
    name: 'pikachu',
    imagen: 'https://example.com/pikachu.png',
    vida: 35,
    ataque: 55,
    defensa: 40,
    velocidad: 90,
    altura: 0.4,
    peso: 6.0,
    types: [{ name: 'electric' }],
  };

  it('should render the Pokémon card with correct information', () => {
    render(<Card pokemon={mockPokemon} />);

    expect(screen.getByText('Pikachu')).toBeInTheDocument();
    expect(screen.getByAltText('pikachu')).toBeInTheDocument();
    expect(screen.getByText('Electric')).toBeInTheDocument();
  });

  it('should render multiple types', () => {
    const mockPokemonWithMultipleTypes = {
      ...mockPokemon,
      types: [{ name: 'electric' }, { name: 'flying' }],
    };

    render(<Card pokemon={mockPokemonWithMultipleTypes} />);

    expect(screen.getByText('Electric')).toBeInTheDocument();
    expect(screen.getByText('Flying')).toBeInTheDocument();
  });
});

module.exports = {
  resolver: null
}