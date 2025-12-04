---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNEAEQ4R%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T065641Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIBc7%2FprS4%2Bardpi%2FvE0JQh9A9k1XPYSv8%2FwYXhRn0Ca1AiAxxKGvkl6OZbz1WAudhWUQTMf5iCv%2B5iArBILf82tNnyr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMBqnbnq%2BkD53b%2BYDPKtwDI%2BEdDtfIZuONVteBQNVNMsPz5QT65FhMNh0yO7E5teqOqFTHkoK4dljMOzodY8W0m0MZxPeM55mFpHvZS4DYw%2FEt0lp1x%2FO12o2YBufJvFf2CVvy7BWHIQo2OluV0US8nGaJhtT6xuEaGbRsIVf%2Bgn9HhZcdIkB7on7QrNPaUj6k5ynvqomRm%2BZQYHIhWc0VZeuOSmynjzspPWOlf7HxUBJVnIEW6Xj6XdX4SEAu%2B92yBZa%2BoFWCLE2VH1wf%2BbDkP0CHPE2fCfWVnq8ss6BTypw8IVsRB2Y7OGm9oKgvLy3f3WUu%2Bv8CcubWYzpo85bMBfd9zkYEsg%2FHcaXHBRuX3y66i8s9buohyAaaX9xpmzAfx%2Bet7NkeJyadUWx8OJClnolfoyGFzZSAt9SOsk3XR2mKTJRL%2FwxCmFS26RiqrwWvSbNGYxJv%2FEgXXBz3STT9v6RF6brN%2F%2FLO9eStlHhmJPJ0IZYhDJLFzykXQw2AxxxdetbH4fFXfnojvWHOvSRbwLQNsXVZ6qhmIDH3k3GG54gefnQyPN1%2FhtLTsEuQIVf9NxIW4naAlvdzUglqz%2F4nPrJ8tup1yfreV9bskO0V8fP1e65aWsBIPZxZNF%2BZQ2Xvlvi7K2WVNU1VRngwisvEyQY6pgHLUphqNRjBLbpY99HqWO5GOWmHjaND8UnaqJRTnt%2B1lCfSmeDsHLvLQgiPsV%2F%2Bn1ys9NTD22IsQCyGfiVp2bMhHRtZk3J7qWrKVcFHKPlb8zOnDEwGijz6Y1rIuUkZX31tFTIftrMB0dFjT8F%2Fg3ujKzS3N719z2KjWLMRVFliIhR4fGd3AsJERZ47mQSomfvSh3s7QnBkGMsMwZNBF%2FP3kwQdiyZM&X-Amz-Signature=5c5ac3b64cd10dc521509203bee789251a2cc1c3d50f112a779d139527fd5411&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNEAEQ4R%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T065641Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIBc7%2FprS4%2Bardpi%2FvE0JQh9A9k1XPYSv8%2FwYXhRn0Ca1AiAxxKGvkl6OZbz1WAudhWUQTMf5iCv%2B5iArBILf82tNnyr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMBqnbnq%2BkD53b%2BYDPKtwDI%2BEdDtfIZuONVteBQNVNMsPz5QT65FhMNh0yO7E5teqOqFTHkoK4dljMOzodY8W0m0MZxPeM55mFpHvZS4DYw%2FEt0lp1x%2FO12o2YBufJvFf2CVvy7BWHIQo2OluV0US8nGaJhtT6xuEaGbRsIVf%2Bgn9HhZcdIkB7on7QrNPaUj6k5ynvqomRm%2BZQYHIhWc0VZeuOSmynjzspPWOlf7HxUBJVnIEW6Xj6XdX4SEAu%2B92yBZa%2BoFWCLE2VH1wf%2BbDkP0CHPE2fCfWVnq8ss6BTypw8IVsRB2Y7OGm9oKgvLy3f3WUu%2Bv8CcubWYzpo85bMBfd9zkYEsg%2FHcaXHBRuX3y66i8s9buohyAaaX9xpmzAfx%2Bet7NkeJyadUWx8OJClnolfoyGFzZSAt9SOsk3XR2mKTJRL%2FwxCmFS26RiqrwWvSbNGYxJv%2FEgXXBz3STT9v6RF6brN%2F%2FLO9eStlHhmJPJ0IZYhDJLFzykXQw2AxxxdetbH4fFXfnojvWHOvSRbwLQNsXVZ6qhmIDH3k3GG54gefnQyPN1%2FhtLTsEuQIVf9NxIW4naAlvdzUglqz%2F4nPrJ8tup1yfreV9bskO0V8fP1e65aWsBIPZxZNF%2BZQ2Xvlvi7K2WVNU1VRngwisvEyQY6pgHLUphqNRjBLbpY99HqWO5GOWmHjaND8UnaqJRTnt%2B1lCfSmeDsHLvLQgiPsV%2F%2Bn1ys9NTD22IsQCyGfiVp2bMhHRtZk3J7qWrKVcFHKPlb8zOnDEwGijz6Y1rIuUkZX31tFTIftrMB0dFjT8F%2Fg3ujKzS3N719z2KjWLMRVFliIhR4fGd3AsJERZ47mQSomfvSh3s7QnBkGMsMwZNBF%2FP3kwQdiyZM&X-Amz-Signature=f4f2001f7a1eebe64c43e38ad1674c6e5d79a4b57e6a7e44dfc54346873309f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

