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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DZCJCKL%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T143740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAtMD9XsNm1EhiK8ZyfJrns7KWC%2BRG7tyekWcOCjxjAAAiBaMyoI4u0XBn6d6EOYqAXDohq9n%2BJ8its%2Bmy3Ps1xGqir%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIM2qds%2Bmz7RVzAomCTKtwDzRmhaoGxqTDsHu8iuNnWgYDxQpGanprDYyVL31BnPLA6VE2Zv0qWKLtPn68BszM5Six3SPgpzDggKcc6KZqN4WBwDE%2FBszKuaquCmp9jm%2FW3aDVxiXN5PWaRhvWaF5OGnCkUk4V0XPfYnWtN4qOWYabAubpwUVCvUceRujnTcznqY41xF5SQoxgIwgYJZ%2FPQ0%2FP5tqGz8ci32M4DoF66NEILRm2QT1mBR%2B4vDNbiTqdTP%2B6eKb6RWNdbuI6pKXCs06IxtnppRfyiYz7TlWBRNpqBMFOz2Hzu4C89lTVbLzsS4D1pxVYzYyox1RvA5NtIGxlTjtvyb%2FD747Wexsge8umCZSTr2nP%2BRJgoOD5cO0BsfEB4yaocPCWT33J7yEgXAljjtWbx0kWytYd7zC%2B2dTbriV2Qn60QwDPcY3Fg%2BKMqB3DvwmYHHJiIgHnJR9vBJHzYXhaw%2BFNjhCB7I3QcAE264WcqER7cCfveUAKXJHqRIFdefAxtjfIz8uGAx9i2wK3e6DibiEQArSjYcAAfNaQnSLMukaWXqbvACbzz%2FYR3T8ijWar%2BOarjCgf0VLA5oYu4giO69dnZWFkJ5mb0rXBO5pAeUgDpn7TFY0s2RISaOx%2FXvnGcTWPnepQw4OGKygY6pgHTd1o4Uw55NgT0zWJJkuQT9bYC8zC10b%2BKvN91q8WtiSd3nz72vJVj87gKi%2BjTqtDNOY9gjPgUVu43eM7lOk20uIIBX5Q3zLQGz28czuyLngUlgudWGNMoThMfexTqw3OkGc8bNRGKmMMciqlx5%2Bl1HF3%2F68F%2BeoWsyM66PF40l0ZPazUlhCDq1986sV8s9%2Fen15pacb7Y9P9vNHVCLcmoCpfzcmsb&X-Amz-Signature=d6e28fbf9ee7f37a7c724231ccfb6cd2ce8530b5831259d16d6e8e7dc65f558a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DZCJCKL%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T143740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAtMD9XsNm1EhiK8ZyfJrns7KWC%2BRG7tyekWcOCjxjAAAiBaMyoI4u0XBn6d6EOYqAXDohq9n%2BJ8its%2Bmy3Ps1xGqir%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIM2qds%2Bmz7RVzAomCTKtwDzRmhaoGxqTDsHu8iuNnWgYDxQpGanprDYyVL31BnPLA6VE2Zv0qWKLtPn68BszM5Six3SPgpzDggKcc6KZqN4WBwDE%2FBszKuaquCmp9jm%2FW3aDVxiXN5PWaRhvWaF5OGnCkUk4V0XPfYnWtN4qOWYabAubpwUVCvUceRujnTcznqY41xF5SQoxgIwgYJZ%2FPQ0%2FP5tqGz8ci32M4DoF66NEILRm2QT1mBR%2B4vDNbiTqdTP%2B6eKb6RWNdbuI6pKXCs06IxtnppRfyiYz7TlWBRNpqBMFOz2Hzu4C89lTVbLzsS4D1pxVYzYyox1RvA5NtIGxlTjtvyb%2FD747Wexsge8umCZSTr2nP%2BRJgoOD5cO0BsfEB4yaocPCWT33J7yEgXAljjtWbx0kWytYd7zC%2B2dTbriV2Qn60QwDPcY3Fg%2BKMqB3DvwmYHHJiIgHnJR9vBJHzYXhaw%2BFNjhCB7I3QcAE264WcqER7cCfveUAKXJHqRIFdefAxtjfIz8uGAx9i2wK3e6DibiEQArSjYcAAfNaQnSLMukaWXqbvACbzz%2FYR3T8ijWar%2BOarjCgf0VLA5oYu4giO69dnZWFkJ5mb0rXBO5pAeUgDpn7TFY0s2RISaOx%2FXvnGcTWPnepQw4OGKygY6pgHTd1o4Uw55NgT0zWJJkuQT9bYC8zC10b%2BKvN91q8WtiSd3nz72vJVj87gKi%2BjTqtDNOY9gjPgUVu43eM7lOk20uIIBX5Q3zLQGz28czuyLngUlgudWGNMoThMfexTqw3OkGc8bNRGKmMMciqlx5%2Bl1HF3%2F68F%2BeoWsyM66PF40l0ZPazUlhCDq1986sV8s9%2Fen15pacb7Y9P9vNHVCLcmoCpfzcmsb&X-Amz-Signature=99e353ef9f151d7ef3253f673ae2fbd194a9f2a020768798e21d3625d85d74ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

