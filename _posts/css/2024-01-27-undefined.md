---
layout: post
title: Tres Columnas en CSS con Flexbox
excerpt: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
categories: CSS
tags: [css flexbox]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIBRGMNW%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T012248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQDgms5GPy1VC%2F%2Bik79qdwWWTerv4jWnQ2ics8JMXH9NAwIhANGBxy3SiGf3EarHMKX7uct%2F7IYdOcmM8hog62LNbx4lKv8DCCIQABoMNjM3NDIzMTgzODA1IgxSnA3TBw%2FqOZuaABgq3AMuB4QoB%2BjpgTlDbDwDWlHF6Lkc%2FHzD6txNMiuHZkl6CAP3Ikd%2B8%2FauLuKEZCp7rLO1GQ%2BDLaKYyFutPFD0pZNjQBTyAaTRLbMWmmz8Va3z2AnLw71Ti1Hy0G2cgdlrKMPZ6NyJvZd9%2BJMdn6YNKc6mwX95VavctWP5l49jyUq1HI2e9G4bXKPhIY6QqfLyEh8ooKX3%2BYAzuoTzBS9YVYE5ksDrfsNneOY40N6SkN13W7Erxa0eIBtuSN8B5llO4bWXeoqMNZ6iIuygGrKhusO1AlkYy99r%2FSbCEwL6CLxyuQAY2Si9VOWuvYMKXxgIVbkJyQZdLWIYQS4MCrhxhPCL0t%2Bs4xloo794E9LBPPcC2izNkxzkIhzsMSkIAJdlx%2FY40ueJKdaftsTsePopBuP4oV%2BtIX8zCMD7inmYoeCQbViMbAAg9CuXzEP2NfAIKsqOPK%2BKckhj0Q5L2WOdk2jbKosfSX2pvGe0wRLlW%2BDIvoXLWf6ncp1iDsSi8DibqhLNmrPFL5tTcW58RWM40sHAnA6Sk6vNFe3JG7VBKERdO5ia9JxZIkBmwYqxfaD6JDqjNGqfqBZcM9NnbuVHCToBkr7fWpcb2hX%2F1xhwPuFHiol8BD7wFx%2BuzWXZcTCilr7JBjqkAXsQ2ThY2UfP8G7zKAqFC%2BF6L8INjQTuVT%2Fl5IYxga9ptpdQzlGioscHvZhAqeYrdNAyuXrLruVI4Hgo6rT5CmYwsE4IU2%2BypiWS0B8abvUFUKLmJFeqNyU9X7d5bOMhqUp0nmj1NoNIdWn%2BGx8s9%2F7a0aPnQvndQQ3ElVhuPsXxtQmNKh8OF3q4JO042x7au7HRASoURKvyrB2sgN6tiPgvXjjn&X-Amz-Signature=9deda661bc5717f744d7480b0b23a7fa65f42fb01028a9e3b74263c932f00314&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIBRGMNW%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T012248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQDgms5GPy1VC%2F%2Bik79qdwWWTerv4jWnQ2ics8JMXH9NAwIhANGBxy3SiGf3EarHMKX7uct%2F7IYdOcmM8hog62LNbx4lKv8DCCIQABoMNjM3NDIzMTgzODA1IgxSnA3TBw%2FqOZuaABgq3AMuB4QoB%2BjpgTlDbDwDWlHF6Lkc%2FHzD6txNMiuHZkl6CAP3Ikd%2B8%2FauLuKEZCp7rLO1GQ%2BDLaKYyFutPFD0pZNjQBTyAaTRLbMWmmz8Va3z2AnLw71Ti1Hy0G2cgdlrKMPZ6NyJvZd9%2BJMdn6YNKc6mwX95VavctWP5l49jyUq1HI2e9G4bXKPhIY6QqfLyEh8ooKX3%2BYAzuoTzBS9YVYE5ksDrfsNneOY40N6SkN13W7Erxa0eIBtuSN8B5llO4bWXeoqMNZ6iIuygGrKhusO1AlkYy99r%2FSbCEwL6CLxyuQAY2Si9VOWuvYMKXxgIVbkJyQZdLWIYQS4MCrhxhPCL0t%2Bs4xloo794E9LBPPcC2izNkxzkIhzsMSkIAJdlx%2FY40ueJKdaftsTsePopBuP4oV%2BtIX8zCMD7inmYoeCQbViMbAAg9CuXzEP2NfAIKsqOPK%2BKckhj0Q5L2WOdk2jbKosfSX2pvGe0wRLlW%2BDIvoXLWf6ncp1iDsSi8DibqhLNmrPFL5tTcW58RWM40sHAnA6Sk6vNFe3JG7VBKERdO5ia9JxZIkBmwYqxfaD6JDqjNGqfqBZcM9NnbuVHCToBkr7fWpcb2hX%2F1xhwPuFHiol8BD7wFx%2BuzWXZcTCilr7JBjqkAXsQ2ThY2UfP8G7zKAqFC%2BF6L8INjQTuVT%2Fl5IYxga9ptpdQzlGioscHvZhAqeYrdNAyuXrLruVI4Hgo6rT5CmYwsE4IU2%2BypiWS0B8abvUFUKLmJFeqNyU9X7d5bOMhqUp0nmj1NoNIdWn%2BGx8s9%2F7a0aPnQvndQQ3ElVhuPsXxtQmNKh8OF3q4JO042x7au7HRASoURKvyrB2sgN6tiPgvXjjn&X-Amz-Signature=65c0dd319930605afca27af49c59e13d29bb84ef62d55bf77df5d6392728f24e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

