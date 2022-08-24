$(document).ready(function () {
  //-- Get
  const text = $('.get-text').text() // get innerText
  const html = $('.get-text').html() // get innerHTML
  const value = $('.get-value').val() // get value
  const href = $('.get-attr').attr('href') // get attribute value
  $('.print-text').text('The innerText of the above element is: ' + text)
  $('.print-html').text(html)
  $('.print-value').text('The value of the the above input is: ' + value)
  $('.print-attr').text(href)

  //-- Set
  $('.set-text').text('This is set custom text') // set innerText
  $('.set-html').html(`
    <span class="text-primary">This is set custom HTML</span>
  `) // set innerHTML
  $('.set-value').val('Some value is input') // set value
  $('.set-attr').attr('href', 'index.html') // set attribute value

  // set with callback
  $('.set-text-cb').text(function (i, old) {
    return old + ' and this is the new text and the index is ' + i
  })
  $('.set-html-cb').html(function (i, old) {
    return old + '<span class="text-primary"> and this is the new html and the index is</span> ' + i
  })
  $('.set-attr-cb').attr('href', function (i, old) {
    return old + '/index.html'
  })
  $('.inc').click(function () {
    $('.set-value-cb').val(function (i, old) {
      return +old + 1
    })
  })
  $('.dec').click(function () {
    $('.set-value-cb').val(function (i, old) {
      return +old - 1
    })
  })
})
