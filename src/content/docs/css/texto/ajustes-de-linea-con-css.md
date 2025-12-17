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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466444X6QJO%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T002743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFjV0KWD4TP5%2Bdce%2BlZpbXLHtTtet4iEGFZjy55g%2FCzhAiAXaWDdZnBWuobXVLq1s5j5pEBpUpFaWPU%2BcHZ4FUO9kyr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMuqVnVUO5c7lOb1rbKtwD19VYcTkoM1hCMExmnBrH3sOFjNU3gZ4jQGSzS%2BoqSMmfSKToCmcKp43Ecox74WqT%2FyEq9AZ4eYJvkqX7FTZ%2BnGhoqKKaS3FVCUvvcJNtcM%2BvgizNtoqMK2CwD7HMZBGWP0mt86pp5L4u3WKGZNqMo%2BKReGZawPx%2BuPNFA75yUoP2lVCnM9A3xOhTmOGHL0vsTjPC0GaIQZHC8Iv9DjAvpGjYQ8r8M1ICxhYM1MRoF%2B05brohMAXAnAlGkAzsbMK93UIY426nBCZEKN41%2FVEwlRSqIvJOtGKiF10cuDeoYJapDFZPJ6Quv8VtCIU0%2Bwgh5mv%2FGlqrb1DbBCm34Kb8j%2FTNhSzLZkWCgQGKZTEBdhRay4TvzjlpR9HRQvMx%2FxRp4a0HKV%2FWgdPM8Gg9kf%2FWd93gTxX4%2FxmwNZT7Ku1jWMtutoJoTTUvr30hoM7%2F9x9M0SIHOIoU08K6EhL2oZEcG7fh%2F6BiB8QXW70S3VkmNcIrsisJMCiWz%2BbzwcBfuV96pUgoa7o%2FAvUvP8WLEL%2FMMejtO9B7UXdaur0gMNSWlbccBdnxaWCGpZKJ%2FPF%2FQJtzIcCLREbaiLXpm6JG4m2f7iNiln2ABo9m12eiK1VsA3hr4LNK9hkRnYD4IokwjN%2BHygY6pgGj1aVz1%2FFEABzgdIpISAljIBUMx2zW3VIzC%2BryWAeOXyY4ztcncvs9We1pJ249N7GCGmO7RGZrqhEVqaYkpJbUT%2Fa6XKnctfMM%2Bz7Wn3p2eiPp9yJUzuqcaeOK%2FbJxPW%2B1N9GQIUfbdHbS2Q39uw6FplfG%2BFwSRitYTXDDQjmz8Wp%2BrFQ8L0Q4gnaaFYz3cG7NlA0ZqB1NhckqY8%2BQc5NUyCxw2D9u&X-Amz-Signature=763e4492cf1715604d3d9b8c9f4d11f594b3ebbad06003a8784adaf7b1a37a34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466444X6QJO%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T002743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFjV0KWD4TP5%2Bdce%2BlZpbXLHtTtet4iEGFZjy55g%2FCzhAiAXaWDdZnBWuobXVLq1s5j5pEBpUpFaWPU%2BcHZ4FUO9kyr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMuqVnVUO5c7lOb1rbKtwD19VYcTkoM1hCMExmnBrH3sOFjNU3gZ4jQGSzS%2BoqSMmfSKToCmcKp43Ecox74WqT%2FyEq9AZ4eYJvkqX7FTZ%2BnGhoqKKaS3FVCUvvcJNtcM%2BvgizNtoqMK2CwD7HMZBGWP0mt86pp5L4u3WKGZNqMo%2BKReGZawPx%2BuPNFA75yUoP2lVCnM9A3xOhTmOGHL0vsTjPC0GaIQZHC8Iv9DjAvpGjYQ8r8M1ICxhYM1MRoF%2B05brohMAXAnAlGkAzsbMK93UIY426nBCZEKN41%2FVEwlRSqIvJOtGKiF10cuDeoYJapDFZPJ6Quv8VtCIU0%2Bwgh5mv%2FGlqrb1DbBCm34Kb8j%2FTNhSzLZkWCgQGKZTEBdhRay4TvzjlpR9HRQvMx%2FxRp4a0HKV%2FWgdPM8Gg9kf%2FWd93gTxX4%2FxmwNZT7Ku1jWMtutoJoTTUvr30hoM7%2F9x9M0SIHOIoU08K6EhL2oZEcG7fh%2F6BiB8QXW70S3VkmNcIrsisJMCiWz%2BbzwcBfuV96pUgoa7o%2FAvUvP8WLEL%2FMMejtO9B7UXdaur0gMNSWlbccBdnxaWCGpZKJ%2FPF%2FQJtzIcCLREbaiLXpm6JG4m2f7iNiln2ABo9m12eiK1VsA3hr4LNK9hkRnYD4IokwjN%2BHygY6pgGj1aVz1%2FFEABzgdIpISAljIBUMx2zW3VIzC%2BryWAeOXyY4ztcncvs9We1pJ249N7GCGmO7RGZrqhEVqaYkpJbUT%2Fa6XKnctfMM%2Bz7Wn3p2eiPp9yJUzuqcaeOK%2FbJxPW%2B1N9GQIUfbdHbS2Q39uw6FplfG%2BFwSRitYTXDDQjmz8Wp%2BrFQ8L0Q4gnaaFYz3cG7NlA0ZqB1NhckqY8%2BQc5NUyCxw2D9u&X-Amz-Signature=b620c4546b57b23d4aafe79dbb266b46bd53b0b4658df1e0b5f73fe545b45455&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

