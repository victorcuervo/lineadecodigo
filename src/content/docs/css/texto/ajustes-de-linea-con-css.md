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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DAAR63C%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T073537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCrEMGwh7MNxSzVOk23OCpAYr7u86Wstxt0sIDx%2FoT9FwIgY1CnD85WHmxxS1uQmv1AIXu16%2Fz4JBpmkLUf4PhcqSEq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDEIEyhkr%2BGCxxLf2JCrcA%2BlLSIuO0W3%2BOyFQ8KApvf0slK2UYI1yvwsB1p5AQIY8oz7q09ehGaqQhcuYpkZEr6lwLyXWD8MVrSEy9W8kWg0A16uGPe%2Fg9yZ0XLC4tK7AZElopR7r63OdoHcEcpq%2B%2BE56%2BhA5ykVqqqjDzYpIcyEBaR6jpsi6Hqy4avWJWL5kSYXszu3BA95xkoY%2BIb8lIN5prRcG6R%2FPlfolDLKoUR5UEUjyBJy7iz7xZ5ZHX4n1kwTeD7EnQ2JOeY7VjKvHd3OFomylbF30C0YCFDrNQYvw8eI799nUdIBpqbo8y7d6%2F7LZV9FaUkJY%2BmkVWWNd1PWE1pZuSHW7xqB9jkCTa4GFxqnHEzDooGUMoY885mO0lFZFzdBAZJms965eGL5VyPiLSbVZy5wjzM18tZ8RA%2FaJwUuOe7iQAmbzjwC5oE5Ugb3biTyNpqUrtOZnkNqF2J2JB6Xqh4rP9LRdbdXI%2B918R6vuA%2B6bkTjFPvWfR9PawSVkvd7IurdeIjr7iS1zBiBiBT%2FvwF3Yq3kO2pHVkMoyLB3bzODcktyShLaAHQ1rzf%2FXyMQzL%2B1sJMsc4r69tPnShgxdkFwi7ximIxpw2iyjTYVzbnpQ55UQtUZO26KxfBBzv6%2BLj%2BtYR9y%2FMIy3icoGOqUBXlbSd5xvmWqdoIBCNTvpd7x00CdDyRuPj2o9fj876t4Oanx%2BAI%2ByvQGertVaanJPy75IvKVWg%2FmD2747ARr5QASXpzZKh%2BKpek%2ByBjzudxTSI0rrZyBX54xGN1yeR4QicOy7zA24rCFrAg9dnt%2FxEUSqfAndjnnej27tchkLTtXXZv6yr3X%2B8lkGRF0oF08Nr4hVhRa2CrIKxmgE6fm7mjtVEbEe&X-Amz-Signature=c9eaa6f3120022c8220ebd7b4d74ae3986003d3b32c0323420f327984449f736&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DAAR63C%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T073537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCrEMGwh7MNxSzVOk23OCpAYr7u86Wstxt0sIDx%2FoT9FwIgY1CnD85WHmxxS1uQmv1AIXu16%2Fz4JBpmkLUf4PhcqSEq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDEIEyhkr%2BGCxxLf2JCrcA%2BlLSIuO0W3%2BOyFQ8KApvf0slK2UYI1yvwsB1p5AQIY8oz7q09ehGaqQhcuYpkZEr6lwLyXWD8MVrSEy9W8kWg0A16uGPe%2Fg9yZ0XLC4tK7AZElopR7r63OdoHcEcpq%2B%2BE56%2BhA5ykVqqqjDzYpIcyEBaR6jpsi6Hqy4avWJWL5kSYXszu3BA95xkoY%2BIb8lIN5prRcG6R%2FPlfolDLKoUR5UEUjyBJy7iz7xZ5ZHX4n1kwTeD7EnQ2JOeY7VjKvHd3OFomylbF30C0YCFDrNQYvw8eI799nUdIBpqbo8y7d6%2F7LZV9FaUkJY%2BmkVWWNd1PWE1pZuSHW7xqB9jkCTa4GFxqnHEzDooGUMoY885mO0lFZFzdBAZJms965eGL5VyPiLSbVZy5wjzM18tZ8RA%2FaJwUuOe7iQAmbzjwC5oE5Ugb3biTyNpqUrtOZnkNqF2J2JB6Xqh4rP9LRdbdXI%2B918R6vuA%2B6bkTjFPvWfR9PawSVkvd7IurdeIjr7iS1zBiBiBT%2FvwF3Yq3kO2pHVkMoyLB3bzODcktyShLaAHQ1rzf%2FXyMQzL%2B1sJMsc4r69tPnShgxdkFwi7ximIxpw2iyjTYVzbnpQ55UQtUZO26KxfBBzv6%2BLj%2BtYR9y%2FMIy3icoGOqUBXlbSd5xvmWqdoIBCNTvpd7x00CdDyRuPj2o9fj876t4Oanx%2BAI%2ByvQGertVaanJPy75IvKVWg%2FmD2747ARr5QASXpzZKh%2BKpek%2ByBjzudxTSI0rrZyBX54xGN1yeR4QicOy7zA24rCFrAg9dnt%2FxEUSqfAndjnnej27tchkLTtXXZv6yr3X%2B8lkGRF0oF08Nr4hVhRa2CrIKxmgE6fm7mjtVEbEe&X-Amz-Signature=e5ec8bc41f2be036681e6c21e1e08bacf82332d00480079bc63b5161f13846fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

