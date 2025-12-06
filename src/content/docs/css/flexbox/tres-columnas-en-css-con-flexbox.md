---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWWXZLDE%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T185346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFTPmyykgCXEW%2FdxXVyar4yVo6eTlE%2FMu%2FGYPD4KlULTAiEAmJJpwMkoubWgGKjFhQDZVwta8GDNZc%2BW2BeJuE15fGEq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDMETldcF66NiGuaJsCrcA5%2BElxoL0OH7Io1eo0%2BF0lWYrhmubcUnSiEedZaBqe%2Fj2VhMSFMZLTTSPbIqqHEYXhn5%2F7svuUWVaHI57wUUQp4i3xUFB9CwRZaOBmYvIyt40MXxX3WZM5RB8aapGgCRmBn56gjC6C%2FVyIwpjViMGzmjaGpuTAvd06V8EOiNWRW1A9IepO1pQBLI745GmEEJQJ7RHN3UW42AEthBk6GCzeHUioO0LIL9x%2FM6rPsWZfGcXLwCJkkZnnfMYDxzUJ%2BtH309nWb6lvNqDXXiTMU%2Bdz85THz3Ihvme62ja3t8Vw3OY9DWl4EP0usrrRaQAREHl6z7SsLyllVJmAizUE72Xxmk5vWLsUcW78gjj2An8cewKgzXD49t%2FxE4ZsOa3Fn7nC5egswXS8KkdtdGHWsDcTeFqNG2jPswzJS0ozqZmW60GVJr3%2F35iK%2B%2BXjAOgNIUIZoJ0EroSwfsSviY9i5daDcCN1ao89h2GYL6h7mNA8zgkiBgD7LGzgqCKVH%2FEE4ZHZd%2FkwKlVzpAQ56IFl221%2FoyYFFN98Ibq8W6Orz8xPVUua4wVRONkXkHgCTqtRn1rJS5kYR%2FN7rg5QE4uZ%2FFXo6P06we7ze2NvmZ%2FynY%2FlwDoanvuqE8emH71g9RMI3j0MkGOqUBZYn8BEb6Qn8HC9g%2FS5XoVyZCoKo5nLzhh2Y2K5Z5%2BL49j%2FjuioLAWvDz0t0g7omiS9FI2HO4xFrjCxnaHYnx4Yc57r60wqqhKxLlBR1DC909azp1n2TQUaqU3HY7dDurfud%2FSIR%2FVKn%2BYayOkrbmHclP%2BSGlDmWq1ZVibJgsURKxikrvVxqHAIL0LG6P2GIaRHZBvnXv7UYG4KnYZe23lpi45Fdn&X-Amz-Signature=4ab4128da44b6ff2149675889be840744d85e2da0945ae56893f4917d224229b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWWXZLDE%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T185346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFTPmyykgCXEW%2FdxXVyar4yVo6eTlE%2FMu%2FGYPD4KlULTAiEAmJJpwMkoubWgGKjFhQDZVwta8GDNZc%2BW2BeJuE15fGEq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDMETldcF66NiGuaJsCrcA5%2BElxoL0OH7Io1eo0%2BF0lWYrhmubcUnSiEedZaBqe%2Fj2VhMSFMZLTTSPbIqqHEYXhn5%2F7svuUWVaHI57wUUQp4i3xUFB9CwRZaOBmYvIyt40MXxX3WZM5RB8aapGgCRmBn56gjC6C%2FVyIwpjViMGzmjaGpuTAvd06V8EOiNWRW1A9IepO1pQBLI745GmEEJQJ7RHN3UW42AEthBk6GCzeHUioO0LIL9x%2FM6rPsWZfGcXLwCJkkZnnfMYDxzUJ%2BtH309nWb6lvNqDXXiTMU%2Bdz85THz3Ihvme62ja3t8Vw3OY9DWl4EP0usrrRaQAREHl6z7SsLyllVJmAizUE72Xxmk5vWLsUcW78gjj2An8cewKgzXD49t%2FxE4ZsOa3Fn7nC5egswXS8KkdtdGHWsDcTeFqNG2jPswzJS0ozqZmW60GVJr3%2F35iK%2B%2BXjAOgNIUIZoJ0EroSwfsSviY9i5daDcCN1ao89h2GYL6h7mNA8zgkiBgD7LGzgqCKVH%2FEE4ZHZd%2FkwKlVzpAQ56IFl221%2FoyYFFN98Ibq8W6Orz8xPVUua4wVRONkXkHgCTqtRn1rJS5kYR%2FN7rg5QE4uZ%2FFXo6P06we7ze2NvmZ%2FynY%2FlwDoanvuqE8emH71g9RMI3j0MkGOqUBZYn8BEb6Qn8HC9g%2FS5XoVyZCoKo5nLzhh2Y2K5Z5%2BL49j%2FjuioLAWvDz0t0g7omiS9FI2HO4xFrjCxnaHYnx4Yc57r60wqqhKxLlBR1DC909azp1n2TQUaqU3HY7dDurfud%2FSIR%2FVKn%2BYayOkrbmHclP%2BSGlDmWq1ZVibJgsURKxikrvVxqHAIL0LG6P2GIaRHZBvnXv7UYG4KnYZe23lpi45Fdn&X-Amz-Signature=336afb6cf143b76113c9873ea0f42e1b41105f6667de1600cbb6590e79081149&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

