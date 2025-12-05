---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJ3XB7MN%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T224359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqoZKJ85X6BUbOBuevoWIwhhbcW0qDiesXWdXpIBTPigIgZckPmvMVNr6t8LwWdCSzrX3W%2FwPIec%2BjYZk5gvv6Fqgq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDOgnq9nEIrv8MoVnLSrcA8zfcoeLMcXklgYN0BXWX5IyBMPDj5igTIHqwysBlsWTjw39WK3MeR5O360swxhBsKNBDhyAKOXUoEDKsNxYQvz5hydWt7yhIYUbVdUoNLc7o1Mc5317CGCMw5eMufZxKtquC3Mg%2Brxnty0vZx5etdWwWXJFeGTmLAbpD%2FONOWYk2wLE3wkOnX5mxhezMbdprFnUhCpTD1oM3HyHIXay76Js79piGUyOuyymL0kU1EyRSI6IWzLSnE44P1hzZF%2FtTNQc8DJUfrI%2FzzbV4R%2F4WBG%2F6M9BkZDPldAOlNNy2fJeOyvCHsqpJVLPS5RH5BIyS8Zn%2FhSu5B2sln1uqhG4sOF1KZ5Hcmq07QR4nAV9CddJxjwo7uWVkhzXv0e9ryNjE6%2F4pSfCBVYOzpHLgDtu9B9i59DBslifh%2FGk6znhxgYnZdSFTdBjAx5Jku7llI7qzeCjgfis2RaRGUAEcmtX7ph5ke%2B%2F9ZXzaWssY3g9GfFXUTC1WyQz15sWafinPjSC6g5mqcH%2FBDsznd4F06Nxr7MUg79Lt2zyQyZ%2BNOkIL2PpHseiLCQSIythsG9PKCAGhynweNUh485iGawgEtNx2ouN%2FuwwdDtJywlZmUVscSDXwusFOD7gQAf5KPleMJSYzckGOqUBn5XQyjmddq%2BKB9ZDLEbgzrML4BLQmxajxI8aNmHdYoCZfwzvQ1zH%2BIUTETVR1ctpXD%2FeixUQxjN6kF4A6jIScFcmN3b22r8Dx3DjVsys3bv3yz7b9vAiQWoOo0ZpEXL9gCSP5Pxg6mznuAoeu%2FRMlo%2BQYB2biZXi3WHeKM9d4vEaHRFggquVCsxUSp1CwHejzUU%2B878jUEoWzvwD4yQG%2B0xeI8vu&X-Amz-Signature=6cd975b5d7a0889184a36e284308687ed2db1d560b9204035316e06f32345b2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJ3XB7MN%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T224359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqoZKJ85X6BUbOBuevoWIwhhbcW0qDiesXWdXpIBTPigIgZckPmvMVNr6t8LwWdCSzrX3W%2FwPIec%2BjYZk5gvv6Fqgq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDOgnq9nEIrv8MoVnLSrcA8zfcoeLMcXklgYN0BXWX5IyBMPDj5igTIHqwysBlsWTjw39WK3MeR5O360swxhBsKNBDhyAKOXUoEDKsNxYQvz5hydWt7yhIYUbVdUoNLc7o1Mc5317CGCMw5eMufZxKtquC3Mg%2Brxnty0vZx5etdWwWXJFeGTmLAbpD%2FONOWYk2wLE3wkOnX5mxhezMbdprFnUhCpTD1oM3HyHIXay76Js79piGUyOuyymL0kU1EyRSI6IWzLSnE44P1hzZF%2FtTNQc8DJUfrI%2FzzbV4R%2F4WBG%2F6M9BkZDPldAOlNNy2fJeOyvCHsqpJVLPS5RH5BIyS8Zn%2FhSu5B2sln1uqhG4sOF1KZ5Hcmq07QR4nAV9CddJxjwo7uWVkhzXv0e9ryNjE6%2F4pSfCBVYOzpHLgDtu9B9i59DBslifh%2FGk6znhxgYnZdSFTdBjAx5Jku7llI7qzeCjgfis2RaRGUAEcmtX7ph5ke%2B%2F9ZXzaWssY3g9GfFXUTC1WyQz15sWafinPjSC6g5mqcH%2FBDsznd4F06Nxr7MUg79Lt2zyQyZ%2BNOkIL2PpHseiLCQSIythsG9PKCAGhynweNUh485iGawgEtNx2ouN%2FuwwdDtJywlZmUVscSDXwusFOD7gQAf5KPleMJSYzckGOqUBn5XQyjmddq%2BKB9ZDLEbgzrML4BLQmxajxI8aNmHdYoCZfwzvQ1zH%2BIUTETVR1ctpXD%2FeixUQxjN6kF4A6jIScFcmN3b22r8Dx3DjVsys3bv3yz7b9vAiQWoOo0ZpEXL9gCSP5Pxg6mznuAoeu%2FRMlo%2BQYB2biZXi3WHeKM9d4vEaHRFggquVCsxUSp1CwHejzUU%2B878jUEoWzvwD4yQG%2B0xeI8vu&X-Amz-Signature=d10f05ebacb338b74442630128d205c092947cf5058d3a9a1ec442c2b6a82bf1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

