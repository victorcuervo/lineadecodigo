---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTG5RUWG%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T055823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHqJlqADz1Jw4kn%2FVcW%2Fb5jLCqGUj9k6x3AVQ%2F55TRZ5AiEA%2BQ%2Fe5jiIhwATbJeFme5XPp9gBTHSQXgWmtABNd4OCSUq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDN3h1w80nnikeNR%2F1yrcA%2FYqVyOOMuiLfsk5HlQ4rGfGy1FoOybGZwq5HmzMZ9y1xXw9b9gSUMWJNziGUVdIYuLiJFwd%2FJd3HQbkvdnFaP%2BhaCk5cxv%2BgzEdzgzpDpWumfzERdRVTWM9MBSQauUeYa%2FmCDEV%2BWFcqt2Ruj7rHxDxHegf3yBPdOfzI4ill8oAJ9a8BW%2BnlKNe5LRiCrHgJPup4Ner0wfCuFqb1RNJMWTyjIFSqOrfB6LvLlFG1ly6NhqkoJRaJ7d8VmFohIV15uprH2ZpS3wCe7I632umHNdyCOXmZshlU7NJPHfdQSGuQ6yLoq7%2FmCOwMehFQZwKJt9GEJR8mY1JW0walxKWLHOaLEEAelF3sbATZcull%2Bz0M1PVQNOfu%2FnexiFX%2BKtvuDvGLk4l4sYZSxZ%2By30rcBOcRX0HFHH0k9EuvxMqg64A77Ti3jRcnOjtYmtCvUGUUuevxcltDRQEH9nV0fSsB3lp2h15MSJYpcUVJqcbXiKmPOPuPapkcw1CLYFrwyAqI306D%2BYAH5jHFUswoWWm78uHjqqWAYuV1CPkioYzC5REo8Zm2kOCitBNQuqOLimjd9FrKLZeRdptzKOaHGr%2BMiWRfjCt%2Bh6GUHaCSXrEKSM%2BQly%2FtEhXKBlfHXjcMOWvyckGOqUBg%2BYXMTTEvDMmMsmjN%2B40Z7UqjH9u7pNdI49rrsOHVvWJCkjWh%2BzIXOg394oMR2Lb%2FExPhGv4oLHK2Ls%2FKHPpju8A335MSUT%2FEbxM7E3znBYnHWKAtoGfQshjFjK64zPie7KGQkV%2BYZh3lvjHghKGDavyMxdbye5aS9fuiqkRYtintnsEMwIcAoUlbun%2BQTIw6Ju2qikUwVIQbIM6jMpP%2B4BLuLWs&X-Amz-Signature=4ef3817bc4f34cb51ce4416dc27b716e3a988d3e4b574a6f5f5970cf169d448e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTG5RUWG%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T055823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHqJlqADz1Jw4kn%2FVcW%2Fb5jLCqGUj9k6x3AVQ%2F55TRZ5AiEA%2BQ%2Fe5jiIhwATbJeFme5XPp9gBTHSQXgWmtABNd4OCSUq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDN3h1w80nnikeNR%2F1yrcA%2FYqVyOOMuiLfsk5HlQ4rGfGy1FoOybGZwq5HmzMZ9y1xXw9b9gSUMWJNziGUVdIYuLiJFwd%2FJd3HQbkvdnFaP%2BhaCk5cxv%2BgzEdzgzpDpWumfzERdRVTWM9MBSQauUeYa%2FmCDEV%2BWFcqt2Ruj7rHxDxHegf3yBPdOfzI4ill8oAJ9a8BW%2BnlKNe5LRiCrHgJPup4Ner0wfCuFqb1RNJMWTyjIFSqOrfB6LvLlFG1ly6NhqkoJRaJ7d8VmFohIV15uprH2ZpS3wCe7I632umHNdyCOXmZshlU7NJPHfdQSGuQ6yLoq7%2FmCOwMehFQZwKJt9GEJR8mY1JW0walxKWLHOaLEEAelF3sbATZcull%2Bz0M1PVQNOfu%2FnexiFX%2BKtvuDvGLk4l4sYZSxZ%2By30rcBOcRX0HFHH0k9EuvxMqg64A77Ti3jRcnOjtYmtCvUGUUuevxcltDRQEH9nV0fSsB3lp2h15MSJYpcUVJqcbXiKmPOPuPapkcw1CLYFrwyAqI306D%2BYAH5jHFUswoWWm78uHjqqWAYuV1CPkioYzC5REo8Zm2kOCitBNQuqOLimjd9FrKLZeRdptzKOaHGr%2BMiWRfjCt%2Bh6GUHaCSXrEKSM%2BQly%2FtEhXKBlfHXjcMOWvyckGOqUBg%2BYXMTTEvDMmMsmjN%2B40Z7UqjH9u7pNdI49rrsOHVvWJCkjWh%2BzIXOg394oMR2Lb%2FExPhGv4oLHK2Ls%2FKHPpju8A335MSUT%2FEbxM7E3znBYnHWKAtoGfQshjFjK64zPie7KGQkV%2BYZh3lvjHghKGDavyMxdbye5aS9fuiqkRYtintnsEMwIcAoUlbun%2BQTIw6Ju2qikUwVIQbIM6jMpP%2B4BLuLWs&X-Amz-Signature=ad05c99d96695d364dd46dd9848da92cb2b6abc562085963cbc2dbb05cad6a02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

