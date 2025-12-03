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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IYF645I%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T101508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIDt%2BlPCgVr83aGAdqTTTbOPrhnK6S1fVxxzn%2F6RWhoarAiEAqIuPgzkLWphQA%2FN21MCd257zwiymM7zTtMu0poc14LIq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDCkVkUd8iG%2BXMwxSISrcA1WoRQ%2B1Jk%2FM%2BQBmvgULMuS%2Bf9caen2sSHpquOC05LIs%2F6z%2BvC%2FczaA3kR3Imnprh3VHasD3atsIqnMfhUHKKIN9HMjyf6HrZhgLIxNorriVqFecramCagyeSr5eD8QV283bEST0RBgJmBTRUszJPaZOMBs2aFHLfJVUmZRWouA9dy0tZLCejHlKKyoDel8%2FV9mHnjce56Hp9LngkhS67VQpqaXGTA6hIvkUg6FVnmj%2BYju0evzjfGDlRdbw8WdVvSDzcmN4n3nLETlFJGCO3FhlHmO7ahbpLPjahGUH%2FxzVEw0EO0t0CXJoIYcdvnG7EO3RpaUnInXPCGIlSv0GVIa4SyZqHYewZraYXrdfSqpn12noUnMpMZ9tn2FjZRt2TbT1EuJ85N9cPDM0JSrtPi6%2BSBEi9%2FctZBgOQNqK48SfY2fbQh9Nt2o4K3I3AeCYpVr20nGouGTPZGzIULDTAqxvUjRTPIXkewyIjOJWr6o7e7QlHUxKuxNsIY8eCc0%2FK2HQ%2FtpZDyP6XqgZ8KrHrdB1aXmbuIl%2FXOHZ8T2RhdSsGG40%2FXb%2FDYwrWA9rvaclmym%2BrFZS7XnPCQ6UHdJ%2F%2Btoo15syggjP%2FG%2BPgB8uFqaeXyJ0fEClMNFiph36MOiTwMkGOqUBuuIlulYhfmsWUw%2BlpyADoVVL8Dlyv0vTVvTPyY0HcOX5ZD18IHL0vvgATwv4sqsEDVjVl2kzDpe9Jns1VlLqVUbPIcKsMkioy%2Fxs0RDixbBmCcFD7jK1GPv3x0kVmCj9BWVA7JM7SBvQbPqxMAtpjcvTkmtxm3YQ1irapt8dSmcahqFV9rSo0XvyjRlnlhMCALifsutDnn9TV6rxzILqVXDjQAPn&X-Amz-Signature=19d359058cd22273cb381e567c5dcf3a8606b8476ec34ad5fb922a45327d7d28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IYF645I%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T101508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIDt%2BlPCgVr83aGAdqTTTbOPrhnK6S1fVxxzn%2F6RWhoarAiEAqIuPgzkLWphQA%2FN21MCd257zwiymM7zTtMu0poc14LIq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDCkVkUd8iG%2BXMwxSISrcA1WoRQ%2B1Jk%2FM%2BQBmvgULMuS%2Bf9caen2sSHpquOC05LIs%2F6z%2BvC%2FczaA3kR3Imnprh3VHasD3atsIqnMfhUHKKIN9HMjyf6HrZhgLIxNorriVqFecramCagyeSr5eD8QV283bEST0RBgJmBTRUszJPaZOMBs2aFHLfJVUmZRWouA9dy0tZLCejHlKKyoDel8%2FV9mHnjce56Hp9LngkhS67VQpqaXGTA6hIvkUg6FVnmj%2BYju0evzjfGDlRdbw8WdVvSDzcmN4n3nLETlFJGCO3FhlHmO7ahbpLPjahGUH%2FxzVEw0EO0t0CXJoIYcdvnG7EO3RpaUnInXPCGIlSv0GVIa4SyZqHYewZraYXrdfSqpn12noUnMpMZ9tn2FjZRt2TbT1EuJ85N9cPDM0JSrtPi6%2BSBEi9%2FctZBgOQNqK48SfY2fbQh9Nt2o4K3I3AeCYpVr20nGouGTPZGzIULDTAqxvUjRTPIXkewyIjOJWr6o7e7QlHUxKuxNsIY8eCc0%2FK2HQ%2FtpZDyP6XqgZ8KrHrdB1aXmbuIl%2FXOHZ8T2RhdSsGG40%2FXb%2FDYwrWA9rvaclmym%2BrFZS7XnPCQ6UHdJ%2F%2Btoo15syggjP%2FG%2BPgB8uFqaeXyJ0fEClMNFiph36MOiTwMkGOqUBuuIlulYhfmsWUw%2BlpyADoVVL8Dlyv0vTVvTPyY0HcOX5ZD18IHL0vvgATwv4sqsEDVjVl2kzDpe9Jns1VlLqVUbPIcKsMkioy%2Fxs0RDixbBmCcFD7jK1GPv3x0kVmCj9BWVA7JM7SBvQbPqxMAtpjcvTkmtxm3YQ1irapt8dSmcahqFV9rSo0XvyjRlnlhMCALifsutDnn9TV6rxzILqVXDjQAPn&X-Amz-Signature=6a21345bfecb514673864906b02d34b5507f206ff3c319c352a678920a16176d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

