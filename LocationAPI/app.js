let latitude,longitude="";
if(navigator,Geolocation){
navigator.geolocation.getCurrentPosition(onSuccess,onError);

}
else{
    alert('Tarayıcınız konum bilgisi içeriklerini desteklemiyor');
}

function onSuccess(position){
    console.log(position.coords.latitude);
    console.log(position.coords.longitude);


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