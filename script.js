function toggleMode() {
  const html = document.documentElement

  //  if(html.classList.contains('light')) {
  //     html.classList.remove('light')
  //   } else {
  //     html.classList.add('light')
  //   }
  // } todas essas condicionais se tornaram apenas uma linha de código, usando a função toggle que já faz tudo automaticamente ao clicar no botão de troca no site feito abaixo.
  html.classList.toggle(`light`)

  // pegar tag img
  const image = document.querySelector("#profile img")

  // substituir as imgs
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar img light
    image.setAttribute("src", "./assets/avatar-light.png")
    image.setAttribute(
      "alt",
      "Foto de Augusto Rocha mais jovem sentado, usando uma camisa xadrez, sorrindo e fazendo um sinal com a mão."
    )
  } else {
    // se tiver night mode, deixar avatar original
    image.setAttribute("src", "./assets/avatar.png")
    image.setAttribute(
      "alt",
      "Foto de Augusto Rocha usando óculos escuro preto, boné preto para trás, bandana verde no pescoço e uma camiseta branca com mangas azul claro e uma estampa no peito."
    )
  }
}
