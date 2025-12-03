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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSMAJHIP%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T054525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCIAxcUklvC7BDkKJlAgfKjAYZigKiInIjoCZn1kGlswXoAiAS2axfWgz908ziwatdoMg7kVb0fAVuIFkAQcRBfo%2Bstir%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMfjP6GUpkIE4gLO8fKtwDAloJDkwa%2FRwgKoHoFWD6T8WYnwxlvDPqJDdrVZmkdGITItGdhKdvnrg2AqxRUvsWFWsaaxefeS49WE4jyQXv6O1KXuexlVs3EDbba8tP%2Fb5Nir3LVD%2FlNi9o41Y5V3KudqO3hyzfjYjaRf%2FyU4S0XQD9P3viUFLgeAJQT247nWGpeHtdJu%2B09fNHfsvJy3bIc2aV4bVjreJG0J%2FRZf8kLey9i66SBo5QxlqmfCXm6Jup0Vo4OymUhP%2FpzG5U7EACKg7pgMlMesILT7nJatj2%2Bj%2Ft6%2F6qygIwJVGDoIFnQ8oCgtsMOdq3Br7rI1uuxOUGsg33f8%2BprZuUucBb3%2BwRd2%2Fr1UOZVQhswnU8rBjygNn14bP1EJXt68wawu5hSIBpizj387fc28XaZ1brKK5rm19PvVM05%2FL4p0T%2BXCbtkdbs8%2BN3P2ea0L63t9Nyf2S4yteUKokaT%2Beo3o7mSEB1hD3vCDLnyVhZPLfrSuvaeaFaIjSVCPoqSvYy%2BK%2BpdnSlq9pIwq78f2T3DCHHrO79d%2F%2BteQanl49BukRxXCJyCkJqGa2Nl2SDswiKTmR6F2dptcb47pciLWYDe%2BbAP7aO3PBVt4TLGj4goCauj0JragPPhYX5GJgZ4fqrOjYwgpu%2FyQY6pgGzV6dhQa%2Fsrl1PT7vMtAsnpY4XyI8zgo1NaTP0DdxJscm1oqRkAi12n4mwXWjL6TZjg6ZA%2F7qqQY%2FS7AsDPuPTm7yJY5Ak%2F6EC7mKJ4XSQuQyskptyCHP4xquuJHhtS653wIpDQ4WGqG8cfKnDmGpha8ZdfCTLXasXWqiyvF3SKO4zwU44Nohdcz7xyW3ZjO%2BAwd5Gd2UxEKNUxEUu9CqXaJ4OCIy8&X-Amz-Signature=59620d08f12e2208ad3c48515b8899c9e8f51222d24cb0a75479d69c8f3bfefa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSMAJHIP%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T054525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCIAxcUklvC7BDkKJlAgfKjAYZigKiInIjoCZn1kGlswXoAiAS2axfWgz908ziwatdoMg7kVb0fAVuIFkAQcRBfo%2Bstir%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMfjP6GUpkIE4gLO8fKtwDAloJDkwa%2FRwgKoHoFWD6T8WYnwxlvDPqJDdrVZmkdGITItGdhKdvnrg2AqxRUvsWFWsaaxefeS49WE4jyQXv6O1KXuexlVs3EDbba8tP%2Fb5Nir3LVD%2FlNi9o41Y5V3KudqO3hyzfjYjaRf%2FyU4S0XQD9P3viUFLgeAJQT247nWGpeHtdJu%2B09fNHfsvJy3bIc2aV4bVjreJG0J%2FRZf8kLey9i66SBo5QxlqmfCXm6Jup0Vo4OymUhP%2FpzG5U7EACKg7pgMlMesILT7nJatj2%2Bj%2Ft6%2F6qygIwJVGDoIFnQ8oCgtsMOdq3Br7rI1uuxOUGsg33f8%2BprZuUucBb3%2BwRd2%2Fr1UOZVQhswnU8rBjygNn14bP1EJXt68wawu5hSIBpizj387fc28XaZ1brKK5rm19PvVM05%2FL4p0T%2BXCbtkdbs8%2BN3P2ea0L63t9Nyf2S4yteUKokaT%2Beo3o7mSEB1hD3vCDLnyVhZPLfrSuvaeaFaIjSVCPoqSvYy%2BK%2BpdnSlq9pIwq78f2T3DCHHrO79d%2F%2BteQanl49BukRxXCJyCkJqGa2Nl2SDswiKTmR6F2dptcb47pciLWYDe%2BbAP7aO3PBVt4TLGj4goCauj0JragPPhYX5GJgZ4fqrOjYwgpu%2FyQY6pgGzV6dhQa%2Fsrl1PT7vMtAsnpY4XyI8zgo1NaTP0DdxJscm1oqRkAi12n4mwXWjL6TZjg6ZA%2F7qqQY%2FS7AsDPuPTm7yJY5Ak%2F6EC7mKJ4XSQuQyskptyCHP4xquuJHhtS653wIpDQ4WGqG8cfKnDmGpha8ZdfCTLXasXWqiyvF3SKO4zwU44Nohdcz7xyW3ZjO%2BAwd5Gd2UxEKNUxEUu9CqXaJ4OCIy8&X-Amz-Signature=e0d5bb9a2338d4708ae26edc4c087c37a06d0c0043beb77b7d2f560e500c7961&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

