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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DS7WROE%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T061041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFyl%2F9U4JrHXTpOZw52mpQwBqyC3GC8Tl5qShhqt2vX4AiEAxOnoK5lDP6aJ459D9VKZUJtctEu9eGoFAGt5x2JHBqsq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDPgjBFM6q0F9LlgNwSrcA7eYrG%2BN5QfItEMnQUDxH0zWL1VjGjA9SiyMtYmoamwGL2b5hFGPnFeDqg1OfKKJG1B%2FnAqAAZNr9rGRkeFXng%2BLFCzbDseEJtPEnFCSwFh%2FSrGouQurafcsUCfKajtc0jZUW4tf%2F6GMPGBTvzd1GRcCXfPEfl7Hf6om5vJjklfAoHvYUDeOd%2BQA4YFRfcxf6sr7NiO95RJYFy%2B5Nd3vXazotAelgDACPYo3k3SLKvbXCAvzRSDYtR6i6IhigPe%2BA6n9v5mAGu%2BRayeWRWWtYPxZ1ZMt%2B%2F7Hyz1XCfoX%2BFGTeivasL8eq64RZDXh7Qg6v5NoTnnYjQx%2FHzaW1VIQ2OK14%2FFCV6SbF770bM%2B6QOlRhgMBqpLCrj2cSR7mpELAbBRUHGbt5gqgJReAJRuJOYyaOwkxUviL19ySa7Lk4qeDsLmCuSHClgJEScU3ooFH123upOemvabpUu8yBxLsCQVVEsQzpKMbIxxE27obUmkmUJvINaED4cjzVYr6Jj0er9SiCDLWVCd7jvvJqBtmaMnWd%2BRM9B2G2NhTtxMhlNlqaH%2BY7Q78vAMmwD2Ll7KJyXa8NK0useOM9YmsTRZlPLUGEBXB6FJNQvptHCNTjQfOdKqrMjXkwVWZm1sZMOOCicoGOqUBXgv8u2Me5Sj87GjP55JyvVaAJsTapzpe%2FCIngbZi%2FwwrT2u%2F5COYlyZyW7w6d1%2BHFH%2BdQzE2IxwYVKWOdq8Oh8D5%2BWVEf7oB9nFWcfx%2BDWa3dowqEOPGyk6%2FnOYFDU0dzIU4dhtBoRtlP%2BdeYHNsitnE6S9XrHKTScqWTy%2FuiRq6EKB9GrD082GDGhmKapX4NEQ5jatXSbc2pYLhSJzkrYxjgr2O&X-Amz-Signature=3c6ff06eee8fae57ba37474eef03ed5ab77d6a0ac1bad0513a2e7ee56d050938&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DS7WROE%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T061041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFyl%2F9U4JrHXTpOZw52mpQwBqyC3GC8Tl5qShhqt2vX4AiEAxOnoK5lDP6aJ459D9VKZUJtctEu9eGoFAGt5x2JHBqsq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDPgjBFM6q0F9LlgNwSrcA7eYrG%2BN5QfItEMnQUDxH0zWL1VjGjA9SiyMtYmoamwGL2b5hFGPnFeDqg1OfKKJG1B%2FnAqAAZNr9rGRkeFXng%2BLFCzbDseEJtPEnFCSwFh%2FSrGouQurafcsUCfKajtc0jZUW4tf%2F6GMPGBTvzd1GRcCXfPEfl7Hf6om5vJjklfAoHvYUDeOd%2BQA4YFRfcxf6sr7NiO95RJYFy%2B5Nd3vXazotAelgDACPYo3k3SLKvbXCAvzRSDYtR6i6IhigPe%2BA6n9v5mAGu%2BRayeWRWWtYPxZ1ZMt%2B%2F7Hyz1XCfoX%2BFGTeivasL8eq64RZDXh7Qg6v5NoTnnYjQx%2FHzaW1VIQ2OK14%2FFCV6SbF770bM%2B6QOlRhgMBqpLCrj2cSR7mpELAbBRUHGbt5gqgJReAJRuJOYyaOwkxUviL19ySa7Lk4qeDsLmCuSHClgJEScU3ooFH123upOemvabpUu8yBxLsCQVVEsQzpKMbIxxE27obUmkmUJvINaED4cjzVYr6Jj0er9SiCDLWVCd7jvvJqBtmaMnWd%2BRM9B2G2NhTtxMhlNlqaH%2BY7Q78vAMmwD2Ll7KJyXa8NK0useOM9YmsTRZlPLUGEBXB6FJNQvptHCNTjQfOdKqrMjXkwVWZm1sZMOOCicoGOqUBXgv8u2Me5Sj87GjP55JyvVaAJsTapzpe%2FCIngbZi%2FwwrT2u%2F5COYlyZyW7w6d1%2BHFH%2BdQzE2IxwYVKWOdq8Oh8D5%2BWVEf7oB9nFWcfx%2BDWa3dowqEOPGyk6%2FnOYFDU0dzIU4dhtBoRtlP%2BdeYHNsitnE6S9XrHKTScqWTy%2FuiRq6EKB9GrD082GDGhmKapX4NEQ5jatXSbc2pYLhSJzkrYxjgr2O&X-Amz-Signature=74f7aeef18cdb620b777223d28642cea30fe6797517f7c56d22c953371083729&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

