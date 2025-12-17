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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633LA7IUY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T124519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDB5tvmdnCj7kswNcAr7kb7pEFuXX0S0iHhZ13gmaQ2qAiEA4EGKQFoVZA7xs4pgkisUAoR6aKQj0B8MQM6kJDLP4k8q%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDL6YdAUExO1k8x9G7yrcA62QhRvI1MXLUw%2BL0BFdtXghxEpY92GbggSkFYrK2imiFTBeSL49pRD%2FxA0pw3L5%2FiuswrcQyWuMdjiAObMLb5w1UAiqcoKEOXQgBMhnG9Zs7MO8%2BZR1zLGxtywzEgk%2F9AxpzBE5SRCfzFK9aVbbKIpca5Dzbq97J3hClcXFVal8Du%2B6%2FSXfUwINKY%2F97vbWKOhJcYpGqSqnMn83%2FvKUOP3rdtvvQxa4PNSocB%2BSj4RofX5nDXy0d87WgDguDaF1L%2FCACVWy7ksYgSwMFJcF5K31abotTif7VN2Ks5hMAPPkEhX%2BK5P5BsaQxf6Vk44MsGLJtlid2DM7mvoecG8gUU1wKwOehW7B75kpeT7Yfe6vXDqvhB79TUIDg2eNkwFMFlvKkH6E%2F43c0OYjyDjpwdnmhBXhGcjbuK2KBGiOo7SKl6ZNhqWG%2BnsZchz6tgHJweHW9ZLVJ8HZHzwUU1%2B7e1hCb%2BRwTbpFdL7hZSom1XlDuIfmyvKsYxvYe3XxPfTg6Rum3K%2FOg11ZqhwOvMw%2FIM1nhDICbp%2BByLdHuq0gMxIy%2B8pNIv%2FKOfRxAyIIwa8%2FQOXZTutxolarclb1U8JCC11HrmyVVtQnzuyuzwbXHsc%2B4XXs9gjuNkh11XQKMLzGisoGOqUBhzRQDzFdf7DAbdDPxrtdzgzgruC1q1XDavNS5%2FVbk7tg98tUoT0i0AjyScL54X%2Fv8YIOiFSn9%2FTAIzJIkD6DOx09v2EncYp6izadtGw0Y%2F1h5bWhf7ZLd8EGZantkyVLPnGq944%2BJzT1UiX1JJO9E6ebbgOb4R9UXFE2D86BVwT%2Flv6fuycOMbp3o8QlDS5ZjBrR%2FcgGEjrxvgPp21stzsBF%2F4mi&X-Amz-Signature=cdef3079fa7cbe984b1338bf9d2655dcf4bfa34f4b3be9a86f9d3ab25b8b8de8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633LA7IUY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T124519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDB5tvmdnCj7kswNcAr7kb7pEFuXX0S0iHhZ13gmaQ2qAiEA4EGKQFoVZA7xs4pgkisUAoR6aKQj0B8MQM6kJDLP4k8q%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDL6YdAUExO1k8x9G7yrcA62QhRvI1MXLUw%2BL0BFdtXghxEpY92GbggSkFYrK2imiFTBeSL49pRD%2FxA0pw3L5%2FiuswrcQyWuMdjiAObMLb5w1UAiqcoKEOXQgBMhnG9Zs7MO8%2BZR1zLGxtywzEgk%2F9AxpzBE5SRCfzFK9aVbbKIpca5Dzbq97J3hClcXFVal8Du%2B6%2FSXfUwINKY%2F97vbWKOhJcYpGqSqnMn83%2FvKUOP3rdtvvQxa4PNSocB%2BSj4RofX5nDXy0d87WgDguDaF1L%2FCACVWy7ksYgSwMFJcF5K31abotTif7VN2Ks5hMAPPkEhX%2BK5P5BsaQxf6Vk44MsGLJtlid2DM7mvoecG8gUU1wKwOehW7B75kpeT7Yfe6vXDqvhB79TUIDg2eNkwFMFlvKkH6E%2F43c0OYjyDjpwdnmhBXhGcjbuK2KBGiOo7SKl6ZNhqWG%2BnsZchz6tgHJweHW9ZLVJ8HZHzwUU1%2B7e1hCb%2BRwTbpFdL7hZSom1XlDuIfmyvKsYxvYe3XxPfTg6Rum3K%2FOg11ZqhwOvMw%2FIM1nhDICbp%2BByLdHuq0gMxIy%2B8pNIv%2FKOfRxAyIIwa8%2FQOXZTutxolarclb1U8JCC11HrmyVVtQnzuyuzwbXHsc%2B4XXs9gjuNkh11XQKMLzGisoGOqUBhzRQDzFdf7DAbdDPxrtdzgzgruC1q1XDavNS5%2FVbk7tg98tUoT0i0AjyScL54X%2Fv8YIOiFSn9%2FTAIzJIkD6DOx09v2EncYp6izadtGw0Y%2F1h5bWhf7ZLd8EGZantkyVLPnGq944%2BJzT1UiX1JJO9E6ebbgOb4R9UXFE2D86BVwT%2Flv6fuycOMbp3o8QlDS5ZjBrR%2FcgGEjrxvgPp21stzsBF%2F4mi&X-Amz-Signature=2aada1b2fac886bd95d700ad971abcb3c5d43b7e90b21af0750bbe1640a4e6d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

