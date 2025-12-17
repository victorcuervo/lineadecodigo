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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DCQP67U%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T163527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNyYVyBauab29klNWUBFRy%2Bq4Ek1nKZN55WGdAQfxpvgIhALi%2FRjp%2BDjFldSFqVlJSvpPE5EIE7DeGYHmrSHoY94TCKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzWbhvi61bzZAlXbhUq3AMbZWL3bYlS1blJUgZsuLzlczyLT2GrPmdbEFcIeTeryX4FRkTzzfowIbv73mmdKDlkYvCa%2FnjYfh3hb%2FpQ4pxcqtB2qQnc6aguIqwFPbfDNgCOLCoIH4pypxPE1HNmxp%2ByMe%2FzkcQngpj97wjXKGGsk2QTwzeBg8wAXPY3tPCMu81ucW3Cy9JqCJk3zFu8HlNRw%2Fb1bcHEVYSCwol8OOSly3wsEdA7TC5aTrEx8A8aQw1XGHXyBI5oUNU9LAlV%2BLKwCy2jF%2B%2FDZb8i1MOcbQiOXMIrtGLWuOmgrDoiGlVbmSqqgXv7s6xl9O%2B9FlhlF1ZMYxwc%2BUHljj%2FV%2FDZZa12Am9LAIiG5KUoPn56ikTdbEjqslSDh3LkXvNoxGteuOP%2FCMp1nUQKspLzFeWMm05Rb9jkdFOC7n0oyaTkrj0quAjJP6kOl%2FCwieoQ%2FZ4L5QduVEK5d45ZKi9ktV2b2yPQlMgiIj6oNqG%2BmYFgir9uhCgGVA3EeB0hQJzSpf%2BgTKauQfCyiNLI28E2V2yF0OFvA4qp%2FAFu1qZqiuRZuiMVdtRcj1k8xZwoX%2FpeOetZt4DAlZ0KspobuhSRpM5c8DrKKt%2FyD39OOcXbpm0ZZQfjLwd4gh7jkCPyPDpsr0zC4oIvKBjqkAbesXVoNr5LDzsE8BJbA8yb14q4p5%2BvbOAcirq3raYqQRafjuLFNKq9vakkDkh5qSjfof9JZR%2Bx3Hfg%2Fe5ofM27KCGI%2FdjB9%2B29v88NeCaQk70RgL24%2BD2zt1Oi%2FS4eDtFmOJv%2FQAZCGJn3WgJuSl%2B2g8O2qBOevP8qWr%2BA88iF1pXQnItG8%2FciNzYVsTi%2BJD52P6adZr7eTTWad3TnwMXYrGESh&X-Amz-Signature=d572a1a697a0fc843f98d83faf8e03c63d9c1792398cb7113a6a7d788b9478f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DCQP67U%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T163527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNyYVyBauab29klNWUBFRy%2Bq4Ek1nKZN55WGdAQfxpvgIhALi%2FRjp%2BDjFldSFqVlJSvpPE5EIE7DeGYHmrSHoY94TCKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzWbhvi61bzZAlXbhUq3AMbZWL3bYlS1blJUgZsuLzlczyLT2GrPmdbEFcIeTeryX4FRkTzzfowIbv73mmdKDlkYvCa%2FnjYfh3hb%2FpQ4pxcqtB2qQnc6aguIqwFPbfDNgCOLCoIH4pypxPE1HNmxp%2ByMe%2FzkcQngpj97wjXKGGsk2QTwzeBg8wAXPY3tPCMu81ucW3Cy9JqCJk3zFu8HlNRw%2Fb1bcHEVYSCwol8OOSly3wsEdA7TC5aTrEx8A8aQw1XGHXyBI5oUNU9LAlV%2BLKwCy2jF%2B%2FDZb8i1MOcbQiOXMIrtGLWuOmgrDoiGlVbmSqqgXv7s6xl9O%2B9FlhlF1ZMYxwc%2BUHljj%2FV%2FDZZa12Am9LAIiG5KUoPn56ikTdbEjqslSDh3LkXvNoxGteuOP%2FCMp1nUQKspLzFeWMm05Rb9jkdFOC7n0oyaTkrj0quAjJP6kOl%2FCwieoQ%2FZ4L5QduVEK5d45ZKi9ktV2b2yPQlMgiIj6oNqG%2BmYFgir9uhCgGVA3EeB0hQJzSpf%2BgTKauQfCyiNLI28E2V2yF0OFvA4qp%2FAFu1qZqiuRZuiMVdtRcj1k8xZwoX%2FpeOetZt4DAlZ0KspobuhSRpM5c8DrKKt%2FyD39OOcXbpm0ZZQfjLwd4gh7jkCPyPDpsr0zC4oIvKBjqkAbesXVoNr5LDzsE8BJbA8yb14q4p5%2BvbOAcirq3raYqQRafjuLFNKq9vakkDkh5qSjfof9JZR%2Bx3Hfg%2Fe5ofM27KCGI%2FdjB9%2B29v88NeCaQk70RgL24%2BD2zt1Oi%2FS4eDtFmOJv%2FQAZCGJn3WgJuSl%2B2g8O2qBOevP8qWr%2BA88iF1pXQnItG8%2FciNzYVsTi%2BJD52P6adZr7eTTWad3TnwMXYrGESh&X-Amz-Signature=cdc990ee2bed217ff32153c776fe057280ac4edfcd98d9e5bb750b7c3a830c01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

