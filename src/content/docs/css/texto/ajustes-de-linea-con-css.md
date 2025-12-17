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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIVXQ6DJ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T053946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCECOb2MafE52KNPP%2FIP6XWBApkd%2B1Szh673Hp210YqfQIhAJvHG9I%2FtAyH6tsD0ims961ETZvNgHl6kc%2BSWsWCyFZKKv8DCHcQABoMNjM3NDIzMTgzODA1Igy2o9hj99H2s9nUe9Iq3ANbQUU8lQgqqklJpO2LEonImG9elWLn8XxMHeN%2F7Z40I1JO8KZpssAbH6h6MCHVi2%2FlPZlIAt2dOrSnIK0C7rM2GF4ysHNUq20uz0AtijGjo%2BQEYtWTfUfz%2Bseo5sluRbtNGHAXyyyaz1PiypQbwOC0bXHvMJHRFGZIuMc4U36wHCKqWLKnY26iyb%2FDCDzzm32tlk8QUS%2Bi6IdouhP7lClFrxUV9BdzRVnjtRzeZ%2F73HKtqqB%2Bkpkel4dIxPUUgKpGdyO48%2FIBVpeQRdL1em4MNPtK3Lm9D%2FBXmv7wcCX2NDIBP6tG54U3FS83StfXjZjKJs5BiyFprDqxFfyCB4gur0OXvvwWTN8B9V%2Bh8qJtjCHt4yRy1qTpjYc%2BmODqYgS4PzuJkERUUwYzJ9XoCgSEYrKtRVpC8cvqu52vFrdIhZuBct6AayFJeK1PbK973f16fwTBV1Hi65oM56WKRpnA4OUiio7rkKtDZNlQ%2F4XadcWTAxau2BMyilAgU5gA8fYacHcD0yduTl6njJwteOAXimwmtw7vyKdEtkNTdwzv4Z4uKrA35P%2BAwzioaQB1%2B7cBcRdmtaDFqhe0fIRPDutFcHR37Rq%2B4ib%2BzXSv1c031%2Ff5GVgm7cOlMJ2fGdTCtgonKBjqkAdCcAKCTpnPX9vRrY3bUxSHlI%2BVN8PHv7PYqYrDLPWiwBZMMqSb7W0f7irdqru%2BLmx75Xr1O7kLjXYj7L6JHuPGbBXlVjD7YU0ko2F3UVpKkfRCXOriB4%2FdtTdVIMJF9EHffA2xNgJsQEEPEXZc9Ge6uS6Z%2FW98Nlop%2FvGlV8u79kxEGwtSNqnEwHl0ApW3CxYUAXOzQuKPiuo7t4sqziytmuDYQ&X-Amz-Signature=d819c9283ed39150230e83e513c84150a17ecc7376b45bb272415509a6ab0076&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIVXQ6DJ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T053946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCECOb2MafE52KNPP%2FIP6XWBApkd%2B1Szh673Hp210YqfQIhAJvHG9I%2FtAyH6tsD0ims961ETZvNgHl6kc%2BSWsWCyFZKKv8DCHcQABoMNjM3NDIzMTgzODA1Igy2o9hj99H2s9nUe9Iq3ANbQUU8lQgqqklJpO2LEonImG9elWLn8XxMHeN%2F7Z40I1JO8KZpssAbH6h6MCHVi2%2FlPZlIAt2dOrSnIK0C7rM2GF4ysHNUq20uz0AtijGjo%2BQEYtWTfUfz%2Bseo5sluRbtNGHAXyyyaz1PiypQbwOC0bXHvMJHRFGZIuMc4U36wHCKqWLKnY26iyb%2FDCDzzm32tlk8QUS%2Bi6IdouhP7lClFrxUV9BdzRVnjtRzeZ%2F73HKtqqB%2Bkpkel4dIxPUUgKpGdyO48%2FIBVpeQRdL1em4MNPtK3Lm9D%2FBXmv7wcCX2NDIBP6tG54U3FS83StfXjZjKJs5BiyFprDqxFfyCB4gur0OXvvwWTN8B9V%2Bh8qJtjCHt4yRy1qTpjYc%2BmODqYgS4PzuJkERUUwYzJ9XoCgSEYrKtRVpC8cvqu52vFrdIhZuBct6AayFJeK1PbK973f16fwTBV1Hi65oM56WKRpnA4OUiio7rkKtDZNlQ%2F4XadcWTAxau2BMyilAgU5gA8fYacHcD0yduTl6njJwteOAXimwmtw7vyKdEtkNTdwzv4Z4uKrA35P%2BAwzioaQB1%2B7cBcRdmtaDFqhe0fIRPDutFcHR37Rq%2B4ib%2BzXSv1c031%2Ff5GVgm7cOlMJ2fGdTCtgonKBjqkAdCcAKCTpnPX9vRrY3bUxSHlI%2BVN8PHv7PYqYrDLPWiwBZMMqSb7W0f7irdqru%2BLmx75Xr1O7kLjXYj7L6JHuPGbBXlVjD7YU0ko2F3UVpKkfRCXOriB4%2FdtTdVIMJF9EHffA2xNgJsQEEPEXZc9Ge6uS6Z%2FW98Nlop%2FvGlV8u79kxEGwtSNqnEwHl0ApW3CxYUAXOzQuKPiuo7t4sqziytmuDYQ&X-Amz-Signature=abb5ffb433d3b1dc54be293c4e8b093bfbdbb3bb06ef0307dbea9fc028158bc3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

