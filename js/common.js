const path = location.pathname.substring(1)
$(document).ready(function () {
  $(`nav > a[href='${path}']`).addClass('active')
  function applyMargin() {
    const navMargin = $('nav').outerHeight()
    $('.container').css('margin-top', `${navMargin + 10}px`)
  }
  $(window).resize(function () {
    applyMargin()
  })
  applyMargin()
})
