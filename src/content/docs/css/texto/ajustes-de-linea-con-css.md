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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RINESAYC%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T003638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE7KcMjK2ndT8ENoDcLgyaY40BupSfxYPh4sA6yJoqWJAiAtylwrB6c8TVVUD7gAoaPxNO8DwgH7ExVAe9J%2FWVJDkCr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMP6EwTzc0JKQ1%2B6rhKtwD2ICHTQtdEb9UkDjF6ohUyN7Fqvg58JeuzME1D2wbVZNKhqPqQvAapixi4Q3gqlf49oaaYwB%2FgpqKUxhmPPZgKaw2wrAoLgeU2h4i37h0809tIwcLKM1F%2FWTaCaSB9Y8Q6Pgci0uB5NLa%2F52oyl3kumdS27XZ6NIq1xdnDWse3jIVNAhBBYxgnoD018wTqtFO06Q36PKplGhEVdFw9o2uhvLnz%2B0tiX9GcjIjU3VCACOnBUq%2BKz2efjxfzodazHMW0Q%2FePEbB0UW%2BH05kGWmfq8VWWF5II4HzQaLBUGsH8SYz6WAYuM2oCg10yrOQOhF8WQ4F8jvnRLHUPyzumoi4kF6LsnVQhcSnekaIy57%2FLcqccvHDO3QGhElZDX5JO0dL%2FcRB246Q0dmhhWNADBbt2FEAunvWgOAjuQilKVKJ3psOeag15kIKYxuZdpH0nLKVSYIcXPx9eviA5%2FtrIONeFJdUtLWD2KDSpFFcXu7c8T1RMqldCEETzcfE%2BkWECu9%2B4uaV7WT3f9D7Uq%2FzeaABn%2FP%2BIPJ3%2BsOtGfMwGBxKi5SI8BvgvX%2FzQZL%2BRNWAQc3%2Bh2xQF7LCZEC1JcCtdxeMlAhBKA7Jf%2FIDH8tIR9Xs552Xc2B99Z6EMGQAf2gw3t6HygY6pgEeR8IpZl%2F7v7lVKBIsSrpvKR9z1sxGzuQ8iA2EdR%2BHqHPdIHwxIIA5e%2FanOsm%2FD4P0N7sMKbq1wr80nzz3yhXcDMcT9yF%2BHupRP39vWdn8L29l2IMAut3RObsh7YcqBn2T1Lz%2FuWR25t1TfM1VaRvwyU4ziHzLCDXlZiBP%2BqWcEVfc2C3s5ULx%2BrAcGpvA4BRx8N06piUGmehiwtS4uDOrQTj1U%2Fi8&X-Amz-Signature=317c60214e33905c61cc44ace07ac93ca491304ae7cf1f884d76275525d98416&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RINESAYC%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T003638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE7KcMjK2ndT8ENoDcLgyaY40BupSfxYPh4sA6yJoqWJAiAtylwrB6c8TVVUD7gAoaPxNO8DwgH7ExVAe9J%2FWVJDkCr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMP6EwTzc0JKQ1%2B6rhKtwD2ICHTQtdEb9UkDjF6ohUyN7Fqvg58JeuzME1D2wbVZNKhqPqQvAapixi4Q3gqlf49oaaYwB%2FgpqKUxhmPPZgKaw2wrAoLgeU2h4i37h0809tIwcLKM1F%2FWTaCaSB9Y8Q6Pgci0uB5NLa%2F52oyl3kumdS27XZ6NIq1xdnDWse3jIVNAhBBYxgnoD018wTqtFO06Q36PKplGhEVdFw9o2uhvLnz%2B0tiX9GcjIjU3VCACOnBUq%2BKz2efjxfzodazHMW0Q%2FePEbB0UW%2BH05kGWmfq8VWWF5II4HzQaLBUGsH8SYz6WAYuM2oCg10yrOQOhF8WQ4F8jvnRLHUPyzumoi4kF6LsnVQhcSnekaIy57%2FLcqccvHDO3QGhElZDX5JO0dL%2FcRB246Q0dmhhWNADBbt2FEAunvWgOAjuQilKVKJ3psOeag15kIKYxuZdpH0nLKVSYIcXPx9eviA5%2FtrIONeFJdUtLWD2KDSpFFcXu7c8T1RMqldCEETzcfE%2BkWECu9%2B4uaV7WT3f9D7Uq%2FzeaABn%2FP%2BIPJ3%2BsOtGfMwGBxKi5SI8BvgvX%2FzQZL%2BRNWAQc3%2Bh2xQF7LCZEC1JcCtdxeMlAhBKA7Jf%2FIDH8tIR9Xs552Xc2B99Z6EMGQAf2gw3t6HygY6pgEeR8IpZl%2F7v7lVKBIsSrpvKR9z1sxGzuQ8iA2EdR%2BHqHPdIHwxIIA5e%2FanOsm%2FD4P0N7sMKbq1wr80nzz3yhXcDMcT9yF%2BHupRP39vWdn8L29l2IMAut3RObsh7YcqBn2T1Lz%2FuWR25t1TfM1VaRvwyU4ziHzLCDXlZiBP%2BqWcEVfc2C3s5ULx%2BrAcGpvA4BRx8N06piUGmehiwtS4uDOrQTj1U%2Fi8&X-Amz-Signature=f470f104f3e3b38fa4c90749cf9c6c7f448a00a15acf052b992b6e1a96f1e3f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

