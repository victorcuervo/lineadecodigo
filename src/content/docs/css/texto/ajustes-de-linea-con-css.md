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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKP7GPX5%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T195322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDDRfythF3or3QCCuSE%2Br96SQi67bJSUmL4zlUaYcyo3AIhAK0DjuMVqVbRMs4TObLlGyD8K0fwBIh66T%2BuJaCPW%2B2wKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyOfX4X9HGe%2FDS%2BBTAq3AN0L%2BbkXSXu%2BywwFQustwZUUUtb%2BnZNfoW37UGUtkba1TqmTOViwppuOp8Myxb2N%2FBxH9qX6rAbDK%2BCliNCrEAs8bgcKJxvTM0nD37qFypC76c5a8ILVSB7NslWniZFlWDGCDOQeGINan7AFIJfgjzAV6K1dFrjJEjmBHtxHJFczF1nDeqgXxSZ4l2Ste9ptHeSe%2FaQkv%2BCrX1CTAS9tfrSxz%2B2Z35fCXSu%2BEHTOP1XpUfYBapNxIZzop1xSseaLj34jPB0Sv9IfnmAZj6H66yGz0rgbEYSb8TA8IaCQxLNPPGgdXqqRYMYtX6c0yxXVjZZe%2FHHDB2OF07QXCFuQ%2FUy3wqX6fm4kvK59CmYwzyRxoSpmwuBebX%2FsAA0HrPZLRH5lw4wz69LZx59q9TuUa8IZ9KYK2tHV08wkBzPGcEmlLmkof%2BVGqYDejVvHOAWZG5FGDavppGihOR9wgI%2BzIrjw%2BZTABrxjTV%2BWoXkKrjuqSs38iWrvW9ktMko1VL127J4hIeK1ehf0ryCoD8PJABKQeepYbe8Jwkcf%2B7xqVvaYidXRX9T3JxL%2FJ7MzQwtXi%2BC0b5LO8O5kENed%2BlmGyKOCCS5iEH4ZfxurxgZRFvfuG6EkTMs4l%2B6iXgMOjDPiozKBjqkAVs%2Bq%2FgB9xXgwqXvlD1cdw02aNNglfxEqmDI2JOqztYq7EZnK%2BqaLF%2FYw%2FYsMWvcpCWmFJG6ogO4mQWor2Q0YxGCQjlyUSotflmwkuU2YF3eMXhdGSPyiLiAfkxd4mMUN2noOzL6EdTTEgb%2FbagN%2Bk6U65oEclTDADykrNlqv9ODYOiqI0gDUwI3RN%2Bb%2FvDhiUVu0vnKRbCqN142UR7RJG9WW%2B4e&X-Amz-Signature=04b20ec77cd4c342fb4af62252421aa6a44c1aa560013261628e7490317a5e8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKP7GPX5%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T195322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDDRfythF3or3QCCuSE%2Br96SQi67bJSUmL4zlUaYcyo3AIhAK0DjuMVqVbRMs4TObLlGyD8K0fwBIh66T%2BuJaCPW%2B2wKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyOfX4X9HGe%2FDS%2BBTAq3AN0L%2BbkXSXu%2BywwFQustwZUUUtb%2BnZNfoW37UGUtkba1TqmTOViwppuOp8Myxb2N%2FBxH9qX6rAbDK%2BCliNCrEAs8bgcKJxvTM0nD37qFypC76c5a8ILVSB7NslWniZFlWDGCDOQeGINan7AFIJfgjzAV6K1dFrjJEjmBHtxHJFczF1nDeqgXxSZ4l2Ste9ptHeSe%2FaQkv%2BCrX1CTAS9tfrSxz%2B2Z35fCXSu%2BEHTOP1XpUfYBapNxIZzop1xSseaLj34jPB0Sv9IfnmAZj6H66yGz0rgbEYSb8TA8IaCQxLNPPGgdXqqRYMYtX6c0yxXVjZZe%2FHHDB2OF07QXCFuQ%2FUy3wqX6fm4kvK59CmYwzyRxoSpmwuBebX%2FsAA0HrPZLRH5lw4wz69LZx59q9TuUa8IZ9KYK2tHV08wkBzPGcEmlLmkof%2BVGqYDejVvHOAWZG5FGDavppGihOR9wgI%2BzIrjw%2BZTABrxjTV%2BWoXkKrjuqSs38iWrvW9ktMko1VL127J4hIeK1ehf0ryCoD8PJABKQeepYbe8Jwkcf%2B7xqVvaYidXRX9T3JxL%2FJ7MzQwtXi%2BC0b5LO8O5kENed%2BlmGyKOCCS5iEH4ZfxurxgZRFvfuG6EkTMs4l%2B6iXgMOjDPiozKBjqkAVs%2Bq%2FgB9xXgwqXvlD1cdw02aNNglfxEqmDI2JOqztYq7EZnK%2BqaLF%2FYw%2FYsMWvcpCWmFJG6ogO4mQWor2Q0YxGCQjlyUSotflmwkuU2YF3eMXhdGSPyiLiAfkxd4mMUN2noOzL6EdTTEgb%2FbagN%2Bk6U65oEclTDADykrNlqv9ODYOiqI0gDUwI3RN%2Bb%2FvDhiUVu0vnKRbCqN142UR7RJG9WW%2B4e&X-Amz-Signature=71db726a841b9fe6e2768fda7eacfc748838fa52e366e6a9eb8c1a3612a240c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

