

  document.getElementById('closeAlert').addEventListener('click', () => {
    document.getElementById('alert').classList.add('hidden');
  });


  $(document).ready(function(){
    $('#create').submit(function (event) {
        event.preventDefault();
        var formdata = new FormData(this);
        
        $.ajax({
            url: 'create.php',
            type: 'POST',
            data: formdata,
            contentType: false,  
            processData: false,  
            success: function (response) {
                if(response === "success"){
                    location.href = "play.html";
                }
                else{
                    document.getElementById('alert-text').innerHTML = response;
                    document.getElementById('alert').classList.remove('hidden');
                    window.scrollTo(0,0);
                }
            },
            error: function (xhr, status, error) {
                console.error('Error:', status, error);
            }
        });
    });
    

    $('#join').submit(function (event) {
        event.preventDefault();
        var formdata = new FormData(this);
        
        $.ajax({
            url: 'join.php',
            type: 'POST',
            data: formdata,
            contentType: false,  
            processData: false,  
            success: function (response) {
                if(response === "success"){
                    location.href = "play.html";
                }
                else{
                    document.getElementById('alert-text').innerHTML = response;
                    document.getElementById('alert').classList.remove('hidden');
                    window.scrollTo(0,0);
                }
            },
            error: function (xhr, status, error) {
                console.error('Error:', status, error);
            }
        });
    });
});