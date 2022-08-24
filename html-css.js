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
  $('.set-attr').attr('href', 'index.html') // set attribute value
})
