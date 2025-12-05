---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S33CH224%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T182858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHsLYri%2BwtBlNJOqCH0JWPQQ5Jl%2F%2BSksirWsaLgZSdkgAiEA%2BQVCbW4E9fDBHi%2BGc4KJd6dMe1tYaoSbgGB%2BRi%2B%2FP%2Bkq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDKeTstbT%2BewYI9IMvSrcA2N2YkLkJPwW0DZVEjhZG0SPHDtVOxAtANfPZEBNxc%2Fzuvwpr%2FsZ2TUVZH0LvkzkrChxDPzIaB8CCTlKsBhLpS9V1UEYq4sx4tJjXJMfpCjfc59c6QEFCtv4R%2BxFd87x28dDBnAHME58YX9GbQTRL%2FkoCETG74YIQEvqd%2BbPgLs1nOThHY6nckUl3hDWMIbVCxERKh0OGkV%2BShEIrgndMGa4jO1fD%2BZCz%2Bt3gp2wBQwR9OhyWs5q4bUcFxVKbAWf%2BpQ2UgNs5FNW80xR6HtPjed%2FzB%2F1oMxdma5ijEWDl8OlUOBUnINhqdRJqaf%2B563xYw0C9VP3dTlPN3UUvnc9J%2F5MK%2F5qpWyo6BbFFeWxhIGsZKxPjAPvKy%2Bz1yFCqUk4S1B7Wdf12Lt%2BtlYXhfKtNnGybgBy4U3Qi4Q58s0h0xyE8CX1etGDJ2%2BWMeejypf%2BoB%2FFWLuc6P4nQaeUHY2l8Jt29VRAopQC0DvfEsLqiEq%2FSUI7WME%2FUrbhX%2Fx75x%2BrfFaDmyWkQmZIBosGkV1AJdjNNJEIu%2B0WiNmvEkw5j3ILnasJpD0RA%2FYmV3Hv%2BpuAapoYEYyUoQYpBdyMwM0We5UVdxC0fOgN9W2Y3%2FX4JgkAnxcyvAyRev7NXi0iMJ3ny8kGOqUB1pPh5ZXM5hx6hruubyKcaiI30KkiAskrXmkNT2ubs%2BoUggh1adcKV8iZO4uReX5LuXnsG1%2BqW7Bq%2FkkG6DCImSI38rpl%2BJrSperALoi4T5a7QKFGtptVLFKuYpFjhYzGiTNNZ72BhaZ1I4aegSs%2BQUAOack2vx6V6KNxKDKhz%2FEjV5YaIH9O1%2F1WmvIIjdbt872rbgcNeN1AZKLMw5zxRTv57zWY&X-Amz-Signature=7037e0e8e973e054d2d3dee55dfb105e5087e4ef87378d6c01c7fe08c30a3890&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S33CH224%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T182858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHsLYri%2BwtBlNJOqCH0JWPQQ5Jl%2F%2BSksirWsaLgZSdkgAiEA%2BQVCbW4E9fDBHi%2BGc4KJd6dMe1tYaoSbgGB%2BRi%2B%2FP%2Bkq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDKeTstbT%2BewYI9IMvSrcA2N2YkLkJPwW0DZVEjhZG0SPHDtVOxAtANfPZEBNxc%2Fzuvwpr%2FsZ2TUVZH0LvkzkrChxDPzIaB8CCTlKsBhLpS9V1UEYq4sx4tJjXJMfpCjfc59c6QEFCtv4R%2BxFd87x28dDBnAHME58YX9GbQTRL%2FkoCETG74YIQEvqd%2BbPgLs1nOThHY6nckUl3hDWMIbVCxERKh0OGkV%2BShEIrgndMGa4jO1fD%2BZCz%2Bt3gp2wBQwR9OhyWs5q4bUcFxVKbAWf%2BpQ2UgNs5FNW80xR6HtPjed%2FzB%2F1oMxdma5ijEWDl8OlUOBUnINhqdRJqaf%2B563xYw0C9VP3dTlPN3UUvnc9J%2F5MK%2F5qpWyo6BbFFeWxhIGsZKxPjAPvKy%2Bz1yFCqUk4S1B7Wdf12Lt%2BtlYXhfKtNnGybgBy4U3Qi4Q58s0h0xyE8CX1etGDJ2%2BWMeejypf%2BoB%2FFWLuc6P4nQaeUHY2l8Jt29VRAopQC0DvfEsLqiEq%2FSUI7WME%2FUrbhX%2Fx75x%2BrfFaDmyWkQmZIBosGkV1AJdjNNJEIu%2B0WiNmvEkw5j3ILnasJpD0RA%2FYmV3Hv%2BpuAapoYEYyUoQYpBdyMwM0We5UVdxC0fOgN9W2Y3%2FX4JgkAnxcyvAyRev7NXi0iMJ3ny8kGOqUB1pPh5ZXM5hx6hruubyKcaiI30KkiAskrXmkNT2ubs%2BoUggh1adcKV8iZO4uReX5LuXnsG1%2BqW7Bq%2FkkG6DCImSI38rpl%2BJrSperALoi4T5a7QKFGtptVLFKuYpFjhYzGiTNNZ72BhaZ1I4aegSs%2BQUAOack2vx6V6KNxKDKhz%2FEjV5YaIH9O1%2F1WmvIIjdbt872rbgcNeN1AZKLMw5zxRTv57zWY&X-Amz-Signature=71dfe6c0ed553d2cbf6a5404b18f4218848e208ba2a36dad014ea21af7133eea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

