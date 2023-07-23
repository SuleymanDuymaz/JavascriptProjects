let latitude,longitude="";
if(navigator,Geolocation){
navigator.geolocation.getCurrentPosition(onSuccess,onError);

}
else{
    alert('Tarayıcınız konum bilgisi içeriklerini desteklemiyor');
}

function onSuccess(position){
    let latitude=position.coords.latitude;
    let longitude=position.coords.longitude;

    const api_key="4df2c465637d4eb099c478b2deddfa9f";
    const url = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${api_key}`;
    
    fetch(url).
    then(response=>response.json()).
    then(result=>{
        let details = result.results[0].components;

            let {country, postcode, province} = details;z
    });

}
function onError(error){
    if(error.code==1){

        alert("kullanıcı erişimi reddetti");

    }
    else if(error.code==2){
        alert("konum alınamadı");
    }
    else{
        alert("Bir hata oluştu")
    }

}