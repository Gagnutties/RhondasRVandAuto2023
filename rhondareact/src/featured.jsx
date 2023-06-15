import GetVehicle from "./exportvehicle";

export default function Featured() {
    return (
        <div class="section" id="featured_section">
            <h2>Featured</h2>
            <div id="featured_cars">
                <GetVehicle category={"featured"}/>
            </div>
        </div>
    );
}

