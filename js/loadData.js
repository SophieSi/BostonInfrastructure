/**
 * Created by t-xusi on 7/3/2017.
 */
function loadData() {
    var data;
    d3.csv("./data/Parking_Meters.csv", function (error, csv){
        // console.log(csv);


        var data = csv.map(function (d) {
            return {
                "lat": +d.Y,
                "lng": +d.X,
                "ELEV": +d.ELEV
            }

        })

        if (data){
            // console.log(data);
            initMap(data); //create map
        }
    })




}