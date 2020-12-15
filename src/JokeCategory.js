import React,{ useState, useEffect } from 'react';

const JokeCategories = (props) =>{
    const [categories, setCategories]= useState([])

    useEffect(() => {
        // GET request using fetch inside useEffect React hook
        fetch('https://api.chucknorris.io/jokes/categories')
            .then(response => response.json())
            .then(categories => setCategories(categories));
    
    // empty dependency array means this effect will only run once (like componentDidMount in classes)
    },[]);
    if(!categories){
        return <p>Loading...</p>
    }
    return (
        <>
        <h1 className="Header">Chuck Norries Jokes API</h1>
        <div className="container">
        <div className="form-group text-center">
        <label className="label-m" htmlFor="chuckN">Select A Category</label>
        <select id="chuckN" className="form-control" onChange={(e)=>props.setCategory(e.target.value)}>
        <option>Please Select A Category</option>
        {categories.map((category, index) => 
        <option key={index}>{category}</option>)
        }    
    </select>
        </div>
        </div>
        </>
    )
};

export default JokeCategories;