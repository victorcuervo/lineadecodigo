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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPNYPJDF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T154120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRpF8ivcq2TufdWgefVlDjKCbSeNBjnWY%2F12h5kDU7CQIhANVIitbpXad%2BPSy%2BfAUdnJrvEpONT3L7fy34ws4xmy%2BWKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzIxF2YLYbpGLUhnpsq3AP8Ys0tePerJhBpyywFVDFuDChyXthOAqGD2C%2B%2B6LuWCyLAVcP8rRpBhrbhjL8tCn%2FUFDd9CXvdPaGCxQH%2B3BlTJWquBuQvRs%2F1caPYTQ4hMkIsmOJ%2BwgdjwWidmMzI7VlTWJDU8mfodOebq5wO5LvhvxFfsh6G1NIAyl4t1EfW3uDN0MKcn5lxd3FT%2BnyvMT7YyurzTcW2KPtZ5iAXDoigWWTOMGQLhfGoQ37j%2Bykcc0Du0sY8YJQ1QdggCljgZnfacVcg8Na3TvA4XzDM5AB5gdUVSi%2FWkeBbNBJTTW7u7x7V5dkW486YEPPzsIPwwdeKIYtwxUMRRoYI3p9jKYtSG%2FaZq3cp3Z%2F8Ceok0Kjy2KwRYs3OXGWKbTJpq06b29cgqG5JaDLgcvouFhb1rJPgacSiOnl45nMTxfJmZVTUTYBl%2FlSVOmPfKSfM8l96Mpgnpyj0yElNQSEnC3fbELW7Zvoi9LGO68Vflh1DQqeRhlgzZi7W30o6IsrCVraZdCdCvt7M6HtxqbW1PJoXpc1r96ojn0DJLq18%2BLrsxLQ5I1FsawQwNeTslYHt9BRErLaffb6agiLSE4YMf%2Fv0U6GfhgoOQ6jrJhe9LlKsSgecDQEC3TFJkZqJXe4WWjCkgYvKBjqkAW%2BluAmQrm4OV0N442yR5QXVAA18fIEElFCGp3my%2BJs4tbBNd1JJiHGSbGTds947XKpmunGUqK4nU0eDf1NX0V5Ni4Z8pEK1SEOeErJOfHKZl9Vq%2F5okoKfL73DgPYzNXCq6xGg9P0SiuTZ%2Fy5bkM2uAMyamK0quEzIGX8D98dFaR%2FUJVvHSNh0ubz2K05UoRnv5JO8eXp39HaIjTq0Nlo1BO36R&X-Amz-Signature=d90843d4be5ccf28e52bb692db70bf87934f3d53485984108a76d4d2230398d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPNYPJDF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T154120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRpF8ivcq2TufdWgefVlDjKCbSeNBjnWY%2F12h5kDU7CQIhANVIitbpXad%2BPSy%2BfAUdnJrvEpONT3L7fy34ws4xmy%2BWKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzIxF2YLYbpGLUhnpsq3AP8Ys0tePerJhBpyywFVDFuDChyXthOAqGD2C%2B%2B6LuWCyLAVcP8rRpBhrbhjL8tCn%2FUFDd9CXvdPaGCxQH%2B3BlTJWquBuQvRs%2F1caPYTQ4hMkIsmOJ%2BwgdjwWidmMzI7VlTWJDU8mfodOebq5wO5LvhvxFfsh6G1NIAyl4t1EfW3uDN0MKcn5lxd3FT%2BnyvMT7YyurzTcW2KPtZ5iAXDoigWWTOMGQLhfGoQ37j%2Bykcc0Du0sY8YJQ1QdggCljgZnfacVcg8Na3TvA4XzDM5AB5gdUVSi%2FWkeBbNBJTTW7u7x7V5dkW486YEPPzsIPwwdeKIYtwxUMRRoYI3p9jKYtSG%2FaZq3cp3Z%2F8Ceok0Kjy2KwRYs3OXGWKbTJpq06b29cgqG5JaDLgcvouFhb1rJPgacSiOnl45nMTxfJmZVTUTYBl%2FlSVOmPfKSfM8l96Mpgnpyj0yElNQSEnC3fbELW7Zvoi9LGO68Vflh1DQqeRhlgzZi7W30o6IsrCVraZdCdCvt7M6HtxqbW1PJoXpc1r96ojn0DJLq18%2BLrsxLQ5I1FsawQwNeTslYHt9BRErLaffb6agiLSE4YMf%2Fv0U6GfhgoOQ6jrJhe9LlKsSgecDQEC3TFJkZqJXe4WWjCkgYvKBjqkAW%2BluAmQrm4OV0N442yR5QXVAA18fIEElFCGp3my%2BJs4tbBNd1JJiHGSbGTds947XKpmunGUqK4nU0eDf1NX0V5Ni4Z8pEK1SEOeErJOfHKZl9Vq%2F5okoKfL73DgPYzNXCq6xGg9P0SiuTZ%2Fy5bkM2uAMyamK0quEzIGX8D98dFaR%2FUJVvHSNh0ubz2K05UoRnv5JO8eXp39HaIjTq0Nlo1BO36R&X-Amz-Signature=e31fb8e21b7e24a8b580dad39d005492f28d2aefa562c1ffbc347377fd7232ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

