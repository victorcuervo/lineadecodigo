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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEI66YR3%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T181724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBpMR100NOGnJnR5Wd10ETAxs8u%2Fz10%2B66HWphGHYE7RAiBH36qnuZBKhjvXhe5H7FPkxUlIzr1XefTjTJpzLBnpQiqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIME8TZ%2FvVHkj%2BnKZaDKtwDxrD1LbG0i%2BwbIos2V1oa8v6B%2Bsee8nKev8FDGzZxm80qS19t2TOHXrJIBWKVNMQB3cA55ngzwXhSoZZ1dP4iK43VdvKSxkc0PLjR0VMth9rvtQw4hBJuwMIAi%2FkqTTQ7egDElg3%2FtVtg1zB3D5txJCPFneEWn4m%2BoSQieV5d6w7TYvXzMZA2Q6TdWgfF7f%2BC5dczhIJI0l7ud8NuXSt8GCQqxF6PYxiWgYDOmhU10fWSrDdIpDj%2Fe5ToVBBa2ArtReWHztkrc%2F4i1O2VoWiIfM%2FxeBGruKVyE6tUm8CqymxWUdrLxRW1HqxJyPFDP2xZ0NsH8ejGAwQp6zo2%2Bql8tKmeM8JPmDqnbS1TWvYK0TuVUfYzTfHptxHUTH6OK2QATChjrVtP1E7TgPIqyiA8OZNMp1EnPgg0e%2Fef9lMteuh9eRZ2br8U%2Fy0JA0Q%2F%2BxF5ZDqfLa8azn6CygP48f3hMBaP6tQxKzYhRgSfvaJuhAoFHsOy8FBw1QVYHWG1DDIeQ1wCabNyil%2FDkcjFFMElD%2Fbs%2BcimcdsKlkbxxzCE3KRoiQ0J4DVkDBnyEs42ALqHaEuZ%2F1Y1WGEbUPJvBH00enWsSw%2F3fLk05dfEjpg9XsrmvJN6GcOXDcUow5kwqaCLygY6pgEyR5dYWX8YiO%2Fmre3iOoFGFZewb9VGeVNouhUBlB%2FXmXpUT7cM4Lk6gHp18c%2Buu%2Fa5q%2Btz5pZTT2UvjPUXZgez%2Bj6Wec3maBRXtCgPcZ49sr9%2BbrSxZvKN3KJAgKm8gsgGOeGkv8637zl5HgddAkjNQ48OJ%2BzbOWbawK5uXEiE0dvrCEbkSF1opbfohcPDD2Nai8ywbs3ubl0rqXoeo9IcHq8DVR3Z&X-Amz-Signature=798e72c2a8448fb86dd7bdc090d4ee98c77ddfaea327239992cd86260bf15efc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEI66YR3%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T181724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBpMR100NOGnJnR5Wd10ETAxs8u%2Fz10%2B66HWphGHYE7RAiBH36qnuZBKhjvXhe5H7FPkxUlIzr1XefTjTJpzLBnpQiqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIME8TZ%2FvVHkj%2BnKZaDKtwDxrD1LbG0i%2BwbIos2V1oa8v6B%2Bsee8nKev8FDGzZxm80qS19t2TOHXrJIBWKVNMQB3cA55ngzwXhSoZZ1dP4iK43VdvKSxkc0PLjR0VMth9rvtQw4hBJuwMIAi%2FkqTTQ7egDElg3%2FtVtg1zB3D5txJCPFneEWn4m%2BoSQieV5d6w7TYvXzMZA2Q6TdWgfF7f%2BC5dczhIJI0l7ud8NuXSt8GCQqxF6PYxiWgYDOmhU10fWSrDdIpDj%2Fe5ToVBBa2ArtReWHztkrc%2F4i1O2VoWiIfM%2FxeBGruKVyE6tUm8CqymxWUdrLxRW1HqxJyPFDP2xZ0NsH8ejGAwQp6zo2%2Bql8tKmeM8JPmDqnbS1TWvYK0TuVUfYzTfHptxHUTH6OK2QATChjrVtP1E7TgPIqyiA8OZNMp1EnPgg0e%2Fef9lMteuh9eRZ2br8U%2Fy0JA0Q%2F%2BxF5ZDqfLa8azn6CygP48f3hMBaP6tQxKzYhRgSfvaJuhAoFHsOy8FBw1QVYHWG1DDIeQ1wCabNyil%2FDkcjFFMElD%2Fbs%2BcimcdsKlkbxxzCE3KRoiQ0J4DVkDBnyEs42ALqHaEuZ%2F1Y1WGEbUPJvBH00enWsSw%2F3fLk05dfEjpg9XsrmvJN6GcOXDcUow5kwqaCLygY6pgEyR5dYWX8YiO%2Fmre3iOoFGFZewb9VGeVNouhUBlB%2FXmXpUT7cM4Lk6gHp18c%2Buu%2Fa5q%2Btz5pZTT2UvjPUXZgez%2Bj6Wec3maBRXtCgPcZ49sr9%2BbrSxZvKN3KJAgKm8gsgGOeGkv8637zl5HgddAkjNQ48OJ%2BzbOWbawK5uXEiE0dvrCEbkSF1opbfohcPDD2Nai8ywbs3ubl0rqXoeo9IcHq8DVR3Z&X-Amz-Signature=a9642442bef582bd9042a007826be976e91f4138a4da26fd20579cdc587b2fb9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

