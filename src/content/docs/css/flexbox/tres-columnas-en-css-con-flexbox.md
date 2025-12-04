---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XBZ4LYZ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T003026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQC3I%2B8POG2F2NfAs714aJnDxVpb3kXKyIqj3mJwj%2F5QtwIgQVx3741ruijwZ4sjdCL4h1CNM8Jkki3zchixdxAayu4q%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDLApGyJ3%2BjME%2BXTdjSrcAyFk%2BZFjgXbdyqQJDEXLvCroVU6CT%2F5eHQS1Dg1YoNpGAoA3ArvKX%2BaQNamdtYuYjD%2Bjw03rwEYRfCDp8hzfIrkHDo0dvGC54guSQWQ4fvXfsYxdOpUFQLVGZh5t5D%2BF1R2gGm7Vsz9pgn5P1uJVx%2FQBxDuX5zMTyb5JYYBCo3SarAdm60rQWskduAVbA9OrkYk9TYOnDxneAhGAAKDcwlvEATHfWKKnLiDY4iFgIOlbyJ7H3rKSffwg8Z9yw%2B%2B1MhfDALM7KkMolSMeI0XgN5JMl62AkBylfyTJoWZNiGOK4uCK1EdZ2sRDmnJbgDeyR6ZNECTqtg9ob3VZdyg7wUGOqYXmBCjpNDcjRmhXlDn4Ri74rIXe5Weyj3UDrnZwwqpdJJLmSj%2BqCPaeZOxIa4S6kcnOBynjaadCtUeOTa9vuoZ69anSh5QR2H9s8%2BDSFbuxMud5oOHQl2ChiKhjnGYnvhfwd%2BvoLtFXYutUhEKo%2BsSf%2FK6FkFfJv5s0HKKEeU0DMTMyzzmRNpwX5u%2BdIU06E2j1qImhvbBM4LeHNit1Kn0tgtIaPlxB8%2FxlgLc7rV6wlXK4h1RvIJ%2BjW8nzwfdEUV2rw4%2FQRNxI2%2F9S0nj5qSffKk51ggxVh9TaMP6Uw8kGOqUBlnxIDKMPZDwzRKldaHfuFCmZ287yHSHuWar9vI0bBs3wVb7%2FwmusYF7knrNV6OnsQiXGO81jxLvn8S3CzBvNx%2F1GFC9m27%2F1HO9QwUye7x7lawVG3eZNuKwssQGcrtSkFfwAknQjT1j6ytbT7%2FuvwwUqNqnmJM60y3ZTxaxWXl5V9UWLSnXkM2vKzziKmK7XUBGMH6bxWDsci8sGLeoSjQChOXq4&X-Amz-Signature=67a1b807769a1ee2ace51d51ec78b29cdd6c55cd930dd615d968654e82044614&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XBZ4LYZ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T003026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQC3I%2B8POG2F2NfAs714aJnDxVpb3kXKyIqj3mJwj%2F5QtwIgQVx3741ruijwZ4sjdCL4h1CNM8Jkki3zchixdxAayu4q%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDLApGyJ3%2BjME%2BXTdjSrcAyFk%2BZFjgXbdyqQJDEXLvCroVU6CT%2F5eHQS1Dg1YoNpGAoA3ArvKX%2BaQNamdtYuYjD%2Bjw03rwEYRfCDp8hzfIrkHDo0dvGC54guSQWQ4fvXfsYxdOpUFQLVGZh5t5D%2BF1R2gGm7Vsz9pgn5P1uJVx%2FQBxDuX5zMTyb5JYYBCo3SarAdm60rQWskduAVbA9OrkYk9TYOnDxneAhGAAKDcwlvEATHfWKKnLiDY4iFgIOlbyJ7H3rKSffwg8Z9yw%2B%2B1MhfDALM7KkMolSMeI0XgN5JMl62AkBylfyTJoWZNiGOK4uCK1EdZ2sRDmnJbgDeyR6ZNECTqtg9ob3VZdyg7wUGOqYXmBCjpNDcjRmhXlDn4Ri74rIXe5Weyj3UDrnZwwqpdJJLmSj%2BqCPaeZOxIa4S6kcnOBynjaadCtUeOTa9vuoZ69anSh5QR2H9s8%2BDSFbuxMud5oOHQl2ChiKhjnGYnvhfwd%2BvoLtFXYutUhEKo%2BsSf%2FK6FkFfJv5s0HKKEeU0DMTMyzzmRNpwX5u%2BdIU06E2j1qImhvbBM4LeHNit1Kn0tgtIaPlxB8%2FxlgLc7rV6wlXK4h1RvIJ%2BjW8nzwfdEUV2rw4%2FQRNxI2%2F9S0nj5qSffKk51ggxVh9TaMP6Uw8kGOqUBlnxIDKMPZDwzRKldaHfuFCmZ287yHSHuWar9vI0bBs3wVb7%2FwmusYF7knrNV6OnsQiXGO81jxLvn8S3CzBvNx%2F1GFC9m27%2F1HO9QwUye7x7lawVG3eZNuKwssQGcrtSkFfwAknQjT1j6ytbT7%2FuvwwUqNqnmJM60y3ZTxaxWXl5V9UWLSnXkM2vKzziKmK7XUBGMH6bxWDsci8sGLeoSjQChOXq4&X-Amz-Signature=b99c36923a579ddd9dc65627b9af23d4889e105ec08ffbf5482b32f2eece0b62&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

