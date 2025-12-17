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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667O6B3GGI%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T092813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDM6pkzyr%2BBJYuYZkhR2Ccl0Fpz206jJIV1nJWpShIGtQIgHuIecfdXWYJ6L2UvUTQjsY%2F34ry6iqGDalypg9w04Vsq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDOOLIgkjKFzdO5n%2FlircA%2B8jWs8TgFBtn7C8dutWs8DBfhMv%2Fe23toQRdNbhVwn%2F6ju4IfroNxheZmILbPxWs%2BpCrzd3T6oZRfTzge8BIuH%2FUuLMXo6oVK2SLTYpcoVvsmKKreB%2B8bXRuijji%2F0Cee%2BRMSSBvnARpdnRouachmloExBEmieuyVZ0GNNhCTTm4GEEDwDwh0u2CNqB9g1%2Fi9KFKBu24LJiDBxvwq3ovXt8ivAiQtvDIY83ReixU70m73l%2Fv1fZ67M%2Bjr0jZBIhLhYG6Va%2BOHhkcq4blVHBfANqJOI30hOtZTpCn9DAyKL9TIIkt5y4%2Bh9m4HuRlzwR6pF4GtEElLZMT3ovV%2FFXK7g3q9Pv8QE9GyuZsr3DtDIrYyQHCnnxQinIFVpQH6HksuvCxUip32vhf7EvKuIMOk4reRBxna%2F6Zeovt40pXcDR3X8RXO2s4D9XhN5AC8sz4SuwPvAUYHlT%2FbafCnMsQLCeP2uPsWrn996lmmVBrG4SffxLmKkUvTfmRurp11Safo3kUhLyTjJVdcJ2tX65nnj6HWKewUPb%2B8DKqLBADagMnSjjX2q6viJ0uRN7jRsB%2FIwIb9s%2FixEdr%2F4ESSI3MXrnMFhHhlVVzKobd%2FzCE08MSqfD%2FwxaaVecdQTyMOHSicoGOqUBfLKvRso%2FlCVTqwK%2FzsnNdmJpYcrDwywQolaqq2XmcWY1nB4Id%2FLXOzljVBXUmhVGyV1dJDciGzftz6gSggoqHYHt8GT6VeQW1LynycR7635Ts6DnAXFeSqYdpLj6YfCNFXGld7nZfwTmx13LdgrjAU8UW8ygOU45GEwScVj9xfakcKci5Z9AGwUynYmlGppcVX8BEXQtPzGEnlckyjc9ZotfdIbt&X-Amz-Signature=3c45358040398331e023b2794b205344e44101cfdd9ca97fbe6104ef7a2221e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667O6B3GGI%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T092813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDM6pkzyr%2BBJYuYZkhR2Ccl0Fpz206jJIV1nJWpShIGtQIgHuIecfdXWYJ6L2UvUTQjsY%2F34ry6iqGDalypg9w04Vsq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDOOLIgkjKFzdO5n%2FlircA%2B8jWs8TgFBtn7C8dutWs8DBfhMv%2Fe23toQRdNbhVwn%2F6ju4IfroNxheZmILbPxWs%2BpCrzd3T6oZRfTzge8BIuH%2FUuLMXo6oVK2SLTYpcoVvsmKKreB%2B8bXRuijji%2F0Cee%2BRMSSBvnARpdnRouachmloExBEmieuyVZ0GNNhCTTm4GEEDwDwh0u2CNqB9g1%2Fi9KFKBu24LJiDBxvwq3ovXt8ivAiQtvDIY83ReixU70m73l%2Fv1fZ67M%2Bjr0jZBIhLhYG6Va%2BOHhkcq4blVHBfANqJOI30hOtZTpCn9DAyKL9TIIkt5y4%2Bh9m4HuRlzwR6pF4GtEElLZMT3ovV%2FFXK7g3q9Pv8QE9GyuZsr3DtDIrYyQHCnnxQinIFVpQH6HksuvCxUip32vhf7EvKuIMOk4reRBxna%2F6Zeovt40pXcDR3X8RXO2s4D9XhN5AC8sz4SuwPvAUYHlT%2FbafCnMsQLCeP2uPsWrn996lmmVBrG4SffxLmKkUvTfmRurp11Safo3kUhLyTjJVdcJ2tX65nnj6HWKewUPb%2B8DKqLBADagMnSjjX2q6viJ0uRN7jRsB%2FIwIb9s%2FixEdr%2F4ESSI3MXrnMFhHhlVVzKobd%2FzCE08MSqfD%2FwxaaVecdQTyMOHSicoGOqUBfLKvRso%2FlCVTqwK%2FzsnNdmJpYcrDwywQolaqq2XmcWY1nB4Id%2FLXOzljVBXUmhVGyV1dJDciGzftz6gSggoqHYHt8GT6VeQW1LynycR7635Ts6DnAXFeSqYdpLj6YfCNFXGld7nZfwTmx13LdgrjAU8UW8ygOU45GEwScVj9xfakcKci5Z9AGwUynYmlGppcVX8BEXQtPzGEnlckyjc9ZotfdIbt&X-Amz-Signature=b312853e17ad1c122a0263fe152eaba786409920c22e737ebcb5912eb17e4b5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

