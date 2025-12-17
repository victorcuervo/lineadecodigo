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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHVJHCNP%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T013601Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQClc8LKPNH8yYEz0xpJI2ZAwFwRegwx6DZrBlS9jyVHUwIhAPIDA4wI6Z1RbMlZA%2FuPbIc3y4AdOsx5uDPPvT3W4E27Kv8DCHIQABoMNjM3NDIzMTgzODA1IgzlhOwldLQjotEvi6Aq3AMpbfHmZ6eScxbon%2FLjiZ2WFA%2FRXElP38sovoD%2FAa1ohvRFDU%2FzZ52XGHg6wZy4l4WFoJo5Jp%2Bi06SlEemANNP5Gzo%2Fzq8hFcVt1Bbb83veq9G58tByzAAHqIt%2FVS6DtltvdzD6H5u7Zp0FjK6ARatk7i7lYsy26Q%2Fqb9jXVi740UeaYLBLP5N7usnZI4X7neGXTU3CtxEHrdHaJISLW%2FUKAdhKAVBPRS%2BIdQEFYnWKd31Y515BKPotgQQwJ2beH9%2BuamGl8Jn8KgalBULiGRofwk4%2FCxYmvZLPMbLEuCdaD5yusUgxbynXtlZlCiCRyJR22wrXu8ewFWN7iTJuu3XSXgm1nKpl%2FzkFjMdAkdCSiksOOs2VYryNRK3jRqL5ll5MhOPQKXTOjFXmMo34CSOBTcyZRs7QkQvcw67ICrXQ4vEgUJwGaAg%2Fl5xO%2B0ojpO5q6X%2B3B%2BUH%2FOsFfCLDz0NSSV8ZuOu7QEaZD4ptZgliyC7vX6Ps37xCtUgaNwWu4ptCJiFaZDyf6csPZjqsErxiCsccuXLMFnuOgvIfKSjy6XmihrpFqsCvhhaMpjlim7lo85SqzFV7L%2F64%2BVIlN4YX55QUXlzt%2B3T9qHSE29OjjWHuiWY8Hvwgy29GKTCp%2B4fKBjqkAX1zQiY%2FTRFdnok78Jb3wbc5eXxhYFOOgfWk2NqI%2F2S%2BgOeAeArlqcXt3XP7bbJ8q6m2fbuRZIB8nDLw5QzPy9P4mE%2FKIjTTYTwy%2F1RBx32KfaUtBBAB%2F82Sbbx5awSvwvOrznmhWgBRn2lJTwie5xYvCHTY1Jzav78LPdz%2BxP3erdn6xPaIdWFedd7PQB0TsxYpF%2F42P8npLVBF8nHU%2FdK1vXSu&X-Amz-Signature=16342858a4685b7251c37153fbb150c4e3090e0302ec81b92ccf286a16a164f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHVJHCNP%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T013601Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQClc8LKPNH8yYEz0xpJI2ZAwFwRegwx6DZrBlS9jyVHUwIhAPIDA4wI6Z1RbMlZA%2FuPbIc3y4AdOsx5uDPPvT3W4E27Kv8DCHIQABoMNjM3NDIzMTgzODA1IgzlhOwldLQjotEvi6Aq3AMpbfHmZ6eScxbon%2FLjiZ2WFA%2FRXElP38sovoD%2FAa1ohvRFDU%2FzZ52XGHg6wZy4l4WFoJo5Jp%2Bi06SlEemANNP5Gzo%2Fzq8hFcVt1Bbb83veq9G58tByzAAHqIt%2FVS6DtltvdzD6H5u7Zp0FjK6ARatk7i7lYsy26Q%2Fqb9jXVi740UeaYLBLP5N7usnZI4X7neGXTU3CtxEHrdHaJISLW%2FUKAdhKAVBPRS%2BIdQEFYnWKd31Y515BKPotgQQwJ2beH9%2BuamGl8Jn8KgalBULiGRofwk4%2FCxYmvZLPMbLEuCdaD5yusUgxbynXtlZlCiCRyJR22wrXu8ewFWN7iTJuu3XSXgm1nKpl%2FzkFjMdAkdCSiksOOs2VYryNRK3jRqL5ll5MhOPQKXTOjFXmMo34CSOBTcyZRs7QkQvcw67ICrXQ4vEgUJwGaAg%2Fl5xO%2B0ojpO5q6X%2B3B%2BUH%2FOsFfCLDz0NSSV8ZuOu7QEaZD4ptZgliyC7vX6Ps37xCtUgaNwWu4ptCJiFaZDyf6csPZjqsErxiCsccuXLMFnuOgvIfKSjy6XmihrpFqsCvhhaMpjlim7lo85SqzFV7L%2F64%2BVIlN4YX55QUXlzt%2B3T9qHSE29OjjWHuiWY8Hvwgy29GKTCp%2B4fKBjqkAX1zQiY%2FTRFdnok78Jb3wbc5eXxhYFOOgfWk2NqI%2F2S%2BgOeAeArlqcXt3XP7bbJ8q6m2fbuRZIB8nDLw5QzPy9P4mE%2FKIjTTYTwy%2F1RBx32KfaUtBBAB%2F82Sbbx5awSvwvOrznmhWgBRn2lJTwie5xYvCHTY1Jzav78LPdz%2BxP3erdn6xPaIdWFedd7PQB0TsxYpF%2F42P8npLVBF8nHU%2FdK1vXSu&X-Amz-Signature=deb47ec1ed0ef906bcdb15399a7c8d212b122ae8267f163564ce3aa5ca3318eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

