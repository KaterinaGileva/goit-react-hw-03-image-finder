import { React, Component } from 'react';
import { ImSearch } from 'react-icons/im';
import { toast } from 'react-toastify';

const styles = { form: { marginBottom: 20 } };

export class PokemonForm extends Component {
  state = {
    pokemonName: '',
  };

  handleNameChange = event => {
    this.setState({ pokemonName: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = event => {
    event.preventDefault();

    if (this.state.pokemonName.trim() === '') {
     
     toast('Введите имя покемона');
      return;
    }

    this.props.onSubmit(this.state.pokemonName);
    this.setState({ pokemonName: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} style={styles.form}>
        <input class="input"
          type="text"
          name="pokemonName"
          value={this.state.pokemonName}
          onChange={this.handleNameChange}
        />


        <button type="submit">
          <ImSearch style={{ marginRight: 8 }} />
          Найти
        </button>
      </form>
    );
  }
}



//import React, { Component } from 'react';
//import { nanoid } from 'nanoid';
//import css from './Searchbar.module.css';

//export class Seachbar extends Component {

//state = {
 // photo: null,
  //loading: false,

//}

//componentDidMount (){

//this.setState({ loading: true });

//fetch('https://pixabay.com/api/?q=cat&page=1&key=30239587-3f20dad8b68c1db6bb7cff5e0&image_type=photo&orientation=horizontal&per_page=12')
//.then(res => res.json())
//.then(photo => this.setState({photo}))
//.finally(() => this.setState({ loading: false }));

 // }

 // render() {

  //  return (
  //    <>
   //   <header className={css.searchbar}>
//  <form class="form">
 //   <button type="submit" class="button">
 //     <span class="button-label">Search</span>
 //   </button>

 //   <input
 //     class="input"
  //    type="text"
 //     autocomplete="off"
 //     autofocus
  //    placeholder="Search images and photos"
 //   />
 // </form>
//</header>
//{this.state.loading && 
//<h1>Загружаем...</h1>}
//{this.state.photo && (
//<div>{this.state.photo.total}</div>
//)}
//</>
 //   );
 // }
//}