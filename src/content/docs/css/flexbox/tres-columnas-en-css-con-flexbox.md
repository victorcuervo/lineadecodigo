---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWIN3HPY%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T114736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJb6%2FiLKZB8QA%2BuZ5r5%2FyuqfnU3yYHTyez8%2Furgy5MHAIgQ7vCZi1e2WLFqSppDt4potfG4igqe84sKVv97NI2JbMq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDO2vBOSnLQn4%2FMN7kyrcAyqidU2AaZKnOTTM0BfoBwYytVbGeyYW4ArKY1XswxTXDjfHMXINct37zWCJJ3tAccMYbuqRjq6Y5Z%2FUhlyFEHw6bcQ9UjrutvElb572A3ImA9O8xmP6EIH8N37ZHVnRlfJYD%2Bo03zxeRfC%2BbjZKOaM%2BvHcbF03TfKjF5VcYWrDrNpgNu2iLYB7lWYQPpGHXNsZNUq3uHHihzznhJsunJt3LnaOu8EA5zfLEkTjcTFZcWRdVny87z0%2By6TCUfakEd42bowQOPZjAlzsM4K32q7TXTgtM3lxVcQy512bFs6D%2F8El2xlsc1rjJRr%2BvJES01hm%2FxxvXayU4YaFv0Ln0aGI9Kv8%2BCrKv5uGxoiPeQdk3I%2B%2Fz3yLXzH16xIZHyB1zhXZYreCKwkEt4MXIRN%2Bo7PaPRBTm1JsC6p9afGDEaYQ%2BZK4dkrmje7KYKA8ySMpupoIG6mBsfckJ6Xu8ttmhY2XP5888Xd51E%2FvUFt5Qlij%2Bp4q2pzVirr6ZG8NvPF60P5QmBM9oRYoTbXCrDfDJ61qtNREQFIjW4s24ohus%2FAwcW7V44f02jE0rMKyWdj%2BQCwg5jMNaOnMhrueER9Pzte3UhpTkGuJAS8q%2B6KaB0jEBqendiSeyfbF4c0SPMNrRyskGOqUBt6K6M0fZza%2B0R48IL57WizO31JZon5EAKLLCrTE2naJybgMwK%2FcfJBSbeu57NZAZlq7PYwQcR7Bao0FxFL1NW35SFPfM7ZmAsJlIFWQc7rLeCXC7eOoW90gHpt1%2FswJKOo%2Bo7bM2ST1rwNt9iTQq7GfjndYzRfvbQPuRc9mNFP8ytU0hvzirJWGsz7CAdOFez7dSAMV2yA2dPronSyixPwZwQA7m&X-Amz-Signature=8950d9de9d3b5bf25e56622eca82fa58a37f1b54e552abfbda6c6a2ce60da612&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWIN3HPY%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T114736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJb6%2FiLKZB8QA%2BuZ5r5%2FyuqfnU3yYHTyez8%2Furgy5MHAIgQ7vCZi1e2WLFqSppDt4potfG4igqe84sKVv97NI2JbMq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDO2vBOSnLQn4%2FMN7kyrcAyqidU2AaZKnOTTM0BfoBwYytVbGeyYW4ArKY1XswxTXDjfHMXINct37zWCJJ3tAccMYbuqRjq6Y5Z%2FUhlyFEHw6bcQ9UjrutvElb572A3ImA9O8xmP6EIH8N37ZHVnRlfJYD%2Bo03zxeRfC%2BbjZKOaM%2BvHcbF03TfKjF5VcYWrDrNpgNu2iLYB7lWYQPpGHXNsZNUq3uHHihzznhJsunJt3LnaOu8EA5zfLEkTjcTFZcWRdVny87z0%2By6TCUfakEd42bowQOPZjAlzsM4K32q7TXTgtM3lxVcQy512bFs6D%2F8El2xlsc1rjJRr%2BvJES01hm%2FxxvXayU4YaFv0Ln0aGI9Kv8%2BCrKv5uGxoiPeQdk3I%2B%2Fz3yLXzH16xIZHyB1zhXZYreCKwkEt4MXIRN%2Bo7PaPRBTm1JsC6p9afGDEaYQ%2BZK4dkrmje7KYKA8ySMpupoIG6mBsfckJ6Xu8ttmhY2XP5888Xd51E%2FvUFt5Qlij%2Bp4q2pzVirr6ZG8NvPF60P5QmBM9oRYoTbXCrDfDJ61qtNREQFIjW4s24ohus%2FAwcW7V44f02jE0rMKyWdj%2BQCwg5jMNaOnMhrueER9Pzte3UhpTkGuJAS8q%2B6KaB0jEBqendiSeyfbF4c0SPMNrRyskGOqUBt6K6M0fZza%2B0R48IL57WizO31JZon5EAKLLCrTE2naJybgMwK%2FcfJBSbeu57NZAZlq7PYwQcR7Bao0FxFL1NW35SFPfM7ZmAsJlIFWQc7rLeCXC7eOoW90gHpt1%2FswJKOo%2Bo7bM2ST1rwNt9iTQq7GfjndYzRfvbQPuRc9mNFP8ytU0hvzirJWGsz7CAdOFez7dSAMV2yA2dPronSyixPwZwQA7m&X-Amz-Signature=03ca1502f992aaf87523131115a9d85a3f4029de96cc0e09a6d63b66d1ed6f23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

