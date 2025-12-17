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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666MUAYPM%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T172629Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkPUlo%2B3mA43dfX%2BXWShDfTEmtTt8I5suowMqWbn7FgAIhAO4g9uN9R66RXfxxSYP2IFxxVReo18dgR1Mw6VehGWpIKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgysNg4Ubb4Tkue5p60q3APgtxCAgIL2Aqo1t1MCLB3l0u5%2FCJRBhW7t%2B7IjHP%2BIeNzNGOOxH1JzX1A0NosUJykBSKEiQ2FIvRiH%2BXE8zffYyrXYYdthB1Ik7voT4hX9QZH6R7H0ICODBIi6B%2BJbAuOHt%2F7SrXNR9aTzmlgAXkfdiQ6iIOwJ10Z36i3mWcTiedEsawOGn3XpOIoRUhDMOJGgUFsYbNMoyrUSdVtf2WkRMuXNXjTRirm%2B7ALPA3T05HX73timzkec%2BPQKNGmvthnzwATjnmKGMJ2fCv6LxUVPJw3UA3LqcjltCgIOE%2FdTyQ8nndsQPqiBUqXqMS2ByyPnhPu8dN8qT4o6c%2BLB43PMYleS0E%2FeU2FG0ecA0FUVu5z9EBt8SgsUxyhhRuMZyoAmwZv07FPynHZ%2BOOeGYdnW%2B1FQlRkcuQRgULwSJOiSJdGeumbkhuFLI9tn3iP4zXkQM%2BZz%2FJi28JyVxwp%2FEGLC1Y8FC5y8Mal2J1tZ4anbE1ota2udoiFbEU26Ft9p5ZjUp0%2F8J8S4pemOG0%2FEOXWZz9f1%2BB3rJ65xaxSQa2aO8WGxTDKsesGIsM%2Fx00ftn7915Py7nj1XBm41lQXV3Hl097kAqSxNyCq05vgo6ZdzyY%2B%2F7Ygxb7Kt78Zo2zCdoIvKBjqkAagP850VBloJjM1Tjo%2F6AS2HHk0Va0jAQD9nhwa4PFFI37Xxw%2Fk8R%2FXPJsgVIWouGg2nfKpgpQ4Mqp5iRMdybqa0gHn0DgzF1FkwjSnYxPmR6j5QMnNQy35or6dP4DpnqwBlR2q40N%2FSDP1dxtAZcuOb7hqjQrLkjHeLcdDRvZsDkBeiAz%2BDdpvYdK8lJIT5Ud6jNKOUiIerGx63udQgz6zihnII&X-Amz-Signature=7b0b1ae4aa6edd7374e143c64ff51419fabae2b60e16f00ebfa98f2bf1ec76c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666MUAYPM%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T172629Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkPUlo%2B3mA43dfX%2BXWShDfTEmtTt8I5suowMqWbn7FgAIhAO4g9uN9R66RXfxxSYP2IFxxVReo18dgR1Mw6VehGWpIKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgysNg4Ubb4Tkue5p60q3APgtxCAgIL2Aqo1t1MCLB3l0u5%2FCJRBhW7t%2B7IjHP%2BIeNzNGOOxH1JzX1A0NosUJykBSKEiQ2FIvRiH%2BXE8zffYyrXYYdthB1Ik7voT4hX9QZH6R7H0ICODBIi6B%2BJbAuOHt%2F7SrXNR9aTzmlgAXkfdiQ6iIOwJ10Z36i3mWcTiedEsawOGn3XpOIoRUhDMOJGgUFsYbNMoyrUSdVtf2WkRMuXNXjTRirm%2B7ALPA3T05HX73timzkec%2BPQKNGmvthnzwATjnmKGMJ2fCv6LxUVPJw3UA3LqcjltCgIOE%2FdTyQ8nndsQPqiBUqXqMS2ByyPnhPu8dN8qT4o6c%2BLB43PMYleS0E%2FeU2FG0ecA0FUVu5z9EBt8SgsUxyhhRuMZyoAmwZv07FPynHZ%2BOOeGYdnW%2B1FQlRkcuQRgULwSJOiSJdGeumbkhuFLI9tn3iP4zXkQM%2BZz%2FJi28JyVxwp%2FEGLC1Y8FC5y8Mal2J1tZ4anbE1ota2udoiFbEU26Ft9p5ZjUp0%2F8J8S4pemOG0%2FEOXWZz9f1%2BB3rJ65xaxSQa2aO8WGxTDKsesGIsM%2Fx00ftn7915Py7nj1XBm41lQXV3Hl097kAqSxNyCq05vgo6ZdzyY%2B%2F7Ygxb7Kt78Zo2zCdoIvKBjqkAagP850VBloJjM1Tjo%2F6AS2HHk0Va0jAQD9nhwa4PFFI37Xxw%2Fk8R%2FXPJsgVIWouGg2nfKpgpQ4Mqp5iRMdybqa0gHn0DgzF1FkwjSnYxPmR6j5QMnNQy35or6dP4DpnqwBlR2q40N%2FSDP1dxtAZcuOb7hqjQrLkjHeLcdDRvZsDkBeiAz%2BDdpvYdK8lJIT5Ud6jNKOUiIerGx63udQgz6zihnII&X-Amz-Signature=87bbdadddd3cfd4b7633167cf588746fc2e66afcf157f6a6fc78cb8c3907cfcf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

