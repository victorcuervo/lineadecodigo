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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDVQWPFE%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T044144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHLQA%2BkhJ7ngTOVWN6K8qNIZt4ALNjUxCGxDlKzuncrAAiA5OAv2aY9wLXhFqYncwcvTLUkf9iI8%2BnOSSxNzaGrmgir%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMNjCl9gi3atmmaHIbKtwDVxOe5MRgz%2F0axOOtWWrGmW4uK6V3BgvpnpEtUlYC34WJWaOScL1E%2BGypnQSa4aVwEGlrHDgPExkpo9IPUDGwAtiGro%2F4Kbajj6nx%2B3FCEz6R41t4cP33pMp6EzxvFxMHJkr8IgEZ0uPGCQm66W0SEapIinI7fmHwYJvSCbiG51iwVPYVZ7K0DnqFmEIuVGryLhFGGf4Nt%2FVCV1EDk9oFloz3tHISaJz8fYsG9VAHayrjSpjewqLqpXONf9JP%2FvJPEuGfj2uDZ3j7DdGtHXWucMaJ4Sd%2FbiP75%2FQ5hCRahpoHy0pfGDjzYR6d5VXJW%2FI68C3lfdH5m%2BlerRpWZHfjVsxHoe2tNfYZxIQQRc4j4c%2F86AE%2F3xrkIz8g3HBZMq%2BFy4X2aS8u0v556iroxeRWGjUQ9r7yK7cna12cOFA%2FwZna6%2FDIxdNluKEYgdbMas%2BTb8PQ%2F%2BXI4VKbGwCnpTjcDoeJEVhxuwMxI78uL566lENM6iHMOluCYSjhpWWIAbJAjWt1UfiRitlAhAC36DL8B2RP4FMkvl5VxPhXvGy6Z%2FDWogzzTdzmKBqGv%2FDGP5eH4OLSrEfHokU%2B%2BLWeIEkyU5oQQ71oj4WvAeC0C8t%2BHGipw7R4baObsFKmKsEw386IygY6pgEJa13NPrpoVTr3Ud0IiSCmr23aIfWAnOPTOGSAgoTM%2FsQlSKPloyOMM1D4rIRT0gxTSY5ZYfU1HhTHwiyCvBsIMzx8hJZf9vwGvexSrsaQ185eTnrNZsk9oDr2cC302%2F1PtKBTa40%2Br%2BBTqv9tHNOI2R0BmoejBnpLDHYsA73kvPumgJFBykc%2FyYeuaEUShwP12DGLKBXxhwCpaLNieV6HE0BtZpHf&X-Amz-Signature=4cb09a410a2c4cd3a05b501fac0ca2f9c80631df340723bd8216d93c501e36d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDVQWPFE%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T044144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHLQA%2BkhJ7ngTOVWN6K8qNIZt4ALNjUxCGxDlKzuncrAAiA5OAv2aY9wLXhFqYncwcvTLUkf9iI8%2BnOSSxNzaGrmgir%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMNjCl9gi3atmmaHIbKtwDVxOe5MRgz%2F0axOOtWWrGmW4uK6V3BgvpnpEtUlYC34WJWaOScL1E%2BGypnQSa4aVwEGlrHDgPExkpo9IPUDGwAtiGro%2F4Kbajj6nx%2B3FCEz6R41t4cP33pMp6EzxvFxMHJkr8IgEZ0uPGCQm66W0SEapIinI7fmHwYJvSCbiG51iwVPYVZ7K0DnqFmEIuVGryLhFGGf4Nt%2FVCV1EDk9oFloz3tHISaJz8fYsG9VAHayrjSpjewqLqpXONf9JP%2FvJPEuGfj2uDZ3j7DdGtHXWucMaJ4Sd%2FbiP75%2FQ5hCRahpoHy0pfGDjzYR6d5VXJW%2FI68C3lfdH5m%2BlerRpWZHfjVsxHoe2tNfYZxIQQRc4j4c%2F86AE%2F3xrkIz8g3HBZMq%2BFy4X2aS8u0v556iroxeRWGjUQ9r7yK7cna12cOFA%2FwZna6%2FDIxdNluKEYgdbMas%2BTb8PQ%2F%2BXI4VKbGwCnpTjcDoeJEVhxuwMxI78uL566lENM6iHMOluCYSjhpWWIAbJAjWt1UfiRitlAhAC36DL8B2RP4FMkvl5VxPhXvGy6Z%2FDWogzzTdzmKBqGv%2FDGP5eH4OLSrEfHokU%2B%2BLWeIEkyU5oQQ71oj4WvAeC0C8t%2BHGipw7R4baObsFKmKsEw386IygY6pgEJa13NPrpoVTr3Ud0IiSCmr23aIfWAnOPTOGSAgoTM%2FsQlSKPloyOMM1D4rIRT0gxTSY5ZYfU1HhTHwiyCvBsIMzx8hJZf9vwGvexSrsaQ185eTnrNZsk9oDr2cC302%2F1PtKBTa40%2Br%2BBTqv9tHNOI2R0BmoejBnpLDHYsA73kvPumgJFBykc%2FyYeuaEUShwP12DGLKBXxhwCpaLNieV6HE0BtZpHf&X-Amz-Signature=685f22fd0c8bd313b3cb88e0774a4121a4cdd69393967f3885ef2cb74eb9e6a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

