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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAJCUVJT%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T083820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxFCb0R5Q6F9lHd%2B%2BdaT2pljmqmDyYywh28%2F2f%2FEj%2B1wIhANTlzMEjmhjBxAPnEt4T7VpN3oEbvsizARyuJhoZQpWSKv8DCHkQABoMNjM3NDIzMTgzODA1Igykt3XBFZMdPExsY5wq3AOwRZMUPp3%2Bw%2BCJTwKXNriR7clQ4FODt1gIKclmSZq%2B23URczxMZDG2VafFBYo0JPvWK%2BeLsVJEfwRYfWN2y5711O5e%2FVmEvUflCsMSPrp1cASP7ktaAbN6tySheOTqM0xaQHU47%2BJghyKiAryQB%2FSRShtB5y6sEoMTHJJpm4rmjt47uS2OsM3%2FLr0ZHLBHBLOf2Ui20J2bbqcFpx6j8uVd0UcsPu6yi%2FsnsODPzRUuLnh8PJTFBeaJuBKm%2BAoEfoodeGFV6wLpIOsMVG5%2Fo4YjemDIgnGwI2lfqUSXlJNv2fydHOcHjaujkdF6ROa6lVYRUE6taYpQcqsOwoZO5%2FrfCBoVlRJWed5YQ7abbfL1VtC1ZqSInSnRjNwoEEQe64fUBeXz86YeltXW93lN7sCq%2BaMWi60bNja8DbgC36CF4n6aSFEuj4DeXM0vmlNWv8%2FRiRiYIpab5kPWrcH4oPHexsuNDPPBcKPezV12L3QOczvdd%2F4O%2B2Z8jkLXWiuDiKwnJkpMi3I5yAh%2BI5DmIxzjUP4du6oBUzuPZkfNQAllS%2FUiaIPL3gC3BrqjOLs7roufV6k2CHehgQNGsbjex%2FhDCVIYwxdWaQg9iXRyDlHzhBB5RIvFkwts%2B6orvTDo0YnKBjqkAZabMQOOjqXuHwidWVlZkPnuqW3wa53I6Ix62u06oz9fy2Q7yBsCWP46QsGnBDYgmYxf0%2BuASzQiRz7n%2FuvtdHvQkQPOVlLRsOJ%2FoAgUP4GjMTYaXdUDTXI7GK0pC0MZ8yleyMgeM0cKnxab47NVpIacymtPnZjcxApLJ64K%2BlhJSfqoLxOKGOrukb3dt10DckcQg82QysSCOeWWTsMTza9zYYk0&X-Amz-Signature=076588a716e7191a7517bb4726875a4bcc905c62d2ad7accbba0b80b0e6f2027&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAJCUVJT%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T083820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxFCb0R5Q6F9lHd%2B%2BdaT2pljmqmDyYywh28%2F2f%2FEj%2B1wIhANTlzMEjmhjBxAPnEt4T7VpN3oEbvsizARyuJhoZQpWSKv8DCHkQABoMNjM3NDIzMTgzODA1Igykt3XBFZMdPExsY5wq3AOwRZMUPp3%2Bw%2BCJTwKXNriR7clQ4FODt1gIKclmSZq%2B23URczxMZDG2VafFBYo0JPvWK%2BeLsVJEfwRYfWN2y5711O5e%2FVmEvUflCsMSPrp1cASP7ktaAbN6tySheOTqM0xaQHU47%2BJghyKiAryQB%2FSRShtB5y6sEoMTHJJpm4rmjt47uS2OsM3%2FLr0ZHLBHBLOf2Ui20J2bbqcFpx6j8uVd0UcsPu6yi%2FsnsODPzRUuLnh8PJTFBeaJuBKm%2BAoEfoodeGFV6wLpIOsMVG5%2Fo4YjemDIgnGwI2lfqUSXlJNv2fydHOcHjaujkdF6ROa6lVYRUE6taYpQcqsOwoZO5%2FrfCBoVlRJWed5YQ7abbfL1VtC1ZqSInSnRjNwoEEQe64fUBeXz86YeltXW93lN7sCq%2BaMWi60bNja8DbgC36CF4n6aSFEuj4DeXM0vmlNWv8%2FRiRiYIpab5kPWrcH4oPHexsuNDPPBcKPezV12L3QOczvdd%2F4O%2B2Z8jkLXWiuDiKwnJkpMi3I5yAh%2BI5DmIxzjUP4du6oBUzuPZkfNQAllS%2FUiaIPL3gC3BrqjOLs7roufV6k2CHehgQNGsbjex%2FhDCVIYwxdWaQg9iXRyDlHzhBB5RIvFkwts%2B6orvTDo0YnKBjqkAZabMQOOjqXuHwidWVlZkPnuqW3wa53I6Ix62u06oz9fy2Q7yBsCWP46QsGnBDYgmYxf0%2BuASzQiRz7n%2FuvtdHvQkQPOVlLRsOJ%2FoAgUP4GjMTYaXdUDTXI7GK0pC0MZ8yleyMgeM0cKnxab47NVpIacymtPnZjcxApLJ64K%2BlhJSfqoLxOKGOrukb3dt10DckcQg82QysSCOeWWTsMTza9zYYk0&X-Amz-Signature=ef031d1f0b62afc01bc891c3c87fa12b2824d27f88cb944a416d8d558bb7841f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

