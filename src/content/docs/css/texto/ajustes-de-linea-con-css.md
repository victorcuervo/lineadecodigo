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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPXDI76P%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T064721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOr6sagX3MX9Y5Wg2NA4kBb21k3gCqxcLNadphonI%2BXwIhAJq%2B%2Fju1T%2B7NSn2w6ZfNch%2Bq14jAMpZ%2Bd4AD4ADyzZbBKv8DCHgQABoMNjM3NDIzMTgzODA1IgzlYoU31z7s%2FlcvBrEq3AOEvKdWmU4FR%2BWB0kik5bLhGyz%2B0mJP8kLbrAE6kna5gr%2FFQq10SJ1z%2FlmwB3cltgNJE9gbjW1fN1KepNJZpLatWJ01nF3a6%2FnN5Iw7NYriRmv10sna3QmH4PMne9DpzOgad1wxamXJUhc2RACAHuE9fyHcjv32VafkzvRAvSjkoeLUiV3PZ7t3dJYXGX%2FzvN0VSUiMW%2B%2F3iiH%2BCSn6Lk%2Bd1c0tj0XzvbKH5Ns6DcB0RFMFv0ogdNdTXFUXWth9WMucScDvIT%2Bgt37enPEYGMc7csYFgOpozaGUdd%2Fpj5o9BJ3qfEjR0E9e%2FlEbAjyrIBPBQ8EZowI5NBG4cPoDbA%2ByAQd2UhOvt0E5Wf%2Bxvu9gWXiLk1aT90CDPhH4Ob%2FsLZLkJJCvCSsOpS0HjCNGiy5oH0Mnd7OY1NnJHd7pB9V0oX1pHn0HRhjfTZHmctGMZiZs%2FFjZt9P8PSpn%2BzdBr%2BL1mKGskWUJReNUqxg1K%2FC5Bfg2MLfQuW35iph8JX2uNhTmPAOvdHeYRfjzcHzg1pPrZzQvVQp432I0yRUyrOqoLRMFG9bDnkiQ%2F%2FlFmhY268Z%2F6G3niT1b6Wg1SJCYG8nx2Be8nARMPUOGEwytzcft3woifEUu9mEnHwqvLjCwnInKBjqkAb6oRin%2FMghoeOvk99po5f3jNsEpKTn%2FsePLN13NRg5%2B9JIjEUFvzxemtlyTYvhbB2WdnGLo9m9ohCZDQVtnCC9obdehTTtI4VhRr8kUeWP3KrBehii5k%2FbK6VJ9NvAUIzwvbF6pMa%2BM0brAl383hTTktWWxDAvItP80lRqFfn2BSB8wkViMbBGr3RjyPmc8YUR67SIq9djIj3qfnVs3BHhrIcDw&X-Amz-Signature=3bd4abf1c5bf42b95e43cd029e6eefd882d4fed69677429cb806bce4ff311b96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPXDI76P%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T064721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOr6sagX3MX9Y5Wg2NA4kBb21k3gCqxcLNadphonI%2BXwIhAJq%2B%2Fju1T%2B7NSn2w6ZfNch%2Bq14jAMpZ%2Bd4AD4ADyzZbBKv8DCHgQABoMNjM3NDIzMTgzODA1IgzlYoU31z7s%2FlcvBrEq3AOEvKdWmU4FR%2BWB0kik5bLhGyz%2B0mJP8kLbrAE6kna5gr%2FFQq10SJ1z%2FlmwB3cltgNJE9gbjW1fN1KepNJZpLatWJ01nF3a6%2FnN5Iw7NYriRmv10sna3QmH4PMne9DpzOgad1wxamXJUhc2RACAHuE9fyHcjv32VafkzvRAvSjkoeLUiV3PZ7t3dJYXGX%2FzvN0VSUiMW%2B%2F3iiH%2BCSn6Lk%2Bd1c0tj0XzvbKH5Ns6DcB0RFMFv0ogdNdTXFUXWth9WMucScDvIT%2Bgt37enPEYGMc7csYFgOpozaGUdd%2Fpj5o9BJ3qfEjR0E9e%2FlEbAjyrIBPBQ8EZowI5NBG4cPoDbA%2ByAQd2UhOvt0E5Wf%2Bxvu9gWXiLk1aT90CDPhH4Ob%2FsLZLkJJCvCSsOpS0HjCNGiy5oH0Mnd7OY1NnJHd7pB9V0oX1pHn0HRhjfTZHmctGMZiZs%2FFjZt9P8PSpn%2BzdBr%2BL1mKGskWUJReNUqxg1K%2FC5Bfg2MLfQuW35iph8JX2uNhTmPAOvdHeYRfjzcHzg1pPrZzQvVQp432I0yRUyrOqoLRMFG9bDnkiQ%2F%2FlFmhY268Z%2F6G3niT1b6Wg1SJCYG8nx2Be8nARMPUOGEwytzcft3woifEUu9mEnHwqvLjCwnInKBjqkAb6oRin%2FMghoeOvk99po5f3jNsEpKTn%2FsePLN13NRg5%2B9JIjEUFvzxemtlyTYvhbB2WdnGLo9m9ohCZDQVtnCC9obdehTTtI4VhRr8kUeWP3KrBehii5k%2FbK6VJ9NvAUIzwvbF6pMa%2BM0brAl383hTTktWWxDAvItP80lRqFfn2BSB8wkViMbBGr3RjyPmc8YUR67SIq9djIj3qfnVs3BHhrIcDw&X-Amz-Signature=78b5b69c141f5d84656774d1aba112fb3344017468383ea61a1d6891d3378782&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

