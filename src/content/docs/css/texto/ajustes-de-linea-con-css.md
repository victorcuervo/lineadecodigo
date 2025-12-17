---
title: Ajustes de línea con CSS
description: "Uso de las propiedades overflow-wrap y word-wrap para poder realizar ajustes de línea con CSS y evitar texto desbordado."
lastUpdated: 2025-12-17
slug: css/ajustes-de-linea-con-css
author: victor_cuervo
---

Cuando estamos trabajando con bloques e insertando texto dentro de ellos, tenemos que estar al tanto de qué sucede con nuestro texto. Saber si nuestro texto se desborda en el bloque, o el contenedor se ajusta al tamaño del texto. Es por ello que vamos a ver cómo podemos controlar los ajustes de línea con [CSS](https://www.manualweb.net/css/).


Pero vayamos por partes. Lo primero es crear un bloque o una capa mediante el típico elemento [`div`](https://www.w3api.com/HTML/div/) de [HTML](https://www.manualweb.net/html/). Dentro del elemento [`div`](https://www.w3api.com/HTML/div/) vamos a colocar el texto que queremos que se visualice.


```html
<div class="columna">
  Puede que la tarea que me he impuesto de escribir una historia completa
  del pueblo romano desde el comienzo mismo de su existencia me recompense
  por el trabajo invertido en ella, no lo sé con certeza, ni creo que pueda
  aventurarlo.
</div>
```


Lo siguiente será darle un tamaño a este bloque. Para ello jugamos con los estilos de CSS y en concreto con la propiedad [`with`](https://www.w3api.com/CSS/width/) la cual utilizaremos para dar un tamaño pequeño a la columna que nos ayude con la visualización del ejemplo.


```css
.columna {
  width: 50px;
  background-color: lightcoral;            
  margin: auto;
}
```


Hemos aprovechado que habíamos definido la clase “columna” mediante el atributo [`class`](https://www.w3api.com/HTML/class/) para poder aplicar el estilo sobre el bloque. De igual manera hemos incorporado otras propiedades dentro de la clase, no necesarias para el ejemplo, pero que nos ayudan para la estética del mismo, como son [`background-color`](https://www.w3api.com/CSS/background-color/) que nos ayuda a poner un color al fondo del bloque y [`margin`](https://www.w3api.com/CSS/margin/) que nos permite ajustar los márgenes alrededor del bloque, en este caso centrándolo.


Si  lo cargamos en el navegador veremos que las líneas, al haber definido un bloque muy pequeño, desbordan el contenido de las palabras fuera del contenedor. Dejando un efecto no deseado.


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EEBPARM%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T064944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDL9fA%2BEfign0dATVBNy6G2qsBoXpjiSBZC2A48RbpPugIgJuRrlrE7BBO7tVfYU9KAT4ZPUbYMpB47iL3anEJNbp8q%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDBiRZVFSa5dbhhm%2FWCrcAz%2FCZ0edHU3DpoWYDoYsGETGlOP2cLQIuTJw%2BK87x51yJDIC%2F9fae3LMaYbO%2FbSKi%2FApurIMUo2zj7xSI5fsMfXT0LPC7JgmUs8GkY0P%2BKovO%2FLrle9t6jrCg8b9znzaufmwE6emolCSoZ43oLjUmI%2FuRuu1nmxECdirJShZYVslP690QbYfB1u0nlZOmqDj%2BtGBIMMSfgnjGnMFhnVFGpJx%2FMunyuntyO%2FXTvn%2Bl22%2BQ1N63gl0G0blHDbjJtlLYarsAkr%2FGZ%2BrhoM%2B1s%2FyqA8GmxMbIYPRzEWCMQCOgUQA%2BeLAzCVq2zgD9l8aIvtcXMjL3Avn%2FP%2FvKKOYvnJcjdkjNYpZxMLmRgwhZNQIfVfAUetLFPkTaDrN1bQnRSm%2Fd4R3w%2FnyJtrCzqUnTSJxNK3LVLoxN6JuHK3JrdngG%2F%2FMSIbnorKGRT3Nc4EtGEyY%2FnwI%2Bzvg8dKX4ZbduumrdhLHq4hKXHPyNNbuo5naUokYrjRa5l0f%2B7X9nuS3BojicvPpoUiNiAaK6AuDQGDZh%2B7YEefQs%2FF%2Buwd5QjL%2FK6GfiIqryJiGUeQySSrTt%2Br9XUA6sB7O7UsvZZnicgqo%2Bv0QJTMRduOgHtu%2FOP%2BG8nuwvD0SB3gYAMYGe%2F9EMMedicoGOqUBaX96xZb1yuoomSadSWTzKoJLTyGIHgNNtTsc2NuG2fXVny78coZ9uFzmw9W8%2Fj9FKeYl3XuxhKx1%2F4dQ0oWY5Cf2U4CWz3Vwly24Tc5ShPsX6ypeUuFDyfhjMDs9quBR3G4Au1n%2FeEzyjLMhgpV%2BC%2FBopiZp7SmeOzA%2BXmY0jYwgTMXeOLgUTRkcvgn%2FoNAj7RPIfFnKJpMoKEUrcqfCP7yZh5kb&X-Amz-Signature=2822e72468b31b86eb52a9433fbd5460e1ba6fb89504db6b5b2b737a96b728dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Para poder solucionar esto tenemos que recurrir a la propiedad [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/), cuyo valor por defecto es **“normal”** y lo que está generando el anterior efecto. Y lo que tenemos que hacer es asignarle un valor de “break-word” que lo que hará será el dividir las palabras (cortarlas) cuando lleguen al borde de nuestro bloque.


Puede ser que el efecto sea raro en las palabras, pero gráficamente no veremos que se desbordan las líneas por fuera del contenedor.


Para ello definimos una nueva clase que la hemos llamado “texto-ajustado” de la siguiente forma:


```css
.texto-ajustado {
  overflow-wrap: break-word;
}

.texto-sinajustar {
  overflow-wrap: normal;
}
```


Ahora aplicamos estas clases sobre el bloque de texto, asignado la nueva clase en el atributo [`class`](https://www.w3api.com/HTML/class/) :


```html
<div class="columna texto-sin-ajustar">
  Puede que la tarea que me he impuesto de escribir una historia completa del
  pueblo romano desde el comienzo mismo de su existencia me recompense por el
  trabajo invertido en ella, no lo sé con certeza, ni creo que pueda
  aventurarlo.
</div>

<div class="columna texto-ajustado">
  Puede que la tarea que me he impuesto de escribir una historia completa del
  pueblo romano desde el comienzo mismo de su existencia me recompense por el
  trabajo invertido en ella, no lo sé con certeza, ni creo que pueda
  aventurarlo.
</div>
```


El efecto que veremos en el navegador será el siguiente:


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EEBPARM%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T064944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDL9fA%2BEfign0dATVBNy6G2qsBoXpjiSBZC2A48RbpPugIgJuRrlrE7BBO7tVfYU9KAT4ZPUbYMpB47iL3anEJNbp8q%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDBiRZVFSa5dbhhm%2FWCrcAz%2FCZ0edHU3DpoWYDoYsGETGlOP2cLQIuTJw%2BK87x51yJDIC%2F9fae3LMaYbO%2FbSKi%2FApurIMUo2zj7xSI5fsMfXT0LPC7JgmUs8GkY0P%2BKovO%2FLrle9t6jrCg8b9znzaufmwE6emolCSoZ43oLjUmI%2FuRuu1nmxECdirJShZYVslP690QbYfB1u0nlZOmqDj%2BtGBIMMSfgnjGnMFhnVFGpJx%2FMunyuntyO%2FXTvn%2Bl22%2BQ1N63gl0G0blHDbjJtlLYarsAkr%2FGZ%2BrhoM%2B1s%2FyqA8GmxMbIYPRzEWCMQCOgUQA%2BeLAzCVq2zgD9l8aIvtcXMjL3Avn%2FP%2FvKKOYvnJcjdkjNYpZxMLmRgwhZNQIfVfAUetLFPkTaDrN1bQnRSm%2Fd4R3w%2FnyJtrCzqUnTSJxNK3LVLoxN6JuHK3JrdngG%2F%2FMSIbnorKGRT3Nc4EtGEyY%2FnwI%2Bzvg8dKX4ZbduumrdhLHq4hKXHPyNNbuo5naUokYrjRa5l0f%2B7X9nuS3BojicvPpoUiNiAaK6AuDQGDZh%2B7YEefQs%2FF%2Buwd5QjL%2FK6GfiIqryJiGUeQySSrTt%2Br9XUA6sB7O7UsvZZnicgqo%2Bv0QJTMRduOgHtu%2FOP%2BG8nuwvD0SB3gYAMYGe%2F9EMMedicoGOqUBaX96xZb1yuoomSadSWTzKoJLTyGIHgNNtTsc2NuG2fXVny78coZ9uFzmw9W8%2Fj9FKeYl3XuxhKx1%2F4dQ0oWY5Cf2U4CWz3Vwly24Tc5ShPsX6ypeUuFDyfhjMDs9quBR3G4Au1n%2FeEzyjLMhgpV%2BC%2FBopiZp7SmeOzA%2BXmY0jYwgTMXeOLgUTRkcvgn%2FoNAj7RPIfFnKJpMoKEUrcqfCP7yZh5kb&X-Amz-Signature=3b7125f3476fd7b29538cfc44273be0500f2b1a34d9674227ffc283764c136b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

