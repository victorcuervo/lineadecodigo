---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TO5ML7E%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T030442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQDOdpA0CXktObqYV8J7gN2Kb8RyPi52aKOGEOYqQQkSWwIgfBD7H9WJNEMCtcguZeKEqUduFKcd9esFdPxhTn%2Fufooq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDFmiPW6Dl1H%2BKdW9WircA8zA7h4l9Yg%2BRnbt14v2ydLlPStEdhFhJ3gklGiydFhHdtf8fxk%2FDhHLerWzLRiGReNm9u0yWgju0uXNXis5kSqM%2BE475DJOdFhNdxgABaNZaiadIlE3GdDjrCULHJf8Ofqu4vNv9QexRcNvC%2BYMcVv5X87dJGYjJyTqF6U%2BMsIgxnEttK1MpLev7WSfF4C2Ly8dlsYXKGtZOxwMl0sjOWdC9%2Fw0n2b%2FOdowdCAzFLyXd8iyHr95%2B4iNweTS%2BNoLbOO7Ohfne5JTh0WiYmXo622YCPDH7%2F1nUYVOSyOSDjnwPgdzeLjdzuDQslSXSsm6MJBdS1OaPwB5Bvh1AXuH8%2BDazHRsIw6pZP2v8wuYJ0hbr68DUZUUNNTJOtsphWkYvZuT%2BiJd1J%2BDn1nAIj7gv3AXOc2yBKuS8WbqVrhNELIwh4lkUUvDp827VQsyIQ%2FFm2OpMA7ZxLubSFTHeB1UGKX9RYY5sHk0bztWpgFbihYtZcbjZ7s2v420h%2Faf%2FBupQbvA9411Nm8BVNZQABC%2Fdtwlv%2Bpn78TlxG7%2Fh31OA57n0%2BQZCRl1oR6FPKWZaKc04JevkFDfsEArXG%2Bxdn1Y4fIHNXVKYBq3pElUlV1cIC%2B5raw9n5SU7NKJH7O9MOTyw8kGOqUBF3p9%2BF5TXA16tMcJ2Sc5vgHsS2m24LG8%2F4GvsMhrxrWyguJOCPERAwklqFhfYPXJJMDHlQ20%2BoZgwjCJ0GGsAmMjWLHzZJ0xcPFBx37JdPy686deUsHQN1XYwSwe7LGyazySYPCMdk4SaQcLaeNTs9kuktoAZFljRWsvL3SdjNIUHkCcp0MYIX5679pJNodz4TQCKVpwPkzgGupXDG2MrVYRK%2B49&X-Amz-Signature=943e83ae010777bda779db908a9b2752c65eb3697bc0be12cc0f5188db7f3f54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TO5ML7E%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T030442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQDOdpA0CXktObqYV8J7gN2Kb8RyPi52aKOGEOYqQQkSWwIgfBD7H9WJNEMCtcguZeKEqUduFKcd9esFdPxhTn%2Fufooq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDFmiPW6Dl1H%2BKdW9WircA8zA7h4l9Yg%2BRnbt14v2ydLlPStEdhFhJ3gklGiydFhHdtf8fxk%2FDhHLerWzLRiGReNm9u0yWgju0uXNXis5kSqM%2BE475DJOdFhNdxgABaNZaiadIlE3GdDjrCULHJf8Ofqu4vNv9QexRcNvC%2BYMcVv5X87dJGYjJyTqF6U%2BMsIgxnEttK1MpLev7WSfF4C2Ly8dlsYXKGtZOxwMl0sjOWdC9%2Fw0n2b%2FOdowdCAzFLyXd8iyHr95%2B4iNweTS%2BNoLbOO7Ohfne5JTh0WiYmXo622YCPDH7%2F1nUYVOSyOSDjnwPgdzeLjdzuDQslSXSsm6MJBdS1OaPwB5Bvh1AXuH8%2BDazHRsIw6pZP2v8wuYJ0hbr68DUZUUNNTJOtsphWkYvZuT%2BiJd1J%2BDn1nAIj7gv3AXOc2yBKuS8WbqVrhNELIwh4lkUUvDp827VQsyIQ%2FFm2OpMA7ZxLubSFTHeB1UGKX9RYY5sHk0bztWpgFbihYtZcbjZ7s2v420h%2Faf%2FBupQbvA9411Nm8BVNZQABC%2Fdtwlv%2Bpn78TlxG7%2Fh31OA57n0%2BQZCRl1oR6FPKWZaKc04JevkFDfsEArXG%2Bxdn1Y4fIHNXVKYBq3pElUlV1cIC%2B5raw9n5SU7NKJH7O9MOTyw8kGOqUBF3p9%2BF5TXA16tMcJ2Sc5vgHsS2m24LG8%2F4GvsMhrxrWyguJOCPERAwklqFhfYPXJJMDHlQ20%2BoZgwjCJ0GGsAmMjWLHzZJ0xcPFBx37JdPy686deUsHQN1XYwSwe7LGyazySYPCMdk4SaQcLaeNTs9kuktoAZFljRWsvL3SdjNIUHkCcp0MYIX5679pJNodz4TQCKVpwPkzgGupXDG2MrVYRK%2B49&X-Amz-Signature=0ef083d3f039f82bb8a7730b72be9272777e071a91d033f5939ef08d18b255e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

