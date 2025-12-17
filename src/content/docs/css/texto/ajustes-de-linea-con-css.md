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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z673VJXA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T104813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC64TNsR6XRdAnOvULd7PcDJSjDhooJ3wNhfPx%2FtcmnsAIgNNkeFwOZU0wGsn6zu2Tu9i0SwJDU43AxZrGP9s6MbXoq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDHl6DLPQJSfszkb0GSrcAxJdIzr8Bd6QIkIQQ1z6RaCWVQDG6RvmONH6%2BW6R0ctYtmdsLKcPkdEqZ6lpAQO%2BlxS9ThYlePyqKDf4kfMZM34ZeD2D7rXI8GjOcppLCCXZfd3BOjZyay0lHer8%2BTv6YJloVcwGvDQSCQG87uCgAJxbQEcgCbN89s4bJsyzATUs70FnDUHYUkh8bSbV58n386UXDG1KtdByK61%2By2KpyCakyiPt7TyHgoOIxEDyDFQh%2Fwq%2BfZAyXfOumWrbMIiSkfQhwed%2FGWsvDMgq4ky4B7zGpP839Ix5H%2F6gi1fXlN7%2BIx6VEIbq3GHZSRhIhrKHKhye5BAGr40bMDlSRQ9MLnvLKrtF2otZbleEt8Wd%2FGkdrJEpkv%2B5b%2FfD9TIgywSlql8uOhTonvLHtzh9oJtQyxYLjdnVHIwXUsC22R6r5O5g0SwlQRS7i9gZ7ELJYTnCz59cnDydsoqhpwFD7MahuLVok9plJ9FqpQiSDgfm0VrA83qGgJmCjG%2Be0RD1Odo7OknnYfHoT7x9O3IN0g8qCY7TehLD%2BN6mZL89CEbMf7vYSEJEjtqSZZuh0iKJ6uvGh%2BrfI0h70e4cHQIPogarRN7lWKG8ytwxtYVw0jji4kSHQKZs%2BvJVKSEWk7J8MP%2BOisoGOqUBvfpZGhEwEnE%2BiPnwYuxyS5RAV1bwrhIIZVGb5FuqL3q2eiPQYWWdXZ7YkpLe4CZZ%2FHpDAABNsU80xF8el3Wrgxuz0WynWb%2FDW6TCBYTTpa5RIZhLRgSGEr4Mkuh9MC4u1Lz7bPP37fFphvYb0PPjRNrdkWyGy%2BVDQf4dljKFLQGgqTe1MUGz7ufNaPiltPSXFdePsVCw4H04FkIqTH3WyuQw6xZq&X-Amz-Signature=721b458f2d770a4fc87a338d033509486ece73a0fcf8714bab31b824e975ff63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z673VJXA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T104813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC64TNsR6XRdAnOvULd7PcDJSjDhooJ3wNhfPx%2FtcmnsAIgNNkeFwOZU0wGsn6zu2Tu9i0SwJDU43AxZrGP9s6MbXoq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDHl6DLPQJSfszkb0GSrcAxJdIzr8Bd6QIkIQQ1z6RaCWVQDG6RvmONH6%2BW6R0ctYtmdsLKcPkdEqZ6lpAQO%2BlxS9ThYlePyqKDf4kfMZM34ZeD2D7rXI8GjOcppLCCXZfd3BOjZyay0lHer8%2BTv6YJloVcwGvDQSCQG87uCgAJxbQEcgCbN89s4bJsyzATUs70FnDUHYUkh8bSbV58n386UXDG1KtdByK61%2By2KpyCakyiPt7TyHgoOIxEDyDFQh%2Fwq%2BfZAyXfOumWrbMIiSkfQhwed%2FGWsvDMgq4ky4B7zGpP839Ix5H%2F6gi1fXlN7%2BIx6VEIbq3GHZSRhIhrKHKhye5BAGr40bMDlSRQ9MLnvLKrtF2otZbleEt8Wd%2FGkdrJEpkv%2B5b%2FfD9TIgywSlql8uOhTonvLHtzh9oJtQyxYLjdnVHIwXUsC22R6r5O5g0SwlQRS7i9gZ7ELJYTnCz59cnDydsoqhpwFD7MahuLVok9plJ9FqpQiSDgfm0VrA83qGgJmCjG%2Be0RD1Odo7OknnYfHoT7x9O3IN0g8qCY7TehLD%2BN6mZL89CEbMf7vYSEJEjtqSZZuh0iKJ6uvGh%2BrfI0h70e4cHQIPogarRN7lWKG8ytwxtYVw0jji4kSHQKZs%2BvJVKSEWk7J8MP%2BOisoGOqUBvfpZGhEwEnE%2BiPnwYuxyS5RAV1bwrhIIZVGb5FuqL3q2eiPQYWWdXZ7YkpLe4CZZ%2FHpDAABNsU80xF8el3Wrgxuz0WynWb%2FDW6TCBYTTpa5RIZhLRgSGEr4Mkuh9MC4u1Lz7bPP37fFphvYb0PPjRNrdkWyGy%2BVDQf4dljKFLQGgqTe1MUGz7ufNaPiltPSXFdePsVCw4H04FkIqTH3WyuQw6xZq&X-Amz-Signature=6616a5691059a05d8125b1248c05088ec0c56272f10a4896c8f2d5b720629629&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

