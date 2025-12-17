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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGVDSQXS%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T184501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE18eVLGy0EbSBy6NEMsyM01rhaWp4hzkjhx5ywA%2BaoEAiAG7ggNvbBjQBnhMHrFAH9FotZwO8MOGxokND4dY7fpNCqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMJXpvL6oSCVozfk4KtwDP%2BTHVqTmTUr9Gzr22Wq9h%2BnNIBDwg3b33ATvhtKviWk9f0%2FFvI%2FQlkxjN9v3SrzhrbPsUPnevoNvRSGp60hmEmwOKtcv7LKmCjLgLpS37ItlfFl1KeLTCRpgHdHfbn7H8dZZOGECQbBn%2BsnPqXATgqmk9J1ARahoFoFYanwqy2bj%2Fx6VnNtLwYSbYXErwgaz0P1VaGs8gEGl5uM97L92zN9tqmKpxkB6NABJUjNXGijTNEYlR%2BTaf3SXFMAWomZyepBNN8NKSWHS4zrCsMckhd1aij7XwZ9sZXnSKmRImt1zoPsbhjGWquef%2BzrAQduG5Rvj2ufqlQ7UooAdyX5htK6Y%2FUrIUWkFsSxzTHe19ecpWMjsf11g90LIk%2BUYhwmy5iczIfa659bphvuFcNSC1ms8gsquHECqrjJHq9cgYzadXU6MnOP8frffDynZrMRnvCk8ftzo75dXIc3GjLS9%2FMUZ0MlS7xEFP8E6CdSW91ubECaD535O0YCA7jNZLTitjhzGfqrVJdCXuhNGEk0sZ%2Fs4mHMUlPo9jrfogMi2Cvm9yatP5JThgNjop32pSnLndfCIns5f2xtnb%2F3S9gLPTHy4KaluWgJR6zIVRRAioiD%2B8UFj1r0ttsO7QZMw1p%2BLygY6pgE2iepWP6tFQM9jcB%2B7B6VJ8WS%2Bs0jeiLsrC0OJcej4CTAu9oTlIoSSbh1HEJsOkJHpmvf1ijIJ9UjwucAToo5Ed4jwaqzfZNTGXmv76CwkB5HhDQHXzbScgL%2F5vlMFq%2F7pvaSpAm7RCLKsW%2FrqeO5gFM4HppM9AEtNPbWlaxxfF6WkPM7voqSi%2B62EuETY0BFO1n%2BfcWFigTpBcBmp6StYPf7pMl16&X-Amz-Signature=1df389be71235bbbd96ee5acb762c00d8da3b397a50f8f1c58dfc03eee096a78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGVDSQXS%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T184501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE18eVLGy0EbSBy6NEMsyM01rhaWp4hzkjhx5ywA%2BaoEAiAG7ggNvbBjQBnhMHrFAH9FotZwO8MOGxokND4dY7fpNCqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMJXpvL6oSCVozfk4KtwDP%2BTHVqTmTUr9Gzr22Wq9h%2BnNIBDwg3b33ATvhtKviWk9f0%2FFvI%2FQlkxjN9v3SrzhrbPsUPnevoNvRSGp60hmEmwOKtcv7LKmCjLgLpS37ItlfFl1KeLTCRpgHdHfbn7H8dZZOGECQbBn%2BsnPqXATgqmk9J1ARahoFoFYanwqy2bj%2Fx6VnNtLwYSbYXErwgaz0P1VaGs8gEGl5uM97L92zN9tqmKpxkB6NABJUjNXGijTNEYlR%2BTaf3SXFMAWomZyepBNN8NKSWHS4zrCsMckhd1aij7XwZ9sZXnSKmRImt1zoPsbhjGWquef%2BzrAQduG5Rvj2ufqlQ7UooAdyX5htK6Y%2FUrIUWkFsSxzTHe19ecpWMjsf11g90LIk%2BUYhwmy5iczIfa659bphvuFcNSC1ms8gsquHECqrjJHq9cgYzadXU6MnOP8frffDynZrMRnvCk8ftzo75dXIc3GjLS9%2FMUZ0MlS7xEFP8E6CdSW91ubECaD535O0YCA7jNZLTitjhzGfqrVJdCXuhNGEk0sZ%2Fs4mHMUlPo9jrfogMi2Cvm9yatP5JThgNjop32pSnLndfCIns5f2xtnb%2F3S9gLPTHy4KaluWgJR6zIVRRAioiD%2B8UFj1r0ttsO7QZMw1p%2BLygY6pgE2iepWP6tFQM9jcB%2B7B6VJ8WS%2Bs0jeiLsrC0OJcej4CTAu9oTlIoSSbh1HEJsOkJHpmvf1ijIJ9UjwucAToo5Ed4jwaqzfZNTGXmv76CwkB5HhDQHXzbScgL%2F5vlMFq%2F7pvaSpAm7RCLKsW%2FrqeO5gFM4HppM9AEtNPbWlaxxfF6WkPM7voqSi%2B62EuETY0BFO1n%2BfcWFigTpBcBmp6StYPf7pMl16&X-Amz-Signature=748ae7783229a2772d55cf0287445acb9390e2898584027ce2014f2b35463ae7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

