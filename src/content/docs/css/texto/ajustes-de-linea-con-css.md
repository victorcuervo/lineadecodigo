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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HYHX6TY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T020253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFOa%2Fvjm7%2FllXKUpHRuk3c7ERYQf19ZhJ%2F7K2u4aXPUCAiBxNKXmjUrr2B%2F7LrUT%2BonOihXvqOHNX%2FmywN9UQK5N%2Fyr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMTECe5CvkNlxoLRkCKtwDoe3Ck3TPWkdvks2vA4pEyOQALtlGLFgOSl30m4%2B0U6hqfvdUAz6AEMTL7IBLvMC6oDYILM%2B77%2BrQEtsvWJDLtDScnQeNp4cGLzArIohnS8OnxAeZKtr1uOchoYXH4eoekwf9Y67yGeF8ttOYBd6ChSXgZmh9%2FRKj20jv2hmAqSIAmIz214vi5mOTLirI5NVwCG1nA94cgTljA%2FvQLob7kIoC5HGbVfKKW8jyg72EOelaUv5zadBTXO3a%2BBt0lSwF%2BqmY1Ftqwe4W0abrZxY5x3qFQA%2FlZW9j8zQjhkFesjiEFmtzRJiDXuwbwdPvldvgUteVTR6ClvzDyJ3gKhN3m7Px4yz7eSVoZkEUmwx71ZQhKPi4OGy%2FPxMQwpgz3xU6No6%2FJWOjJD9IASsUDVluDzIZJ9gJylDNkch54L44ZsekOZbIwrcW0uKtW64EpLYI8bwSs4XzsEP0aWFf0RuX4qM37EJgvfYac12tuH8UZVOvD43r%2Bz0ILpLR9lcbBfAuiOe5FXnjuj%2FIOJkLlIwfkGzpLmeVkR3VX8Ng2dEuX2SeC%2FKKoubrhJ6rmuhmFeC8T5LrhVgFrzGXHTby%2BFWFCJfIup%2F0ar6GgCqGXVYqEq2KCNdeNV0s1o0Je4Mw75aIygY6pgH1SxbXHAWM8Fx9NHnM98YVEEBnUiLOqFcdZEjbHMgvVZXh0Q8bK0pWB7L5hJ0oKAwkoaL5a0HPSqEfh7pXmaeSFzCqZ9D%2FwJLLNatoAIgKjU0fsRQ2m0mq3C8smuMxdiRvc3VJj7RgEJk4%2FYWIYswD3sfrL%2B2GrR3z54sPQUd%2BJOSV8xj4v6oFeZ0BbagdQg5masfUCoRG1Dkk3mHCQ7RPKvOZ4u%2F2&X-Amz-Signature=b14df5d9177446c30b61502c3f4a654b1fb37c78e522249053c255e9cac98f7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HYHX6TY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T020253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFOa%2Fvjm7%2FllXKUpHRuk3c7ERYQf19ZhJ%2F7K2u4aXPUCAiBxNKXmjUrr2B%2F7LrUT%2BonOihXvqOHNX%2FmywN9UQK5N%2Fyr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMTECe5CvkNlxoLRkCKtwDoe3Ck3TPWkdvks2vA4pEyOQALtlGLFgOSl30m4%2B0U6hqfvdUAz6AEMTL7IBLvMC6oDYILM%2B77%2BrQEtsvWJDLtDScnQeNp4cGLzArIohnS8OnxAeZKtr1uOchoYXH4eoekwf9Y67yGeF8ttOYBd6ChSXgZmh9%2FRKj20jv2hmAqSIAmIz214vi5mOTLirI5NVwCG1nA94cgTljA%2FvQLob7kIoC5HGbVfKKW8jyg72EOelaUv5zadBTXO3a%2BBt0lSwF%2BqmY1Ftqwe4W0abrZxY5x3qFQA%2FlZW9j8zQjhkFesjiEFmtzRJiDXuwbwdPvldvgUteVTR6ClvzDyJ3gKhN3m7Px4yz7eSVoZkEUmwx71ZQhKPi4OGy%2FPxMQwpgz3xU6No6%2FJWOjJD9IASsUDVluDzIZJ9gJylDNkch54L44ZsekOZbIwrcW0uKtW64EpLYI8bwSs4XzsEP0aWFf0RuX4qM37EJgvfYac12tuH8UZVOvD43r%2Bz0ILpLR9lcbBfAuiOe5FXnjuj%2FIOJkLlIwfkGzpLmeVkR3VX8Ng2dEuX2SeC%2FKKoubrhJ6rmuhmFeC8T5LrhVgFrzGXHTby%2BFWFCJfIup%2F0ar6GgCqGXVYqEq2KCNdeNV0s1o0Je4Mw75aIygY6pgH1SxbXHAWM8Fx9NHnM98YVEEBnUiLOqFcdZEjbHMgvVZXh0Q8bK0pWB7L5hJ0oKAwkoaL5a0HPSqEfh7pXmaeSFzCqZ9D%2FwJLLNatoAIgKjU0fsRQ2m0mq3C8smuMxdiRvc3VJj7RgEJk4%2FYWIYswD3sfrL%2B2GrR3z54sPQUd%2BJOSV8xj4v6oFeZ0BbagdQg5masfUCoRG1Dkk3mHCQ7RPKvOZ4u%2F2&X-Amz-Signature=c530b76f4e95a049720d2a145bd495c7f0d81c61c2eef07dc674f6232311d00b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

