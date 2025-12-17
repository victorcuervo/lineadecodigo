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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSY2ZSAP%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T052257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGybH0LD26W2kqLN8d2Ugw7880d7hbMygCYHny73U7KYAiEAv8%2BIQwmgtGBQW%2F%2BO%2FWyFsi2f2kzg8VJBKSzmhGt5ERgq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDIywHR%2Bo2rCKQeSyISrcAx4r%2FMKNOjLV6xTTBWoIFRPehnlhitFVRV5cS8Tg2d6qjFNqp7lYcROhokdo5QyNteAheGkLHhwWhDj1OTIlLoDgRlPlL0CamC3xKeVG9t0Pru6AtKaJdBFVXaOW48yCPnzV%2ByFBn2fcoLcs08wxR0Mi0INPiK4dw1bvxKzTm%2BdXW5u%2BQ9ZuNH7CC3QOice55PCmaC8La5YZm0ew5O%2BspB9zrrVdg0%2FGhx20W2e2gS2NYft35vxSujRqlmxcj0gC5LWZrTxNxeV3EDL7KAc4VWn2lWEirPSd4mTjELKTZqFkdSOiD1o8jhRA6Fn3eMZJN82hZf2pt%2BzIBWvtuA%2Biej0GOtJ9IroIfW%2BAQNyAH%2BlB2o49CDe1r77tJNoFS0Dv49gf6JGIPERzuU%2BjwdqD7vkTVr71H97HxKDi9Ftm4r2bH2y%2F%2Fa21lxRhZTk52IZPxh1cYN8l%2Bw23JUozGsxN5bExmbsn1A%2FIfsPG6avs8FhdZf6xJTsnQMOzjaxZUSZ9OEdV%2B2dtU79Uc2ETH%2BfuGlgpmirsrYgqWYaKs1A7WEyqE3VhwrBzxftJ04qc75vmVgVQ991hiuiM7pQz%2FWd3RurbHJzmOAbHBCHPycAvMhnXHIP2GlYcB%2FlOoio%2BMJ7piMoGOqUB5qSj2wlL0J9Wjj8M57v9BMnKSGlPjzBiN%2FFtLlzICY1LJw1XJwLI3YIRji787tAbsZMswGqWmw7kaKeiM%2FG%2BWw%2BJ31OepblRCYZ5OBDfMK4vGbKWmcqppcO0xiupyV35rvcGciqTUVdZf4TzBaFyRJmXxWU%2BESDQLlPJzrBKkx2dINTPGkrzPhhljHNCi4Qwq1gp7XWhr7gPSczwY04ymKd8kzi6&X-Amz-Signature=cd4ae2b0e07cde445e4005e47d10a551251eda658e25d77dfb93da2548b78d0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSY2ZSAP%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T052257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGybH0LD26W2kqLN8d2Ugw7880d7hbMygCYHny73U7KYAiEAv8%2BIQwmgtGBQW%2F%2BO%2FWyFsi2f2kzg8VJBKSzmhGt5ERgq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDIywHR%2Bo2rCKQeSyISrcAx4r%2FMKNOjLV6xTTBWoIFRPehnlhitFVRV5cS8Tg2d6qjFNqp7lYcROhokdo5QyNteAheGkLHhwWhDj1OTIlLoDgRlPlL0CamC3xKeVG9t0Pru6AtKaJdBFVXaOW48yCPnzV%2ByFBn2fcoLcs08wxR0Mi0INPiK4dw1bvxKzTm%2BdXW5u%2BQ9ZuNH7CC3QOice55PCmaC8La5YZm0ew5O%2BspB9zrrVdg0%2FGhx20W2e2gS2NYft35vxSujRqlmxcj0gC5LWZrTxNxeV3EDL7KAc4VWn2lWEirPSd4mTjELKTZqFkdSOiD1o8jhRA6Fn3eMZJN82hZf2pt%2BzIBWvtuA%2Biej0GOtJ9IroIfW%2BAQNyAH%2BlB2o49CDe1r77tJNoFS0Dv49gf6JGIPERzuU%2BjwdqD7vkTVr71H97HxKDi9Ftm4r2bH2y%2F%2Fa21lxRhZTk52IZPxh1cYN8l%2Bw23JUozGsxN5bExmbsn1A%2FIfsPG6avs8FhdZf6xJTsnQMOzjaxZUSZ9OEdV%2B2dtU79Uc2ETH%2BfuGlgpmirsrYgqWYaKs1A7WEyqE3VhwrBzxftJ04qc75vmVgVQ991hiuiM7pQz%2FWd3RurbHJzmOAbHBCHPycAvMhnXHIP2GlYcB%2FlOoio%2BMJ7piMoGOqUB5qSj2wlL0J9Wjj8M57v9BMnKSGlPjzBiN%2FFtLlzICY1LJw1XJwLI3YIRji787tAbsZMswGqWmw7kaKeiM%2FG%2BWw%2BJ31OepblRCYZ5OBDfMK4vGbKWmcqppcO0xiupyV35rvcGciqTUVdZf4TzBaFyRJmXxWU%2BESDQLlPJzrBKkx2dINTPGkrzPhhljHNCi4Qwq1gp7XWhr7gPSczwY04ymKd8kzi6&X-Amz-Signature=c0db3e148f7e3e0eab7f5190ca3b9c0f72e563f9c884354f46abd16c2f40e40d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

