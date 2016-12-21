$(document).ready(function() {


    $('#btnStart').click(function() {
        $('#pageStart').fadeOut();
        setTimeout(function(){
        $('#pagePhoto').fadeIn()}
        ,400);
        clearTimeout();
    });
    $('#btnPhoto').click(function() {
        $('#pagePhoto').fadeOut();
        setTimeout(function(){
        $('#pageApercu').fadeIn()}
        ,400);
        clearTimeout();
    });
    $('#share').click(function() {
        $('#log').fadeOut();
        $('#help').fadeOut();
        setTimeout(function(){
        $('#fbTwit').fadeIn()
      $('#retour').fadeIn();}
        ,400);
        clearTimeout();
        $('#retour').click(function(){
          $('#fbTwit').fadeOut();
          $('#retour').fadeOut();
          $('#reseau').fadeIn();
          $('#log').fadeIn();
          $('#help').fadeIn();
        });
    });
    $('#login').click(function() {
        $('#pageApercu').fadeOut();
        $('#pageCompte').fadeIn();
        $('#retourFour').click(function(){
          $('#pageCompte').fadeOut();
          $('#pageApercu').fadeIn();
        })
    });
    $('#question').click(function() {
        $('#reseau').fadeOut();
        setTimeout(function(){
        $('#helper').fadeIn();
      $('#retourThree').fadeIn();}
        ,400);
        clearTimeout();
        $('#retourThree').click(function(){
          $('#helper').fadeOut();
          $('#retourThree').fadeOut();
          $('#reseau').fadeIn();
          $('#help').fadeIn();
          $('#login').fadeIn();
        });
    });
    $('.end').click(function(){
      $('#pageApercu').fadeOut();
      $('#pageCompte').fadeOut();
      $('#pageFin').fadeIn();
    })
});
