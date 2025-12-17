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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3U54R6R%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T060429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC27twMsYfQY8v9RSK5j6nva%2Biwu7aZHWB2bSiyGpAY3wIhANZjS%2Be4Njy8St95kJFUjMr7KaNcEs0dmU6XmWVWg3ELKv8DCHcQABoMNjM3NDIzMTgzODA1IgxvEfaqUCnQc7UG8Ngq3AN2i%2BXOBEj51r2BzjhIWtLGpyNvli5K%2Bqt5e94Ax2Bdqc2jyYjQNUF6UNkg6u5Aub653Ut9DKDymCHDp5ctvO1dKNGJCBJIpGbhCWrNudIDVXOQ1uDbOOW6osipVZCqK5NriCYlo0%2BgAVg8O6zfwf%2FBenPuNkadGbG2izjQYUmQUmGWk986OM%2BnmFxsIca8MbK6FXIwvibw73SBf7HQuOOGAImNOliY578s6zQLlWU0i0C3bYlE7en0l4vO7YcAJVR6QU6qyIkLlG87h3SDRVje2TRlZqES3BNInZDJA%2Bx4srk2ZTaShWHvJe9d3I6PBIC1tnDXwReObAlko6eHwNBRE%2Bu1khJDrxUaxF5l5Y683ty1akswnyio3ksg2861v5VLadvhm3Xuq8WFG%2FVwxIO%2F7J9L2pWUUNVC41DX%2F4o4HQPAb%2FPU7z%2FEKM6fCbVueEXc3w7cZ02i%2FMCKBQMNDogIoOnOqgsRvL6mWPWcXAwSmb6qnaadEaQ32bwHMSxSOWfhoMHLWPibNXJlMscfLfioMUOw775FFSY7drTOQsYQp%2BZk0VjKmv%2FywuORckDAgBwcFNcv67J9qIMY4a0xEfXbTFl2i16GK6MVbrAMf3R1f%2Bfgu7XqB3ihJpNeGDCmgonKBjqkAYxrAmZiGBSI169ZqsNh3IfNBmoFEYScioQbOSS3NZOaGyztlFzY0p7rgUiCaSsJ1AYj5Pb2BcpCl0lVCDMHCBlY7aEpUm9FXQEo19%2FfM8jcRm9KfNejHSiT%2FC9Cs36OAFK89%2BOOClT8mCuVv0XEL%2FhE7JW9EyjwnY3Lnc%2B9O2pBjJ27H%2BF%2FvkERVLjggzAY9gAnT1YwIGS%2BDyv01TPd9lcmriTW&X-Amz-Signature=8d51bb24172925fd1cad122d1e25aacbd708181a7cd575804f2ab717fbc57119&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3U54R6R%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T060429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC27twMsYfQY8v9RSK5j6nva%2Biwu7aZHWB2bSiyGpAY3wIhANZjS%2Be4Njy8St95kJFUjMr7KaNcEs0dmU6XmWVWg3ELKv8DCHcQABoMNjM3NDIzMTgzODA1IgxvEfaqUCnQc7UG8Ngq3AN2i%2BXOBEj51r2BzjhIWtLGpyNvli5K%2Bqt5e94Ax2Bdqc2jyYjQNUF6UNkg6u5Aub653Ut9DKDymCHDp5ctvO1dKNGJCBJIpGbhCWrNudIDVXOQ1uDbOOW6osipVZCqK5NriCYlo0%2BgAVg8O6zfwf%2FBenPuNkadGbG2izjQYUmQUmGWk986OM%2BnmFxsIca8MbK6FXIwvibw73SBf7HQuOOGAImNOliY578s6zQLlWU0i0C3bYlE7en0l4vO7YcAJVR6QU6qyIkLlG87h3SDRVje2TRlZqES3BNInZDJA%2Bx4srk2ZTaShWHvJe9d3I6PBIC1tnDXwReObAlko6eHwNBRE%2Bu1khJDrxUaxF5l5Y683ty1akswnyio3ksg2861v5VLadvhm3Xuq8WFG%2FVwxIO%2F7J9L2pWUUNVC41DX%2F4o4HQPAb%2FPU7z%2FEKM6fCbVueEXc3w7cZ02i%2FMCKBQMNDogIoOnOqgsRvL6mWPWcXAwSmb6qnaadEaQ32bwHMSxSOWfhoMHLWPibNXJlMscfLfioMUOw775FFSY7drTOQsYQp%2BZk0VjKmv%2FywuORckDAgBwcFNcv67J9qIMY4a0xEfXbTFl2i16GK6MVbrAMf3R1f%2Bfgu7XqB3ihJpNeGDCmgonKBjqkAYxrAmZiGBSI169ZqsNh3IfNBmoFEYScioQbOSS3NZOaGyztlFzY0p7rgUiCaSsJ1AYj5Pb2BcpCl0lVCDMHCBlY7aEpUm9FXQEo19%2FfM8jcRm9KfNejHSiT%2FC9Cs36OAFK89%2BOOClT8mCuVv0XEL%2FhE7JW9EyjwnY3Lnc%2B9O2pBjJ27H%2BF%2FvkERVLjggzAY9gAnT1YwIGS%2BDyv01TPd9lcmriTW&X-Amz-Signature=bf0609a467ef28cebc50b144a7d7d1799eb1e7dbf6923c2a2439ae6a11f23076&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

