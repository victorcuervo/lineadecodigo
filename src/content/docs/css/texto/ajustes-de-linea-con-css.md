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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMCW265U%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T075330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxpNH5cghU6nSwwY5kdtUNAxmv7OyZNulTXLFqE6K41gIhAI34ScCPfLvwnEryOGJKFfl8eOFUV4Q8YEOOXBqyQHM4Kv8DCHkQABoMNjM3NDIzMTgzODA1IgxOV0HxHuVCMH4LShsq3ANZZY%2FZpOSv34IkmslNqHJ%2BQTezfzAye%2BCoz3l8GuTcJkUIKX0EwkRxXwCSye85k3pnxBQmbDku2146zCkchHJDoaBCf%2B3m4Bm8b4XCP5OzRA%2BY13NR9bCBGADhklQzIIZThFqZERQs5Vzq%2B33x1haeHGvQ2%2BWLAL4bJNxHa9Vdh3F4%2FT4dy%2Bd3YkspWCmsgPpkh85ZD4dMwCj8wCI4qMAkV4AQzwinLyw5Ou8clGfsH5G4fI%2BPPlXbHm9pPz4c5TdD9REtlYlcTNFBiopIjF4AkG1WL1q0YbyjrGhjTlUzA18xXxlH1kR7NNCd5DPVgzN4gqVjqEbQ2jPISKTEoC9Co7NIvloFZcFitz3KoErKgQlDCmSi68vDt%2FB%2BADFmV73HEi8KBfD7yXZjUWiuwT8mf4mnBOUWV8H2fjZ2LWGKtDi5I1diBOay8ICWPTaQ9sxwVokJdx%2FeifGkMjP2EbGOhIXJEHRd2UlIPxjFwSXd6x%2Bpcz0ZoPUR1z1Zs4Nq8lqZMdHw1SfKEukYSQHmXB2JrcZ8UmWZUYmse94CfvXhs7cpC%2Bvsa%2FtxfNGsyF782zpXqWtPahdWbo8%2BGfU7YO9ATNPosaIXVLQcLnXkC8HF2e2NOHANFyDGKOSvCjCZt4nKBjqkAT1PNNrIkRgWM3zwugPHqw5huiZ10aiwcabkRtuip353iIymi9o3gAlpkOMPmagAVTU6IN2NRY%2BCFGyWN0jbz%2Bs5p7zYHc1yK%2B6Vd5rHRH1fWmNmXnGNX%2Bk%2B0ATVJ8PghA2%2FF1Gipv%2FlmtcZeEaEyXI3LpCzaB%2BnqWFaUU9yMHRLvQS3onkxPwR7JvUNAi4%2BWAwJkuLfJp5ZPokGs1GEArZ4ovbV&X-Amz-Signature=d48b9caa4472d73ea36ec2140ac8b6c2d0c2c1391d5489b5a839b49e4964104c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMCW265U%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T075330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxpNH5cghU6nSwwY5kdtUNAxmv7OyZNulTXLFqE6K41gIhAI34ScCPfLvwnEryOGJKFfl8eOFUV4Q8YEOOXBqyQHM4Kv8DCHkQABoMNjM3NDIzMTgzODA1IgxOV0HxHuVCMH4LShsq3ANZZY%2FZpOSv34IkmslNqHJ%2BQTezfzAye%2BCoz3l8GuTcJkUIKX0EwkRxXwCSye85k3pnxBQmbDku2146zCkchHJDoaBCf%2B3m4Bm8b4XCP5OzRA%2BY13NR9bCBGADhklQzIIZThFqZERQs5Vzq%2B33x1haeHGvQ2%2BWLAL4bJNxHa9Vdh3F4%2FT4dy%2Bd3YkspWCmsgPpkh85ZD4dMwCj8wCI4qMAkV4AQzwinLyw5Ou8clGfsH5G4fI%2BPPlXbHm9pPz4c5TdD9REtlYlcTNFBiopIjF4AkG1WL1q0YbyjrGhjTlUzA18xXxlH1kR7NNCd5DPVgzN4gqVjqEbQ2jPISKTEoC9Co7NIvloFZcFitz3KoErKgQlDCmSi68vDt%2FB%2BADFmV73HEi8KBfD7yXZjUWiuwT8mf4mnBOUWV8H2fjZ2LWGKtDi5I1diBOay8ICWPTaQ9sxwVokJdx%2FeifGkMjP2EbGOhIXJEHRd2UlIPxjFwSXd6x%2Bpcz0ZoPUR1z1Zs4Nq8lqZMdHw1SfKEukYSQHmXB2JrcZ8UmWZUYmse94CfvXhs7cpC%2Bvsa%2FtxfNGsyF782zpXqWtPahdWbo8%2BGfU7YO9ATNPosaIXVLQcLnXkC8HF2e2NOHANFyDGKOSvCjCZt4nKBjqkAT1PNNrIkRgWM3zwugPHqw5huiZ10aiwcabkRtuip353iIymi9o3gAlpkOMPmagAVTU6IN2NRY%2BCFGyWN0jbz%2Bs5p7zYHc1yK%2B6Vd5rHRH1fWmNmXnGNX%2Bk%2B0ATVJ8PghA2%2FF1Gipv%2FlmtcZeEaEyXI3LpCzaB%2BnqWFaUU9yMHRLvQS3onkxPwR7JvUNAi4%2BWAwJkuLfJp5ZPokGs1GEArZ4ovbV&X-Amz-Signature=490c2707a573940bfa167fa7ba53a613c6a663029e55416076d96b7f53e900b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

