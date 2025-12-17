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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V37AS4DC%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T213914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEEDwiC2Uf%2BBc1Os9yNw2E8fJL1QNamwZ6DHUp8HI%2F9AAiAWtcGTHLhtIEnHREZmqHqZ3V5s9TQh2feBUxV8HNhZ8iqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKGt8paJIgCpTDVNsKtwDv7yhb9045mzAJ7N9YKOPn2jI9JES3zKzFAMVFwpeVS69gb02uzjGoICnbj1tRBSAKciKUoSVdSVbR5z6Q%2FtsVmGVbpYSSA01pUtDz%2BSD6hnW%2F7pzhMYX2PAtcY4IlPbYZbYIxMbPb3Q3kdQR7bMsjubQLubEiX2Srv38dEdjDQKTtT7lP7YHyeNmdq2nMg%2BvT%2BYf9rMi1Y8MQLDryNXfUGAEiirn9bpajgttY6LYBrCZBJV8xum8rkrJ01pk0Pyqq56TH10oZi2LPB0Ak3V%2BAGjA9%2FDCkvQz74GXhf%2F7ozdoyHBj0LeixnGwTOeouT3HOQ%2BlWKaCMa3Vw7eNZbMT00Busm54BUOzv6crpFTr8vsYvILetnWEAYse%2FqElSF189m5bKXFqoUHufgRmIxMq9XKy%2FjbmVl0QhbyH2OxcYKhT%2Ffc7nw3%2Bq5XyO6S0y2N%2F7RbUjtcxWUtBuCki0Y%2FH4k%2FESGyPzi2CcCLr2LMg5Mk4rskaQw8OqinUL519rgb%2BDCK4WUi57G5FOBMO2suA6z6dybwlY1ND4BKsAR%2BkjRL88kBhNiNUKvKSvMK9a5UzMZbdSBGQBQ%2FAcW4L8p9sryhzFm6oUdafIc5Ioh6ZSrjEH9aHZDKzy%2ByDn3gw262MygY6pgHe36oiFz0rV%2FebxJR2QRu9kT%2BGLo1VqudueInyv5vQ64t%2FluZgf4qZCo3N3dM5jsqvQY2jJd%2FpC4WoBcENn9%2FK4W5HJtiGzKpjFcOCWNgxKJ4LZEcLAcSak1pKV7Grl%2Ff2AMuvpdLVn4agY1stj%2Bqty9R60NEzyH8HlkpdPp1aGpp0ILaiHecclQlKJsN%2FLtE52vWm4tlKTDCDx%2FI24K%2Bwd3gSJSAL&X-Amz-Signature=7a4b4a0f25dfa716d4791948b6b9eeddfdb673975e337fca69db247b5c4fe73e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V37AS4DC%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T213914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEEDwiC2Uf%2BBc1Os9yNw2E8fJL1QNamwZ6DHUp8HI%2F9AAiAWtcGTHLhtIEnHREZmqHqZ3V5s9TQh2feBUxV8HNhZ8iqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKGt8paJIgCpTDVNsKtwDv7yhb9045mzAJ7N9YKOPn2jI9JES3zKzFAMVFwpeVS69gb02uzjGoICnbj1tRBSAKciKUoSVdSVbR5z6Q%2FtsVmGVbpYSSA01pUtDz%2BSD6hnW%2F7pzhMYX2PAtcY4IlPbYZbYIxMbPb3Q3kdQR7bMsjubQLubEiX2Srv38dEdjDQKTtT7lP7YHyeNmdq2nMg%2BvT%2BYf9rMi1Y8MQLDryNXfUGAEiirn9bpajgttY6LYBrCZBJV8xum8rkrJ01pk0Pyqq56TH10oZi2LPB0Ak3V%2BAGjA9%2FDCkvQz74GXhf%2F7ozdoyHBj0LeixnGwTOeouT3HOQ%2BlWKaCMa3Vw7eNZbMT00Busm54BUOzv6crpFTr8vsYvILetnWEAYse%2FqElSF189m5bKXFqoUHufgRmIxMq9XKy%2FjbmVl0QhbyH2OxcYKhT%2Ffc7nw3%2Bq5XyO6S0y2N%2F7RbUjtcxWUtBuCki0Y%2FH4k%2FESGyPzi2CcCLr2LMg5Mk4rskaQw8OqinUL519rgb%2BDCK4WUi57G5FOBMO2suA6z6dybwlY1ND4BKsAR%2BkjRL88kBhNiNUKvKSvMK9a5UzMZbdSBGQBQ%2FAcW4L8p9sryhzFm6oUdafIc5Ioh6ZSrjEH9aHZDKzy%2ByDn3gw262MygY6pgHe36oiFz0rV%2FebxJR2QRu9kT%2BGLo1VqudueInyv5vQ64t%2FluZgf4qZCo3N3dM5jsqvQY2jJd%2FpC4WoBcENn9%2FK4W5HJtiGzKpjFcOCWNgxKJ4LZEcLAcSak1pKV7Grl%2Ff2AMuvpdLVn4agY1stj%2Bqty9R60NEzyH8HlkpdPp1aGpp0ILaiHecclQlKJsN%2FLtE52vWm4tlKTDCDx%2FI24K%2Bwd3gSJSAL&X-Amz-Signature=3e82089368ee3606b01cf39b630d919a7115cde969d662e297bc61098d82d017&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

