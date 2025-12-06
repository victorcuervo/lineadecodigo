---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UI7MHSX4%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T162314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICbumrPY9EpsHuoZ4P5ZFcll1hebFI4bFf%2BAYFKg1F3uAiAxUrS8Cs9h13Fp5R3UGJ%2Ffsb2nA8AGyMZ6%2FtYFMRqYwSr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMvgXmK98zLy0YTjitKtwDIy2ZQYzp9lzTKqI0X3bWTA44dmRbPtOpc3gqqEkZluv1Uds%2BYQd4v2P3Jjw78ApbXCwKaJGmipYzvI2vREgkCpAwdqWmcPlPna5Hg8h1IFmm3I7Cm%2BG8gSi4ynD%2F19gnK28sR1dWDMvSk7p60rqQDbI0I1k%2FsvoDooMIRv8vc7O9tuDg90PfUfkopDW6WDW%2FTdmXCERiyxIEz5vjw3KGcuZ0h5Ra3Obb6kDmFfJkh%2BOCEmBQ9JlUBVWlIkGsqZatUn1J5xBjrWtKrq5iR9tKp4T%2B3zbxYgigLdDwXNzgvZVP16bqrGhLICFNER6CkskT0BCmvnr%2FIYjSmEBih%2FCXCFNkoRTsWQlHfXVVp2ya4ZystVBgCOn%2FSV6pgnpkHtqB60P%2FQd%2BMA6Xf7xG3wHiQAvIaXaA1EZbrF4FTuD6NWvCh5gi9I2Fj31GWuQ1bk5TYckB%2BrcLhNAl56OsShS4rWIWZBHNYfDvmIzaiZrHl1UQ9HSG6tT0mBtA2%2B2wdzs7gEYi%2BIi2TN8J6UzHLPiVd%2FwbO%2BKN9E61BhW0ig3tZ808OYG2w6hWqCOk3L4surZNUQ1cjuUV9Ffde%2FS6i4sA%2Bq%2BH55yYyVrPRYl%2FApDYVJlkYFLvCAaHScPrQz8Yw5KbQyQY6pgEwTuivP40GhuXauuLlqhfcLQkiV%2FTR3IbYaGkVxCZ%2ButLq8NCHP31569HIUr9tRaiJNSB5Lzno3AlnYawL4593nmaEF8c6r1bxksKrgvAWjIWwwYEeUsCMU%2FJhj81VRZrDiUbVrm0O3CYhA5mm2T8LupbrO%2FYS1ikm2mm%2FZVpZzJ2PzhS3OLLEULVxRjDwUo3hqiWzLNCmI7nkm%2BrjfpY2CMlSuMoS&X-Amz-Signature=10b24cb4e7839039931f5d063df7c6986ab791e23520e9e17c8a03b34374d08c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UI7MHSX4%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T162314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICbumrPY9EpsHuoZ4P5ZFcll1hebFI4bFf%2BAYFKg1F3uAiAxUrS8Cs9h13Fp5R3UGJ%2Ffsb2nA8AGyMZ6%2FtYFMRqYwSr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMvgXmK98zLy0YTjitKtwDIy2ZQYzp9lzTKqI0X3bWTA44dmRbPtOpc3gqqEkZluv1Uds%2BYQd4v2P3Jjw78ApbXCwKaJGmipYzvI2vREgkCpAwdqWmcPlPna5Hg8h1IFmm3I7Cm%2BG8gSi4ynD%2F19gnK28sR1dWDMvSk7p60rqQDbI0I1k%2FsvoDooMIRv8vc7O9tuDg90PfUfkopDW6WDW%2FTdmXCERiyxIEz5vjw3KGcuZ0h5Ra3Obb6kDmFfJkh%2BOCEmBQ9JlUBVWlIkGsqZatUn1J5xBjrWtKrq5iR9tKp4T%2B3zbxYgigLdDwXNzgvZVP16bqrGhLICFNER6CkskT0BCmvnr%2FIYjSmEBih%2FCXCFNkoRTsWQlHfXVVp2ya4ZystVBgCOn%2FSV6pgnpkHtqB60P%2FQd%2BMA6Xf7xG3wHiQAvIaXaA1EZbrF4FTuD6NWvCh5gi9I2Fj31GWuQ1bk5TYckB%2BrcLhNAl56OsShS4rWIWZBHNYfDvmIzaiZrHl1UQ9HSG6tT0mBtA2%2B2wdzs7gEYi%2BIi2TN8J6UzHLPiVd%2FwbO%2BKN9E61BhW0ig3tZ808OYG2w6hWqCOk3L4surZNUQ1cjuUV9Ffde%2FS6i4sA%2Bq%2BH55yYyVrPRYl%2FApDYVJlkYFLvCAaHScPrQz8Yw5KbQyQY6pgEwTuivP40GhuXauuLlqhfcLQkiV%2FTR3IbYaGkVxCZ%2ButLq8NCHP31569HIUr9tRaiJNSB5Lzno3AlnYawL4593nmaEF8c6r1bxksKrgvAWjIWwwYEeUsCMU%2FJhj81VRZrDiUbVrm0O3CYhA5mm2T8LupbrO%2FYS1ikm2mm%2FZVpZzJ2PzhS3OLLEULVxRjDwUo3hqiWzLNCmI7nkm%2BrjfpY2CMlSuMoS&X-Amz-Signature=1e719952a6ba58c1f08549971e0864a2e424091f979fd52bc2e2b671f035bea9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

