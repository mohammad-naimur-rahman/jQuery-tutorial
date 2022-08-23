// Tutorial link: https://www.youtube.com/watch?v=HgvIox6ehkM

// jQery provides a function object that can be accessible by `$` sign, it accepts a parameter that is the document object what we want to manipulate.

// Here $(docuemnt) means we can now manipulate the document object

// and then we can apply a jQuery property

// and multiple property can be assigned by chaining them and they will execute by order

// here $(document).ready means when the DOM is ready
//ready() is a function that takes a callback funtion and inside it we can manipulate the document object

// text() works like innerText

// to change the CSS styling we can use jQuery 'css' property
// css function takes 2 param, first is the css property and second the property value
$(document).ready(() => {
  $('#readyDemo').text('Document is ready').css('color', 'teal').css('font-size', '20px')
})

$('.demo-class').css('color', 'orangered')

// tag select $('h2')
// attribute select $('a[target=_blnak]')
// universal selec $('*')
// id select $('#id')
// class select $('.class-name')
// psedu and position select $('.list > li:first-child')
//-- And it applies for every selector like we select in css
