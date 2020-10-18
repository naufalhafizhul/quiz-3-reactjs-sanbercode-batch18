import axios from 'axios';
import React, { Component } from 'react';

export default Home = () => {
    const context = useContext(MovieContext)

    const [movie, setMovie] = context.getMovie

    let content =
        movie.length === 0 ? (
            <></>
        ) : (
            movie.map((item) => {
                return <ListMovie item={item} />;
            })
        );

    componentDidMount() {
        axios.get('http://backendexample.sanbercloud.com/api/movies')
            .then(response => {
                this.setState({
                    movie: response.data
                })
            })
    }

    render() {
        return (
            <div id='article-list'>
                {this.state.movie.map((movie, setMovie) => {
                    let hour = Math.floor(m.duration / 60);
                    let hours = hour < 2 ? hour + ' hour' : hour + ' hours';
                    let minute = m.duration % 60;
                    let minutes = minute < 2 ? minute + ' minute' : minute + ' minutes';

                    return (
                        <div
                            key={m.id}>
                            <div
                                key={m.id}
                                className='article'>
                                <h3>{m.title}</h3>
                                <img
                                    src={m.image_url}
                                    alt={m.title}
                                    height='300'
                                    width='200'
                                    style={{ marginRight: '20px' }} />

                                <h3 style={{ marginBottom: '-20px' }}>Rating: {m.rating} of 10</h3>
                                <h3 style={{ marginBottom: '-20px' }}>Duration: {`${hours} ${minute == 0 ? '' : minutes}`}</h3>
                                <h3 style={{ marginBottom: '-20px' }}>Genre: {m.genre}</h3>

                                <br />
                                <p><b>Deskripsi:</b> {m.description}</p>
                            </div>
                            <hr />
                        </div>
                    )
                })}
            </div>
        );
    }
}