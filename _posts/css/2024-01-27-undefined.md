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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THDPPHJM%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T094250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQDc75RzB3JJUGdfJZD22C8ZwKY6kNu7Y2vxDjb8t5hHJwIgNbvTETxqT1RtQ1kq%2FkDD5wxQ6T8TxgYqxuQvSORj4fEq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDBR6zxe5O5SnfhV6ySrcAxfZtTl8BowCjRJ2hMX3uKB6yBC%2B%2Fm7f%2B5SbDJNRMPl8xwZlV%2Fg0LOjDaeQQA6q2NVC1hZkz18f%2FOJSR3GyHIikOXbTd1gQ3uzKADNPrS2b%2FKCfctgBw5czsKdpn2TIvJG%2FsxzRB6FqMefo%2BcLu4fFJX0Abieo6JaVXPc%2BQ6wwE%2Bf7OJzti4w457p4jOv8%2FCJOWGJiIeCYpxoFq%2FUYjYLkg8E9H8D7VNT%2B54rT88%2F40Ne7UJa%2FGG7qwIwEn7Fn0m%2FUCIxbLWvuDuCLyFEQ%2BOy8hOu6%2BmKLp%2BlLL4uAktUdDApYklmNNz8N%2BDAutuLUin9JW7tfQAx9%2BqqfOkfeqbnH6vD39mb82dpcHSunurvJT0wQsyfchBhyER%2BgyZABLqY3zrf8reOi3TLMxRRZrLuwxzMloiNEUFnQ4bibEox9Wb4En2t4dnIaInT36nyCUYX0dT3kcM9jO0Ar%2FlzxByUJO4x0okfWVeb3ZBzKRsJT1RxQJlX21%2BzfNeJsqbPnaRKF%2FPvjz8mn%2FRFFG%2FktJO6UOxGuwR7UhD9qpJnm3IVwN3Dt0sgugh6G%2FlEIuiZcXiNGZjj8ADwB5HpivO8TNlcqFNLsH1OQQhNqvLMasNWm6BqYv0gc7NxRp1ClaIMLn2v8kGOqUBao7KJ0JmaEM%2B8GhQfnQ6jmr76mIhqjV8HaXLioiRzCf%2F9XVOJhWyX9BVKpUPt5tgEUfm%2BIscTIDTvKxECwnyJ8ezjxqB0pYYviu1vG3HGgmQSD9Q9gBZEOAsdm2GjQLa%2BNTijEUv0yBN2xFYbS3QKpNahHC3mqSXpuX4HD0RjfxKqQYvumcMKxeLwLY5r%2Ffbds97FntGmcf52wSwe%2BtsuYJZmsXQ&X-Amz-Signature=3f3cf9d6d0b98385991df2d45a2a8c59f2ee97c2af5bab778db6d9a48f28dbce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THDPPHJM%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T094250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQDc75RzB3JJUGdfJZD22C8ZwKY6kNu7Y2vxDjb8t5hHJwIgNbvTETxqT1RtQ1kq%2FkDD5wxQ6T8TxgYqxuQvSORj4fEq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDBR6zxe5O5SnfhV6ySrcAxfZtTl8BowCjRJ2hMX3uKB6yBC%2B%2Fm7f%2B5SbDJNRMPl8xwZlV%2Fg0LOjDaeQQA6q2NVC1hZkz18f%2FOJSR3GyHIikOXbTd1gQ3uzKADNPrS2b%2FKCfctgBw5czsKdpn2TIvJG%2FsxzRB6FqMefo%2BcLu4fFJX0Abieo6JaVXPc%2BQ6wwE%2Bf7OJzti4w457p4jOv8%2FCJOWGJiIeCYpxoFq%2FUYjYLkg8E9H8D7VNT%2B54rT88%2F40Ne7UJa%2FGG7qwIwEn7Fn0m%2FUCIxbLWvuDuCLyFEQ%2BOy8hOu6%2BmKLp%2BlLL4uAktUdDApYklmNNz8N%2BDAutuLUin9JW7tfQAx9%2BqqfOkfeqbnH6vD39mb82dpcHSunurvJT0wQsyfchBhyER%2BgyZABLqY3zrf8reOi3TLMxRRZrLuwxzMloiNEUFnQ4bibEox9Wb4En2t4dnIaInT36nyCUYX0dT3kcM9jO0Ar%2FlzxByUJO4x0okfWVeb3ZBzKRsJT1RxQJlX21%2BzfNeJsqbPnaRKF%2FPvjz8mn%2FRFFG%2FktJO6UOxGuwR7UhD9qpJnm3IVwN3Dt0sgugh6G%2FlEIuiZcXiNGZjj8ADwB5HpivO8TNlcqFNLsH1OQQhNqvLMasNWm6BqYv0gc7NxRp1ClaIMLn2v8kGOqUBao7KJ0JmaEM%2B8GhQfnQ6jmr76mIhqjV8HaXLioiRzCf%2F9XVOJhWyX9BVKpUPt5tgEUfm%2BIscTIDTvKxECwnyJ8ezjxqB0pYYviu1vG3HGgmQSD9Q9gBZEOAsdm2GjQLa%2BNTijEUv0yBN2xFYbS3QKpNahHC3mqSXpuX4HD0RjfxKqQYvumcMKxeLwLY5r%2Ffbds97FntGmcf52wSwe%2BtsuYJZmsXQ&X-Amz-Signature=8123637c4c25566e4d30ac0ef1ee1f12caa8c0d87e490b429939edec1268c352&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

