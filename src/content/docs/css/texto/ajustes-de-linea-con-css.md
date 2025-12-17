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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QGGJO5Z%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T095843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKnppQEZFPRwHee61AEvUzcUq26nMyrTZvmUDiRp7vJgIhAP8Tsa8fh%2BA8ypAzbquOjs6F1CoQqoT7XRElnR6QWy01Kv8DCHoQABoMNjM3NDIzMTgzODA1IgxfG%2BkIf%2BC2TyOBLuUq3AMAIxkDcjhFm7dvmnpi2oyEgsgBrG64dHHsdZE8rsUW1NjnRimIj7aXjq3Z%2FA93BXGdoHY%2FEKsRG3VckCCZKn%2F99CAZ8XmdXnF0k%2FqIoyhn1Mvsc%2BWXLP5FLp7IZ8GArIBqnfYIulET5mJnT3tJRTAAoKOMBqKv1mTcoi3kGheZvyNoK2bClrxhPnJoG%2BPvj3fsnM1S7EG9j%2Fn1VoPqCmOjoGXVkwgaltTzsZ9mK2d89mwt5PIu5XOkNxGfV4X0veij76d0%2FOuhYA5x8l%2FyDVSdz5czK0jIkaAKaf1%2FIDSXLO1dRajgI%2FyhfXtI0vx3EynAQzW7X%2Btr6yw%2FiE4Pgaf8CNxY6OifD50fNW%2B%2F7gJYL5pR6EydIGSn5dBchSTMy4uU4DUP8J247vrt81oJJwhvKnJv0tskbrhvvKPrLj4czEx5ZEtSzVsvvjMhKPJTBACwz0faTHQPpCFZz7QiCR6Yq32LZY%2FeXCDM6d9wZgXOPnj05zICUhj95SwniosWXZLZyx4iUyBC2KtDKJyNIoZZ%2Faeh6OAQjJjhY8gFbnbRiIKgIq%2BB%2F6PdcuEorMmU%2B2Hs0OL5xo6thlDDx2KBBOyI1uPcAe%2B8AzKyDKSbgWMkl8lYkorXv1Q1hJA2STCu8InKBjqkAXA9QlDVU5YeDguqADPV%2BGd9h9ELFqyCIFckdmt2R8GRculGSJXA02PTv3ZgwY0iKRuevkFnj2ZifLaFWNXHbK3VOVP87cdYuVsDvLWKc5qcyeuzG5UAromOSiSgJdaAdQclmJhZhzVXCpmkiRoVb0kgV04uToyqzK5RQz%2FycSGWGpQS59XrAdM7RDhHhuo8ItL19dhLCopJF%2BiV%2Bj3PSzb2g3iX&X-Amz-Signature=7947459636cbf96fc269ecf5d8876066b3aa54cab9652ecc2f6e52705a49cf4e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QGGJO5Z%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T095843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKnppQEZFPRwHee61AEvUzcUq26nMyrTZvmUDiRp7vJgIhAP8Tsa8fh%2BA8ypAzbquOjs6F1CoQqoT7XRElnR6QWy01Kv8DCHoQABoMNjM3NDIzMTgzODA1IgxfG%2BkIf%2BC2TyOBLuUq3AMAIxkDcjhFm7dvmnpi2oyEgsgBrG64dHHsdZE8rsUW1NjnRimIj7aXjq3Z%2FA93BXGdoHY%2FEKsRG3VckCCZKn%2F99CAZ8XmdXnF0k%2FqIoyhn1Mvsc%2BWXLP5FLp7IZ8GArIBqnfYIulET5mJnT3tJRTAAoKOMBqKv1mTcoi3kGheZvyNoK2bClrxhPnJoG%2BPvj3fsnM1S7EG9j%2Fn1VoPqCmOjoGXVkwgaltTzsZ9mK2d89mwt5PIu5XOkNxGfV4X0veij76d0%2FOuhYA5x8l%2FyDVSdz5czK0jIkaAKaf1%2FIDSXLO1dRajgI%2FyhfXtI0vx3EynAQzW7X%2Btr6yw%2FiE4Pgaf8CNxY6OifD50fNW%2B%2F7gJYL5pR6EydIGSn5dBchSTMy4uU4DUP8J247vrt81oJJwhvKnJv0tskbrhvvKPrLj4czEx5ZEtSzVsvvjMhKPJTBACwz0faTHQPpCFZz7QiCR6Yq32LZY%2FeXCDM6d9wZgXOPnj05zICUhj95SwniosWXZLZyx4iUyBC2KtDKJyNIoZZ%2Faeh6OAQjJjhY8gFbnbRiIKgIq%2BB%2F6PdcuEorMmU%2B2Hs0OL5xo6thlDDx2KBBOyI1uPcAe%2B8AzKyDKSbgWMkl8lYkorXv1Q1hJA2STCu8InKBjqkAXA9QlDVU5YeDguqADPV%2BGd9h9ELFqyCIFckdmt2R8GRculGSJXA02PTv3ZgwY0iKRuevkFnj2ZifLaFWNXHbK3VOVP87cdYuVsDvLWKc5qcyeuzG5UAromOSiSgJdaAdQclmJhZhzVXCpmkiRoVb0kgV04uToyqzK5RQz%2FycSGWGpQS59XrAdM7RDhHhuo8ItL19dhLCopJF%2BiV%2Bj3PSzb2g3iX&X-Amz-Signature=c8523f720d12c7e496ff5f984b4c5213b3eb43ee0ea299ad6b2503cb9bac5299&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

