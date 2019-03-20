$(function () {
  $('#responsiveNav').on('click', function () {
    $('.navLink').on('click', function () {
      if ($('#responsiveNav').prop("checked")) {
        $('#responsiveNav').prop("checked", false)
      }
    })

  })
})