---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TAAYHNC%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T173852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDA0MzDEmVUIKkbMwtpddenOctLfd2pTa6ywDAeGiObeAIhAMvgkO7ZqwjDac7ct2QwnsgFzo31Fn3MkneRrhgUl5rXKv8DCHoQABoMNjM3NDIzMTgzODA1IgyBmgiLlQLikNn2uRgq3AMlATxT%2FZXMEeya4wa%2F9gQkOrtGxX85IPQOSsxc%2FQGXDf%2FJcd9CHbwfCSCRGJ6FiQ4UD6MQIGA4%2FUobjH%2FYed1Fmq39KERmot%2B5KXyBpYPgerGd9b2w%2F5vKt5XyO81y1avAzHysDGJA8xOzPOkqf66eU0tvOcKKjTJJZgjbzjBKw13CyrWiP3e%2Ffh9esRdLNYfN0KUlq6rN7rscRildyFl0nph29E5FrGa07tszl9nT%2FhT4qh8dGWZVYItzh6UxJK0PxupdmjCfjW057HqodLxnRg0j4gmt7pi3hsAtDBwug71QLSHuiv%2BRoX1U9dd1dJrqm9vCmiLzunC6hDgf5vXdn7Ozk42z2ZF54M%2B3fLS3qYsVz6Loe1Z08V%2FjWibVbnlnSDRIw7z5SuzPe57gBp5%2FhxJ4vsiDcWLytV7fBSGDTGud7NS0kERS5Xxqx5yS55fcV2vK9K%2B1RtuXOHpg2W8kjRAS1rzGqv1QL289pLPfLipWBuZ7%2Bul7wj8xsC1rKcRRMRJOtjmwSsPqnpJVAbw%2Fz3tnohsCU1jukIeDj5xGx7cQzlFn32GAWIIJDFHLYIdsg%2FH599hwlKCu%2B%2FeNwYobEgIdEl69UhGpOrrq2EhQMdqePngaasssYN%2FWsDDDydHJBjqkAeAEVYN1YU9hTXGdO47yKyMo2SHRDQuETwt%2BUnvttDhkqdgjbrIfw%2Fw2mDuEUy7dLR7b3Kp9E6lO4sbJeR%2BegjAq7ic0ATiEu68MbRL4fCotLfLD9H2MaRw6imjyokzYR6j9KCajxrbHfHfySyZpTN2li0jucCv9q9Dlhj8N4uWlaNWJZ0OkRwsiMDOlk7wCL2duwwGI2w%2BwZk6ICXZjScOppxtZ&X-Amz-Signature=83373bcd2fb6a0b0346cfc121072da485e28832a31b0dc3e73a0b5cbf5372d97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TAAYHNC%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T173852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDA0MzDEmVUIKkbMwtpddenOctLfd2pTa6ywDAeGiObeAIhAMvgkO7ZqwjDac7ct2QwnsgFzo31Fn3MkneRrhgUl5rXKv8DCHoQABoMNjM3NDIzMTgzODA1IgyBmgiLlQLikNn2uRgq3AMlATxT%2FZXMEeya4wa%2F9gQkOrtGxX85IPQOSsxc%2FQGXDf%2FJcd9CHbwfCSCRGJ6FiQ4UD6MQIGA4%2FUobjH%2FYed1Fmq39KERmot%2B5KXyBpYPgerGd9b2w%2F5vKt5XyO81y1avAzHysDGJA8xOzPOkqf66eU0tvOcKKjTJJZgjbzjBKw13CyrWiP3e%2Ffh9esRdLNYfN0KUlq6rN7rscRildyFl0nph29E5FrGa07tszl9nT%2FhT4qh8dGWZVYItzh6UxJK0PxupdmjCfjW057HqodLxnRg0j4gmt7pi3hsAtDBwug71QLSHuiv%2BRoX1U9dd1dJrqm9vCmiLzunC6hDgf5vXdn7Ozk42z2ZF54M%2B3fLS3qYsVz6Loe1Z08V%2FjWibVbnlnSDRIw7z5SuzPe57gBp5%2FhxJ4vsiDcWLytV7fBSGDTGud7NS0kERS5Xxqx5yS55fcV2vK9K%2B1RtuXOHpg2W8kjRAS1rzGqv1QL289pLPfLipWBuZ7%2Bul7wj8xsC1rKcRRMRJOtjmwSsPqnpJVAbw%2Fz3tnohsCU1jukIeDj5xGx7cQzlFn32GAWIIJDFHLYIdsg%2FH599hwlKCu%2B%2FeNwYobEgIdEl69UhGpOrrq2EhQMdqePngaasssYN%2FWsDDDydHJBjqkAeAEVYN1YU9hTXGdO47yKyMo2SHRDQuETwt%2BUnvttDhkqdgjbrIfw%2Fw2mDuEUy7dLR7b3Kp9E6lO4sbJeR%2BegjAq7ic0ATiEu68MbRL4fCotLfLD9H2MaRw6imjyokzYR6j9KCajxrbHfHfySyZpTN2li0jucCv9q9Dlhj8N4uWlaNWJZ0OkRwsiMDOlk7wCL2duwwGI2w%2BwZk6ICXZjScOppxtZ&X-Amz-Signature=dda9ed9bc2dd0d87ee0a8df9482b2bac59a4d2b8e4180c15aee61258222233e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

