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

  //-- Effects

  // Show / Hide
  $('.hide-btn').click(function () {
    $('.counter-box').hide(1000)
    $(this).hide()
    $('.show-btn').show()
  })

  $('.show-btn').hide()
  $('.show-btn').click(function () {
    $('.counter-box').show(1000)
    $(this).hide()
    $('.hide-btn').show()
  })

  $('.toggle-btn').click(function () {
    $('.counter-box').toggle(2000)
  })

  // Fade
  $('.fade-in-btn').hide()
  $('.fade-in-btn').click(function () {
    $(this).hide()
    $('.counter-box').fadeIn(1000)
    $('.fade-out-btn').show()
  })

  $('.fade-out-btn').click(function () {
    $(this).hide()
    $('.counter-box').fadeOut(1000)
    $('.fade-in-btn').show()
  })

  $('.fade-toggle-btn').click(function () {
    $('.counter-box').fadeToggle('slow')
  })
  // Others fade functions
  // fadeTo(speed, opacity, callback)

  // Slide
  $('.slide-toggle-btn').click(function () {
    $('.slide-toggle-container').slideToggle(2000)
  })
  // Other values are slideUp() and slideDown()

  // Animate
  $('.animate-btn-1').click(function () {
    $('.animate-container').animate({ left: '200px', width: '200px', height: '+=100px' }, 1000)
  })

  $('.animate-btn-2').click(function () {
    $('.animate-container').animate(
      {
        width: 'toggle',
      },
      2000
    )
    $('.animate-text').animate({ opacity: 'toggle' }, 1000)
  })
  //animation queue
  const animateDiv = $('.animate-container')
  $('.animate-btn-3').click(function () {
    animateDiv.animate({ width: '600px' }, 'slow')
    animateDiv.animate({ width: '400px' }, 'slow')
    animateDiv.animate({ height: '600px' }, 'slow')
    animateDiv.animate({ height: '400px' }, 'slow')
  })

  // Stop
  const stopDiv = $('.stop-container')
  $('.btn-stop-start').click(function () {
    stopDiv.animate({ width: '600px' }, 2000)
    stopDiv.animate({ fontSize: '5rem' }, 2000)
  })

  $('.btn-stop-first').click(function () {
    stopDiv.stop()
  })

  $('.btn-stop-all').click(function () {
    stopDiv.stop(true)
  })

  $('.btn-stop-end').click(function () {
    stopDiv.stop(true, true)
  })

  $('.btn-stop-reset').click(function () {
    stopDiv.animate({ width: '400px' }, 2000)
    stopDiv.animate({ fontSize: '1rem' }, 2000)
  })

  // Callback
  // For every animation, for the last parameter, we can use a callback function that triggers when the animation is completed

  $('.btn-stop-callback').click(function () {
    stopDiv.animate({ width: '600px' }, 2000, function () {
      alert('Animation is completed!')
    })
  })
  // For more info about animations - https://www.w3schools.com/jquery/jquery_ref_effects.asp

  //-- Chaining
  $('.chaining').css('font-size', '2.5rem').css('color', 'teal').slideUp().slideDown()
})
