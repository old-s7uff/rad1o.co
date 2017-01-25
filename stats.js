function radTRA() {
  var url = 'http://rad1o.co/stats';
  $.ajax({
    type: 'GET',
    url: url,
    async: true,
    jsonpCallback: 'parseMusic',
    contentType: "application/json",
    dataType: 'jsonp',
    success: function(json) {
      $('#who').text(json['/live']['title']);
      $('#count').text(json['/live']['listeners']);
    },
    error: function(e) {
      console.log(e.message);
    }
  });
}
$(document).ready(function() {

  setTimeout(function() {
    radTRA();
  }, 2000);
  setInterval(function() {
    radTRA();
  }, 15000);
});
