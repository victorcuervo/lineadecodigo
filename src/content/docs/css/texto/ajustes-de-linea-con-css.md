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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QZ2SKUE%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T165911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICsjVi%2FM8NHB%2Bh21cmAC0GhpneNCs51gXgF6eP3CyEdAAiB1UwVg2seKUsnkebM13%2FyDhdyZ5bnnYB0qd3FQS0I66iqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjfzJ4bgDAa%2FS6GcLKtwDILstmuA1DUaqfzKNS%2FryS5oGjtHs44LSDdKpruGnnVG%2FLaZIY5VibYSVUvVlwgrbAyPImg9Cz6FGY5ZeaajRmwSZdQ4Weu5EkialD2YBxzEW1flHExOn6RoPfbZGgJMdHYBkTDGT7sZEdH8BnGP4oeuGbOYEnVHl157ipFhMvOmTsO4qtjaOkC9DdLtGBB3EM%2FxFJTrqqguP35%2BUIH1mfdSbCsD4Ba3eJOndqRbua%2BEpOkrS9m9yJtxU430r3ZpSxh3O8zYzeg2bcuuvg8YJQbdm8ousNG7LqkkBYwwlHGaV3q8bqviAlhRcrN2wcGz1ZJQiK%2Fow7BakzfJOY3mJ0fp9bYZCYD1I8LFBd4u43ruaXoJftiopw1hbtx9HCqKPPYcM7IRcgkFYfODMn%2BJc9mB7x0JaC1c%2FTAyMAaBWS3nOI9LT9HOTMXb2%2FWphdgqQ9HTmf8REQlpsVBRl5k5P9bU0zT8FrvO%2FSQYoGdFfq9tWoOAV6pSqHCPuyKKIZwQwUlym%2BAze5kyJGgTHBm94zde8vV%2F2F7QtdkBbMdfUsYvWiXe4wwkQkO7rNOlovs5rNxySetlD6Tq8bA%2FUL8cSVV79vKXylOJ7oQhc5Ix4n7DgxVFpS5CSxXrq5gMwuJ%2BLygY6pgERRoo9N7oCHcMnMLL5V3j3jAxsSfPzWntZ2Z7BtkcCOvHYNhwSHOcHWR6fUsTRO5awh0N4D16%2BtlDXmGC7uUC5oQL0iW1B6umULJRsRH2OrLT%2BtgyLm7ch08yUVKHGrX7QBPUmLSj4p2YvGlwWG2lr8FTQ%2Bpf%2FF2GGXgkxq06ucOs92%2BENpVAj7DuJDr%2B5i%2FT99N9%2Bvdix8UAcp8gbw468I7pLranX&X-Amz-Signature=710ec7195cad4ef1676b0868dcf69f192d0214411b72f1b5205212164b2ad811&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QZ2SKUE%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T165911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICsjVi%2FM8NHB%2Bh21cmAC0GhpneNCs51gXgF6eP3CyEdAAiB1UwVg2seKUsnkebM13%2FyDhdyZ5bnnYB0qd3FQS0I66iqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjfzJ4bgDAa%2FS6GcLKtwDILstmuA1DUaqfzKNS%2FryS5oGjtHs44LSDdKpruGnnVG%2FLaZIY5VibYSVUvVlwgrbAyPImg9Cz6FGY5ZeaajRmwSZdQ4Weu5EkialD2YBxzEW1flHExOn6RoPfbZGgJMdHYBkTDGT7sZEdH8BnGP4oeuGbOYEnVHl157ipFhMvOmTsO4qtjaOkC9DdLtGBB3EM%2FxFJTrqqguP35%2BUIH1mfdSbCsD4Ba3eJOndqRbua%2BEpOkrS9m9yJtxU430r3ZpSxh3O8zYzeg2bcuuvg8YJQbdm8ousNG7LqkkBYwwlHGaV3q8bqviAlhRcrN2wcGz1ZJQiK%2Fow7BakzfJOY3mJ0fp9bYZCYD1I8LFBd4u43ruaXoJftiopw1hbtx9HCqKPPYcM7IRcgkFYfODMn%2BJc9mB7x0JaC1c%2FTAyMAaBWS3nOI9LT9HOTMXb2%2FWphdgqQ9HTmf8REQlpsVBRl5k5P9bU0zT8FrvO%2FSQYoGdFfq9tWoOAV6pSqHCPuyKKIZwQwUlym%2BAze5kyJGgTHBm94zde8vV%2F2F7QtdkBbMdfUsYvWiXe4wwkQkO7rNOlovs5rNxySetlD6Tq8bA%2FUL8cSVV79vKXylOJ7oQhc5Ix4n7DgxVFpS5CSxXrq5gMwuJ%2BLygY6pgERRoo9N7oCHcMnMLL5V3j3jAxsSfPzWntZ2Z7BtkcCOvHYNhwSHOcHWR6fUsTRO5awh0N4D16%2BtlDXmGC7uUC5oQL0iW1B6umULJRsRH2OrLT%2BtgyLm7ch08yUVKHGrX7QBPUmLSj4p2YvGlwWG2lr8FTQ%2Bpf%2FF2GGXgkxq06ucOs92%2BENpVAj7DuJDr%2B5i%2FT99N9%2Bvdix8UAcp8gbw468I7pLranX&X-Amz-Signature=874739423e9d808baffcb6d8bb4b0fb457ac7ae3e5304b1e122cda106c16bb1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

