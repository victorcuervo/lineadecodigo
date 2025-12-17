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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXIDIVTI%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T004414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB7VmuaM3hTdM5E6apY32QSLRVGCauKHQ%2BNovvFH3eOkAiBVnqBWbulhWJhStMKhJxXWa3Z1yQrFz2%2BMkQMnq%2B5FjSr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIM%2F6g6lZMN%2FN%2B84BmaKtwD1HlxFd%2Fz4nPF6UkB68OouhTwaXwDGi4fs0NDItmJsBL67tK%2BNoG3L2FeBFOOqZSIGvv%2BThuCBxad6WP0UvO8YcP6viXsYN%2FshkI0Cl7BQkLnjaPK%2Bj90DYj%2FMG9%2B1nPwBd23luHZdFAw%2Bu%2FihWn1Qf0Gud95J9POCHc1GjPBrpxFQCtyqZ9danTa8DXPZW%2FuGXFQa6xkKgLPEBs2sGZ%2F2FrtVLaPYYReCYJZThvqu3vOzYMCtP5frzSJHdMIEPPIWRQcA4AcdbGchuWxEvuq8VwLr01b8Pl%2BSneI06V1NAwIToT81iscRo8lT1NTRPf1naV8KCc6xSOGnAwaVdgB0zDOmsn3O0VyLFw5F2dxb3cn0OM9DeY9JCR5rzanKnBwJOZH9DJvkkG7%2FK4WAXhYQpKOWFbA95qyn7pM6UAS5i3IfVufDWSK8DZXoU91BD6ReZJ%2Bp%2FHJVJ8UuyeMwrD5Xt09DlL%2B4g8q4q0lXjsnpMfNXDqpidmP0Q22PPD3%2Bj7woZOQfh%2FDXxVfsR5sSCEjDV5SV7SSsAkxAu7Kp6xzYnpDyuy3aHVyc7NxXzUBLnyI3CJ3tA%2BShEdTceJbMfQ9ZlcME4lNz9Bxv1J3eOJcWSv2owLaTpHIKUJYHyIw796HygY6pgGoHwbv6YtAkY4t%2BvVxJCk6m7QaUMq6dekYzvnNu%2FpqXcLcakdLE6iFaZpdhgKlgzlua4319twUNZY9XK0npy3sCXYgTTxwq6cowC2ho%2FlaEbHtDO989%2BrIUNoH%2BGKfbeuwIGb8JDT%2BvltZGvrP%2BAddVCQtHpYorelKsn02UShBnqaDK%2FektITTIrwOA3nALmpTwEe0ZDyJHzqfloPBoW52v5uB89E0&X-Amz-Signature=14ca072e5cfa7c2892c0b3c8b6f6c9077db01ad7d1b6ad36cf803e5bd4b61ea6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXIDIVTI%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T004414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB7VmuaM3hTdM5E6apY32QSLRVGCauKHQ%2BNovvFH3eOkAiBVnqBWbulhWJhStMKhJxXWa3Z1yQrFz2%2BMkQMnq%2B5FjSr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIM%2F6g6lZMN%2FN%2B84BmaKtwD1HlxFd%2Fz4nPF6UkB68OouhTwaXwDGi4fs0NDItmJsBL67tK%2BNoG3L2FeBFOOqZSIGvv%2BThuCBxad6WP0UvO8YcP6viXsYN%2FshkI0Cl7BQkLnjaPK%2Bj90DYj%2FMG9%2B1nPwBd23luHZdFAw%2Bu%2FihWn1Qf0Gud95J9POCHc1GjPBrpxFQCtyqZ9danTa8DXPZW%2FuGXFQa6xkKgLPEBs2sGZ%2F2FrtVLaPYYReCYJZThvqu3vOzYMCtP5frzSJHdMIEPPIWRQcA4AcdbGchuWxEvuq8VwLr01b8Pl%2BSneI06V1NAwIToT81iscRo8lT1NTRPf1naV8KCc6xSOGnAwaVdgB0zDOmsn3O0VyLFw5F2dxb3cn0OM9DeY9JCR5rzanKnBwJOZH9DJvkkG7%2FK4WAXhYQpKOWFbA95qyn7pM6UAS5i3IfVufDWSK8DZXoU91BD6ReZJ%2Bp%2FHJVJ8UuyeMwrD5Xt09DlL%2B4g8q4q0lXjsnpMfNXDqpidmP0Q22PPD3%2Bj7woZOQfh%2FDXxVfsR5sSCEjDV5SV7SSsAkxAu7Kp6xzYnpDyuy3aHVyc7NxXzUBLnyI3CJ3tA%2BShEdTceJbMfQ9ZlcME4lNz9Bxv1J3eOJcWSv2owLaTpHIKUJYHyIw796HygY6pgGoHwbv6YtAkY4t%2BvVxJCk6m7QaUMq6dekYzvnNu%2FpqXcLcakdLE6iFaZpdhgKlgzlua4319twUNZY9XK0npy3sCXYgTTxwq6cowC2ho%2FlaEbHtDO989%2BrIUNoH%2BGKfbeuwIGb8JDT%2BvltZGvrP%2BAddVCQtHpYorelKsn02UShBnqaDK%2FektITTIrwOA3nALmpTwEe0ZDyJHzqfloPBoW52v5uB89E0&X-Amz-Signature=8467f4d015d1b0ccf7364d6e74b3c9d314f709c9a6ba443b53f098fe67a4fa19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

