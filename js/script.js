$(document).ready(function() {

    $(".filter-button").click(function(){
        var value = $(this).attr('data-filter');
        
        if(value == "all")
        {
            $('.all').show('1000');
        }
        else
        {
            $(".filter").not('.'+value).hide('3000');
            $('.filter').filter('.'+value).show('3000');
            
        }
    
        if(value == "app")
        {
            $('.app').show('1000');
        }
        else
        {
            $(".app").not('.'+value).hide('3000');
            $('.app').filter('.'+value).show('3000');
            
        }
    
        if(value == "card")
        {
            $('.card').show('1000');
        }
        else
        {
            $(".card").not('.'+value).hide('3000');
            $('.card').filter('.'+value).show('3000');
            
        }
    
        if(value == "web")
        {
            $('.web').show('1000');
        }
        else
        {
            $(".web").not('.'+value).hide('3000');
            $('.web').filter('.'+value).show('3000');
            
        }
    });

})