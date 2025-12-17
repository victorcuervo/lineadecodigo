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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZSSD7QF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T164547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQLlr%2B6Gz67eIKHgnThgA51lTzZiYViHWnp6OnHE8ylwIhAK0esENAMHSa%2FHsIWjNB1OP5fKikRaeGRBDzEOkmedn%2FKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwLQhJTLy7lJOlWS78q3ANlZPaHgzJ8HK1a4GcfVOq9StGP7rd7X2W7z0Ft4Gp1TgLt%2BS0fSXhhSRCqjVU2UOgtnEtTqmc0M3lG7MNxJTby7u56Xziise19HsqqpiH0tuR0WY8DyeIfVgcqCk3DS%2Bq0TXMgR2C%2FDQ3%2BNrtn1%2FQ47WJP3QK4jJP2FY13wBZ%2BJTdp3uvSX6leJET87kqvLeG%2BXN0mDCNzqIiLTDH%2FXJAZLq01uyQ5bEfZc6tSsJv%2F7SABmtiA8wXb%2Bj2TlUQ7ag%2Fd9KJZYmwG243L%2BvrAPQUQdB88l1JVtpYMQZwHBXV5VQHFGvsnbS3Fzke6mWZc0rafHhoiTqdofLJAFDzylI3xbAAoUTdAuJlUwNUm2LJSdfi%2B0rmJgw5VUTMOFSGTSq%2F3nBWsfH7LclBVf5ugGewc5sSbpZ1rYKsY6KXjI8B2twTS9Ws4n0gGWDPM6%2FUQWXkqn2kLzOuqQ726TEjNXaf36ph%2FSQ58ogFBJx6vCQJqoU2PQNCGZOMr%2Bea6LfdL4%2FSs8EMVx6kytNZsITmqThlNc3fhDUcjqMjDV6Ofo0lsCHWildOCmsI3IJte8AaXzgMgvUSzpTwz78hyXpKrVXyd77AP%2F4H%2BkwreKdrgEYXISHlR%2BjhAeFYU1NcsijDOnovKBjqkAfAmywa5orPax7NAn04Ua3ZL8PiGD1K6%2BFEboiITseSE5SFKale%2FjM0FALCg9OBVL1TviT0vECTYumLGutsAUnKw7OqNCf9VvJOFPUAcOogZpkII4s%2FJHFTw3rtl1wEeObhBq6ig6x3Xjfp8pj1WtFYdRkWkfwXtuWV6ulpVU0cBlO7PKs2jXIfJaxu2zl6nNzHrGLTiSAhBdexxcRCdg81cLZuV&X-Amz-Signature=8cad7c65ccfb18e78f6a44d9463d0c25994d0acf6bee5a02fbac547cd7c7fb90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZSSD7QF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T164547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQLlr%2B6Gz67eIKHgnThgA51lTzZiYViHWnp6OnHE8ylwIhAK0esENAMHSa%2FHsIWjNB1OP5fKikRaeGRBDzEOkmedn%2FKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwLQhJTLy7lJOlWS78q3ANlZPaHgzJ8HK1a4GcfVOq9StGP7rd7X2W7z0Ft4Gp1TgLt%2BS0fSXhhSRCqjVU2UOgtnEtTqmc0M3lG7MNxJTby7u56Xziise19HsqqpiH0tuR0WY8DyeIfVgcqCk3DS%2Bq0TXMgR2C%2FDQ3%2BNrtn1%2FQ47WJP3QK4jJP2FY13wBZ%2BJTdp3uvSX6leJET87kqvLeG%2BXN0mDCNzqIiLTDH%2FXJAZLq01uyQ5bEfZc6tSsJv%2F7SABmtiA8wXb%2Bj2TlUQ7ag%2Fd9KJZYmwG243L%2BvrAPQUQdB88l1JVtpYMQZwHBXV5VQHFGvsnbS3Fzke6mWZc0rafHhoiTqdofLJAFDzylI3xbAAoUTdAuJlUwNUm2LJSdfi%2B0rmJgw5VUTMOFSGTSq%2F3nBWsfH7LclBVf5ugGewc5sSbpZ1rYKsY6KXjI8B2twTS9Ws4n0gGWDPM6%2FUQWXkqn2kLzOuqQ726TEjNXaf36ph%2FSQ58ogFBJx6vCQJqoU2PQNCGZOMr%2Bea6LfdL4%2FSs8EMVx6kytNZsITmqThlNc3fhDUcjqMjDV6Ofo0lsCHWildOCmsI3IJte8AaXzgMgvUSzpTwz78hyXpKrVXyd77AP%2F4H%2BkwreKdrgEYXISHlR%2BjhAeFYU1NcsijDOnovKBjqkAfAmywa5orPax7NAn04Ua3ZL8PiGD1K6%2BFEboiITseSE5SFKale%2FjM0FALCg9OBVL1TviT0vECTYumLGutsAUnKw7OqNCf9VvJOFPUAcOogZpkII4s%2FJHFTw3rtl1wEeObhBq6ig6x3Xjfp8pj1WtFYdRkWkfwXtuWV6ulpVU0cBlO7PKs2jXIfJaxu2zl6nNzHrGLTiSAhBdexxcRCdg81cLZuV&X-Amz-Signature=2b15f122f503a510ece8375b2fe59848a92ee41e71f7329a771a7c5ed880d19c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

