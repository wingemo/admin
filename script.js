alertSuccess = '<div class="alert alert-success" role="alert"> <strong>success </strong> => connected to the back-end and database</div>';
alertError = '<div class="alert alert-danger" role="alert"><strong>danger</strong> => failed to connect to back-end or database</div>';
tableAdventurer = '<div class="tableAdventurer draggable border border-dark""><button type="button" class="btn btn-primary"><i class="fa-solid fa-user-plus"></i></button><button type="button" class="btn-close btn btn-primary closeUsers" aria-label="Close"></button><br><hr><table class="table table-sm">  <thead class="thead-dark">    <tr>      <th scope="col">#</th>      <th scope="col">First</th>      <th scope="col">Last</th>      <th scope="col">Handle</th>    </tr>  </thead>  <tbody>    <tr>      <th scope="row">1</th>      <td>Mark</td>      <td>Otto</td>      <td>@mdo</td>    </tr>    <tr>      <th scope="row">2</th>      <td>Jacob</td>      <td>Thornton</td>      <td>@fat</td>    </tr>    <tr>      <th scope="row">3</th>      <td>Larry</td>      <td>the Bird</td>      <td>@twitter</td>    </tr>  </tbody></table></div>'
systemStatus = '<div class="systemStatus draggable border border-dark"><button type="button" class="btn btn-primary"><i class="fa-solid fa-user-plus"></i></button><button type="button" class="btn-close btn btn-primary closeStatus" aria-label="Close"></button> <hr> <strong>Backend</strong> <hr> Database</div>'


$(document).ready(function() {
    $('[data-toggle="tooltip"]').tooltip();   
    $.ajax({url: "https://getbootstrap.com/",
    }).done(function (data) {
        $('.backend').css( "background-color", "#2dc937" );
    }).fail(function (jqXHR, textStatus) {
        $(".dashboardCanvas").append(alertError);
        $('.alert').delay(5000).fadeOut('slow');
        $('.backend').css( "background-color", "red" );
    });
    $.ajax({url: "https://getbootstrap.com/",
    }).done(function (data) {
        $(".dashboardCanvas").append(alertSuccess);
        $('.alert').delay(3000).fadeOut('slow');
        $('.database').css( "background-color", "#2dc937" );
    }).fail(function (jqXHR, textStatus) {
        $(".dashboardCanvas").append(alertError);
        $('.alert').delay(3000).fadeOut('slow');
        $('.database').css( "background-color", "red" );
    });
    setInterval(function(){ 
        $.ajax({url: "https://getbootstrap.com/",
        }).done(function (data) {
        }).fail(function (jqXHR, textStatus) {
            $('.backend').css( "background-color", "red" );
        });
        $.ajax({url: "https://getbootstrap.com/",
        }).done(function (data) {
        }).fail(function (jqXHR, textStatus) {
            $('.database').css( "background-color", "red" );
        });
    }, 6000);
    $(".navbar-brand").click(function(){
        location.reload();
    });
    $(".adventurer").click(function(){
        $(".dashboardCanvas").append(tableAdventurer);
        $(".draggable").draggable().resizable().draggable({ grid: [ 20, 20 ] });
        $(".closeUsers").on('click', function() {
            $(this).parent().remove(); 
        });
    });
    $(".system").click(function(){
        $(".dashboardCanvas").append(systemStatus);
        $(".draggable").draggable().resizable().draggable({ grid: [ 20, 20 ] });
        $(".closeStatus").on('click', function() {
            $(this).parent().remove(); 
        });
    });
});


