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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXDKGLZA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T081051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqZIV73sPu4R0PQy7TcLIwOPY0R%2FJGFNRtUSdHqV16YwIhANxkiJdya1xq1JsmHfo2k1QrR0dFHLhI4RfR0%2FU%2BsGfuKv8DCHkQABoMNjM3NDIzMTgzODA1Igxue1wi3tPbTRCMSJ0q3APwRmYzqmSOGege%2B8D7MeJg%2B5fo27zTsswvviZG%2BI7JP6tuhrzRh8cz58TCHb3ZWd0IaM3q63kR1QZdeYmH1YRr%2FIM7Q5WRSa3JVb8rRNvideZEWJ0xjOKS2H2%2BPgSYxbRvPmjdtIsBD0I0Nwu02XXb4Lhu9CdyE5EfpaPXY1mFJhWy8xNZteO%2B2hQxbGuHRIUPOOXGW%2BfIB6ubFzs7%2Bb5StmBhswmd1yrz1m%2B6vQNXo1NHclJAvWzPOZGJXmR4Vfkng%2BWqctILMgKKjqBk3qa1WhzMrvWITEcH1hat3ROy1zGZ8jH%2FQ5TA4jSPCRSbl7CUh0K2r8iPGcOPAnzFFB1%2FapU%2FxycM4lvDsfqcBJ3gTeLQy8g2Lvk4WWuOeQyzZySQz14DIb2P0HB8d%2BW5KrVP%2FH03BnqBxMgKV7kfxqKutVEBtXQ02ctHZIMt51JNr%2BjclZCJC3R%2BI%2Fp6l5RPOuStHYubUVPVQebUqqQ3edzPGCwxfnamPiG32Hm%2FUtuIne4VHuQuWGEd8VKvRjI%2F8Jwd7oBqSv73uhHZwaf5X1x1WgC%2F0xmuwukKW6F9IbUG8Q4HgkeSyhra4vGAxcZzmc27fYs60F%2FDOiiLTq3vdieA9KYer00O92LymxAXvDCKuInKBjqkAXrQP5J1W3n3EA9iTl0itqQGHZQQm8NQNnwr5yE7vHdNeOqr7%2Bqae1ttD5wD0hhdLY2pqeKeo2tpArCkLTsEcValt61ziOXI5rR3XwUxG9TX8ilsiPIhWUMXvlMPy7ZwoO9lD63bikM1gEp1EJSqj2mC%2FjvddkO3Kyy4v0QfOoJ1SJ8tlJSux%2FTTw8pLU%2FE0M6hvPKJFMbPqmU8InJYUF6l1s6yw&X-Amz-Signature=900c5a193406bd65001b944dda5a4928c9858d16b4c540fb49634daeb3bc4ca7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXDKGLZA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T081051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqZIV73sPu4R0PQy7TcLIwOPY0R%2FJGFNRtUSdHqV16YwIhANxkiJdya1xq1JsmHfo2k1QrR0dFHLhI4RfR0%2FU%2BsGfuKv8DCHkQABoMNjM3NDIzMTgzODA1Igxue1wi3tPbTRCMSJ0q3APwRmYzqmSOGege%2B8D7MeJg%2B5fo27zTsswvviZG%2BI7JP6tuhrzRh8cz58TCHb3ZWd0IaM3q63kR1QZdeYmH1YRr%2FIM7Q5WRSa3JVb8rRNvideZEWJ0xjOKS2H2%2BPgSYxbRvPmjdtIsBD0I0Nwu02XXb4Lhu9CdyE5EfpaPXY1mFJhWy8xNZteO%2B2hQxbGuHRIUPOOXGW%2BfIB6ubFzs7%2Bb5StmBhswmd1yrz1m%2B6vQNXo1NHclJAvWzPOZGJXmR4Vfkng%2BWqctILMgKKjqBk3qa1WhzMrvWITEcH1hat3ROy1zGZ8jH%2FQ5TA4jSPCRSbl7CUh0K2r8iPGcOPAnzFFB1%2FapU%2FxycM4lvDsfqcBJ3gTeLQy8g2Lvk4WWuOeQyzZySQz14DIb2P0HB8d%2BW5KrVP%2FH03BnqBxMgKV7kfxqKutVEBtXQ02ctHZIMt51JNr%2BjclZCJC3R%2BI%2Fp6l5RPOuStHYubUVPVQebUqqQ3edzPGCwxfnamPiG32Hm%2FUtuIne4VHuQuWGEd8VKvRjI%2F8Jwd7oBqSv73uhHZwaf5X1x1WgC%2F0xmuwukKW6F9IbUG8Q4HgkeSyhra4vGAxcZzmc27fYs60F%2FDOiiLTq3vdieA9KYer00O92LymxAXvDCKuInKBjqkAXrQP5J1W3n3EA9iTl0itqQGHZQQm8NQNnwr5yE7vHdNeOqr7%2Bqae1ttD5wD0hhdLY2pqeKeo2tpArCkLTsEcValt61ziOXI5rR3XwUxG9TX8ilsiPIhWUMXvlMPy7ZwoO9lD63bikM1gEp1EJSqj2mC%2FjvddkO3Kyy4v0QfOoJ1SJ8tlJSux%2FTTw8pLU%2FE0M6hvPKJFMbPqmU8InJYUF6l1s6yw&X-Amz-Signature=9ed2437e2251ee5a808b016e649ee2fba6866f0baf27dbc124b212309b78a76d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

