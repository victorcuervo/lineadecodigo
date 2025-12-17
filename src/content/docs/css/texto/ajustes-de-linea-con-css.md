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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NMKPM7J%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T052609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHO1nI7eLD%2FPxAEKJEDYd3JaJ2aplxbnRLOJaG8kSdzgIhAMqbzFwyb6vdvZDsUNydxFteNsre6zkjbqyrI5fk383EKv8DCHYQABoMNjM3NDIzMTgzODA1IgzIM5HWQ%2FXKVa%2FYZDAq3APs%2B5tV%2BF7fNwDRqeznrv8Nby0YxFbVW6Vs0xVWGzcW%2B0BVtF6xg%2BFUrw015wqGt28K1yLsMww8GFaSLWkO54sf5V%2FTfTA6SljXphnQs8AUGmY%2BT6W8NVxT7q9d8et%2FMzX5%2FCWBrWmHdY9WkeaGi6nAoN804s7w0UcNcArB6BO6%2FGPgXAiEkrgpUqS126%2F26LBVFsLVRs627RYYbfsjqu0Zec4Zf8f5WdA582ScQvsBYiiR0KDyEZzJtLEVb73SD%2B9JWGQWoJ1SSEBAA0QoRdX5c2eiGi4q%2BvhuGyZo11GxFVQMOGkmMJ%2FyBQloz5HDkapEYMbi6Zwq4EDgXdhNcoEPrLLlD1NfTCR%2BdXx0ZIAKfB93g8ZuNuhz0FBUfPtwM24sUDqf3HBIori7zT2SJ2eGY1N2jJcVUUU3QSOSb4Ut3fX1ceHhVdvAdHUw%2FQ%2BmzqxfiqnNjeY2kWmnFI9oXZamYPq%2FD9SOYr%2FkjgYE4uxeIYHZ4cp4OniKqq96ufKJSBzSPA0%2FqIndgv4i7vN66ZtQxnIqsLM8dfyzVB99gSaPBuB1Ic7MZsM%2FcWyyPS5II8CSxnPtPQEIV7DBBymhqVmLjfilqY1gD2UFsDsxTBHUfmu5kgAMvG5VE2uy%2FzCQ6YjKBjqkAXijMS5Qzb0O1H9WJibMikvGvR7OJuYSvYBAMzXnKUP0fm%2B%2FrsRnjDDuvuCTHr80UheJvfKC2fc%2BmJZFc%2FU6xIUVpUWtNYjQ2Zw1gttszSnmnz4wUVRm85qpgzphpVcuNf8gqZGKu5bzDjhTw1ej0bznebaWfFgfBSq28phe8tzF78tIxI8d3zuswO8OD7GekUaZFqyb4S4C%2Buwy063Sdiy7L075&X-Amz-Signature=1b8d7bf902ec4a28649a3d0b55d7a909e2b399927dd40bfedf31e75a379fe98b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NMKPM7J%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T052609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHO1nI7eLD%2FPxAEKJEDYd3JaJ2aplxbnRLOJaG8kSdzgIhAMqbzFwyb6vdvZDsUNydxFteNsre6zkjbqyrI5fk383EKv8DCHYQABoMNjM3NDIzMTgzODA1IgzIM5HWQ%2FXKVa%2FYZDAq3APs%2B5tV%2BF7fNwDRqeznrv8Nby0YxFbVW6Vs0xVWGzcW%2B0BVtF6xg%2BFUrw015wqGt28K1yLsMww8GFaSLWkO54sf5V%2FTfTA6SljXphnQs8AUGmY%2BT6W8NVxT7q9d8et%2FMzX5%2FCWBrWmHdY9WkeaGi6nAoN804s7w0UcNcArB6BO6%2FGPgXAiEkrgpUqS126%2F26LBVFsLVRs627RYYbfsjqu0Zec4Zf8f5WdA582ScQvsBYiiR0KDyEZzJtLEVb73SD%2B9JWGQWoJ1SSEBAA0QoRdX5c2eiGi4q%2BvhuGyZo11GxFVQMOGkmMJ%2FyBQloz5HDkapEYMbi6Zwq4EDgXdhNcoEPrLLlD1NfTCR%2BdXx0ZIAKfB93g8ZuNuhz0FBUfPtwM24sUDqf3HBIori7zT2SJ2eGY1N2jJcVUUU3QSOSb4Ut3fX1ceHhVdvAdHUw%2FQ%2BmzqxfiqnNjeY2kWmnFI9oXZamYPq%2FD9SOYr%2FkjgYE4uxeIYHZ4cp4OniKqq96ufKJSBzSPA0%2FqIndgv4i7vN66ZtQxnIqsLM8dfyzVB99gSaPBuB1Ic7MZsM%2FcWyyPS5II8CSxnPtPQEIV7DBBymhqVmLjfilqY1gD2UFsDsxTBHUfmu5kgAMvG5VE2uy%2FzCQ6YjKBjqkAXijMS5Qzb0O1H9WJibMikvGvR7OJuYSvYBAMzXnKUP0fm%2B%2FrsRnjDDuvuCTHr80UheJvfKC2fc%2BmJZFc%2FU6xIUVpUWtNYjQ2Zw1gttszSnmnz4wUVRm85qpgzphpVcuNf8gqZGKu5bzDjhTw1ej0bznebaWfFgfBSq28phe8tzF78tIxI8d3zuswO8OD7GekUaZFqyb4S4C%2Buwy063Sdiy7L075&X-Amz-Signature=06d3f7e195292a31e3a461080c38aff4c89260fde094a30f90ead9b3bf6b63b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

