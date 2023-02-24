//A component is a junction that returns a JSX template, then is exported at the bottom of the file.
const Navbar = () => {           //type in sfc to get a Stateless Functional Component
    return (
        <nav className="navbar">
            <h1>Moreland Blog</h1>
            <div className="links">
                <a href="/">Home</a>                {/* anchor tag */}
                <a href="/create" style={{
                    color: "white",
                    backgroundColor: '#f1356d',      /*camelCase for JS */
                    borderRadius: '8px'
                                                    /* key: value format */
                }}>New Blog</a>                     {/* adding inline styling - style property set to value of a string, dynamic value for JSX */}
                                                    {/* value is an object so we need inner and outer {}. Inner braces is the JS object, outer {} means it's a dynamic value */}
            </div>
        </nav>
    );
}
 
export default Navbar;   //We need to import this Navbar function into the App.js Root Component and nest it in the template