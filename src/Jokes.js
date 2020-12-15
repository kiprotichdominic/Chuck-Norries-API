import React from 'react'


const Joke = (props)=>{
    const [joke,setJoke] = React.useState()

    React.useEffect(() => {
        fetch(`https://api.chucknorris.io/jokes/random?category=${props.category}`)
        .then(response=>response.json())
        .then(jokeResponse=> setJoke(jokeResponse))
    }, [props.category])

    if(!joke){
        return <p>Please Select A Category</p>
    }
    return <p>{joke.value}</p>}

export default Joke;