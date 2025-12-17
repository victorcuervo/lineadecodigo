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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7NIEJY4%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T104214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF4pYzfYkcKNHd3mopkRZ%2FriEnm0gvoRVPEOZv5%2FTlpfAiEA6x7rJoEv0VzJqfzJe6clPbhxu5CReQ1A%2Fx7ZLEjf4PMq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDHUaatZ78GCVzLkAECrcAwk%2Fk0gno6zFLMv0xau3Oz39ZBwc3EbFK5GsoQRVqKn%2B54nRzi6X25V89M1v4Y3OXFrKY4bFH%2F9%2FR2vsg9%2BJp%2FDrSdybFa9FBltviJtptfuFYBr1lKVS3k5pgmN3Juit6FbKrHPe2tS%2FamvhjDM0gouNr04MqL2dFv0YNipI4aXGKkJz3vqbyAASArbYnREC0mwc8DZTOYdHcNWUDJKrWQYxHI86kChWeeAVpUNcJk3LcVbmLPEQgiYyLOAC%2Bef5wrg38WGFOBOB6u4a%2BoxF0sqxmFwFt8vV7s1naOxfmV%2FfIOtZWmF6qSWjJWcm5me65pTeEf0kdJsa8RikoEJkAYqepL7%2BqRdhsFkb8QazMLjg2FcVdDgZ1wbX7MPeXhYY1g4dlvjot8WRvfTU2KbXX8jfBAxJBnyfIMCVXZk6WhPpkTUQFLAzUmexjZtouf5gNqbP8j2pJ2Fzgj2tf0wwLWHTsr6S8Jq2rnC3peid8dsgINMyl8YFR9MVrMT0in1milmwyVj3nbrp5xin3H4fJKjqL5BW02NGBuOzUC7zfUw3oLrg6wlqMishgOhAEFVWElu1mHuN2IaCwLPN1fV1pSxKNJtyCzEGMUHjPVf%2BMotqhHB8GXgMKoA3NUd%2FMJqPisoGOqUBUqjPZLgXVGSwU8LjJpWGA6qMMFHyPexgyNC5qghbAI3ESPNq2wRD07gt5NyTJnRkrvhytjcIXZ%2BWdz5fRETy72VZn02rNuAxAnMGyzXCSFcBpczvy6exJMPI6zEKb49ysRAoUUlN5LN8PMLPbj5PNQYYBl9J2CO%2BDNssLW%2B4bTm0AwD76SV%2FnP4MnrV2BjEaDLm%2B8GKEBUagqNCZOt58%2BBp%2BqOeK&X-Amz-Signature=d7a97359c643bd0c9570e70744aa5d7426e705caa291c0dcc65cd1b28e96102e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7NIEJY4%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T104214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF4pYzfYkcKNHd3mopkRZ%2FriEnm0gvoRVPEOZv5%2FTlpfAiEA6x7rJoEv0VzJqfzJe6clPbhxu5CReQ1A%2Fx7ZLEjf4PMq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDHUaatZ78GCVzLkAECrcAwk%2Fk0gno6zFLMv0xau3Oz39ZBwc3EbFK5GsoQRVqKn%2B54nRzi6X25V89M1v4Y3OXFrKY4bFH%2F9%2FR2vsg9%2BJp%2FDrSdybFa9FBltviJtptfuFYBr1lKVS3k5pgmN3Juit6FbKrHPe2tS%2FamvhjDM0gouNr04MqL2dFv0YNipI4aXGKkJz3vqbyAASArbYnREC0mwc8DZTOYdHcNWUDJKrWQYxHI86kChWeeAVpUNcJk3LcVbmLPEQgiYyLOAC%2Bef5wrg38WGFOBOB6u4a%2BoxF0sqxmFwFt8vV7s1naOxfmV%2FfIOtZWmF6qSWjJWcm5me65pTeEf0kdJsa8RikoEJkAYqepL7%2BqRdhsFkb8QazMLjg2FcVdDgZ1wbX7MPeXhYY1g4dlvjot8WRvfTU2KbXX8jfBAxJBnyfIMCVXZk6WhPpkTUQFLAzUmexjZtouf5gNqbP8j2pJ2Fzgj2tf0wwLWHTsr6S8Jq2rnC3peid8dsgINMyl8YFR9MVrMT0in1milmwyVj3nbrp5xin3H4fJKjqL5BW02NGBuOzUC7zfUw3oLrg6wlqMishgOhAEFVWElu1mHuN2IaCwLPN1fV1pSxKNJtyCzEGMUHjPVf%2BMotqhHB8GXgMKoA3NUd%2FMJqPisoGOqUBUqjPZLgXVGSwU8LjJpWGA6qMMFHyPexgyNC5qghbAI3ESPNq2wRD07gt5NyTJnRkrvhytjcIXZ%2BWdz5fRETy72VZn02rNuAxAnMGyzXCSFcBpczvy6exJMPI6zEKb49ysRAoUUlN5LN8PMLPbj5PNQYYBl9J2CO%2BDNssLW%2B4bTm0AwD76SV%2FnP4MnrV2BjEaDLm%2B8GKEBUagqNCZOt58%2BBp%2BqOeK&X-Amz-Signature=5e93b16cc2846e5f955b2f1b84a715b1b3216e7560cba52b0c8ac1d6355cd1c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

