---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4ZAEW42%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T224653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzFpBxjMRb%2FY%2FMob3YLT1iz87UoVOOwa8vn9yk5J2TJQIgB3y68NBCmNjO3DzmPjfKJQ5i9%2F8d9W5bwC2WNGqbfPkqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD9UxcymwNMeWvGBRyrcA%2F4l77rpm8f19AlTcjF2Mpd3cOEm9S7rEtZoZklBbbNIN1tL9niSCaIodU3w3IgawBc19PeLNtlguFRc0aQLg1%2F4cuow3Tg7KZidarodKfrjJxFL2nWib%2FvKxgxK9EpOdG9iOsczzuZd3dJeiLAd60B%2FVOMzxHwiQrZGFgliSFivTv7iObCw8onrJ3B9gwvW58LUr0dyrlmQRSjwqD%2BkzxWtn3hFvgOdXrnx8xsPoL14f%2FLtklKJUNUFT%2BKVUJQlHAvd9GM5%2FDjIsGljJ7ViYHKY8RVzB9iprAq2%2BFqM62BHGmMZg34y9dirxqvKN01ei91XvW8X4pAYwTRU%2Fc7QQvujGIapNfUF0O6N%2BoZWvZ%2BgeI%2B1JauWHXYTszAv3MIlr9pFs%2FSexB%2Fq01YmpI8bldOAxtb0b3XDqM7q13exUemjyEsrmIlsWH%2FHpmyKXcK%2BHOlA3febW9EhW5%2BU67OJ3u%2FEaHAV5f%2B5%2BXPKPIP4XUXAwwPyCSrdlgo8h8t8fFJQ6n4K8%2Bkmkyij8IFn3oV%2Bw02vftHJwu6aQB0HnZEs0w5H1Gk4wiGr6qKC5lnFvfa7K4U80ZnrnA%2FT7YL%2F31Bjsjnl71xL1XFTGM5j%2FZQmrcHAbhwCQPicZDQSBy7qMKKF2MkGOqUBf57cYtvH774J8TMJYRcfdG6mE%2FSmShnWtZdHQZVaZIv3bxZ6iQ8LFnZgqktzzmoDTg17pp01EUrEKTf4UlSe9j5x3V%2BGb8%2B8pNKcXvnJsEt5BIViPLW2N0%2F0SCH0tCgi7NA%2BBArc8tIvcEq8QYaedSNe%2BxNlEPPp719l8vf6NqVmnbq%2FHDrSUoI%2BXwGhcde3L3UHDKGcxQ0HWK6Zw%2BQe7A0pEB8n&X-Amz-Signature=9121c12a3d2ed0da68fb6cb27383d45c766f624a8af27f59cf160a44a065cab8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4ZAEW42%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T224653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzFpBxjMRb%2FY%2FMob3YLT1iz87UoVOOwa8vn9yk5J2TJQIgB3y68NBCmNjO3DzmPjfKJQ5i9%2F8d9W5bwC2WNGqbfPkqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD9UxcymwNMeWvGBRyrcA%2F4l77rpm8f19AlTcjF2Mpd3cOEm9S7rEtZoZklBbbNIN1tL9niSCaIodU3w3IgawBc19PeLNtlguFRc0aQLg1%2F4cuow3Tg7KZidarodKfrjJxFL2nWib%2FvKxgxK9EpOdG9iOsczzuZd3dJeiLAd60B%2FVOMzxHwiQrZGFgliSFivTv7iObCw8onrJ3B9gwvW58LUr0dyrlmQRSjwqD%2BkzxWtn3hFvgOdXrnx8xsPoL14f%2FLtklKJUNUFT%2BKVUJQlHAvd9GM5%2FDjIsGljJ7ViYHKY8RVzB9iprAq2%2BFqM62BHGmMZg34y9dirxqvKN01ei91XvW8X4pAYwTRU%2Fc7QQvujGIapNfUF0O6N%2BoZWvZ%2BgeI%2B1JauWHXYTszAv3MIlr9pFs%2FSexB%2Fq01YmpI8bldOAxtb0b3XDqM7q13exUemjyEsrmIlsWH%2FHpmyKXcK%2BHOlA3febW9EhW5%2BU67OJ3u%2FEaHAV5f%2B5%2BXPKPIP4XUXAwwPyCSrdlgo8h8t8fFJQ6n4K8%2Bkmkyij8IFn3oV%2Bw02vftHJwu6aQB0HnZEs0w5H1Gk4wiGr6qKC5lnFvfa7K4U80ZnrnA%2FT7YL%2F31Bjsjnl71xL1XFTGM5j%2FZQmrcHAbhwCQPicZDQSBy7qMKKF2MkGOqUBf57cYtvH774J8TMJYRcfdG6mE%2FSmShnWtZdHQZVaZIv3bxZ6iQ8LFnZgqktzzmoDTg17pp01EUrEKTf4UlSe9j5x3V%2BGb8%2B8pNKcXvnJsEt5BIViPLW2N0%2F0SCH0tCgi7NA%2BBArc8tIvcEq8QYaedSNe%2BxNlEPPp719l8vf6NqVmnbq%2FHDrSUoI%2BXwGhcde3L3UHDKGcxQ0HWK6Zw%2BQe7A0pEB8n&X-Amz-Signature=cf01d8bc6b552df1d0d49b396bec689eac321ddde09ee8b67cb692dd9bf10f20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

