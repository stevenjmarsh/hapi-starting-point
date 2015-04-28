var hbpNavbar =  {
  setActiveMenuItems: function () {
    // Script to show active page on navbar
    $("#homepage").siblings('nav').find('a:contains("Home")').parent().addClass('active');
    $("#aboutpage").siblings('nav').find('a:contains("About")').parent().addClass('active');

    // If a dropdown sub menu page is shown, set the main dropdown menu item as active too
    //    NOTE: if have more than one dropdown menu, may need multiple if statments (and to select by id)
    if ($('.dropdown-menu > li.active').length) {
      $('.dropdown-menu').parent().addClass('active');
    }
  },

  setHoverDropdownMenu: function () {
    // Optional functionality to make dropdown menus display on hover
    $('ul.nav li.dropdown').hover(function () {
      $('.dropdown-menu', this).fadeIn();
    }, function () {
      $('.dropdown-menu', this).fadeOut('fast');
    });
  }
};
