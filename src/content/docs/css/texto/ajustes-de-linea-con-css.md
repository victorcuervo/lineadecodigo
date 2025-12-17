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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LF5HQDM%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T130031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCvaZ3aLEFJjEOtti36gkPUT9vzRWE00am9O5LNRbI2yQIhALP0UL1QIpV8OWkZn8Ov5G29inWjnUBqKqkPhIyyUdIrKv8DCH4QABoMNjM3NDIzMTgzODA1Igxjvt3idCZmM9euOBwq3ANiOty0YgKbFznUjHetO6lTzZQKXKsXSp%2BM6SUEZcFyAO5WJZRxXtG6Rp9OLOITc7AENaKw1pWCzhAaM%2FWwTAZAfUi1Q2fthFAgaOS2MicSCgUDswsQ49DbJdpaQi%2FNU%2Brb4IAjUNrXs2wsO06IXdcLdX4CaS4p3sVPcTaY8foHpP7TLxxOWXHiC2c3VIlyOuFqD0QUO%2BiIv0epaoBGuymkJbUSTfS%2BFuIA0br%2F0a1tkzoQSxt%2FNIhS%2FLcGylyGpMmQhYlTj%2FHuuNn0rPkWxF2PpUabU0Sqj02hgzEWmwlkyhVOna1yKBGPsAyNWzijVQ8Im%2B7LeskXmb1ubIotdxJVKPFulHlBRVCy2PIjj%2BF7KINdxSlDtHJieoXS3PXtWdcIArFKyTfwwX%2BpHQBGTB4UCL1zKQD8akVsqMyickhgTs3CD%2FPOeivliitkKKKTMa7gdwfIrOXJc9%2BU7%2BD07HVIVTQTDKXRkIYp30TMhcF4OXdNuxSP7pgy0XV%2FQedoovVA46JqgwHpl6ewDdjt4wvyjgCUm7FTb4MtI66unhm%2Bt8gX0yjGb7ww8Sj3wYBN5bGx9RsbvFtwaFS73ODcxe%2FO%2FBD1I1tmTB956okF8WW9sODy3Lhnl9Mt8Km6oTDNxorKBjqkAfs2rI6MfBKda%2B5WqCvhlzLLCvjpjiXznqdG9xGVu5AojgEGByvkeGr%2BbYtcLTey2EHOKAVe0ZjMQck05djVbXvYU00N4Cn7vkp6lXWYR5itIKDkLQHt7otkawrlmB7n6MWrdYsm6k76zuWAJsPJOZIBPQgSx8e%2Fjp0nc1u5wZACPmxhAkJ6VWntwTncX6MMN0MR13c2XkONT%2F3ow9%2BAfla7V8Yr&X-Amz-Signature=fbe0178eb1caa6aa7b1a8433b10cee54d2cc225f680e0f8c25d8985d635cb087&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LF5HQDM%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T130031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCvaZ3aLEFJjEOtti36gkPUT9vzRWE00am9O5LNRbI2yQIhALP0UL1QIpV8OWkZn8Ov5G29inWjnUBqKqkPhIyyUdIrKv8DCH4QABoMNjM3NDIzMTgzODA1Igxjvt3idCZmM9euOBwq3ANiOty0YgKbFznUjHetO6lTzZQKXKsXSp%2BM6SUEZcFyAO5WJZRxXtG6Rp9OLOITc7AENaKw1pWCzhAaM%2FWwTAZAfUi1Q2fthFAgaOS2MicSCgUDswsQ49DbJdpaQi%2FNU%2Brb4IAjUNrXs2wsO06IXdcLdX4CaS4p3sVPcTaY8foHpP7TLxxOWXHiC2c3VIlyOuFqD0QUO%2BiIv0epaoBGuymkJbUSTfS%2BFuIA0br%2F0a1tkzoQSxt%2FNIhS%2FLcGylyGpMmQhYlTj%2FHuuNn0rPkWxF2PpUabU0Sqj02hgzEWmwlkyhVOna1yKBGPsAyNWzijVQ8Im%2B7LeskXmb1ubIotdxJVKPFulHlBRVCy2PIjj%2BF7KINdxSlDtHJieoXS3PXtWdcIArFKyTfwwX%2BpHQBGTB4UCL1zKQD8akVsqMyickhgTs3CD%2FPOeivliitkKKKTMa7gdwfIrOXJc9%2BU7%2BD07HVIVTQTDKXRkIYp30TMhcF4OXdNuxSP7pgy0XV%2FQedoovVA46JqgwHpl6ewDdjt4wvyjgCUm7FTb4MtI66unhm%2Bt8gX0yjGb7ww8Sj3wYBN5bGx9RsbvFtwaFS73ODcxe%2FO%2FBD1I1tmTB956okF8WW9sODy3Lhnl9Mt8Km6oTDNxorKBjqkAfs2rI6MfBKda%2B5WqCvhlzLLCvjpjiXznqdG9xGVu5AojgEGByvkeGr%2BbYtcLTey2EHOKAVe0ZjMQck05djVbXvYU00N4Cn7vkp6lXWYR5itIKDkLQHt7otkawrlmB7n6MWrdYsm6k76zuWAJsPJOZIBPQgSx8e%2Fjp0nc1u5wZACPmxhAkJ6VWntwTncX6MMN0MR13c2XkONT%2F3ow9%2BAfla7V8Yr&X-Amz-Signature=32f48c2062be57516a67d1c559dbd95e78226f9591296f80c2d7e4a843aa6d0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

