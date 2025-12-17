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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UM7MBQ4C%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T145231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDtYGMIptplmksqzpgXFQXeCK8I%2BSH%2FSCQDjspYKqlgYQIgC45dSUzTihFequD1xWf6eT%2BEMC8JsF3LXWj%2FJQyOv0AqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIKgJ5%2FOnkiUjy8qSCrcA1FFtEYMMgc56UXUscZu72FW7kR3Uv%2BKGn2mKzbWrswF03OtmLSnkDoElSerR3AJqnxv2X3vaz4HWKOJUHdLWF2f643bybrLFmgyOscIGAdyPquZTucm7L82MyLdyUhj2Du0X1QL8N%2Bm9ExenYlNEw3c85iCE%2BOdysQ1Z%2FdB0nCfzC4mBzVczO9YSqQYXoswG0MfibDlEMOsjH%2FcKwNpvUsqnbwVXdZU1QJrCJbSq6KrmhX8%2BiqrBplhPOeCtnfU62HGXXRGWPCTnDjKuy0axf8SbkSdn0fK3rTM7rFmOqgax0%2FXfbEEUVYw189nR%2BQdMQqYNL6OTX9FVr888KFfO%2B9iZYXgdwcoIUmBCFo%2F0V16fNenAUAOMtl32hFAr%2FVF9ilOynqAkE2AWkldRFl1liGKULf%2Fm1dQwvH5rrda9JTpUDk29m0DBJ41%2B%2F48bSxS1bN3SUe3nuPpyRtwDYAOXgPNIBq0fpz%2FZcia5Fo9sD1zIpBqXUbkfO6KSExVcdu9pKyglNKLXTpSCWiD7l5Y3yC0B010J5Wg43VurOgZlrjN0mRhbNEJWuoPvGsIMDFoe%2Fg1OT0ED9bU5kW7231%2BiH53Ftz8kRo%2FrVX1lI0NaGe4swLOYhwUc51CuiuoMNz%2FisoGOqUB1qs3luqotDtwmreqjgM04aUjqCtIfaW0wOgRgpFLMFqHzs1ibzkgsKzRYiEkHcmxBAhV7nZnO2cJ8v%2BvMycgiCfNGHt9uebPX%2FDDGfdQ4kE2bwbqfPVuv7rCOMsaR3omrXSjB%2FCc3q1%2BMmnnRCkuEYlE%2BYsqKHqxzeXjVvYmIsTpwwr%2BAHjFLgaHSNBjfLijnnHAXX19bljLmGbNntjJKX3R0gwU&X-Amz-Signature=da7705844bed9464a9bff03966a47a48fa1aa47573c647049936158d6c277759&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UM7MBQ4C%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T145231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDtYGMIptplmksqzpgXFQXeCK8I%2BSH%2FSCQDjspYKqlgYQIgC45dSUzTihFequD1xWf6eT%2BEMC8JsF3LXWj%2FJQyOv0AqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIKgJ5%2FOnkiUjy8qSCrcA1FFtEYMMgc56UXUscZu72FW7kR3Uv%2BKGn2mKzbWrswF03OtmLSnkDoElSerR3AJqnxv2X3vaz4HWKOJUHdLWF2f643bybrLFmgyOscIGAdyPquZTucm7L82MyLdyUhj2Du0X1QL8N%2Bm9ExenYlNEw3c85iCE%2BOdysQ1Z%2FdB0nCfzC4mBzVczO9YSqQYXoswG0MfibDlEMOsjH%2FcKwNpvUsqnbwVXdZU1QJrCJbSq6KrmhX8%2BiqrBplhPOeCtnfU62HGXXRGWPCTnDjKuy0axf8SbkSdn0fK3rTM7rFmOqgax0%2FXfbEEUVYw189nR%2BQdMQqYNL6OTX9FVr888KFfO%2B9iZYXgdwcoIUmBCFo%2F0V16fNenAUAOMtl32hFAr%2FVF9ilOynqAkE2AWkldRFl1liGKULf%2Fm1dQwvH5rrda9JTpUDk29m0DBJ41%2B%2F48bSxS1bN3SUe3nuPpyRtwDYAOXgPNIBq0fpz%2FZcia5Fo9sD1zIpBqXUbkfO6KSExVcdu9pKyglNKLXTpSCWiD7l5Y3yC0B010J5Wg43VurOgZlrjN0mRhbNEJWuoPvGsIMDFoe%2Fg1OT0ED9bU5kW7231%2BiH53Ftz8kRo%2FrVX1lI0NaGe4swLOYhwUc51CuiuoMNz%2FisoGOqUB1qs3luqotDtwmreqjgM04aUjqCtIfaW0wOgRgpFLMFqHzs1ibzkgsKzRYiEkHcmxBAhV7nZnO2cJ8v%2BvMycgiCfNGHt9uebPX%2FDDGfdQ4kE2bwbqfPVuv7rCOMsaR3omrXSjB%2FCc3q1%2BMmnnRCkuEYlE%2BYsqKHqxzeXjVvYmIsTpwwr%2BAHjFLgaHSNBjfLijnnHAXX19bljLmGbNntjJKX3R0gwU&X-Amz-Signature=c86e67302fe3bd4e846bee90e122013f03331c7b4c2bf98fa0d96aeaf7b75b16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

