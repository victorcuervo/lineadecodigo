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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634ZE54ZH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T035711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFZZJryVx9diL9hoJ7%2BRbBU8lZ%2BXW%2FZT4LXOfg7sJlEwAiAcJ7QwicrGvjCS08Zxl30yNiixL%2BBHrhTzua2FtZjwfir%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMcmuc2TEIQI3UEd%2BrKtwDkQgfImXiMPJe4H8hZmSMGQgENRwdlFvyotfNrUZQSLnd3jKkF%2B4rOMIDTvt6VY0O0MhsLhA%2F4qPVe0FUp%2FBwCz87mL0tcY%2B%2FKMQBqyEFQ8c9VBAudPjNb1tQCcAmM7kpCD0LP%2BJ06Wt9kRML%2FMGOFx0pPwkWGjj%2F3m47ROW2Bt3hZF%2FqntDrEtL4buFizWS5rWEmaCDnTCgZQbjNoGHIMXoyCX8t9J%2F3k8%2B77ZcH2SI2PSPxHtmnLJXwZhilbMOb0Ia0IuP3rScu8HtDwTtLcBrgwRLopvc2%2FpHs%2FjeDgh%2BPrVsV%2Blw4vSuUVIX1Z9W42tZJoVxeW%2Fw4sWidbWX1mseEikUq0lufCAzLYWSUZcDVV0bEp7VNZeLBqk%2BZhFc%2FX4lxU45J6lHJXuhqA5SaaYKLMPUfvcyvqLfnoUwt1P5NPux0xYAoeRG%2Babh7UPbY7EOkPJjCEBpbwH1CPpHz2yEJPaoT0YUei%2BwyqVzs4NLMxNg%2F3v2BU2Of0cnzb%2BZWeZZ%2FdjwIGzGJSn3BXkH%2BuONsZyb7nXbgWZ%2BIGUhCwDnAZt4b35%2FUwfqkiCez6vIkdSGViedtVW5Xb2xxKlbgoH6RY%2FUt5ZJON85ockwV0ya64JBwU03PDL61TOgwus6IygY6pgGxble%2F5NS88Kgz2ZV1aNO804P4Qm6LZUOd%2Bnk5ohVaUXWI281in5j7V630rNPqeR4PM6cyIWPeLikl%2Fn5DRlrxV03mEd%2BANiVRoXE2gck%2F4LwdGT4kcejHud2qVr%2FvgXkZ9MXiy2q5sj%2BeasiiQgE70OZPR4YNeCKPYgn%2FqUCz7K%2BOJaHp5lTQAVLehq%2BAIoZ2rk%2BCFq81wRW20dn73VXeDnwTRh2C&X-Amz-Signature=6f02113f692c2354700f6d87064232004b24eadf5eda09923a0c6d91163736a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634ZE54ZH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T035712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFZZJryVx9diL9hoJ7%2BRbBU8lZ%2BXW%2FZT4LXOfg7sJlEwAiAcJ7QwicrGvjCS08Zxl30yNiixL%2BBHrhTzua2FtZjwfir%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMcmuc2TEIQI3UEd%2BrKtwDkQgfImXiMPJe4H8hZmSMGQgENRwdlFvyotfNrUZQSLnd3jKkF%2B4rOMIDTvt6VY0O0MhsLhA%2F4qPVe0FUp%2FBwCz87mL0tcY%2B%2FKMQBqyEFQ8c9VBAudPjNb1tQCcAmM7kpCD0LP%2BJ06Wt9kRML%2FMGOFx0pPwkWGjj%2F3m47ROW2Bt3hZF%2FqntDrEtL4buFizWS5rWEmaCDnTCgZQbjNoGHIMXoyCX8t9J%2F3k8%2B77ZcH2SI2PSPxHtmnLJXwZhilbMOb0Ia0IuP3rScu8HtDwTtLcBrgwRLopvc2%2FpHs%2FjeDgh%2BPrVsV%2Blw4vSuUVIX1Z9W42tZJoVxeW%2Fw4sWidbWX1mseEikUq0lufCAzLYWSUZcDVV0bEp7VNZeLBqk%2BZhFc%2FX4lxU45J6lHJXuhqA5SaaYKLMPUfvcyvqLfnoUwt1P5NPux0xYAoeRG%2Babh7UPbY7EOkPJjCEBpbwH1CPpHz2yEJPaoT0YUei%2BwyqVzs4NLMxNg%2F3v2BU2Of0cnzb%2BZWeZZ%2FdjwIGzGJSn3BXkH%2BuONsZyb7nXbgWZ%2BIGUhCwDnAZt4b35%2FUwfqkiCez6vIkdSGViedtVW5Xb2xxKlbgoH6RY%2FUt5ZJON85ockwV0ya64JBwU03PDL61TOgwus6IygY6pgGxble%2F5NS88Kgz2ZV1aNO804P4Qm6LZUOd%2Bnk5ohVaUXWI281in5j7V630rNPqeR4PM6cyIWPeLikl%2Fn5DRlrxV03mEd%2BANiVRoXE2gck%2F4LwdGT4kcejHud2qVr%2FvgXkZ9MXiy2q5sj%2BeasiiQgE70OZPR4YNeCKPYgn%2FqUCz7K%2BOJaHp5lTQAVLehq%2BAIoZ2rk%2BCFq81wRW20dn73VXeDnwTRh2C&X-Amz-Signature=2d7ebd4441a2ccfafc65245fd7d8d66173c3e95532f5ab69e02be5c7255559a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

