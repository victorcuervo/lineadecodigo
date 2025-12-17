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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPK7WQ3X%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T071902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBTuCWPJD9gdk9J2EYiPCWcZc%2FUPau%2FzS1Fkv5zGHAdgIgQfA%2B9rA%2F6cenLvNrwwQSQfU8tqX%2BCUPXUnCQCNtcfJgq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDN4%2FvfvNUqQMr7OzFircAxBPJQiGZVBi3Y0ehrbM%2B9x%2FUVaiKb40FPxEFwxAwlyhhMWdFYtYmaMma9U2xyBC6VMP%2FldRGGZIi7OUfdgoUZS8zNvs7Udlvio9%2FqDErgfhYqAXG3x1%2FJOCjgwx%2FwiAAVbw0TF3MDCy%2BlYPhLu2F9JxKwBthLQedLVs755VsLvPaR8rt42JudrIjVu6N4RFBOdANEmzr%2F90zrtgw5enIlvc8RzGdavfarOddSXuWkHRsPVOHyPGLxZK3wd3b3gB0hTQeRee9ky0Kk9blJ%2BSLaS8bet3sMGXWy5uMIBcAwbTVjYjbNYsyqCEFl5Si4EhbPe2kcI4Pb3luHPzZxZs8rnXgjecr2c2dcser2d364wrFq0Ot%2FrW%2Fhkiaq4Xg%2Fv9EVMEBkGya0MsK%2B4DoVUAzPPB4Cff2hZBXAEVk5Lj3xlk1wGG83TSePDzTr0rTPDi9rrDshH1gITc%2BFUu06AenD7gtwhmkbkKEntH1h4DnmZgS5t3OirEP4L12uStWNHRYuRIkT%2BbPn1QV0CwSmGv83LAqVPY36cIXoiiCPc7cpYHjhlgXq1DuzxDv7eiHtspl%2Bjf5ZudYvO4t2ofwlRhRwblOJhMk2hYRPVPdQz1nqRHOgqW%2Fkqqsfup4QFPMK6dicoGOqUBBnfR52Mgk2IW3oIEyQ0hhaMHzfWYhheDmGeP5qZTQFjeCCWda%2BclwF%2BOkQUVZ8yhsc6vlaC9Y9hlxr0AuF8mo4IrZfecZiu13ucfh7iO%2FstZ2%2FJuz%2Bc7ELnipAAG%2BTBD2knfrB2ECtj5%2Fm1BooD6Vjq6iUWh3UVWqcgvGv7JRqvmhysYODgRj6ybQ3JIFlE0xiURUxA34As%2FC%2BZ7Ti3BoBriSCn%2F&X-Amz-Signature=d0bba19c3fcd36aa7bdb4398ad22ec437aa67ca9bbc2faf771428c55ac76399b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPK7WQ3X%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T071902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBTuCWPJD9gdk9J2EYiPCWcZc%2FUPau%2FzS1Fkv5zGHAdgIgQfA%2B9rA%2F6cenLvNrwwQSQfU8tqX%2BCUPXUnCQCNtcfJgq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDN4%2FvfvNUqQMr7OzFircAxBPJQiGZVBi3Y0ehrbM%2B9x%2FUVaiKb40FPxEFwxAwlyhhMWdFYtYmaMma9U2xyBC6VMP%2FldRGGZIi7OUfdgoUZS8zNvs7Udlvio9%2FqDErgfhYqAXG3x1%2FJOCjgwx%2FwiAAVbw0TF3MDCy%2BlYPhLu2F9JxKwBthLQedLVs755VsLvPaR8rt42JudrIjVu6N4RFBOdANEmzr%2F90zrtgw5enIlvc8RzGdavfarOddSXuWkHRsPVOHyPGLxZK3wd3b3gB0hTQeRee9ky0Kk9blJ%2BSLaS8bet3sMGXWy5uMIBcAwbTVjYjbNYsyqCEFl5Si4EhbPe2kcI4Pb3luHPzZxZs8rnXgjecr2c2dcser2d364wrFq0Ot%2FrW%2Fhkiaq4Xg%2Fv9EVMEBkGya0MsK%2B4DoVUAzPPB4Cff2hZBXAEVk5Lj3xlk1wGG83TSePDzTr0rTPDi9rrDshH1gITc%2BFUu06AenD7gtwhmkbkKEntH1h4DnmZgS5t3OirEP4L12uStWNHRYuRIkT%2BbPn1QV0CwSmGv83LAqVPY36cIXoiiCPc7cpYHjhlgXq1DuzxDv7eiHtspl%2Bjf5ZudYvO4t2ofwlRhRwblOJhMk2hYRPVPdQz1nqRHOgqW%2Fkqqsfup4QFPMK6dicoGOqUBBnfR52Mgk2IW3oIEyQ0hhaMHzfWYhheDmGeP5qZTQFjeCCWda%2BclwF%2BOkQUVZ8yhsc6vlaC9Y9hlxr0AuF8mo4IrZfecZiu13ucfh7iO%2FstZ2%2FJuz%2Bc7ELnipAAG%2BTBD2knfrB2ECtj5%2Fm1BooD6Vjq6iUWh3UVWqcgvGv7JRqvmhysYODgRj6ybQ3JIFlE0xiURUxA34As%2FC%2BZ7Ti3BoBriSCn%2F&X-Amz-Signature=d68810808f3f714d1418e29932b10a176252c828de960aa47212e45df3b7dcc3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

