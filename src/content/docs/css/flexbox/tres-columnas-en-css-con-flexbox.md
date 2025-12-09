---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBXEHLBH%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T052850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICw2HyXJ6u4bhbQCb8WQz7K9plALqEj7T0ySFv7Ti1D2AiEAgX3dSRk3Q9OkPP2gAgndx9IxVXEWSsRlFECxGGPGah4qiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJdEQYflYEoZN4dVsCrcA99%2FX2mDSxzHa%2BgrtDzz7uUcaBo9GAmvSv2PbLCfSYRbP8zcz4Og0lmEGlIPq3YeIl3H3u6wsD0Dz9r5BEkcsKvXs%2BlvMvK19qnAZjFvE%2BHhumsbDzbf3V1Plh3PTmhYKDyXp8cn76068kuQHLBDtBW5m8u2PPn%2FuYRTlVGR6BLyR%2Fmjbmurypj8WXhAR9GmOZMFEJCNB0vBEvebWvkVZqC5AANZA3OWAp%2FqUDoowKA2OMl1rgP16%2BGksN%2FfArajPS%2BMZnKjgkTrqCCZeahgano1CkZszQuGEW5b%2F7f8qhhpIk1VH%2BqnsVckAwpsReC76YZ9%2BKRl8lJO2GOatqMnViXjzWCX6arEmp9jkN6VafV%2BpOSEgOJhaUUX5XFKbZqfvo%2FtLYAkO94G803QxQ3KJccVOYrxcE22%2BCZCbaT%2BBS6o9dWmZL8Tec9yRHRnFZ%2Bz0x40NscihBsKeqH7ItLlH%2Bo1cqdUBsxCmr8QSkEp%2BjslcpOmDKgYQMO8prkq9EOu5jF%2Fih1dwGGAnnFVDfzgNai3izcMijO53Fc7LmIUnYJD0TNgybxSw7%2FEmJO4R9w66tbFys9PnkQOFvPlIRC92pHFjIf%2FG7HsXKdn4kqbo8vy39X0ldeFKSHuC0jMMJjl3skGOqUB2zdu4k7bem3rcqe0jgc2l1OWcDUCmOgiOfm6JMAsXnRAzMkWzwoUssERZ%2FJr0NprPOR9lQUiGe%2F4dK95yjXX1eK0%2Blah5omLO4HTPmnfx%2Faq%2FYKoEoJpkLxYxLHst1f2deHTCWrr4IJt7qH66t93EerHpjfQIk9fL08Bw3x9zkB33vjCHXR5Mbjn9Qq3TWw%2Fdei8pxsGlRHmrPP7r83k42zA06Ax&X-Amz-Signature=8a4bf61ce0834707fcd1148945f110c1eb9cdef50e103095b9656de0fe89a0f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBXEHLBH%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T052850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICw2HyXJ6u4bhbQCb8WQz7K9plALqEj7T0ySFv7Ti1D2AiEAgX3dSRk3Q9OkPP2gAgndx9IxVXEWSsRlFECxGGPGah4qiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJdEQYflYEoZN4dVsCrcA99%2FX2mDSxzHa%2BgrtDzz7uUcaBo9GAmvSv2PbLCfSYRbP8zcz4Og0lmEGlIPq3YeIl3H3u6wsD0Dz9r5BEkcsKvXs%2BlvMvK19qnAZjFvE%2BHhumsbDzbf3V1Plh3PTmhYKDyXp8cn76068kuQHLBDtBW5m8u2PPn%2FuYRTlVGR6BLyR%2Fmjbmurypj8WXhAR9GmOZMFEJCNB0vBEvebWvkVZqC5AANZA3OWAp%2FqUDoowKA2OMl1rgP16%2BGksN%2FfArajPS%2BMZnKjgkTrqCCZeahgano1CkZszQuGEW5b%2F7f8qhhpIk1VH%2BqnsVckAwpsReC76YZ9%2BKRl8lJO2GOatqMnViXjzWCX6arEmp9jkN6VafV%2BpOSEgOJhaUUX5XFKbZqfvo%2FtLYAkO94G803QxQ3KJccVOYrxcE22%2BCZCbaT%2BBS6o9dWmZL8Tec9yRHRnFZ%2Bz0x40NscihBsKeqH7ItLlH%2Bo1cqdUBsxCmr8QSkEp%2BjslcpOmDKgYQMO8prkq9EOu5jF%2Fih1dwGGAnnFVDfzgNai3izcMijO53Fc7LmIUnYJD0TNgybxSw7%2FEmJO4R9w66tbFys9PnkQOFvPlIRC92pHFjIf%2FG7HsXKdn4kqbo8vy39X0ldeFKSHuC0jMMJjl3skGOqUB2zdu4k7bem3rcqe0jgc2l1OWcDUCmOgiOfm6JMAsXnRAzMkWzwoUssERZ%2FJr0NprPOR9lQUiGe%2F4dK95yjXX1eK0%2Blah5omLO4HTPmnfx%2Faq%2FYKoEoJpkLxYxLHst1f2deHTCWrr4IJt7qH66t93EerHpjfQIk9fL08Bw3x9zkB33vjCHXR5Mbjn9Qq3TWw%2Fdei8pxsGlRHmrPP7r83k42zA06Ax&X-Amz-Signature=583463a620502ce0f472cc6872c429d58ac204f8460c6cf60cd6b7aa9b5ff33b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

