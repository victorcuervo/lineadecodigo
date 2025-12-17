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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAWTYSBA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T131216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEFDr3slnnCfrbOBZ27DWf3f3q5yp5AqRt%2BS44Hg%2BQGhAiBR3izse3uarIGS20%2FNoopNkvAgRtWGD2AbpzgNh3xBCCr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMp5IeGhKd23EpZo%2FdKtwDAwY0LxpXjPP2NVV0xp1aGobLndpTXInRTyxziFuVQkl77h4M9%2FJaYfo1khI4kn6dW8ozePh8aN821ksp0ecGILInatHODYLs3z48HI59mK2WAvkFPapWUluv4d55NkgS3eR4rS%2FkyRKx3VHoQandjpJ1s%2BNXXDpA9%2B%2FmaKdET3QZhK7RP5TmZ%2Bxzz44xob8c%2Bdh55WaPuU8kD4Z2%2Bjn3NM4IKpgEFTiko8hSz26v34xcSmEg7NVy0L2livQwm2Vzkdai%2FeMIBPsueLkKiM%2BEYak6Qo96AYzNkJPJ0TO3p3hDZqgYsYQ5RePR%2BDP9l%2FUkZCW7KJySFbXRmDpnYU%2FcfJzryN2gkVtASsbHsClZ0AqeRBK0Np4r%2FeOzA7JM0tqU0%2Byhuwzi2z4KkBcR2kh2HeoA8mxkeGjH3XfNa%2BstCJQ2GrAMJybJ9MvNb5pfTV%2BwlEPbIeWrFxOkrQPq9E6YlRckgJEDRkUgxH1L7mkx3SEPhpb%2BOXuhF82iutLo85tiThekuSpKWXNdVApGjSVOoqepX19uaVjxW%2FGKoZG0MKX90TMS7%2BQ%2Ba4LMiqVFASNxMFoeqslMCT%2BQ0qsl2cT3HdOSNYHoVcDbVkrZvHSeG6DTOzCRZkZST9263%2FYwlMaKygY6pgFghDkIfOWvsh39AetE%2FsHa0Y0XmRPnxYgF%2Bp3SMOpGodnmFyAAZyEB8O7lGyjYWDQJQgKD5dV0sXf%2BchGSWhBAIsXishul3A%2B9PH%2B%2FQXuE%2Ba9D8D7ZusVxN6p%2FOF83XdymuY44cXQ9WIf%2FBVOqKzRGVlFYKI8NlYCJzrwyuZmLhWXuSHNwzmx0%2BdACtOW%2FzNKMltgsqargcQ9NpyV%2FDJOEGwaen6sC&X-Amz-Signature=3ba282dc414ef47122b28e1701498b86e50b96ef9618937b548c0f9b1a585673&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAWTYSBA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T131216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEFDr3slnnCfrbOBZ27DWf3f3q5yp5AqRt%2BS44Hg%2BQGhAiBR3izse3uarIGS20%2FNoopNkvAgRtWGD2AbpzgNh3xBCCr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMp5IeGhKd23EpZo%2FdKtwDAwY0LxpXjPP2NVV0xp1aGobLndpTXInRTyxziFuVQkl77h4M9%2FJaYfo1khI4kn6dW8ozePh8aN821ksp0ecGILInatHODYLs3z48HI59mK2WAvkFPapWUluv4d55NkgS3eR4rS%2FkyRKx3VHoQandjpJ1s%2BNXXDpA9%2B%2FmaKdET3QZhK7RP5TmZ%2Bxzz44xob8c%2Bdh55WaPuU8kD4Z2%2Bjn3NM4IKpgEFTiko8hSz26v34xcSmEg7NVy0L2livQwm2Vzkdai%2FeMIBPsueLkKiM%2BEYak6Qo96AYzNkJPJ0TO3p3hDZqgYsYQ5RePR%2BDP9l%2FUkZCW7KJySFbXRmDpnYU%2FcfJzryN2gkVtASsbHsClZ0AqeRBK0Np4r%2FeOzA7JM0tqU0%2Byhuwzi2z4KkBcR2kh2HeoA8mxkeGjH3XfNa%2BstCJQ2GrAMJybJ9MvNb5pfTV%2BwlEPbIeWrFxOkrQPq9E6YlRckgJEDRkUgxH1L7mkx3SEPhpb%2BOXuhF82iutLo85tiThekuSpKWXNdVApGjSVOoqepX19uaVjxW%2FGKoZG0MKX90TMS7%2BQ%2Ba4LMiqVFASNxMFoeqslMCT%2BQ0qsl2cT3HdOSNYHoVcDbVkrZvHSeG6DTOzCRZkZST9263%2FYwlMaKygY6pgFghDkIfOWvsh39AetE%2FsHa0Y0XmRPnxYgF%2Bp3SMOpGodnmFyAAZyEB8O7lGyjYWDQJQgKD5dV0sXf%2BchGSWhBAIsXishul3A%2B9PH%2B%2FQXuE%2Ba9D8D7ZusVxN6p%2FOF83XdymuY44cXQ9WIf%2FBVOqKzRGVlFYKI8NlYCJzrwyuZmLhWXuSHNwzmx0%2BdACtOW%2FzNKMltgsqargcQ9NpyV%2FDJOEGwaen6sC&X-Amz-Signature=d4d485bd1a6946cb579b7e0aabaddb35cc2742621aca5a9e0562e69291d8dd7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

