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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLPJEUL4%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T110059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBLzqawHsy2XoyqPNddOnR7iwuNJDtuzXZ8Q5vsPRcvHAiEAiBoTtwgMeATNWgdQr6c7tSkriStDHDghzTCYE6zU7MMq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDIYVbmpjrc81wP4DqyrcA%2BlbPglKVRSgdzD6N4U5%2BDlnFcCJjMQAXLZLMEg2Y3IYFVhK8pQMJ8CQ8F9oex6x4AHcNrlBp%2FpCruDdPvF1x5T2J1GJs%2F%2BfkO4Q6r4tGiD1q7Vei%2BPBVO3g8L5BXa03VuPiGTOP3mC5xPhalIbA%2F4chQyKHndqLJdgfMnag9Fa%2Fn24Y3d0x9AlV0j04Og72vsQAhbMz%2BwCcLMApoEkbb2VMxAYzHKEa0Ws4fCj%2FDEZWuCODLhTRQAP8IZ9Nkv5bz4wQuBmjtsxaadSmFqXS3PE2k1m3%2BR6UkGd%2BkvbaA3kkK%2Bd3M8WPyWzUFU2FAP4QsLPa0tc9CAODAtOLzA2esJpl%2B19B03Fev0EW%2BF7WdVigYXX%2Fai6rjeWeuJYWRJG%2BXeByUtHJRV8qgkPPil58U0DTy4nYOrC9B9e4jT7%2BeAXpI%2Bdn7goySu7UUxPmbPEEm4EkGi8%2BLZBg9LesznQ6N16BNxj4HnchygnHRy5u8WbIQDiQwQf9%2BQ3deVx1daJs%2B7Lpm%2FcFPW6UvmV5Lp0rBK37WY%2FFdUpomT%2FrtDbkszmd0mqf%2F7vWjLAUwEwhgJKPTIE7sTsFQIZssOuzgL6zehvOqoXiJxPkEFgs6BOm0KZefBnPSxSCI204iqlCMOGOisoGOqUB0pL4I7c8gvTHXNJBTYMvnIIw5ivqehLcnkFL3efEYv4r5JOkg30Nx9HVKVzuGI%2BvzUtOq8LNV5orWkamq6fFWykgoX9GoBwrmXReHmVrVeh%2BUVLXCtPSi2tMMhFDmYTZTeiAAR6cbS0v%2BABR%2FhguvO1oXK5TfZIzh%2FIh%2BraYCNIx3T9pw3QOMgDLXbIzoAeEaR6iBBJechdBfbjQHbxclQUraFTS&X-Amz-Signature=275dfab79c1def192e7ebb2fc6a3f8c8ddf62f44db9c2b6634586790f9b19bbd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLPJEUL4%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T110059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBLzqawHsy2XoyqPNddOnR7iwuNJDtuzXZ8Q5vsPRcvHAiEAiBoTtwgMeATNWgdQr6c7tSkriStDHDghzTCYE6zU7MMq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDIYVbmpjrc81wP4DqyrcA%2BlbPglKVRSgdzD6N4U5%2BDlnFcCJjMQAXLZLMEg2Y3IYFVhK8pQMJ8CQ8F9oex6x4AHcNrlBp%2FpCruDdPvF1x5T2J1GJs%2F%2BfkO4Q6r4tGiD1q7Vei%2BPBVO3g8L5BXa03VuPiGTOP3mC5xPhalIbA%2F4chQyKHndqLJdgfMnag9Fa%2Fn24Y3d0x9AlV0j04Og72vsQAhbMz%2BwCcLMApoEkbb2VMxAYzHKEa0Ws4fCj%2FDEZWuCODLhTRQAP8IZ9Nkv5bz4wQuBmjtsxaadSmFqXS3PE2k1m3%2BR6UkGd%2BkvbaA3kkK%2Bd3M8WPyWzUFU2FAP4QsLPa0tc9CAODAtOLzA2esJpl%2B19B03Fev0EW%2BF7WdVigYXX%2Fai6rjeWeuJYWRJG%2BXeByUtHJRV8qgkPPil58U0DTy4nYOrC9B9e4jT7%2BeAXpI%2Bdn7goySu7UUxPmbPEEm4EkGi8%2BLZBg9LesznQ6N16BNxj4HnchygnHRy5u8WbIQDiQwQf9%2BQ3deVx1daJs%2B7Lpm%2FcFPW6UvmV5Lp0rBK37WY%2FFdUpomT%2FrtDbkszmd0mqf%2F7vWjLAUwEwhgJKPTIE7sTsFQIZssOuzgL6zehvOqoXiJxPkEFgs6BOm0KZefBnPSxSCI204iqlCMOGOisoGOqUB0pL4I7c8gvTHXNJBTYMvnIIw5ivqehLcnkFL3efEYv4r5JOkg30Nx9HVKVzuGI%2BvzUtOq8LNV5orWkamq6fFWykgoX9GoBwrmXReHmVrVeh%2BUVLXCtPSi2tMMhFDmYTZTeiAAR6cbS0v%2BABR%2FhguvO1oXK5TfZIzh%2FIh%2BraYCNIx3T9pw3QOMgDLXbIzoAeEaR6iBBJechdBfbjQHbxclQUraFTS&X-Amz-Signature=f9af3aa5aa6655f4995625244fc11ac104adb0f403cd91623f69dbfd51fa54ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

