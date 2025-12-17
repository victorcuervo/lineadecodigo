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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Q653FFC%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T142726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHedLmKnbwuSiXRN%2BIMp1%2FixNFFujfp%2FERIi6NAinLLWAiEA9SftzTo1qaWjkG%2FuqoC15jfiGwcPChaXWSsxtmKlw4Uq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDNGRH%2BIdfw20LGBoYSrcA2aR3TV7Xiz5I4y7L8uxJgpdpI%2BZ8zhph7GiKER1MRXT5goY1h6azZahgndeNja4LryPWVohBqY9jlTozhcHA3iueufVrtIXVcok%2F28Idu1h2tZOs%2BHI8gEoZX%2FkgvipteDkYEIWkqsrPRHZzwPhhvzBZmVln83r7g6xP8ZDQVq5P3jNzY5Zp84y7kEtMxmz0aZYdFTXrJUNyef5oWmkyQ82j7L7QjhLcF37cJ7SuyirK2xgqHcNhBmlBNipAOj6wRhVqV6kx%2BaGR2PFZNVSE%2B%2FhI2cnWB%2FOQfp2BA3gEIzTBr97R5AkCIcxpVZGPeTbp%2BlHooKhLp4xViEPmBwwyA%2FcLCvgA5xB0iQ07CUzKlXRnMh1SjaCXUtFu5RDd%2Fp8Jfd0c%2Bq1QAjuy1T4sCXnMfWHKRbblZR%2Fjv4hDmYdBwevOqRadDQiS25SBrp8aPMxy0xi9AXTukpdA93xdYOqp8MK7iJfiP3P%2BxjueQ7IgRbbAkDC0YJbCyGUKD3rt5SsL38YIcyXzP0CHfyqT2ZTgddwx7qaX%2BvQMhkZYNZ%2B%2BBvn7Upy8PYlbDY0WihrdIvd6N1L%2FdKLfZVcUUHIHA5XgT0VUtIcEvPvLy3%2Fl%2F%2FxA3nXpS4hoG1zxeKLGuN2MKThisoGOqUBmB0OyXfNn%2B%2BiEXoTCj6KwcUF%2BROKD8nvNjYl%2Fn5ejVCSq0GbX5OeB56GauV8%2FRFtTSs6p9qVpMPjmC0umtlBe4ca4l86q%2F4cubkn8PouOIqcGtyFmMTsrtCJJM1Dp3GtsoeFe4d0VR7o1P6fCcOYGdQXRVpgpNC3%2FB1yFFHrRGnm5hIELaOsLJcIkkTRsLXF872xN3uuVsIak5r236gINymK5T4A&X-Amz-Signature=02d9af887d81597aa3c22d228cb0421981c8eaa95e4eedffa4c0d93d7b154f00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Q653FFC%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T142726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHedLmKnbwuSiXRN%2BIMp1%2FixNFFujfp%2FERIi6NAinLLWAiEA9SftzTo1qaWjkG%2FuqoC15jfiGwcPChaXWSsxtmKlw4Uq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDNGRH%2BIdfw20LGBoYSrcA2aR3TV7Xiz5I4y7L8uxJgpdpI%2BZ8zhph7GiKER1MRXT5goY1h6azZahgndeNja4LryPWVohBqY9jlTozhcHA3iueufVrtIXVcok%2F28Idu1h2tZOs%2BHI8gEoZX%2FkgvipteDkYEIWkqsrPRHZzwPhhvzBZmVln83r7g6xP8ZDQVq5P3jNzY5Zp84y7kEtMxmz0aZYdFTXrJUNyef5oWmkyQ82j7L7QjhLcF37cJ7SuyirK2xgqHcNhBmlBNipAOj6wRhVqV6kx%2BaGR2PFZNVSE%2B%2FhI2cnWB%2FOQfp2BA3gEIzTBr97R5AkCIcxpVZGPeTbp%2BlHooKhLp4xViEPmBwwyA%2FcLCvgA5xB0iQ07CUzKlXRnMh1SjaCXUtFu5RDd%2Fp8Jfd0c%2Bq1QAjuy1T4sCXnMfWHKRbblZR%2Fjv4hDmYdBwevOqRadDQiS25SBrp8aPMxy0xi9AXTukpdA93xdYOqp8MK7iJfiP3P%2BxjueQ7IgRbbAkDC0YJbCyGUKD3rt5SsL38YIcyXzP0CHfyqT2ZTgddwx7qaX%2BvQMhkZYNZ%2B%2BBvn7Upy8PYlbDY0WihrdIvd6N1L%2FdKLfZVcUUHIHA5XgT0VUtIcEvPvLy3%2Fl%2F%2FxA3nXpS4hoG1zxeKLGuN2MKThisoGOqUBmB0OyXfNn%2B%2BiEXoTCj6KwcUF%2BROKD8nvNjYl%2Fn5ejVCSq0GbX5OeB56GauV8%2FRFtTSs6p9qVpMPjmC0umtlBe4ca4l86q%2F4cubkn8PouOIqcGtyFmMTsrtCJJM1Dp3GtsoeFe4d0VR7o1P6fCcOYGdQXRVpgpNC3%2FB1yFFHrRGnm5hIELaOsLJcIkkTRsLXF872xN3uuVsIak5r236gINymK5T4A&X-Amz-Signature=b056dc4b8d8fd301d1479e634f58ef5efe40696e3ba24654919fe75674630806&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

