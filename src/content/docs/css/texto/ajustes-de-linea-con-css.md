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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666426DXPJ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T070427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFgRL1aftriCi7%2FQudfsVShki0j%2FSax7ERSAWDTX9iVwIgFzDLVI4YNVkTMYw1qvVANX56shbL53VKS36DjhDKBZYq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDEStuZQ2np5GTdbxHSrcAz6%2F5JSKEXFHor%2FyPRMkcXjhdsfjbh32I6G9sJBl%2BCQYFQwDWqXrrmCFEzZMbLQ39zfjCxgd4jjE54BuGpqI7NCSfneKLlrUhepM2rBL7l2%2FbFtHulYxDN0u5HYc2qzoIkcP9ob9iTtdPiabrgrT4TEHmELTtBX3wtCB22CGBjtySQCIswwvT%2FrXz13G0ElkIfiZPYyN%2BtaA8NtFRvp1fgkkqGcykg4mhcENnU6I86Nal0xpUY8hLVahHOowMnczL3pfmh41wxf1gIDDBRkuWDtm4oJUBrCA%2FjGEckQE%2BECGzILUvDMz3BZ8VEVSQ%2FceknW7rJAJ9sJo9Gzc8Ig5zeeQVcnJ6RJddoTH0qD%2FsgzDxmebNarbb8Qg7u%2F8MQBpDVMMqX2MttKrDx8wwksUoeqFFty2UDXUXfjww7So6mcikGcYWJ875HHL5b5aOe67zLDF%2Fzd9PhhVFfZBGUJKOj9Q7yT9tEZoMp762AJhBTxAoivqPjFnQBkvid88C36onfecMFAGoNDlwTb7bV7RECH0CvLYs6qXIrPyFj1x4g4puWmVwJzW0wFlNE3Ij5av1Yv0HdZlzkfPl3Tack5herdQtPvVv3Mm0VNAgQBXU%2FfxwVHvGNyQWCsPbnT3MOGdicoGOqUBjEPvGoTo5NBWthbpSBGqbql2xD4De2OqwFk%2FPuUXihnaqLriLH4iCfHB2Ybvj7iOTE%2BhF7ZDzvHWInYusu%2BolqNMqj5zvJ7mCIM7gKTS%2BrJcm7igww8pX%2B3mwMOvMDhHgA4o7ZQAF41mluGzp5IC9nt%2FHzReC4eXwh4Aqcnj8dn0egGTwCQZDJPXNXKtQsmsMbpE60f9sObiHw8SdOU1%2Fjop9bAy&X-Amz-Signature=65262d16f6a5181aeac5204d85c9c965f069fb05b6a6b8a498156f1fe1ac1bf6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666426DXPJ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T070427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFgRL1aftriCi7%2FQudfsVShki0j%2FSax7ERSAWDTX9iVwIgFzDLVI4YNVkTMYw1qvVANX56shbL53VKS36DjhDKBZYq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDEStuZQ2np5GTdbxHSrcAz6%2F5JSKEXFHor%2FyPRMkcXjhdsfjbh32I6G9sJBl%2BCQYFQwDWqXrrmCFEzZMbLQ39zfjCxgd4jjE54BuGpqI7NCSfneKLlrUhepM2rBL7l2%2FbFtHulYxDN0u5HYc2qzoIkcP9ob9iTtdPiabrgrT4TEHmELTtBX3wtCB22CGBjtySQCIswwvT%2FrXz13G0ElkIfiZPYyN%2BtaA8NtFRvp1fgkkqGcykg4mhcENnU6I86Nal0xpUY8hLVahHOowMnczL3pfmh41wxf1gIDDBRkuWDtm4oJUBrCA%2FjGEckQE%2BECGzILUvDMz3BZ8VEVSQ%2FceknW7rJAJ9sJo9Gzc8Ig5zeeQVcnJ6RJddoTH0qD%2FsgzDxmebNarbb8Qg7u%2F8MQBpDVMMqX2MttKrDx8wwksUoeqFFty2UDXUXfjww7So6mcikGcYWJ875HHL5b5aOe67zLDF%2Fzd9PhhVFfZBGUJKOj9Q7yT9tEZoMp762AJhBTxAoivqPjFnQBkvid88C36onfecMFAGoNDlwTb7bV7RECH0CvLYs6qXIrPyFj1x4g4puWmVwJzW0wFlNE3Ij5av1Yv0HdZlzkfPl3Tack5herdQtPvVv3Mm0VNAgQBXU%2FfxwVHvGNyQWCsPbnT3MOGdicoGOqUBjEPvGoTo5NBWthbpSBGqbql2xD4De2OqwFk%2FPuUXihnaqLriLH4iCfHB2Ybvj7iOTE%2BhF7ZDzvHWInYusu%2BolqNMqj5zvJ7mCIM7gKTS%2BrJcm7igww8pX%2B3mwMOvMDhHgA4o7ZQAF41mluGzp5IC9nt%2FHzReC4eXwh4Aqcnj8dn0egGTwCQZDJPXNXKtQsmsMbpE60f9sObiHw8SdOU1%2Fjop9bAy&X-Amz-Signature=479fb36b605f6b1f25a73c3c64b8b4654dc62d2446c77c5e3ab7e9b51addca2f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

