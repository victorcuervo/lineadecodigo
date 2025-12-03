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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ANKSGFD%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T024835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIHVwOCEbJQXEkgH57h%2BMyzWRLY7IYDKMiBurZyADuw0IAiEA4ENd9a9ikOY1a9XZb4XE6%2BSJsBG8C5uzI61KM9D2c74q%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDJyKdYbrD409SXpGySrcA%2Fwk%2B0BNIKjpiwteomaeJgzHD3KH2LiASE3vUez%2BtAdUwBezQ22tx30uw4cqAtLsfhVa2spx3ZkQh89vpsqRZYSx1sNw1%2BrMBzzc%2BV%2F3Ub%2B8SFgTur3Prg6iEge25QtJippp8exvOG0gFAHKfM8X7FbTJonmWDn8lZijqYD5RRjZWcBg23k0gWSePSf6165bXhZYOmBk%2Fus%2FYzAjhSYfTmfrg5dS15urefOcjh87rYjcNqix9r35IdJ3vR58iOW6cIwo6OaZsqmqPma26RDUApY9qq7ayjJqQFrYxeNQqL8V60rI5PQ2ULa8CCeaJovL06b4J3nw3udmZfZVKcrY8WwL8MNrB5XqX93vRFGo6afzYCbrj9LYnfOkXajtsTfrdJHgEoK%2FUWiV2DZStjBHtD1%2BAv8gDFshFWvxwyCZWF3gxA2JBObezfspy937ts0NYOgaiDdEdEdmTyLYLhnpqEz591pmRsmpwMASDpH0wE5QrNo6Py5cM4KZcSHE3HeB6jWj3QU4WtPFbaRFloK86NTl6TZ%2F2L4RrIzcrHOUB0G4pAid2FhEeYBdihzFvEc8QnKxneqo0LNqcn37UPOQ%2BuSjcC42SG5h7NMyrmfkRctACHUGDYVgDx93iVoRMNGUvskGOqUB93F5ULUKwn%2FUPMc1BMd%2BGa2Q3L6ejYoIR1QdSPXHWPDl5ba92B8HpJnejkl6B4qHVpXMwKs7ujlSS%2BBgfoeMkEjEGZk8l2DgmFx4JzDzV9gWtxTtBUhqd2ypHsg2K5MARXWaYiq1KWAdYAWOREC3vZOKacTlKtd98gi2x2hs6p9lnp0%2FzmumNLTttztYncDMA9kVTwrj%2BknxoSZJ9b5PwWIpt972&X-Amz-Signature=f3a193ea51a7b22c97c50cd8acb953ec8112de2e690fe018c469181f59d6e7f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ANKSGFD%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T024835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIHVwOCEbJQXEkgH57h%2BMyzWRLY7IYDKMiBurZyADuw0IAiEA4ENd9a9ikOY1a9XZb4XE6%2BSJsBG8C5uzI61KM9D2c74q%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDJyKdYbrD409SXpGySrcA%2Fwk%2B0BNIKjpiwteomaeJgzHD3KH2LiASE3vUez%2BtAdUwBezQ22tx30uw4cqAtLsfhVa2spx3ZkQh89vpsqRZYSx1sNw1%2BrMBzzc%2BV%2F3Ub%2B8SFgTur3Prg6iEge25QtJippp8exvOG0gFAHKfM8X7FbTJonmWDn8lZijqYD5RRjZWcBg23k0gWSePSf6165bXhZYOmBk%2Fus%2FYzAjhSYfTmfrg5dS15urefOcjh87rYjcNqix9r35IdJ3vR58iOW6cIwo6OaZsqmqPma26RDUApY9qq7ayjJqQFrYxeNQqL8V60rI5PQ2ULa8CCeaJovL06b4J3nw3udmZfZVKcrY8WwL8MNrB5XqX93vRFGo6afzYCbrj9LYnfOkXajtsTfrdJHgEoK%2FUWiV2DZStjBHtD1%2BAv8gDFshFWvxwyCZWF3gxA2JBObezfspy937ts0NYOgaiDdEdEdmTyLYLhnpqEz591pmRsmpwMASDpH0wE5QrNo6Py5cM4KZcSHE3HeB6jWj3QU4WtPFbaRFloK86NTl6TZ%2F2L4RrIzcrHOUB0G4pAid2FhEeYBdihzFvEc8QnKxneqo0LNqcn37UPOQ%2BuSjcC42SG5h7NMyrmfkRctACHUGDYVgDx93iVoRMNGUvskGOqUB93F5ULUKwn%2FUPMc1BMd%2BGa2Q3L6ejYoIR1QdSPXHWPDl5ba92B8HpJnejkl6B4qHVpXMwKs7ujlSS%2BBgfoeMkEjEGZk8l2DgmFx4JzDzV9gWtxTtBUhqd2ypHsg2K5MARXWaYiq1KWAdYAWOREC3vZOKacTlKtd98gi2x2hs6p9lnp0%2FzmumNLTttztYncDMA9kVTwrj%2BknxoSZJ9b5PwWIpt972&X-Amz-Signature=741238e5ecc6fc96cbd796f6b3d5f3db5204b07e8d03e47b2b6670b18f6bae15&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

