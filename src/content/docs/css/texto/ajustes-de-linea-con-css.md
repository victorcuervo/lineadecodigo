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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EA3KJDA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T183221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNdb3VgtjRkHPFJLwSVWItqiu4iWqKI6RKJktGsu3YtAIhAOx8KsdzmPKAUO0L53qD4PYFKk2Beo7P8CULG0%2FBDHk0KogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxI4k7BpBxgNqRHhW8q3AN97M8%2BPxD98q4Lc3CITW1sKNL4DF9NE1di%2FvnBDx6KCnLv62HYzxuXwtLKg2S6JTKK1vBcmLyYEE9CcXKnIJbFBEqpBy6V5s1sXi4KmiNMAPsJGhdNpwlaRhGc2MAiiXTs9P7BCWyFHUg3JtEZWjeGL6FqL7l4CObeb%2BzjWrijYk2OQNppgAw75rTdbVpm3bQQe3a3t83xDSMS%2F%2BPbQW071nA6YC4DN9VxcvKzXjF6GngpT97j7ozsEXUH8EsxOlgBGfVMB1BBwzy7IaeN8MS8FwldyBNwZ%2B5A5bmbahUqNo4hBrdER3llX0QZApVJYRktojbADll%2BFH%2FzXH5c5qgUs6KMoIQapk2kgavGXKwsBV5o7OIwFJBuShg6JA6Ul%2FU39EbwFQsH84q2pter3VOXFxrXNRWGmr1VwlbjBQXYNG7bwjdX6IxCDjhYZaO6PtMmubjd9Eae2SVp4zNRgixiIPQAHqpJoASur9yAsmJOQaU92OJMjmxTBKzvI520yU1WOiAR%2Fw16ieNwOlfXeDPF8%2BMvzVxhTPJv%2BqTmymAMhHlMXpIccSGAamLr9bAaoJVZX1r0H%2FG6EyaN6SAw0b4QUWrjvlICbDfTzQpJxP%2BuSQzfZj3FWVN0U7GNzzDZnovKBjqkAbyrSY7tiXJmXHGBMG6qTpPS64bZXj%2B7UW%2B7qFYE5W%2Fe3XZOq3Bg5QbZ7wBbmfSCtAaaz%2Fz8KTJ8Jfq%2F449DxBkx1zFBG0kNoHA1nL0Au1YpftCf77Cane%2B1gGmLzkOZg3p23hbWJXxWZKDr4pSrjL1NdQY5a9s2xfRhykMI108nDquOIxWKSTckii5zWg2Int9EkOsmKK0EzTiEjo1hXrWSWLLW&X-Amz-Signature=857e9fcfc5e498f242fc4c4cb826d7892260ebbbb2240d53b0fbc8e69af5a7ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EA3KJDA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T183221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNdb3VgtjRkHPFJLwSVWItqiu4iWqKI6RKJktGsu3YtAIhAOx8KsdzmPKAUO0L53qD4PYFKk2Beo7P8CULG0%2FBDHk0KogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxI4k7BpBxgNqRHhW8q3AN97M8%2BPxD98q4Lc3CITW1sKNL4DF9NE1di%2FvnBDx6KCnLv62HYzxuXwtLKg2S6JTKK1vBcmLyYEE9CcXKnIJbFBEqpBy6V5s1sXi4KmiNMAPsJGhdNpwlaRhGc2MAiiXTs9P7BCWyFHUg3JtEZWjeGL6FqL7l4CObeb%2BzjWrijYk2OQNppgAw75rTdbVpm3bQQe3a3t83xDSMS%2F%2BPbQW071nA6YC4DN9VxcvKzXjF6GngpT97j7ozsEXUH8EsxOlgBGfVMB1BBwzy7IaeN8MS8FwldyBNwZ%2B5A5bmbahUqNo4hBrdER3llX0QZApVJYRktojbADll%2BFH%2FzXH5c5qgUs6KMoIQapk2kgavGXKwsBV5o7OIwFJBuShg6JA6Ul%2FU39EbwFQsH84q2pter3VOXFxrXNRWGmr1VwlbjBQXYNG7bwjdX6IxCDjhYZaO6PtMmubjd9Eae2SVp4zNRgixiIPQAHqpJoASur9yAsmJOQaU92OJMjmxTBKzvI520yU1WOiAR%2Fw16ieNwOlfXeDPF8%2BMvzVxhTPJv%2BqTmymAMhHlMXpIccSGAamLr9bAaoJVZX1r0H%2FG6EyaN6SAw0b4QUWrjvlICbDfTzQpJxP%2BuSQzfZj3FWVN0U7GNzzDZnovKBjqkAbyrSY7tiXJmXHGBMG6qTpPS64bZXj%2B7UW%2B7qFYE5W%2Fe3XZOq3Bg5QbZ7wBbmfSCtAaaz%2Fz8KTJ8Jfq%2F449DxBkx1zFBG0kNoHA1nL0Au1YpftCf77Cane%2B1gGmLzkOZg3p23hbWJXxWZKDr4pSrjL1NdQY5a9s2xfRhykMI108nDquOIxWKSTckii5zWg2Int9EkOsmKK0EzTiEjo1hXrWSWLLW&X-Amz-Signature=e96eda3dd721027d8ff84d59299a7bae191c328af8f227d640a44c92482d4f2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

