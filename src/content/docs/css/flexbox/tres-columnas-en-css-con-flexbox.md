---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667S6TPAEA%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T083008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGf9GzCyWlV79hMkBz20Sqns7aPzyuPI5SNoK3XB0%2FpyAiA1VU1f2dFfwiJ8TijcGiwE%2B4BAp31AAm8FOArAQzfmiCqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMN%2FFM9NDgTI28exLWKtwDTxc6Z81EMHo8cGcVrDYuisNJYTDSUCl5IPfQnWsedLPjIsq6P1MbZIvup9cdTkBg61xd3WqbIjTaGtYq5BsRCYGGzolrh4QEc32rZIKMyTCwpWu7F%2FQwwq5SPkrD0wa7wkQwe2wEcNNroxzm4Z56j1QKieLdtE4iNThSNFdv0X0mB7ckCIb5bDHFWkLNmqxrdIGyIOxNqnVNCnH%2FpQX9bB88SmdGxA4nib0%2BSjLN3o2zsz34sgxm3r%2BKKtn2hpjXQiTOP7T8MY5RtBet9ZLN%2BrOcsqElg00ri7XHYIN2tVb5gCXSL4lOpBqYJsIVRW2NmyMp0pHEs%2BpgVB0a%2FOO6tnxkAs%2BgC6EU2wH%2Fxcv2sY4oLdfJtR741jvOoLv65UXarSbbMwuuTN7wwG4ZF4LgPmRKjKojtYguRv3oMq1yXlk3WitLxoh63dyCBTutvTc7n%2F5FWXHYrBxnXMVHGzdMRlhKqn6GWFxZc4C8lXFfawxBhB0%2BxjjH%2FmA9XU0xjNUCxpGhpjKOJNLkeYElJ2lkX6IGWFyBjF18GNbOKBPCJvHcePI8kIefzNgmohwfb9cOlar2Y%2BYFxF4EZd45seFxx2jVf5oe7fVlR2D97GknEe8N3XxQ48asozEQqyYwuu3ZyQY6pgEHiCnV4i%2B7y4kx0%2F1LXaSLcEZx%2FwpZsqfdOwdKIxlH8gEwYJTT3yKlm%2FuIaoaAdB3tMl%2Ft7VWtg9s9h6%2BLhMxMnZpJj73nBSh2j2RafkCTYO5JN46WhxIn4BjhuYMw3gCAE06Q6npr2YS%2BjOKdOMZjJ2BNUln%2F0TztBkwoA1XzHMQX903d94fnZ6Cn56egJ7i5Ak3r8CUdeXC86V2jRO7O06Ys%2Bpyk&X-Amz-Signature=f1f5f4c7fa09972f7e8bf86e9e86d922226b70984e2ceb3ac1bad5a0065844f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667S6TPAEA%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T083008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGf9GzCyWlV79hMkBz20Sqns7aPzyuPI5SNoK3XB0%2FpyAiA1VU1f2dFfwiJ8TijcGiwE%2B4BAp31AAm8FOArAQzfmiCqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMN%2FFM9NDgTI28exLWKtwDTxc6Z81EMHo8cGcVrDYuisNJYTDSUCl5IPfQnWsedLPjIsq6P1MbZIvup9cdTkBg61xd3WqbIjTaGtYq5BsRCYGGzolrh4QEc32rZIKMyTCwpWu7F%2FQwwq5SPkrD0wa7wkQwe2wEcNNroxzm4Z56j1QKieLdtE4iNThSNFdv0X0mB7ckCIb5bDHFWkLNmqxrdIGyIOxNqnVNCnH%2FpQX9bB88SmdGxA4nib0%2BSjLN3o2zsz34sgxm3r%2BKKtn2hpjXQiTOP7T8MY5RtBet9ZLN%2BrOcsqElg00ri7XHYIN2tVb5gCXSL4lOpBqYJsIVRW2NmyMp0pHEs%2BpgVB0a%2FOO6tnxkAs%2BgC6EU2wH%2Fxcv2sY4oLdfJtR741jvOoLv65UXarSbbMwuuTN7wwG4ZF4LgPmRKjKojtYguRv3oMq1yXlk3WitLxoh63dyCBTutvTc7n%2F5FWXHYrBxnXMVHGzdMRlhKqn6GWFxZc4C8lXFfawxBhB0%2BxjjH%2FmA9XU0xjNUCxpGhpjKOJNLkeYElJ2lkX6IGWFyBjF18GNbOKBPCJvHcePI8kIefzNgmohwfb9cOlar2Y%2BYFxF4EZd45seFxx2jVf5oe7fVlR2D97GknEe8N3XxQ48asozEQqyYwuu3ZyQY6pgEHiCnV4i%2B7y4kx0%2F1LXaSLcEZx%2FwpZsqfdOwdKIxlH8gEwYJTT3yKlm%2FuIaoaAdB3tMl%2Ft7VWtg9s9h6%2BLhMxMnZpJj73nBSh2j2RafkCTYO5JN46WhxIn4BjhuYMw3gCAE06Q6npr2YS%2BjOKdOMZjJ2BNUln%2F0TztBkwoA1XzHMQX903d94fnZ6Cn56egJ7i5Ak3r8CUdeXC86V2jRO7O06Ys%2Bpyk&X-Amz-Signature=87973329c34c830b78b15d54b7b0a624654764663bf2ec21bb7d75524a996e9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

