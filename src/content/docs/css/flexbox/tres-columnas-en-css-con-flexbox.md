---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FJOWGV5%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T062628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHNO0cxbjyS524%2BvIjY3Iqrld6G%2FY3HrIt6kGuTVYwAVAiBjTfQ2pO4EmFEyhYkugzfucmKp2Wk4bzs60MB3D%2B3wnir%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMaMYrvGeS173qbzUSKtwD7U9w4%2BqSYK7ZyScLdbJWk0fI%2BP9i%2Fq8amDRRmbc%2FQxns9LUGPsClRn3uTOsXvCtA5a5YjkPLByjowgq5lPNai6pJu9oEAaTOhXBSQYF%2Ft555sD9qKvxIaIZRCZ8t%2FccoEhQnH2O%2FBadAhyRX2LfZn9eUj1JGCKF9eASttwjBXBzixVE4Pd7rg2b6zhqKe3syUKtJPavDpRUC9jUPDruB8JZjQFy360w1GVjUgYIDQuh59HZf4P1AZz4YTgKhFYbBMOaiD1UeBVGTb60pibwdwr4O9nVSdRhHXUZZBQvcCVT1vnFqhItcSr9Rxd2vaU3HzD21etrOV0ASVeFcsN%2FGl1536JtPksGmXq0U8QezefXmoec9IHXL5Xr%2F333U%2BbHP%2Fh31f9OlFqN0lFzCL1DHxt2ATOgL7jjVR6IB9dzbt1P%2FXj%2FEjky%2BEhsSn%2FDFmxPbTzVTMHLOGhzVLr4AH4ZYrBis7McBMWB1mVCcZXSFEtQYKLU0M6wZQPR%2BDrt4XAh4S7sG%2FyAfeXJYTnPRQBQCt%2Be4qlS92Nws4Y0%2FdRlPhaW45dgv%2BarBbldmHfL7ZhvaAXrDRSlav8PvYXcn4u4Ei85mVukzqntlD%2F0NDKfhp7OGoG7N2O47mZyva8Qw6vzOyQY6pgHXNYNaDh3WIOFzqLnYiqFV0nqTciCAi%2B6qO8w%2BwJq%2BzofaZ6P5k%2FjHi%2Fj1zvxBkeBPEmS%2BjcgT%2FxVQI5pMiTSiOt8YiYz5K%2Fvvwo8u8HBz162QqhTBszuesZkdx28UBVG0JntMfFb6Em6o1k%2FJSXveEdqEByotryh0%2FzrNzbJYflreCPb7lis8deasZUxjZZGPIHH%2Bmxz5TWPtqxMmIhOswrOmnOhw&X-Amz-Signature=78bb1874713f7410a884bd933b3cec8bc2688bd492f13fbf016ae191598e32cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FJOWGV5%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T062628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHNO0cxbjyS524%2BvIjY3Iqrld6G%2FY3HrIt6kGuTVYwAVAiBjTfQ2pO4EmFEyhYkugzfucmKp2Wk4bzs60MB3D%2B3wnir%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMaMYrvGeS173qbzUSKtwD7U9w4%2BqSYK7ZyScLdbJWk0fI%2BP9i%2Fq8amDRRmbc%2FQxns9LUGPsClRn3uTOsXvCtA5a5YjkPLByjowgq5lPNai6pJu9oEAaTOhXBSQYF%2Ft555sD9qKvxIaIZRCZ8t%2FccoEhQnH2O%2FBadAhyRX2LfZn9eUj1JGCKF9eASttwjBXBzixVE4Pd7rg2b6zhqKe3syUKtJPavDpRUC9jUPDruB8JZjQFy360w1GVjUgYIDQuh59HZf4P1AZz4YTgKhFYbBMOaiD1UeBVGTb60pibwdwr4O9nVSdRhHXUZZBQvcCVT1vnFqhItcSr9Rxd2vaU3HzD21etrOV0ASVeFcsN%2FGl1536JtPksGmXq0U8QezefXmoec9IHXL5Xr%2F333U%2BbHP%2Fh31f9OlFqN0lFzCL1DHxt2ATOgL7jjVR6IB9dzbt1P%2FXj%2FEjky%2BEhsSn%2FDFmxPbTzVTMHLOGhzVLr4AH4ZYrBis7McBMWB1mVCcZXSFEtQYKLU0M6wZQPR%2BDrt4XAh4S7sG%2FyAfeXJYTnPRQBQCt%2Be4qlS92Nws4Y0%2FdRlPhaW45dgv%2BarBbldmHfL7ZhvaAXrDRSlav8PvYXcn4u4Ei85mVukzqntlD%2F0NDKfhp7OGoG7N2O47mZyva8Qw6vzOyQY6pgHXNYNaDh3WIOFzqLnYiqFV0nqTciCAi%2B6qO8w%2BwJq%2BzofaZ6P5k%2FjHi%2Fj1zvxBkeBPEmS%2BjcgT%2FxVQI5pMiTSiOt8YiYz5K%2Fvvwo8u8HBz162QqhTBszuesZkdx28UBVG0JntMfFb6Em6o1k%2FJSXveEdqEByotryh0%2FzrNzbJYflreCPb7lis8deasZUxjZZGPIHH%2Bmxz5TWPtqxMmIhOswrOmnOhw&X-Amz-Signature=e04f91592c371bd085582e057a61be8f792a0a665592f00b37b0daf9575411ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

