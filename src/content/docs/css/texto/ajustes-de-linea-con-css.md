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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPPVICPJ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T193811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGoHc83pdOktGMz%2FlqhBF180%2FnFLi3ZfB%2B%2FWPJEUfCx%2FAiEAhYoPphjkbkYMkyEdXcBSAvNIa7U%2BRQ1RoW7OmHLrbMkqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIrI4vSGgo31E5Nq3ircA2PbQ1tm8p1C3v7gCeWbGpW64MDL6nuFZp8dzujl%2BmTrSrqDTZvWbwW%2FlFcZUTs2oCsQAf5aDr%2FuWTa5NGEzP8h8vnrX5TqPtwDPvnhIHQ%2B%2BMIKDc2FQ%2Fk00Dnq9uc4ffDRsCDhGwIphlM7MGZf5%2BnVAzJ%2BQm1P0602YHnT7tm5muCkJOA1pk%2B5nPukdQgL4yWfmZI3VrEzxTqYq5sFfYg92%2FuQW5sc3liQifWRsjHm76SpOEYFuHOqBT4JIFY%2FanNMyn7uH%2BumLXx2Ld%2FfVQnNKF7YSKSpz6L1QsWEsMpAEFRqzdEBEhcdekiptYggls%2FXjZxgejuslMLk93H7kvIN6M7ruh%2BuvR9hLwdO3jfRRNU5P5H7qFNoZjs6xTAAWpP5EvrwTCujHZaw5U9Bg3ZFMgEzHuQhRnZb9K5xlcP5H2dxTQUE%2BGJeICRh%2FjonBUhbuLeJzRRNdH%2B2IQzEWCfiKVIR1Ez%2F7XHbGz7KZZU1vsp3URuzWfHSsm8xok17NqHUUnFcHEVLd%2BkJWiL5N%2BE%2BFz8RIRBKsqMtI6QHeyzwsuUM4mdfHAJDfPvwo0OYN40WU54tfRyGz6VRUJsH5lV47ctZnXCSubVboOgy4k%2F9tAdkeJkCtKUEbApyqMMGLjMoGOqUBA3HhjS4Vh%2FQSi4p3nqPCByHRwClTuciBFnetRH%2F8Pfmt2%2FCoGFZ%2F3y4RCu6WhvNWcmkLe2jvMV3xE2uOsZhOxatGmxZN6XZYps%2FhSFL3hrbxdhL7TXfJxsr%2BN%2Fj%2F6vqRS7uDpGS1TKQ0EpHHITvfnjUbnLaigI4kMUKEyqNIg4xiqNaRTFLS4IvK%2F9Ax%2FwNUg7DsovHVvurPKlR4DzGGqDjaNygs&X-Amz-Signature=817a9b098d11b680f1b4e45677e10438bdc4d80fbc9834b0bae18b4aa30e6846&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPPVICPJ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T193811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGoHc83pdOktGMz%2FlqhBF180%2FnFLi3ZfB%2B%2FWPJEUfCx%2FAiEAhYoPphjkbkYMkyEdXcBSAvNIa7U%2BRQ1RoW7OmHLrbMkqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIrI4vSGgo31E5Nq3ircA2PbQ1tm8p1C3v7gCeWbGpW64MDL6nuFZp8dzujl%2BmTrSrqDTZvWbwW%2FlFcZUTs2oCsQAf5aDr%2FuWTa5NGEzP8h8vnrX5TqPtwDPvnhIHQ%2B%2BMIKDc2FQ%2Fk00Dnq9uc4ffDRsCDhGwIphlM7MGZf5%2BnVAzJ%2BQm1P0602YHnT7tm5muCkJOA1pk%2B5nPukdQgL4yWfmZI3VrEzxTqYq5sFfYg92%2FuQW5sc3liQifWRsjHm76SpOEYFuHOqBT4JIFY%2FanNMyn7uH%2BumLXx2Ld%2FfVQnNKF7YSKSpz6L1QsWEsMpAEFRqzdEBEhcdekiptYggls%2FXjZxgejuslMLk93H7kvIN6M7ruh%2BuvR9hLwdO3jfRRNU5P5H7qFNoZjs6xTAAWpP5EvrwTCujHZaw5U9Bg3ZFMgEzHuQhRnZb9K5xlcP5H2dxTQUE%2BGJeICRh%2FjonBUhbuLeJzRRNdH%2B2IQzEWCfiKVIR1Ez%2F7XHbGz7KZZU1vsp3URuzWfHSsm8xok17NqHUUnFcHEVLd%2BkJWiL5N%2BE%2BFz8RIRBKsqMtI6QHeyzwsuUM4mdfHAJDfPvwo0OYN40WU54tfRyGz6VRUJsH5lV47ctZnXCSubVboOgy4k%2F9tAdkeJkCtKUEbApyqMMGLjMoGOqUBA3HhjS4Vh%2FQSi4p3nqPCByHRwClTuciBFnetRH%2F8Pfmt2%2FCoGFZ%2F3y4RCu6WhvNWcmkLe2jvMV3xE2uOsZhOxatGmxZN6XZYps%2FhSFL3hrbxdhL7TXfJxsr%2BN%2Fj%2F6vqRS7uDpGS1TKQ0EpHHITvfnjUbnLaigI4kMUKEyqNIg4xiqNaRTFLS4IvK%2F9Ax%2FwNUg7DsovHVvurPKlR4DzGGqDjaNygs&X-Amz-Signature=ac80cf02040273ffc157a2e5cc43602ea5845c7ca3690a0bb9ba6e55c91ff771&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

