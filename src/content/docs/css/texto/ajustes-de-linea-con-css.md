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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MK6Z2NX%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T191131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3YTU8%2BIdUI9Tp8hrWXR5c8%2Bhpx4fwq%2BPtBGxhwO%2BZ7AIgX%2BFapEsaDWgxhkIlR0%2F6v%2FMrfP8FzjU4N%2FA28Yiqum8qiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIGGR6%2FAO2Ooajb6TSrcAyb%2BWti7FNwJpfyjI9Mrkf9y4Saq9aRWc%2FV%2FrtdP9S1GEQDPv2KHuHY%2B236lUfmEYIgbDBNtwI8ukGQ3S1U0Dbf9bRHBmVPm6m7seLfjHlx16mtnOQesSOy2d6oKeXgV1w6iUqRS1DJrXFYptlKmNjrhiuj%2FBgYyaYqZzOaFjnE97kX3qtUgN1Xi1YX1h95D82JxlJhrs9y9qd5WScV7oyYXJDOHbnDF7o5NkyQP4KwuVOgMoUQ0xvM2mDpQf6HOyRVdVBvhzNikq9RTk1YU%2F%2FsJe2MxnyECJdXbJagkyX8j4l%2B%2Bo35yNJaczhevR6KGuAVv0PRpYunptH2xkC7p0hEkEjfeLliRea8fmDfzV9BBP5DEEcC%2FyUaZQ%2FiKDFrTde4j1WAIqelfwkOWU7G2pRIDca3inSx22OEr9rkcrFN%2F4ICqF1Whj7A89d3e%2FtJWj8it3Ce5t2YkOfNC4MUp1EpzZ5Qx%2FvpGAFw9qjxcLY93ccZ6dSV1sSAL%2FuoVYjkGCtHgYQQXvUDIQ6N%2FU4sw3mjZU61NpE6ltI%2FDhrSGLGhqmo0ubB4VTcrOetwN4N8yl2q9fdztg0fpC%2BEIwGOnqTUf9BxpoysQXkXZyrYpmGI78PCOVlVjEzDR%2F5lPMKmgi8oGOqUBFeXMCDG6yZ%2BuZR4%2F9SOO2Hywq2lfHVJucCuze6I82p7L9UUeK6%2BBFtb0OR2il3tlIONnRiOR5gYtI8rwn4z7FGuM45lr3%2FK28VRP0nD3RQSxVLMy1%2B%2BZXF0zcCPhR9DAzGTnF8w4HUXb6GYeg40l1woRWFpGeiVTNl8X6ZVWP%2FWu9%2FBWwqSNsfbjFsob%2BKYYnibojPf5ImLpqSY2XIls9F84jwJ9&X-Amz-Signature=0b850b589c8ef9b11685b3614d15cf0ec9a5e759e2d8d872041b0872cfbbc56f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MK6Z2NX%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T191131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3YTU8%2BIdUI9Tp8hrWXR5c8%2Bhpx4fwq%2BPtBGxhwO%2BZ7AIgX%2BFapEsaDWgxhkIlR0%2F6v%2FMrfP8FzjU4N%2FA28Yiqum8qiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIGGR6%2FAO2Ooajb6TSrcAyb%2BWti7FNwJpfyjI9Mrkf9y4Saq9aRWc%2FV%2FrtdP9S1GEQDPv2KHuHY%2B236lUfmEYIgbDBNtwI8ukGQ3S1U0Dbf9bRHBmVPm6m7seLfjHlx16mtnOQesSOy2d6oKeXgV1w6iUqRS1DJrXFYptlKmNjrhiuj%2FBgYyaYqZzOaFjnE97kX3qtUgN1Xi1YX1h95D82JxlJhrs9y9qd5WScV7oyYXJDOHbnDF7o5NkyQP4KwuVOgMoUQ0xvM2mDpQf6HOyRVdVBvhzNikq9RTk1YU%2F%2FsJe2MxnyECJdXbJagkyX8j4l%2B%2Bo35yNJaczhevR6KGuAVv0PRpYunptH2xkC7p0hEkEjfeLliRea8fmDfzV9BBP5DEEcC%2FyUaZQ%2FiKDFrTde4j1WAIqelfwkOWU7G2pRIDca3inSx22OEr9rkcrFN%2F4ICqF1Whj7A89d3e%2FtJWj8it3Ce5t2YkOfNC4MUp1EpzZ5Qx%2FvpGAFw9qjxcLY93ccZ6dSV1sSAL%2FuoVYjkGCtHgYQQXvUDIQ6N%2FU4sw3mjZU61NpE6ltI%2FDhrSGLGhqmo0ubB4VTcrOetwN4N8yl2q9fdztg0fpC%2BEIwGOnqTUf9BxpoysQXkXZyrYpmGI78PCOVlVjEzDR%2F5lPMKmgi8oGOqUBFeXMCDG6yZ%2BuZR4%2F9SOO2Hywq2lfHVJucCuze6I82p7L9UUeK6%2BBFtb0OR2il3tlIONnRiOR5gYtI8rwn4z7FGuM45lr3%2FK28VRP0nD3RQSxVLMy1%2B%2BZXF0zcCPhR9DAzGTnF8w4HUXb6GYeg40l1woRWFpGeiVTNl8X6ZVWP%2FWu9%2FBWwqSNsfbjFsob%2BKYYnibojPf5ImLpqSY2XIls9F84jwJ9&X-Amz-Signature=40105c4ebc784760e65f51918c0f529cb917512ac5356f6e253a3e123581fb65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

