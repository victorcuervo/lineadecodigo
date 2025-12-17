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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466653CWFOA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T094033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF38zuP1xMU%2FNuR3p5kyFPK66k8jmBGVBMwSZMo%2FhSo9AiB0aF7fgxJfPEyubUSkAXDn71TDXfgmjqm6MNCRoKdXbyr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMK0BDq%2ByPGMg3%2FlbzKtwDuwAhKD31qFyIzeHj9wGrVV%2FTeQ1%2FHTs1XgdCSyyVSMdIRNYBGJQPF7mKA5rDuPYciTbAk7zF1e%2FMI%2Fqx51qv329C4M7wQgtUN%2BKASiJFPWpeIQQxX3sz48A2mjm61qFfFI%2BWL%2BRoHya80UuaF%2FfEmwNYPfg9XZMHeELhyXk7VJmyZkmuuYKGFdkER%2BrZ9DZn%2FZe%2FLBkb2ZlZ7UphAbPKWhZpmsJH0Kxw6%2FJPK3Ix7mkmgzOSPOOhCWYU9P9P%2FKwRcCPxsHl3Xjvc7rGMBHqjqYp9yK8N9qjfFvUKUCsizlQLi2BMrOHGTocACA0CQXbXmHw%2FDTvO3KdROu7pnkJldg6IBFdAkrQAHsLcHMpx4mrDc32YiU2Yvvr%2BS%2BJN%2Fx4L%2FPiwtsYwax1TABY0A11LRrCSAP25xd3wwCICasHBcEnSUu8GMijb3bxGzwxqXIxPIvqYp8YRGX%2BFg4wJmgzXO6MPrAnAMAOEkg4k%2FNxROUgfc15c7r0oL1NgKoyyphw6idD4yX5yOhbNU389ZKg1pRaSizYxilxHY9fVonJmUnGL7B5KMp4DWS17i0NgRzU6GfmLs6DQSupZTDQdDMYTCWcXGT5mqTTjeFiPY4T72Jrl8PcOnVFv8WLR6aAw6u%2BJygY6pgHZ6cmWXfuJuBrybmWrDCtOcxpKGblQCI36sYu3h5KvYk2K3mc4nq6fwuFZ6ifazP4Tm1URKL2vvtG4nvY4GYZruE4J4QiQQTWptirJheLc9uJfK6EEv3S%2Fw%2BlJRpwYmbQ3pLG7G3CIj%2FIGBWLLOXxOjMLJHRN2zZflZ2MvfQHYzgH6sCQlTk8iIfjlrTPPHxM8sTbpuwWE34GPt5Bm0SjqIdjOeCAj&X-Amz-Signature=735673ad739e0a235580136970eca3c636653a0093694840c52675783850674f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466653CWFOA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T094033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF38zuP1xMU%2FNuR3p5kyFPK66k8jmBGVBMwSZMo%2FhSo9AiB0aF7fgxJfPEyubUSkAXDn71TDXfgmjqm6MNCRoKdXbyr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMK0BDq%2ByPGMg3%2FlbzKtwDuwAhKD31qFyIzeHj9wGrVV%2FTeQ1%2FHTs1XgdCSyyVSMdIRNYBGJQPF7mKA5rDuPYciTbAk7zF1e%2FMI%2Fqx51qv329C4M7wQgtUN%2BKASiJFPWpeIQQxX3sz48A2mjm61qFfFI%2BWL%2BRoHya80UuaF%2FfEmwNYPfg9XZMHeELhyXk7VJmyZkmuuYKGFdkER%2BrZ9DZn%2FZe%2FLBkb2ZlZ7UphAbPKWhZpmsJH0Kxw6%2FJPK3Ix7mkmgzOSPOOhCWYU9P9P%2FKwRcCPxsHl3Xjvc7rGMBHqjqYp9yK8N9qjfFvUKUCsizlQLi2BMrOHGTocACA0CQXbXmHw%2FDTvO3KdROu7pnkJldg6IBFdAkrQAHsLcHMpx4mrDc32YiU2Yvvr%2BS%2BJN%2Fx4L%2FPiwtsYwax1TABY0A11LRrCSAP25xd3wwCICasHBcEnSUu8GMijb3bxGzwxqXIxPIvqYp8YRGX%2BFg4wJmgzXO6MPrAnAMAOEkg4k%2FNxROUgfc15c7r0oL1NgKoyyphw6idD4yX5yOhbNU389ZKg1pRaSizYxilxHY9fVonJmUnGL7B5KMp4DWS17i0NgRzU6GfmLs6DQSupZTDQdDMYTCWcXGT5mqTTjeFiPY4T72Jrl8PcOnVFv8WLR6aAw6u%2BJygY6pgHZ6cmWXfuJuBrybmWrDCtOcxpKGblQCI36sYu3h5KvYk2K3mc4nq6fwuFZ6ifazP4Tm1URKL2vvtG4nvY4GYZruE4J4QiQQTWptirJheLc9uJfK6EEv3S%2Fw%2BlJRpwYmbQ3pLG7G3CIj%2FIGBWLLOXxOjMLJHRN2zZflZ2MvfQHYzgH6sCQlTk8iIfjlrTPPHxM8sTbpuwWE34GPt5Bm0SjqIdjOeCAj&X-Amz-Signature=77f8348e8abf0340e9a7a30faee4e88c8aad676bf069db51b2f6e5a29dac83ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

