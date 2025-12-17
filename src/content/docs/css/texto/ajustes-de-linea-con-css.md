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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SU5NBONK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T043350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCjb9xmwtWLi5rlBGsToplBo2JGpIVaLVK52dZt9M%2BZZgIhAJ1RZkLWOitBgboarG4yPgicJOEra6qrfbO%2B9fasKLqpKv8DCHUQABoMNjM3NDIzMTgzODA1Igytdw2WF5Iba32m6lsq3AMygS5CLNWCKmRgUjmhfy5Y2Q5iihZoI11tTOEfcS%2FNTCgxMpTMVrv%2ByhMxKfS978dA138dK%2FebIZr8Cu69l21NCrofpqm78KVsDHEuGy7%2B6JZueMFk4XAShdz51A60bT8nCDRlhg2tBczKXHR%2Bs%2BCRZYqH6rpghmYSVB1tlDe6xqwsqzS2lGAFlYtbXDOpS8%2BpOHS9zXM%2BuurRkycNM7tfxjrfskINXxh9ZxIiVKENgHxC4H%2FB0fOivwy%2F%2FmQ5Hr8LbsnfcEBrviGvVp8GPl3CMsPeXmuQxAhVWIVk7Q1HEjsPtmJ7Q6DiqQZb0puO4GyV9FChWkOmWgq1vb86h3fXd9Wj8lU3DDUGZ%2B5kOjBjF6aa5Q1wg5qoPaNGh7VpZkY2wi%2BxzjgoA3zQMpZxtfifOd62nCvrRzpWb0APntenDrqybqeAMw0cKX497AhhstX%2BLeEAmdhZDYzcrLXZtMHEWkYmmrpJC8PToygYdbxB%2F6WY93HhPcx8sIxBtdVCY2FSUqIPv46dJO1Wlso5kAAafLQUwdFmqqFWWyzhZT4NdV8o2NpqLY6QCDVBJPtJuJEWDvRkqVaApE0zZ4Ja3FaGWX6VanjzNvv6MP2NmTfggiia7YOHftQY1%2F4nNDCCzojKBjqkAUhWGeGrSoML%2F0QVYR4JlQU1l3OtvBKGkTqAhloWQ9bEtb7P5yzx3WIO3qOievKlOzaCMffSLye3B%2F73793RarFooxmVUX33MmtRBRm0AKe1xZBT68yhQm257BjoiIQNxP0Xekl5sN3hm9NJerq1UeGFGqTN7x6h3w%2FjxlDbkujXnypFtFuRdlDkLCasOHA4EZDedzjtdAr%2B5MYjS5IxlMA1nErO&X-Amz-Signature=35f7ef8722c8b81dbc0af50475d6b3cadf8c37e47f4e336c73b390d37c336d21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SU5NBONK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T043350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCjb9xmwtWLi5rlBGsToplBo2JGpIVaLVK52dZt9M%2BZZgIhAJ1RZkLWOitBgboarG4yPgicJOEra6qrfbO%2B9fasKLqpKv8DCHUQABoMNjM3NDIzMTgzODA1Igytdw2WF5Iba32m6lsq3AMygS5CLNWCKmRgUjmhfy5Y2Q5iihZoI11tTOEfcS%2FNTCgxMpTMVrv%2ByhMxKfS978dA138dK%2FebIZr8Cu69l21NCrofpqm78KVsDHEuGy7%2B6JZueMFk4XAShdz51A60bT8nCDRlhg2tBczKXHR%2Bs%2BCRZYqH6rpghmYSVB1tlDe6xqwsqzS2lGAFlYtbXDOpS8%2BpOHS9zXM%2BuurRkycNM7tfxjrfskINXxh9ZxIiVKENgHxC4H%2FB0fOivwy%2F%2FmQ5Hr8LbsnfcEBrviGvVp8GPl3CMsPeXmuQxAhVWIVk7Q1HEjsPtmJ7Q6DiqQZb0puO4GyV9FChWkOmWgq1vb86h3fXd9Wj8lU3DDUGZ%2B5kOjBjF6aa5Q1wg5qoPaNGh7VpZkY2wi%2BxzjgoA3zQMpZxtfifOd62nCvrRzpWb0APntenDrqybqeAMw0cKX497AhhstX%2BLeEAmdhZDYzcrLXZtMHEWkYmmrpJC8PToygYdbxB%2F6WY93HhPcx8sIxBtdVCY2FSUqIPv46dJO1Wlso5kAAafLQUwdFmqqFWWyzhZT4NdV8o2NpqLY6QCDVBJPtJuJEWDvRkqVaApE0zZ4Ja3FaGWX6VanjzNvv6MP2NmTfggiia7YOHftQY1%2F4nNDCCzojKBjqkAUhWGeGrSoML%2F0QVYR4JlQU1l3OtvBKGkTqAhloWQ9bEtb7P5yzx3WIO3qOievKlOzaCMffSLye3B%2F73793RarFooxmVUX33MmtRBRm0AKe1xZBT68yhQm257BjoiIQNxP0Xekl5sN3hm9NJerq1UeGFGqTN7x6h3w%2FjxlDbkujXnypFtFuRdlDkLCasOHA4EZDedzjtdAr%2B5MYjS5IxlMA1nErO&X-Amz-Signature=16322f05b781a7938d2678bcc81d5c470f12fc1404ea51eba0de6fcc9cd2327f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

