import $ from 'jquery'

window.addEventListener('DOMContentLoaded', function (e) {
  $(function () {
    function sticky() {
      if ($(window).scrollTop() >= 1) {
        $('.nav-header').addClass('sticky')
      } else if ($(window).scrollTop() < 1) {
        $('.nav-header').removeClass('sticky')
      }
    }
    $(window).on('scroll', function () {
      sticky()
    })
    $(window).on('load', sticky())
  })

  // Back to Top Button
  $('.btt').hide()
  $(function () {
    function sticky() {
      let hgt = $(window).innerHeight()
      if ($(window).scrollTop() >= hgt) {
        $('.btt').show()
      } else if ($(window).scrollTop() < hgt) {
        $('.btt').hide()
      }
    }
    $(window).on('scroll', function () {
      sticky()
    })
    $(window).on('load', sticky())
  })

  $(document).mouseup(function (e) {
    var fnav = $('nav')
    if (!fnav.is(e.target)) {
      $('nav').removeClass('show')
      $('.menu-icon').removeClass('open')
      $('.nav-header').removeClass('shadow')
    }
    $('.menu-icon').on('click', function () {
      $(this).toggleClass('open')
      $('nav').toggleClass('show')
      $('.nav-header').toggleClass('shadow')
    })
  })
})
