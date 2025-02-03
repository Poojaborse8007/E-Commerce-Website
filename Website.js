// script.js
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('button');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const productName = this.parentElement.querySelector('h3').innerText;
            alert(`${productName} has been added to your cart!`);
        });
    });
});
(document).ready(function(){
    $('#search').click(function(){
       $('.menu-item').addClass('hide-item')
        $('.search-form').addClass('active')
        $('.close').addClass('active')
        $('#search').hide()
    })
    
     $('.close').click(function(){
       $('.menu-item').removeClass('hide-item')
        $('.search-form').removeClass('active')
        $('.close').removeClass('active')
         $('#search').show()
    })
    
})
$(document).ready(function () {
    $("a").on("click", function (event) {
      if (this.hash !== "") {
        event.preventDefault();
  
        var hash = this.hash;
        $("html, body").animate(
          {
            scrollTop: $(hash).offset().top,
          },
          800,
          function () {
            window.location.hash = hash;
          }
        );
      }
    });
  });
  
  $(".menu-items a").click(function () {
    $("#checkbox").prop("checked", false);
  });
  