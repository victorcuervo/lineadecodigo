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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKCPXQXM%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T190218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB0qDBEguPAXcDotZ2o8FNWsb4ozs8qjx3CHej3kXV59AiAzFCTTMcDdj3UmKoE0%2BLJXUvK%2BLogasyVfv79QxeDozSqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5e4b8KmzR3C%2B9g9qKtwDO7UGLBuSE0lzA8WpfTkJb5tbKkpmNXUSkoRSYFr5%2Fba1nXpWo3P867d9Cw9%2F4f1eYnVUJjr5nhKyhFg%2BtEno3%2Fj%2FdE%2FsjuY85i5aGVJrdJHWeQUwMyjcygSrwdiBdg%2B3otVewTglpu%2BktfS6pIVZGcajSfMK50YHifH7i1ILg6aPE76vrOFbJtJhKBbS2%2BI81cQ2%2FJ9ZF%2FtpGZtHGOLPTdouBX%2Faagffbm%2BhEav4g0qFYxEnqtP7vtsqYMNcizzim8RDIZx9Fuw1SIlP%2BbF8o8Zl30%2F9jPlBFXEd%2BcMovkL7uL9fkQEOFIEMWcerGy8DmWHUEIYLNl75KTMVw5aeJ5QyNHZKHjkV5UmkWY%2BqL5HMyaCo2bLqog4VyG6wxwoigLGhYEQLl1vA54xHJYZRa4dF7%2F8eNd%2FfbKd0EDCmbcXdp%2F%2BNnwRvJJQW8c%2BxD5K8leKtccJa%2BHzVMSi9Zu46HPUOXBt8XJcukCfAj5WRm216Y6A2ArAj6Bh%2FqmsFYkVV%2BjcEY%2F3a0CxkMEfJ8ZOoV3mo0gD0xsjKcLj4LsJjUhpTjb4e8bKCxHL9731osbfHy8jbVemgbQA3SOh4qllwRXC44bC5gifdscnjFHbO16mxYyVoXUo%2BPl8veQswp6CLygY6pgFaLayhzkk2zyktyB1sT4v6oSrMYG3yefp4ZgJI5oQLE8KoPHsgqXwNrxD3z0cCw70BsTW0TKJrLYGjVTicjjzFUkai327xGgnnFaDwvfRSIJB81wxlE4rwU0Jbz64urSrDKp40VwBYNoU4w5c2SThckSKcZndd2M%2F%2B5ddVAXGCeBAT26VX7DMNZcryv5bemvchQRYzbQ%2BWwX%2FFGCoC5SMvD4nGDtLG&X-Amz-Signature=e63ba25cea5df9df3055429d3c1cb3fd1b4eab29250f19fbd0b96031492e9ea5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKCPXQXM%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T190218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB0qDBEguPAXcDotZ2o8FNWsb4ozs8qjx3CHej3kXV59AiAzFCTTMcDdj3UmKoE0%2BLJXUvK%2BLogasyVfv79QxeDozSqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5e4b8KmzR3C%2B9g9qKtwDO7UGLBuSE0lzA8WpfTkJb5tbKkpmNXUSkoRSYFr5%2Fba1nXpWo3P867d9Cw9%2F4f1eYnVUJjr5nhKyhFg%2BtEno3%2Fj%2FdE%2FsjuY85i5aGVJrdJHWeQUwMyjcygSrwdiBdg%2B3otVewTglpu%2BktfS6pIVZGcajSfMK50YHifH7i1ILg6aPE76vrOFbJtJhKBbS2%2BI81cQ2%2FJ9ZF%2FtpGZtHGOLPTdouBX%2Faagffbm%2BhEav4g0qFYxEnqtP7vtsqYMNcizzim8RDIZx9Fuw1SIlP%2BbF8o8Zl30%2F9jPlBFXEd%2BcMovkL7uL9fkQEOFIEMWcerGy8DmWHUEIYLNl75KTMVw5aeJ5QyNHZKHjkV5UmkWY%2BqL5HMyaCo2bLqog4VyG6wxwoigLGhYEQLl1vA54xHJYZRa4dF7%2F8eNd%2FfbKd0EDCmbcXdp%2F%2BNnwRvJJQW8c%2BxD5K8leKtccJa%2BHzVMSi9Zu46HPUOXBt8XJcukCfAj5WRm216Y6A2ArAj6Bh%2FqmsFYkVV%2BjcEY%2F3a0CxkMEfJ8ZOoV3mo0gD0xsjKcLj4LsJjUhpTjb4e8bKCxHL9731osbfHy8jbVemgbQA3SOh4qllwRXC44bC5gifdscnjFHbO16mxYyVoXUo%2BPl8veQswp6CLygY6pgFaLayhzkk2zyktyB1sT4v6oSrMYG3yefp4ZgJI5oQLE8KoPHsgqXwNrxD3z0cCw70BsTW0TKJrLYGjVTicjjzFUkai327xGgnnFaDwvfRSIJB81wxlE4rwU0Jbz64urSrDKp40VwBYNoU4w5c2SThckSKcZndd2M%2F%2B5ddVAXGCeBAT26VX7DMNZcryv5bemvchQRYzbQ%2BWwX%2FFGCoC5SMvD4nGDtLG&X-Amz-Signature=a37a6cb18f554381d00c0a9e74e4b3d979d2e25d0e68b8d94900b25cd9c7b83c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

