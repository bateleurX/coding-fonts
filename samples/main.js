(function () {
  function injectStylesheet(url) {
    const head = document.getElementsByTagName("head")[0];
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.type = "text/css";
    link.href = url;
    link.media = "all";
    head.appendChild(link);
  }

  // Get info from URL on how to set up page.
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);

  // Set the stylesheet
  let stylesheet;
  if (urlParams.get("theme") === "dark") {
    stylesheet = "/lib/prism-dark.css";
  } else {
    stylesheet = "/lib/prism-light.css";
  }
  injectStylesheet(stylesheet);

  // Set the font
  const font = urlParams.get("font");
  const code = document.querySelector("pre > code");

  if (font === "Fira Code") {
    injectStylesheet("/fonts/Fira_Code_v5.2/fira_code.css");
    code.style.fontFamily = "Fira Code";
  } else if (font === "Operator Mono") {
    // Not free/open source, so assumes is locally active
    code.style.fontFamily = "Operator Mono";
  }
})();