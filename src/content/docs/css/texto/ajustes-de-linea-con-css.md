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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLEMN7DZ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T092031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCICTAJJsggKdwwBlmHqqtaFhz819mePOLiL3FyHAJJASAAh8h0dghv1e1HyCFcGkjsp64cMBzL5DwOVLnYKSaBqx4Kv8DCHoQABoMNjM3NDIzMTgzODA1IgxYue8NcVnqU2MqPHUq3APmeBnP5bJ5uujsfOhkZDfk26PjFnlNbKAdcaxkV%2FgVs9YQ1MfAZgXyhYnazwiqgScgc5bx7Kp%2F1rF8LC6qdyBrsgTtmXJvjN1PWqUr87A5bGqDevm7poNUg1KHfjlPoYS5V6pr0MQcSr761DBfATKnnMlPbVDj6pKgQQ5zpOIchHLwew6TFb5LRXvdHtA%2BC5Y5sFfRoA1iU3wCYI0Ls8YYOgxrZ0SQ0NjTcEyxUNmrIWyAERBV0AvR82Heri5mPUY27T%2FIQVZ%2Fu%2FkWE0iWfITNNzY3tEMb0OHJQHpRsZxGjFo0EFGXnsW0m1RY03iZ7xx2q4mFnkzcxjEUyRTF2QBzA%2Bbm6U27wHMvqc26cz37nRx3DlCjGCHkJVsXlQ27qrUf3VM2HHbELgYtnzMkKPavxN3cd9rNfL1ekbbApjoaqm9L4a6h2Ae88INrHs0XD58caeTzExBU%2FO04rtkkt69ROls2KWyal0FooL66KQmuL7zcvJQDlpwWTpHWeE0diiv08q2lZAZfV7t2GtAhLGnxWIV0RvqKmrY1WgPg9x%2B%2BHRYnvO7Ucm3GrDfwYxvMnC4pB8akzDYLp%2BxGHvuTzKy65LCdfnJ7%2FlBM%2F%2B6mciXjzx8urHOdnITWJCc%2BoTCJ0onKBjqnAUh2c%2BxfLrLLTOk3srj%2FZu2EHs3Yk5kY347cxBn7AE8h2thBoiljEjoIWXukKBBv75MfjZwoJVmr8g8BE%2BWzT1CRAT8sBxcf8F1SVhYc4epCSuI6yUaIa%2B2MRkrSpxiPB0qHYfetNikg1fqY2sZP2TXLfYv20%2F4tG%2BHvsi%2Fx7xGDtFsVsRC5OVtsv7zpNhNLGAebPh5lSELSRaQ%2F8c5qqnzgQqxyY0d%2F&X-Amz-Signature=512f9466b41c7652830c4704745337bce6dd72dfad9f843d9a4d7cdcf67acd77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLEMN7DZ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T092031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCICTAJJsggKdwwBlmHqqtaFhz819mePOLiL3FyHAJJASAAh8h0dghv1e1HyCFcGkjsp64cMBzL5DwOVLnYKSaBqx4Kv8DCHoQABoMNjM3NDIzMTgzODA1IgxYue8NcVnqU2MqPHUq3APmeBnP5bJ5uujsfOhkZDfk26PjFnlNbKAdcaxkV%2FgVs9YQ1MfAZgXyhYnazwiqgScgc5bx7Kp%2F1rF8LC6qdyBrsgTtmXJvjN1PWqUr87A5bGqDevm7poNUg1KHfjlPoYS5V6pr0MQcSr761DBfATKnnMlPbVDj6pKgQQ5zpOIchHLwew6TFb5LRXvdHtA%2BC5Y5sFfRoA1iU3wCYI0Ls8YYOgxrZ0SQ0NjTcEyxUNmrIWyAERBV0AvR82Heri5mPUY27T%2FIQVZ%2Fu%2FkWE0iWfITNNzY3tEMb0OHJQHpRsZxGjFo0EFGXnsW0m1RY03iZ7xx2q4mFnkzcxjEUyRTF2QBzA%2Bbm6U27wHMvqc26cz37nRx3DlCjGCHkJVsXlQ27qrUf3VM2HHbELgYtnzMkKPavxN3cd9rNfL1ekbbApjoaqm9L4a6h2Ae88INrHs0XD58caeTzExBU%2FO04rtkkt69ROls2KWyal0FooL66KQmuL7zcvJQDlpwWTpHWeE0diiv08q2lZAZfV7t2GtAhLGnxWIV0RvqKmrY1WgPg9x%2B%2BHRYnvO7Ucm3GrDfwYxvMnC4pB8akzDYLp%2BxGHvuTzKy65LCdfnJ7%2FlBM%2F%2B6mciXjzx8urHOdnITWJCc%2BoTCJ0onKBjqnAUh2c%2BxfLrLLTOk3srj%2FZu2EHs3Yk5kY347cxBn7AE8h2thBoiljEjoIWXukKBBv75MfjZwoJVmr8g8BE%2BWzT1CRAT8sBxcf8F1SVhYc4epCSuI6yUaIa%2B2MRkrSpxiPB0qHYfetNikg1fqY2sZP2TXLfYv20%2F4tG%2BHvsi%2Fx7xGDtFsVsRC5OVtsv7zpNhNLGAebPh5lSELSRaQ%2F8c5qqnzgQqxyY0d%2F&X-Amz-Signature=a0a96c73abc1b98bde219a82265bc6c4cc7e56bc61abe71f9709087fc6694dce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

