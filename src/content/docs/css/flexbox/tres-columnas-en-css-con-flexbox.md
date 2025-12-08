---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VM7WNG6X%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T173506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcbVpI2ZDoMt4Y57YmocW7jsCbfbZDRMZojR6SXlY3hAIgHgZWIVI1gxoDwuTtHC5KOgIrf3DP4BydnLHefBDrAGMqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCGtBUib6DCc1h9g0ircAzu%2BnC5f%2BEf2IotzHGnFHd6CIG6zzvic8Iv4ZD6fL1iPli3DoGCkUFp5SjNR1THO5q5By09H1%2BYhnhl%2Br%2FwTMVuN%2Bnh25O4l2G6RxwbLO%2Fs3r9wZEhgM3Us6LD2K4ndPrn0j1HolIdZaA84pvFiNko%2FzMDirjFjcRkFkLy5sddSvbldKj4H5bFy4Sxmas37R7LorwSFIYEBo8xCzno2YcgVAAa4%2Fy2t2JcgYF1AYEZJaDpuxC%2F4ydTwsjysklm87ED%2FL6EmRzGpNa5DNGb6NHQSSZ10HkVlWHFJuhZZ1cSAenE6XfNirONI0ABxbDY0316MDiOwRDeNMuGiQi1BKfWvXuOqn0VxpI0zMu7LVspkKiI72Nh5n9xhB8giJ8E%2FCZx3mz8jUZIfwlblvgD4qIOo6IOPQ4OOEDlE5%2FwC43mXfmNB8YxtOWlw3DXR23tHUsiAFg9zadqJXckuur4m5yRYlFaeXGBlyP%2FXBDEb0SUIMyvPwpbmeKT1o6ONusfLxH5DRFSDtzaZNHpJxBY9Q79OhzTJnSziaezsv4%2BOu3L6Znuh6DcDIKTqp2Q9jm7pWYpOC54%2FaOfBfnwY0BE%2FnZg1mnKM%2FfGgE6ly7cv2tnDkljTkgSulQjkbE5npLMJ%2BH3MkGOqUB2RBSDEU3HyCxYmoBRtbK5WdVlr%2BM8EWr7ca2ck4YJlWybeUHPeW3d4OBB%2BW8LiYKehrJR5HsXUj1BXCbVoj6M1WuKQYrWLW0An3a8akrAW8jjyv%2BVLn2v0PasktrhKmR2Oes6XF%2B007qvpAENFaROtMb%2BNikEdDKe%2F3LYck0yxVqT96SWeW6ZVbtn4H%2BGi6tV08XaItsWfcAfb40OZb3jSmoVyF2&X-Amz-Signature=7d2cdc5f6085d5b9cb59ea3331a2de0a6f254ccd91b779213087e92e8513fb0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Por lo tanto lo que haremos para crear una página con tres columnas, lo que tendremos que hacer es crear el contenedor y tres elementos, cada uno de los elementos será una columna.


Si revisamos el código [HTML](https://www.manualweb.net/html/) será algo de la siguiente forma:


```html
<div class="contenedor">
  <div class="columna">
    <!-- Contenido -->
  </div>

  <div class="columna">
    <!-- Contenido -->
  </div>

  <div class="columna">
    <!-- Contenido -->
  </div>
</div>
```


Ahora pasaremos a darle el estilo mediante [CSS](https://www.manualweb.net/css/) para que las tres columnas queden de la forma correcta.


Lo primero será centrarnos en el contenedor. El contenedor será sobre el que indiquemos que vamos a aplicar el modelo de cajas flexibles, esto lo hacemos utilizando la propiedad [`display`](https://www.w3api.com/CSS/display/), a la cual asignamos el valor de `flex`. 


Además trabajaremos tres propiedades más, para darle forma al contenedor. La primera será [`flex-direction`](https://www.w3api.com/CSS/flex-direction/), la cual nos permitirá indicar cómo se organizan los elementos dentro del contenedor. El valor que asignamos el `row`, que nos indica que los elemento se distribuyen como una columna de izquierda a derecha.


La segunda será la propiedad [`flex-wrap`](https://www.w3api.com/CSS/flex-wrap/). En este caso la propiedad [`flex-wrap`](https://www.w3api.com/CSS/flex-wrap/) nos permite indicar si queremos que los elementos salten o no de línea. En nuestro caso no nos interesa que salte de línea ante una redimensión de la pantalla. Por lo que le asignamos el valor de `nowrap`.


Y la tercera será [`justify-content`](https://www.w3api.com/CSS/justify-content/) que va a permitir realizar la colocación de los elementos dentro del contenedor. En este caso le asignamos un valor de space-between que hará que los elementos se distribuyan equitativamente a lo largo del contenedor, de un lado a otro.


```css
.contenedor {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}
```


Lo siguiente será centrarnos en los elementos, que serán las columnas de nuestra página. En este caso lo único que haremos será asignarles un 30% del espacio de la página, para que entre los tres elementos se repartan el 90% del contenido. Esto lo conseguimos mediante la propiedad [`width`](https://www.w3api.com/CSS/width/).


```css
.columna {
    width: 30%;
    background-color: #a5d8ff;  
	  padding: 20px;                        
}
```


Por elementos meramente estéticos lo que haremos será añadir un fondo de color azulado mediante la propiedad [`background-color`](https://www.w3api.com/CSS/background-color/) y un poco de espacio dentro del elemento mediante la propiedad [`padding`](https://www.w3api.com/CSS/padding/).


Si cargamos la página en nuestro [navegador web](https://www.ayudaenlaweb.com/navegadores/) veremos el siguiente efecto con las tres columnas:


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VM7WNG6X%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T173506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcbVpI2ZDoMt4Y57YmocW7jsCbfbZDRMZojR6SXlY3hAIgHgZWIVI1gxoDwuTtHC5KOgIrf3DP4BydnLHefBDrAGMqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCGtBUib6DCc1h9g0ircAzu%2BnC5f%2BEf2IotzHGnFHd6CIG6zzvic8Iv4ZD6fL1iPli3DoGCkUFp5SjNR1THO5q5By09H1%2BYhnhl%2Br%2FwTMVuN%2Bnh25O4l2G6RxwbLO%2Fs3r9wZEhgM3Us6LD2K4ndPrn0j1HolIdZaA84pvFiNko%2FzMDirjFjcRkFkLy5sddSvbldKj4H5bFy4Sxmas37R7LorwSFIYEBo8xCzno2YcgVAAa4%2Fy2t2JcgYF1AYEZJaDpuxC%2F4ydTwsjysklm87ED%2FL6EmRzGpNa5DNGb6NHQSSZ10HkVlWHFJuhZZ1cSAenE6XfNirONI0ABxbDY0316MDiOwRDeNMuGiQi1BKfWvXuOqn0VxpI0zMu7LVspkKiI72Nh5n9xhB8giJ8E%2FCZx3mz8jUZIfwlblvgD4qIOo6IOPQ4OOEDlE5%2FwC43mXfmNB8YxtOWlw3DXR23tHUsiAFg9zadqJXckuur4m5yRYlFaeXGBlyP%2FXBDEb0SUIMyvPwpbmeKT1o6ONusfLxH5DRFSDtzaZNHpJxBY9Q79OhzTJnSziaezsv4%2BOu3L6Znuh6DcDIKTqp2Q9jm7pWYpOC54%2FaOfBfnwY0BE%2FnZg1mnKM%2FfGgE6ly7cv2tnDkljTkgSulQjkbE5npLMJ%2BH3MkGOqUB2RBSDEU3HyCxYmoBRtbK5WdVlr%2BM8EWr7ca2ck4YJlWybeUHPeW3d4OBB%2BW8LiYKehrJR5HsXUj1BXCbVoj6M1WuKQYrWLW0An3a8akrAW8jjyv%2BVLn2v0PasktrhKmR2Oes6XF%2B007qvpAENFaROtMb%2BNikEdDKe%2F3LYck0yxVqT96SWeW6ZVbtn4H%2BGi6tV08XaItsWfcAfb40OZb3jSmoVyF2&X-Amz-Signature=15c9202f44d9cb202ef225a9c7e15cb65b1b9959badc9d79890a64017f9b1cbb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

