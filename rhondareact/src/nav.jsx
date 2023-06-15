

export default function Nav() {
    return (
        <div id="navigation">
            <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@500&display=swap" rel="stylesheet"></link>
            <nav>
                <a href="#root">Home</a>
                <a href="#featured_section">Featured</a>
                <a href="#vehicle_section">Vehicles</a>
                <a href="#trailer_section">Trailers</a>          
                <a href="#information_section">Contact Us</a>
            </nav>
        </div>
    );
}


function NavButtons() {
    return (
        <a href="#vehicle_section" onClick={onClick}>{title}</a>
    )
}