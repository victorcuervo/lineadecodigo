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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEXU3KYZ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T121525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHFynZR9e6G8GcUwkbZtEIP6fdFQPuqPzDlVhbZ34scQIhAJFO7iOV82cvzOG2%2FTo3%2Bq04E3nfB84BvUBvCU5lpeXTKv8DCH0QABoMNjM3NDIzMTgzODA1Igy%2BWykDfAfnhekknckq3AMIHmCBzd16ZtTPGNqDGdqKh2iwBtyDSSYHK1SJNU2gS9vN9jbhk9oqdsc0FsLRCWtpfSs2PwttbuV1ubJz2h9u8pZi%2FbfiF2G261Nxi5ttYjnN0OzCmBKnvHKxErgxKDn3CakAAamxR4b80b57xiGJOOQdnDABViVMeNAi%2FAXPiiGTp4Bd0iFRcp8HF23gL%2FAwsKIGP4WHzlGKbmuGQHxr9jEd4CHobIc%2FqIImhapGLosHZT5ffe%2Fz5VSqFPCcqFqrJQaSo5MBpaZYqxPzNtuVWz0K1tSx4vv7G0SA2YbZ0AP35VuNgsz%2FSGBoOy4LR0oJJXl79KRZOWjnGMN35NLOrRfJ9sYlnDvlDBez7HYIQoFcswpkCzoZ4F9Nk6KQKgQq64jrhAorU1vW8qoqXnSAT7NHPESRQnvjGVOghwSjSPLjnX7XjRkXdmmXRRVJYyNNcl48XVBO0CXKwnQGst3kGZyI3ucRz0Xifc6%2FGy0Axy2iw1qis9EKTv5XTBxE0NF%2FjrQB1v68wF5baMgvhYcsx%2Fxs3LFphoBAIuKYDUElo6Eytcd5aXJDe%2BqgX6WU%2F3gJ4ixtQG2QeQFRqFhcBVe1mWSzEcVZPZ9nAMLzqBuAc8Dl7mjZa0I8AqUz3DCPq4rKBjqkAXhPla1AuIW3LwGCbMOUcEKqnso%2FUnRzQUWmUPWcJCTP%2FyBXohldLBxqkhb9OFFrFIcBMnKxnnU94vfJoYlYiXQAyXQc7wJTeHm0MEzsOXAQYCzJ7UdqtL9DQKcFXhjn5u4xNHzVAlljfoiKwNmkRwEAg89fUhYOiWK49y8UHWwtFuTHcWgFxzrc6D2MyctmZ0vI3V%2FlKQrMMXPZx578zE3ytqMy&X-Amz-Signature=e2948dcff016221550d6c801acd151469fe151c250403969de5d30c0c7fb45d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEXU3KYZ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T121525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHFynZR9e6G8GcUwkbZtEIP6fdFQPuqPzDlVhbZ34scQIhAJFO7iOV82cvzOG2%2FTo3%2Bq04E3nfB84BvUBvCU5lpeXTKv8DCH0QABoMNjM3NDIzMTgzODA1Igy%2BWykDfAfnhekknckq3AMIHmCBzd16ZtTPGNqDGdqKh2iwBtyDSSYHK1SJNU2gS9vN9jbhk9oqdsc0FsLRCWtpfSs2PwttbuV1ubJz2h9u8pZi%2FbfiF2G261Nxi5ttYjnN0OzCmBKnvHKxErgxKDn3CakAAamxR4b80b57xiGJOOQdnDABViVMeNAi%2FAXPiiGTp4Bd0iFRcp8HF23gL%2FAwsKIGP4WHzlGKbmuGQHxr9jEd4CHobIc%2FqIImhapGLosHZT5ffe%2Fz5VSqFPCcqFqrJQaSo5MBpaZYqxPzNtuVWz0K1tSx4vv7G0SA2YbZ0AP35VuNgsz%2FSGBoOy4LR0oJJXl79KRZOWjnGMN35NLOrRfJ9sYlnDvlDBez7HYIQoFcswpkCzoZ4F9Nk6KQKgQq64jrhAorU1vW8qoqXnSAT7NHPESRQnvjGVOghwSjSPLjnX7XjRkXdmmXRRVJYyNNcl48XVBO0CXKwnQGst3kGZyI3ucRz0Xifc6%2FGy0Axy2iw1qis9EKTv5XTBxE0NF%2FjrQB1v68wF5baMgvhYcsx%2Fxs3LFphoBAIuKYDUElo6Eytcd5aXJDe%2BqgX6WU%2F3gJ4ixtQG2QeQFRqFhcBVe1mWSzEcVZPZ9nAMLzqBuAc8Dl7mjZa0I8AqUz3DCPq4rKBjqkAXhPla1AuIW3LwGCbMOUcEKqnso%2FUnRzQUWmUPWcJCTP%2FyBXohldLBxqkhb9OFFrFIcBMnKxnnU94vfJoYlYiXQAyXQc7wJTeHm0MEzsOXAQYCzJ7UdqtL9DQKcFXhjn5u4xNHzVAlljfoiKwNmkRwEAg89fUhYOiWK49y8UHWwtFuTHcWgFxzrc6D2MyctmZ0vI3V%2FlKQrMMXPZx578zE3ytqMy&X-Amz-Signature=3ba7fb26fdec48643a7eeba59e0cade4d0ecc504e7bafdbdc3fe9b5d39e7d222&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

