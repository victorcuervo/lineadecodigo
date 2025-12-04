---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QN4CJ7J5%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T004154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIECrp9u7KOoUlQa6boS%2Bo%2Be6ebrDf6%2BFFixil5sDblpWAiEA03iqdFlA2%2BmVUUHw3E5DmWqqd2iRepfmWYGoYSqzOacq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDOE3b6HqYs%2B%2FtYXPESrcA%2BdGoLKOgJ05MTR1RJb33rCzy5WNtk4LofiYBzO73RSx7XObHgAG4fLCBwxPnQtgO3EVWrk4%2BgaiS4DF%2Fzgr6d0jDJhypTMQYJFGINa%2Br%2BYdqAFwGM6%2BxLa65ypsVI0Yw5mnC7%2FsQT11d8YBQrW%2BWyog5BUyOAP0dpqerD0hN7eA5i6YHRB%2FgGtJmszW%2BS0kpcV8lKxaW%2FMd2BF7xFG9x8gfrjhd50HWWmu8EQEKl0cGoOzFVG8nhDrtP02eYoKPysTwdc3Gal2CVMOaK7uu0LBzfzkVM1KqXgzFtZjgxZiipAKG7nFSBKgZ0db6o%2BF%2BWQ8BYu0dUVL5vytzhGDUTbgaO7SOffqusE65L2derPsiAzp0i4N2wxeTj8fwtHhBXUo10OkYSEiRSPFKISqA9OaupcaWR8AP68iT40b9BGsRpLfBCHDKgZ11jWy0Wj2J0VshKo1JnCDinnh63VJLTXdcxoBRZt2pBIg3p6giqs6UpBdGYJ1wocOGlpOIBoDfAXU3z3AXs6JljXfozS5%2Fx7JzXb8yuvlz3WK8nU1pSlySkVtcyHRmgT1kjnIkBssMR%2Bs509k19%2BwsPgIoBu4lgaFf0C4ZQ20%2FHbIbY%2F%2FT8lalnADLdTGX%2FOCKY%2FLyMLeVw8kGOqUBdDtsGzt8LNc%2BZUmokG%2BqdTMGrk%2BJRpq9GWdyImGfeqKIWD09WIFpZBTjAj%2BKwcT8xlDk%2BAPvdICA8Dcu0uke%2FlxSYsX5OgpKH0aSX%2BfwtlC0USSne8Q2scxM3bwbZwfHuRdjBpwdku2ZBwFnZQx%2BDkSVHeaep2S9vkNm6RVz1dGNH3AZg2XmrPGLjuB9i4k2b%2FbcZ6yxWfB%2FRYVSKHG4SMBogolz&X-Amz-Signature=a3978f182463de283312133104135ffe438d0c016cefed89d325d42b6f203966&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QN4CJ7J5%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T004154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIECrp9u7KOoUlQa6boS%2Bo%2Be6ebrDf6%2BFFixil5sDblpWAiEA03iqdFlA2%2BmVUUHw3E5DmWqqd2iRepfmWYGoYSqzOacq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDOE3b6HqYs%2B%2FtYXPESrcA%2BdGoLKOgJ05MTR1RJb33rCzy5WNtk4LofiYBzO73RSx7XObHgAG4fLCBwxPnQtgO3EVWrk4%2BgaiS4DF%2Fzgr6d0jDJhypTMQYJFGINa%2Br%2BYdqAFwGM6%2BxLa65ypsVI0Yw5mnC7%2FsQT11d8YBQrW%2BWyog5BUyOAP0dpqerD0hN7eA5i6YHRB%2FgGtJmszW%2BS0kpcV8lKxaW%2FMd2BF7xFG9x8gfrjhd50HWWmu8EQEKl0cGoOzFVG8nhDrtP02eYoKPysTwdc3Gal2CVMOaK7uu0LBzfzkVM1KqXgzFtZjgxZiipAKG7nFSBKgZ0db6o%2BF%2BWQ8BYu0dUVL5vytzhGDUTbgaO7SOffqusE65L2derPsiAzp0i4N2wxeTj8fwtHhBXUo10OkYSEiRSPFKISqA9OaupcaWR8AP68iT40b9BGsRpLfBCHDKgZ11jWy0Wj2J0VshKo1JnCDinnh63VJLTXdcxoBRZt2pBIg3p6giqs6UpBdGYJ1wocOGlpOIBoDfAXU3z3AXs6JljXfozS5%2Fx7JzXb8yuvlz3WK8nU1pSlySkVtcyHRmgT1kjnIkBssMR%2Bs509k19%2BwsPgIoBu4lgaFf0C4ZQ20%2FHbIbY%2F%2FT8lalnADLdTGX%2FOCKY%2FLyMLeVw8kGOqUBdDtsGzt8LNc%2BZUmokG%2BqdTMGrk%2BJRpq9GWdyImGfeqKIWD09WIFpZBTjAj%2BKwcT8xlDk%2BAPvdICA8Dcu0uke%2FlxSYsX5OgpKH0aSX%2BfwtlC0USSne8Q2scxM3bwbZwfHuRdjBpwdku2ZBwFnZQx%2BDkSVHeaep2S9vkNm6RVz1dGNH3AZg2XmrPGLjuB9i4k2b%2FbcZ6yxWfB%2FRYVSKHG4SMBogolz&X-Amz-Signature=e3a5cd75bf7c81b19fe8421edafb4c13c01661756cd87a3bb5696cbcf4a06228&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

