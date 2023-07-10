const container=document.querySelector('.container');

container.addEventListener('click',function(e){
    if(e.target.classList.contains('seat') && !e.target.classList.contains('reserved')){
        e.target.classList.toggle('selected');
       SelectedSeatCount=container.querySelectorAll('.seat.selected').length;
       console.log(SelectedSeatCount);
       //27

    }

});

