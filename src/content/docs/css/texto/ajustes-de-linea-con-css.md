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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVOUR2OT%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T050712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCwxcjVXFbPm%2FN9cPAn8AH6ylOUx02Uo5c1ovydyeYqAAIhANCm%2BUaIm4By2pzO%2BbeSKqD2WpccdPtFZCg3O%2BvGruIEKv8DCHYQABoMNjM3NDIzMTgzODA1IgwG0%2B%2FFMtoQvGVX%2BqUq3APg4Qw3HoQQ5HFUUmnnUHQ5f%2F4YFu6rzPM%2Ft9xlyAc4p56v382dI0buQ02a62FQ3ghSOCN5qZOGfF9nutEHJjscxOmaLLTFLQUN9TszfcOBvOnv8t2x964oTnhW7EIULbmBbWSXzNqnH6eYHhNKlOGmptlIITwfIVByyN8gwzX0m3U%2F8Ptjxbxo8EGGD7wri%2BG4URESlVuJSkOcBzCG0p99pS8X9%2FY3Rsu%2BbYl2ZWgiMdWiTAQlpvcNVZj5NxG9cYSsKIOAAC1zzXZtsGdGu3FaUf2DNoJRvDYMhT0GNRXEXikR%2BMXB%2BmmIo8ZPe%2FO8gt18gNE7Th47a9%2BlDP9XgXz32H4pvuOe0q0gHlfFl35k3avTfhqV5qISqbHqvNq1rVoUpz8xprrinjBMl4d%2FQ3CYe8UHwsnE4Mb4ry4Oy%2F35JBoWZQaPIvAopJjyS4GSv5qGf9%2F6xHuk04fNeNBgM6sMggvlec%2Bt0Mbi2QA0WcTGfEyGy7BqMbKDzYFWBb6%2FyBGgwd%2B1FpR6wltC8oWXE5IEJEMQdph6Ha3W%2BIfqMcGl%2FdUNnCErkqsN%2FhhSkSMKwYFV8UI0qgQuKEcy93abZS%2FXHP%2FupFOPpzWcYXcQAtcGA9tMe4qXVbL2WjRSuTDy6YjKBjqkATEzCmNgdEAZwNTrbMD5i7a2wquajup5ttK%2F7H5yraPO5YOWLXalR%2BNXvJj7wUoo6ieNqyqGQW5o0Vqt44%2FT5iliQRRlXsfcu8UGNDxGhji2K2CjPoJ4EXUCWhyxBYJBUOyCf5ENIgUXjoQHoJ0t3xYEiRXAGJtoW0G6ATPk2ss9Wy19RUmWOdAWfuy3n%2BiRWGek6LaSSQmDXr2kHIiH6y8qJ5mC&X-Amz-Signature=a30d5de51e0ce32d3acaf655fbe7061fdc6ac998adf40ccf41175bb20ee80e8b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVOUR2OT%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T050712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCwxcjVXFbPm%2FN9cPAn8AH6ylOUx02Uo5c1ovydyeYqAAIhANCm%2BUaIm4By2pzO%2BbeSKqD2WpccdPtFZCg3O%2BvGruIEKv8DCHYQABoMNjM3NDIzMTgzODA1IgwG0%2B%2FFMtoQvGVX%2BqUq3APg4Qw3HoQQ5HFUUmnnUHQ5f%2F4YFu6rzPM%2Ft9xlyAc4p56v382dI0buQ02a62FQ3ghSOCN5qZOGfF9nutEHJjscxOmaLLTFLQUN9TszfcOBvOnv8t2x964oTnhW7EIULbmBbWSXzNqnH6eYHhNKlOGmptlIITwfIVByyN8gwzX0m3U%2F8Ptjxbxo8EGGD7wri%2BG4URESlVuJSkOcBzCG0p99pS8X9%2FY3Rsu%2BbYl2ZWgiMdWiTAQlpvcNVZj5NxG9cYSsKIOAAC1zzXZtsGdGu3FaUf2DNoJRvDYMhT0GNRXEXikR%2BMXB%2BmmIo8ZPe%2FO8gt18gNE7Th47a9%2BlDP9XgXz32H4pvuOe0q0gHlfFl35k3avTfhqV5qISqbHqvNq1rVoUpz8xprrinjBMl4d%2FQ3CYe8UHwsnE4Mb4ry4Oy%2F35JBoWZQaPIvAopJjyS4GSv5qGf9%2F6xHuk04fNeNBgM6sMggvlec%2Bt0Mbi2QA0WcTGfEyGy7BqMbKDzYFWBb6%2FyBGgwd%2B1FpR6wltC8oWXE5IEJEMQdph6Ha3W%2BIfqMcGl%2FdUNnCErkqsN%2FhhSkSMKwYFV8UI0qgQuKEcy93abZS%2FXHP%2FupFOPpzWcYXcQAtcGA9tMe4qXVbL2WjRSuTDy6YjKBjqkATEzCmNgdEAZwNTrbMD5i7a2wquajup5ttK%2F7H5yraPO5YOWLXalR%2BNXvJj7wUoo6ieNqyqGQW5o0Vqt44%2FT5iliQRRlXsfcu8UGNDxGhji2K2CjPoJ4EXUCWhyxBYJBUOyCf5ENIgUXjoQHoJ0t3xYEiRXAGJtoW0G6ATPk2ss9Wy19RUmWOdAWfuy3n%2BiRWGek6LaSSQmDXr2kHIiH6y8qJ5mC&X-Amz-Signature=e8e9a125ab36df5dfb7a206073cc6dc08f351f2c6efc945768794797c114ccbd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

