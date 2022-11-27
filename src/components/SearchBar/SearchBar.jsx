import { useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import { useFetch } from '../../hooks';
import { PokemonCard } from '../../components';
import './SearchBar.css';

function SearchBar() {
	const inputRef = useRef(null);
	const nodeRef = useRef(null);
	const { data, setData } = useFetch();

	const handleClick = e => {
		setData({ ...data, name: inputRef.current.value.toLowerCase(), isEnter: false });
	};

	return (
		<div className='container'>
			<form className='searchBar' onSubmit={e => e.preventDefault()}>
				<input
					className='searchInput'
					type='search'
					ref={inputRef}
					placeholder='Enter a Pokemon name...'
					aria-label='search'
					onKeyDown={e => e.key === 'Enter' && handleClick()}
				/>
				<button className='searchSubmit' type='button' aria-label='submit-search' onClick={handleClick}>
					Generate
				</button>
			</form>
			<>
				{data.isEnter ? (
					<CSSTransition nodeRef={nodeRef} in={data.isEnter} timeout={5000} classNames='fade' appear={true}>
						<div ref={nodeRef}>
							<PokemonCard pokemon={data.results} />
						</div>
					</CSSTransition>
				) : null}
			</>
		</div>
	);
}

export default SearchBar;
