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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2JCDXNH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T120124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIByyssRxJwxgPI%2F1Ta%2Ftbccdwv6ur3G6E3Wik3OEBeT%2BAiAKucZ1%2Fi8CQAoSfWvouZo1EobKwSsD%2BIVNvZrvsstybCr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMqsCl1cvcJQlTYshDKtwDsPf5MrR%2F9N1RHdDcjJ9N6CsEwb%2BoLwspRntq5DW5q7Edtj5q1YLf5lZLyzz6YfRniyxAQHyBa8g1cO82PHed0EtB8nlFFdIpFLEF35pzC91nbsRDyKF0sE6AdjTJBF8YJoKuFpK5Q9DJDmRyq1DsCOudk3hxcYsNkL4C5GBCLcSB6Oz%2FKUruqP3eG1HgOgxSDpPU5duaTCQo8SSYOIJB7iPnZ5oUFNS6l0dM9IKLaD90qlUeIZWdm6b1hkHYrHbCv8h5aqe%2FGyPhsLWbgCdmqtYzIf4KNn0KBdOqurvNqjG7cMG8s1JfZ%2FzHICLJ%2B0Z3hLvj6V2ciTOqllb3wRyS4tC%2BN1GDdkC1fI%2FohwRKYlyF2%2FZ1%2FtJDlEe6ymxqVph%2B40OHIwz3y0u0SuqTuWAyxm6NV6biLcjo0Vp9qjwmxB7lTZs2yKfOESuOPoDlWYnonNPnNVh6h%2B7zjpQfSSKTQ24Y2xEpkdFAC23fP7ETW3YAjyhkrTGnXPO4Anels8c0Zvlai9iO4GDaWcdctQxT75G6mbsc4yPBI1J81knhRTbqAz2cz%2BggLjcSywUkZuKgnf4lSqm6q6Lg2viNQlRqsrpc777PDpbtWZ3BSJfYjGY%2Bur6AFphAO2R5isYwm6qKygY6pgFSSFYr5oKm6yOokSBv3hTw8IZt5CU0E3%2FGuHmgAhOmiOvDiJ1htT%2FdN8YuISzxfTpdxjoy86e2LxykXpKe69b8PO41Y5OtlaBeWVdDi6WoKXB55oBdRFYyyLUhfhxnZD43QweU74Yz9YKAWol5dvU9%2F9F9dBvDD89QaM6npLx2FH%2ByjWDdwQRuwCwtDmC0C0laAQHj%2Bw3o%2FS%2BeaTP2p8%2BJ6dbzNEKh&X-Amz-Signature=481a644e6c676d38903e56fd0ac8436b4eb353c0cf5ebc0279ade8f41344ed41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2JCDXNH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T120124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIByyssRxJwxgPI%2F1Ta%2Ftbccdwv6ur3G6E3Wik3OEBeT%2BAiAKucZ1%2Fi8CQAoSfWvouZo1EobKwSsD%2BIVNvZrvsstybCr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMqsCl1cvcJQlTYshDKtwDsPf5MrR%2F9N1RHdDcjJ9N6CsEwb%2BoLwspRntq5DW5q7Edtj5q1YLf5lZLyzz6YfRniyxAQHyBa8g1cO82PHed0EtB8nlFFdIpFLEF35pzC91nbsRDyKF0sE6AdjTJBF8YJoKuFpK5Q9DJDmRyq1DsCOudk3hxcYsNkL4C5GBCLcSB6Oz%2FKUruqP3eG1HgOgxSDpPU5duaTCQo8SSYOIJB7iPnZ5oUFNS6l0dM9IKLaD90qlUeIZWdm6b1hkHYrHbCv8h5aqe%2FGyPhsLWbgCdmqtYzIf4KNn0KBdOqurvNqjG7cMG8s1JfZ%2FzHICLJ%2B0Z3hLvj6V2ciTOqllb3wRyS4tC%2BN1GDdkC1fI%2FohwRKYlyF2%2FZ1%2FtJDlEe6ymxqVph%2B40OHIwz3y0u0SuqTuWAyxm6NV6biLcjo0Vp9qjwmxB7lTZs2yKfOESuOPoDlWYnonNPnNVh6h%2B7zjpQfSSKTQ24Y2xEpkdFAC23fP7ETW3YAjyhkrTGnXPO4Anels8c0Zvlai9iO4GDaWcdctQxT75G6mbsc4yPBI1J81knhRTbqAz2cz%2BggLjcSywUkZuKgnf4lSqm6q6Lg2viNQlRqsrpc777PDpbtWZ3BSJfYjGY%2Bur6AFphAO2R5isYwm6qKygY6pgFSSFYr5oKm6yOokSBv3hTw8IZt5CU0E3%2FGuHmgAhOmiOvDiJ1htT%2FdN8YuISzxfTpdxjoy86e2LxykXpKe69b8PO41Y5OtlaBeWVdDi6WoKXB55oBdRFYyyLUhfhxnZD43QweU74Yz9YKAWol5dvU9%2F9F9dBvDD89QaM6npLx2FH%2ByjWDdwQRuwCwtDmC0C0laAQHj%2Bw3o%2FS%2BeaTP2p8%2BJ6dbzNEKh&X-Amz-Signature=016288885d6212cd4d9168500d36fa36d68ee85fb239ae35433b1c5e5465075d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

