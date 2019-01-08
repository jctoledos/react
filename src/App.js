import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import styled from 'styled-components';

const Album = ({album}) => (
    <AlbumWrapper>
        <div className={'photo'}>
            <h1>{album[album.length - 1].title}</h1>
            <img alt={album[album.length - 1].title} src={album[album.length - 1].url} />
        </div>
        <div className={'photo'}>
            <h1>{album[album.length - 2].title}</h1>
            <img alt={album[album.length - 2].title} src={album[album.length - 2].url} />
        </div>
    </AlbumWrapper>
);

class App extends Component {

    constructor() {
        super();
        this.state = {data: null};
    }

    componentWillMount() {
        this.getData().then((response)=>{
            let data = response.data;
            let newArr = [];

            let lastId = data[data.length - 1].albumId;
            for(let i = 0; i < 3; i++) {
                newArr.push(data.filter(album => album.albumId === (lastId - i)));
            }
            console.log(newArr);
           this.setState({data: newArr});
        });
    }

    getData = () => {
        return axios({
            method:'get',
            url:'https://jsonplaceholder.typicode.com/photos',
        });
    };

   render() {
        return (
          <AppWrapper className="App">
              {this.state.data !== null &&
                  this.state.data.map((album) => (
                      <Album key={album.albumId} album={album} />)
                  )
              }
          </AppWrapper>
        );
   }
}

export default App;

const AppWrapper = styled.div`

`;

const AlbumWrapper = styled.div`
  border: 1px solid purple;
`;
