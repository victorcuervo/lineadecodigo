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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOVUOUQF%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T151423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQD9vQxfs8qSZK2ZliB466CrOToe9RLACiXpKoPc5K9m1wIhAIGzgmBHTO4001g2gISHrx1bUnSdesK27%2Fb291mubULFKv8DCDAQABoMNjM3NDIzMTgzODA1IgwV5oI0kuJQsN6vjcsq3AOgLVxASSUjvwCdsa5kEURwAlxYEI07SsPFao%2B%2BK7evvRdwLy2g1RtFoE%2BTb5kNkpWdTYFKtYfp9Cj%2BBwtpyk8DIxb4u%2BvUQoEy8nbPKNbHvz%2BAuRW6X0WRb9z3h3xdeAo3iSEDEuWLX99qDlTZIVmJ4H%2Bh7qqo6mLuON7xtKkmNaLq3bPq%2FgAFBuO4K6LsvT67zSBBt4zoQZHtLLcEW%2BAua4dehVSsJQ28429hL47bHmlHd22v34HTfVkAO0ljnK7RKoJ%2BbWPsUIXfxi6UOKXLWtwBiqKnv6PuGXgzcr5cdmAGr5Q2XL%2F2cUHBa15MAHoy11XR3J8mF%2FY5M90Cy2cj9S%2FM0lvzfbQ7f4CXsiu1yOpCXjV7UY1iZgBXjeYmMBT6vpCAgFXwSMFGAdRykbxnvA7RJtvR5SpNktIXZiYFk2HtYZJlrAi6%2FoVOOhXxfCPEtiTOP7QN6h6sc%2FhQJWw5LeoCw9BGXPvSDzBMekSEro6JZStWGyeQHDu3%2BDE0KcV7ES3f6%2FCOB%2F6HSmj5PzhDdNFnqPQA7pOOqNBcuXavkbp5OECWOAxlzwE5jFjd%2By0TfULgy9KzgsJx05LEzRsA6Lim3voGLrJr855CyLmGfgd3wgCCL95eERIhDzCnpsHJBjqkAR14FeUoDJw4QIz2o2F6dqY00f3SRJNQyV8ZhUzkgUxKbFBYn%2F6CW0GhEaGbl1kDUSg3doiOG7BGA8KmaT3nA0GbhoPW%2FWS00F2I9m2nQd%2FmRfXk922YTSuYCdfj%2Ft3iQEz2VPkxo2PYL1KXDom18RJojkRTrcJZLisHsano4bGmC0J%2FWcknvZmcVLQlAk%2BR5rA0JHbIGZTqPDkwUt%2FI6A6XP9CJ&X-Amz-Signature=7183519bf7cb299e91ec39732c43ca38d523c7bc4674394e5f5504e07f954fd1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOVUOUQF%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T151423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQD9vQxfs8qSZK2ZliB466CrOToe9RLACiXpKoPc5K9m1wIhAIGzgmBHTO4001g2gISHrx1bUnSdesK27%2Fb291mubULFKv8DCDAQABoMNjM3NDIzMTgzODA1IgwV5oI0kuJQsN6vjcsq3AOgLVxASSUjvwCdsa5kEURwAlxYEI07SsPFao%2B%2BK7evvRdwLy2g1RtFoE%2BTb5kNkpWdTYFKtYfp9Cj%2BBwtpyk8DIxb4u%2BvUQoEy8nbPKNbHvz%2BAuRW6X0WRb9z3h3xdeAo3iSEDEuWLX99qDlTZIVmJ4H%2Bh7qqo6mLuON7xtKkmNaLq3bPq%2FgAFBuO4K6LsvT67zSBBt4zoQZHtLLcEW%2BAua4dehVSsJQ28429hL47bHmlHd22v34HTfVkAO0ljnK7RKoJ%2BbWPsUIXfxi6UOKXLWtwBiqKnv6PuGXgzcr5cdmAGr5Q2XL%2F2cUHBa15MAHoy11XR3J8mF%2FY5M90Cy2cj9S%2FM0lvzfbQ7f4CXsiu1yOpCXjV7UY1iZgBXjeYmMBT6vpCAgFXwSMFGAdRykbxnvA7RJtvR5SpNktIXZiYFk2HtYZJlrAi6%2FoVOOhXxfCPEtiTOP7QN6h6sc%2FhQJWw5LeoCw9BGXPvSDzBMekSEro6JZStWGyeQHDu3%2BDE0KcV7ES3f6%2FCOB%2F6HSmj5PzhDdNFnqPQA7pOOqNBcuXavkbp5OECWOAxlzwE5jFjd%2By0TfULgy9KzgsJx05LEzRsA6Lim3voGLrJr855CyLmGfgd3wgCCL95eERIhDzCnpsHJBjqkAR14FeUoDJw4QIz2o2F6dqY00f3SRJNQyV8ZhUzkgUxKbFBYn%2F6CW0GhEaGbl1kDUSg3doiOG7BGA8KmaT3nA0GbhoPW%2FWS00F2I9m2nQd%2FmRfXk922YTSuYCdfj%2Ft3iQEz2VPkxo2PYL1KXDom18RJojkRTrcJZLisHsano4bGmC0J%2FWcknvZmcVLQlAk%2BR5rA0JHbIGZTqPDkwUt%2FI6A6XP9CJ&X-Amz-Signature=bd2e8cee79e7f5244f033ea6ad3a3af63de0c1f9134c71f1a9f704edfcb41b9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

