---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHMINWEY%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T075558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA1oL6YX2fPFgy7Ma67f%2FSgX8t%2FwMIyYS2HTFK%2BYD28gAiEAl7E7FtS4pp3Bh5m%2BnLCzs0%2FHRidV79EdrV7st7g1et4q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDIYUCbBiP72dO47%2BHSrcA2lByw%2FjTZGa54UW7TvYpEr4PtfuSQEgd3JRx7MWFjQ%2FZPprGGDJCluONp2pE20eV9b80yCxdj4wUobfrlpA5lc16aeiucF%2Bv6yMySMDDZ8IP87btAOapT%2FOwOtygSMvBZ4xDerTFUJpJKctwx5ycE7dHKuO8wQ7P33WDkXqARUyKZ1A8MezJ5NCjX6M%2Bb1xhicI5BHLDwLShtsl2DT2im4bpSubZUtKBfqATGfSUeWKxOst%2BSMjwAD94lATkpr1KvK2eh7j%2BIPo%2F00FEl0a5jRQGu9PT9HlkjFonvIfN689XKjrdODB%2B8AnFNlrXJZlD%2FgNSOlic9Dew9goXBQ6HVSQ0gWalZnZ5MPHQi%2FW7YVkKc97KkusNDyEWvPjzd2czZJvI%2BA2DC9QUDJNiDolVk7T5tHPbuui%2Fi6PbrSmHV9j3m9N41v7PwT8xBsU3puxDgSGD%2FLr%2BPWJSVwTarOpZBKBT1TBrKz9V3jcUEWpT1L7USmiiySc1gKqHVpXh8QeCQ3fakZ8ITrUd6TCkGXn9n00NSn9fcu%2F9Ig0opdairjINYdYZ8OzygUp5PVOhOB2d8DhEBxuPEWMGUzFyYBnGuBWBsYa7S1vJagPPQ4n1hQNFthmKF1YCqmimOHiMOq8z8kGOqUBe84unyNUBc8Asjs2WDl01rikhTQrUEIZgP1LMr95SQV9AyBvYTtOhpVxw8csnRig8wfIsmIaHnxWqJvTFIXU6prrQ7s1snFFJzWV9n7gSp3OhXJcaT2uwQki7ZDn%2B1IbndMCEQKk7zu1rf0EtiPF2cmvobod936EXCe5TvpUdhDrJFOM4JsiWXsOea6X0ESkcMyoxGwNPp8w0r7mkfsukvpnXXmd&X-Amz-Signature=f0fe1c8659cfcc20d32f81069a1dc3253feb9f4d1b0f0c051c719feb4c45684d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHMINWEY%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T075558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA1oL6YX2fPFgy7Ma67f%2FSgX8t%2FwMIyYS2HTFK%2BYD28gAiEAl7E7FtS4pp3Bh5m%2BnLCzs0%2FHRidV79EdrV7st7g1et4q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDIYUCbBiP72dO47%2BHSrcA2lByw%2FjTZGa54UW7TvYpEr4PtfuSQEgd3JRx7MWFjQ%2FZPprGGDJCluONp2pE20eV9b80yCxdj4wUobfrlpA5lc16aeiucF%2Bv6yMySMDDZ8IP87btAOapT%2FOwOtygSMvBZ4xDerTFUJpJKctwx5ycE7dHKuO8wQ7P33WDkXqARUyKZ1A8MezJ5NCjX6M%2Bb1xhicI5BHLDwLShtsl2DT2im4bpSubZUtKBfqATGfSUeWKxOst%2BSMjwAD94lATkpr1KvK2eh7j%2BIPo%2F00FEl0a5jRQGu9PT9HlkjFonvIfN689XKjrdODB%2B8AnFNlrXJZlD%2FgNSOlic9Dew9goXBQ6HVSQ0gWalZnZ5MPHQi%2FW7YVkKc97KkusNDyEWvPjzd2czZJvI%2BA2DC9QUDJNiDolVk7T5tHPbuui%2Fi6PbrSmHV9j3m9N41v7PwT8xBsU3puxDgSGD%2FLr%2BPWJSVwTarOpZBKBT1TBrKz9V3jcUEWpT1L7USmiiySc1gKqHVpXh8QeCQ3fakZ8ITrUd6TCkGXn9n00NSn9fcu%2F9Ig0opdairjINYdYZ8OzygUp5PVOhOB2d8DhEBxuPEWMGUzFyYBnGuBWBsYa7S1vJagPPQ4n1hQNFthmKF1YCqmimOHiMOq8z8kGOqUBe84unyNUBc8Asjs2WDl01rikhTQrUEIZgP1LMr95SQV9AyBvYTtOhpVxw8csnRig8wfIsmIaHnxWqJvTFIXU6prrQ7s1snFFJzWV9n7gSp3OhXJcaT2uwQki7ZDn%2B1IbndMCEQKk7zu1rf0EtiPF2cmvobod936EXCe5TvpUdhDrJFOM4JsiWXsOea6X0ESkcMyoxGwNPp8w0r7mkfsukvpnXXmd&X-Amz-Signature=5408d06b39de9c739d04a6f287a35e6c8ab0298b8f04c206257e15db305d3b55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

