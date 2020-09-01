import React from "react";
import Pokemon from "./SinglePokemon";
import axios from "axios";

export default class App extends React.Component {
	constructor() {
		super(),
		this.state = {
			className: 'pokemon',
			pokemon: [],
			name: '',
			description: '',
			type: [],
			hp: '',
			attack: '',
			defense: '',
			speed: '',
			specialAttack: '',
			specialDefense: ''
		}
	}

	async componentDidMount() {
		const pokemon = (await axios.get('/api/pokemon/')).data
		this.setState({pokemon: pokemon})
		const loadPokemon = async() => {
			const pokeId = (window.location.hash.slice(1))
			const pokeData = this.state.pokemon.filter(pokemon => pokemon.name === pokeId)
			const name = pokeData[0]['name'].toUpperCase()
			const description = pokeData[0]['description']
			const type = pokeData[0]['type']
			const hp = pokeData[0]['hp']
			const attack = pokeData[0]['attack']
			const defense = pokeData[0]['defense']
			const speed = pokeData[0]['speed']
			const specialAttack = pokeData[0]['specialAttack']
			const specialDefense = pokeData[0]['specialDefense']
			this.setState({
				className: 'selectedPoke',
				pokemon: pokeData,
				name: name,
				description: description,
				type: type,
				hp: hp,
				attack: attack,
				defense: defense,
				speed: speed,
				specialAttack: specialAttack,
				specialDefense: specialDefense
			})
		};

		window.addEventListener('hashchange', async() => {
			loadPokemon();
		})
    }
	
	render() {
		return (
		  <div className={this.state.className}>
			{(this.state.pokemon).map(pokemon => <Pokemon pokemon={pokemon}/>)}<br></br>
			<h1 className="name">{this.state.name}</h1>
			<h2>{this.state.description}</h2>
			<h3>{`Type: ${this.state.type}`}</h3>
			<h3>{`HP: ${this.state.hp}`}</h3>
			<h3>{`Attack: ${this.state.attack}`}</h3>
			<h3>{`Defense: ${this.state.defense}`}</h3>
			<h3>{`Speed: ${this.state.speed}`}</h3>
			<h3>{`Special Attack: ${this.state.specialAttack}`}</h3>
			<h3>{`Special Defense: ${this.state.specialDefense}`}</h3>
		  </div>
		);
	  }
}
