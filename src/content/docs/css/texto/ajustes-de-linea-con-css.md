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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVWMWG5M%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T003907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCcnu6nQL%2Bgxh2j2rnvS89XsKK32nttkJM6xJsOtPIViQIhAIMYOk%2FC6nwIeP%2F%2BsM9wUD9NsJ2lX5wOXXmzecqJ4fmiKv8DCHEQABoMNjM3NDIzMTgzODA1IgzbeA6sz5i6Iv05gOoq3AMrLwRat%2F61xM%2ByYy5NaQugmNauA6oLIKX24Wsh8zMLjNFIWFuWT11OfryzD56Bh6x3AWcK0IpA%2F2UjoZa7m%2FgmUB%2BKoe24b3jD8dgsDB%2FLxyEXDSmpqPTD0kb%2BaiTYOR7TCUIUfG27jLgzt6Mg87Xd6tpup4uPFgqyIeWeweBWoEa8ZMeyYtpObMz1EwalEJXJcUgfTJM9hlSoRk5gY2GD%2FD8QKzNP9xP1ziFMsSfkRkRNDftPjN3Sk3IS4HUhZ%2FrhIUCf0vCHWNVyF%2BrF%2FLNSGOOxPCYCT5UbFcijlDHzzqeh3y6l4HP8ogLbZM%2B8yaLZMqBmh7EPsr%2FXQaOqJDzcUSDvqbX9vYUh9Oh7Kfttai8wePcQuxdIuz%2B%2BIGmVfB68PvmAZOEDadJ3DDmeyfDQr2BhdkM640o0HrK2WPvD9dBqfJd68Cj4DqNC%2BQs7hC6AeuFxz7Wuvo6RXdlc18okeHzIms2gbsnXbhR08%2BII5Tf%2BS%2BelG%2FmzcTRiwS8kAsclIROzknFYkJrfO0QVyRrd4dRIimswAr9rfu8PWFteyCpScgYlW2uFCqBGJ%2BsPalp4EIML5ReFneli144kX4ukvyf0ug6OeherMPeQNKsQ6hTW9GdU5lch9Ub0iDCn34fKBjqkAXDarftOEX0BLZMPkS6QTxGMyquKcCB8DDyYvADwHnsq%2BcBNgrTdPIiK%2BPQTGqlhOOMRYPslgp52V4sERAM5lgWtSTrXnOBBVth2NVFs0yMFPaRKMZ6ZYjE3e2lb4Qwu%2F6a8qgM7gOmVbHhuXZn0bh1alMe7r%2FqTEOOdzv6UAS97CN83MFkk75FxuiPv4YEZnl6G4Z%2BytA2kXmqKpBw7JIA6orTW&X-Amz-Signature=0b65d9e0f7ef1dc455d0d18341583a8a2817e9f1409c59428e4721367b438a02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVWMWG5M%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T003907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCcnu6nQL%2Bgxh2j2rnvS89XsKK32nttkJM6xJsOtPIViQIhAIMYOk%2FC6nwIeP%2F%2BsM9wUD9NsJ2lX5wOXXmzecqJ4fmiKv8DCHEQABoMNjM3NDIzMTgzODA1IgzbeA6sz5i6Iv05gOoq3AMrLwRat%2F61xM%2ByYy5NaQugmNauA6oLIKX24Wsh8zMLjNFIWFuWT11OfryzD56Bh6x3AWcK0IpA%2F2UjoZa7m%2FgmUB%2BKoe24b3jD8dgsDB%2FLxyEXDSmpqPTD0kb%2BaiTYOR7TCUIUfG27jLgzt6Mg87Xd6tpup4uPFgqyIeWeweBWoEa8ZMeyYtpObMz1EwalEJXJcUgfTJM9hlSoRk5gY2GD%2FD8QKzNP9xP1ziFMsSfkRkRNDftPjN3Sk3IS4HUhZ%2FrhIUCf0vCHWNVyF%2BrF%2FLNSGOOxPCYCT5UbFcijlDHzzqeh3y6l4HP8ogLbZM%2B8yaLZMqBmh7EPsr%2FXQaOqJDzcUSDvqbX9vYUh9Oh7Kfttai8wePcQuxdIuz%2B%2BIGmVfB68PvmAZOEDadJ3DDmeyfDQr2BhdkM640o0HrK2WPvD9dBqfJd68Cj4DqNC%2BQs7hC6AeuFxz7Wuvo6RXdlc18okeHzIms2gbsnXbhR08%2BII5Tf%2BS%2BelG%2FmzcTRiwS8kAsclIROzknFYkJrfO0QVyRrd4dRIimswAr9rfu8PWFteyCpScgYlW2uFCqBGJ%2BsPalp4EIML5ReFneli144kX4ukvyf0ug6OeherMPeQNKsQ6hTW9GdU5lch9Ub0iDCn34fKBjqkAXDarftOEX0BLZMPkS6QTxGMyquKcCB8DDyYvADwHnsq%2BcBNgrTdPIiK%2BPQTGqlhOOMRYPslgp52V4sERAM5lgWtSTrXnOBBVth2NVFs0yMFPaRKMZ6ZYjE3e2lb4Qwu%2F6a8qgM7gOmVbHhuXZn0bh1alMe7r%2FqTEOOdzv6UAS97CN83MFkk75FxuiPv4YEZnl6G4Z%2BytA2kXmqKpBw7JIA6orTW&X-Amz-Signature=ed65416e612805b97b5eb99e4e3bbc78da5172ee6aace47991417040a7451940&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

