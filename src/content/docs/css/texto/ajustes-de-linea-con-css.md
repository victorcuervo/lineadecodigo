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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5PELATM%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T213942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWou3jZjeaS1LpOuYuxp0bgD8DWKlPSPuFlEkBKW5z5AIhAICGaBT9y37HRSUuMjTEmtJQIbx94PRmXENhoQNI4M5GKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwkCXkwUT982szk2iwq3AMj1z3wryLrXM8srSIxIHtI1XkLf%2BeRffVz2DQDlHJxNAaqTD300l4gH1FIu4SJX1euN1eEKDdMuI5aJg5qIX6uOkJ4x%2FLnyErMDuHuiG2SUT4U5MGUXZtMeZQJfNkVGLzlHig%2BFI%2B92ugPtorgZXQCiWZHs357RtBIICSNYq207bcjiBrllge%2F1M3EiHdo5nGqkfXXK8KXyOfMopKFLCLm7%2BG9o6e6gqFIsZuBklDxdQ8%2BhLstRuuZ6nnu49zANalnp%2BH4Qjgmq73%2Fqsf54XH7PWEu13fE%2BT8Q3U6vdoEaEgLUku8CQD6VNCirf8namrpRfbi3bV6BHREIFhG4sU5eklztEebylx537Tgx00m%2FJNQ3wsZ5qUiKWnnDGwzBSeUNYhQEhC11O4isdqbjeprs6%2B3spegNwWR9kxF5x6nxlYOHl0G3MQR2ftqu7u%2BjbJtAW5psqz1xw4f4GCgYQjqJWfdoNvudV81ubWOTJ8pXwQR5RNNR6olh%2Blm4ql4yJOo5VWGOLG4o3ApuRoDIT%2BG770J%2F4E7ktsjZlHTz3YUhJ%2F1WZg9rjLW2CdqKZdAl8qZnGP5TJHFhJDD0Lr3Fv8CP2RDgW1tC%2Bt51iw7oRRdgAYCFy%2BecpQWx8yxtzzCnrozKBjqkAX41FMDsQM7MXiqIdHOtxb8jePHav4LJd408JmWjSZjal0CMyMyZRe8lGgZCWM6BEeGZIWS9KO7olgWQnF3SfsabgAyi0OAqKUdQu9wcrRbmdHTeAI0XFrWxAOwW2tIOjzHc3qtzDmu0P6u65cX1pB9DPLnJmch9HFl4BnUoBceWD8MLH9seH8kMlCMKq1s%2FqswCGald%2FtbB7kGkJs8dZcTNmNr2&X-Amz-Signature=e504f1a9d0a50f916bfe26108373424e90227d8f42ccaea2c331acf0274a62e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5PELATM%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T213942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWou3jZjeaS1LpOuYuxp0bgD8DWKlPSPuFlEkBKW5z5AIhAICGaBT9y37HRSUuMjTEmtJQIbx94PRmXENhoQNI4M5GKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwkCXkwUT982szk2iwq3AMj1z3wryLrXM8srSIxIHtI1XkLf%2BeRffVz2DQDlHJxNAaqTD300l4gH1FIu4SJX1euN1eEKDdMuI5aJg5qIX6uOkJ4x%2FLnyErMDuHuiG2SUT4U5MGUXZtMeZQJfNkVGLzlHig%2BFI%2B92ugPtorgZXQCiWZHs357RtBIICSNYq207bcjiBrllge%2F1M3EiHdo5nGqkfXXK8KXyOfMopKFLCLm7%2BG9o6e6gqFIsZuBklDxdQ8%2BhLstRuuZ6nnu49zANalnp%2BH4Qjgmq73%2Fqsf54XH7PWEu13fE%2BT8Q3U6vdoEaEgLUku8CQD6VNCirf8namrpRfbi3bV6BHREIFhG4sU5eklztEebylx537Tgx00m%2FJNQ3wsZ5qUiKWnnDGwzBSeUNYhQEhC11O4isdqbjeprs6%2B3spegNwWR9kxF5x6nxlYOHl0G3MQR2ftqu7u%2BjbJtAW5psqz1xw4f4GCgYQjqJWfdoNvudV81ubWOTJ8pXwQR5RNNR6olh%2Blm4ql4yJOo5VWGOLG4o3ApuRoDIT%2BG770J%2F4E7ktsjZlHTz3YUhJ%2F1WZg9rjLW2CdqKZdAl8qZnGP5TJHFhJDD0Lr3Fv8CP2RDgW1tC%2Bt51iw7oRRdgAYCFy%2BecpQWx8yxtzzCnrozKBjqkAX41FMDsQM7MXiqIdHOtxb8jePHav4LJd408JmWjSZjal0CMyMyZRe8lGgZCWM6BEeGZIWS9KO7olgWQnF3SfsabgAyi0OAqKUdQu9wcrRbmdHTeAI0XFrWxAOwW2tIOjzHc3qtzDmu0P6u65cX1pB9DPLnJmch9HFl4BnUoBceWD8MLH9seH8kMlCMKq1s%2FqswCGald%2FtbB7kGkJs8dZcTNmNr2&X-Amz-Signature=6dcb3fdcb9b8f7fd40944a53f88a59675f64715a424744a87b4e84df2f3d15ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

