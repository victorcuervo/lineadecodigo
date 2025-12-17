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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRCYQGJV%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T095614Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1w5jNv1zc12B8KFJT%2Bp0Cf8393GHgU0gRCrvhNKV4VgIgOl%2B0Pbrwi1T65v9kUCwBNRAbpUayJLxaZHSxzd32USIq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDNgpZ2EjswDM%2F1ZAqyrcA%2FdELZZ5NFzjEjNl4%2BwBZY7v0pnytWci2O0fuqwMOtfTPRLqNNrZFMImkY14UqBUmV554mO7Fs9bJTA%2FDmcgRDI0aJkT94%2BsucSLdgziHlW5m%2F1FfLUthyQw7Yyg3cRDlM75MC5muYv3lgFe7OjK4my8gwMdXi%2B1gEUg%2FauEU8vxA0XVQjs8oSEMd6PF%2F2DZp5m93r1lxnCmSy91OhkazMqYISXitjj%2F0RZKfJyxi9gusKiKjSomeoNOMCAeb8Iqrq06VifC6uSKXiL2Hjss8VvGBeBSEW0Hp8M5xaxIr0X4XvyHR4b4dAp070SqpI0cAmS02VcowB9x6BTj0HSt4fUgr4774lgxdUefnGIsXmBGZ8WfTGMmX%2BXqMVjusx7AR0uhKaWe%2BU5HHi8mNvl4AmyaDB0Tw4Ykf4WQpS56HqSP6LXCkS2ENlFjocHIsGygGfX8yvILKs%2BXiYm07LkezBlB%2FzBte0zZUEDVomcOMPAwPIZeYKRmAUKEy15rvNd5swGKQshm3WL5p6Fsji4k%2B6%2B6Aa92mBaiVcHKpkQJYVaBAqEBKGtdFAdbi5ds3A7%2FQyIGO5bvu7uuK5VfidB3h8fCO8CsM3dM72Oc9iydMmGp9iOfNkC4842Rol3YMJ%2FwicoGOqUB%2FB3dB014Qrvbjbl1KcAUUHDnK40aSo2cFVs%2FLuZgn9KVtRDuSlHtuM0GbdIEOYo1XXRQUaY0xtCi%2Fujzcq61pcgM8pX3J5skryFleWRwj1ryUdeIxg%2F8kAc8O8r9F02TQQnq7F6tfeMVVTq4ryPc6VsoutEWPI3UyXZQGyk9RA%2FsW236WhHIPHjDOz%2BmdGvYx59Ol3HDMBBOomfM9XIdY2NRQe60&X-Amz-Signature=8821a20a0a24157d9c4221c2660b4972133056d73ac2481fca1a8624038346ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRCYQGJV%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T095614Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1w5jNv1zc12B8KFJT%2Bp0Cf8393GHgU0gRCrvhNKV4VgIgOl%2B0Pbrwi1T65v9kUCwBNRAbpUayJLxaZHSxzd32USIq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDNgpZ2EjswDM%2F1ZAqyrcA%2FdELZZ5NFzjEjNl4%2BwBZY7v0pnytWci2O0fuqwMOtfTPRLqNNrZFMImkY14UqBUmV554mO7Fs9bJTA%2FDmcgRDI0aJkT94%2BsucSLdgziHlW5m%2F1FfLUthyQw7Yyg3cRDlM75MC5muYv3lgFe7OjK4my8gwMdXi%2B1gEUg%2FauEU8vxA0XVQjs8oSEMd6PF%2F2DZp5m93r1lxnCmSy91OhkazMqYISXitjj%2F0RZKfJyxi9gusKiKjSomeoNOMCAeb8Iqrq06VifC6uSKXiL2Hjss8VvGBeBSEW0Hp8M5xaxIr0X4XvyHR4b4dAp070SqpI0cAmS02VcowB9x6BTj0HSt4fUgr4774lgxdUefnGIsXmBGZ8WfTGMmX%2BXqMVjusx7AR0uhKaWe%2BU5HHi8mNvl4AmyaDB0Tw4Ykf4WQpS56HqSP6LXCkS2ENlFjocHIsGygGfX8yvILKs%2BXiYm07LkezBlB%2FzBte0zZUEDVomcOMPAwPIZeYKRmAUKEy15rvNd5swGKQshm3WL5p6Fsji4k%2B6%2B6Aa92mBaiVcHKpkQJYVaBAqEBKGtdFAdbi5ds3A7%2FQyIGO5bvu7uuK5VfidB3h8fCO8CsM3dM72Oc9iydMmGp9iOfNkC4842Rol3YMJ%2FwicoGOqUB%2FB3dB014Qrvbjbl1KcAUUHDnK40aSo2cFVs%2FLuZgn9KVtRDuSlHtuM0GbdIEOYo1XXRQUaY0xtCi%2Fujzcq61pcgM8pX3J5skryFleWRwj1ryUdeIxg%2F8kAc8O8r9F02TQQnq7F6tfeMVVTq4ryPc6VsoutEWPI3UyXZQGyk9RA%2FsW236WhHIPHjDOz%2BmdGvYx59Ol3HDMBBOomfM9XIdY2NRQe60&X-Amz-Signature=18affc482b00f8a55baa190efb3df537bf8dd5a52e70f7010833e07f75a4babc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

