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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFCYBZY7%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T193309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICoqQa%2B6R%2FJNDjDVWgLMpTa%2FIeXw3CGqKTK%2FXLpHwwYbAiEA453efzsbtmDO0VqdK1%2Fzji3tGub6AlfT6SQIXQlmMXUqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIB5tD5gra7zWSJJACrcAwAtQd%2F0CJQWcK1eHd03FWZfmRYbgRRo6ZKSQUbofwKmk4TLZgGoqDl9RrMaaRQByLdYI4cWwD9EMRcZjA3px3XM%2BIoNd8ozlwJy5rQyDKUHBKP8kJTCp6pLv9KkjFm%2BGhhGwWtvGCBePeAtpbWvqBavW4V1kJp0WhDQQCYy9mIJU14OTT22HB04dIcEaPAUz2zys%2Baa7ui2xF0KG584wVQC9SIorj2CTrQLzpOfTbJ5BInXFV19Wm%2FyaJkXMBBTK8mZ8y0pTDxia%2FqseyeDN%2FABQ2c6kNDIt8D6peUFYyP2RWlC%2FGhOMhQvkTJxaEDbovyXB0mbv6XeO6ti6LgJIzuAx5mdJ%2BpzfXvx731eJndFgAOziCF%2F7Re1vac0lps9wk%2BO0tHGTJ7goEntQXjUQ8R5ZvGUjGycPsI8gRHDtmXZ%2FbGduuDcFGUNuboG%2FozoKnglpZbjKOnSuYavpCs0e9AoPJsKnFhR1MVqAZMTjyp51XyBX6%2F0yaVt5j6E%2BJs5cEToMiGcVQHXCBcI9tOj5g8HbLlXSCxZMSKugxaw0ZTi7N8S6fhndj5tRhqEA6ZdUvUZhfoCxWUPe4Kb1YyRzAyHT1E6DNdPALMgSL0IbkE2wASYAA5PFbt2e76NMJefi8oGOqUBdk0z%2F5HUus0ndkZf3RYovke%2B4bt3c2UBrXC2FSKfEcDPO2BFWXmsRbV80bkWMFY2zk%2B4Px9cDy%2Bd4UQpKE8U5rKL3%2Fr0VclqGAf%2B84k4GmC1Ah%2FWL1p6%2B9Tt56FfNH5dfE9qOjoWsu%2FJl0YdS6UD8twnsYog6heyEClsj0BUKu8yc0NldaX0BSoPuOQn%2FzfGcmBoDxl8G5cskaZEVGJKhe3x7Ift&X-Amz-Signature=98bd3da44eed0297e06383aecd7f1f26004ae90f77aef0d69a3b915edb03fe7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFCYBZY7%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T193309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICoqQa%2B6R%2FJNDjDVWgLMpTa%2FIeXw3CGqKTK%2FXLpHwwYbAiEA453efzsbtmDO0VqdK1%2Fzji3tGub6AlfT6SQIXQlmMXUqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIB5tD5gra7zWSJJACrcAwAtQd%2F0CJQWcK1eHd03FWZfmRYbgRRo6ZKSQUbofwKmk4TLZgGoqDl9RrMaaRQByLdYI4cWwD9EMRcZjA3px3XM%2BIoNd8ozlwJy5rQyDKUHBKP8kJTCp6pLv9KkjFm%2BGhhGwWtvGCBePeAtpbWvqBavW4V1kJp0WhDQQCYy9mIJU14OTT22HB04dIcEaPAUz2zys%2Baa7ui2xF0KG584wVQC9SIorj2CTrQLzpOfTbJ5BInXFV19Wm%2FyaJkXMBBTK8mZ8y0pTDxia%2FqseyeDN%2FABQ2c6kNDIt8D6peUFYyP2RWlC%2FGhOMhQvkTJxaEDbovyXB0mbv6XeO6ti6LgJIzuAx5mdJ%2BpzfXvx731eJndFgAOziCF%2F7Re1vac0lps9wk%2BO0tHGTJ7goEntQXjUQ8R5ZvGUjGycPsI8gRHDtmXZ%2FbGduuDcFGUNuboG%2FozoKnglpZbjKOnSuYavpCs0e9AoPJsKnFhR1MVqAZMTjyp51XyBX6%2F0yaVt5j6E%2BJs5cEToMiGcVQHXCBcI9tOj5g8HbLlXSCxZMSKugxaw0ZTi7N8S6fhndj5tRhqEA6ZdUvUZhfoCxWUPe4Kb1YyRzAyHT1E6DNdPALMgSL0IbkE2wASYAA5PFbt2e76NMJefi8oGOqUBdk0z%2F5HUus0ndkZf3RYovke%2B4bt3c2UBrXC2FSKfEcDPO2BFWXmsRbV80bkWMFY2zk%2B4Px9cDy%2Bd4UQpKE8U5rKL3%2Fr0VclqGAf%2B84k4GmC1Ah%2FWL1p6%2B9Tt56FfNH5dfE9qOjoWsu%2FJl0YdS6UD8twnsYog6heyEClsj0BUKu8yc0NldaX0BSoPuOQn%2FzfGcmBoDxl8G5cskaZEVGJKhe3x7Ift&X-Amz-Signature=16bb560d099a2de767bf1ef2824dddea1fd5be7503e1f1cf3c2649192f08c56f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

