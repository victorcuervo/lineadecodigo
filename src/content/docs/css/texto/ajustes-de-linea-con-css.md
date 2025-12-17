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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CGSZ2A4%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T004008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHgTwKu9wauHWWPEcaURN8W%2BU18mXU%2FQ%2B4nzgpDi%2FVCXAiEAv4evkjtuMLGliXy%2Bs8aHZ396jxQeGk%2FvC3dOv0AFxU4q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDHGQFf4BnYape%2BmNwyrcA05s6EgvASJ3Y4LjjVat4TiV9Ro8%2BAISHaGjdMrxKDkMiAcYqg2SfH5YdcYFGmnKb1yHidHUW1lKSXRVo5ikCuoeDsewvc%2BMIf6w0d9jw3BO6Y538nRY8xlPE%2FXDFjhEp9ZeuiTf1cD8kT77qS9RL5%2FWBZvLrlqpX%2B9WjVuZp8tqa5ebP%2FiKTHh8u%2BxF0m%2FW52sXp9tJ9zq0JZKHl6klTho38Ji0J8KY6FA%2BPjOROIMEygaLn0SveTNeKhpbL4OvrPWYbdFVA4n2jN9BYjK02H2selhITFCHaW%2FFKwaavzQPCYI4QSsJ8tozhoxPVM%2FbtTJwQnnEGmAtjSRoAojXBMNY%2FzEFr%2BWuClxrzN4r3VeGvS2Y5OP1yj5SWvyNFhIzkcgx9ev6wjSBAjRk5J%2BbN1sbbEmryDhbzSQY%2FhF%2F7iNeSqUwfng8bhEEmTx7NLn028kegsai2XiVbANpCoeQX8Ze%2F0KbHBRXPXre%2BBiwcYUHu3k2HoQqkN5e9sMTjpSE5K5u16ueTkdDzwBbHsaqjhJwVLGBwQed0EaJd7%2FTVDtbgHF52Njvs%2FMt4njpahtGLSz0ForSRuorgNEvOeE0NHmHFaPuCE7eYkCxsFh%2BvMJoL7KHyARi8aEkF4QNMKbfh8oGOqUBVJ7qkUGwMmuzgV9VTGlBySC24DQITr%2B2REZGLyf0JVoMvynim7YU7P10Ng45QOOBUuhu9kvh2ovPLNyvoL9W1Z8s4G7wIUZXHiDAxrTMc%2ForLrizJH47ZyVX1lD497s2G%2Fa%2F%2Br7%2BxHILRj0kAYspWm9whX7tYkYZ8LsYjlL%2FxrxuImjgV%2FnCb2JhGWvY89iLcH55DsjaymHfFMc%2F3VaptHNBtuyv&X-Amz-Signature=d90b3d0cb66ec91427c5a0d3e1f6e2de066802ce7f15f73c82148fb49dd5e1f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CGSZ2A4%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T004008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHgTwKu9wauHWWPEcaURN8W%2BU18mXU%2FQ%2B4nzgpDi%2FVCXAiEAv4evkjtuMLGliXy%2Bs8aHZ396jxQeGk%2FvC3dOv0AFxU4q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDHGQFf4BnYape%2BmNwyrcA05s6EgvASJ3Y4LjjVat4TiV9Ro8%2BAISHaGjdMrxKDkMiAcYqg2SfH5YdcYFGmnKb1yHidHUW1lKSXRVo5ikCuoeDsewvc%2BMIf6w0d9jw3BO6Y538nRY8xlPE%2FXDFjhEp9ZeuiTf1cD8kT77qS9RL5%2FWBZvLrlqpX%2B9WjVuZp8tqa5ebP%2FiKTHh8u%2BxF0m%2FW52sXp9tJ9zq0JZKHl6klTho38Ji0J8KY6FA%2BPjOROIMEygaLn0SveTNeKhpbL4OvrPWYbdFVA4n2jN9BYjK02H2selhITFCHaW%2FFKwaavzQPCYI4QSsJ8tozhoxPVM%2FbtTJwQnnEGmAtjSRoAojXBMNY%2FzEFr%2BWuClxrzN4r3VeGvS2Y5OP1yj5SWvyNFhIzkcgx9ev6wjSBAjRk5J%2BbN1sbbEmryDhbzSQY%2FhF%2F7iNeSqUwfng8bhEEmTx7NLn028kegsai2XiVbANpCoeQX8Ze%2F0KbHBRXPXre%2BBiwcYUHu3k2HoQqkN5e9sMTjpSE5K5u16ueTkdDzwBbHsaqjhJwVLGBwQed0EaJd7%2FTVDtbgHF52Njvs%2FMt4njpahtGLSz0ForSRuorgNEvOeE0NHmHFaPuCE7eYkCxsFh%2BvMJoL7KHyARi8aEkF4QNMKbfh8oGOqUBVJ7qkUGwMmuzgV9VTGlBySC24DQITr%2B2REZGLyf0JVoMvynim7YU7P10Ng45QOOBUuhu9kvh2ovPLNyvoL9W1Z8s4G7wIUZXHiDAxrTMc%2ForLrizJH47ZyVX1lD497s2G%2Fa%2F%2Br7%2BxHILRj0kAYspWm9whX7tYkYZ8LsYjlL%2FxrxuImjgV%2FnCb2JhGWvY89iLcH55DsjaymHfFMc%2F3VaptHNBtuyv&X-Amz-Signature=fb27a3801895e0abd8ae34385747c66c94a8a8779b9f6aeb54dab13da262d480&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

