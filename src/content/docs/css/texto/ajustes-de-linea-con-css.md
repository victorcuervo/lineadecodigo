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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KCNCQ34%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T131242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2FftPeZSb2JhfwrfvcChKhTjEAu0%2BoIRzamk4uWqp3pwIhAIxO%2FD2sw7cPzGWf2s7w1QY43nRgEylx2U%2FQYE%2BN8CB3Kv8DCH4QABoMNjM3NDIzMTgzODA1IgwuD%2B7RsjRXRPxGcZcq3AMIXXtafqskzvfOVecwNdM13IEn9w5%2Bi2r3rGlurUYyrlN3WzcbObF469tBV5%2Bo9UZX3%2Bk%2FzDPgxZwAtWKTuH1Hc7t7jrTZRT%2BU8kl3WnVnF2%2FOkU%2BzSXwSWiV0GHaLx7AgUnEBElfhghLcrbMQ6uMH1LJWnuANRwSU53KXD2lPoipRZTR63w0a23aXa3FzYO7jSR6YMnPwgtj1vWJJkdVd6q0h0gOTQRVuPVS3lE6%2B8%2BUpFYASASui%2FTwCquPbRZJ5KHMfnhrs8c%2FbX2ziyWuk4EnXFf9aoUjGesA6jgBtsO7NzL9IDSV6rlQq8SIE9wQV2HzxQU7E6FmOklH%2Bc%2FR7YYkRQAOIN%2F4eUCNKdzPe%2F0ZNmM8blOsOT9C9%2Bb2v2GSFSR%2F5qDh0iEGkVRvBpKrYrjW2KoeRtLIRubw%2Fn3vpwttKN5DOFWhA4hzrPKxr7TwvP7%2F2NoFf%2F6hCnRgiR088HkGxb98zBWFY76vCGV9Ppv8WhuSe%2FiejK4HizAR7%2B0nr%2BPRBPvPy7xUfBRdPu37jOmNMLWFYomFtlTbznex97sCajOH6gJN3W7vbx9%2FF0ewUt4t61xsbN58H8TU0gKGWKunZl2%2BW1N0aCmwrVhQD5QAcSthxqDNAtckVKTDHxYrKBjqkAUKplQaeebKdVG697iUuSmq4BLq6Ttpq%2BE5dZiTr%2Fx9Z%2FrPIM18qOgTjG8rqZPiEjlVuUqS9xke88o%2BcxzXmWPQtnc4k2q8yfJzw7lzBqm9Gj31S7hezO7vpXAJebG7FG5uP55wfoa%2FkOHb38yCdpZ1w9woVadVk7xg5CVCMMuK0NurTln4vPoGbw1X1DYYFrGhgdiY%2FcmUxGIUhBmS6wU%2F%2Ft0AO&X-Amz-Signature=5abc941b3c20d16b2eae3631fab35e1b46b4f0d0e000b5b0247d511ce827ea6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KCNCQ34%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T131242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2FftPeZSb2JhfwrfvcChKhTjEAu0%2BoIRzamk4uWqp3pwIhAIxO%2FD2sw7cPzGWf2s7w1QY43nRgEylx2U%2FQYE%2BN8CB3Kv8DCH4QABoMNjM3NDIzMTgzODA1IgwuD%2B7RsjRXRPxGcZcq3AMIXXtafqskzvfOVecwNdM13IEn9w5%2Bi2r3rGlurUYyrlN3WzcbObF469tBV5%2Bo9UZX3%2Bk%2FzDPgxZwAtWKTuH1Hc7t7jrTZRT%2BU8kl3WnVnF2%2FOkU%2BzSXwSWiV0GHaLx7AgUnEBElfhghLcrbMQ6uMH1LJWnuANRwSU53KXD2lPoipRZTR63w0a23aXa3FzYO7jSR6YMnPwgtj1vWJJkdVd6q0h0gOTQRVuPVS3lE6%2B8%2BUpFYASASui%2FTwCquPbRZJ5KHMfnhrs8c%2FbX2ziyWuk4EnXFf9aoUjGesA6jgBtsO7NzL9IDSV6rlQq8SIE9wQV2HzxQU7E6FmOklH%2Bc%2FR7YYkRQAOIN%2F4eUCNKdzPe%2F0ZNmM8blOsOT9C9%2Bb2v2GSFSR%2F5qDh0iEGkVRvBpKrYrjW2KoeRtLIRubw%2Fn3vpwttKN5DOFWhA4hzrPKxr7TwvP7%2F2NoFf%2F6hCnRgiR088HkGxb98zBWFY76vCGV9Ppv8WhuSe%2FiejK4HizAR7%2B0nr%2BPRBPvPy7xUfBRdPu37jOmNMLWFYomFtlTbznex97sCajOH6gJN3W7vbx9%2FF0ewUt4t61xsbN58H8TU0gKGWKunZl2%2BW1N0aCmwrVhQD5QAcSthxqDNAtckVKTDHxYrKBjqkAUKplQaeebKdVG697iUuSmq4BLq6Ttpq%2BE5dZiTr%2Fx9Z%2FrPIM18qOgTjG8rqZPiEjlVuUqS9xke88o%2BcxzXmWPQtnc4k2q8yfJzw7lzBqm9Gj31S7hezO7vpXAJebG7FG5uP55wfoa%2FkOHb38yCdpZ1w9woVadVk7xg5CVCMMuK0NurTln4vPoGbw1X1DYYFrGhgdiY%2FcmUxGIUhBmS6wU%2F%2Ft0AO&X-Amz-Signature=eb3a992f52fd41820c83ba846f12c9393d58cc63c2fc1255029233b96eb71619&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

