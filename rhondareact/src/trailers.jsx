export default function Trailers() {
    return (
        <div class="section" id="trailer_section">
            <h2>Trailers</h2>
            <div id="trailer_list">
                <TrailerNode 
                Title="New Manufactured Home 28x48" 
                SQFT="1264" 
                Bedrooms="3" 
                Bathrooms="2" 
                Price="$59,900+Sales Tax"
                ImageName="./assets/NMH28x48.jpg"/>
                <TrailerNode 
                Title="New Manufactured Home 28x56" 
                SQFT="1475" 
                Bedrooms="4" 
                Bathrooms="2" 
                Price="$69,900+Sales Tax"
                ImageName="./assets/NMH28x56.jpg"/>
            </div>
        </div>
    );
}

function TrailerNode({Title, SQFT, Bedrooms, Bathrooms, Price, ImageName}) { 
    return (
        <div class="trailernode">
            <h3 id="panelheader">{Title}</h3>
            <img class="image_placeholder" src={ImageName}></img>
            <table>
                <tbody>
                <tr>
                <td>SqFt</td>
                <td>{SQFT}</td>
                </tr>
                <tr>
                <td>Bedrooms</td>
                <td>{Bedrooms}</td>
                </tr>
                <tr>
                <td>Bathrooms</td>
                <td>{Bathrooms}</td>
                </tr>
                <tr>
                <td>Price</td>
                <td>{Price}</td>
                </tr>
                <tr>
                <td>Delivered to Property</td>
                </tr>
                <tr>
                <td>Utility With Hookup</td>
                </tr>
                </tbody>
            </table>
        </div>
    );
}