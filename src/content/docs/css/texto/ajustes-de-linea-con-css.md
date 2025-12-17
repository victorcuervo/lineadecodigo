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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664R4WOOLP%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T180850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCzk3w9Us0hqx0wYX9vspezId%2F7kV0vy708aUwytqbLjAIhAKavTL%2FRCGWALV%2B7lFJqIhSNb9X4Jx7zC9Ifnpi9INEwKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxLwSEUiAnbfpNHgDMq3APWV0NbjYxpDBycyBieYfAeVwi4%2FI093Sq5XjYtw0hj9suMQokCIi%2BnIDGWgo19RcqxzBl6cH%2BrKpA14orVme4gEmwfivY%2BbQVAK7Xo8NtSrDE4lbtbT%2BxRjNN6JTbHcRlQrigmJs0X45IMhe69VJ043%2FkIptswLWlEkKdfB4RJ%2B7svbDbsTyaiRzOwc0cmsIeUEkek5w9Ga33XOl0Vh5NDNZkwJUdPH3etAodSobnnzmOLE%2BCu8WCeQb2lRHzoTskX5qjrbJAgOin9HrNLFpm5Zfo6F20jK5Vx59xfFGwFoO%2FDSQzwJnYk5BuoHGLx7U0V9DH1FpYO%2F1fBxskTbIsnp26wvkytcCqomghaq0p3IpxpexHrAHLtEy8f45k8FtmTq5te8B83m%2FYGwh4qVDgB0oxcnd7Uy%2BS0nf2lIgRjZ2C2sQChBGTrQ4k1hR5fXMylbeQRZx3zaSjIQ5%2FSKXmOc0cbDiXl10TNqGWz6NF2HMARBQ3biaJlgqz55J6trvr%2BlTsR5VPLrtBshIXJym9QlFJ%2B68XY76fKHkFC87tiFewX11rwkBoWU%2BFQ34mzzrvnuXPRXvlFvoobu2xA0LYbjgwgjk7wAL3ZwkyqnVyttV1bUmoMvvDgOpt8gjCpoIvKBjqkAbs7iUffjARej8wSDbdTp91mL%2BZBj7qwGJGN%2BZ%2FrXcBsT0SrTzpPaaTS9%2BIaQju1Uvg3a5qG7x4wOfWg6LvPm4%2FbP%2BEBrQ%2BbeABzkDPWya6KQxcKo2mjJsi3MXJesqNxgLXgmQIZokH6f%2FL6kVksWiP4SmsuCohvmK1Ze1DmkObT9BKnZR9cUJ3Bdft5gsBmRbwPMSv5mF65E3znTKLyV6xvfAkL&X-Amz-Signature=33e0af28d18c258662a8636731cca5b063ceac0dd03751a3c4b4bc9bda3dd590&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664R4WOOLP%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T180850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCzk3w9Us0hqx0wYX9vspezId%2F7kV0vy708aUwytqbLjAIhAKavTL%2FRCGWALV%2B7lFJqIhSNb9X4Jx7zC9Ifnpi9INEwKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxLwSEUiAnbfpNHgDMq3APWV0NbjYxpDBycyBieYfAeVwi4%2FI093Sq5XjYtw0hj9suMQokCIi%2BnIDGWgo19RcqxzBl6cH%2BrKpA14orVme4gEmwfivY%2BbQVAK7Xo8NtSrDE4lbtbT%2BxRjNN6JTbHcRlQrigmJs0X45IMhe69VJ043%2FkIptswLWlEkKdfB4RJ%2B7svbDbsTyaiRzOwc0cmsIeUEkek5w9Ga33XOl0Vh5NDNZkwJUdPH3etAodSobnnzmOLE%2BCu8WCeQb2lRHzoTskX5qjrbJAgOin9HrNLFpm5Zfo6F20jK5Vx59xfFGwFoO%2FDSQzwJnYk5BuoHGLx7U0V9DH1FpYO%2F1fBxskTbIsnp26wvkytcCqomghaq0p3IpxpexHrAHLtEy8f45k8FtmTq5te8B83m%2FYGwh4qVDgB0oxcnd7Uy%2BS0nf2lIgRjZ2C2sQChBGTrQ4k1hR5fXMylbeQRZx3zaSjIQ5%2FSKXmOc0cbDiXl10TNqGWz6NF2HMARBQ3biaJlgqz55J6trvr%2BlTsR5VPLrtBshIXJym9QlFJ%2B68XY76fKHkFC87tiFewX11rwkBoWU%2BFQ34mzzrvnuXPRXvlFvoobu2xA0LYbjgwgjk7wAL3ZwkyqnVyttV1bUmoMvvDgOpt8gjCpoIvKBjqkAbs7iUffjARej8wSDbdTp91mL%2BZBj7qwGJGN%2BZ%2FrXcBsT0SrTzpPaaTS9%2BIaQju1Uvg3a5qG7x4wOfWg6LvPm4%2FbP%2BEBrQ%2BbeABzkDPWya6KQxcKo2mjJsi3MXJesqNxgLXgmQIZokH6f%2FL6kVksWiP4SmsuCohvmK1Ze1DmkObT9BKnZR9cUJ3Bdft5gsBmRbwPMSv5mF65E3znTKLyV6xvfAkL&X-Amz-Signature=4a8b98c56a03d8fd68f311afd54a2043b3a80635b75adea35e433d3e83f3a6c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

