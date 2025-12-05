---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XD7B4RON%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T031305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFRebE%2FWOulD0sMUHcUJN88cwGHWxijyDwTtNx3a1jubAiEAvxXXYUq1sVEiRFOoNWZQq9dnbwmC5JXoNYdhn8SQ9Wcq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDBWkabcTFM2tB5t6TircA1%2BZR4L4rEHq%2BOGkEtM3wMr3ArLYHA1X3MmSpv2D%2FxwKf5q5bBPap%2FUZWP%2BHjD8WS5cQZpFjBvV4XlELBmn7tpj7l%2BKutHP0VGH5inYhTeAw0dcnlahzKQjcHufEqko9OWtudx6YLEqFYUgtNCQHIhKgM%2FCJ5KkmgDbuNgO%2B9w4eOdi1tW%2Fy%2FnlC4mAYCqm8Tu6N4inqGekktxchN5%2FizO0049i19n7fYcx%2FMUmocsSL8JW%2FZU%2B5AKBAQ0mbBPPRBPkDU7Yy6qT3p7HUfXPR6Ww5mU2N12cghTk8%2BCR0hWlqfphnw8aI01hnfv4s3D1nHvyExLagLnsz%2Bz8WhvveF5qe5S0zWWTEwmFuwx0w%2BqnPheEicghP8fNlZH6SUc2QHrgwAZDKh9nJf03oP29UcQIDZdhlqHr7afAbLXkv40K%2BLBHQeGfiZagMKKInn19SMeyF4GOz%2FMRNO9ljM8FZz42tsQXfbXku701PEiio%2FdOeytOCs47HjkW6N%2BwWGkTUjP3Sq8Akw3AlTVQYjOig30shNimdnJs3oUG5eRaZKjpBFZb03v0QEdyOJoWKcUDGG8u6u5z6BUD4bBKuQYEF001A4y56%2Bsdv%2FRhMbwQgS5jO53jFEqr8kO%2FBhq1lMNaMyMkGOqUBraL0UxVUqwhm6%2BEsCLRK5EmPsMsrApep61EueJab0ISfWxsikZNQx8Wzu1zGY5DKw6uBDrDxRXWzKOxFpsuDy5YF6MxDCpHmIgJI9nGVeXogTwz5pe4NLn8TWyEUDgMlb4JTSjGoRbTh9Qp5FuL8DZEn8Ipq5O7g9QYmPWPQ1ef9hS4yZN%2BPdvlvaKy7F0IOK%2BK57A7IAvNt60EEzEEh%2BemkvXyF&X-Amz-Signature=5de9c6aca1c8503b22caac839f4c299c4262ba3c0d787e0ea0627ae1403fa477&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XD7B4RON%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T031305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFRebE%2FWOulD0sMUHcUJN88cwGHWxijyDwTtNx3a1jubAiEAvxXXYUq1sVEiRFOoNWZQq9dnbwmC5JXoNYdhn8SQ9Wcq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDBWkabcTFM2tB5t6TircA1%2BZR4L4rEHq%2BOGkEtM3wMr3ArLYHA1X3MmSpv2D%2FxwKf5q5bBPap%2FUZWP%2BHjD8WS5cQZpFjBvV4XlELBmn7tpj7l%2BKutHP0VGH5inYhTeAw0dcnlahzKQjcHufEqko9OWtudx6YLEqFYUgtNCQHIhKgM%2FCJ5KkmgDbuNgO%2B9w4eOdi1tW%2Fy%2FnlC4mAYCqm8Tu6N4inqGekktxchN5%2FizO0049i19n7fYcx%2FMUmocsSL8JW%2FZU%2B5AKBAQ0mbBPPRBPkDU7Yy6qT3p7HUfXPR6Ww5mU2N12cghTk8%2BCR0hWlqfphnw8aI01hnfv4s3D1nHvyExLagLnsz%2Bz8WhvveF5qe5S0zWWTEwmFuwx0w%2BqnPheEicghP8fNlZH6SUc2QHrgwAZDKh9nJf03oP29UcQIDZdhlqHr7afAbLXkv40K%2BLBHQeGfiZagMKKInn19SMeyF4GOz%2FMRNO9ljM8FZz42tsQXfbXku701PEiio%2FdOeytOCs47HjkW6N%2BwWGkTUjP3Sq8Akw3AlTVQYjOig30shNimdnJs3oUG5eRaZKjpBFZb03v0QEdyOJoWKcUDGG8u6u5z6BUD4bBKuQYEF001A4y56%2Bsdv%2FRhMbwQgS5jO53jFEqr8kO%2FBhq1lMNaMyMkGOqUBraL0UxVUqwhm6%2BEsCLRK5EmPsMsrApep61EueJab0ISfWxsikZNQx8Wzu1zGY5DKw6uBDrDxRXWzKOxFpsuDy5YF6MxDCpHmIgJI9nGVeXogTwz5pe4NLn8TWyEUDgMlb4JTSjGoRbTh9Qp5FuL8DZEn8Ipq5O7g9QYmPWPQ1ef9hS4yZN%2BPdvlvaKy7F0IOK%2BK57A7IAvNt60EEzEEh%2BemkvXyF&X-Amz-Signature=6e94b80040ea900e81502279005516e4b8a73ab31e01ca208fdeb2fcd89828df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

