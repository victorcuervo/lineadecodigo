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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHMF3GKU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T120159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDDvBPE6UrOh705TaIEtn4ojMCqHW7jJ4P2NY7SnNIA4QIhAK2vDJYzUBmrOBgzpdzoup%2FsuWJ8ruFVTBF4ZnlCzRRwKv8DCH0QABoMNjM3NDIzMTgzODA1IgzoyPRoT5OeZiHQeB8q3ANc9gfXZ51BsOHhN3fhtjm7AxWedBESvQXEjcVodGCTsCfxdIyj%2FxlVLakgpQQrvrz%2F%2FWH7SZJRoHgj4KlMwz2okKgrkwHSpcU163bihyPlgcSMerOrfzJxQvlTahsNcF6Em8XFww56fRIBs308LLuq4%2BFwjVOa3MGXLhCqLiOUQTsrsKNgSqEhBPd1D5gc14igFZUjWA%2BP%2F8uCaVmiPiU7tsRWS0naFSZ8JLQX0Uup3bgPxMGnbTHVABpDJCi02x25WK4%2Fit6Ri%2BxDNaEJAmEbk%2Beo3s8abKEacvVsoLa1jmwVZvocN%2FnZUMDcemwZmqQc2kLy4WbmFLPbfAXThAcIWSLjIAEzqGVnSwnGg%2BJCR8CmzFqfGArLv2un%2BQVktBmCvxavCX838ErvROeABI8UuJw%2B1fLQSqGORarCxUcWwj5HwSTpkjt0sa9cnatgyjaJ47rpEkGxp8e581WGZWGboSJgB%2Bzst2CkOUmQuJnlAmUkSpyusC7hKPyE%2Fdbp%2Bo26mFqX%2B2otgSL8BuN8FLnoX5AJ6NvISHU%2BhRm01QF5o5rw7Ix0Zg%2BzUB3TeCmNX7ZIErr1PxOSK4%2B%2BauwWHQuvXeGA5kmLj3Gmr3DN87Z82tstlyk1EQfQBR0lEzDxqorKBjqkAdh%2FZOWsj14NeEu%2F8QMfka8CIgfBPY8F1feMGEivqxAC%2FaGVtxdCtSNbdtZTbkBlC%2BQTdoTDq2co14u3sW%2BLM3cb1%2FgrY%2FtKVNIaa8hQfPBJW9HvSH6bwv4YD3D5Cn%2BneUnaRRsvMCBveQcO5J4W5HTT1tzX9Qv740zO9dgdHsjWpkwDVWcGjtHT81sYXWA5eDM49mNb6THXQmVcWElOHpmL2lDp&X-Amz-Signature=c486c9fe89d236c3df59228f13afb30151e24a3156761b145a8b67538e8eeb79&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHMF3GKU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T120159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDDvBPE6UrOh705TaIEtn4ojMCqHW7jJ4P2NY7SnNIA4QIhAK2vDJYzUBmrOBgzpdzoup%2FsuWJ8ruFVTBF4ZnlCzRRwKv8DCH0QABoMNjM3NDIzMTgzODA1IgzoyPRoT5OeZiHQeB8q3ANc9gfXZ51BsOHhN3fhtjm7AxWedBESvQXEjcVodGCTsCfxdIyj%2FxlVLakgpQQrvrz%2F%2FWH7SZJRoHgj4KlMwz2okKgrkwHSpcU163bihyPlgcSMerOrfzJxQvlTahsNcF6Em8XFww56fRIBs308LLuq4%2BFwjVOa3MGXLhCqLiOUQTsrsKNgSqEhBPd1D5gc14igFZUjWA%2BP%2F8uCaVmiPiU7tsRWS0naFSZ8JLQX0Uup3bgPxMGnbTHVABpDJCi02x25WK4%2Fit6Ri%2BxDNaEJAmEbk%2Beo3s8abKEacvVsoLa1jmwVZvocN%2FnZUMDcemwZmqQc2kLy4WbmFLPbfAXThAcIWSLjIAEzqGVnSwnGg%2BJCR8CmzFqfGArLv2un%2BQVktBmCvxavCX838ErvROeABI8UuJw%2B1fLQSqGORarCxUcWwj5HwSTpkjt0sa9cnatgyjaJ47rpEkGxp8e581WGZWGboSJgB%2Bzst2CkOUmQuJnlAmUkSpyusC7hKPyE%2Fdbp%2Bo26mFqX%2B2otgSL8BuN8FLnoX5AJ6NvISHU%2BhRm01QF5o5rw7Ix0Zg%2BzUB3TeCmNX7ZIErr1PxOSK4%2B%2BauwWHQuvXeGA5kmLj3Gmr3DN87Z82tstlyk1EQfQBR0lEzDxqorKBjqkAdh%2FZOWsj14NeEu%2F8QMfka8CIgfBPY8F1feMGEivqxAC%2FaGVtxdCtSNbdtZTbkBlC%2BQTdoTDq2co14u3sW%2BLM3cb1%2FgrY%2FtKVNIaa8hQfPBJW9HvSH6bwv4YD3D5Cn%2BneUnaRRsvMCBveQcO5J4W5HTT1tzX9Qv740zO9dgdHsjWpkwDVWcGjtHT81sYXWA5eDM49mNb6THXQmVcWElOHpmL2lDp&X-Amz-Signature=5b4e2b11b9e8d5d272702bff3571d9532dc6b2b4dd14d2a0c8ff38a430f5df0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

