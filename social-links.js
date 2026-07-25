(() => {
  const socialLinks = [
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/estack_us/',
      icon: '<path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm10 2c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3h10zm.5 1.5a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5zM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"/>'
    },
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/profile.php?id=61591213484503',
      icon: '<path d="M13.5 22v-9h3l.5-3h-3.5V8.2c0-.9.3-1.7 1.8-1.7H17V3.8c-.7-.1-1.6-.3-2.8-.3-2.8 0-4.7 1.7-4.7 4.9V10H6.4v3h3.1v9h4z"/>'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/company/142892818/',
      icon: '<path d="M5.3 7.9H2.2V22h3.1V7.9zM3.7 2a1.8 1.8 0 1 0 0 3.6A1.8 1.8 0 0 0 3.7 2zM22 14c0-4.2-2.2-6.2-5.2-6.2-2.4 0-3.5 1.3-4.1 2.2V7.9H9.6V22h3.1v-7c0-1.9.4-3.7 2.7-3.7 2.3 0 2.3 2.1 2.3 3.8V22H22v-8z"/>'
    }
  ];

  const footer = document.querySelector('footer');
  if (!footer) return;

  const existing = footer.querySelector('.socials');
  const container = existing || document.createElement('nav');
  container.className = 'socials estack-social-links';
  container.setAttribute('aria-label', 'Follow eStack.US');
  container.innerHTML = socialLinks.map(({ name, url, icon }) =>
    `<a href="${url}" target="_blank" rel="noopener noreferrer" aria-label="Follow eStack.US on ${name}"><svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">${icon}</svg><span>${name}</span></a>`
  ).join('');

  if (!existing) {
    const footerContent = footer.querySelector('.wrap') || footer;
    footerContent.append(container);
  }

  const style = document.createElement('style');
  style.textContent = `
    .estack-social-links{display:flex;flex-wrap:wrap;gap:10px;margin-top:14px}
    .estack-social-links a{align-items:center;display:inline-flex;gap:8px;justify-content:center;min-height:44px;min-width:44px}
    .estack-social-links svg{fill:currentColor;height:18px;width:18px}
    .estack-social-links a:focus-visible{outline:3px solid #f4d37b;outline-offset:3px}
    @media(max-width:520px){.estack-social-links a{min-height:48px}}
  `;
  document.head.append(style);
})();
