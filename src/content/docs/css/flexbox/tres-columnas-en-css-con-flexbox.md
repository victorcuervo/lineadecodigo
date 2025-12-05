---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S353CKG5%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T034717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDI3qmaVVgpoTQ13ptJof54ewXQLV5G9bahE8PBrUTTlQIhAPJGh7zttrja1lbliBk2z15hTl%2F1etwTT3fW3K3WMUgSKv8DCE8QABoMNjM3NDIzMTgzODA1IgyyfnoSYhO2Hud8MKcq3AO0TaVDApigaCTXUeKGe8zvPangaeMSZZVNQYTMRj5VovMgx%2FRLi17eNeoojlVnahosFXekXlfqJCGzYyTvb1eiPhSvBTt%2Fn4d34sP079odMztNYz6ePzld3Lu9hfSdVDedBjy3tBHyKOwyqcwfYXe4%2BrDFEcYWIe4o7HrBH7kUGU6QG7yB5r4zcy41etswTNg95vTDpfi4XbGHfUoC1Nyyzqgfuyedv%2FAyiwTwiwf%2B6xL1RDqT2yC9IgZCwFFtieimZ3HMtwP5CxHFnxsijYWn3NmAOf%2FMpZ%2BD1wSw1mlxxRH9w8W75hREhBkUs0NfzaEo1nf%2BKrzgLBXjaIm8lxaB%2BCUlq%2BrLBUnn2hpU3UloqFvbY55wEQgcY3LZdvEUSbRSnAT2Sb1tvIat7G8TUk14VmPNUgsG%2FXb74dFIcSeP0VP9UjHYGMDnJmN2EIX2yY83gilCNXUqQUE07My6XSv9VY%2F7BR%2Bs79c7EJ6uSsZ4GsaCp1NN%2BFsli6SMoT5xCqDjbyqKvjk8D1TRUO5IKv7pobCKDQWnzuLNmdFO%2BrkMLm6ZycHsixz0LJQQoQPH7J79gQVLrfaoN9FGLeij6tA1%2FxSQ7cK4jOihgfHdcFNSEXb0G%2BObgjuhlENJkDChjMjJBjqkAWDtVRvhKfSA2ry5RDl%2Bjdj%2Bvfc4sgbAaKCqBrK5e5dYi%2BScP6jQ45k1NG5fxYDjbzP6m5bknljPggJ8A%2BJtvgkQ%2B7uxf5BGLnZoQLDjXTwaell6i%2BYiWcsYgw7oh6JMAQQaEwaywSQ0o0RPVqTQHE8zPk7IGAm5cN1fDumi4KGhx4KwBBPFVTNwhmnBzZBVBodh84juzB%2Frl5BiR7xOpDhSSIQd&X-Amz-Signature=28018a0606776b02110cf001d2ff2f27a90c9e49079113f39b1c7bac2056adbf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S353CKG5%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T034717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDI3qmaVVgpoTQ13ptJof54ewXQLV5G9bahE8PBrUTTlQIhAPJGh7zttrja1lbliBk2z15hTl%2F1etwTT3fW3K3WMUgSKv8DCE8QABoMNjM3NDIzMTgzODA1IgyyfnoSYhO2Hud8MKcq3AO0TaVDApigaCTXUeKGe8zvPangaeMSZZVNQYTMRj5VovMgx%2FRLi17eNeoojlVnahosFXekXlfqJCGzYyTvb1eiPhSvBTt%2Fn4d34sP079odMztNYz6ePzld3Lu9hfSdVDedBjy3tBHyKOwyqcwfYXe4%2BrDFEcYWIe4o7HrBH7kUGU6QG7yB5r4zcy41etswTNg95vTDpfi4XbGHfUoC1Nyyzqgfuyedv%2FAyiwTwiwf%2B6xL1RDqT2yC9IgZCwFFtieimZ3HMtwP5CxHFnxsijYWn3NmAOf%2FMpZ%2BD1wSw1mlxxRH9w8W75hREhBkUs0NfzaEo1nf%2BKrzgLBXjaIm8lxaB%2BCUlq%2BrLBUnn2hpU3UloqFvbY55wEQgcY3LZdvEUSbRSnAT2Sb1tvIat7G8TUk14VmPNUgsG%2FXb74dFIcSeP0VP9UjHYGMDnJmN2EIX2yY83gilCNXUqQUE07My6XSv9VY%2F7BR%2Bs79c7EJ6uSsZ4GsaCp1NN%2BFsli6SMoT5xCqDjbyqKvjk8D1TRUO5IKv7pobCKDQWnzuLNmdFO%2BrkMLm6ZycHsixz0LJQQoQPH7J79gQVLrfaoN9FGLeij6tA1%2FxSQ7cK4jOihgfHdcFNSEXb0G%2BObgjuhlENJkDChjMjJBjqkAWDtVRvhKfSA2ry5RDl%2Bjdj%2Bvfc4sgbAaKCqBrK5e5dYi%2BScP6jQ45k1NG5fxYDjbzP6m5bknljPggJ8A%2BJtvgkQ%2B7uxf5BGLnZoQLDjXTwaell6i%2BYiWcsYgw7oh6JMAQQaEwaywSQ0o0RPVqTQHE8zPk7IGAm5cN1fDumi4KGhx4KwBBPFVTNwhmnBzZBVBodh84juzB%2Frl5BiR7xOpDhSSIQd&X-Amz-Signature=7bd57cbca00f0aebaf4d678345b6d97a99a2269b0d0b7c5c1dba19d053598fc2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

