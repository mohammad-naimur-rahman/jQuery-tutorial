$(document).ready(function () {
  //-- Ancestors
  $('.find-parent').parent().css('border', '1px solid orangered') // parent()
  $('.find-parents').parents().css('border', '1px solid orangered') // parents()
  $('.find-parents-until').parentsUntil('.find-until').css('border', '1px solid orangered') // parentsUntil()
})
