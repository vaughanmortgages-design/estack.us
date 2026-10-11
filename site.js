const button=document.querySelector('[data-menu]');
const nav=document.querySelector('[data-nav]');
if(button&&nav){button.addEventListener('click',()=>{const open=nav.classList.toggle('open');button.setAttribute('aria-expanded',String(open));});}

(function () {
  if (window.__estackAnalytics) return;
  window.__estackAnalytics = true;
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };
  window.gtag('js', new Date());
  window.gtag('config', 'G-9RCRY576J3');
  var tag = document.createElement('script');
  tag.async = true;
  tag.src = 'https://www.googletagmanager.com/gtag/js?id=G-9RCRY576J3';
  document.head.appendChild(tag);
  document.addEventListener('click', function (event) {
    var link = event.target.closest && event.target.closest('a[href]');
    if (!link || !link.rel.split(/\s+/).includes('sponsored')) return;
    var destination = new URL(link.href, window.location.href);
    if (!/^https?:$/.test(destination.protocol)) return;
    window.gtag('event', 'affiliate_click', {
      send_to: 'G-9RCRY576J3',
      link_domain: destination.hostname,
      link_url: destination.origin + destination.pathname,
      transport_type: 'beacon'
    });
  });
})();
