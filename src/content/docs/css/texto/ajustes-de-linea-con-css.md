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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653SXSNWI%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T004609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnqLRS16YKT80CKevOaIhaOF%2FIb7F50nmjsj%2BEUKpMMgIgUwH7XLmtwTWtpkx%2FWHv6GsBq8XwGi9r1eKcDBqUWgEQq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDDop4qchxiUmBF%2FBqyrcA7XdR6Q3B0TiQUR1LcvXY7JDNuy0c2T65brTYElmLXZ6jLrjrrbjWtLUVQIKLDV6%2BziqhBuGGOGqxz1igZ5%2F4Fv4BXXF6MH4q9SpINXYbAcPg5pHlBfVvafNsUA%2BU6dv2gviTBCXSMSMKThntNp6RTdCDsGRatVE45QcuPgaW3o1cFvCovO0OSPac8jnsaqZvjssv0qL%2FOSowt%2BbrfDW1zXBeNc9ZAOu9ox4QJkWRHNs%2Fm63pJ166YL%2F2rMzbhRqHTgBLP9grR73CRROsrC6%2BavlqPowRWbp9SzKdc5sO5WywyZQrm7DbkiQ8iBN1RSHTVnCjB2D73sYA%2FTTeygZ8P11qW1UEvoZgTcNhzS3OmPLzxyVzcHh%2BXYPoTKYDvhKHxYXz7OzPhkwJxdL4aE8Hj6yRcEwp3p5MSqfZDMgItAFbRWOhW5mct4sPaXrH8AwRolk9ZOu%2F9uFksVAmVBvNBp0CJAMjiu%2FOliuOsmCRYVhFHv1dnle%2BlhNaH2DTSnObfrTqpG4%2FnrFv7jPQ0ayWrP7Gj9VXUlhHMs7EXFhBgrRBD4ucCpQ38qWn2Kkl4J%2BZFoS7Ypsw2Xh8V4hz9Gh4KA9kuQgh1RRpWtB%2FU7hXSxOn7Ts1VByxOc1T6GRMJXfh8oGOqUB%2BZdaDiB%2BD8Sb7gUJZiP8YW%2BjPrM%2BLSZxSKYT6OmF9tDez08AD7u7%2BOkdonAbGdOFjO8OZK%2Bpv80teN%2FQwIzCoBL89TCq9k6qx7KjkzOk1o0T19u3VowcM1731l%2BaTWKriJ3pmjNEti%2BiByDummQzTR%2F1hVmjK1QuRXd424bD1ZKnZ5QDVf3DISjnAZdHIZweHIXPwjyWFZQsNuF6JzVXrbfOyfoX&X-Amz-Signature=edf4c3070c345d2d114218ffa33f2a33a3aa018e902253f9668c05f9da751766&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653SXSNWI%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T004609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnqLRS16YKT80CKevOaIhaOF%2FIb7F50nmjsj%2BEUKpMMgIgUwH7XLmtwTWtpkx%2FWHv6GsBq8XwGi9r1eKcDBqUWgEQq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDDop4qchxiUmBF%2FBqyrcA7XdR6Q3B0TiQUR1LcvXY7JDNuy0c2T65brTYElmLXZ6jLrjrrbjWtLUVQIKLDV6%2BziqhBuGGOGqxz1igZ5%2F4Fv4BXXF6MH4q9SpINXYbAcPg5pHlBfVvafNsUA%2BU6dv2gviTBCXSMSMKThntNp6RTdCDsGRatVE45QcuPgaW3o1cFvCovO0OSPac8jnsaqZvjssv0qL%2FOSowt%2BbrfDW1zXBeNc9ZAOu9ox4QJkWRHNs%2Fm63pJ166YL%2F2rMzbhRqHTgBLP9grR73CRROsrC6%2BavlqPowRWbp9SzKdc5sO5WywyZQrm7DbkiQ8iBN1RSHTVnCjB2D73sYA%2FTTeygZ8P11qW1UEvoZgTcNhzS3OmPLzxyVzcHh%2BXYPoTKYDvhKHxYXz7OzPhkwJxdL4aE8Hj6yRcEwp3p5MSqfZDMgItAFbRWOhW5mct4sPaXrH8AwRolk9ZOu%2F9uFksVAmVBvNBp0CJAMjiu%2FOliuOsmCRYVhFHv1dnle%2BlhNaH2DTSnObfrTqpG4%2FnrFv7jPQ0ayWrP7Gj9VXUlhHMs7EXFhBgrRBD4ucCpQ38qWn2Kkl4J%2BZFoS7Ypsw2Xh8V4hz9Gh4KA9kuQgh1RRpWtB%2FU7hXSxOn7Ts1VByxOc1T6GRMJXfh8oGOqUB%2BZdaDiB%2BD8Sb7gUJZiP8YW%2BjPrM%2BLSZxSKYT6OmF9tDez08AD7u7%2BOkdonAbGdOFjO8OZK%2Bpv80teN%2FQwIzCoBL89TCq9k6qx7KjkzOk1o0T19u3VowcM1731l%2BaTWKriJ3pmjNEti%2BiByDummQzTR%2F1hVmjK1QuRXd424bD1ZKnZ5QDVf3DISjnAZdHIZweHIXPwjyWFZQsNuF6JzVXrbfOyfoX&X-Amz-Signature=e8acffa8f0bd0bb07a65b534ada7920fe0254fbd50ea2e4daf2e5aed0b75f92c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

