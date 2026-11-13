(function () {
  function trackContactClick(event) {
    var target = event.target;
    var link = target && target.closest ? target.closest("a[href]") : null;
    if (!link || typeof window.gtag !== "function") return;

    var destination = new URL(link.href, window.location.href);
    var eventName = null;

    if (destination.protocol === "tel:") {
      eventName = "phone_click";
    } else if (destination.hostname.toLowerCase() === "wa.me") {
      eventName = "whatsapp_click";
    }

    if (!eventName) return;

    window.gtag("event", eventName, {
      page_path: window.location.pathname
    });
  }

  document.addEventListener("click", trackContactClick, true);
})();
