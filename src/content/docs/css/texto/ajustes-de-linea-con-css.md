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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466654BIBSQ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T080345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJqZiqrSBxQcOtc6VFnXkGhwbkLTrMb%2BbEQp9K9DcEFgIhAJ0MbcuOgKf%2B3UjRtoIeGFn4cMuVVrxIL1dUDsf4uLl9Kv8DCHgQABoMNjM3NDIzMTgzODA1IgyXTK2gHb2yt6nd2Dwq3ANlsP2n5moEQBDxJiuuKCm0SktLAg%2Fz2x6D2NQa%2FhVIuft941EiatMqmMUxBXxXmRdAeADDPeugRIkWGH2UiGjFWiw%2BmScqZojxegzGeani28zWfVrYvkU%2FOrBccrdJH2pTiwFdl56welVlhyjMFc1aDZUUSGmZ0F11x0SkezThL%2BCA8c54%2FzZ71nVXxgB9Ejkrx241Gd2ka5ZQFyf5DqEwnY7jrxbJjsv5g1%2Fy1QlfTJWMbyNDKOwbtjnLcn2lw43irw7n1PGdu48CXsa0C7BDYUAPhLf9Xxlzw1HyMBBnLZvqyytNWHhzbp0q11%2BCg%2F%2B4fjE122IXkC0k5LrqJjFepSa5zgQn9O%2B4FVDbutqoUCXfAS6OIqX%2Fs895sALSUs94PCSBAzWfW2FQ%2F4%2FzBnYKpp3Ql7tU6JBoGV4JSzLk1ua8Nb%2B%2BSFi0DUGWUnO9mE0GZTsKjI8Z4jd%2F3EGKjC27%2FWhUJvVeMwo0MdP28Fqblv43Phws5Uy7ETsy7KQ9Hj2TAn6jMNGw7YTYmxvqwwEAJeevqGeXKGY1%2B9vgF2gDzNTYkZt43Og24jOXj1Wb%2BZQ5vzUauucqUA58npbIdlLYkOoadnsvDdvRooZDAlHwYoGAgBCnZ2L38DTiBzDxt4nKBjqkAcwa1%2FK84Y7z93eoUQu9MOcI1GEW7VlM02aLgUBOxAo9s4MX2wB1oJ4xfNsS2%2FXn0NSOJ%2BGcxoUWCu0DwHVV3%2F%2FPdzH%2FZELrfuUFbqj4VIjVej0boohT3ZOHZeRyWqsAxH86KeG%2Bu3%2FM%2Bv97HG8UjE22v2dT%2FDBQkwdI0nnPHNnheadBhmds3hmMCmMKaMHvMET9lhnrnY1nWd6Tt%2B75jS%2F2%2FD%2Fr&X-Amz-Signature=264716647bec286e9696328330c2792557a9e4f3a8d31bf71ff23441fe9c7fe7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466654BIBSQ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T080345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJqZiqrSBxQcOtc6VFnXkGhwbkLTrMb%2BbEQp9K9DcEFgIhAJ0MbcuOgKf%2B3UjRtoIeGFn4cMuVVrxIL1dUDsf4uLl9Kv8DCHgQABoMNjM3NDIzMTgzODA1IgyXTK2gHb2yt6nd2Dwq3ANlsP2n5moEQBDxJiuuKCm0SktLAg%2Fz2x6D2NQa%2FhVIuft941EiatMqmMUxBXxXmRdAeADDPeugRIkWGH2UiGjFWiw%2BmScqZojxegzGeani28zWfVrYvkU%2FOrBccrdJH2pTiwFdl56welVlhyjMFc1aDZUUSGmZ0F11x0SkezThL%2BCA8c54%2FzZ71nVXxgB9Ejkrx241Gd2ka5ZQFyf5DqEwnY7jrxbJjsv5g1%2Fy1QlfTJWMbyNDKOwbtjnLcn2lw43irw7n1PGdu48CXsa0C7BDYUAPhLf9Xxlzw1HyMBBnLZvqyytNWHhzbp0q11%2BCg%2F%2B4fjE122IXkC0k5LrqJjFepSa5zgQn9O%2B4FVDbutqoUCXfAS6OIqX%2Fs895sALSUs94PCSBAzWfW2FQ%2F4%2FzBnYKpp3Ql7tU6JBoGV4JSzLk1ua8Nb%2B%2BSFi0DUGWUnO9mE0GZTsKjI8Z4jd%2F3EGKjC27%2FWhUJvVeMwo0MdP28Fqblv43Phws5Uy7ETsy7KQ9Hj2TAn6jMNGw7YTYmxvqwwEAJeevqGeXKGY1%2B9vgF2gDzNTYkZt43Og24jOXj1Wb%2BZQ5vzUauucqUA58npbIdlLYkOoadnsvDdvRooZDAlHwYoGAgBCnZ2L38DTiBzDxt4nKBjqkAcwa1%2FK84Y7z93eoUQu9MOcI1GEW7VlM02aLgUBOxAo9s4MX2wB1oJ4xfNsS2%2FXn0NSOJ%2BGcxoUWCu0DwHVV3%2F%2FPdzH%2FZELrfuUFbqj4VIjVej0boohT3ZOHZeRyWqsAxH86KeG%2Bu3%2FM%2Bv97HG8UjE22v2dT%2FDBQkwdI0nnPHNnheadBhmds3hmMCmMKaMHvMET9lhnrnY1nWd6Tt%2B75jS%2F2%2FD%2Fr&X-Amz-Signature=bcd794dda8081464e58977b54045ed9d706f541f6d2e5402d5186e5df8991a6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

