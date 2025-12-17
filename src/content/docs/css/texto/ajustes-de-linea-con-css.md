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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663A5S4A43%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T172056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6MGTy6V7xvqknSz5hsLqNuvItbUuanYs4aeaw5YrAogIhAJS42R2Fa%2BMkBwyDlQ7%2Bvlo42ygjNkQ%2BTgSHMOlW%2BFNrKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyNUXbgjpT9TsVroA0q3AOwffrmThNRbKwxFIocUtdntBdDEXiRTIsX0%2BVfs0rt2VUZuQqy5g3PX%2Fy8F0N4VfeHYw17nTy4SGgrm8HgoOPWf01pDxxOQa2CejlSfVip7jQNciOlJUuaraHWeeTJPpLKK%2F4HnAoj4M5GN5ji8IMX9O8NE5Kc7Lkhm2yibEtFtszw1sIjm5sl%2BLxfEwJuEjH9JJSGyUSohz%2F834Fe2NYygg782Xvlsm7w7XDMJvB89Wff8j%2FFtgpmwYjxUHStEBfUVpDvdkxxlneI4jCm0A4fs2ocgJqs%2FWMmPY3zY11reyPB5RknZ1HtQOSnNECbCQSp6KJDHDIxA3M1sId1k7WCcUK73opkGaxRRoNO7zZkR3qlpwP6Xj0byN%2BeX7%2FqCYEoC16lg7PFGwYHvke6UTULzZBmWq8QDQ54n%2B3iEJbXaSYaJ4G8z2UtHAktZqbzwwLylHLnCfFfbteQuomxX%2BQAFdDl8h1nCNBJAO78TZD7ww6acL8KMLQehGIKG7Wa0QocdAnOQvLqj7NjBJo%2FShrEiofGwy5NRHHBDMNZ1FMLzM%2BS1kgqSB7nILxb7WJtkklm3Z%2B7o%2FUbB98%2B2KZrD6i3GenKdJEI0nBQBAj15hE4DfTXs8ArpkgaA8PpVTCnoIvKBjqkAc8djErsfialXGFQlc%2FroRv363agGz%2Bubann2lifkYj7mEvsfN%2FuOwxtxg4P0NyZT%2Fn9DeqpvhF4tlohOlXhUqoK1riOjVEEQntmP8pTbIEIEZ2aNRw%2F9JSoj8h0PbdzBWMpbPCuWvrkRtsEIK6GFnfUycRTGc0%2Bh2moYRSwkVJt5GwPfK%2F3HPKtq9eMT31vbKjA5yusdu5uKuu310mU7xVDuYKX&X-Amz-Signature=0f419e9c1d15ea4d36f1e652095496f39de1bc65c9033e85434bd1bd910433d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663A5S4A43%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T172056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6MGTy6V7xvqknSz5hsLqNuvItbUuanYs4aeaw5YrAogIhAJS42R2Fa%2BMkBwyDlQ7%2Bvlo42ygjNkQ%2BTgSHMOlW%2BFNrKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyNUXbgjpT9TsVroA0q3AOwffrmThNRbKwxFIocUtdntBdDEXiRTIsX0%2BVfs0rt2VUZuQqy5g3PX%2Fy8F0N4VfeHYw17nTy4SGgrm8HgoOPWf01pDxxOQa2CejlSfVip7jQNciOlJUuaraHWeeTJPpLKK%2F4HnAoj4M5GN5ji8IMX9O8NE5Kc7Lkhm2yibEtFtszw1sIjm5sl%2BLxfEwJuEjH9JJSGyUSohz%2F834Fe2NYygg782Xvlsm7w7XDMJvB89Wff8j%2FFtgpmwYjxUHStEBfUVpDvdkxxlneI4jCm0A4fs2ocgJqs%2FWMmPY3zY11reyPB5RknZ1HtQOSnNECbCQSp6KJDHDIxA3M1sId1k7WCcUK73opkGaxRRoNO7zZkR3qlpwP6Xj0byN%2BeX7%2FqCYEoC16lg7PFGwYHvke6UTULzZBmWq8QDQ54n%2B3iEJbXaSYaJ4G8z2UtHAktZqbzwwLylHLnCfFfbteQuomxX%2BQAFdDl8h1nCNBJAO78TZD7ww6acL8KMLQehGIKG7Wa0QocdAnOQvLqj7NjBJo%2FShrEiofGwy5NRHHBDMNZ1FMLzM%2BS1kgqSB7nILxb7WJtkklm3Z%2B7o%2FUbB98%2B2KZrD6i3GenKdJEI0nBQBAj15hE4DfTXs8ArpkgaA8PpVTCnoIvKBjqkAc8djErsfialXGFQlc%2FroRv363agGz%2Bubann2lifkYj7mEvsfN%2FuOwxtxg4P0NyZT%2Fn9DeqpvhF4tlohOlXhUqoK1riOjVEEQntmP8pTbIEIEZ2aNRw%2F9JSoj8h0PbdzBWMpbPCuWvrkRtsEIK6GFnfUycRTGc0%2Bh2moYRSwkVJt5GwPfK%2F3HPKtq9eMT31vbKjA5yusdu5uKuu310mU7xVDuYKX&X-Amz-Signature=b56bf101dd65b5c0c0b138fcb3aef1dd4bcf648499f12d25e39b91f29f5bcdd7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

