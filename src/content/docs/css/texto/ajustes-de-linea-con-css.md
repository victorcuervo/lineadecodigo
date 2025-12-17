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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQXSLDSJ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T102936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDlYNaVo6T7QSUQbmzc0oxCj8%2F8KxRBJ6XGnQwQ%2Fk2T%2BwIhAJSFYDzhNTIYvmZdDxjN4RpDrvgPFNn9Yg5N7TXpu%2BMBKv8DCHsQABoMNjM3NDIzMTgzODA1IgwkcVB5Y%2BxleCUVmToq3AOfq9EXj0QwjMDdezoK%2BFzPSOc33nJniQNshVbw76mSspId4octBiTwLnXrXKPXHEAoIu6pnu1MB0uO3y4j57BxlkoiicUU2Hj%2Fp0amYBU%2Blvsg4SCZFyifr%2BhP9QF84HyYadIujqN5Eb4EV5lciM0%2FiPylfF%2FuAolWIcjdGAuoB6rNqbbTb1chCayE7Wybveqw9hJXnYpql2AOeG%2B5fuLR%2BBzPuGbke%2FtK0duFKeByNnmKTJWUcWjTMY67A0gjQ57JtO9A9uXNGihZ%2F5AedkMaqplwU1%2BWqE8qwmbz3FrKqjW%2B%2BiRbDqYK6k9BgkjB4Df8b1XOkGWMqg9vOd0qjBK4NID3ggoDoYV2b%2Fdx9zmnqq5mvHFVCU5m3Q0AAqGfNmWz8vT8G5v0euFub8zlYj4dr122NrexVqjaB0TIcuC99wSkydwAHt4OSfk%2FHYQ3LquYJdXEzP1PN3COjCY4HuPDRmoI%2B6hnsmAXFb02WR87t79F54ogkvfO3WznfuYlgsP34gGZnfvtEeJ2tKqUIPuo%2BlOEiW%2BctpNkJu3uE1kfIhoWtKtSBBLZ0BXWtcHKMYX8sjNq5PL3v3BLQOM6ARHPEJsSM%2B7Ukt3dIYuHtUWI%2FwYcXB%2Be2BBwrwK6xDD%2F8InKBjqkAStY4yDXyPsBfrJTkxAJ8tX5Ifi0dTuY1IM2gdmOhLY2vT11XJxlFdHz6CNUZ3ner56Vbkq6Bxkk3b%2FlLV%2Fa%2BLF57EfxId%2BinvGryrtsfOBrBmcuMHIMJepSLlclN5LhZyciJ7wrIZ5yo0SlbtnuyWuHRvFb6Mbbv%2BM2GSbXcNYf0MPkPTa6eTE9Ggl%2FBl8EjyUvhPmM3mGmVmF8z0RihYYM9sNE&X-Amz-Signature=01d58845c18b9363f7ff697bcfd3a03ebadcf6f8c435ad4feb24b14b1651d36c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQXSLDSJ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T102936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDlYNaVo6T7QSUQbmzc0oxCj8%2F8KxRBJ6XGnQwQ%2Fk2T%2BwIhAJSFYDzhNTIYvmZdDxjN4RpDrvgPFNn9Yg5N7TXpu%2BMBKv8DCHsQABoMNjM3NDIzMTgzODA1IgwkcVB5Y%2BxleCUVmToq3AOfq9EXj0QwjMDdezoK%2BFzPSOc33nJniQNshVbw76mSspId4octBiTwLnXrXKPXHEAoIu6pnu1MB0uO3y4j57BxlkoiicUU2Hj%2Fp0amYBU%2Blvsg4SCZFyifr%2BhP9QF84HyYadIujqN5Eb4EV5lciM0%2FiPylfF%2FuAolWIcjdGAuoB6rNqbbTb1chCayE7Wybveqw9hJXnYpql2AOeG%2B5fuLR%2BBzPuGbke%2FtK0duFKeByNnmKTJWUcWjTMY67A0gjQ57JtO9A9uXNGihZ%2F5AedkMaqplwU1%2BWqE8qwmbz3FrKqjW%2B%2BiRbDqYK6k9BgkjB4Df8b1XOkGWMqg9vOd0qjBK4NID3ggoDoYV2b%2Fdx9zmnqq5mvHFVCU5m3Q0AAqGfNmWz8vT8G5v0euFub8zlYj4dr122NrexVqjaB0TIcuC99wSkydwAHt4OSfk%2FHYQ3LquYJdXEzP1PN3COjCY4HuPDRmoI%2B6hnsmAXFb02WR87t79F54ogkvfO3WznfuYlgsP34gGZnfvtEeJ2tKqUIPuo%2BlOEiW%2BctpNkJu3uE1kfIhoWtKtSBBLZ0BXWtcHKMYX8sjNq5PL3v3BLQOM6ARHPEJsSM%2B7Ukt3dIYuHtUWI%2FwYcXB%2Be2BBwrwK6xDD%2F8InKBjqkAStY4yDXyPsBfrJTkxAJ8tX5Ifi0dTuY1IM2gdmOhLY2vT11XJxlFdHz6CNUZ3ner56Vbkq6Bxkk3b%2FlLV%2Fa%2BLF57EfxId%2BinvGryrtsfOBrBmcuMHIMJepSLlclN5LhZyciJ7wrIZ5yo0SlbtnuyWuHRvFb6Mbbv%2BM2GSbXcNYf0MPkPTa6eTE9Ggl%2FBl8EjyUvhPmM3mGmVmF8z0RihYYM9sNE&X-Amz-Signature=cd6dcfb0d919f0a9221b20969bd0cd294cbd5f3012d67659a655a9057da05f02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

