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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAQTJVBI%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T052853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCICXBChcsNwJ0pY0Yjl7h1kUAfvYvHYMPh%2FIBEZS3FEF6AiEA7QCqBEE69AVh8HVw7H8QTbdEXvkBIibhpV9hJyk0ouUq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDLUa0q%2F%2BjklwKLsgHyrcA5484sqGUkDWaFx23396Fhhhu%2BccoMOZM7bLofoIvlloYyBNeFtZD%2Fq8MP8fIb%2F9KDMhoedLNuZjhKEVHBEN0Ru6W35R2yrb%2BtCxNGWJl2wyQY2eJFtrWaZNDP9vpDx9fiXkwQmc6UZ7jllGCAo9j1d4%2BihFnk7GAFA3J7o6BRAw9Lhaxu%2B3KnlXAtP6C%2Bc29cEMSomRAv901YXNJJV8%2F2%2BvxSMAAC5BfkWE%2B3rz%2Fm6HMSYN9r%2FAc%2BMCL9abYRGlDexcesdrN4WSjiTrFKEyk6GnWGysSKyLMaQRj571rwkowK3tXLpnbXzLwojDguPMG0mz7VuKD%2BbruM3xTXyfut2xzH3SWvwww6FiHA8OPv8j3YHUjMs%2BTBpFSNFyWAfzF3gSvkYxw3JKk%2FJoi7qWJtCbO%2FWzb7rdwU0ohaS9qVK3sf2VxKxmOEaGcUrW9L5uDvRHF0itIFZt0OSFkXtqYy901Tio7VwGhAPf%2BXe2gZ124qwkrGFPPl1Nt7Ajs3izrho6YvWKWX76j6NwQbJp%2B%2BSDYK4s1Rx9fSYlt4vrqSb6jgEZlB%2FAqbHMu2Xya8S8Xonn9Q64xolTVupXV07izP8s29lTU9Es7kd43JCfWJvGNsAe74fBmdHRoCRuMNWWvskGOqUBzaw99JP6tYTvfhtPtfZruZ%2BalhfcWYWzvSqo5%2FObnZgTYbXd%2FubPV695%2Bjvr6AqypRCyWsdBWOq42rJgTtQoKZWE9UfRQcOasJdrrnuHGOF8yrg1ydUGl1p5L3tFzUIxoXhRXnWRRMiXprI%2FMz6bNKJgnmLy6dCHVABZILGpOyb%2FvsosdqfyX1s9ixLpnGYMNXaHkiOv2%2B2l6EXVALGPkm8ypZRv&X-Amz-Signature=d4b3a3dcc9c5cff325b5355bd85d604daf9132d5a555d2cb0b1cd28a285eb3ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAQTJVBI%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T052853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCICXBChcsNwJ0pY0Yjl7h1kUAfvYvHYMPh%2FIBEZS3FEF6AiEA7QCqBEE69AVh8HVw7H8QTbdEXvkBIibhpV9hJyk0ouUq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDLUa0q%2F%2BjklwKLsgHyrcA5484sqGUkDWaFx23396Fhhhu%2BccoMOZM7bLofoIvlloYyBNeFtZD%2Fq8MP8fIb%2F9KDMhoedLNuZjhKEVHBEN0Ru6W35R2yrb%2BtCxNGWJl2wyQY2eJFtrWaZNDP9vpDx9fiXkwQmc6UZ7jllGCAo9j1d4%2BihFnk7GAFA3J7o6BRAw9Lhaxu%2B3KnlXAtP6C%2Bc29cEMSomRAv901YXNJJV8%2F2%2BvxSMAAC5BfkWE%2B3rz%2Fm6HMSYN9r%2FAc%2BMCL9abYRGlDexcesdrN4WSjiTrFKEyk6GnWGysSKyLMaQRj571rwkowK3tXLpnbXzLwojDguPMG0mz7VuKD%2BbruM3xTXyfut2xzH3SWvwww6FiHA8OPv8j3YHUjMs%2BTBpFSNFyWAfzF3gSvkYxw3JKk%2FJoi7qWJtCbO%2FWzb7rdwU0ohaS9qVK3sf2VxKxmOEaGcUrW9L5uDvRHF0itIFZt0OSFkXtqYy901Tio7VwGhAPf%2BXe2gZ124qwkrGFPPl1Nt7Ajs3izrho6YvWKWX76j6NwQbJp%2B%2BSDYK4s1Rx9fSYlt4vrqSb6jgEZlB%2FAqbHMu2Xya8S8Xonn9Q64xolTVupXV07izP8s29lTU9Es7kd43JCfWJvGNsAe74fBmdHRoCRuMNWWvskGOqUBzaw99JP6tYTvfhtPtfZruZ%2BalhfcWYWzvSqo5%2FObnZgTYbXd%2FubPV695%2Bjvr6AqypRCyWsdBWOq42rJgTtQoKZWE9UfRQcOasJdrrnuHGOF8yrg1ydUGl1p5L3tFzUIxoXhRXnWRRMiXprI%2FMz6bNKJgnmLy6dCHVABZILGpOyb%2FvsosdqfyX1s9ixLpnGYMNXaHkiOv2%2B2l6EXVALGPkm8ypZRv&X-Amz-Signature=8dcbf0eab345feb55109be80bc31a13694499e1762683df6bb9642f026e49d3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

