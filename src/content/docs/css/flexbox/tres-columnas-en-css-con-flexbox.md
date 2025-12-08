---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQBZZ4EL%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T225503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE52kDXMyvm%2F51hhnE6LEixK%2Ffi9WSS7gUChxdD95IltAiEAgJn03BenVlBJE8q2UAeN23PXQOOli684AJPUuTmlndoqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIxp322uk95Mm%2FxZUyrcAyWNgC9wxv1rps1Wk7KdD8DYTTjJGmIE71YGdiVbRqp%2F6nCrCuWy329ev%2BQpvM1TZRtYlBUAoDEkvs1uBOG8LZOI4rVUoYWpZhEi0h7Y37zUl%2Fy50xVUY11c5FLWSlr5IGHT0RJC5JIIO%2FMfzsTvQH8AIBBAjxceBY4kumBhwi8tmvmzXprJlaSKegGzJBT%2BXDwR6zIx5KzMA1ub5niHMigfOKel9Z4CsCjtNbP5ZILGRUHnXc3Zqi%2BUe%2BwYwZ%2BHX7t8HBxE%2Fwp8gQSq0rKQTGEJdE8y8PAwZtz1b4U0zT8JD8u4RtOwn061r1pklOIRz1Y0%2BBUA2DmyrM%2BY%2FNTw0vfKg45X3qUcqvik0SssEk2gjS5qi55YqgQM10tFLHqi75H3Ey9rYO5amz6DLzMI4IWHol0gV3XM9H0PNvHRRKBm2bAowfmRj6Pzqt5DFui6W%2BCg3jvWtBhimOHgYIbzxBw09PIA4zf7G4D1duvKy7tBTiNATdXPtljH5t95DF%2FfR1%2FcwxvZWkr9ZAXoZZWQpY7Mz2zYcG7XAhfSACb1K3srUjXMu5zjyYQJJkYRZEJlSEEav6fGLfuwBWPjDB2EkcKE%2BkTwuFhKx05cw1HAeXUNhHLAE5gdvr3XU%2BJKMMKh3ckGOqUBhx98u3OYDma6rQXU8sUFEIaJed1evb7fVs9RDhZiFuHVN3tRQFz1CGCn0hyJNPBdheW7nN7mmrPjq6etXkt2n5rAJlwDAijqCS3hR6cOpjTHo7w4P%2B%2Fu54qCOOEUCuaDyiNL3BsXU3JtMopaK7F4PzJVBkqOm9GLeCYmj4Hz%2F%2BhvgTr3izy2QY7fy3s05LGHKsu1pb4uVJ4tiibz98H3QoMaeg47&X-Amz-Signature=e6c7900dce57d76ec3967f5e03550f3de0299bbaed25e8710c24e69ed7919c54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQBZZ4EL%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T225503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE52kDXMyvm%2F51hhnE6LEixK%2Ffi9WSS7gUChxdD95IltAiEAgJn03BenVlBJE8q2UAeN23PXQOOli684AJPUuTmlndoqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIxp322uk95Mm%2FxZUyrcAyWNgC9wxv1rps1Wk7KdD8DYTTjJGmIE71YGdiVbRqp%2F6nCrCuWy329ev%2BQpvM1TZRtYlBUAoDEkvs1uBOG8LZOI4rVUoYWpZhEi0h7Y37zUl%2Fy50xVUY11c5FLWSlr5IGHT0RJC5JIIO%2FMfzsTvQH8AIBBAjxceBY4kumBhwi8tmvmzXprJlaSKegGzJBT%2BXDwR6zIx5KzMA1ub5niHMigfOKel9Z4CsCjtNbP5ZILGRUHnXc3Zqi%2BUe%2BwYwZ%2BHX7t8HBxE%2Fwp8gQSq0rKQTGEJdE8y8PAwZtz1b4U0zT8JD8u4RtOwn061r1pklOIRz1Y0%2BBUA2DmyrM%2BY%2FNTw0vfKg45X3qUcqvik0SssEk2gjS5qi55YqgQM10tFLHqi75H3Ey9rYO5amz6DLzMI4IWHol0gV3XM9H0PNvHRRKBm2bAowfmRj6Pzqt5DFui6W%2BCg3jvWtBhimOHgYIbzxBw09PIA4zf7G4D1duvKy7tBTiNATdXPtljH5t95DF%2FfR1%2FcwxvZWkr9ZAXoZZWQpY7Mz2zYcG7XAhfSACb1K3srUjXMu5zjyYQJJkYRZEJlSEEav6fGLfuwBWPjDB2EkcKE%2BkTwuFhKx05cw1HAeXUNhHLAE5gdvr3XU%2BJKMMKh3ckGOqUBhx98u3OYDma6rQXU8sUFEIaJed1evb7fVs9RDhZiFuHVN3tRQFz1CGCn0hyJNPBdheW7nN7mmrPjq6etXkt2n5rAJlwDAijqCS3hR6cOpjTHo7w4P%2B%2Fu54qCOOEUCuaDyiNL3BsXU3JtMopaK7F4PzJVBkqOm9GLeCYmj4Hz%2F%2BhvgTr3izy2QY7fy3s05LGHKsu1pb4uVJ4tiibz98H3QoMaeg47&X-Amz-Signature=e3b9abeb64ac038c8579042819d04528dfcf902869b399e496e5c2cc5f456d89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

