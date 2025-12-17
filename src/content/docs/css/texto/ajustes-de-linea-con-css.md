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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZ4X2T52%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T160253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCa6oz3qwRG0s4jVOoCVlsHsfAFcUerG%2BzHcc5NinagugIhAOZDkHeV1B%2Bz8Y8NeTIf5ThpWLpeLc99C7axV7Wnx5HtKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx7F0mGtoAamI40Fesq3AMJbZVTxYuRBI6fqmj1%2BF%2FBeYCFDYqItt9tteg8IsDSHVej9QO7lWPamCAUy%2F1yxqkNzXtjvHVYXblXLPtfWnSfH2WGMRxtoUn3FwNPxABd0ePYDcohDTZWTzyTsmijjAyx%2Fxy%2F6uaxjwN2vml6bPG%2BvLwba766DYktEKVMZQrum1%2Fz9PZMjUgT0JBGT6FftjOKy9zWcqGJMZqcsexjmQIpzn12ZqvXk2zwgnnPc2OrNbk2luIEYDuYnmoIbnbAN2dUp%2FlVfETfb36wcMJQEGx7%2BJR4OI5OzhN25lzuIBEsspfxwrfirrsmm7T%2Fx3zINKUI5mFD6v00dcT0FuogdQyGnvMtjy3HtbTC9CrkXKxUMHwNPNBwFh7P6Mw58UG0EMWZK9V5f%2BzTu0ZMe%2FhFzr9o5rUsBGLyADYwScKn4%2BOrr7jXIIMyOmlAsEY%2FAPeJRF%2Fx8C0XBGfc6Wz4GoJf2kEx7KsbYeG4uow%2FfeC1KimBPYmSCQjy6q%2FoDNpWoPakkuplV%2F2llT9EwuBtJAe2FhKJZKXK1vpxcto8XkFXdReWJj4aII2p4aeJJi26nn7zeWvgAjndzpgk6QYwcypwRcJajsTWdGvVoEpbPUIHk4b%2Bya7Ja68KEXW2Vzn35TDKnovKBjqkAYMej1geCESldma4vNNWgzffyAGTMTR%2BT7n5tA7p55lrmFqsokz7qdnl6GCA2gXLfrgORg6ThnPzgZt5kMDiscai%2BPfHsR%2FWbnpmC2LsQgSn7aeW7AtUvR6d1E4G5umen5jFwRp4xc68jEXxTwWOMVLC2PCCxgfpAo0pXmyG4KgsVBtQCOLpRn5eWvi0sQxhOY4Sm90SICeGJQyTGKNhDFe8xpxB&X-Amz-Signature=11c4525a07134da35e9e7a477cda963c3aa551ae71248fc71c869431193cabdf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZ4X2T52%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T160253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCa6oz3qwRG0s4jVOoCVlsHsfAFcUerG%2BzHcc5NinagugIhAOZDkHeV1B%2Bz8Y8NeTIf5ThpWLpeLc99C7axV7Wnx5HtKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx7F0mGtoAamI40Fesq3AMJbZVTxYuRBI6fqmj1%2BF%2FBeYCFDYqItt9tteg8IsDSHVej9QO7lWPamCAUy%2F1yxqkNzXtjvHVYXblXLPtfWnSfH2WGMRxtoUn3FwNPxABd0ePYDcohDTZWTzyTsmijjAyx%2Fxy%2F6uaxjwN2vml6bPG%2BvLwba766DYktEKVMZQrum1%2Fz9PZMjUgT0JBGT6FftjOKy9zWcqGJMZqcsexjmQIpzn12ZqvXk2zwgnnPc2OrNbk2luIEYDuYnmoIbnbAN2dUp%2FlVfETfb36wcMJQEGx7%2BJR4OI5OzhN25lzuIBEsspfxwrfirrsmm7T%2Fx3zINKUI5mFD6v00dcT0FuogdQyGnvMtjy3HtbTC9CrkXKxUMHwNPNBwFh7P6Mw58UG0EMWZK9V5f%2BzTu0ZMe%2FhFzr9o5rUsBGLyADYwScKn4%2BOrr7jXIIMyOmlAsEY%2FAPeJRF%2Fx8C0XBGfc6Wz4GoJf2kEx7KsbYeG4uow%2FfeC1KimBPYmSCQjy6q%2FoDNpWoPakkuplV%2F2llT9EwuBtJAe2FhKJZKXK1vpxcto8XkFXdReWJj4aII2p4aeJJi26nn7zeWvgAjndzpgk6QYwcypwRcJajsTWdGvVoEpbPUIHk4b%2Bya7Ja68KEXW2Vzn35TDKnovKBjqkAYMej1geCESldma4vNNWgzffyAGTMTR%2BT7n5tA7p55lrmFqsokz7qdnl6GCA2gXLfrgORg6ThnPzgZt5kMDiscai%2BPfHsR%2FWbnpmC2LsQgSn7aeW7AtUvR6d1E4G5umen5jFwRp4xc68jEXxTwWOMVLC2PCCxgfpAo0pXmyG4KgsVBtQCOLpRn5eWvi0sQxhOY4Sm90SICeGJQyTGKNhDFe8xpxB&X-Amz-Signature=dd9966433e46619d18dca715be15892dff775c194a797a5d66b2a79982a1765c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

