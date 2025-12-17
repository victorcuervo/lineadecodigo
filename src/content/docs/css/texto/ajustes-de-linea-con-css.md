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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AR2BD54%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T105542Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDD%2FnxxA7sJeroyAxJcRT%2BoVgjCvqifc0ygLnqZif4SjwIhAPk3VI%2B2arsACyJbKtfrqbNQ61XzQPk%2BGj3OGpfuoXPbKv8DCHwQABoMNjM3NDIzMTgzODA1IgxvOilCd%2BApmYCnWwcq3ANiLpOEPjQ1Lsasr64X2suYtrndiDak6KkPurGtHTUqcsnI%2Ff3ebavq0GzVpbE%2BTg0pOKul4unMS7ebOuJzZaPbz2y0W7DkPHJlQTLW2ZQyp6Mot7MnOV33KYLfhZF8DZAn0DZX4CETsGqT6DkQTg6RFueJj5vXrh6ww9RQY8Hpuvr5I1nClSju1eVBzaWIUOqBl05oy583wfOve6KKsP%2FMx4e8DbKFL4o1vs0XRYOJ29bCv52N7pkngeoss8G6ASU955rqWuAadEGVxE2E8bWt2Y4yJSvI3hoy7q9aPDQbI5lxnMugj%2Bo%2FPGJ6PLKkaaSJiNjXFiN%2FTXCrHRGT1J9gzi7dzNSlMBsrPij%2BtRkiWhl8mNzeleIC%2B%2FvYGF1tcd9yNTP%2FlZNBwW3gd8OeiMPgpRjjIRZlt7uARbl2GipwfszUqtb3XlOs%2B5NPOy4J2VSTyEmrhtlPfKboFmn74rIdqKqpjsbfUWWZiwATQhhz1A3AqtkiqBDYPbCDn2V4XDm2muYnkYn2HgbuuXfeYAHJZojYYZz%2B5Ae9O7gtoi%2FLTmmCTxVOIRznNvKTXcPwx82EkUJ5nuddhIofCgYb1FEGxMbBycRoCNl4T%2FuhQFrvv%2B0N8ywWbQ5aOEMEsDD%2FjorKBjqkAWoz%2B32DPxZvM90Cz2olcBLn9co%2BYODiMNGLHib5lKW1tLSXCCEuk0m9vgjlI9X%2BqhidJFyS0ZjPRxoTTaiw%2Fn%2FIqkDMZCuJB5e8yt5Q7HA2%2Ba4QZrELkOQT9PacKJVPn2gVa40%2F3BNXyrgpUryerFCMjXsqnzpez0tnwdKKd4%2FL7afNRtJhxhjULh7nfgJI%2FdkK%2FM9zoO4wneawbe%2BxC%2BMA3wlM&X-Amz-Signature=d1558782050939f4ce6f830d90461e5b19c03f45cb6cfd3c4d1317eb181afe92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AR2BD54%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T105542Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDD%2FnxxA7sJeroyAxJcRT%2BoVgjCvqifc0ygLnqZif4SjwIhAPk3VI%2B2arsACyJbKtfrqbNQ61XzQPk%2BGj3OGpfuoXPbKv8DCHwQABoMNjM3NDIzMTgzODA1IgxvOilCd%2BApmYCnWwcq3ANiLpOEPjQ1Lsasr64X2suYtrndiDak6KkPurGtHTUqcsnI%2Ff3ebavq0GzVpbE%2BTg0pOKul4unMS7ebOuJzZaPbz2y0W7DkPHJlQTLW2ZQyp6Mot7MnOV33KYLfhZF8DZAn0DZX4CETsGqT6DkQTg6RFueJj5vXrh6ww9RQY8Hpuvr5I1nClSju1eVBzaWIUOqBl05oy583wfOve6KKsP%2FMx4e8DbKFL4o1vs0XRYOJ29bCv52N7pkngeoss8G6ASU955rqWuAadEGVxE2E8bWt2Y4yJSvI3hoy7q9aPDQbI5lxnMugj%2Bo%2FPGJ6PLKkaaSJiNjXFiN%2FTXCrHRGT1J9gzi7dzNSlMBsrPij%2BtRkiWhl8mNzeleIC%2B%2FvYGF1tcd9yNTP%2FlZNBwW3gd8OeiMPgpRjjIRZlt7uARbl2GipwfszUqtb3XlOs%2B5NPOy4J2VSTyEmrhtlPfKboFmn74rIdqKqpjsbfUWWZiwATQhhz1A3AqtkiqBDYPbCDn2V4XDm2muYnkYn2HgbuuXfeYAHJZojYYZz%2B5Ae9O7gtoi%2FLTmmCTxVOIRznNvKTXcPwx82EkUJ5nuddhIofCgYb1FEGxMbBycRoCNl4T%2FuhQFrvv%2B0N8ywWbQ5aOEMEsDD%2FjorKBjqkAWoz%2B32DPxZvM90Cz2olcBLn9co%2BYODiMNGLHib5lKW1tLSXCCEuk0m9vgjlI9X%2BqhidJFyS0ZjPRxoTTaiw%2Fn%2FIqkDMZCuJB5e8yt5Q7HA2%2Ba4QZrELkOQT9PacKJVPn2gVa40%2F3BNXyrgpUryerFCMjXsqnzpez0tnwdKKd4%2FL7afNRtJhxhjULh7nfgJI%2FdkK%2FM9zoO4wneawbe%2BxC%2BMA3wlM&X-Amz-Signature=dadaec47f4ba685c6f68bce5b22e2e40582454eaa2023db11ebba536dde7f46f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

