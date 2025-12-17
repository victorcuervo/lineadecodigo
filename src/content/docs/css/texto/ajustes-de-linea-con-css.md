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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ENSPZ6H%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T124545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUdTpRKXxJJO%2BJIuXlq8tHhvMs2nnT96fKzxfGd%2FyY5gIhAL3bXO2xlbqVtOZZfqGxYAZsU9P9u2mf8gaPtLwZ5c%2FlKv8DCH4QABoMNjM3NDIzMTgzODA1IgytWMuQEcit0dnoxwAq3AMF1F%2Bk%2FkwBU295HmSVP8xBx30W6OC7U7LsiX0x55TpoU5FfuU3xKCPEO6sghvXFjsqZrL58y6xJYx4xuw86XaxfL7rxnLpO0dDHNsl5FsSUQXC2uCiN1bpRYG%2F%2Bnphld5g%2F2HNOfyej8fjSQMkFozqfH96fMCVgdalz6tG5L6KmNcpWxdr0BCLpg4D2h%2Fzriz0A2EpBRkSG6bfHeyqJbQaFS0g4oQPJH%2BKOdaNKG0i7qMAjy1C6vV1RioH6WEMzCq35eivTK0YYlrXhGJ5qnal9vocj%2F20%2FOMxxvFSIenviGz5YW%2BDryQzEMHS%2BhRbe8c%2F5%2F4xVdyh79rvNChM89ggMnj76k0n7%2FvMFrZku8tAGBmE8IRyBvhUckKpHc7BgrT2vW%2BWnX%2F4ezU9KMcAwvS5y96ENFAqvTZqqYv1MkXcHvkdLUsV6XlAcNHBAVWny7706jyPVGrExq0pdxDZkc4%2BNgQ3RFLXrG3K27525AiNn5CX05CgqGAD1CfJnctXqXjSKGXvWXTzRgLgyHFq8BoUnEm1ebKhIHCG2oM1bd3Ei01Ae1klQlIYK8pWbSj6DnL9NEirX%2BSmtI%2B46e%2BbopwAX3cQFBFbQh1FXIWVE6Mp4X8Z5zC4IA9Paf4w%2BDDkxorKBjqkAeLMqUf8n5fxTW%2F1i19Mia8brkIPgLJ47qAxDhYmhCDzwsYpXLj5zaiqqJZTZt2K6SLYSrDDsSPAqySKqCjpTYE95KoBLbefkyQz509Ku5fciTDz6CnfLe%2FOyppSBIr%2FTw3x%2BTBsG5MdBq3xAITSQPesPmFbU8PlVySvzf0IN9n4QfQZ8LIM1Kt%2Byb6nR9GiWhtx12cqZRiycZlaSBxhS0LKmVyS&X-Amz-Signature=ce7239ea3e621c3305e75a55bb973e3ad8f1ffa6abfb731e59d251806ceb41b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ENSPZ6H%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T124545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUdTpRKXxJJO%2BJIuXlq8tHhvMs2nnT96fKzxfGd%2FyY5gIhAL3bXO2xlbqVtOZZfqGxYAZsU9P9u2mf8gaPtLwZ5c%2FlKv8DCH4QABoMNjM3NDIzMTgzODA1IgytWMuQEcit0dnoxwAq3AMF1F%2Bk%2FkwBU295HmSVP8xBx30W6OC7U7LsiX0x55TpoU5FfuU3xKCPEO6sghvXFjsqZrL58y6xJYx4xuw86XaxfL7rxnLpO0dDHNsl5FsSUQXC2uCiN1bpRYG%2F%2Bnphld5g%2F2HNOfyej8fjSQMkFozqfH96fMCVgdalz6tG5L6KmNcpWxdr0BCLpg4D2h%2Fzriz0A2EpBRkSG6bfHeyqJbQaFS0g4oQPJH%2BKOdaNKG0i7qMAjy1C6vV1RioH6WEMzCq35eivTK0YYlrXhGJ5qnal9vocj%2F20%2FOMxxvFSIenviGz5YW%2BDryQzEMHS%2BhRbe8c%2F5%2F4xVdyh79rvNChM89ggMnj76k0n7%2FvMFrZku8tAGBmE8IRyBvhUckKpHc7BgrT2vW%2BWnX%2F4ezU9KMcAwvS5y96ENFAqvTZqqYv1MkXcHvkdLUsV6XlAcNHBAVWny7706jyPVGrExq0pdxDZkc4%2BNgQ3RFLXrG3K27525AiNn5CX05CgqGAD1CfJnctXqXjSKGXvWXTzRgLgyHFq8BoUnEm1ebKhIHCG2oM1bd3Ei01Ae1klQlIYK8pWbSj6DnL9NEirX%2BSmtI%2B46e%2BbopwAX3cQFBFbQh1FXIWVE6Mp4X8Z5zC4IA9Paf4w%2BDDkxorKBjqkAeLMqUf8n5fxTW%2F1i19Mia8brkIPgLJ47qAxDhYmhCDzwsYpXLj5zaiqqJZTZt2K6SLYSrDDsSPAqySKqCjpTYE95KoBLbefkyQz509Ku5fciTDz6CnfLe%2FOyppSBIr%2FTw3x%2BTBsG5MdBq3xAITSQPesPmFbU8PlVySvzf0IN9n4QfQZ8LIM1Kt%2Byb6nR9GiWhtx12cqZRiycZlaSBxhS0LKmVyS&X-Amz-Signature=ef2f7768a674195608f983eae243cd5f7595773a916c34bb6d43b34f43b9b349&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

