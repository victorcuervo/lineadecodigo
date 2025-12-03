---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672G2ITLT%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T224448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIDZMsdSTQvyKKx%2B%2F1uBDvc5dibKYHLJmTXFkOx6E4iG2AiEAwwPM%2FsxrIkF%2FIy2ifEP7kbUndBtd%2FfXcou6i7KSHJiMq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDJEMZRgbuVKfg0ZVzircA0MC4LQk5veqIZfNwVjkGN%2FCqY0MzVnQXvsHNFuQcaceMXXVfRXZYxiEDXvH8FMQgRhJ0RvlpsLZjP9chBMjcKGKR1UD46%2F29qMoW2uIitu%2FYRyBuvpXGTypNS9xzGnNFbYL41xpU26yxgJLrARnJel2LFyCAmm1%2BpauqstNJAGBQ%2BR0lKD9VOOvTX%2B5qCbQJGN%2FAPsXRygqb8FcHWvaCngYz0ugoGPagpMJzpQGrk2Ig%2BSLvtj1pXShufqv3nQMc4omBk9yc20NN%2F0r%2BLJP%2BWfPVIR7uypS1cVJnPhjg8PoHiO86oUfX4WUfk1TaFOSNouMKOyc%2FPvT5%2BlPUWiQ0cn3umsJvwOl9ZUiaaSGCaE%2B599uQ97TGEX6fr9Eh%2BSkEFXx4T8%2FEdcshcmBq8%2FV6AQKgWE4nBHIxSli6bms9j7Klez8WBaOMARkIzll58Y0KsxmJZHVkwy%2BHRfWETODJLk3zbzDZbD4k%2FfMz54mQ3hLuEThSWYHacGeStPyvlH7P8EOg49l7xFxj%2BMGtFrS5DDYKpZASa48uH9YXMo0xScRHKCGPgb7uc3LWdP6sjrP%2BvZfATgLZvignbz6zCjpkfHHvog4cuzmatsbxyu5h%2FEwTflznXZmw2gRRCMjMNf4wskGOqUBj6TKzCVM6lWyiwcWcQ3ZfRi1CHr24mOsi1z3guGZtfSc3m%2FXlHFc%2F4%2F96TUUaBiHUC7Q2yiO9%2BGQ2z1bAG2qVMTWLst2wose2nQ2Q20ldCjf5%2FABKTgLc3Kc6J8qvjV9Z0ojCuWIzFDsxWi1mrvuYbATcoA%2Be6FqTSghchwsLZ%2FJ83HsRUN%2FP6G9dbSSVwRBM0u4qtqd96RM1P8o36%2FPFZqqeNTL&X-Amz-Signature=a9d8475fd0b20b5d18e8d448636e4f0a7c4c5bf8436398b835e77728fc7d199f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672G2ITLT%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T224448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIDZMsdSTQvyKKx%2B%2F1uBDvc5dibKYHLJmTXFkOx6E4iG2AiEAwwPM%2FsxrIkF%2FIy2ifEP7kbUndBtd%2FfXcou6i7KSHJiMq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDJEMZRgbuVKfg0ZVzircA0MC4LQk5veqIZfNwVjkGN%2FCqY0MzVnQXvsHNFuQcaceMXXVfRXZYxiEDXvH8FMQgRhJ0RvlpsLZjP9chBMjcKGKR1UD46%2F29qMoW2uIitu%2FYRyBuvpXGTypNS9xzGnNFbYL41xpU26yxgJLrARnJel2LFyCAmm1%2BpauqstNJAGBQ%2BR0lKD9VOOvTX%2B5qCbQJGN%2FAPsXRygqb8FcHWvaCngYz0ugoGPagpMJzpQGrk2Ig%2BSLvtj1pXShufqv3nQMc4omBk9yc20NN%2F0r%2BLJP%2BWfPVIR7uypS1cVJnPhjg8PoHiO86oUfX4WUfk1TaFOSNouMKOyc%2FPvT5%2BlPUWiQ0cn3umsJvwOl9ZUiaaSGCaE%2B599uQ97TGEX6fr9Eh%2BSkEFXx4T8%2FEdcshcmBq8%2FV6AQKgWE4nBHIxSli6bms9j7Klez8WBaOMARkIzll58Y0KsxmJZHVkwy%2BHRfWETODJLk3zbzDZbD4k%2FfMz54mQ3hLuEThSWYHacGeStPyvlH7P8EOg49l7xFxj%2BMGtFrS5DDYKpZASa48uH9YXMo0xScRHKCGPgb7uc3LWdP6sjrP%2BvZfATgLZvignbz6zCjpkfHHvog4cuzmatsbxyu5h%2FEwTflznXZmw2gRRCMjMNf4wskGOqUBj6TKzCVM6lWyiwcWcQ3ZfRi1CHr24mOsi1z3guGZtfSc3m%2FXlHFc%2F4%2F96TUUaBiHUC7Q2yiO9%2BGQ2z1bAG2qVMTWLst2wose2nQ2Q20ldCjf5%2FABKTgLc3Kc6J8qvjV9Z0ojCuWIzFDsxWi1mrvuYbATcoA%2Be6FqTSghchwsLZ%2FJ83HsRUN%2FP6G9dbSSVwRBM0u4qtqd96RM1P8o36%2FPFZqqeNTL&X-Amz-Signature=eaba1efc215aa5a7616b61c5c70fb33285f06936e00066a52f6cedea22cae060&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

