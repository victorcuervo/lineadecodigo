---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEX5UVT5%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T111402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIANHJf%2FzJ8YkvOij1hpOj7Q6lmAzcjIbL%2FI34Ms4NB4sAiAJVgMnpGDrgpbMGMHLWsmuCwFaiNBwOsbSmH5RLn%2FYnCr%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIM0vSL2S3mB38KJg2zKtwDbt6uZad%2Fgsf%2FhKttJh7irBBa%2BVOqei2AkzKjhgrbRoY5telP0XB7%2FHZ8gpuehTFtZmxQeacdaq9wc1Pp8sz9Wm662%2F%2FI%2F4OvyIPArXBrkxruBVQwEFcPc26a%2FaBxniNTEp%2Bei5RWohOdiOUFrkUluqUhIuHmUMC6r4klQwXrAcAwq30K%2FZXrB9mshFW5XzZf%2F4HwL%2FAghF4sKM%2BWDQq5jEj1b2es1szXiz7SAIbot5XSRxeRuYMQpB7sxy71fuxFBXchcwl%2BDfmvT5I%2Fqox5BqK6Z2H8jqCfDHldnMqfbuNheC%2B7NzGgE14MkddYUMCeBSbWtvjXgbiSQZDbroD%2Fc%2BmaAEpfkUAxObLOzQYrHfAud6x6LQDICorz4S7nyOsHWkGYTjmbceEHNUvEk94gVs7d1oh2f7ITGpJPBrlGPz0WqOSxyGEk%2F6pZq0ELPsmWf8edI2kM5KV3VYgIgcud6JfN3Zdw%2B4BorGJ9o6%2F7df1HM0iiJH9bS4ub0PJ0N1lm%2BM9HP4OKM0SYgALIipDXq9vjxpuj3B9%2BvTQBnOQxOCK81cNl5DHgJFBQcjfX7txZdk0TX%2B8En%2BVJj4E5UXtFFmuvXi8XfvHVhxO1fVbVZ2qpOn65QZMWZUwNEsEw7onQyQY6pgGh0SqC8ykkAcUYfnOLd6s6T2ADnQiLpqP%2BQNVRaAQ9Aiz3yDLZaTH1QDGlFWD720433xG5a4KG4k4%2BqzzYe89kFtkY8fkyR2WsHTWHtV51Memug8NZ6S79NF2ZsmW8pxo9E1jgMJ%2FKE1sKNJiO3UFMVEg%2Fn8%2FAMDJ9SxMK%2B8pb%2FrQSfTpdTXs8fXqjTztMsqOs%2BknvPjgqk7YpSHAJKZVjt1NRXi3Y&X-Amz-Signature=23fc1fcf9fabb064874d97d8b2a72bff980844f755c69258836abb5c40b89fa2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEX5UVT5%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T111402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIANHJf%2FzJ8YkvOij1hpOj7Q6lmAzcjIbL%2FI34Ms4NB4sAiAJVgMnpGDrgpbMGMHLWsmuCwFaiNBwOsbSmH5RLn%2FYnCr%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIM0vSL2S3mB38KJg2zKtwDbt6uZad%2Fgsf%2FhKttJh7irBBa%2BVOqei2AkzKjhgrbRoY5telP0XB7%2FHZ8gpuehTFtZmxQeacdaq9wc1Pp8sz9Wm662%2F%2FI%2F4OvyIPArXBrkxruBVQwEFcPc26a%2FaBxniNTEp%2Bei5RWohOdiOUFrkUluqUhIuHmUMC6r4klQwXrAcAwq30K%2FZXrB9mshFW5XzZf%2F4HwL%2FAghF4sKM%2BWDQq5jEj1b2es1szXiz7SAIbot5XSRxeRuYMQpB7sxy71fuxFBXchcwl%2BDfmvT5I%2Fqox5BqK6Z2H8jqCfDHldnMqfbuNheC%2B7NzGgE14MkddYUMCeBSbWtvjXgbiSQZDbroD%2Fc%2BmaAEpfkUAxObLOzQYrHfAud6x6LQDICorz4S7nyOsHWkGYTjmbceEHNUvEk94gVs7d1oh2f7ITGpJPBrlGPz0WqOSxyGEk%2F6pZq0ELPsmWf8edI2kM5KV3VYgIgcud6JfN3Zdw%2B4BorGJ9o6%2F7df1HM0iiJH9bS4ub0PJ0N1lm%2BM9HP4OKM0SYgALIipDXq9vjxpuj3B9%2BvTQBnOQxOCK81cNl5DHgJFBQcjfX7txZdk0TX%2B8En%2BVJj4E5UXtFFmuvXi8XfvHVhxO1fVbVZ2qpOn65QZMWZUwNEsEw7onQyQY6pgGh0SqC8ykkAcUYfnOLd6s6T2ADnQiLpqP%2BQNVRaAQ9Aiz3yDLZaTH1QDGlFWD720433xG5a4KG4k4%2BqzzYe89kFtkY8fkyR2WsHTWHtV51Memug8NZ6S79NF2ZsmW8pxo9E1jgMJ%2FKE1sKNJiO3UFMVEg%2Fn8%2FAMDJ9SxMK%2B8pb%2FrQSfTpdTXs8fXqjTztMsqOs%2BknvPjgqk7YpSHAJKZVjt1NRXi3Y&X-Amz-Signature=0124c7f68041b752e378be081cc8f0fcdf6b2a84083a3f21bc4ae2aba369cc46&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

