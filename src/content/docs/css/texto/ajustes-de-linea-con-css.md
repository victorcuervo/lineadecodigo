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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654FRXD35%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T071411Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDRXIP3D7x%2FZdMB3bto1lLBVzlwKCpagFSX%2BhCCRE20lAIhANokvJ6XokHkQoEW5l6Bf%2BCBkCCRnPxrrvESPhZS%2F0LZKv8DCHgQABoMNjM3NDIzMTgzODA1IgyfRvGPyExJGf3LkBEq3AOh093oDW5UrX22R7%2FYrmSFdOaCMxwH4%2FrMlX8KE8yLUFtvOC9GiNCqAo6DdZ71pNhCny3WlGPKiy%2BAZzHMeAmPjLV4OUhcA8kTOz882865JE7FdIt3yC390eOJsjI0UW6oGeNrwgauJR8xNGYdLH3Py5eARQ7fTr6yOa0SfPtfCgfNcyACbJcCmrfy%2BrYD5zRD8Nr9EdhzMS9Y9%2BymupIqDew%2B8EHViPuBE7%2FQdyvuu7cpYQGWu%2FOp6W97Y3gk51%2FVPZUh6VoaGWTruN5jRsR0r0cP6%2FDbRpND8OTIUpLWgH3uID7B4ZWNV1jDUNJVG3jdCyZlS6wlDTCJQ6F3k5vpVxAaQ1tqDZ4fFxi5g2rqR1bU7jh44OROJcoGQKnjG02Yvq%2BWF9pMNty3M70mkinG2dbxbZ4Yh%2BYEbifpCHLAgBpQDFm8uhregb0ya3gSdc5Ze9CVqLMWIhwXd5hv6edkBVue6bjBKEPvZqpgfSh5%2FoH1ueW93w8IuH4U%2BdlU7YTAjOAmXCgjsCOLbZLPHT%2B6qK8DzftnqwGHqON%2FMrBm9r5IB5YDpDH0TXJWR4AGsS7tLn8xx1o9FWVbWwFpvJOOKFtoWPV43WtEqVx%2FQrP6MGx5%2FgWnVS4yWVKI1TDinYnKBjqkASZ28NEkOxLU0msPeg1Xw57nYm467R3MFOBYekRFbqYNIKQxz%2BG8pfy5I8BJEm02CcnSj2MWe6%2BLct5DZ5C9JqijIBZ3BGQ%2FPa1hZzDsJyUSSj32oODqG68IUf4DYsYKc9jd8u4SIipi88cxIOsEHKbQls11LU3joZqKO5Ap7dBMCh6%2BvPdvhj259nTkNZzkJbsD85%2F%2BUSjgEiFQyNB%2Bscs8lqP6&X-Amz-Signature=4e659e19870f7995a186f824e9623a66a1320400e10efe269b0c3f377e0aefb1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654FRXD35%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T071411Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDRXIP3D7x%2FZdMB3bto1lLBVzlwKCpagFSX%2BhCCRE20lAIhANokvJ6XokHkQoEW5l6Bf%2BCBkCCRnPxrrvESPhZS%2F0LZKv8DCHgQABoMNjM3NDIzMTgzODA1IgyfRvGPyExJGf3LkBEq3AOh093oDW5UrX22R7%2FYrmSFdOaCMxwH4%2FrMlX8KE8yLUFtvOC9GiNCqAo6DdZ71pNhCny3WlGPKiy%2BAZzHMeAmPjLV4OUhcA8kTOz882865JE7FdIt3yC390eOJsjI0UW6oGeNrwgauJR8xNGYdLH3Py5eARQ7fTr6yOa0SfPtfCgfNcyACbJcCmrfy%2BrYD5zRD8Nr9EdhzMS9Y9%2BymupIqDew%2B8EHViPuBE7%2FQdyvuu7cpYQGWu%2FOp6W97Y3gk51%2FVPZUh6VoaGWTruN5jRsR0r0cP6%2FDbRpND8OTIUpLWgH3uID7B4ZWNV1jDUNJVG3jdCyZlS6wlDTCJQ6F3k5vpVxAaQ1tqDZ4fFxi5g2rqR1bU7jh44OROJcoGQKnjG02Yvq%2BWF9pMNty3M70mkinG2dbxbZ4Yh%2BYEbifpCHLAgBpQDFm8uhregb0ya3gSdc5Ze9CVqLMWIhwXd5hv6edkBVue6bjBKEPvZqpgfSh5%2FoH1ueW93w8IuH4U%2BdlU7YTAjOAmXCgjsCOLbZLPHT%2B6qK8DzftnqwGHqON%2FMrBm9r5IB5YDpDH0TXJWR4AGsS7tLn8xx1o9FWVbWwFpvJOOKFtoWPV43WtEqVx%2FQrP6MGx5%2FgWnVS4yWVKI1TDinYnKBjqkASZ28NEkOxLU0msPeg1Xw57nYm467R3MFOBYekRFbqYNIKQxz%2BG8pfy5I8BJEm02CcnSj2MWe6%2BLct5DZ5C9JqijIBZ3BGQ%2FPa1hZzDsJyUSSj32oODqG68IUf4DYsYKc9jd8u4SIipi88cxIOsEHKbQls11LU3joZqKO5Ap7dBMCh6%2BvPdvhj259nTkNZzkJbsD85%2F%2BUSjgEiFQyNB%2Bscs8lqP6&X-Amz-Signature=12701bfbce219de17528a7b394ecd3fe333a823de7a1e83cf3f1b2b6d2ab469f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

