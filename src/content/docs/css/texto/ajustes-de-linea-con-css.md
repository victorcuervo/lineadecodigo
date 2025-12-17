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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFO23MRC%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T063227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDofvNwqF4QtbYx03FrJKYgSjXvG9%2FMSO8ZIWZDpN15RAIgaZhSOyhkHMWcPi%2BkerB89i74LdKHUAB0FEGy1JOwMKMq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDMtaXPxpJKQpOjeJFCrcA%2FyRXEabKv1jjAwxgAvlgcCjbCkH02MEFsxVLeZA9k1nfVcMt5dX5utYfThL1psFlFnBhGfbIOUDD7ychZTFNqso6XItYbz%2FU5g3vsfEo1I%2Bh3TvBw4FF06B%2B7PDuzqDMGteuSxnhCy7BNDvaspyy64J2r5SgY%2FlggrK1jOS%2B7DEC8MrLyyfLp5%2BpEwXCIuRTWimoMPECzUrYJok%2B2Boz0oijPEXyi1V4pYStCUlfIBa6DclI2KOq6FMU5e6I1cdMSLTYf4w7M1vCEDll%2Bzd3MMW5oxvTLspkERdxoAnUun6mPHFbxZdRPb0CzD3a3VUTyjAwD1ftUQp%2Bm%2BMQJ3D0EHupibL2kvsTwaG48pJ9Sp7fQigEqBUktNZU00joLuEgzEij90raPNxYEiVRb1tj%2BwaFGMqcViGfb1%2Bp8gt2awlkK7GTt8d90o7spJMi0G2Wn1hKOlBlVmYNlUb1XXOQIGZ8hqWMa8AiwFvQy0Ig6wbr81%2FqarEQIT9HmuzqiY%2BZNNFgVv32X6X9TrTGZMXhtcvlPQNRfRRTZafGBjuew1ntl33M4yhnvORLCTaya8bg%2FHpR7cuQAhkj70ZGVWSnFJFwXRAKgXMW6skWMvhJF9y0McMAMWH%2BDjgvhldMKqDicoGOqUB0VvPxNekeLU7Lh8Sia6K%2BQgNnI7RReqQg%2BoJGY5qlj%2FdEIQe1WawZrnETwLHGd3x25nxOscBJiIJs8FdxVEZJu4iqsBYptRVZMW5bWgW0Kc6IuP%2BUAtPTq2fq1XJtEDkDLkDVQbDcRqKVaH5n%2B9koypDT7AaH58Kra1fo9LCjRXPnaqKxYz9l81YhPaQ4SWM73Sh%2FwP9g5K7nH7FFOkPv8e5f7nH&X-Amz-Signature=53275220f8e84895c371a6b0140ed481cff07a41367de32e503c89da4603280f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFO23MRC%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T063227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDofvNwqF4QtbYx03FrJKYgSjXvG9%2FMSO8ZIWZDpN15RAIgaZhSOyhkHMWcPi%2BkerB89i74LdKHUAB0FEGy1JOwMKMq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDMtaXPxpJKQpOjeJFCrcA%2FyRXEabKv1jjAwxgAvlgcCjbCkH02MEFsxVLeZA9k1nfVcMt5dX5utYfThL1psFlFnBhGfbIOUDD7ychZTFNqso6XItYbz%2FU5g3vsfEo1I%2Bh3TvBw4FF06B%2B7PDuzqDMGteuSxnhCy7BNDvaspyy64J2r5SgY%2FlggrK1jOS%2B7DEC8MrLyyfLp5%2BpEwXCIuRTWimoMPECzUrYJok%2B2Boz0oijPEXyi1V4pYStCUlfIBa6DclI2KOq6FMU5e6I1cdMSLTYf4w7M1vCEDll%2Bzd3MMW5oxvTLspkERdxoAnUun6mPHFbxZdRPb0CzD3a3VUTyjAwD1ftUQp%2Bm%2BMQJ3D0EHupibL2kvsTwaG48pJ9Sp7fQigEqBUktNZU00joLuEgzEij90raPNxYEiVRb1tj%2BwaFGMqcViGfb1%2Bp8gt2awlkK7GTt8d90o7spJMi0G2Wn1hKOlBlVmYNlUb1XXOQIGZ8hqWMa8AiwFvQy0Ig6wbr81%2FqarEQIT9HmuzqiY%2BZNNFgVv32X6X9TrTGZMXhtcvlPQNRfRRTZafGBjuew1ntl33M4yhnvORLCTaya8bg%2FHpR7cuQAhkj70ZGVWSnFJFwXRAKgXMW6skWMvhJF9y0McMAMWH%2BDjgvhldMKqDicoGOqUB0VvPxNekeLU7Lh8Sia6K%2BQgNnI7RReqQg%2BoJGY5qlj%2FdEIQe1WawZrnETwLHGd3x25nxOscBJiIJs8FdxVEZJu4iqsBYptRVZMW5bWgW0Kc6IuP%2BUAtPTq2fq1XJtEDkDLkDVQbDcRqKVaH5n%2B9koypDT7AaH58Kra1fo9LCjRXPnaqKxYz9l81YhPaQ4SWM73Sh%2FwP9g5K7nH7FFOkPv8e5f7nH&X-Amz-Signature=1db273d4b08f6fbd14f557f635164a4b04a28264193f6f23552233e6b4452a8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

