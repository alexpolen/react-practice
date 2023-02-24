import { useState } from "react";       //importing the useState hook into React

const Home = () => {
    //let name = 'Alex';
    const [name, setName] = useState('Mario');    //use const [] (array destructuring) to store name in a value. First value is the inital value, second value is a functino we can use to change that value - setName
    const [age, setAge] = useState(25);
    const handleClick = () => {
        setName('Luigi');
        setAge(30);

    }         

    
    return (
        <div className ="Home">
            <h2>Homepage</h2>
            <p>{ name } is { age} years old</p>
            <button onClick={handleClick}>Click Me</button>
        </div>
     );
}
 
export default Home;