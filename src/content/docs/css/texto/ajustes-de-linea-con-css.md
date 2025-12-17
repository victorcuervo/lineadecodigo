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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMJKGECB%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T114111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1j9hDZfny3MFXHFkq%2B%2FwIAiHkxNzelXDEu2%2BaU5pcpAIgJKTsQfcTb0Xa8FKv1lUidffX%2BOrIR9L6D95%2FQ8gF2b4q%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDL1TuqL%2BQ8nmm%2F4fHyrcA9oanT9QaJQUVP03sRlzZum06wE%2BNAKBk6OFmvIrnVWmzpOwCrKmv4daeQsVuleknrb4LvFFLJ1bOn50wdLJBZCnmuUxqpSzBcBx1f0u6Oda4dReuWK5ikvaU5HuYok1gW6eJ4P6r96gBPUISDBlyUwvyXplU701buYN7ho59nRcXn6yqiFHvDz0ehoeD1DZVtg58OCBFDLWOS%2FeivO9%2FAt0Z9a%2BxRuKVyhJ2NXF0uyTEbjNcEntn%2BFyo7qaq1kFjfB6bWZ6%2F94Fc1VDSFHwISe3H7y7UZOMK3zK5ZU8g6%2BfyU1TYosuV4PNjMEflbjoJuKaiIQ1hURAjzt9t0XPgTEb2yt1cCMtwIZkzEUEefUD8zmhe16VVrbHRBzmdb%2FuU7X892eEwUinXjmnfT04007DVrat7YqSyqZRORe3a2tjRAGzXXcgvddy4XR0lmPEv%2F1HwQc6nrPgX9VNR2nowVfnw6XS7KnXEhkNp2M6ayTpMwr5nR3opSMv10aw%2BLQKa0BFw%2FXi5ID3ox0XzeeJea6lK7OnX6ix1H2qWR1fsum9f6%2FqKIysuVhbziAjhYYQAkMuJq8LZN2M4ygwtvWwo%2FrIXgXkWUqTLblQjWQwj76aN%2Brx3JMMhv31t%2F12MJKrisoGOqUBfIqFFscDxZE9FFH%2FVCzZiTe3uHBnskdHj9LnjUMutA7FZlI3TX4it43xV6MNUhHYgG29l92m1nNQG78R3XgcPHB02WD30kLLmoVaBDP5aXqhBRBITT1aCSE8siP0odPfAQNX%2B5rAJosxSPtgX%2BfK3b2b43G64Xi7jn3zkd528kHuhi%2BxWsxub3yBQyp585sSASZmEc5y8BX%2BGw1LLdpNd6tFZk3p&X-Amz-Signature=238c084f5b3e1c42d43f806402b516b3b53907bd4d149ae1d9e99ff02a007394&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMJKGECB%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T114111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1j9hDZfny3MFXHFkq%2B%2FwIAiHkxNzelXDEu2%2BaU5pcpAIgJKTsQfcTb0Xa8FKv1lUidffX%2BOrIR9L6D95%2FQ8gF2b4q%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDL1TuqL%2BQ8nmm%2F4fHyrcA9oanT9QaJQUVP03sRlzZum06wE%2BNAKBk6OFmvIrnVWmzpOwCrKmv4daeQsVuleknrb4LvFFLJ1bOn50wdLJBZCnmuUxqpSzBcBx1f0u6Oda4dReuWK5ikvaU5HuYok1gW6eJ4P6r96gBPUISDBlyUwvyXplU701buYN7ho59nRcXn6yqiFHvDz0ehoeD1DZVtg58OCBFDLWOS%2FeivO9%2FAt0Z9a%2BxRuKVyhJ2NXF0uyTEbjNcEntn%2BFyo7qaq1kFjfB6bWZ6%2F94Fc1VDSFHwISe3H7y7UZOMK3zK5ZU8g6%2BfyU1TYosuV4PNjMEflbjoJuKaiIQ1hURAjzt9t0XPgTEb2yt1cCMtwIZkzEUEefUD8zmhe16VVrbHRBzmdb%2FuU7X892eEwUinXjmnfT04007DVrat7YqSyqZRORe3a2tjRAGzXXcgvddy4XR0lmPEv%2F1HwQc6nrPgX9VNR2nowVfnw6XS7KnXEhkNp2M6ayTpMwr5nR3opSMv10aw%2BLQKa0BFw%2FXi5ID3ox0XzeeJea6lK7OnX6ix1H2qWR1fsum9f6%2FqKIysuVhbziAjhYYQAkMuJq8LZN2M4ygwtvWwo%2FrIXgXkWUqTLblQjWQwj76aN%2Brx3JMMhv31t%2F12MJKrisoGOqUBfIqFFscDxZE9FFH%2FVCzZiTe3uHBnskdHj9LnjUMutA7FZlI3TX4it43xV6MNUhHYgG29l92m1nNQG78R3XgcPHB02WD30kLLmoVaBDP5aXqhBRBITT1aCSE8siP0odPfAQNX%2B5rAJosxSPtgX%2BfK3b2b43G64Xi7jn3zkd528kHuhi%2BxWsxub3yBQyp585sSASZmEc5y8BX%2BGw1LLdpNd6tFZk3p&X-Amz-Signature=74ccd06b6afaeed2a4b593a8fe0e8543e5ddd9ee2e3029812462bef9cc517ac1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

