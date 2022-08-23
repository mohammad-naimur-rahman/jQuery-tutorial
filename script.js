$(document).ready(() => {
  //-- Selectors
  $('pre').hide() // selects all the p tag - display: hidden
  $('#id-name').css('display', 'none')
  $('.class-name').css('display', 'none')
  // $('*') - select everything
  // $(this) - select the current HTML element
  // $('p.intro') - we can add specificity level
  // $('p:first') - pseudeo element
  // $('ul li:first') - nested selector
  // $("a[target='_blank']") - attribute selector
  // for more info - https://www.w3schools.com/jquery/jquery_ref_selectors.asp

  //-- Events
  $('.btn-click').click(() => {
    $('.btn-next').text('I am popped in!')
  })

  $('.btn-hide').dblclick(function () {
    $(this).hide() // fat arrow funciton mix up 'this' keyword, that's why I used old style function here
  })

  let countEnter = 0,
    countLeave = 0

  // $('.counter-box').mouseenter(function () {
  //   countEnter += 1
  //   $('.counter-enter').text(countEnter)
  // })

  // $('.counter-box').mouseleave(function () {
  //   countLeave += 1
  //   $('.counter-leave').text(countLeave)
  // })

  // Alternative way - for multiple events on one element
  $('.counter-box').on({
    mouseenter: function () {
      countEnter += 1
      $('.counter-enter').text(countEnter)
    },
    mouseleave: function () {
      countLeave += 1
      $('.counter-leave').text(countLeave)
    },
  })
  // For more info - https://www.w3schools.com/jquery/jquery_ref_events.asp
})
