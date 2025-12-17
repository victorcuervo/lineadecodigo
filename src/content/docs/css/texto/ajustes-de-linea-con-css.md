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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKWDXACJ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T131859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDTsBXkmDOma0oxplpAO%2BPppzswg9RxLlQOqZepdiD7UwIhAN%2BZc7VYSR%2BR5DBpcZP2kIeTmdOV7QvGV3L905eABdrSKv8DCH4QABoMNjM3NDIzMTgzODA1IgxHFL63qmJFjlgFLd0q3AM%2Fuh9%2FIY0fUpcYxIZzal6AbIyR2omVu%2BGzHsg7WRODp8rg6HhWJSdok726lw240WgHiSfnugyj6KAeNjc%2BV771Luy%2FmO97qDWQY4L4D8TkJtKU5iwulM8AqpL05I%2BrbWNEsCO%2FHHHtRekSaFrzsji7SK89CQUBTCWKDMF2rr0pDmB%2BWFYB%2FNYiqrnsqD1u5dcbux4Iki0k4jN%2F18AZKXXQWOTiivu5DGOy78h5VI3soFy3fKmZ9rYecanQNtmVpUw4AEl9U1tgNH37ggyxLtxvG1NaZDfK9zvN9Z5az7EqSSePJGEv%2BKkzq9o2NmWYOl4wIrhYL1AFE7ZM3K2DVxY6uLcgnugHk70BuPbFW33a0CSj7hI7yOPlbiK2WqbLp3vhg77GkI2a8LAMHlvK6IfZC23B1X1JK2cHjiXSkTdbglm03gw787xLwZMAa%2BoyxiCpwQm8YXcaGuML80syCl9sDXv%2FyGQnAjLUnO0J4nfB6M26sk%2F2hibUUgHTFLMfWa348pRRXcVipLehycF2TbGmHzD3Ev5PWsJVHULGaxlFzZtbecrukEkRR8VTtxEfJbSMVe6j7k4Jqt1oz1MojwJxWr3DxSX%2FFEgoaU4r38myrm23jEYhxodf0FqiRzDoxYrKBjqkAVjUBCc24fJz8TbVEB2%2B8IqwCpr17hV%2FNCjMvquAaPGkqe37G39CMeEYPJb5hPEfXOqUpcmxUGH2BTK922pfIQX9GPXVqtMMJZaczsM7sE4jKtuEs1gLPPGRQUhxP6vdJqSlSPf0Hgb4wOutq9DDJ4%2FOBYB%2F0VIVOwI3DffwfxkxfZeRHbf1KdMrmqnDt5gp%2FiW4uuy1KAjuigPIzOj%2BzGshhfcm&X-Amz-Signature=bcf4a27b78fe1154b24b758f12ebb2eefbf031982a79a2496b363ba1c00e7281&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKWDXACJ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T131859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDTsBXkmDOma0oxplpAO%2BPppzswg9RxLlQOqZepdiD7UwIhAN%2BZc7VYSR%2BR5DBpcZP2kIeTmdOV7QvGV3L905eABdrSKv8DCH4QABoMNjM3NDIzMTgzODA1IgxHFL63qmJFjlgFLd0q3AM%2Fuh9%2FIY0fUpcYxIZzal6AbIyR2omVu%2BGzHsg7WRODp8rg6HhWJSdok726lw240WgHiSfnugyj6KAeNjc%2BV771Luy%2FmO97qDWQY4L4D8TkJtKU5iwulM8AqpL05I%2BrbWNEsCO%2FHHHtRekSaFrzsji7SK89CQUBTCWKDMF2rr0pDmB%2BWFYB%2FNYiqrnsqD1u5dcbux4Iki0k4jN%2F18AZKXXQWOTiivu5DGOy78h5VI3soFy3fKmZ9rYecanQNtmVpUw4AEl9U1tgNH37ggyxLtxvG1NaZDfK9zvN9Z5az7EqSSePJGEv%2BKkzq9o2NmWYOl4wIrhYL1AFE7ZM3K2DVxY6uLcgnugHk70BuPbFW33a0CSj7hI7yOPlbiK2WqbLp3vhg77GkI2a8LAMHlvK6IfZC23B1X1JK2cHjiXSkTdbglm03gw787xLwZMAa%2BoyxiCpwQm8YXcaGuML80syCl9sDXv%2FyGQnAjLUnO0J4nfB6M26sk%2F2hibUUgHTFLMfWa348pRRXcVipLehycF2TbGmHzD3Ev5PWsJVHULGaxlFzZtbecrukEkRR8VTtxEfJbSMVe6j7k4Jqt1oz1MojwJxWr3DxSX%2FFEgoaU4r38myrm23jEYhxodf0FqiRzDoxYrKBjqkAVjUBCc24fJz8TbVEB2%2B8IqwCpr17hV%2FNCjMvquAaPGkqe37G39CMeEYPJb5hPEfXOqUpcmxUGH2BTK922pfIQX9GPXVqtMMJZaczsM7sE4jKtuEs1gLPPGRQUhxP6vdJqSlSPf0Hgb4wOutq9DDJ4%2FOBYB%2F0VIVOwI3DffwfxkxfZeRHbf1KdMrmqnDt5gp%2FiW4uuy1KAjuigPIzOj%2BzGshhfcm&X-Amz-Signature=49f4dbeec701123935cc70cd45a5db6799fea2955f8db882ab0cfd816a685e6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

