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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7OAYASM%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T012840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDlaITiQnW55ujEdZIlsPkKc4Qvx%2FoL7RIK1y3C9rhM8AIhAKwzQi4BKCRTqGiiYpufLsYKhI9Y12wOrvhVdZBwV3VXKv8DCHIQABoMNjM3NDIzMTgzODA1IgwODHke%2Bz2x0WFi5j4q3AOizdzNxNjeASMxMJsKJ3tCM4fYLKkxQ669WiKxOGSpK6T7G%2B2E1tvMkT4G9iIopuJwEuOBwAwDk7aQ%2FHJgpV8qjuL%2BZCrb2%2BX17ZMnBN5UsDiQrwoCURZGhP3%2FzoEt5mxal6iIuC4O9F8t3nTQFiDlYdXMT8CiLkWqjvgGMSnmcwTjxWkSt1CpaKBTt5AmWegoLwg9cAVIYsHfz4JzSlDW4Hy0qCyztA3taDl%2Bf4Q266SXcunW6byTvqTNOPqWzJQR1c3oW1RPkq1ykRMFYCV0EIE3BH9RdKLmw60DcGao0jM%2BA6c2hgbDXjXz1V873xkpSeGaan%2FbnLEdHgIk9ItkVr2pqOj%2FgLUBzHCRUTCIP9jJMpu6W6wQbJ9qIKtBvh8GuJUNw90HDVM6oqaAVszbgJmxSwwp9bJwpmCh3A7%2BYrNz4ayum9VvmcszqOTr4H2aITG%2B57YxZv8QjoBoYAn%2FPYLWJ8iJnHNnK1StfuSEu7l28UF1w4pSIcbM%2FAktaYu9mtKkmvaYl9O2DLy%2FsnqmulCgILJEfyTBCp5H9IBMbma9Gn7katZvVw2fYXvtQYKtCD1keVFbw%2FmgqQLYvuhXW3KQXNYJ4mS4Mq84evZCeFI9LqLgNRkBJe5RsDDP%2B4fKBjqkASOzytRGGFEFdcetE%2Byno1t2%2F7P1luEJxB3%2Bn4oiTgXSwMd5Obu9%2BdMEKDGRa0k%2FQnwdieLLq%2FrDBcx%2Fs%2BJpXtmcTRnMWjEXDJlDQPo7SIXzgMx3INwgwNrQqxpQvGAWFsJeK1rei665nH3n1mZB9lv8wQmTRiGSXaYDkaqENtnMDpt0Bca55Aw86%2F1C4up%2BLEbWgAyc7kEygSGmY7hRIEu8TNqO&X-Amz-Signature=ac51c1dc47da85503977bddf1333318195eb242455d3d8c147a365e3e723fa21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7OAYASM%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T012840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDlaITiQnW55ujEdZIlsPkKc4Qvx%2FoL7RIK1y3C9rhM8AIhAKwzQi4BKCRTqGiiYpufLsYKhI9Y12wOrvhVdZBwV3VXKv8DCHIQABoMNjM3NDIzMTgzODA1IgwODHke%2Bz2x0WFi5j4q3AOizdzNxNjeASMxMJsKJ3tCM4fYLKkxQ669WiKxOGSpK6T7G%2B2E1tvMkT4G9iIopuJwEuOBwAwDk7aQ%2FHJgpV8qjuL%2BZCrb2%2BX17ZMnBN5UsDiQrwoCURZGhP3%2FzoEt5mxal6iIuC4O9F8t3nTQFiDlYdXMT8CiLkWqjvgGMSnmcwTjxWkSt1CpaKBTt5AmWegoLwg9cAVIYsHfz4JzSlDW4Hy0qCyztA3taDl%2Bf4Q266SXcunW6byTvqTNOPqWzJQR1c3oW1RPkq1ykRMFYCV0EIE3BH9RdKLmw60DcGao0jM%2BA6c2hgbDXjXz1V873xkpSeGaan%2FbnLEdHgIk9ItkVr2pqOj%2FgLUBzHCRUTCIP9jJMpu6W6wQbJ9qIKtBvh8GuJUNw90HDVM6oqaAVszbgJmxSwwp9bJwpmCh3A7%2BYrNz4ayum9VvmcszqOTr4H2aITG%2B57YxZv8QjoBoYAn%2FPYLWJ8iJnHNnK1StfuSEu7l28UF1w4pSIcbM%2FAktaYu9mtKkmvaYl9O2DLy%2FsnqmulCgILJEfyTBCp5H9IBMbma9Gn7katZvVw2fYXvtQYKtCD1keVFbw%2FmgqQLYvuhXW3KQXNYJ4mS4Mq84evZCeFI9LqLgNRkBJe5RsDDP%2B4fKBjqkASOzytRGGFEFdcetE%2Byno1t2%2F7P1luEJxB3%2Bn4oiTgXSwMd5Obu9%2BdMEKDGRa0k%2FQnwdieLLq%2FrDBcx%2Fs%2BJpXtmcTRnMWjEXDJlDQPo7SIXzgMx3INwgwNrQqxpQvGAWFsJeK1rei665nH3n1mZB9lv8wQmTRiGSXaYDkaqENtnMDpt0Bca55Aw86%2F1C4up%2BLEbWgAyc7kEygSGmY7hRIEu8TNqO&X-Amz-Signature=5d05438e5d4279f3eec131c8b87f6a1a01c0b7edefd1f693fa85c8e95dd95184&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

