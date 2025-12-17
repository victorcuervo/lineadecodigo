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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662K7MTVT3%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T141925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDgRRBZaH94dSyb7GV7Z3V%2FXF%2Fyq90z3YJG5DlfDXHnCQIgdCUJoF8Z%2FlP75NkQkZ9tAniYObYewBC0%2B5IyQL9d%2BEMq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDMYIpS8nPT9VSC%2BeiCrcA4PL8KU8mpOMYj4lTH5n1WhojzwXMlJL8zsn8kEQRFuGtWMUmi8bSnaBcTzSE%2B2Y1YkLVlh6A4UcADdYdP8d1GKA2nRpERFMogdOUMd07UDTSJNmpbgcD6yR1RDKTR0weDRiYDvEu3aS6EMvCedHgQJw8JSnXmhHIlacGoLQxqvd4VKRswLxF05Jfi1vQpjhkL7VQPkyKaZp9KSqkulsHtbupO8CTICi9tAmW65ymewbwskt0zqi84F1%2FSZiECifcBxu1kA%2BYH%2BcgFPOdn5rpTh17ef9Z252LjewDk1JHUADb%2FWexCC7EyfKCXkoQF8HhaXaJ9Hb7c4XQWoVQwMhsp24HSMuMF9l5GhPKFHWJSVnPyKiR1yIW0W67lyrfB3pMaUTyLLHyMjc8Y5iTVzT%2BSyol7aBwbQi1j6fvxFceYBSPLCzL2Ofn8yAZhR000WaY7XmIPNKg8d3LreO33mj6S0%2Fzye%2BGywXxTZ5p%2BxgTMPfIesnBXgruorCYcxmmZuA0OCZqxX38FiC6o8hLR9fnEtSvff9PDpOo5B8fJ2bLaUnrJrlEcxRd8wNPIURYVtRpZWO0iR7LbcoHR7Dhfy2160jDRTztXMXUVJ0hz2h4bpfvMRB77f2tMoI2Af4MJfjisoGOqUBix%2Fiecl2%2BFQd%2B73Owl8ssmiOkgTL88ylOIQA%2FMDiKYjZDi%2FvL8Y9v4CFylSk8OAXTYwbG4M%2FlAF%2BljHvxFbMH3l5QPs8BGCdULNZRN80M5jXmSLysSB0Pr58R%2BNKxdXviYB4WykaDcdmaNlxZaBIQhE4VE6CnAlzX6NKwXKReoQ1R7uZ1USADLSaYKyy71ewZXi9Sz5nqe2lAHLhmDfHl4B9MsDa&X-Amz-Signature=5e0ac2d1256eb1cf39cc4ccc7b9802524b0643dc9b4aedaa8fad7aad5174d7c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662K7MTVT3%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T141925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDgRRBZaH94dSyb7GV7Z3V%2FXF%2Fyq90z3YJG5DlfDXHnCQIgdCUJoF8Z%2FlP75NkQkZ9tAniYObYewBC0%2B5IyQL9d%2BEMq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDMYIpS8nPT9VSC%2BeiCrcA4PL8KU8mpOMYj4lTH5n1WhojzwXMlJL8zsn8kEQRFuGtWMUmi8bSnaBcTzSE%2B2Y1YkLVlh6A4UcADdYdP8d1GKA2nRpERFMogdOUMd07UDTSJNmpbgcD6yR1RDKTR0weDRiYDvEu3aS6EMvCedHgQJw8JSnXmhHIlacGoLQxqvd4VKRswLxF05Jfi1vQpjhkL7VQPkyKaZp9KSqkulsHtbupO8CTICi9tAmW65ymewbwskt0zqi84F1%2FSZiECifcBxu1kA%2BYH%2BcgFPOdn5rpTh17ef9Z252LjewDk1JHUADb%2FWexCC7EyfKCXkoQF8HhaXaJ9Hb7c4XQWoVQwMhsp24HSMuMF9l5GhPKFHWJSVnPyKiR1yIW0W67lyrfB3pMaUTyLLHyMjc8Y5iTVzT%2BSyol7aBwbQi1j6fvxFceYBSPLCzL2Ofn8yAZhR000WaY7XmIPNKg8d3LreO33mj6S0%2Fzye%2BGywXxTZ5p%2BxgTMPfIesnBXgruorCYcxmmZuA0OCZqxX38FiC6o8hLR9fnEtSvff9PDpOo5B8fJ2bLaUnrJrlEcxRd8wNPIURYVtRpZWO0iR7LbcoHR7Dhfy2160jDRTztXMXUVJ0hz2h4bpfvMRB77f2tMoI2Af4MJfjisoGOqUBix%2Fiecl2%2BFQd%2B73Owl8ssmiOkgTL88ylOIQA%2FMDiKYjZDi%2FvL8Y9v4CFylSk8OAXTYwbG4M%2FlAF%2BljHvxFbMH3l5QPs8BGCdULNZRN80M5jXmSLysSB0Pr58R%2BNKxdXviYB4WykaDcdmaNlxZaBIQhE4VE6CnAlzX6NKwXKReoQ1R7uZ1USADLSaYKyy71ewZXi9Sz5nqe2lAHLhmDfHl4B9MsDa&X-Amz-Signature=5acd4568e6eaf2b43ebabeb874b7eac44572e1b67e244b2481f7a0fa3e85131d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

