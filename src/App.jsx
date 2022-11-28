import { SeachBarForm } from 'components/Searchbar/SeachBarForm';
import { Component } from 'react';




import * as API from 'services/api';

export class App extends Component {
  state = {
    images: [],
    isLoading: false,
    error: false,
  };

  async componentDidMount() {
    try {
      this.setState({ isLoading: true });
      const images = await API.getMaterials();
      this.setState({ images, isLoading: false });
    } catch (error) {
      this.setState({ error: true, isLoading: false });
      console.log(error);
    }
  }

  addMaterial = async (searchQuery) => {
    try {
      const image = await API.addMaterial(searchQuery);
      this.setState(state => ({
        images: [...state.images, image],
      }));
    } catch (error) {
      this.setState({ error: true, isLoading: false });
      console.log(error);
    }
  };

  

  render() {
   // const { materials, isLoading, error } = this.state;
    return (
      <>
        
        
        <SeachBarForm onSubmit={this.addMaterial} />
        
      </>
    );
  }
}