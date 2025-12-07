---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCQZMA36%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T133154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAeJ%2B9VRV931fVtPdNpZPishy9uKvNGXVBnXAWo2GGN3AiB7SDi4UqRTmxSNTY4Xc4rqGse%2FcS1D57UQwWik5fxRhiqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcfFQ%2FRPsZcIZrHBgKtwDe3hxo7u74j4h1ZT1Vvu2FzxyvAUhg7rfpv2wsk81Wj4n4wytuZ2rp2H6xDi8QM4EItA41JQFopzv3%2F79B%2BiCzCUEoGktsuLq6lo3fT3iVI9h8kIsAlO4GxcDZ8KxEkeKkIh%2F0HS2r8tNux2OBA9qDEYvRjcG5zzBPb%2BXSINF%2Fa%2Bsq5SoeoIWn4SkG%2FUzOAgAz8bZqnJ4%2FWoJNQi%2BkmW1wDvRd%2B1x7Sk2K9sAai5bmm2yTw0hkgtreEGdyeGxWhz%2FHol7D6pYJvYbaJ4%2BvEd5KiDaijB3TqhjaoN5tRdV%2FWq0uDsA3Q84fvHeqtHyzN924J1%2BY4zc76I%2BG%2F4NzGxK71tuDS47J%2BOJQqSm7J4yCAnY0UDjaZIdHbyIfeVCv1WjsEAHphpq6nIsGq5DGLCFKbC7IejBIFp0%2B5610AvrxfJXm1hH%2FD1MLJIY%2BrhrgoCuqvgI5q0mVxOADZfazLKWBtrQgHNG3MBxdRpy6tyK848hyuOfTUZStBWa%2BSUpl4JVfS%2FWzSbwuSgwDHIqeZ0mTJh5L8ZRzMvfp1PO4zvv9tw4ibcdMPubOnKGBCw3JzICyACa2L1rZl01hgzwRJGCgkyrezBZf9ToyZDaLY8Nt97E0bpsX3AzAYCJE4AwxpnVyQY6pgEFQBuHXyp1vWrw89I%2BVYQ8Ef1ZFYTqaJ9PYkOOTkHxiLcqwEQ%2FvKUJgfhEpuWbVcUdbovTHvDbhmBvb4pOGxFdlZhYMVgiVwpa8TcfjOjuh3x7YtRzzl5dIzW6Yc1AKeCEq1b5nkpaUFm7t0Ku0EnBMxaK%2FOyXG1ZLAL8jATIvUNAYAsSd0xA5FTEDbJvVwWFpgzoVSfAwanDoxV7Z8bR4cHOJFtKD&X-Amz-Signature=7c1d88cacbbe9c232eb08865e4ab7ffcecd5e57e0164a52f816734407cb6aead&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCQZMA36%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T133154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAeJ%2B9VRV931fVtPdNpZPishy9uKvNGXVBnXAWo2GGN3AiB7SDi4UqRTmxSNTY4Xc4rqGse%2FcS1D57UQwWik5fxRhiqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcfFQ%2FRPsZcIZrHBgKtwDe3hxo7u74j4h1ZT1Vvu2FzxyvAUhg7rfpv2wsk81Wj4n4wytuZ2rp2H6xDi8QM4EItA41JQFopzv3%2F79B%2BiCzCUEoGktsuLq6lo3fT3iVI9h8kIsAlO4GxcDZ8KxEkeKkIh%2F0HS2r8tNux2OBA9qDEYvRjcG5zzBPb%2BXSINF%2Fa%2Bsq5SoeoIWn4SkG%2FUzOAgAz8bZqnJ4%2FWoJNQi%2BkmW1wDvRd%2B1x7Sk2K9sAai5bmm2yTw0hkgtreEGdyeGxWhz%2FHol7D6pYJvYbaJ4%2BvEd5KiDaijB3TqhjaoN5tRdV%2FWq0uDsA3Q84fvHeqtHyzN924J1%2BY4zc76I%2BG%2F4NzGxK71tuDS47J%2BOJQqSm7J4yCAnY0UDjaZIdHbyIfeVCv1WjsEAHphpq6nIsGq5DGLCFKbC7IejBIFp0%2B5610AvrxfJXm1hH%2FD1MLJIY%2BrhrgoCuqvgI5q0mVxOADZfazLKWBtrQgHNG3MBxdRpy6tyK848hyuOfTUZStBWa%2BSUpl4JVfS%2FWzSbwuSgwDHIqeZ0mTJh5L8ZRzMvfp1PO4zvv9tw4ibcdMPubOnKGBCw3JzICyACa2L1rZl01hgzwRJGCgkyrezBZf9ToyZDaLY8Nt97E0bpsX3AzAYCJE4AwxpnVyQY6pgEFQBuHXyp1vWrw89I%2BVYQ8Ef1ZFYTqaJ9PYkOOTkHxiLcqwEQ%2FvKUJgfhEpuWbVcUdbovTHvDbhmBvb4pOGxFdlZhYMVgiVwpa8TcfjOjuh3x7YtRzzl5dIzW6Yc1AKeCEq1b5nkpaUFm7t0Ku0EnBMxaK%2FOyXG1ZLAL8jATIvUNAYAsSd0xA5FTEDbJvVwWFpgzoVSfAwanDoxV7Z8bR4cHOJFtKD&X-Amz-Signature=07386287d381da3d5e0e370ca2d45f2095aea99254294387184fc688af5af2bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

