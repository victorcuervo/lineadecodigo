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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YO5OOZX%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T192507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICSVCYVxeIova7dCbJs8h589adaVg8TshfBHYg73vZIGAiA6eY9kNIrC%2BK4Fjz31EQyaKpmb%2FLQsTVqOxD5ZUyCkcCqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOyrLw%2FowsRrnt2tSKtwDHjXVs5SPsFwBZLED8m5v4n5kk%2Bey6ujC7HQK3v9vFRCQ9jZwuWE28MkQT1lyTznf2qIQiAyrUtMxqrTqZcE%2FJX2So8z%2FoaBzkNak8OJySSxiObQ2uHVnix%2FjpOPJ3huBW21clt3ihIJBKPk6msj6pcVzG%2F58apO5s3vDosqfu0Gj8zWiXngIwZ9qxflaK3RpnBnxRfvBj82uJJWmqJ%2BaceOgxhVxX0wwJF0HPx05bM9cjtOP%2FEYPMUebjuW59fGqqgdK9FToOHpm0V1n84oywM2U1x%2FeMuJbrHkNRrGWGW4rAg1VA9MEmD9qGvGXkE93WZ8FDYXxFg6ujOZmjVq8Sy526gNdreFOcQVnmIQwWPmhqcxmNba7PbXcc%2BrbLWsNYXhjj%2BPDmMWmOkZCo3uszNExVJXBCJJBYOWxADdYk7EWobLn0Pa%2FU2h%2F7cN2a7kt9BCQoT8fYqips%2FWMNwVT9GR6D4H53c2jNNLb2y4YAp4g9YIQbw4AZASDZk39ENHivkcoCLWVMnWcA6Tw8h5Nyy9kOFp%2FWE%2FthIaN6URmDKBpI2DMGq9KKpXVH7C%2Be0IJ%2FV8YPoYmd9w66YFuphY6q06cN00%2BwRZ7So%2F6s%2Bvbu0r7lDvJLOrajxNJMp4wgKCLygY6pgFcSSpopvJ%2BCP5M4pMDT5xny7BkDsPUN8NscN%2BHnr1sgC0sY5wJA9QO6o0f%2F8SGPAUMClDDhGR%2FF7Jlc0HaIuwJEwOFwqrIszvQATmaJz587tTRi7R3HFI6wRtCGkkQtkZpQfexkLDmIw%2BfMKbWM08VXG2J7Ut5odbgC9mMLVN9gxuYGiPIGCbmjuSNd31ymlFUDqn22IEZg9tcp4W1z%2B7aM9vbl5Pn&X-Amz-Signature=a5910ba73310e3cf18d6f6799d355c45c9d2a42bfea72c225b7d5011bcff2e23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YO5OOZX%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T192507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICSVCYVxeIova7dCbJs8h589adaVg8TshfBHYg73vZIGAiA6eY9kNIrC%2BK4Fjz31EQyaKpmb%2FLQsTVqOxD5ZUyCkcCqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOyrLw%2FowsRrnt2tSKtwDHjXVs5SPsFwBZLED8m5v4n5kk%2Bey6ujC7HQK3v9vFRCQ9jZwuWE28MkQT1lyTznf2qIQiAyrUtMxqrTqZcE%2FJX2So8z%2FoaBzkNak8OJySSxiObQ2uHVnix%2FjpOPJ3huBW21clt3ihIJBKPk6msj6pcVzG%2F58apO5s3vDosqfu0Gj8zWiXngIwZ9qxflaK3RpnBnxRfvBj82uJJWmqJ%2BaceOgxhVxX0wwJF0HPx05bM9cjtOP%2FEYPMUebjuW59fGqqgdK9FToOHpm0V1n84oywM2U1x%2FeMuJbrHkNRrGWGW4rAg1VA9MEmD9qGvGXkE93WZ8FDYXxFg6ujOZmjVq8Sy526gNdreFOcQVnmIQwWPmhqcxmNba7PbXcc%2BrbLWsNYXhjj%2BPDmMWmOkZCo3uszNExVJXBCJJBYOWxADdYk7EWobLn0Pa%2FU2h%2F7cN2a7kt9BCQoT8fYqips%2FWMNwVT9GR6D4H53c2jNNLb2y4YAp4g9YIQbw4AZASDZk39ENHivkcoCLWVMnWcA6Tw8h5Nyy9kOFp%2FWE%2FthIaN6URmDKBpI2DMGq9KKpXVH7C%2Be0IJ%2FV8YPoYmd9w66YFuphY6q06cN00%2BwRZ7So%2F6s%2Bvbu0r7lDvJLOrajxNJMp4wgKCLygY6pgFcSSpopvJ%2BCP5M4pMDT5xny7BkDsPUN8NscN%2BHnr1sgC0sY5wJA9QO6o0f%2F8SGPAUMClDDhGR%2FF7Jlc0HaIuwJEwOFwqrIszvQATmaJz587tTRi7R3HFI6wRtCGkkQtkZpQfexkLDmIw%2BfMKbWM08VXG2J7Ut5odbgC9mMLVN9gxuYGiPIGCbmjuSNd31ymlFUDqn22IEZg9tcp4W1z%2B7aM9vbl5Pn&X-Amz-Signature=400c47ca3d10b7f906be8f7d875ea656b158fb90d8122fdd1bf5885e4dd620e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

