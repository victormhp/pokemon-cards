import React from 'react';
import Tilt from 'react-parallax-tilt';
import './PokemonCard.css';

function PokemonCard({ pokemon }) {
	const pokemonImg = pokemon.sprites.other['official-artwork'].front_default;
	const moves = pokemon.moves.map(a => a.move.name);
	const types = pokemon.types.map(a => a.type.name);
	const abilities = pokemon.abilities.map(a => a.ability.name);

	const randomMove = Math.floor(Math.random() * moves.length);

	return (
		<Tilt
			className='tilt-img'
			tiltMaxAngleX={20}
			tiltMaxAngleY={20}
			perspective={900}
			scale={1.1}
			transitionSpeed={3500}
			gyroscope={true}
		>
			<article className='cardContainer'>
				<div className='cardHeader'>
					<h3 className='cardTitle'>{pokemon.name}</h3>
					<span className='cardId'>{pokemon.id}</span>
				</div>
				<img className='cardImage' src={pokemonImg} alt='pokemon-image' />
				{/* Add pokemon types, attacks, abilities, weight and other cool stuff */}
			</article>
		</Tilt>
	);
}

export default PokemonCard;
