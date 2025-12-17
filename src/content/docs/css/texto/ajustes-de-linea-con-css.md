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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGF6PNCA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T192728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDISnD2ZsrH5bey9itjUHRNFmchPWhO8oOb34OJP0cAXwIhAL%2BXKAD8iVkLwFID24dwD5B2rkXKEv5K8wVRLp4zVnbGKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igybs0rwuTQUzAf4OEYq3AMUVepAdyPqX%2FTzw62co6Tui1ryU1Xvpx9mh5yVeAaN3y7TZxS1PB%2FqLRqPVGP2OzPz8U9FwkHTAM4D6lVdNuEzjsRCHTWbHtZi0CwyuvaStw4v7g7Jf3OBRMkFwlHTAThqsq4lRUX4Cwx7lkXOgH1HPz4YtzfJDuImPhLOzJjT1rGE%2BEsZMTBjhfKTn9%2Bo%2Fbaa3Ce%2BK1ejReTaf9Vzht0AjCxM2GbOh8qe4TowP9EDvx%2FrB3GUJvuXnJ%2ByoXF5jVSi1eaYDLxxcHGnYXtulcMQ37kRh8pc%2FRIWc4cySSF4YUVHJ5oL9jx0Kx4zU%2BTFKtjidUVOR3f%2Bnp08bXj6EoP5heUOCmhnpC%2FzYWdLfyhyg7cWxGDt0tCl0qFdqesLUlBGAHXqgfPBj8lSudLuEuw0OKGHkGvdSfQSmxf%2FwtPHFuwcMfLfNiFJpaP6sBF2o2URiLVQFe1pytx%2BaQYOvtI9hJ4MKTZz7TSpvPN4wBhH5e1A2JITGUPei0kpyhYxPNPvu8hdXaOJd%2BKCUoaQHzS2H%2F%2BIaenvAurTiC%2Bd4dfARSZWZB1ovLCBIIwwi7eE7U50TeC6lJlTVrFfOYxV1d1H0iaDSt4CysEyXkhz%2FA1WLt5cj62PBZqBuKNr9jCBoIvKBjqkAYjl3E3GQTUI%2FuD018FQLw91mc6%2Bq5p%2FEn0vQVuY5X5ql1VMNx7ogoQuNywX1qlvSdprNyMGNgOSZdg%2FDhu6tNfj9Xr3%2Bkf%2B4%2BHR2fZyo2b0UFh71kg6No%2B4e7N%2FJ9diu7o3pnVzFteQTMPknb6CBsdv2pPpX%2FprIysGXskvDKX3V9ga3lVdmz0WM8JuYZKssH6JQriHDtg4diS5aZalGY5UFFPq&X-Amz-Signature=eb2e6a2e6c9dea64d06ac98e57af1933fef69f433c74492d23608a161bc81b16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGF6PNCA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T192728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDISnD2ZsrH5bey9itjUHRNFmchPWhO8oOb34OJP0cAXwIhAL%2BXKAD8iVkLwFID24dwD5B2rkXKEv5K8wVRLp4zVnbGKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igybs0rwuTQUzAf4OEYq3AMUVepAdyPqX%2FTzw62co6Tui1ryU1Xvpx9mh5yVeAaN3y7TZxS1PB%2FqLRqPVGP2OzPz8U9FwkHTAM4D6lVdNuEzjsRCHTWbHtZi0CwyuvaStw4v7g7Jf3OBRMkFwlHTAThqsq4lRUX4Cwx7lkXOgH1HPz4YtzfJDuImPhLOzJjT1rGE%2BEsZMTBjhfKTn9%2Bo%2Fbaa3Ce%2BK1ejReTaf9Vzht0AjCxM2GbOh8qe4TowP9EDvx%2FrB3GUJvuXnJ%2ByoXF5jVSi1eaYDLxxcHGnYXtulcMQ37kRh8pc%2FRIWc4cySSF4YUVHJ5oL9jx0Kx4zU%2BTFKtjidUVOR3f%2Bnp08bXj6EoP5heUOCmhnpC%2FzYWdLfyhyg7cWxGDt0tCl0qFdqesLUlBGAHXqgfPBj8lSudLuEuw0OKGHkGvdSfQSmxf%2FwtPHFuwcMfLfNiFJpaP6sBF2o2URiLVQFe1pytx%2BaQYOvtI9hJ4MKTZz7TSpvPN4wBhH5e1A2JITGUPei0kpyhYxPNPvu8hdXaOJd%2BKCUoaQHzS2H%2F%2BIaenvAurTiC%2Bd4dfARSZWZB1ovLCBIIwwi7eE7U50TeC6lJlTVrFfOYxV1d1H0iaDSt4CysEyXkhz%2FA1WLt5cj62PBZqBuKNr9jCBoIvKBjqkAYjl3E3GQTUI%2FuD018FQLw91mc6%2Bq5p%2FEn0vQVuY5X5ql1VMNx7ogoQuNywX1qlvSdprNyMGNgOSZdg%2FDhu6tNfj9Xr3%2Bkf%2B4%2BHR2fZyo2b0UFh71kg6No%2B4e7N%2FJ9diu7o3pnVzFteQTMPknb6CBsdv2pPpX%2FprIysGXskvDKX3V9ga3lVdmz0WM8JuYZKssH6JQriHDtg4diS5aZalGY5UFFPq&X-Amz-Signature=b9f6103e0b5d4526188ad256658ce2b9fd1c8c36caca4c4dc773856cb874c57c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

