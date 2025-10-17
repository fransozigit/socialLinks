function togglemod() {
  const html = document.documentElement
  html.classList.toggle("light")
  //  if (html.classList.contains("light")) {
  //  html.classList.remove("light")
  // } else {
  //  html.classList.add("light")
  // }
  const img = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./Assets/MatheusDark.png")
  } else {
    img.setAttribute("src", "./Assets/AvatarMatheus.png")
  }
  if (html.classList.contains("light")) {
    img.setAttribute(
      "alt",
      "Foto de Matheus Fransozi com uma camiseta branca da empresa Tex. Com barba e bigode, sorrindo e com um escritório desfocado ao fundo"
    )
  } else {
    img.setAttribute(
      "alt",
      "Foto de Matheus Fransozi com uma camiseta branca da empresa Tex. Com barba e bigode, sorrindo e com um escritório desfocado ao fundo, usando oculos escuros"
    )
  }
}
