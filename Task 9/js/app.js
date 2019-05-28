$(function(){

var item = null;
  $('button').click(function(e) {
      var selected = $(this).attr('class');
      $('#saved').append(`
      <li class="list-group-item">${item}</li>
      `)
  });

  $('#generated li h1').click(function(e) {
      alert($(this).text())
      var selected = $(this).attr('class');
      $('#saved').append(`
      <li class="list-group-item">${item}</li>
      `)
  });

  $.ajax({
    method: 'GET',
    url: 'https://api.chucknorris.io/jokes/categories'
  }).done(function(data){
    $.each(data,function (id, name) {
      $('.categories').append(`
      <option>${name}</option>
      `)
    });
  })

  function getJoke(category){
    $.ajax({
      method: 'GET',
      url: `https://api.chucknorris.io/jokes/random?category=${category}`
    }).done(function(data){
      $.each(data,function (key, value) {
        if (key === 'value') {
          item = value;
          console.log(value+" "+saved)
          $('#generated').html(`
          <li class="list-group-item"><h1>${value}</h1></li>
          `)
         }
      });
    })
  }

  function getSearchJoke(query){
    $.ajax({
      method: 'GET',
      url: `https://api.chucknorris.io/jokes/search?query=${query}`
    }).done(function(data){
      $('#generated').html(``)
      $.each(data.result,function (key, value) {
        if (value.value != null) {
          item = value;
          var click = $('#generated').append(`
          <li class="list-group-item"><h1>${value.value}</h1></li>
          `)
        }
      });
      $('#generated li').click(function(e) {
          item = $(this).text()
      });
    })
  }

  $('select').change(function() {
    $("select option[value='remove']").remove();
      var str = "";
      $('select option:selected').each(function() {
        str += $( this ).text() + " ";
      });
      getJoke(str);
    })


  $(':text').on('input', function(){
    if($(this).val().length > 2) {
         getSearchJoke(this.value);
    }
  });

  // $('#generated').bootpag({
  //   total: 10
  // }).on("page", function(event, /* page number here */ num) {
  //   $("generated").html("Insert content"); // some ajax content loading...
  // });

})
