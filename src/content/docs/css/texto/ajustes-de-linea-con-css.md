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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SB6JOSTR%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T052130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7K5tZXbv%2FEbaWNcYGWFKQRB29Hfs6BrewQ%2FNdLmIDrwIgdG8VRXqkN8QAyCZyIFrxaSDdpMwkbgLr2foP3bWAUJ8q%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDCWs5nPXZaEYP63LHircAzduZMZZ4vFinaKtpgEuCf9aL1dBg9d1clShAYdrf5ClNJQETuS3bc7rN94nYlkp%2BFVuDZO%2FPmW0FFYXDkqt%2FElyzN2o9K05EW1RWzFXhrPOOdS7Koyi73RZedRjZdgJt71hXlP%2FTmtAjEsCMVEW0XXXXI32o5EN5hMyIxGK3ca5jNdMvTbYa9HbxEzV3nTtGErlWIx6QswPM5xU7Mu3kBZ5v3bNP6G35fEOVQoPKoVcDzBiJ5bgDhA5wxmfixdk1dM6KFeIZMjbOcGTa58f%2BrYnfAGm25DkaIkIR7T9FKQNJR8bJuZmPJZCpHSZqjE2dMmjJME%2ByIxce4tNDyhpT1guVv9u%2FxN66ncu6DqfcvFy4qOEy39ypCmgsUo498LlEiY46TkK%2F4GKOxPTwc%2FNXSHMHcMIZ%2FGWG8QwdITBlUl4amiMVYnnlBl%2BrfuOKBXqOB5z%2FM549DStiNPK84qnVnQFhtKYw5ZIAPsthXv7nmQGgP2fxAut1XhvWI%2FhIUdmCaeWto6gfrCpmN8walhLL86Y7Z9vxkctYCDBXM32sX2U32qJMsNT9TeFR8UHy0Eev6X73m0LX5%2B6FaPCvUOGVBrG3v0stA%2BRwTjspblbQj12yoz1N%2FXVtuaWnMbNMPrpiMoGOqUBOlTtKUrDc9sSCsmzMdEeUIDL13QIZxpUTyRXqOP%2Fw9qhI7kRyE8GUbxlXjhT%2FebtGTuL5cREazJNrIYysYv3Lec2bg0u9bLeDPX8GPsDXb8jokSC27%2ByCSe5Od%2FdkPxQhm3M4d1MUw%2B481bqWAXZSmnSkmBVzIc4QrqHGRVcxvj%2B10zRYNF%2BcvfUMebSI5ovhNriGrUb%2FxRYwLWi8n9%2Bc7kK8KPC&X-Amz-Signature=0bfe0f62cb4f2667bc92b2f03e6fa9f7166121b5051b06bbdeb6369e7b0b23d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SB6JOSTR%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T052130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7K5tZXbv%2FEbaWNcYGWFKQRB29Hfs6BrewQ%2FNdLmIDrwIgdG8VRXqkN8QAyCZyIFrxaSDdpMwkbgLr2foP3bWAUJ8q%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDCWs5nPXZaEYP63LHircAzduZMZZ4vFinaKtpgEuCf9aL1dBg9d1clShAYdrf5ClNJQETuS3bc7rN94nYlkp%2BFVuDZO%2FPmW0FFYXDkqt%2FElyzN2o9K05EW1RWzFXhrPOOdS7Koyi73RZedRjZdgJt71hXlP%2FTmtAjEsCMVEW0XXXXI32o5EN5hMyIxGK3ca5jNdMvTbYa9HbxEzV3nTtGErlWIx6QswPM5xU7Mu3kBZ5v3bNP6G35fEOVQoPKoVcDzBiJ5bgDhA5wxmfixdk1dM6KFeIZMjbOcGTa58f%2BrYnfAGm25DkaIkIR7T9FKQNJR8bJuZmPJZCpHSZqjE2dMmjJME%2ByIxce4tNDyhpT1guVv9u%2FxN66ncu6DqfcvFy4qOEy39ypCmgsUo498LlEiY46TkK%2F4GKOxPTwc%2FNXSHMHcMIZ%2FGWG8QwdITBlUl4amiMVYnnlBl%2BrfuOKBXqOB5z%2FM549DStiNPK84qnVnQFhtKYw5ZIAPsthXv7nmQGgP2fxAut1XhvWI%2FhIUdmCaeWto6gfrCpmN8walhLL86Y7Z9vxkctYCDBXM32sX2U32qJMsNT9TeFR8UHy0Eev6X73m0LX5%2B6FaPCvUOGVBrG3v0stA%2BRwTjspblbQj12yoz1N%2FXVtuaWnMbNMPrpiMoGOqUBOlTtKUrDc9sSCsmzMdEeUIDL13QIZxpUTyRXqOP%2Fw9qhI7kRyE8GUbxlXjhT%2FebtGTuL5cREazJNrIYysYv3Lec2bg0u9bLeDPX8GPsDXb8jokSC27%2ByCSe5Od%2FdkPxQhm3M4d1MUw%2B481bqWAXZSmnSkmBVzIc4QrqHGRVcxvj%2B10zRYNF%2BcvfUMebSI5ovhNriGrUb%2FxRYwLWi8n9%2Bc7kK8KPC&X-Amz-Signature=c19d392ab6de1ea30052a7f85d7bb6e59a3c1ebfacc9af89b00c8e20bc41afc9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

