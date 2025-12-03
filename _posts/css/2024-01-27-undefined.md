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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZX677SVG%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T030211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQDqKAffnENo%2FePMzEaIMp45QFreyvzSr%2FfJBIJgircsAAIgAzlddw8pFmNK39YuN4Bmqp06pRQpuz2IvLTw%2FSRHNEgq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDE00uzpYSItS2idbxyrcA%2Bzn5hZ1SjFWjGCQAGtGcuiE4Q4MfxFh12xYzkBPo2E8K1bGhGdQcbOwejWFQeVh3XbhAZOzVraxPNTXPAdZkXgFLUNwSMxVwZD9BwsiyfxVrAu3syJsmIxUneC1NkZdPzXo7zZDXJfaVGi1H3AYf0Ua52B51wwcOuh7uFFJTlZBwFJBaOCzsCUwSJV0jk%2BwxfK2ifX3oFE4bM3h3RMuKO9BlnbUbbdOAB4yiO6QOhGDBh2oVxYE4doBl1FD9y3t8NIl6Bqkc8XFHHyBST4bssb7LNjCINi4Li5O5hy%2BClzxWfaQCzO1lu%2BMxiSrTLr%2F8TKJwJ13cUpCk2tKpBrX0JNts7kiCvHF6WNaWF6xARR8IFIvK1rdyfLFK5Ro42edcDdfYYrqKJAFLMNg7uSN6mHZFs4vEEr82hV6fshh31dfpi5xKw99L8mAfjeYbnTCw%2BV%2FsWAfoL%2B9VEThVlWTBjACcayruncxJ6iE%2Bp%2FZuUQUxVEkXkHV%2FreIHrewyWPMek51b%2F1B7k7fKIz4Jb7lSzp6Bd1QW5hDS%2BRgth76E0l9DDk2T0gXxMtx3rgxk4T5XaqbtHfZLbQimFP0r2WUsa6rI48xEDU1nZk78bHCl3djlTkuoMu2DatWDxY5MKiUvskGOqUBUwVHJZkFSePSaCzMY47WmpeHurmXuvTdUty6FwJQ7uDEjEGTfY3ud9%2Bx0wiTtrdo1Sj438shK%2Faz%2B9dwo5MpmfEnDPYfH5ACg6lY0AXtzfDP%2B1vPnWjQKS9WUXOl34jorYyhztfH%2Fri5ISLcV8MedknihD%2FSh%2FJ88zuYuxUyRaovYW3SQmKyi3lQc%2FHNUommzg3h21vu61uPb7%2FiQ%2BzUAWziOSKX&X-Amz-Signature=a45a400179e9bee07c2a5b8bdef929a52bfd949bd786b6278db957be6dea350b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZX677SVG%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T030211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQDqKAffnENo%2FePMzEaIMp45QFreyvzSr%2FfJBIJgircsAAIgAzlddw8pFmNK39YuN4Bmqp06pRQpuz2IvLTw%2FSRHNEgq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDE00uzpYSItS2idbxyrcA%2Bzn5hZ1SjFWjGCQAGtGcuiE4Q4MfxFh12xYzkBPo2E8K1bGhGdQcbOwejWFQeVh3XbhAZOzVraxPNTXPAdZkXgFLUNwSMxVwZD9BwsiyfxVrAu3syJsmIxUneC1NkZdPzXo7zZDXJfaVGi1H3AYf0Ua52B51wwcOuh7uFFJTlZBwFJBaOCzsCUwSJV0jk%2BwxfK2ifX3oFE4bM3h3RMuKO9BlnbUbbdOAB4yiO6QOhGDBh2oVxYE4doBl1FD9y3t8NIl6Bqkc8XFHHyBST4bssb7LNjCINi4Li5O5hy%2BClzxWfaQCzO1lu%2BMxiSrTLr%2F8TKJwJ13cUpCk2tKpBrX0JNts7kiCvHF6WNaWF6xARR8IFIvK1rdyfLFK5Ro42edcDdfYYrqKJAFLMNg7uSN6mHZFs4vEEr82hV6fshh31dfpi5xKw99L8mAfjeYbnTCw%2BV%2FsWAfoL%2B9VEThVlWTBjACcayruncxJ6iE%2Bp%2FZuUQUxVEkXkHV%2FreIHrewyWPMek51b%2F1B7k7fKIz4Jb7lSzp6Bd1QW5hDS%2BRgth76E0l9DDk2T0gXxMtx3rgxk4T5XaqbtHfZLbQimFP0r2WUsa6rI48xEDU1nZk78bHCl3djlTkuoMu2DatWDxY5MKiUvskGOqUBUwVHJZkFSePSaCzMY47WmpeHurmXuvTdUty6FwJQ7uDEjEGTfY3ud9%2Bx0wiTtrdo1Sj438shK%2Faz%2B9dwo5MpmfEnDPYfH5ACg6lY0AXtzfDP%2B1vPnWjQKS9WUXOl34jorYyhztfH%2Fri5ISLcV8MedknihD%2FSh%2FJ88zuYuxUyRaovYW3SQmKyi3lQc%2FHNUommzg3h21vu61uPb7%2FiQ%2BzUAWziOSKX&X-Amz-Signature=8c2555ead3c6eea4c62311416b4231010fb1f9f4448cbbbde30c42ef3e2f1161&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

