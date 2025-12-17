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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XN4Q6RAT%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T041213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAxd8dwz%2BqCmxe7PjDvKjrBb8%2BixMz9GJz%2FRP3J4UcTcAiBXj3MP%2FuaEvT1puIWhDPcHmNRd%2F1TXGTLKWmbKGbgeECr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIM5lBmIwEp6FkuNAWDKtwDbcokNSP1vshYJPqBpsnCkRMlX%2FFCOwbKTbE6eLp5jQp99zCijZbvWPCKbKVf6ogdHmLzq1Bhp7y8roCZCcQFs6mb9qlW68AqlwESyFYoBz6G0%2BmHv8ExPx8AoWcO8GGUUkZ1%2BvyiX8RbntyhCeNQuVO%2Fq52cUlEgxvqBKmgUinMV291KoUtqE%2FGhqS46262x8MbRa6aY77wFbhm47ddt0uuJN8a6VddAupuLQFuT4Dg8TrW2hIM%2BC7GMO3l03QOt%2B%2F4fafslC35A0WkR3kjwqswthlxoEhZdFac5bcqi52YwGoRgWiYD6E9xfNw%2FfxI%2FRJsUescKPCUP81EmpB5CukNS2wlil7PIjgHL9Q7JtHQcts9xSgkxTmwQ2GAj6MapvbNDeuQ%2FwsLQ0CtqY7qhXYgyXNBGu6pstKmKYflkG8lahfNik1rXtJ0OAM1Xtn7xWrUOGvhwUU54N8UhoZSfqy9yVj0APoa%2B9VQoTlEnpzWWMTdwZYkoCJYyCL%2FMBUfmpvefLPSj0QPRX147gre021sKCYYb%2B3WQM1TiideV7c2UnMFgj%2F%2FPB28e4XySdl6amDB13jOPHoNaKPBGjvyjUIaiOb9L%2BEhzL07bim2NVEqMrvfgEH2Cv0Ygw9cw3c6IygY6pgG9RTFgeYSnwgoGsuXzTtyk5sA8peASy4T2jMh96mhjprGMkT4l4B9MCchrUa746jwdS2%2B5aoHCV3LCVHMMSVlOha4NnqltFY1hV8FZFD6qSlQEWdq7RRdG35IPDTJzTg4hgWFOoskrpgbUPRcAqRgEIpMa16WBH1bOU%2F4PQKu48%2BpwOZFIj0FpIfNy0u1sTO9nSWL7xid90vI79YPWjsmHrPVcU84N&X-Amz-Signature=b3680b98384fda5764eaafc9b5f026060401215a9b6307993c7e936a186967af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XN4Q6RAT%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T041213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAxd8dwz%2BqCmxe7PjDvKjrBb8%2BixMz9GJz%2FRP3J4UcTcAiBXj3MP%2FuaEvT1puIWhDPcHmNRd%2F1TXGTLKWmbKGbgeECr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIM5lBmIwEp6FkuNAWDKtwDbcokNSP1vshYJPqBpsnCkRMlX%2FFCOwbKTbE6eLp5jQp99zCijZbvWPCKbKVf6ogdHmLzq1Bhp7y8roCZCcQFs6mb9qlW68AqlwESyFYoBz6G0%2BmHv8ExPx8AoWcO8GGUUkZ1%2BvyiX8RbntyhCeNQuVO%2Fq52cUlEgxvqBKmgUinMV291KoUtqE%2FGhqS46262x8MbRa6aY77wFbhm47ddt0uuJN8a6VddAupuLQFuT4Dg8TrW2hIM%2BC7GMO3l03QOt%2B%2F4fafslC35A0WkR3kjwqswthlxoEhZdFac5bcqi52YwGoRgWiYD6E9xfNw%2FfxI%2FRJsUescKPCUP81EmpB5CukNS2wlil7PIjgHL9Q7JtHQcts9xSgkxTmwQ2GAj6MapvbNDeuQ%2FwsLQ0CtqY7qhXYgyXNBGu6pstKmKYflkG8lahfNik1rXtJ0OAM1Xtn7xWrUOGvhwUU54N8UhoZSfqy9yVj0APoa%2B9VQoTlEnpzWWMTdwZYkoCJYyCL%2FMBUfmpvefLPSj0QPRX147gre021sKCYYb%2B3WQM1TiideV7c2UnMFgj%2F%2FPB28e4XySdl6amDB13jOPHoNaKPBGjvyjUIaiOb9L%2BEhzL07bim2NVEqMrvfgEH2Cv0Ygw9cw3c6IygY6pgG9RTFgeYSnwgoGsuXzTtyk5sA8peASy4T2jMh96mhjprGMkT4l4B9MCchrUa746jwdS2%2B5aoHCV3LCVHMMSVlOha4NnqltFY1hV8FZFD6qSlQEWdq7RRdG35IPDTJzTg4hgWFOoskrpgbUPRcAqRgEIpMa16WBH1bOU%2F4PQKu48%2BpwOZFIj0FpIfNy0u1sTO9nSWL7xid90vI79YPWjsmHrPVcU84N&X-Amz-Signature=a79e13516411a58d083dd49111b42a8507bb8706c3aedffd7f81d111d6211b36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

