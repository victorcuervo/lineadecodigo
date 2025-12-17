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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667R2JER2T%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T084434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCyeTaSpezLN3vZyvprf4sTrvrPxLjMhJLvODchFKNYZAIhAInT2azD6WaRrYA2KfeRU7D8qLPI7tig15h8GinEL334Kv8DCHkQABoMNjM3NDIzMTgzODA1IgwOpU3abuuJkJgVToUq3APkrButrSQx67oGVaBDhmVL3BS%2FFtBWClMRsiCe%2BaxfAQnVZ59SbHo3Cj1EbJw9wgkCiL5qNCZWEydsPE3%2F26IvU9G1QY5YFYWkWDHQwdLaLxzFapL3Vtmzrs9tMvmIsZv0f0b9X0gp0TypDucKHjzno2uSR%2BsbiMIKrp5IkuT5ud2RIdrh88Es3GG0v36fItoLa3L%2BOrb96DlB%2Fa21ZJOtJiwD3evUbjuf4Ds5OU6RufCqF8XZKZ6n8%2Bymzov4Fs5hwTNEEVyyXqOtu0KK4kQqN51Ww2CmNeBmWagiF59j9RWHWW4moLOKx6DTQNmpI3yfNvF0sjZeL3ctl0BIWFspR65D2NtEz4AClLAmgUtOi5w9CTWlhpCeGQsdq30LINmLc2IWjhNRG6feUETx0a0pTzzV1twMpDm1dFP8u7GP81z4b6fsrE4S38RkPjgBi2OvehUOaXiIivSinqgANnM25X78150kTcMjnHyZtRb92PPQm4LYsuq1q0fGLIT0VtjEZm6rkdaLZ421zsqiza%2FJS%2BXN76a4eqqgcbElP3b%2FDhP6eodFRvVcaOQoRmGBKeSmYETaW5pwkgHtLl2TOOz84aP417Z448Kjt4K0%2BYkQeQeLZL3vSZvJKJrcajCf0YnKBjqkAcV4gqpAgD3cYkRmzBWwst%2Fh6DpoITuM%2Fm1LXC4TSvtcTkcnTGC%2Bsyi2iX8qF9nx1ctVVY99GCeNcYJeRdQyI7bV6VqKr6s0eo0Hpg6%2Fjn9UbNFypx%2BlIZzICXiKmcaOam2TqnDBj927%2BhB6PW%2FYBVzfse3T2osEodircNDPK%2F9akbggPaYmvvD7as%2Fp95t3lGRtZtlkiGHjVb%2FwxmwaN%2FY6RU9v&X-Amz-Signature=b1a36c8d67d4dceaa23284fb40fa660998f488d3906610a0346c66d4fbd75d8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667R2JER2T%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T084434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCyeTaSpezLN3vZyvprf4sTrvrPxLjMhJLvODchFKNYZAIhAInT2azD6WaRrYA2KfeRU7D8qLPI7tig15h8GinEL334Kv8DCHkQABoMNjM3NDIzMTgzODA1IgwOpU3abuuJkJgVToUq3APkrButrSQx67oGVaBDhmVL3BS%2FFtBWClMRsiCe%2BaxfAQnVZ59SbHo3Cj1EbJw9wgkCiL5qNCZWEydsPE3%2F26IvU9G1QY5YFYWkWDHQwdLaLxzFapL3Vtmzrs9tMvmIsZv0f0b9X0gp0TypDucKHjzno2uSR%2BsbiMIKrp5IkuT5ud2RIdrh88Es3GG0v36fItoLa3L%2BOrb96DlB%2Fa21ZJOtJiwD3evUbjuf4Ds5OU6RufCqF8XZKZ6n8%2Bymzov4Fs5hwTNEEVyyXqOtu0KK4kQqN51Ww2CmNeBmWagiF59j9RWHWW4moLOKx6DTQNmpI3yfNvF0sjZeL3ctl0BIWFspR65D2NtEz4AClLAmgUtOi5w9CTWlhpCeGQsdq30LINmLc2IWjhNRG6feUETx0a0pTzzV1twMpDm1dFP8u7GP81z4b6fsrE4S38RkPjgBi2OvehUOaXiIivSinqgANnM25X78150kTcMjnHyZtRb92PPQm4LYsuq1q0fGLIT0VtjEZm6rkdaLZ421zsqiza%2FJS%2BXN76a4eqqgcbElP3b%2FDhP6eodFRvVcaOQoRmGBKeSmYETaW5pwkgHtLl2TOOz84aP417Z448Kjt4K0%2BYkQeQeLZL3vSZvJKJrcajCf0YnKBjqkAcV4gqpAgD3cYkRmzBWwst%2Fh6DpoITuM%2Fm1LXC4TSvtcTkcnTGC%2Bsyi2iX8qF9nx1ctVVY99GCeNcYJeRdQyI7bV6VqKr6s0eo0Hpg6%2Fjn9UbNFypx%2BlIZzICXiKmcaOam2TqnDBj927%2BhB6PW%2FYBVzfse3T2osEodircNDPK%2F9akbggPaYmvvD7as%2Fp95t3lGRtZtlkiGHjVb%2FwxmwaN%2FY6RU9v&X-Amz-Signature=e9fe02b1c1b9aa46bcfc5652a68773d2da6528d7f4ded3ab6fb1d8d1adddba6e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

