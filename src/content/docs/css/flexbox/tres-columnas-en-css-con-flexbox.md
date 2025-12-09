---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXVQAB6H%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T000447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDom9sheY2GGGT09wSMKALOEcdchGKpMrV3HysKXJRBZwIhAOxNTwSZn7bpUUv8aNKVJs9GfEUFAjGX8haDUSUm1sr1KogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxcCkDN8jFrZdcWLAMq3ANSdYDYmuVdoj%2FF71%2FGuhXSdZlLY0j91QXrSYRr3atB%2FKRZkLIsg9LADjLJvj2Eugb8FQZB3QxbuOETI5e2Vu21lFYyeuFFPUFOHxay%2FqHPO7Cs2o8f2yjVxTaoViF99U1mWnnDf1nvow2NrcV75gEJFB1ktUCe230%2FOLqNYvXXiGMw046muKZbVZZCdWXnC7JCWietvH1Coeg2Bs%2Fhh2qkTZl4eXCe0fQu9nKIAilE%2FDA1FEEVZ88EeoMZZPNHyHIJY1IJeFLeop78gWscmKOpWAYKyzDjtTmyc7FV7yoLu8xsvMlcoUv6HIHcLCIn6lwF%2FydmsMAJGqX1XFeeuAvnxWnxG1UZVwitDsoV5ryQYgKxWBX91x2Rj%2B2SX3VGXzBFZnzU1%2F9poX0EU436FMl5dz1LY6WW7BRufGusz1Ckshs6dpyUc2drbPFaSpKwjh3IW8aZdXe4%2FpxDXPn%2Bla1kN6gq2ieAtzxkw2YCjey7x%2Ffvdd3GY93M5Nj2PRGvTaGJlCoXMkh5ntuDqYeIPh6oG5bgVvgo6lm5Sz5YX5L44SNFGSYhgWgKz6wNJl%2FJVSCD26u91UdXou1eNJrZO2xlzMo1VUY5TO1CJPQI28U%2B%2F9V5YibLjMltw22sPjDwwt3JBjqkAX1OOT8153Tx5zgI%2Bvq9obRrwYNyXW2%2BfbLTg0HLDSdVlxeYK6G9jltBpknL%2FkvZUzOw0GhzXWObK%2FarTAA6m0GOKl6%2F459ygFhEmVGOWNZlbPnM342kB0qLMZ7g%2Bqqw7Dba%2Fjj8C9pkFr8bJHO2U5Mu5UNZHvkw%2BMTPHGIpqKRkR5CjyDiNhlPEfGA6JQt2hQKOdGY2IKL0K%2BmJlxM0jzQmqxyg&X-Amz-Signature=cfad726486fc63a989c7df8851fd2268a72d7af567e41d4b8468dfa4c08a2e45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXVQAB6H%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T000447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDom9sheY2GGGT09wSMKALOEcdchGKpMrV3HysKXJRBZwIhAOxNTwSZn7bpUUv8aNKVJs9GfEUFAjGX8haDUSUm1sr1KogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxcCkDN8jFrZdcWLAMq3ANSdYDYmuVdoj%2FF71%2FGuhXSdZlLY0j91QXrSYRr3atB%2FKRZkLIsg9LADjLJvj2Eugb8FQZB3QxbuOETI5e2Vu21lFYyeuFFPUFOHxay%2FqHPO7Cs2o8f2yjVxTaoViF99U1mWnnDf1nvow2NrcV75gEJFB1ktUCe230%2FOLqNYvXXiGMw046muKZbVZZCdWXnC7JCWietvH1Coeg2Bs%2Fhh2qkTZl4eXCe0fQu9nKIAilE%2FDA1FEEVZ88EeoMZZPNHyHIJY1IJeFLeop78gWscmKOpWAYKyzDjtTmyc7FV7yoLu8xsvMlcoUv6HIHcLCIn6lwF%2FydmsMAJGqX1XFeeuAvnxWnxG1UZVwitDsoV5ryQYgKxWBX91x2Rj%2B2SX3VGXzBFZnzU1%2F9poX0EU436FMl5dz1LY6WW7BRufGusz1Ckshs6dpyUc2drbPFaSpKwjh3IW8aZdXe4%2FpxDXPn%2Bla1kN6gq2ieAtzxkw2YCjey7x%2Ffvdd3GY93M5Nj2PRGvTaGJlCoXMkh5ntuDqYeIPh6oG5bgVvgo6lm5Sz5YX5L44SNFGSYhgWgKz6wNJl%2FJVSCD26u91UdXou1eNJrZO2xlzMo1VUY5TO1CJPQI28U%2B%2F9V5YibLjMltw22sPjDwwt3JBjqkAX1OOT8153Tx5zgI%2Bvq9obRrwYNyXW2%2BfbLTg0HLDSdVlxeYK6G9jltBpknL%2FkvZUzOw0GhzXWObK%2FarTAA6m0GOKl6%2F459ygFhEmVGOWNZlbPnM342kB0qLMZ7g%2Bqqw7Dba%2Fjj8C9pkFr8bJHO2U5Mu5UNZHvkw%2BMTPHGIpqKRkR5CjyDiNhlPEfGA6JQt2hQKOdGY2IKL0K%2BmJlxM0jzQmqxyg&X-Amz-Signature=6f23ffadf488072087aa02e705cc9978c4bdb8171e7573d41b6b0f4d0586d0b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

