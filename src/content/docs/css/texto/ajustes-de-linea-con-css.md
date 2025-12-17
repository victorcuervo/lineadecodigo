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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V52QVA42%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T021329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbEzWeI7r1uMFAdAWJGpsSJyKdxTLzDD0pSopEAzyXLQIhALb554LHl%2FDPnuu9FF1V8wUo7yzfmwM8eb2W4sL9C7Y4Kv8DCHMQABoMNjM3NDIzMTgzODA1IgxVI4kh9tjDHPXLgQYq3AOnqt14bDEoGJMBpexCIpNk937eTvtljn4sQeD7x4INiruY82JJcn%2F9uZgjPBgPFg0H2j%2F6VtLp0nWFekpWs%2FoHqJIbYRnOAwbgld7V6Sb0i%2F6MoZnHIOYXhGE192qQDFHbwe3b7DLtINTBoDYFgFr2JnpOVJuPQWVrCd5TpTN%2FaSrRjKYm54OMhHWRRQJrMCqpuiiygZSSFnnqDi71E3ttUiepUolcSNmk1TObuQg%2Fz7Z2yu9jGvDrNt4R9yg1F9kmshDXm%2F9Jb2Ed2TQ2NVTD311G4YVuFzWCDcw%2Fgf5JXRjcDAe8XTEv%2Fqye9zwWeA9eRexL56x1Zh%2F6bOK0xy25XB9PxwHwzvgHVvfZShX%2BAaiM5F6PWBG3dVHqvZ4O0URSLViB12vCSKHiYPyMwvenCcWce471tHxCIL9ajoWE3cx%2BqD6HG42s5i0nl5b0ZaopzUWlDq5wDAwl8zh9uVmBDibNs6Vp7K9XYNn9m5nbPxen9VatXbHSgXjgqbamKhHkOIJlxsvwN%2F4yVlscUNEVTDpDBDa7wNxa61LuvJBbe48csulN%2BvYq75h4QEtXhexinKLU0wf3wVtjW5h2TldQmPabQrnoe%2BczeVv3zM2Y5Ism2QyqSG0TTr%2FbXTD5l4jKBjqkAcEFvq5GiEPqui0Hxr7y0lVHJQAFmoyxC2N1s0QBR%2B5hxYRN8sFAs0zJYY1QX%2FOB%2BFxwhPozL0dFwLz6l47bDZ%2BfZ0P3IyOOEZErN%2FV5Aj15lfSJ0%2BkWRN3e6nfDEm8VI7YSCvl%2F0Ou8fQsKaVRzh2lyPBUxta%2Fzrfx4oZDfVTe5Ey2rQjSJOTT326X37OmD4qBYp3ffKOoJoMOCRC4uj6jPfCDU&X-Amz-Signature=052c5a31225922b3dbc77f82ad6837dd1fb9e05df1b6df815fd4a5386b327021&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V52QVA42%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T021329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbEzWeI7r1uMFAdAWJGpsSJyKdxTLzDD0pSopEAzyXLQIhALb554LHl%2FDPnuu9FF1V8wUo7yzfmwM8eb2W4sL9C7Y4Kv8DCHMQABoMNjM3NDIzMTgzODA1IgxVI4kh9tjDHPXLgQYq3AOnqt14bDEoGJMBpexCIpNk937eTvtljn4sQeD7x4INiruY82JJcn%2F9uZgjPBgPFg0H2j%2F6VtLp0nWFekpWs%2FoHqJIbYRnOAwbgld7V6Sb0i%2F6MoZnHIOYXhGE192qQDFHbwe3b7DLtINTBoDYFgFr2JnpOVJuPQWVrCd5TpTN%2FaSrRjKYm54OMhHWRRQJrMCqpuiiygZSSFnnqDi71E3ttUiepUolcSNmk1TObuQg%2Fz7Z2yu9jGvDrNt4R9yg1F9kmshDXm%2F9Jb2Ed2TQ2NVTD311G4YVuFzWCDcw%2Fgf5JXRjcDAe8XTEv%2Fqye9zwWeA9eRexL56x1Zh%2F6bOK0xy25XB9PxwHwzvgHVvfZShX%2BAaiM5F6PWBG3dVHqvZ4O0URSLViB12vCSKHiYPyMwvenCcWce471tHxCIL9ajoWE3cx%2BqD6HG42s5i0nl5b0ZaopzUWlDq5wDAwl8zh9uVmBDibNs6Vp7K9XYNn9m5nbPxen9VatXbHSgXjgqbamKhHkOIJlxsvwN%2F4yVlscUNEVTDpDBDa7wNxa61LuvJBbe48csulN%2BvYq75h4QEtXhexinKLU0wf3wVtjW5h2TldQmPabQrnoe%2BczeVv3zM2Y5Ism2QyqSG0TTr%2FbXTD5l4jKBjqkAcEFvq5GiEPqui0Hxr7y0lVHJQAFmoyxC2N1s0QBR%2B5hxYRN8sFAs0zJYY1QX%2FOB%2BFxwhPozL0dFwLz6l47bDZ%2BfZ0P3IyOOEZErN%2FV5Aj15lfSJ0%2BkWRN3e6nfDEm8VI7YSCvl%2F0Ou8fQsKaVRzh2lyPBUxta%2Fzrfx4oZDfVTe5Ey2rQjSJOTT326X37OmD4qBYp3ffKOoJoMOCRC4uj6jPfCDU&X-Amz-Signature=104da574d45e4310de74b064e1a17f48c66e042b29a7098c4322a4aac06eef6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

