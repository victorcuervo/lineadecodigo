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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UV576TF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T195859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAQP4nTTu88tXMH2ogRPNa9kPHIEsfC5m8dxmUoBLH3sAiAuK17JOBN219cFQMCBJwYiIV7kSMqo1NyJSeyvXrEThSqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwDcV2biJbkVwmODmKtwDMegCDYZ92y5mzIELW1ZOSAklz0R4rEOz4OyHLitiSmXeqHvzVie8NDGZbC3GfMWldBi9PzOjOAJ6YwKBn1nojo2uRdpxuzBYknKEd3iXu9ndo3y8F8BeaXY5rTGMMFdbdiv8Itn9RNo4CP%2BiAD3il%2BqUFuftsJCcN8zC8Q0aeQxXZFqgSIbO9RmthsSs1PgNMXnDBtNi6kdCJCBTPXr1jCcJckfkQjEAscQpXgTbIPMQ1J2ayJnXh9rxvHGiqusHIvTa43tpnldGkSJhYiAH2wwYC9eJ01kpx6RuAJyLSmHUm0hM6O2b5TGhqjwKYGX2%2FCHbzghFo6Ww%2BkgTGRo8%2FsNFPou3VKBx3GbwY%2FbGzet%2FhD5Hfqw%2BuIDJEL7I0ux02YzL88yk70f%2BcqdGaFzp3Eevkp3SIMJCcfMUhwjuvo46aPAfKrrEJwNfYjHG2HzaM481%2FZgWdFEbnEqcsNp1%2Bhc%2FjcnOrZzUhhroobSYVrfHpn6DxtYozF1be%2FW4Um7SDsKwo4ULSzX0BxmlntIox5LVg%2FEmijsFX9GB70W2mRZwAdeiZO183rbuqcIcjwzuIYyrtbUv9nZZZ%2BXPi9TKl7UQKzEAhQtdztUiAhzf7buqq7Xnv%2BffwoQqM6UwpIuMygY6pgHXogIIe1H4T5G8zb78eTujMmgnRPwHpI%2B7%2FCd8%2FHO1sobZrorDAxpheUvEnJJPTEtqnVr9TjMDuEiiXDpxEY%2B4CXtfbY7ms4vwg0fct4L2xgib3B3Pow0guXF3Hq9UN%2BPXK1NaI1UXPcFx4tBb7vN4izUua1pa3FdnL6ies705weR2HTzuvKm4mDY65eOSHrVbZOhLLD3nCinveLOpOptogEXtiVkm&X-Amz-Signature=1ec8fcbd597a47d7e2824b65e79faccb68647527c120bd43a5d15938af462eaf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UV576TF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T195859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAQP4nTTu88tXMH2ogRPNa9kPHIEsfC5m8dxmUoBLH3sAiAuK17JOBN219cFQMCBJwYiIV7kSMqo1NyJSeyvXrEThSqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwDcV2biJbkVwmODmKtwDMegCDYZ92y5mzIELW1ZOSAklz0R4rEOz4OyHLitiSmXeqHvzVie8NDGZbC3GfMWldBi9PzOjOAJ6YwKBn1nojo2uRdpxuzBYknKEd3iXu9ndo3y8F8BeaXY5rTGMMFdbdiv8Itn9RNo4CP%2BiAD3il%2BqUFuftsJCcN8zC8Q0aeQxXZFqgSIbO9RmthsSs1PgNMXnDBtNi6kdCJCBTPXr1jCcJckfkQjEAscQpXgTbIPMQ1J2ayJnXh9rxvHGiqusHIvTa43tpnldGkSJhYiAH2wwYC9eJ01kpx6RuAJyLSmHUm0hM6O2b5TGhqjwKYGX2%2FCHbzghFo6Ww%2BkgTGRo8%2FsNFPou3VKBx3GbwY%2FbGzet%2FhD5Hfqw%2BuIDJEL7I0ux02YzL88yk70f%2BcqdGaFzp3Eevkp3SIMJCcfMUhwjuvo46aPAfKrrEJwNfYjHG2HzaM481%2FZgWdFEbnEqcsNp1%2Bhc%2FjcnOrZzUhhroobSYVrfHpn6DxtYozF1be%2FW4Um7SDsKwo4ULSzX0BxmlntIox5LVg%2FEmijsFX9GB70W2mRZwAdeiZO183rbuqcIcjwzuIYyrtbUv9nZZZ%2BXPi9TKl7UQKzEAhQtdztUiAhzf7buqq7Xnv%2BffwoQqM6UwpIuMygY6pgHXogIIe1H4T5G8zb78eTujMmgnRPwHpI%2B7%2FCd8%2FHO1sobZrorDAxpheUvEnJJPTEtqnVr9TjMDuEiiXDpxEY%2B4CXtfbY7ms4vwg0fct4L2xgib3B3Pow0guXF3Hq9UN%2BPXK1NaI1UXPcFx4tBb7vN4izUua1pa3FdnL6ies705weR2HTzuvKm4mDY65eOSHrVbZOhLLD3nCinveLOpOptogEXtiVkm&X-Amz-Signature=00e2ada7da9f09e2acbed25a62cac081f4b80cb2cefd5520c29146e66be5ff5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

