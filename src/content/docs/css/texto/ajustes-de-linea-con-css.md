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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5QQ35EK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T032156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGOMAWpmIt1fL0ncO5taHDT9cKzMUPxfIvH5KwXaT6b8AiAmnUaf%2Fe3V%2FuooRJeohkFX%2BZbFaXNFE1mVF2Wq%2BhWAJCr%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIM73HUYpqjeUycDvI8KtwDn58ALnS61gTaHGgG8eH0HGw4m6PQdnLTQl6Zmw5z%2F6LFP4LN6JZaenYb%2BrtiZIAxj4yhTTvfxXsvQXXueV%2BIDHkbuvn3RZL%2FIV%2BvknBFnB4XYAwM1VJTmxd%2FZ6tRv8wQzIhaxrGHJmZjHlg0ySLsWGppAAUDPzzkGaX9k2TK9Qb5SEC6%2FP8GkvAS1JYlvb5xD9tMA9M2CHpVWz3IC0X6FaCHiZTSzx%2Fiut5O0GuG%2BmL%2FdWJWZ8onEYbaq3z966iHul2wvw3zscIqlmq%2Bp%2FuZnEdP9eC%2FJtqmZqt5NT6LuqcovJ6BC%2BzYuFF%2FNKVzasRXZ215S9hHd8UjmVBFfsj5al9ycO1H3SIAFX0lrz6j%2FuuWSlc5yc1KiQT6rzVONZjydDotsH4M7Yxuw8T0WWxXyIbKeQU81C7P%2FXGXBC5xX1AiX6bJw4ta2VVuTobqpZco8b823aVJ70q2zJcMHTUHsDh%2BqY0Hwp0S7vVYHsTfd5yQqfAhoJl%2FVCfL4Zewi0OCHj7U67Gs%2FKvoeN8cudWyr4PbhYc9871z0B7KoK1WiWpU5NMLsi%2Fa7OfV6niiqcP5z6KTnh7U9P7nI4c8BBwEFLdUcHGRSBwQJjH6lG%2BtRiiKNEqR%2BCUK6Tz%2BOxkw6rKIygY6pgEJM08a%2Bq2tf9Q%2BTivRrNoEYdaENdpoVqYs%2FivplNn%2F6ex7t54zFcbr7VZXDlKRARJsbky4yvGSBdRhcAsqsFCIqHToxtpX4JKL7uwzob%2Fa91eVmSMcPJNCoPPLRKn2nNqgYc6tKyjZNt6x8hSx3fasd6jzzYG9iwn90uddf8V8VsxofrJGxqhY9QrJ7va11is1oSb2SYCfXM1OJMmGe0vLb7EI4YGl&X-Amz-Signature=b12e752905e65250b6bf5734ad8f66a932c92d89fe1143d462dba73f837c2998&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5QQ35EK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T032156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGOMAWpmIt1fL0ncO5taHDT9cKzMUPxfIvH5KwXaT6b8AiAmnUaf%2Fe3V%2FuooRJeohkFX%2BZbFaXNFE1mVF2Wq%2BhWAJCr%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIM73HUYpqjeUycDvI8KtwDn58ALnS61gTaHGgG8eH0HGw4m6PQdnLTQl6Zmw5z%2F6LFP4LN6JZaenYb%2BrtiZIAxj4yhTTvfxXsvQXXueV%2BIDHkbuvn3RZL%2FIV%2BvknBFnB4XYAwM1VJTmxd%2FZ6tRv8wQzIhaxrGHJmZjHlg0ySLsWGppAAUDPzzkGaX9k2TK9Qb5SEC6%2FP8GkvAS1JYlvb5xD9tMA9M2CHpVWz3IC0X6FaCHiZTSzx%2Fiut5O0GuG%2BmL%2FdWJWZ8onEYbaq3z966iHul2wvw3zscIqlmq%2Bp%2FuZnEdP9eC%2FJtqmZqt5NT6LuqcovJ6BC%2BzYuFF%2FNKVzasRXZ215S9hHd8UjmVBFfsj5al9ycO1H3SIAFX0lrz6j%2FuuWSlc5yc1KiQT6rzVONZjydDotsH4M7Yxuw8T0WWxXyIbKeQU81C7P%2FXGXBC5xX1AiX6bJw4ta2VVuTobqpZco8b823aVJ70q2zJcMHTUHsDh%2BqY0Hwp0S7vVYHsTfd5yQqfAhoJl%2FVCfL4Zewi0OCHj7U67Gs%2FKvoeN8cudWyr4PbhYc9871z0B7KoK1WiWpU5NMLsi%2Fa7OfV6niiqcP5z6KTnh7U9P7nI4c8BBwEFLdUcHGRSBwQJjH6lG%2BtRiiKNEqR%2BCUK6Tz%2BOxkw6rKIygY6pgEJM08a%2Bq2tf9Q%2BTivRrNoEYdaENdpoVqYs%2FivplNn%2F6ex7t54zFcbr7VZXDlKRARJsbky4yvGSBdRhcAsqsFCIqHToxtpX4JKL7uwzob%2Fa91eVmSMcPJNCoPPLRKn2nNqgYc6tKyjZNt6x8hSx3fasd6jzzYG9iwn90uddf8V8VsxofrJGxqhY9QrJ7va11is1oSb2SYCfXM1OJMmGe0vLb7EI4YGl&X-Amz-Signature=35c63eb60e70cbb69f4b20b2eb92177a829dd6088d336357d622a2dfafd48c98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

