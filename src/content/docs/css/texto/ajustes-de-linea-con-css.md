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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEXYK5Z7%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T180925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHYN434nWVg5WdWD9YX7%2BP5wy84OANxV0rEcmTqd6QSlAiB5k7EWCp4mrH7sL1SNqVP%2BFRypjb6k9RAHD1Uq5XqYjSqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtiyzkTxWbFMY91UFKtwDNj%2FSFVAfoz1HspR%2BLYbHXeIutaw4vscWJVVaDUgmkHFQaRdc8w8Ub9SVRg5uaRQFlg0O3400fZKMbj2qeUQfZRp5NRWZsgO%2B%2FsQOx39u4TJQvHh0bnmrCMNBL%2F1kBxgrJaRmT%2FDXRZvhFhxFQ31Huk%2BbsOiO51sf2OkgjbWB7QAN7D1Sk9DHQXkLRz21bUtkpaltMqyy%2Bn2wBERC3wtw2Bx5GzSkvmLSbieF58SNmPkInfHMoY10qoOoIkBqvmQVWUG7SJ3e1hrxgQvcdsmXSOig7Tg4JP8GJ3%2FlkeP8p0kd0ZxEKECTC85tl6Q1HDFre%2BG%2B5HBhi9no3CRJkB6uvYcRLIJFDp6jehmzQZg1%2Fm5vx9eu%2F14PGG%2FdjtEBtIZ47%2BkwR3owyJDYY8Q%2FZsk61FZ0jsT1AX%2BUZCJycCESKTbYDH2qON%2FLSAOdHOe3VIktoSK%2BiHNXBZiFPQ8%2FqSBL7NcH7vlqt4cTBCxDQ96Af%2BWBaMyanyRtxQyuv8%2BRWU4WKmRt1ylM2Jq4yxQ9AHPvjpeo%2FGq6V9Nfz8MlEWuXRDKx5V8Hau7fWk3wQ2HJen4kg9lH%2FrUD1XNmygRCOeKC28CQ13Vr1evNQJ42bPg6Jfby3LhlxQMr8PsWVa0wzZ6LygY6pgFBi9QBZvNU0CxYDQCN4nM%2FEvEjw5RwEQa829jNgRMRyQLq%2FMEAuLCG5Nu8pxCI6ww5HSiq2NCQ3gPLc6a0Ut3exX6CHR%2Ffm7PQVGOCGEkigfwOTteoE7nE8C9Sd5UkJOVr5DozFetgOcNgBZwQKzaBtCukFdRZv9d9JXLSk7m03%2BBeYrhAbNJuKnyzjndtwBzg61H0r9w5dG3BaLoPmXdFA%2F0oHKoj&X-Amz-Signature=0c3811cad4c0ee5feba7e80ed27ea76a799a6a91c3e17f0fc85bbc90540b0f0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEXYK5Z7%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T180925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHYN434nWVg5WdWD9YX7%2BP5wy84OANxV0rEcmTqd6QSlAiB5k7EWCp4mrH7sL1SNqVP%2BFRypjb6k9RAHD1Uq5XqYjSqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtiyzkTxWbFMY91UFKtwDNj%2FSFVAfoz1HspR%2BLYbHXeIutaw4vscWJVVaDUgmkHFQaRdc8w8Ub9SVRg5uaRQFlg0O3400fZKMbj2qeUQfZRp5NRWZsgO%2B%2FsQOx39u4TJQvHh0bnmrCMNBL%2F1kBxgrJaRmT%2FDXRZvhFhxFQ31Huk%2BbsOiO51sf2OkgjbWB7QAN7D1Sk9DHQXkLRz21bUtkpaltMqyy%2Bn2wBERC3wtw2Bx5GzSkvmLSbieF58SNmPkInfHMoY10qoOoIkBqvmQVWUG7SJ3e1hrxgQvcdsmXSOig7Tg4JP8GJ3%2FlkeP8p0kd0ZxEKECTC85tl6Q1HDFre%2BG%2B5HBhi9no3CRJkB6uvYcRLIJFDp6jehmzQZg1%2Fm5vx9eu%2F14PGG%2FdjtEBtIZ47%2BkwR3owyJDYY8Q%2FZsk61FZ0jsT1AX%2BUZCJycCESKTbYDH2qON%2FLSAOdHOe3VIktoSK%2BiHNXBZiFPQ8%2FqSBL7NcH7vlqt4cTBCxDQ96Af%2BWBaMyanyRtxQyuv8%2BRWU4WKmRt1ylM2Jq4yxQ9AHPvjpeo%2FGq6V9Nfz8MlEWuXRDKx5V8Hau7fWk3wQ2HJen4kg9lH%2FrUD1XNmygRCOeKC28CQ13Vr1evNQJ42bPg6Jfby3LhlxQMr8PsWVa0wzZ6LygY6pgFBi9QBZvNU0CxYDQCN4nM%2FEvEjw5RwEQa829jNgRMRyQLq%2FMEAuLCG5Nu8pxCI6ww5HSiq2NCQ3gPLc6a0Ut3exX6CHR%2Ffm7PQVGOCGEkigfwOTteoE7nE8C9Sd5UkJOVr5DozFetgOcNgBZwQKzaBtCukFdRZv9d9JXLSk7m03%2BBeYrhAbNJuKnyzjndtwBzg61H0r9w5dG3BaLoPmXdFA%2F0oHKoj&X-Amz-Signature=0b3119efc0466ea00bac569f61cd10d2a40da63bcb22f894ec9a2d69446cf334&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

