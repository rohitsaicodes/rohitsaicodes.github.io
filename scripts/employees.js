$(document).ready(function(){
    $.getJSON("../scripts/team.json", function(data){
      $.each(data.employees, function(key, value) {
        $("#team-details").append(
          '<div class="team-info">' +
            '<div class="name">' + value.name + '</div>' +
            '<div class="title">' + value.title + '</div>' +
            '<div class="bio">' + value.bio + '</div>' +
          '</div>'
        );
      });
    });
  });