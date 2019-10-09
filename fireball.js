function getFireballData() {
    var resp ;
    var xmlHttp ;

    resp  = '' ;
    xmlHttp = new XMLHttpRequest();

    if(xmlHttp != null)
    {
        xmlHttp.open( "GET", "https://ssd-api.jpl.nasa.gov/fireball.api?limit=20", false );
        xmlHttp.send( null );
        resp = xmlHttp.responseText;
    }

    return resp;
}
