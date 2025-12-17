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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAPNYQWR%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T055032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCdpMhpVyPr0Dq4ucqF8E7cGefDO1TB3Y0WE7CW19hYkAIhANNT5JJHOEsijpern4O5A%2BPCm7xCUOayFH0XWosVzhudKv8DCHcQABoMNjM3NDIzMTgzODA1IgyXNU7PvqmCMCJnPCwq3AMiuXhB%2F18zZaSYNDq8qTUNESnNpOJFTbdMlRLHKUutjZXo92ToROIudCcWDQni9UIDG3A2HN%2B7P8vHzxDGgyw98BgB6vEFAD6uiCiIWmWhFP7%2F%2FyNCgpiCYD%2FNO6EFLVW6R3ZeFdqc8GIJM8Up7mTmJMFUcZBkwW9gjY7wZWBZ%2FDct6q%2BNyp0NxIwU%2Bv%2FL6CfKLEu2A2vn38EmdBfHkr36x3I7mXtnT3PDMGIkioBok5HnVRAY%2BW1lp0bvjxh%2B3YNjL9fnN3MxaW7%2B4dn71AOPp4VL%2BtvUjRYPZTq6vTzo1oQXqXr5gH6RQZ3ww4ESSFtU5s2q7xfbLs%2BN1vGKq2N5O2RTzfsSH0PaCgLN9IMeiwPLgIwQSOzSTE%2FsJbdOf61M289cyde9UeE5KrqdD7GwC4fl%2FbARv5%2BissSrQgGZHBsCthpPker%2BJsUrABsm%2FKBtKxp2F%2BH0YqJfkM%2Fbqbm5gpNBLzCoViw2ODvjBmA8xWEz%2BQPXqvcnOpVoAd6ZDJZUjDFRrq38yNvJ22iRFODz3flRIJcpE2%2BavI1Xgh41vMo6CC%2FLGtHZaO79dGMAFdw0UFoe%2BtW%2BHFSeW2savkDqKQWuyKm%2BspLlHf6shROA7sWnNleH0aH7aq3RbjDjgonKBjqkAYK3jw2%2BUoC57JAK5Q8dv1tt1O4meqDtQJMdGTHEW8xVq8CcB%2FlGYEDogWF9CYO5wxpXg4IP7T7NNg5aotjdv4MCU2BdpjBebn8zn%2Fuxgkx8w0cBRFsAPDLAP%2F9YSYZJHy8EWo0kHSKveoAG8xLBu260lMV9waMnsaPV6dOYqGTRHfK9Iofl%2BcxPLP%2FLvpKa6lsrTJdYLAECDSfJB02Lq%2F5Jgz04&X-Amz-Signature=74d5074efa8cea49ee8903129b8b4ca7199a32bf95bb4b2a11a3ff380f0a4719&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAPNYQWR%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T055032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCdpMhpVyPr0Dq4ucqF8E7cGefDO1TB3Y0WE7CW19hYkAIhANNT5JJHOEsijpern4O5A%2BPCm7xCUOayFH0XWosVzhudKv8DCHcQABoMNjM3NDIzMTgzODA1IgyXNU7PvqmCMCJnPCwq3AMiuXhB%2F18zZaSYNDq8qTUNESnNpOJFTbdMlRLHKUutjZXo92ToROIudCcWDQni9UIDG3A2HN%2B7P8vHzxDGgyw98BgB6vEFAD6uiCiIWmWhFP7%2F%2FyNCgpiCYD%2FNO6EFLVW6R3ZeFdqc8GIJM8Up7mTmJMFUcZBkwW9gjY7wZWBZ%2FDct6q%2BNyp0NxIwU%2Bv%2FL6CfKLEu2A2vn38EmdBfHkr36x3I7mXtnT3PDMGIkioBok5HnVRAY%2BW1lp0bvjxh%2B3YNjL9fnN3MxaW7%2B4dn71AOPp4VL%2BtvUjRYPZTq6vTzo1oQXqXr5gH6RQZ3ww4ESSFtU5s2q7xfbLs%2BN1vGKq2N5O2RTzfsSH0PaCgLN9IMeiwPLgIwQSOzSTE%2FsJbdOf61M289cyde9UeE5KrqdD7GwC4fl%2FbARv5%2BissSrQgGZHBsCthpPker%2BJsUrABsm%2FKBtKxp2F%2BH0YqJfkM%2Fbqbm5gpNBLzCoViw2ODvjBmA8xWEz%2BQPXqvcnOpVoAd6ZDJZUjDFRrq38yNvJ22iRFODz3flRIJcpE2%2BavI1Xgh41vMo6CC%2FLGtHZaO79dGMAFdw0UFoe%2BtW%2BHFSeW2savkDqKQWuyKm%2BspLlHf6shROA7sWnNleH0aH7aq3RbjDjgonKBjqkAYK3jw2%2BUoC57JAK5Q8dv1tt1O4meqDtQJMdGTHEW8xVq8CcB%2FlGYEDogWF9CYO5wxpXg4IP7T7NNg5aotjdv4MCU2BdpjBebn8zn%2Fuxgkx8w0cBRFsAPDLAP%2F9YSYZJHy8EWo0kHSKveoAG8xLBu260lMV9waMnsaPV6dOYqGTRHfK9Iofl%2BcxPLP%2FLvpKa6lsrTJdYLAECDSfJB02Lq%2F5Jgz04&X-Amz-Signature=2b09db1709f20c9b6883b492f72ec83de1f056cb404222a0c9122f85728ee317&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

