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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCFVA7NQ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T011355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCGuo001ulpZ1t49hHW5Opr2MBGsF4K0XnVbYCJU2n0aQIhAKU%2BggErX0jFl%2FcfxXZE%2FbnMP3GKm1n78j68jMGLO6RGKv8DCHIQABoMNjM3NDIzMTgzODA1IgyF3KCvRRgP6Zcm9jcq3AMgRzf7X5Ij0uWIfmzhoPUUZiqv8jHCrD7qPIeEGyb2MFr8MaMjCBuJ1uVhyIVWYggufKoLtTfFO%2Fvyohg8IQHgAOeuxu2bFDQ6LqtxFiIbBoTe%2BIAzddVSnbfkMunPekEdrcwHQKI%2B%2BSyAj5iuBgYWPw%2Fc0hDhvmq2hYu1qRYhpk1vK%2FutsnKu8B6xxEjr%2BQIvtYSVzEJbEuuO3%2BF%2BQK2QQPNY%2FNk4sPTRS1FsGS%2B%2BqD4uyFDGTXKoUZZCmkyGYf8nHtGO0oyY6lAPgkij8bDa5fqq4ljqNsYmRTQ66ue498v7ffh22c9kYJDnAv7piW4tk%2B5iISKp0VDlkj878PaKZ3xCEIjFYarfX1teNXDddFg8cIisQCBWRa3ZdBBT%2F332hd%2Fi%2BWyRcrd6tXQEAV6K8cxjEELaECTH2QvlnYTbS1tgjHwSx7Z5t8iTT3QLnlo4GVj%2BvVv6gtRijSYJtMkB0hYrncABwziqbzk3F38TpwVE%2B0mhR%2B5av08gspfTnu%2BW%2BrMSicK1zUboNi%2BVS7XOVSY%2B7lpQydkNeNE75iELn32O4P94%2FFhGxCPmbgiHYvC8DOXRjo3gYfdGNkDVRDaFnCTYROVlUf%2BQ21BJVcmIfrHGAz9t8kYBfJ7qZjDG%2BofKBjqkAUl7wK6GtOqJXXdYCki3QV8BZ2JxfucEWxmee5g1I8MN8nAhfz%2BMkPJN4KbXt%2FmFKpUIC8f0Vhcqdts0RTODQu%2FnC%2BanGgszk%2FtzamTl63lKmLCxVJ8CBss3h2%2FEk%2FGmoAl5n4wAf6AVCA0BuWnYhqAaQrRbhW%2BaL7PgZuMLbFpcol4LdpNcBokjNDbHSimqkD3Stn6c6zIwXgNQNHeDnEBg0%2B42&X-Amz-Signature=21e7f7c986a8a964ace20a5836cb871f367b39ef7b37c87fa7ba24ae7933fb43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCFVA7NQ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T011355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCGuo001ulpZ1t49hHW5Opr2MBGsF4K0XnVbYCJU2n0aQIhAKU%2BggErX0jFl%2FcfxXZE%2FbnMP3GKm1n78j68jMGLO6RGKv8DCHIQABoMNjM3NDIzMTgzODA1IgyF3KCvRRgP6Zcm9jcq3AMgRzf7X5Ij0uWIfmzhoPUUZiqv8jHCrD7qPIeEGyb2MFr8MaMjCBuJ1uVhyIVWYggufKoLtTfFO%2Fvyohg8IQHgAOeuxu2bFDQ6LqtxFiIbBoTe%2BIAzddVSnbfkMunPekEdrcwHQKI%2B%2BSyAj5iuBgYWPw%2Fc0hDhvmq2hYu1qRYhpk1vK%2FutsnKu8B6xxEjr%2BQIvtYSVzEJbEuuO3%2BF%2BQK2QQPNY%2FNk4sPTRS1FsGS%2B%2BqD4uyFDGTXKoUZZCmkyGYf8nHtGO0oyY6lAPgkij8bDa5fqq4ljqNsYmRTQ66ue498v7ffh22c9kYJDnAv7piW4tk%2B5iISKp0VDlkj878PaKZ3xCEIjFYarfX1teNXDddFg8cIisQCBWRa3ZdBBT%2F332hd%2Fi%2BWyRcrd6tXQEAV6K8cxjEELaECTH2QvlnYTbS1tgjHwSx7Z5t8iTT3QLnlo4GVj%2BvVv6gtRijSYJtMkB0hYrncABwziqbzk3F38TpwVE%2B0mhR%2B5av08gspfTnu%2BW%2BrMSicK1zUboNi%2BVS7XOVSY%2B7lpQydkNeNE75iELn32O4P94%2FFhGxCPmbgiHYvC8DOXRjo3gYfdGNkDVRDaFnCTYROVlUf%2BQ21BJVcmIfrHGAz9t8kYBfJ7qZjDG%2BofKBjqkAUl7wK6GtOqJXXdYCki3QV8BZ2JxfucEWxmee5g1I8MN8nAhfz%2BMkPJN4KbXt%2FmFKpUIC8f0Vhcqdts0RTODQu%2FnC%2BanGgszk%2FtzamTl63lKmLCxVJ8CBss3h2%2FEk%2FGmoAl5n4wAf6AVCA0BuWnYhqAaQrRbhW%2BaL7PgZuMLbFpcol4LdpNcBokjNDbHSimqkD3Stn6c6zIwXgNQNHeDnEBg0%2B42&X-Amz-Signature=518b02956132c1363fd03256af45a98ea40f55f910cce77962dab72c6767fe12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

