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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664V7GCA4M%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T062959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIQDclbw%2BxS9cu8WXDNQSUWg50cAAvRCTNdLPTcE%2Bx7PjKwIgfvpF0EZqYstyifnN190NxWw0%2F9OsSDX00Z1OnaxG9hoq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDMb1pSZROMjZ%2B0qNeircAykhoQDOZeOAT%2Fb65eWVH8kGgAYV40o5ODU9IBsWGqQp%2FcivfPoUnQhf1qTwxMABqcSnlMQCJx9VUCRqSfiDC%2FV9br7XgtXj%2FMCB3PUphp0f09vorbrx0MVx4ONEZoHDVSAzPuKeFOteQqgeSgWCndb6zZWEX7f8rGtdLzJzWGvrTrrNDO8h3XPcjDO1W%2BfNgtorMpkoaDOsv0dZL6hsXRc3jpLYq47f0VIqkbjfoHAyxsdOI7YrsI4FceOpKv4ieWjUSZGrLTnKAbBlOuh001C6l6Aws3c%2F%2Fi7Ib6djzO2IF288xMHNsdvEPL2tkNAW8PvWvS5WiLzABN0CsBXQ%2FCuFgxOJyvkJ0W9diVhROVTHFUSJYooiZo0ODitvHIueWHwaii0E66zyzseUUN6wwBPff7FL5XK%2F5FjlbY9IwF9PrNS8DsxNMxmBnpnwr5g0FrFPA2AAhnas95Fh43f1BeP2gK5BELii4dzvrKS%2BrZpiJV%2B1LFDdY7SM9s4IbWzI5mwG1CE%2FEvKLFYWyOX9Lr%2B3%2FYhATRdv%2BkWqxsogRzSbBvr0wvunRXjtPR26uvnHJ6eEkX1%2BupG2zmwsdi3iPvX5ngezW2oa%2BftO8evt8ukh0pn%2FPbRVGtiCKxr2%2BMLOav8kGOqUBHeyIy4sfvjGhdl3AH5KjM24l%2B17GReM6WaRF8LokRkIyGWtKeYWYlVxpH0XXeSoA04o5tZCJxsQ34cZ4Wbk%2Bf09FJHjl05bvyUkTF%2B2kBXq6jqJHjrzZxCtck0OoH6%2F4bAXV8TvXVtYzAGBqYDREyFD6mYkyFjmzy6ZF89jaTauCbKM3Kwabks%2B4rXGCbtaUBszy20KKW3qK%2FrmDqg2qlUS%2BFiSB&X-Amz-Signature=2f589ddb15d998105eb544159bf9cfbb5b2bbe9986a6b62d0c612359d718f8c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664V7GCA4M%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T062959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIQDclbw%2BxS9cu8WXDNQSUWg50cAAvRCTNdLPTcE%2Bx7PjKwIgfvpF0EZqYstyifnN190NxWw0%2F9OsSDX00Z1OnaxG9hoq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDMb1pSZROMjZ%2B0qNeircAykhoQDOZeOAT%2Fb65eWVH8kGgAYV40o5ODU9IBsWGqQp%2FcivfPoUnQhf1qTwxMABqcSnlMQCJx9VUCRqSfiDC%2FV9br7XgtXj%2FMCB3PUphp0f09vorbrx0MVx4ONEZoHDVSAzPuKeFOteQqgeSgWCndb6zZWEX7f8rGtdLzJzWGvrTrrNDO8h3XPcjDO1W%2BfNgtorMpkoaDOsv0dZL6hsXRc3jpLYq47f0VIqkbjfoHAyxsdOI7YrsI4FceOpKv4ieWjUSZGrLTnKAbBlOuh001C6l6Aws3c%2F%2Fi7Ib6djzO2IF288xMHNsdvEPL2tkNAW8PvWvS5WiLzABN0CsBXQ%2FCuFgxOJyvkJ0W9diVhROVTHFUSJYooiZo0ODitvHIueWHwaii0E66zyzseUUN6wwBPff7FL5XK%2F5FjlbY9IwF9PrNS8DsxNMxmBnpnwr5g0FrFPA2AAhnas95Fh43f1BeP2gK5BELii4dzvrKS%2BrZpiJV%2B1LFDdY7SM9s4IbWzI5mwG1CE%2FEvKLFYWyOX9Lr%2B3%2FYhATRdv%2BkWqxsogRzSbBvr0wvunRXjtPR26uvnHJ6eEkX1%2BupG2zmwsdi3iPvX5ngezW2oa%2BftO8evt8ukh0pn%2FPbRVGtiCKxr2%2BMLOav8kGOqUBHeyIy4sfvjGhdl3AH5KjM24l%2B17GReM6WaRF8LokRkIyGWtKeYWYlVxpH0XXeSoA04o5tZCJxsQ34cZ4Wbk%2Bf09FJHjl05bvyUkTF%2B2kBXq6jqJHjrzZxCtck0OoH6%2F4bAXV8TvXVtYzAGBqYDREyFD6mYkyFjmzy6ZF89jaTauCbKM3Kwabks%2B4rXGCbtaUBszy20KKW3qK%2FrmDqg2qlUS%2BFiSB&X-Amz-Signature=3ffe9f01ef7301be7bde84024d43eb148d931cae98eb8af5f4548d89ded4ba72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

