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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUUFPNLG%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T054633Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGD9Qs6WNmVxLQrbKYDfyp8ca1UZj5zqktBFbCwbVPvKAiEA40NjTgir7BIPfJvgU6v8KEzp8%2FcGhPSn5%2FPmiOOPJswq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDK7k1DMzjNY50oGk8SrcA%2FUKWybYXwPTwdEmL2jCkxOM%2FDifNH3%2BDCTSf3drDGazHvNudkngG6rxg7T3Q%2BBFCP4SOnWiAfkRrFjlNEZLPzWBWroM9tuWRvec%2Bw5d5oTzz0xfu45EUneXigeo3N5ydlYQwOufqlbA5qV6NHx%2F4Usz8o9u2Fj8bEwcUVtIBU%2FtQhI6U6IW%2F6q0FvG%2BLtv467y19ErHyM6Ju5r154114nU8fEAFs6X0d0OQLoZ39%2B2Xc9kVfZZZciHr9FT2FuYzTzdiSTbTbGI8apUKiQlXx70Nbd65w3kBipDmDZaDd1dMdy8F5ApzhWYql9I4kFUVq8WMizYJ7fr7QaOG5RAToTs7nlPa4JijnPt2Nf9NXvKM8aqc7xJx2fmWnCjm1UGvpNM4enRxNPdasDDL70oyvRCtl6a%2BXwgrRfn24RUxWZ5S%2BKKQiT7bbGVkcBPAT6EgMCx%2BMjgGl6CPfwBVUyr44nn1%2BA1bBNLgAqhLLr9g1ieh4CoCDPgREjXFkw8ru2QS7E1RFEo4EOIs3BSq%2BL%2BZT4sdDAXxZhK%2BHHfSnVKkl%2Bt%2BS0wpiACrQ7mgG%2FrZTq5xfhDnqN8ekAeywEBQ6ey3eopIlxIv45XUEMXbypizsVDXzyNkpjfIG8BWeOfBMJuDicoGOqUBccxwbceY1Xw3TyKFmP72YCZl2sj7AJ%2FbbnizcZnGeoQZo%2FnGwBKEi6k3qbgRijS5GCFcoh003BW7OF8yVNcrMKgREkXwyvQ3C6bwXZhR0I9jgXyQsq5ok9%2BZmg10QBh9opoHnIQGDZMgWuOE796d9q8SxK1IXo1iprxe218L4PVYOs76t6CXsLi2jKA3OntowbOQjtZb0p%2BLflFSZ9rETaXIgzke&X-Amz-Signature=28c4d00e921a656cfa84efdccfff0b569da6723917f5556fd2e3d109aa0bb0d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUUFPNLG%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T054633Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGD9Qs6WNmVxLQrbKYDfyp8ca1UZj5zqktBFbCwbVPvKAiEA40NjTgir7BIPfJvgU6v8KEzp8%2FcGhPSn5%2FPmiOOPJswq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDK7k1DMzjNY50oGk8SrcA%2FUKWybYXwPTwdEmL2jCkxOM%2FDifNH3%2BDCTSf3drDGazHvNudkngG6rxg7T3Q%2BBFCP4SOnWiAfkRrFjlNEZLPzWBWroM9tuWRvec%2Bw5d5oTzz0xfu45EUneXigeo3N5ydlYQwOufqlbA5qV6NHx%2F4Usz8o9u2Fj8bEwcUVtIBU%2FtQhI6U6IW%2F6q0FvG%2BLtv467y19ErHyM6Ju5r154114nU8fEAFs6X0d0OQLoZ39%2B2Xc9kVfZZZciHr9FT2FuYzTzdiSTbTbGI8apUKiQlXx70Nbd65w3kBipDmDZaDd1dMdy8F5ApzhWYql9I4kFUVq8WMizYJ7fr7QaOG5RAToTs7nlPa4JijnPt2Nf9NXvKM8aqc7xJx2fmWnCjm1UGvpNM4enRxNPdasDDL70oyvRCtl6a%2BXwgrRfn24RUxWZ5S%2BKKQiT7bbGVkcBPAT6EgMCx%2BMjgGl6CPfwBVUyr44nn1%2BA1bBNLgAqhLLr9g1ieh4CoCDPgREjXFkw8ru2QS7E1RFEo4EOIs3BSq%2BL%2BZT4sdDAXxZhK%2BHHfSnVKkl%2Bt%2BS0wpiACrQ7mgG%2FrZTq5xfhDnqN8ekAeywEBQ6ey3eopIlxIv45XUEMXbypizsVDXzyNkpjfIG8BWeOfBMJuDicoGOqUBccxwbceY1Xw3TyKFmP72YCZl2sj7AJ%2FbbnizcZnGeoQZo%2FnGwBKEi6k3qbgRijS5GCFcoh003BW7OF8yVNcrMKgREkXwyvQ3C6bwXZhR0I9jgXyQsq5ok9%2BZmg10QBh9opoHnIQGDZMgWuOE796d9q8SxK1IXo1iprxe218L4PVYOs76t6CXsLi2jKA3OntowbOQjtZb0p%2BLflFSZ9rETaXIgzke&X-Amz-Signature=b6f0c3d903b967c68409d98dfbdd3d7329c932c2530308ab78979ea36aaf15f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

