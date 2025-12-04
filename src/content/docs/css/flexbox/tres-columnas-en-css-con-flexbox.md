---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652SBDNTH%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T121534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIB6OxJOVYGEJVtpdYnUy9D%2FZk8JjvItojO3XngmvjgizAiBB8S1ei8s6eSrLgTUTBAf8%2FpRTRMC013xtZ8eiHQ134Sr%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMIsBUaD2bwpV6oGuAKtwDUII4uBlhoUbgn7SXtvAdMOdRt2jIPDdQCJKD5wJknHdXZzV5krF9KI8bRCTP0t2hzJo9p5%2BFjWIbUcBwQudRbwXkRsu8wCEHIMFf3QqAXK72NojTfpdFNsc9x6ebOnLrHbgvPnS1SM8KrYhw5s%2FrDaaUljbA83U%2BMujrfj9KqJXCCy1OnvrAv4UQsr2wHf5HdBWAOxVcUprZf5VWsLGrEiFqFHaHaG6epN8tameHGm%2B7Lgx8%2F75sRlL8lZVTqADQIY%2BRxBbdzyImxo6rcv2tf3u8qzkChl%2FemqoagD5TfBaUrH%2BIz1%2BVBkvpKGR0dgjjhinaNR%2FPktq%2FVoLOfI4dKlpBk9t0a8eUbbyyRQDqJuOR8IALt0%2BNpOrIrQ%2BdlXOi3ZNTlzPRiBpC72jp%2FZj6FLn2In5YKqaedUcMU1c5Ot4K5X118%2F8EpEKV8yKEiQzm%2FZXpD4MpaXGrcG%2FaVYhuTQ7lZ%2BDnU2Y1reqdw1Ih2jrbxLRvia2R0DyvCe%2B6UdGBHaiaYd3Z7%2BtybFytyhQJUYA%2BzEIoRCquYehVjpnHcJYFkwlVvvIHVHanGmcavDNAgzbiz56dEXtFS%2FDLMEcdKwSdEbr25Up5xl84O9iBRl72e6p%2F%2BQARAnx1epswsebFyQY6pgG09nG3Y59%2B7eosX9pLJUcRzk1y%2BJ77W0lppz697s%2FyrwxZnB22Y9mU1RNpRtVeqEYMTbEJxq2RDSGtccPn4UiLevMn0tg3cAO3dy3OTN0xy8lKQnGo7%2FjriYmLiGc0CtIV5wOYcqIMabeoct9TG3LsWg5R2Hwl8cnxPY%2BfYSImPpstAOuBLqSGzMfZnrSdWi5l8hX4sUOsiVqa6jErYySt6qCw6m3B&X-Amz-Signature=0048cbd3f779516fab6dc7f0cd09e49989891744669331bd2fc2845bba519297&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652SBDNTH%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T121534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIB6OxJOVYGEJVtpdYnUy9D%2FZk8JjvItojO3XngmvjgizAiBB8S1ei8s6eSrLgTUTBAf8%2FpRTRMC013xtZ8eiHQ134Sr%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMIsBUaD2bwpV6oGuAKtwDUII4uBlhoUbgn7SXtvAdMOdRt2jIPDdQCJKD5wJknHdXZzV5krF9KI8bRCTP0t2hzJo9p5%2BFjWIbUcBwQudRbwXkRsu8wCEHIMFf3QqAXK72NojTfpdFNsc9x6ebOnLrHbgvPnS1SM8KrYhw5s%2FrDaaUljbA83U%2BMujrfj9KqJXCCy1OnvrAv4UQsr2wHf5HdBWAOxVcUprZf5VWsLGrEiFqFHaHaG6epN8tameHGm%2B7Lgx8%2F75sRlL8lZVTqADQIY%2BRxBbdzyImxo6rcv2tf3u8qzkChl%2FemqoagD5TfBaUrH%2BIz1%2BVBkvpKGR0dgjjhinaNR%2FPktq%2FVoLOfI4dKlpBk9t0a8eUbbyyRQDqJuOR8IALt0%2BNpOrIrQ%2BdlXOi3ZNTlzPRiBpC72jp%2FZj6FLn2In5YKqaedUcMU1c5Ot4K5X118%2F8EpEKV8yKEiQzm%2FZXpD4MpaXGrcG%2FaVYhuTQ7lZ%2BDnU2Y1reqdw1Ih2jrbxLRvia2R0DyvCe%2B6UdGBHaiaYd3Z7%2BtybFytyhQJUYA%2BzEIoRCquYehVjpnHcJYFkwlVvvIHVHanGmcavDNAgzbiz56dEXtFS%2FDLMEcdKwSdEbr25Up5xl84O9iBRl72e6p%2F%2BQARAnx1epswsebFyQY6pgG09nG3Y59%2B7eosX9pLJUcRzk1y%2BJ77W0lppz697s%2FyrwxZnB22Y9mU1RNpRtVeqEYMTbEJxq2RDSGtccPn4UiLevMn0tg3cAO3dy3OTN0xy8lKQnGo7%2FjriYmLiGc0CtIV5wOYcqIMabeoct9TG3LsWg5R2Hwl8cnxPY%2BfYSImPpstAOuBLqSGzMfZnrSdWi5l8hX4sUOsiVqa6jErYySt6qCw6m3B&X-Amz-Signature=bc983735adf7f21abd004a41662fe00403fc9afc5afd51091be4205024ac8568&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

