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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKU37ZMP%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T014929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF0LJpJWW2uSiQOY05gWNVs01hADhITM8WrbAfOd9HzQAiBMYELk9vSyq5ceQJWOp0HGtnURePmtaEOG3cyyGrrRxyr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMZY7M%2FcUqofgND4FxKtwDTL09dlvw8BcgFWfNm5hcjmvFQanmmtExEKN8Q49Gj%2Btaz2OqtItb%2F9T%2F1GAAwIn9WHDxolhdp6SeqdfR6DpIuHKhBmTLgCvZ%2FXVDbmOLrh%2FoOLCu2Urh5ci7NHAchz0gRcxYGbbIN9REhFMM3XWMvqfQZfCp9OAs6IAP2zuI05NDfHMMN4VgkoJxJQlFopZGr1Ija0lCJI%2Bk4zdSFCXKykQ4LyDoIwVPuG82YzWloskb32Ly4tfdJnnWZ%2BG%2F8QQHgK4BAKbDIkbEzTPrjJ5ZHTM8WAbOrvIKJZC6YT8qLXH3T0o8WeiyThLQ5gpJ6THBUBgZbKfJMn14tYxkwUVUV%2FBgWWaVlB6rot7yfhjEoR%2Bn1xbV%2BmRUCc1YC97jl3D%2FYpJh9VRI4Ny1vkCHM9vX1rz%2B0fMbAuwkxoBDW5PPb4wkVfznYTunmri1G7i6DTXt22s7jZluCkK%2B3DwtaDajkrkoRTJThpO1QvqLvirtmxLxD9xK8%2FhCYuVKZyYurbwrFBk18ECVtG9Ysu7XZ0LO07vdVbE9e%2FmKM5mDaaiTOMyHIjDGY7%2BoOZIouHnCgMaZg7jUd4C6f87elrx7f5U0NpqfOUFyFPxXWC9244wPUCUCLiBf1uFqwFFJ5MUwkpeIygY6pgH7WR3AECbwRmEAf2WlJyzcVmLo%2FutBKn4RjViaHTrUJ0D9r345Q69c32w3NDBFSf9LHHMMqFAuH1kzxThSk20m7bKwQ45wBpP5BmmiJq51u2Lu7Y98i6omlSkzEGkgWUTw9WdTcPYPLnDOQ9l5C7TzMAZh8N%2BaT2kBiXAav2UwPfdUzgkbXlY4RWafKY7tGiZOWV1c9xADXpg0WC1zhFRHiVxhJCvR&X-Amz-Signature=25519d63b21fc4b372323096ff29a41eeb0f410985ee330385e892f8ba2976ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKU37ZMP%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T014929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF0LJpJWW2uSiQOY05gWNVs01hADhITM8WrbAfOd9HzQAiBMYELk9vSyq5ceQJWOp0HGtnURePmtaEOG3cyyGrrRxyr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMZY7M%2FcUqofgND4FxKtwDTL09dlvw8BcgFWfNm5hcjmvFQanmmtExEKN8Q49Gj%2Btaz2OqtItb%2F9T%2F1GAAwIn9WHDxolhdp6SeqdfR6DpIuHKhBmTLgCvZ%2FXVDbmOLrh%2FoOLCu2Urh5ci7NHAchz0gRcxYGbbIN9REhFMM3XWMvqfQZfCp9OAs6IAP2zuI05NDfHMMN4VgkoJxJQlFopZGr1Ija0lCJI%2Bk4zdSFCXKykQ4LyDoIwVPuG82YzWloskb32Ly4tfdJnnWZ%2BG%2F8QQHgK4BAKbDIkbEzTPrjJ5ZHTM8WAbOrvIKJZC6YT8qLXH3T0o8WeiyThLQ5gpJ6THBUBgZbKfJMn14tYxkwUVUV%2FBgWWaVlB6rot7yfhjEoR%2Bn1xbV%2BmRUCc1YC97jl3D%2FYpJh9VRI4Ny1vkCHM9vX1rz%2B0fMbAuwkxoBDW5PPb4wkVfznYTunmri1G7i6DTXt22s7jZluCkK%2B3DwtaDajkrkoRTJThpO1QvqLvirtmxLxD9xK8%2FhCYuVKZyYurbwrFBk18ECVtG9Ysu7XZ0LO07vdVbE9e%2FmKM5mDaaiTOMyHIjDGY7%2BoOZIouHnCgMaZg7jUd4C6f87elrx7f5U0NpqfOUFyFPxXWC9244wPUCUCLiBf1uFqwFFJ5MUwkpeIygY6pgH7WR3AECbwRmEAf2WlJyzcVmLo%2FutBKn4RjViaHTrUJ0D9r345Q69c32w3NDBFSf9LHHMMqFAuH1kzxThSk20m7bKwQ45wBpP5BmmiJq51u2Lu7Y98i6omlSkzEGkgWUTw9WdTcPYPLnDOQ9l5C7TzMAZh8N%2BaT2kBiXAav2UwPfdUzgkbXlY4RWafKY7tGiZOWV1c9xADXpg0WC1zhFRHiVxhJCvR&X-Amz-Signature=380970a14d649fef2aa2387bc5c64f9910f90bcdb642377a0b28d05f5431b540&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

