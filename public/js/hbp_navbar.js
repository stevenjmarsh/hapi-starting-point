var hbpNavbar =  {
  setActiveMenuItems: function (menuItem) {
    // Script to show active page on navbar
    $("#navbar-collapse-1 li[data-menu=" + menuItem + "]").addClass('active');

    // If a dropdown sub menu page is shown, set the main dropdown menu item as active too
    //    NOTE: if have more than one dropdown menu, may need multiple if statments (and to select by id)
    if ($('.dropdown-menu > li.active').length) {
      $('.dropdown-menu').parent().addClass('active');
    }
  }
};
