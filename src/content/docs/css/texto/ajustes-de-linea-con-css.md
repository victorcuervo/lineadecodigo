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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XD5ZKWF6%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T091205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkxD2ss6ksEm0rQCtje51Ub40800W61W3MlFKT%2FsFQUwIhAK25D0bp5uEzfeG%2BlbsOf3e%2BDd31YLytGmQwRYl5TQaPKv8DCHoQABoMNjM3NDIzMTgzODA1IgxbhHg4EAHknceekUgq3ANhBk97tP8CG7CIeL1Hpvm5UmUQvOiIwkVjpQNTvvEKkehuLtk40gbrQU7vOI5WCLaYCcyr4fYUE6ibJhIedECG9yTKp49Uek%2FrocbFYCqAaOzQjUEjTTQ0o06rxHIqm1KtF%2FZSFAL3jQKkNi%2F6WGU0jQgKnAqAprnPdwzuGN0OfpKJ1W%2FwyH%2BpHf9F%2FxWrfFBqbFFkAjeXRRwvQNXsPwHFG1W5bJZnPzW9DAbDgM86tf4QQBvcxzJOkuD1Ai5ZPo2CTI2DoBo3POBWtUQSaRfeM1DhopDjmP3EwXbAr%2FPtPrvEubfLNuXCUy4bEVt5kGv1fsSuF76Mh6sT4M8ct3gXxXVYyVptARtWBYHcwDx8zWozmUyYWWfOBaNDYp4EWrjm%2BtFVPP0Mtb36hXk9x%2BeIcfQUHviXEQiylRGiW2Q98ncX%2FaqXpHwqjsfGSSQOXF9ewoqolrb9WZmDcVCOGqkfXNXmZjOk9LFu75omqpUVbDFrgdtgjv%2BXuzAmIoI3Kgpn%2FOH%2B2omp%2FfFt%2B2HqG4OlxeCwnlXjOIoSCk%2FaVNZujcH566Xc1DIg9H3tTd8YEcNVX8Iw0DWVSfm9fx57%2BclzuIggrt%2BgWrgQrNRmK48YTleaJFphAg9jRQqgcDD%2F0InKBjqkAZvNXn6S2Vm4yyr%2Bl%2FZQC8hRe0bg0NyfdmHrBLnsvGv6I9hPyYCPLLK6sDidinuSeKdLapE671NC76lqysriS1AmbxZryvNfUoTluZrpj0G%2FFXU7bJedAi3kyPQ%2Fd8GXoxsec60DhqRwNtCYh0e2vE9AImLulwthXEELL91hEOOTkMylEhmLTKp7PNxhz4jgg1fP51alxVNWmXHIIhVMMIY7RBP8&X-Amz-Signature=29af35dc2c76491d56293fd2494483b1c3cc4ab782abb9605dc93984c4ca010a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XD5ZKWF6%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T091205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkxD2ss6ksEm0rQCtje51Ub40800W61W3MlFKT%2FsFQUwIhAK25D0bp5uEzfeG%2BlbsOf3e%2BDd31YLytGmQwRYl5TQaPKv8DCHoQABoMNjM3NDIzMTgzODA1IgxbhHg4EAHknceekUgq3ANhBk97tP8CG7CIeL1Hpvm5UmUQvOiIwkVjpQNTvvEKkehuLtk40gbrQU7vOI5WCLaYCcyr4fYUE6ibJhIedECG9yTKp49Uek%2FrocbFYCqAaOzQjUEjTTQ0o06rxHIqm1KtF%2FZSFAL3jQKkNi%2F6WGU0jQgKnAqAprnPdwzuGN0OfpKJ1W%2FwyH%2BpHf9F%2FxWrfFBqbFFkAjeXRRwvQNXsPwHFG1W5bJZnPzW9DAbDgM86tf4QQBvcxzJOkuD1Ai5ZPo2CTI2DoBo3POBWtUQSaRfeM1DhopDjmP3EwXbAr%2FPtPrvEubfLNuXCUy4bEVt5kGv1fsSuF76Mh6sT4M8ct3gXxXVYyVptARtWBYHcwDx8zWozmUyYWWfOBaNDYp4EWrjm%2BtFVPP0Mtb36hXk9x%2BeIcfQUHviXEQiylRGiW2Q98ncX%2FaqXpHwqjsfGSSQOXF9ewoqolrb9WZmDcVCOGqkfXNXmZjOk9LFu75omqpUVbDFrgdtgjv%2BXuzAmIoI3Kgpn%2FOH%2B2omp%2FfFt%2B2HqG4OlxeCwnlXjOIoSCk%2FaVNZujcH566Xc1DIg9H3tTd8YEcNVX8Iw0DWVSfm9fx57%2BclzuIggrt%2BgWrgQrNRmK48YTleaJFphAg9jRQqgcDD%2F0InKBjqkAZvNXn6S2Vm4yyr%2Bl%2FZQC8hRe0bg0NyfdmHrBLnsvGv6I9hPyYCPLLK6sDidinuSeKdLapE671NC76lqysriS1AmbxZryvNfUoTluZrpj0G%2FFXU7bJedAi3kyPQ%2Fd8GXoxsec60DhqRwNtCYh0e2vE9AImLulwthXEELL91hEOOTkMylEhmLTKp7PNxhz4jgg1fP51alxVNWmXHIIhVMMIY7RBP8&X-Amz-Signature=21214b126092999117799310dab4c16c207819a45b064244186b0482acee17cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

