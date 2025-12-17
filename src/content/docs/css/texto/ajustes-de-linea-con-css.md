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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TR47EVCL%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T060531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2BjF4FNdVUry9HSfeejuwLGbSdx2PYGXHamPv%2F4p6VWAiEAn52QVnNGiq2h%2BjrxdZk4%2FowMNl%2BwulXp9njIFjd0%2B8Qq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDBy3YeKDwdaIeY%2BRuircA0ptsK90RZf3QMtvAJLyccvyhMJ5pq6vR0Aa23aPLbGKzDf8cyhqPqHdkTf4SqmAi4agiXw%2BnnLRAQq31IH%2FMppKkwcm7LoboPbj8wOcFn%2BlktQY2hRnc9Z5YYBKJ%2BSN%2BmXdrqrmSUOvyzDt13vEbztufLxhGGovWonO6jfBQl026FHCfzQocw%2BmVHuOPm83Uzh0VX7pt1G0%2F8uOZzPVRPF6Gt7zYIJIfm8E6NzTrCxDLvQbtvzMKAMEipFteMFxKhd%2FFwO6OwtH3XF7GNIviTSfwqDOhKN9TJ%2B%2FSEaczumJ7Lm1l%2FfJt2tcP585hHmPavcjlfi6KhYJJL2vp9jBJ4ndnTkrFGd%2BzwRnGeSVCjjNlGIoRDqmrbBkTnh2ef%2Fz9TkkZpK04j5aAh90T8fpwoeHbuAIS0uE%2BWuO%2FRTgWvkGatXkoVXbudPl1DW6Ww6Zqu8o%2FbX2B%2FWCAONr330tFv%2FS0uWcoXDubOOEooX2qOJtQ4tvMjZzAQj1XiC3l%2FmjFk56CQVvgcmzSDLhCRi6giGNvVzqruo8pM0AQBnDH5RMvjwrnEGhkDGsd20lJevbfYZBIijir%2BA3y5MeLJLU%2BOCWF9Fl3BIVkbnJTi9V2jFgIq%2FkaVIdiTkMYohLMOiCicoGOqUB6UVOjM4HkCfDTKSKuXk78cF2kfMyR1W2vavwLT7A9xh4zwIXuaHlSsLjA7tnQG6I89dqDvTZ8hhopmPqsw8Eza2VbKsmQR1eExrStSeVevXMe%2Fap%2BxWHfy%2BQT8%2Bf8bfTyrBEgj%2Fa%2BLVv0xivL96LKGdcsghwWW6qnfPWGtyk1pDuIlShwNYPcuPZGGsY6M9O18985kbnoRZpyco2hdtDplMQetU2&X-Amz-Signature=fd357f96ccb91984fc139d2e6be8e9e9c66c99a7e003d6ca4c57113b4bfa4960&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TR47EVCL%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T060531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2BjF4FNdVUry9HSfeejuwLGbSdx2PYGXHamPv%2F4p6VWAiEAn52QVnNGiq2h%2BjrxdZk4%2FowMNl%2BwulXp9njIFjd0%2B8Qq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDBy3YeKDwdaIeY%2BRuircA0ptsK90RZf3QMtvAJLyccvyhMJ5pq6vR0Aa23aPLbGKzDf8cyhqPqHdkTf4SqmAi4agiXw%2BnnLRAQq31IH%2FMppKkwcm7LoboPbj8wOcFn%2BlktQY2hRnc9Z5YYBKJ%2BSN%2BmXdrqrmSUOvyzDt13vEbztufLxhGGovWonO6jfBQl026FHCfzQocw%2BmVHuOPm83Uzh0VX7pt1G0%2F8uOZzPVRPF6Gt7zYIJIfm8E6NzTrCxDLvQbtvzMKAMEipFteMFxKhd%2FFwO6OwtH3XF7GNIviTSfwqDOhKN9TJ%2B%2FSEaczumJ7Lm1l%2FfJt2tcP585hHmPavcjlfi6KhYJJL2vp9jBJ4ndnTkrFGd%2BzwRnGeSVCjjNlGIoRDqmrbBkTnh2ef%2Fz9TkkZpK04j5aAh90T8fpwoeHbuAIS0uE%2BWuO%2FRTgWvkGatXkoVXbudPl1DW6Ww6Zqu8o%2FbX2B%2FWCAONr330tFv%2FS0uWcoXDubOOEooX2qOJtQ4tvMjZzAQj1XiC3l%2FmjFk56CQVvgcmzSDLhCRi6giGNvVzqruo8pM0AQBnDH5RMvjwrnEGhkDGsd20lJevbfYZBIijir%2BA3y5MeLJLU%2BOCWF9Fl3BIVkbnJTi9V2jFgIq%2FkaVIdiTkMYohLMOiCicoGOqUB6UVOjM4HkCfDTKSKuXk78cF2kfMyR1W2vavwLT7A9xh4zwIXuaHlSsLjA7tnQG6I89dqDvTZ8hhopmPqsw8Eza2VbKsmQR1eExrStSeVevXMe%2Fap%2BxWHfy%2BQT8%2Bf8bfTyrBEgj%2Fa%2BLVv0xivL96LKGdcsghwWW6qnfPWGtyk1pDuIlShwNYPcuPZGGsY6M9O18985kbnoRZpyco2hdtDplMQetU2&X-Amz-Signature=0655de60741f6bab3dac703c0b387fd7d72c6536c63994305f49bf11db96f825&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

