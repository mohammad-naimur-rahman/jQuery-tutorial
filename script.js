$(document).ready(() => {
  //-- selectors
  $('p').hide() // selects all the p tag - display: hidden
  $('#id-name').css('display', 'none')
  $('.class-name').css('display', 'none')
  // $('*') - select everything
  // $(this) - select the current HTML element
  // $('p.intro') - we can add specificity level
  // $('p:first') - pseudeo element
  // $('ul li:first') - nested selector
  // $("a[target='_blank']") - attribute selector
  // for more info - https://www.w3schools.com/jquery/jquery_ref_selectors.asp
})
