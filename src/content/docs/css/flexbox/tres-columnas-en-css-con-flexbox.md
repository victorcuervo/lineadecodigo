---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNL3IO4N%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T205644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGJvCmHkQ5NqZ3tNdZB8dC%2Fnm47T8dCEy0PSKjn9cLwrAiEA%2B524yAXtQjJLEzB9fBBLc%2BTd29KEaQR1V01U5xu0u7IqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHTDoGZQ94L25dSbRyrcA5vLHK2lJ5XNWxQpShAtvHk6bsagwgyXfgjkOVlnao6cxaAgAS5oEiij8joObr13h9DCT2rVc7CF4%2B9H0tWVvK7WFuX%2BJK4UqrXr9rz4BC7%2B3ZgxzzjQlqPaHJe5aG9puTM0Ee2N44Vx97RUxf%2FgrKkMjF3Imxt4MIq%2B3exLqA%2BzSpOSVC4IhFiDy90RnggfUHIU4ArQ0eGFBmXGhpWdoVmPYcyyy5CYgfo2aU4w9Akc1%2B3pEES3Aa0SkUXymEDB2ZfuAt3Z0BUZ2kwrGUgJDvZ%2BpYhPriYAYhLLsySAFO5z9iEUzNisPg0kk17a26Um5X81eHf2gU2YSyvkPuwD3T1jAqrmsXYCZlGqlkGfi7BdAfyR7qLKDO0YVtCXuqU7aaWmtjugOkYNEajUwMOkGLHUnhcoUdAGNrWyybALb2r%2BAFHvTy3bRdlLPYKKGV5dqYonPkXhXUy4ctemid1pbb8fhgWyy5PawwmAxAjdTVFs8MVh6%2B8ClGXY5FUPG2X%2FdU7J3TKFL4AKBlGpkxRepqyCpOowrly%2B0CwHKrRXAditRUHSyiNyhCNmdkF45%2BXFTdkH68JrgIPRx2IYQyFC0LvjK7TchN9KP4cIwoeBOAqxfBKBeVHlvVdoQTkBMOrH18kGOqUBi%2BskfoJxEx5784qLA1X%2FUGMNtyV77qOooSnsS2QRTU1F9Nk8vvwX%2FHmfU8DMzvv8P2iJRsBLV9%2BGpwFoy02KhJN4VYZUw4YgclV%2BxehWSOITPeuwa1cuomuuVBH0Etz4cuVBx8v53DOI7UwHnJPDVl%2F6lfcta4v%2BFHc0Yrz5g15cY16%2F0HYSefLrepObTtFfbLnHx5pWtg0OCpYBOQuQd9bCDtSb&X-Amz-Signature=dc3fbb8fd2951df990e050470ddaddb7c50b301963025337a12a1052d2c81f40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNL3IO4N%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T205644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGJvCmHkQ5NqZ3tNdZB8dC%2Fnm47T8dCEy0PSKjn9cLwrAiEA%2B524yAXtQjJLEzB9fBBLc%2BTd29KEaQR1V01U5xu0u7IqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHTDoGZQ94L25dSbRyrcA5vLHK2lJ5XNWxQpShAtvHk6bsagwgyXfgjkOVlnao6cxaAgAS5oEiij8joObr13h9DCT2rVc7CF4%2B9H0tWVvK7WFuX%2BJK4UqrXr9rz4BC7%2B3ZgxzzjQlqPaHJe5aG9puTM0Ee2N44Vx97RUxf%2FgrKkMjF3Imxt4MIq%2B3exLqA%2BzSpOSVC4IhFiDy90RnggfUHIU4ArQ0eGFBmXGhpWdoVmPYcyyy5CYgfo2aU4w9Akc1%2B3pEES3Aa0SkUXymEDB2ZfuAt3Z0BUZ2kwrGUgJDvZ%2BpYhPriYAYhLLsySAFO5z9iEUzNisPg0kk17a26Um5X81eHf2gU2YSyvkPuwD3T1jAqrmsXYCZlGqlkGfi7BdAfyR7qLKDO0YVtCXuqU7aaWmtjugOkYNEajUwMOkGLHUnhcoUdAGNrWyybALb2r%2BAFHvTy3bRdlLPYKKGV5dqYonPkXhXUy4ctemid1pbb8fhgWyy5PawwmAxAjdTVFs8MVh6%2B8ClGXY5FUPG2X%2FdU7J3TKFL4AKBlGpkxRepqyCpOowrly%2B0CwHKrRXAditRUHSyiNyhCNmdkF45%2BXFTdkH68JrgIPRx2IYQyFC0LvjK7TchN9KP4cIwoeBOAqxfBKBeVHlvVdoQTkBMOrH18kGOqUBi%2BskfoJxEx5784qLA1X%2FUGMNtyV77qOooSnsS2QRTU1F9Nk8vvwX%2FHmfU8DMzvv8P2iJRsBLV9%2BGpwFoy02KhJN4VYZUw4YgclV%2BxehWSOITPeuwa1cuomuuVBH0Etz4cuVBx8v53DOI7UwHnJPDVl%2F6lfcta4v%2BFHc0Yrz5g15cY16%2F0HYSefLrepObTtFfbLnHx5pWtg0OCpYBOQuQd9bCDtSb&X-Amz-Signature=9e4fdddba4162ce02d2cc3249884285a1654264ccddff33a558d492527b591d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

