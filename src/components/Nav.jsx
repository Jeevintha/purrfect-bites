



function Nav() {

    return(
        <nav className="flex justify-between p-5 h-20" >

            <div className="flex items-center gap-4">
                <h1 className="font-bold">Purrfect Bites</h1>
                <h2>Home</h2>
            </div>

            <ul className="flex font-medium gap-2 justify-around flex-wrap items-center">
                <li><a href="/">Our Food</a></li>
                <li><a href="/">Ingredients</a></li>
                <li><a href="/">Studies</a></li>
                <li><a href="/">FAQ</a></li>
            </ul>

        </nav>
    )
}
export default Nav