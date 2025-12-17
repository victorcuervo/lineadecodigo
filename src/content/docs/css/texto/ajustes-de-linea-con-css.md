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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TW2YO64%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T054821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3XUIkVl5Ktt85wpVmctRT%2FF3TIziSDp8HAascGkEcMwIhAJKgU0jNClUrdgR%2BZvlVNtSLb4uhAuZMndytoskIISVBKv8DCHcQABoMNjM3NDIzMTgzODA1Igw0Gz94uC5MMyfEo94q3AO0wvftioh%2F0ZzzGTP2tOhMHJwY6ciWIw13oXfrQ60hwcXQlmaWyFhHo8YgRfLAVWNqAZOoB7a9Lj80spE1byU%2BEFcku2IehoaPde%2B1KAvSxqE6QsIqKXjA5z%2Ftw9wDKA%2Bh9pNkAjzi%2FLSNsHZj2WMei8tFQ4GM%2BqXwybYnJOU7%2Bw9t0AO1uFv%2FcCmuJ%2F9XKU4qhmliVprSoMP%2BRI7Ltzi4uF4z54sJ6OFXWo8%2FwTdskT31CjRlGOhC7lHJ0oPatp3lfiM8MxB%2F3HkkxQ16XuKx%2FKVLL67GN1CxK47yFcQnCceLh9TCP4BJnDQi5X12weW9EOpDHupqDBsNBYthLm2ooNM9m6YHlRhVwJRldil7igpGf1kWjLlaJ3un486RbdftEnkbiklvBW39tuBOU2ES6fwkoCjFpL1UkucUyGgjiQCvnWN59VHlWNKZ8IKAN8xOzanXuw4gI3z9HGvA5rNcMgXs9nYvihuGtZ8HmcuErs%2BUbGHW238TdZ5QEC7EWBY9YmKSTKsseG7XFm4MHiuBTXqnKxYfe5O8QGW3WnWoBCudTTFlzGRaVW%2Bq6aaqt59LtJZkQ5w4MHhIUZKjuKCGtLv96svpQKwXV2OcGie57VeHUE8vgpEdPMTXzTCLg4nKBjqkAeROtKemL8DlCV6JMBhAPSj9vTBlh2vwq33VL%2FnyiYXUDm9WXKYirBctASv1eA7mRWX7Xb3mmVdT%2B8M%2BudHvJSUew5IhYcjFcLhuPJK%2BWga%2F7UZpeBnh9X2P8LZ%2FGt6fUQu5upZWJHuJAy3sS9p0lRnG9vpRU7dw%2BBDsF59YaeAAC1OUDZfTZey8XOyy47jR4jvpH1DLgFGdFHZJvW6c4Q7SJmdR&X-Amz-Signature=c55566bd5637af199102aca7939fac93b68d109dc11de17a114158d04a7e850b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TW2YO64%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T054821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3XUIkVl5Ktt85wpVmctRT%2FF3TIziSDp8HAascGkEcMwIhAJKgU0jNClUrdgR%2BZvlVNtSLb4uhAuZMndytoskIISVBKv8DCHcQABoMNjM3NDIzMTgzODA1Igw0Gz94uC5MMyfEo94q3AO0wvftioh%2F0ZzzGTP2tOhMHJwY6ciWIw13oXfrQ60hwcXQlmaWyFhHo8YgRfLAVWNqAZOoB7a9Lj80spE1byU%2BEFcku2IehoaPde%2B1KAvSxqE6QsIqKXjA5z%2Ftw9wDKA%2Bh9pNkAjzi%2FLSNsHZj2WMei8tFQ4GM%2BqXwybYnJOU7%2Bw9t0AO1uFv%2FcCmuJ%2F9XKU4qhmliVprSoMP%2BRI7Ltzi4uF4z54sJ6OFXWo8%2FwTdskT31CjRlGOhC7lHJ0oPatp3lfiM8MxB%2F3HkkxQ16XuKx%2FKVLL67GN1CxK47yFcQnCceLh9TCP4BJnDQi5X12weW9EOpDHupqDBsNBYthLm2ooNM9m6YHlRhVwJRldil7igpGf1kWjLlaJ3un486RbdftEnkbiklvBW39tuBOU2ES6fwkoCjFpL1UkucUyGgjiQCvnWN59VHlWNKZ8IKAN8xOzanXuw4gI3z9HGvA5rNcMgXs9nYvihuGtZ8HmcuErs%2BUbGHW238TdZ5QEC7EWBY9YmKSTKsseG7XFm4MHiuBTXqnKxYfe5O8QGW3WnWoBCudTTFlzGRaVW%2Bq6aaqt59LtJZkQ5w4MHhIUZKjuKCGtLv96svpQKwXV2OcGie57VeHUE8vgpEdPMTXzTCLg4nKBjqkAeROtKemL8DlCV6JMBhAPSj9vTBlh2vwq33VL%2FnyiYXUDm9WXKYirBctASv1eA7mRWX7Xb3mmVdT%2B8M%2BudHvJSUew5IhYcjFcLhuPJK%2BWga%2F7UZpeBnh9X2P8LZ%2FGt6fUQu5upZWJHuJAy3sS9p0lRnG9vpRU7dw%2BBDsF59YaeAAC1OUDZfTZey8XOyy47jR4jvpH1DLgFGdFHZJvW6c4Q7SJmdR&X-Amz-Signature=5e67c3a1368dad37426dcde979c5afb7440cf5d03e60f8a5a0d8847f1348c182&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

