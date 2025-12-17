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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSLDNXGF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T062613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3oBc6tgW7kAWLJc%2FTNdekS6GDRDZOi9xVovrGyGKsNgIhAJ3eBJuWM3%2F1vs7ptFja13nHD4wdw0PoJgFuzW2q%2Fs6RKv8DCHcQABoMNjM3NDIzMTgzODA1IgxQ6C5wD05it6gvg5kq3ANsEhE1DEreoYJ8Z2xLQLKBg1eQC8yVoQF2en25pNNB4%2BYdmb0YDlj3N3JiqyrF9EXjYr6Vfg0Zleucer%2B6rpPOVivqKvZDr%2F%2BOzNh1H6XaA%2FoSK6imgRNOiqRxBoDwO%2Fv8I%2FVmCCsiiASerF038j3MXQSLcCP2tKU1Fh77PwqJlKdWD31AE101UgRRjnxm9atdhHcY2sER63LI8I%2FANzVDthkHYluVde3pcOznXkh%2Ff3I6Qr4sBAodMdKA2ruOTs2OjG4%2FjoqiG8yM122bDUXqFMPWGq9o%2FCos6S7U8grZv1Ihcnar%2FRiJDTNYwjzk87WDxDE3hDdX4NzISpNGFGuUDVsiJaSKKbmbJMTf9rRLnGmDoeq1A0MKXYMoljlhM3FxGCnicm01WevVZCZzmVwc0l8u85y1bb7Wfhc%2FjiPxvqGlvqSUqSVspFeqLFtf6R7I65Ota6dCEeaWniB4kqnzLOZ3gHcgwNlQvbHIT1eAsqKF9XDZ2RY32kW2sxcWlU0S3and9sQgJHY9uS8qfBM3874qcD%2FS0VAV4a%2FjAaY37CvcJbmfU3mQwOisgw5hLo%2BS0KbakIbE0bWmYgZ9YufGlvuPKJZgAhrzU5s6I6vv111QlPKImmSqpXFefDCrgonKBjqkAcnkLq6WyVl69Zu81rJ4NW16Om3rK1IcCITfL0BPN9HtKkn3ZUruWtXCcZNatkL%2FFRZ8%2FYz1Hvpujd54%2Fng6d5r%2FQROLH%2B%2BDf6rTDHfaRmBZoXrXdn2NsPcvFMcdHRgko4InPuiqKXPsb%2FJOKWnZVFNnTSMOc8zoMorxGI0ZS2FEyEwFYF3tTthyL6XGmsHq16ShjM1LmmxL3QBiWG%2BYXjbziyfj&X-Amz-Signature=bf4116b0097af54f48701ae01abcd5175cd6a526195cfdd0cc55362894e818cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSLDNXGF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T062613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3oBc6tgW7kAWLJc%2FTNdekS6GDRDZOi9xVovrGyGKsNgIhAJ3eBJuWM3%2F1vs7ptFja13nHD4wdw0PoJgFuzW2q%2Fs6RKv8DCHcQABoMNjM3NDIzMTgzODA1IgxQ6C5wD05it6gvg5kq3ANsEhE1DEreoYJ8Z2xLQLKBg1eQC8yVoQF2en25pNNB4%2BYdmb0YDlj3N3JiqyrF9EXjYr6Vfg0Zleucer%2B6rpPOVivqKvZDr%2F%2BOzNh1H6XaA%2FoSK6imgRNOiqRxBoDwO%2Fv8I%2FVmCCsiiASerF038j3MXQSLcCP2tKU1Fh77PwqJlKdWD31AE101UgRRjnxm9atdhHcY2sER63LI8I%2FANzVDthkHYluVde3pcOznXkh%2Ff3I6Qr4sBAodMdKA2ruOTs2OjG4%2FjoqiG8yM122bDUXqFMPWGq9o%2FCos6S7U8grZv1Ihcnar%2FRiJDTNYwjzk87WDxDE3hDdX4NzISpNGFGuUDVsiJaSKKbmbJMTf9rRLnGmDoeq1A0MKXYMoljlhM3FxGCnicm01WevVZCZzmVwc0l8u85y1bb7Wfhc%2FjiPxvqGlvqSUqSVspFeqLFtf6R7I65Ota6dCEeaWniB4kqnzLOZ3gHcgwNlQvbHIT1eAsqKF9XDZ2RY32kW2sxcWlU0S3and9sQgJHY9uS8qfBM3874qcD%2FS0VAV4a%2FjAaY37CvcJbmfU3mQwOisgw5hLo%2BS0KbakIbE0bWmYgZ9YufGlvuPKJZgAhrzU5s6I6vv111QlPKImmSqpXFefDCrgonKBjqkAcnkLq6WyVl69Zu81rJ4NW16Om3rK1IcCITfL0BPN9HtKkn3ZUruWtXCcZNatkL%2FFRZ8%2FYz1Hvpujd54%2Fng6d5r%2FQROLH%2B%2BDf6rTDHfaRmBZoXrXdn2NsPcvFMcdHRgko4InPuiqKXPsb%2FJOKWnZVFNnTSMOc8zoMorxGI0ZS2FEyEwFYF3tTthyL6XGmsHq16ShjM1LmmxL3QBiWG%2BYXjbziyfj&X-Amz-Signature=989000ddc3d019070fe9faf2f870f6332a8b478f9e2793c59215ae5b215fb74f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

