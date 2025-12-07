---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3JMM7DR%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T231701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBU5EDHGwmlihH%2F4wBQMli8FrHIopE%2Bn4z5AmWqH40xIAiEAhXW4C9f9e5MqETFqZuip2u%2Bm2UiBS2bQNJM9Y20RY2YqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBylB21XR2i8s8ibdyrcA9sJ5xAKYYLU2G04Qcnhs%2B1tfmsu7Ec3AblIuZAhhoXguFcEo6y3bgYc9zNW6yMc9Xi0QHyqY%2BiuIdjGoH1EfXHYO0PCamlcrcAIU9fk%2BfOhEfIsmVInZxGdemDFrQuZs1dN3bWT22eQ9%2FX7CTYobCDqxMe3BCwm3pQiJypVtgntQxs0nP30EIi6GBIXdpiq%2B3fFCQDG6DY2zwf7%2Bxh0V6UG2%2BCuR12gG6h1q%2Bp%2FawbG4FS481dtd8fQcq0cjBkHeiw%2Fk8iYNKx0oPN3IRHbwpEaxNmwCAYGE5xImopo6SE0fONNunhyQxXktP2LGEeTVOcpJ4BlYIKWQRrM4FKz4g2RLKh6QjD3EOYLqSKyP%2FONSFtuDAIbqe09ji5E526Me7aLEEKm9qNYmauhCyx61EOhG6fTzkQ6l3SXh2GYp43TurUnqTjOIfMiLcre3CZb0%2FkG0ZDOeeyrxk1Z%2FdTuB7n5ynwIshnAk4xEpuhnlriMKczAGoxKQ8%2Fuk7xy0sEj%2FUoaup27i%2FpxJphVIl9bK0tXnVXgXNjAOwLrrS23kktBRU0iwU3Nxl9LblhG%2F0SZtwZdXFIljOZ47sSlgpD3UKfEmFQoaFQS4mb7eLgV5m8wrbJeqz4gnySjyCs9MOWE2MkGOqUBz3VZntFsT9HdytBtwovcLMVXh1IF8IKsLXflhA41YeCYnFip4UhOwiZxp6%2B150Ekd6tnssB46kIUYH5zbJVCj%2BP8Ju2lQqbZfg%2FTkWlXU3%2BUAN4iA8q%2F8Fhv9K1nt3FCZXOpe7ROiDvzEIc53IaKmWzGOmJ8%2FXYMRkqEDsMocF5XwZi9Z0NvWdoM1xoW4j%2F6t9vHzyA9e0%2BGfOSrrYsulOZ1Io5J&X-Amz-Signature=cff2e5854fbadbad0dded5373a4d2bd68479fae6c37ef3e00fdcb27692eea0a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3JMM7DR%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T231701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBU5EDHGwmlihH%2F4wBQMli8FrHIopE%2Bn4z5AmWqH40xIAiEAhXW4C9f9e5MqETFqZuip2u%2Bm2UiBS2bQNJM9Y20RY2YqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBylB21XR2i8s8ibdyrcA9sJ5xAKYYLU2G04Qcnhs%2B1tfmsu7Ec3AblIuZAhhoXguFcEo6y3bgYc9zNW6yMc9Xi0QHyqY%2BiuIdjGoH1EfXHYO0PCamlcrcAIU9fk%2BfOhEfIsmVInZxGdemDFrQuZs1dN3bWT22eQ9%2FX7CTYobCDqxMe3BCwm3pQiJypVtgntQxs0nP30EIi6GBIXdpiq%2B3fFCQDG6DY2zwf7%2Bxh0V6UG2%2BCuR12gG6h1q%2Bp%2FawbG4FS481dtd8fQcq0cjBkHeiw%2Fk8iYNKx0oPN3IRHbwpEaxNmwCAYGE5xImopo6SE0fONNunhyQxXktP2LGEeTVOcpJ4BlYIKWQRrM4FKz4g2RLKh6QjD3EOYLqSKyP%2FONSFtuDAIbqe09ji5E526Me7aLEEKm9qNYmauhCyx61EOhG6fTzkQ6l3SXh2GYp43TurUnqTjOIfMiLcre3CZb0%2FkG0ZDOeeyrxk1Z%2FdTuB7n5ynwIshnAk4xEpuhnlriMKczAGoxKQ8%2Fuk7xy0sEj%2FUoaup27i%2FpxJphVIl9bK0tXnVXgXNjAOwLrrS23kktBRU0iwU3Nxl9LblhG%2F0SZtwZdXFIljOZ47sSlgpD3UKfEmFQoaFQS4mb7eLgV5m8wrbJeqz4gnySjyCs9MOWE2MkGOqUBz3VZntFsT9HdytBtwovcLMVXh1IF8IKsLXflhA41YeCYnFip4UhOwiZxp6%2B150Ekd6tnssB46kIUYH5zbJVCj%2BP8Ju2lQqbZfg%2FTkWlXU3%2BUAN4iA8q%2F8Fhv9K1nt3FCZXOpe7ROiDvzEIc53IaKmWzGOmJ8%2FXYMRkqEDsMocF5XwZi9Z0NvWdoM1xoW4j%2F6t9vHzyA9e0%2BGfOSrrYsulOZ1Io5J&X-Amz-Signature=de17ec0e388d3c397164aecc28e480bed2986c84765898116510b48e48b7a51b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

