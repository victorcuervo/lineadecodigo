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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663NDKBWG%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T192400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCH05vKKdFSYQR2yK2mU2jUff8j%2FluGp5fIVvXOve6c7QCIQDMoiQgtQE60aC757pqbGCKojw%2BqGROyBWvaU9%2Bes%2FztiqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLmzo44L1FReNSz5CKtwDjApHSfLbTIwGepwBQi0MaOudXW%2Bz540RSYxQi7AKrkOq99US%2Fu75fGR2kXrFM2o8mFO1sZjAYq2kQU4d3c7Xk7LHnDpHRKPclbWa5uSi8hLlRbRSnk5Cmso34l4ZJgss7yR5iSnYJOmIx11%2BqCOYeBtrT1TAlJyOJFiyebK3jhMzeMPGZWmy8d2o82s1muErvZ%2F5F5NjZK2vG3qgOrPPy0VMpR9hmRxU%2FQtfVmUEZDkykP3WiiahDRsAbpdQ4T8XdANUVAz9fCzWxxWPfh2vxBmYQ9ljD%2F74HxGmqGX4rkXBHaUztTjQZdcFb%2FQ8RCi8lRLbwYE5xQLttk47nUgzRY2r%2FjtqQVf1wnKDHsurAELQQ1zEtf9Zg1SxRC7pp%2B%2FoyNm6G2ukMIsKQo4ow5Yefiz1MdQlpkITDcSRzw8ypXkO7vsYC827GEu%2B%2FYlLm2ijJPTUBMeWJYbu0VsOXHGEfQRSrJyEWzr2Jp2jnl6UZAGmCgSJYtVHu4GWZtsm0xpBlVVSZD9vWfV0tSRJQRP0O732fT2cr4RotAA6jYgC3SxLcero%2FeDDwwOjrxbW%2BY%2B4yzJt4CrNp5QbUNf%2B5T7XWpD5UiXO2J3bkL7tUgBqEf80v3YjUD5oLCMKCJswyp6LygY6pgFGd9iuLC8ydXpVD6nFgauyry31wBRT2WcpliAIh6NJ3jxHjUmRlkWT3JQJMxo3NC7NfrmYd4ADGLmMTZM4uqXk0f5eMYqLpQOppDhU64WHBvgRQMltMPWrEZOi6t%2FvVsSNqPJ%2BBFcaz9nwEPfTea0nXQqONRW5kzUOyvT4ipQB2T1g3uQBhYaI6HXyl143yx3NKBPQ7Wzy%2FDq%2BnzRY0aiPkf7Se00K&X-Amz-Signature=72be356048217ddc47b1f1da9c094abd2fa9175361ad6da1001d4dae4b957e4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663NDKBWG%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T192400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCH05vKKdFSYQR2yK2mU2jUff8j%2FluGp5fIVvXOve6c7QCIQDMoiQgtQE60aC757pqbGCKojw%2BqGROyBWvaU9%2Bes%2FztiqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLmzo44L1FReNSz5CKtwDjApHSfLbTIwGepwBQi0MaOudXW%2Bz540RSYxQi7AKrkOq99US%2Fu75fGR2kXrFM2o8mFO1sZjAYq2kQU4d3c7Xk7LHnDpHRKPclbWa5uSi8hLlRbRSnk5Cmso34l4ZJgss7yR5iSnYJOmIx11%2BqCOYeBtrT1TAlJyOJFiyebK3jhMzeMPGZWmy8d2o82s1muErvZ%2F5F5NjZK2vG3qgOrPPy0VMpR9hmRxU%2FQtfVmUEZDkykP3WiiahDRsAbpdQ4T8XdANUVAz9fCzWxxWPfh2vxBmYQ9ljD%2F74HxGmqGX4rkXBHaUztTjQZdcFb%2FQ8RCi8lRLbwYE5xQLttk47nUgzRY2r%2FjtqQVf1wnKDHsurAELQQ1zEtf9Zg1SxRC7pp%2B%2FoyNm6G2ukMIsKQo4ow5Yefiz1MdQlpkITDcSRzw8ypXkO7vsYC827GEu%2B%2FYlLm2ijJPTUBMeWJYbu0VsOXHGEfQRSrJyEWzr2Jp2jnl6UZAGmCgSJYtVHu4GWZtsm0xpBlVVSZD9vWfV0tSRJQRP0O732fT2cr4RotAA6jYgC3SxLcero%2FeDDwwOjrxbW%2BY%2B4yzJt4CrNp5QbUNf%2B5T7XWpD5UiXO2J3bkL7tUgBqEf80v3YjUD5oLCMKCJswyp6LygY6pgFGd9iuLC8ydXpVD6nFgauyry31wBRT2WcpliAIh6NJ3jxHjUmRlkWT3JQJMxo3NC7NfrmYd4ADGLmMTZM4uqXk0f5eMYqLpQOppDhU64WHBvgRQMltMPWrEZOi6t%2FvVsSNqPJ%2BBFcaz9nwEPfTea0nXQqONRW5kzUOyvT4ipQB2T1g3uQBhYaI6HXyl143yx3NKBPQ7Wzy%2FDq%2BnzRY0aiPkf7Se00K&X-Amz-Signature=1da9e57377647a5c4e7b226758d0c9d53d9b1d6eef1c17f62af1bbf03048171f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

