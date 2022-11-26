import React from 'react';
import Tilt from 'react-parallax-tilt';
import './PokemonCard.css';

function PokemonCard({ pokemon }) {
	const pokemonImg = pokemon.sprites.other['official-artwork'].front_default;

	const types = pokemon.types.map(a => a.type.name);

	const moves = pokemon.moves.map(a => a.move.name);
	const randomMoves = [...moves].sort(() => 0.5 - Math.random()).slice(0, 4);

	const abilities = pokemon.abilities.map(a => a.ability.name);

	return (
		<Tilt
			className='tilt-img'
			tiltMaxAngleX={10}
			tiltMaxAngleY={10}
			perspective={900}
			scale={1}
			transitionSpeed={4000}
			gyroscope={true}
		>
			<article className='cardContainer'>
				<div className='cardHeader'>
					<h3>{pokemon.name}</h3>
					<span>{pokemon.id}</span>
				</div>
				<img className='cardImage' src={pokemonImg} alt='pokemon-image' />
				<div className='cardInfo'>
					<div>
						<h4>Types</h4>
						<ul className='cardList' role='list'>
							{types.map(item => (
								<li key={item}>{item}</li>
							))}
						</ul>
					</div>
					<div>
						<h4>Attacks</h4>
						<ul className='cardList' role='list'>
							{randomMoves.map(item => (
								<li key={item}>{item}</li>
							))}
						</ul>
					</div>
					<div>
						<h4>Abilities</h4>
						<ul className='cardList' role='list'>
							{abilities.map(item => (
								<li key={item}>{item}</li>
							))}
						</ul>
					</div>
				</div>
			</article>
		</Tilt>
	);
}

export default PokemonCard;
