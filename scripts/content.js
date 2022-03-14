window.addEventListener("load", () => {
  const allPageLinks = document.querySelectorAll("a")

  const externalLinks = Array.from(allPageLinks).filter(
    link => link.origin !== window.location.origin
  )

  externalLinks.forEach(link => {
    if (link.target !== "_blank") {
      link.classList.add("target-links")
    }

    link.classList.add("external-links")
  })
})
