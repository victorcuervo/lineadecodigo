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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUL4XJXI%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T064055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2BiSGhx0ep%2BlmeBxZXOyG0RJq%2BLNJOxFJYPO0U8gikGwIgKl9uophoyYceY9%2FoAHxGt7DyARBkpMBvf7hQDXhWrkYq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDD%2FN04qiGASkDeNxxSrcA6gbfDOsmd07nByhJr7WxNUEihpjKCswAKGYTghY8B6Y9Uqid6wSw1dd2YiSEDXbZIQOJeKeQR8Y%2FXZx8OvkOaXFsB30Y%2FCyU%2F6xqVP53tIDtLokQ%2F1JjXBTHr46fi3yEwYQc4%2FmdhG9PNJSO%2FeojpUzI22n5g7rJtUeXG5YDhuFgPAAEq%2Fpr%2F%2FH3t8ZVyXpnp7Mi9pn%2F2iovJVsWn52ybYsyhyCxSesdKZ%2F30PVOlj3qaVXWj8V6LPoKHIF2QNy9DvIbCQbMn686GtVLCSqBU66T%2FAM3szjrouOf9BrzuCCJnL%2FrW6lFys9adkcrIe%2FanfrgOhtS7DDmL7o6thxfhub4jpzRDFtBQ9gqY%2F1JqsppZeu9TO8OwcFFPsoU3fABDuzwGvAh9qpbIw4SHpD7n5aqBgcBx8lKNBaIbl9k5kLt5vyOKkYSEUHQa7S3njsK7%2BlRnruNThm6WBwiSs%2BixnJbGMAMopuf8ZQ9QsXrsu9PG0ngOh8u%2FY2npWiL78%2FuTYGHKTTJUsptKJxXGdfat7uT3vfBTeZ9kKSh5%2FL2vLgV9KJcmy%2BZq2Jwa7FaM7RYZqMR5kVRDlsFWBbdoltQTDDESl3Oq9P4mFJcjcRTT8yszz2r2oD0ZemrzYOMIqeicoGOqUBQAYfpo8tB3rkvakssDcAlv0UJ1BFrKiJB3axNsmBZcIwlSefCK56yZ%2FsAepby2QjrCYPQtqYplGZeUCb6nXNbDiQrI0xHvbAdZDFbBkZaLmeUac7CECyKC9GcTU0OHAYgjnBL1QguF7tEww%2FilAf3%2FPofaZcaeW5thN6zek4KgkvelGcDiv1%2FpY7Kdd3zjRW%2BNXESRVPNc9qwnq8N6gTLeJUSma0&X-Amz-Signature=db0781a99e10d95cb1c28d0e42fedd1c8da7d0f535e57122b83aac854c433dcf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUL4XJXI%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T064055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2BiSGhx0ep%2BlmeBxZXOyG0RJq%2BLNJOxFJYPO0U8gikGwIgKl9uophoyYceY9%2FoAHxGt7DyARBkpMBvf7hQDXhWrkYq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDD%2FN04qiGASkDeNxxSrcA6gbfDOsmd07nByhJr7WxNUEihpjKCswAKGYTghY8B6Y9Uqid6wSw1dd2YiSEDXbZIQOJeKeQR8Y%2FXZx8OvkOaXFsB30Y%2FCyU%2F6xqVP53tIDtLokQ%2F1JjXBTHr46fi3yEwYQc4%2FmdhG9PNJSO%2FeojpUzI22n5g7rJtUeXG5YDhuFgPAAEq%2Fpr%2F%2FH3t8ZVyXpnp7Mi9pn%2F2iovJVsWn52ybYsyhyCxSesdKZ%2F30PVOlj3qaVXWj8V6LPoKHIF2QNy9DvIbCQbMn686GtVLCSqBU66T%2FAM3szjrouOf9BrzuCCJnL%2FrW6lFys9adkcrIe%2FanfrgOhtS7DDmL7o6thxfhub4jpzRDFtBQ9gqY%2F1JqsppZeu9TO8OwcFFPsoU3fABDuzwGvAh9qpbIw4SHpD7n5aqBgcBx8lKNBaIbl9k5kLt5vyOKkYSEUHQa7S3njsK7%2BlRnruNThm6WBwiSs%2BixnJbGMAMopuf8ZQ9QsXrsu9PG0ngOh8u%2FY2npWiL78%2FuTYGHKTTJUsptKJxXGdfat7uT3vfBTeZ9kKSh5%2FL2vLgV9KJcmy%2BZq2Jwa7FaM7RYZqMR5kVRDlsFWBbdoltQTDDESl3Oq9P4mFJcjcRTT8yszz2r2oD0ZemrzYOMIqeicoGOqUBQAYfpo8tB3rkvakssDcAlv0UJ1BFrKiJB3axNsmBZcIwlSefCK56yZ%2FsAepby2QjrCYPQtqYplGZeUCb6nXNbDiQrI0xHvbAdZDFbBkZaLmeUac7CECyKC9GcTU0OHAYgjnBL1QguF7tEww%2FilAf3%2FPofaZcaeW5thN6zek4KgkvelGcDiv1%2FpY7Kdd3zjRW%2BNXESRVPNc9qwnq8N6gTLeJUSma0&X-Amz-Signature=001b8965c5f83824d8fb84ea5d6b9a63f21f56a17f282e4f5576146e88d901d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

