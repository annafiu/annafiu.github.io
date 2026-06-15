/* ============================================
   ANNAFIU.COM — nav.js
   Shared nav behavior for all pages
   ============================================ */

(function () {
  // ── Mobile menu toggle
  var burger = document.getElementById('navBurger');
  var menu = document.getElementById('mobileMenu');
  if (burger && menu) {
    burger.addEventListener('click', function () {
      menu.classList.toggle('open');
    });
    // close when a link is clicked
    menu.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        menu.classList.remove('open');
      });
    });
  }

  // ── Mark active nav link based on current path
  var path = window.location.pathname;
  document.querySelectorAll('[data-nav]').forEach(function (el) {
    var page = el.getAttribute('data-nav');
    // match /works, /works/, /works/anything
    if (path === '/' + page || path.startsWith('/' + page + '/')) {
      el.classList.add('active');
    }
  });
})();
