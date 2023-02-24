const Home = () => {

    const handleClick = (e) => {            {/* e is event object or event parameter - automatically get it as the first parameter inside the function*/}
        console.log('yo yo yo', e);
    }

    const handleClickAgain = (name, e) => {
        console.log('Hello' + name, e.target);   {/*event object, only for the target in this case */}
    }

    
    return ( 
        <div className ="Home">
            <h2>Homepage</h2>
            <button onClick={handleClick}>Click Me</button>                                 {/*link button to function - onClick set to a dynamic value, pass in a function reference - name of the function (handleClick)  */}
            <button onClick={(e) => handleClickAgain(' Alex', e)}>Click me again</button>     {/*anonymous function - not stored in a constant - we aren't invoking it, only referencing it */}
                                                                                            {/*won't be invoked right away bc its wrapped in an anonymous function*/}
        </div>
     );
}
 
export default Home;