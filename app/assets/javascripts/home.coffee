# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/
$(document).ready ->
    $('.modal-trigger').leanModal()
    $('.dropdown-button').dropdown()
    $('.parallax').parallax()
  


# smooth scrolling code
# stole it from http://codepen.io/MyXoToD/post/look-ma-such-a-smooth-scroll
$(document).on "click", "a", (e) ->
  url = window.location.pathname
  current_page = url.substring(url.lastIndexOf('/') + 1)
  link = $(this).attr("href").split("#")[0]
  anchor = $(this).attr("href").split("#")[1]
  if anchor
    if current_page is link
      e.preventDefault()
      if anchor is "top"
        offset = 0
      else
        offset = $("#" + anchor).offset().top
      $("html,body").animate
        scrollTop: offset