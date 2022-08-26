const pathNameWithSlash = location.pathname
$(document).ready(function () {
  $(`a[href='${pathNameWithSlash.substring(1)}']`).addClass('active')
})
