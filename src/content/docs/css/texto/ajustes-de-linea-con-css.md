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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662USDSAHZ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T183506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgX9A7W2m0Yqx%2BGht9MWim8r4UUa3mcKleusJXJWoAswIgAzsYhHa83%2BFeA%2FLnD0qIPZpdeTZZlVY8%2FdA4iasK%2FHsqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAG1ZJWjhzVnbOP6jSrcA6MLe8tEcKnHFpADWP8a29K2ptnRPhJainQOj0ttAGW%2F%2F5kPEOKSL0qT8PYs35I%2BI0AJNJZSazcK%2FQ4iDsuYInDiNpH8KvsozSqnqD6%2F%2BGvtxAUpBu2uG6VzFWbyILaVu9gn7kKeU08F3nMeeXvlrXHM1JtoAgT7l28MLCcqzHicIu5A5ErCMUQwJvHEomaapihgG8cmvCX%2BSr90%2BbT9TzaplIOBqw6g6oZCTHlFxyQFYSxjL2rHcLFfyxlKKYKRuSV5ziPraqW%2B2UvzUDL2wL%2BEpjYpSCUcGaaetHBGihm9iRB%2BFmya80ubzLexg6yBcgqzYLVV1AFHKhe4r867wwglVV1ASwBIlSmpVBt05bc73KauB1Itfk%2BA9z5obdiCuqA0%2FYKLNb5jY1ugoIk%2BdA0wbCr1sxd5h0RjdFEf9jOazPpo6jb0nv2WrydEO9xCAhA6FLBR9yBoWqrvgZk857%2F92ivPXLc941HG5seRxgv1Wd4yigJwfPigpJWqI0nQp5%2Fe4UiV3OPxKVFQJvsPcZhXqAy8BwQa85TFrk1hQqoajz1dbWWUaZ2Py3p%2BO2vWAAquxlgJ4ZhfbP%2BpViP28V25BAV6UfzIzNd%2BHajlBUtrl%2F3wj6R9GiBHmWkaMMmfi8oGOqUBjaUmmqkGRlKzY0KLOwvB%2Ba9fEWriQ3DwaQYSf3%2B2%2Bk3L3NYeNBXmgMPI5csm3lokx5t8EC%2F7iRxX7tlXkY9YDia97LmrSiiSIlkJIdEmWWUNnLu20NG%2FzwqxHVJK4Cr0Xj0Lk%2Fz2cas8bfVfwIQnugNrZsXIkUoBk%2BfzDNna%2BgygS1AGNs9qBoza9nmB%2FccEkY1TYDGVIKrqP2wnFCFkOykuQOnw&X-Amz-Signature=36c6f56b3fc6bf6397b277218f283b177fdd14df75ed2ca582b26cdce018b4d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662USDSAHZ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T183506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgX9A7W2m0Yqx%2BGht9MWim8r4UUa3mcKleusJXJWoAswIgAzsYhHa83%2BFeA%2FLnD0qIPZpdeTZZlVY8%2FdA4iasK%2FHsqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAG1ZJWjhzVnbOP6jSrcA6MLe8tEcKnHFpADWP8a29K2ptnRPhJainQOj0ttAGW%2F%2F5kPEOKSL0qT8PYs35I%2BI0AJNJZSazcK%2FQ4iDsuYInDiNpH8KvsozSqnqD6%2F%2BGvtxAUpBu2uG6VzFWbyILaVu9gn7kKeU08F3nMeeXvlrXHM1JtoAgT7l28MLCcqzHicIu5A5ErCMUQwJvHEomaapihgG8cmvCX%2BSr90%2BbT9TzaplIOBqw6g6oZCTHlFxyQFYSxjL2rHcLFfyxlKKYKRuSV5ziPraqW%2B2UvzUDL2wL%2BEpjYpSCUcGaaetHBGihm9iRB%2BFmya80ubzLexg6yBcgqzYLVV1AFHKhe4r867wwglVV1ASwBIlSmpVBt05bc73KauB1Itfk%2BA9z5obdiCuqA0%2FYKLNb5jY1ugoIk%2BdA0wbCr1sxd5h0RjdFEf9jOazPpo6jb0nv2WrydEO9xCAhA6FLBR9yBoWqrvgZk857%2F92ivPXLc941HG5seRxgv1Wd4yigJwfPigpJWqI0nQp5%2Fe4UiV3OPxKVFQJvsPcZhXqAy8BwQa85TFrk1hQqoajz1dbWWUaZ2Py3p%2BO2vWAAquxlgJ4ZhfbP%2BpViP28V25BAV6UfzIzNd%2BHajlBUtrl%2F3wj6R9GiBHmWkaMMmfi8oGOqUBjaUmmqkGRlKzY0KLOwvB%2Ba9fEWriQ3DwaQYSf3%2B2%2Bk3L3NYeNBXmgMPI5csm3lokx5t8EC%2F7iRxX7tlXkY9YDia97LmrSiiSIlkJIdEmWWUNnLu20NG%2FzwqxHVJK4Cr0Xj0Lk%2Fz2cas8bfVfwIQnugNrZsXIkUoBk%2BfzDNna%2BgygS1AGNs9qBoza9nmB%2FccEkY1TYDGVIKrqP2wnFCFkOykuQOnw&X-Amz-Signature=3dffa9feea0393dec876adce0d1938477933071ab26e5f31a9f0348065dea27b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

