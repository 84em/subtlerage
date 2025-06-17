document.addEventListener('DOMContentLoaded', function () {
    const iframe = document.querySelector('iframe');
    const iframeSrc = iframe.getAttribute('src');
    iframe.removeAttribute('src');

    const loadIframe = function () {
        iframe.setAttribute('src', iframeSrc);
        document.removeEventListener('mousemove', loadIframe);
        document.removeEventListener('keydown', loadIframe);
        document.removeEventListener('touchstart', loadIframe);
    };

    document.addEventListener('mousemove', loadIframe);
    document.addEventListener('keydown', loadIframe);
    document.addEventListener('touchstart', loadIframe);
});
