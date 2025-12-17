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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RL527RAW%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T115754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpZ%2ByWwwL1G4gfY4Krzx%2Bnr1eJaxFJEltgnJlKKA3qMwIhAPCtb18cSAv9UoQ5QIvqfmt3kLi%2BKqlYlLLYFYMqcqjpKv8DCHwQABoMNjM3NDIzMTgzODA1IgzbOIHIRatHwvS5R%2Foq3APgpxxtEp3w1Lm9sVxJx1UTOwWlZUI3WbjH9s77dykCnVcmleWai7HLOhpR%2FqBY42xBowEAoMNWIPVVvqZCUEniILpMWuJYu9hD0yjcHFMTbar8UEgtXoVQxZ%2FpbsefeZu6Q62b2whW6nh3AIddXiCW%2BXOvpo2B0TaIGEu9i4%2F6KmjxDFKXhBacUqghxpEAad63ljuTzSGhCnj%2Bt929qxW%2BqUHvof8rCWTvLqpbDPa7GmacWz%2FI%2B8Y4%2Be%2Fhse0pMm2jPxHLrHwnYFx%2FxbA9zURMWbC48cklq13WXIkghTr2UKK4D4iv3LJ5zByb70TwjvSjxVniGw9EfZ4N6cFKQSUVQSv5cZblhIipfPefGj%2BpHeufGXpHqWGsoRsOI6LRE%2BR3jLzhVS4KcY33I4SaiSdcKR%2FENJ2R1VA%2F5zgOBPly00cLCTAYUQTxL0nMFUqcTU6QkmiUhklGOQWx1I1DUwsv4hfuuSWxCwppjTNNvTDlrRpX58RSbp8L5ahohRic29T86Ofus4lxESPkeNDqkGgrQa3GpuRyAbUbfweO%2BCmBoeHcRIW%2F%2FFNjYNHZqJsgQ9Iho61V%2FfX3JPq4OvnRCR0baGIMA5Va6j08gnfKwbgV1p79eG%2Fw1BBBtbgRtzC0qorKBjqkAWvHESiyBf7k2%2Ba15AAoda8z5F1rg4VfSicTgjSxVpK9OwIIngSb0gyNeqgQ4mS2IiMT28AX7KbHnDFMXJHhyKP9IDZUrE2mcBP4GMuNhL7B1%2FjSmLrVwVaWI9Bn6k5Ny51izobyxNDeaKX%2BIqdfecqyo%2FBRySs01DmMkiSxjsQq8EtEp03iN7gKIGPQh%2Bi5B4qt3TNuFkYOD8TrX%2BHsMVCKT1AC&X-Amz-Signature=c6e969b8fe46194c7b8c1aa1109dc7cee4803e139cef31f1be7421d8147ef534&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RL527RAW%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T115754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpZ%2ByWwwL1G4gfY4Krzx%2Bnr1eJaxFJEltgnJlKKA3qMwIhAPCtb18cSAv9UoQ5QIvqfmt3kLi%2BKqlYlLLYFYMqcqjpKv8DCHwQABoMNjM3NDIzMTgzODA1IgzbOIHIRatHwvS5R%2Foq3APgpxxtEp3w1Lm9sVxJx1UTOwWlZUI3WbjH9s77dykCnVcmleWai7HLOhpR%2FqBY42xBowEAoMNWIPVVvqZCUEniILpMWuJYu9hD0yjcHFMTbar8UEgtXoVQxZ%2FpbsefeZu6Q62b2whW6nh3AIddXiCW%2BXOvpo2B0TaIGEu9i4%2F6KmjxDFKXhBacUqghxpEAad63ljuTzSGhCnj%2Bt929qxW%2BqUHvof8rCWTvLqpbDPa7GmacWz%2FI%2B8Y4%2Be%2Fhse0pMm2jPxHLrHwnYFx%2FxbA9zURMWbC48cklq13WXIkghTr2UKK4D4iv3LJ5zByb70TwjvSjxVniGw9EfZ4N6cFKQSUVQSv5cZblhIipfPefGj%2BpHeufGXpHqWGsoRsOI6LRE%2BR3jLzhVS4KcY33I4SaiSdcKR%2FENJ2R1VA%2F5zgOBPly00cLCTAYUQTxL0nMFUqcTU6QkmiUhklGOQWx1I1DUwsv4hfuuSWxCwppjTNNvTDlrRpX58RSbp8L5ahohRic29T86Ofus4lxESPkeNDqkGgrQa3GpuRyAbUbfweO%2BCmBoeHcRIW%2F%2FFNjYNHZqJsgQ9Iho61V%2FfX3JPq4OvnRCR0baGIMA5Va6j08gnfKwbgV1p79eG%2Fw1BBBtbgRtzC0qorKBjqkAWvHESiyBf7k2%2Ba15AAoda8z5F1rg4VfSicTgjSxVpK9OwIIngSb0gyNeqgQ4mS2IiMT28AX7KbHnDFMXJHhyKP9IDZUrE2mcBP4GMuNhL7B1%2FjSmLrVwVaWI9Bn6k5Ny51izobyxNDeaKX%2BIqdfecqyo%2FBRySs01DmMkiSxjsQq8EtEp03iN7gKIGPQh%2Bi5B4qt3TNuFkYOD8TrX%2BHsMVCKT1AC&X-Amz-Signature=ec85bbc3f5f018a0174754903bebef2ccdabb209f763f1b0a8694658e154933f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

