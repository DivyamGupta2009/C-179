var coordinates = {}

$(document).ready(function(){
    get_coordinates()
})

function get_coordinates(){
    let searchparams = new URLSearchParams(window.location.search);

    if(searchparams.has("source") && searchparams.has("destination")){
        let source = searchparams.get("source");
        let destination = searchparams.get("destination");

        coordinates.source_lat = source.split(";")[0]
        coordinates.source_lon = source.split(";")[1]
        coordinates.destination_lat = destination.split(";")[0]
        coordinates.destination_lon = destination.split(";")[1]

        
    }
    else{
        console.log("Coordinates have not been selected");
        window.history.back();
    }
}