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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YF26I5OD%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T191857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDavLkupQGK3yZgIkW5jwyzNmlj9u0ECamnWadQK7YAkAIhAJJrg%2BABEJqGWFoL65MVrWOYKwhLiYKUtCrlvG7gU2c3KogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxJ8sB5Y9kZ1R%2FsqEIq3AOZE6yl3u3pdrgw8sYKI93INcdlT8%2BbDaLZbtG6rLOFKvQa164uGVbEKnc9usJXYMoxxHFZitPLP%2FLeZLQ5m8c6XGyjgQsi7YwoOQkSKHdOzTSZ16gwdSamxWJXvC02ugPLsN1ILgbUvL1UX0zniGnFE9LyiFJppRP6IMs%2FgI1UDhYheV5AXSgmWNTmr8YX2%2FCY7kZZy8WMrSYpZMbokRtrhaCzt1Ug17OW1%2FeqY4lRjs1eKEZChZGWMLNvcBlZRLBGyYWa8jGnlzS7iHDk8dlgFgED0VgI%2BBVZGnJ9PEsVXLB8g0xA92%2F4wcKpGHkNoCGdO4qSnr3SGNl5SoZWH4hDUt9oEfpNppqPpduFk6Mhn0yWMLjVxk%2F%2By3zTFMuyPfMF8A3yYMPM%2B8VNqUjrFpCE5UrTjqUt4Hhszf7xKgheNBHi6%2FO%2B%2Bcv4c6Dy5ivNLAGyykueJ4sT7M72K2GodeLw50h4WiXDoXqFwEW5%2Bwd8rKW5srqm7MgArbkWvGzP8Ci4BMhddGvtfmZg%2Bcp7z%2BZWHxQtch%2Bf7g3MlZvzR7uLdkHIKakmSgKQHo7O49TqjFLl05T8kgbBirRaRyeyYlo7iv%2FLD1mHA8%2Fzu1x10Dm3keh3ZHEbDvx61n8nAzD3n4vKBjqkAZX5QLFpQINe9KYmqS5WKm7mR%2BwDCn9jnnpW3n4usLjLy0bwJiHiQRZLx9GFBeQY%2BWJV1yR13XN2XEGuGp%2FwwwzpSHoIHRF5Qnrx28mCj%2Ft51YpLkZrvGgtN8KQfPZYSYm5rSYq0706g7qsWiqyOFs1as1qwjcA64lOYQwucPeLXyHtNJaxihsApJUlMfbR33NmWsViHITOmWMUnYgQ1aIiTv9N4&X-Amz-Signature=0bd8fe6fedff35f6a72cc7ca366daf65691c0a7f953278f6a564f3f6636d5ea1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YF26I5OD%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T191857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDavLkupQGK3yZgIkW5jwyzNmlj9u0ECamnWadQK7YAkAIhAJJrg%2BABEJqGWFoL65MVrWOYKwhLiYKUtCrlvG7gU2c3KogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxJ8sB5Y9kZ1R%2FsqEIq3AOZE6yl3u3pdrgw8sYKI93INcdlT8%2BbDaLZbtG6rLOFKvQa164uGVbEKnc9usJXYMoxxHFZitPLP%2FLeZLQ5m8c6XGyjgQsi7YwoOQkSKHdOzTSZ16gwdSamxWJXvC02ugPLsN1ILgbUvL1UX0zniGnFE9LyiFJppRP6IMs%2FgI1UDhYheV5AXSgmWNTmr8YX2%2FCY7kZZy8WMrSYpZMbokRtrhaCzt1Ug17OW1%2FeqY4lRjs1eKEZChZGWMLNvcBlZRLBGyYWa8jGnlzS7iHDk8dlgFgED0VgI%2BBVZGnJ9PEsVXLB8g0xA92%2F4wcKpGHkNoCGdO4qSnr3SGNl5SoZWH4hDUt9oEfpNppqPpduFk6Mhn0yWMLjVxk%2F%2By3zTFMuyPfMF8A3yYMPM%2B8VNqUjrFpCE5UrTjqUt4Hhszf7xKgheNBHi6%2FO%2B%2Bcv4c6Dy5ivNLAGyykueJ4sT7M72K2GodeLw50h4WiXDoXqFwEW5%2Bwd8rKW5srqm7MgArbkWvGzP8Ci4BMhddGvtfmZg%2Bcp7z%2BZWHxQtch%2Bf7g3MlZvzR7uLdkHIKakmSgKQHo7O49TqjFLl05T8kgbBirRaRyeyYlo7iv%2FLD1mHA8%2Fzu1x10Dm3keh3ZHEbDvx61n8nAzD3n4vKBjqkAZX5QLFpQINe9KYmqS5WKm7mR%2BwDCn9jnnpW3n4usLjLy0bwJiHiQRZLx9GFBeQY%2BWJV1yR13XN2XEGuGp%2FwwwzpSHoIHRF5Qnrx28mCj%2Ft51YpLkZrvGgtN8KQfPZYSYm5rSYq0706g7qsWiqyOFs1as1qwjcA64lOYQwucPeLXyHtNJaxihsApJUlMfbR33NmWsViHITOmWMUnYgQ1aIiTv9N4&X-Amz-Signature=dd541b1b620195bcc94215569f4bf89d44d60a92f6cebaac9d1f4d7c8f4f33d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

