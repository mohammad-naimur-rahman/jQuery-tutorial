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

  //-- Add elements
  // append()
  $('.append').append(
    `
    <ul>
      <li>This is appended li</li>
      <li>This is appended li</li>
      <li>This is appended li</li>
    </ul>
  `,
    '<p>This is also appended</p>'
  )

  // prepend()
  $('.prepend').prepend(
    `
    <ul>
      <li>This is prepended li</li>
      <li>This is prepended li</li>
      <li>This is prepended li</li>
    </ul>
  `,
    '<p>This is also prepended</p>'
  )

  // after()
  $('.after').after(
    `
    <ul>
      <li>This is after</li>
      <li>This is after</li>
      <li>This is after</li>
    </ul>
  `
  )

  // before()
  $('.before').before(
    `
    <ul>
      <li>This is before</li>
      <li>This is before</li>
      <li>This is before</li>
    </ul>
  `
  )

  //-- Remove Elements
  // remove()
  $('.remove-btn').click(function () {
    $('.remove').remove()
  })

  // empty()
  $('.empty-btn').click(function () {
    $('.empty').empty()
  })

  // remove filtered
  $('.remove-filter-btn').click(function () {
    $('p').remove('.remove-filter-1, .remove-filter-2')
  })

  //-- Get and Set CSS classes
  // addClass()
  $('.add-class-btn').click(function () {
    $('.add-class, .add-class-2').addClass('text-success small')
  })

  // removeClass()
  $('.remove-class-btn').click(function () {
    $('.remove-class').removeClass('bg-secondary')
  })

  // toggleClass()
  $('.toggle-class-btn').click(function () {
    $('.remove-class').toggleClass('bg-secondary')
  })

  //-- css() method
  // get CSS property value
  const className = $('.get-class').css('color')
  $('.print-class').text(className)

  // set CSS property value by chaining or one by one
  $('.add-custom-css-btn').click(function () {
    $('.add-custom-css').css('font-size', '30px').css('font-style', 'italic')
  })

  // set multiple CSS properties value by an object
  $('.add-custom-css-obj-btn').click(function () {
    $('.add-custom-css').css({
      'font-size': '30px',
      'font-style': 'italic',
    })
  })

  // measure Dimensions
  const dimensions = $('.dimensions')
  const width = `<p>Width ${dimensions.width()}</p>` // width of the main element
  const innerWidth = `<p>Inner Width ${dimensions.innerWidth()}</p>` // width with padding
  const outerWidth = `<p>Outer Width ${dimensions.outerWidth()}</p>` // width with padding and border
  const outerWidthWithMargin = `<p>Outer Width With Margins ${dimensions.outerWidth(true)}</p>` // width padding, border and margin
  const divider = '<div class="py-3"></div>'
  const height = `<p>Height ${dimensions.height()}</p>` // height of the main element
  const innerHeight = `<p>Inner Height ${dimensions.innerHeight()}</p>` // height with padding
  const outerHeight = `<p>Outer Height ${dimensions.outerHeight()}</p>` // height with padding and border
  const outerHeightWithMargin = `<p>Outer height With Margins ${dimensions.outerHeight(true)}</p>` // height with padding, border and margin
  dimensions.append(
    width,
    innerWidth,
    outerWidth,
    outerWidthWithMargin,
    divider,
    height,
    innerHeight,
    outerHeight,
    outerHeightWithMargin
  )
  // we can also set height and widht of an elemet by giving a single argument in number
  // ex: $('.dimensions').width(300)
  // For more referece about DOM manipulation - https://www.w3schools.com/jquery/jquery_ref_html.asp
})
