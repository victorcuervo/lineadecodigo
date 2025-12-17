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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X56ZG4YF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T114748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBDB39%2FHOQN3mdKMpRYx8xrX7w8F5BZ9wRk%2FJ6wsQWB7AiBHFGw%2FKR6VySarWDSL8SqmwdQEdr3msizxI4iwlKfocSr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMMZ1JHp9a2jKwJyM5KtwDuvrLGS0pkUmdR%2Fy0pnLru8ffXKO39YMrPWkuf5eJReNeMC%2BucJzxSo8YtEjpfTYd95g2EP7O%2BneL1eJXGl4xWwwJA01laDTZnYIfPzX3ZI2ICc80qXd2gInvyYVhmiFZg6qxRygLDy1ZkMidEoFtpIoUVp5uvoD5sjOCD1v%2BRdCRE%2FQ6MtRZgF11e7ZKyDN82%2FF7uSL%2B4VPPFnUBAtcr%2BOK%2FWOCpbF4GuopEaQV1ljF0qXD27X%2BISPPQJoioR%2FpC55hfxytriAwyO3ddDshRH3tbo14MQTjnpjoOIOFrtaQeESQmr0wDD8czR7B1FZJI28CJxEds9XaSTagAL9G6qyJWFphnSmv5y%2BKGR1bKBvUHd%2FRv5R7ufPOx%2F73%2BlYAgPNt3qCQG0nHrBpOBvLYWyhPa%2BPQPMEV6%2BWZ6%2Ffw3wiIZxu%2Bw3ok8RNwmw9PvNPTNLfs0BB0QeyAsmgJJVRigaYtIvwLk7z6boMPtWFXZU5ZE6C5V1yyqM%2BJ8SIiLcGib01PMSOktgUzkeQIXRFYSmv90v%2BAJDiTXuheoyhfPXjlqIVTME4wdeZweQLgWb7%2BVyyryXN%2FuPAF1wCfkY%2Bxb1F6hr8Nyy7hPsDdTIaaVCgOrmaPfYAnzK3yMJm8w56qKygY6pgHI%2BNAIU4meYsCFeV1sTGnu%2FHgX5Qo9HjFNg%2Fe%2FYYJG9Heah8Ag2g0w36kCfuplCNavO9BQ3ExmvQhNDeui3rjmsAbEegJIc%2BPqRwA75r0%2FXF6umUw1HjcRF6NlLM30%2FmH8823KRYwaTQhNcUFw6hrukB5qnV822eaMzQ5DyYFv2%2B7kAeHzuZ%2FsXRFkuiEchzV6dduZycG9nIZ9ZZ4eejwo%2Fsyk7XTE&X-Amz-Signature=9d40add3e82547f3d4f3a486f95563d4a34934bff85323d90671887a2820731c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X56ZG4YF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T114748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBDB39%2FHOQN3mdKMpRYx8xrX7w8F5BZ9wRk%2FJ6wsQWB7AiBHFGw%2FKR6VySarWDSL8SqmwdQEdr3msizxI4iwlKfocSr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMMZ1JHp9a2jKwJyM5KtwDuvrLGS0pkUmdR%2Fy0pnLru8ffXKO39YMrPWkuf5eJReNeMC%2BucJzxSo8YtEjpfTYd95g2EP7O%2BneL1eJXGl4xWwwJA01laDTZnYIfPzX3ZI2ICc80qXd2gInvyYVhmiFZg6qxRygLDy1ZkMidEoFtpIoUVp5uvoD5sjOCD1v%2BRdCRE%2FQ6MtRZgF11e7ZKyDN82%2FF7uSL%2B4VPPFnUBAtcr%2BOK%2FWOCpbF4GuopEaQV1ljF0qXD27X%2BISPPQJoioR%2FpC55hfxytriAwyO3ddDshRH3tbo14MQTjnpjoOIOFrtaQeESQmr0wDD8czR7B1FZJI28CJxEds9XaSTagAL9G6qyJWFphnSmv5y%2BKGR1bKBvUHd%2FRv5R7ufPOx%2F73%2BlYAgPNt3qCQG0nHrBpOBvLYWyhPa%2BPQPMEV6%2BWZ6%2Ffw3wiIZxu%2Bw3ok8RNwmw9PvNPTNLfs0BB0QeyAsmgJJVRigaYtIvwLk7z6boMPtWFXZU5ZE6C5V1yyqM%2BJ8SIiLcGib01PMSOktgUzkeQIXRFYSmv90v%2BAJDiTXuheoyhfPXjlqIVTME4wdeZweQLgWb7%2BVyyryXN%2FuPAF1wCfkY%2Bxb1F6hr8Nyy7hPsDdTIaaVCgOrmaPfYAnzK3yMJm8w56qKygY6pgHI%2BNAIU4meYsCFeV1sTGnu%2FHgX5Qo9HjFNg%2Fe%2FYYJG9Heah8Ag2g0w36kCfuplCNavO9BQ3ExmvQhNDeui3rjmsAbEegJIc%2BPqRwA75r0%2FXF6umUw1HjcRF6NlLM30%2FmH8823KRYwaTQhNcUFw6hrukB5qnV822eaMzQ5DyYFv2%2B7kAeHzuZ%2FsXRFkuiEchzV6dduZycG9nIZ9ZZ4eejwo%2Fsyk7XTE&X-Amz-Signature=cf08497881b6bf3d26ea574188c970516703ca8fdaf1dbcb3daa5de47d8edd7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

