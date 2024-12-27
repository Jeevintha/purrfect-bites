



function Nav() {

    return(
        <nav className="flex justify-between p-5 h-20 bg-green-300" >

            <div className="flex items-center">
                <h1 className="font-bold">Purrfect Bites</h1>
                <h2>Home</h2>
            </div>

            <ul className="flex font-medium justify-around flex-wrap  items-center">
                <li>Our Food</li>
                <li>Ingredients</li>
                <li>Studies</li>
                <li>FAQ</li>
            </ul>

        </nav> 
    )
}
export default Nav