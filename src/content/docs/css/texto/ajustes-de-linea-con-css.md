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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZINFOE4W%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T104537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDo1GC7DK6RtQW%2BMgu0GdQGRpNNP1PglXoZAdJ9CqP9rgIhAIWwbCf6v2z4wIy5VjomZ90MQkkb7pHWWy00X%2FIogqaPKv8DCHwQABoMNjM3NDIzMTgzODA1IgxgDdCh90WWZt2O5WMq3AP1vA90Yf81bF4P6kfzrSOU%2FTiOGFhgXqqn8NopDL8qXwFAeHR1KE8NIx%2F8HeT1bCgpJyzH3otEUNwNiPqwflc0%2FoN%2FyjAITOd%2FOtz9VLJki7ZB1JJmxnnEsfeG5cULth5BsaaHzZHVWA%2BTtm9HrQZUT4Q7SIpL%2BQBTXUMN4CbEcrazoUPvVi9yCT3BFaF3iDfcyLg1PERDtAomyNdazwhq90MpqHLudANBz3idRXZT7K6bUvwc8R%2B17crzwBRAkDBrhgHA0qUhxDF%2FmmQawo39PqMgbmF3sewQz98r%2FUit1bKII3Z4PPBukhQqoCgoJgeFrNolnyn5k1YT59ViCnG2O7Rimo6yXan%2BR6bpZLJCM75umMFnbBeH%2BCfYFheue83pVw9EU55faWA1iudQLJkSpN5r4qqaiGfUPU827a9y1QhO5w7NpGcQzQOETHfYZexwPN44LVmxoYA9lVAQU%2B1g7MpHd4RTAkeRD3Td4Y8eo%2FGqXBj%2FVY7ORMgAcy4W%2B1W9rPPIfR9WAusKIR7Xg%2BFInSvdlHLSn0Jd5WnqLynW2mHcYZod1H7QgTzTOVjoHRvg3YR9UffgGBCEzAHJzN8ayVZ7TQOfjFJaCRlpZ5wmUubY7Bo2R2hwvJYHHDCSj4rKBjqkAWCGXJnqLowF%2Fqce7f6zeolFFf7wl72D%2FbcTLjxv7OPqyg%2BEc8EcWHLktr26FDywTmCKIFpfQILOlw0TfshlYOJqGW6rke22xvRVQM1iKgjZAIFOsNJgDFORhxJNGjfpriplTYBmOPpjQ6nxO8JHRiUza9aVvFodj6iwjP4Mvaui8fmf5a77QRzG1ao33s2BhlT9vwq1oMmeNsXzNcb%2Bk13w4TqC&X-Amz-Signature=4ae83436cad118e6578d6424bf994fde49a45dcbed43b70749851dad62c71ff9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZINFOE4W%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T104537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDo1GC7DK6RtQW%2BMgu0GdQGRpNNP1PglXoZAdJ9CqP9rgIhAIWwbCf6v2z4wIy5VjomZ90MQkkb7pHWWy00X%2FIogqaPKv8DCHwQABoMNjM3NDIzMTgzODA1IgxgDdCh90WWZt2O5WMq3AP1vA90Yf81bF4P6kfzrSOU%2FTiOGFhgXqqn8NopDL8qXwFAeHR1KE8NIx%2F8HeT1bCgpJyzH3otEUNwNiPqwflc0%2FoN%2FyjAITOd%2FOtz9VLJki7ZB1JJmxnnEsfeG5cULth5BsaaHzZHVWA%2BTtm9HrQZUT4Q7SIpL%2BQBTXUMN4CbEcrazoUPvVi9yCT3BFaF3iDfcyLg1PERDtAomyNdazwhq90MpqHLudANBz3idRXZT7K6bUvwc8R%2B17crzwBRAkDBrhgHA0qUhxDF%2FmmQawo39PqMgbmF3sewQz98r%2FUit1bKII3Z4PPBukhQqoCgoJgeFrNolnyn5k1YT59ViCnG2O7Rimo6yXan%2BR6bpZLJCM75umMFnbBeH%2BCfYFheue83pVw9EU55faWA1iudQLJkSpN5r4qqaiGfUPU827a9y1QhO5w7NpGcQzQOETHfYZexwPN44LVmxoYA9lVAQU%2B1g7MpHd4RTAkeRD3Td4Y8eo%2FGqXBj%2FVY7ORMgAcy4W%2B1W9rPPIfR9WAusKIR7Xg%2BFInSvdlHLSn0Jd5WnqLynW2mHcYZod1H7QgTzTOVjoHRvg3YR9UffgGBCEzAHJzN8ayVZ7TQOfjFJaCRlpZ5wmUubY7Bo2R2hwvJYHHDCSj4rKBjqkAWCGXJnqLowF%2Fqce7f6zeolFFf7wl72D%2FbcTLjxv7OPqyg%2BEc8EcWHLktr26FDywTmCKIFpfQILOlw0TfshlYOJqGW6rke22xvRVQM1iKgjZAIFOsNJgDFORhxJNGjfpriplTYBmOPpjQ6nxO8JHRiUza9aVvFodj6iwjP4Mvaui8fmf5a77QRzG1ao33s2BhlT9vwq1oMmeNsXzNcb%2Bk13w4TqC&X-Amz-Signature=02a29e332570565c144b629f024301573668142f1cc055497cf0a1056ce95720&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

