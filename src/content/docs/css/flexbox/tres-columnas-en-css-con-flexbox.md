---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFY44SLK%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T181348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCOhBNiysPhjkPybhsfB6ElP4gr9%2Fxj75MzJwj80hA2gIhALmHP1k5mNGy79%2BpY4iCzImXNqOjkXW2J%2BLHsR6%2BN1URKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz1Y7hrIoTWf%2B448NQq3APaPknY%2BRh9ILhKPbIJLSDeWJR8XHAbitU4gpJQtujlvtEtq1yaf0njJ6GzJtnJW1SBWKJuxbJdcY1UiQzmA6tDcDOYzW3%2Bp90PN6w7%2FdAKCm3P3xh9hoSPqWPe%2FWX5Ej5%2B3%2FCOv2W4pfm9LRedT4SRmGXLf5rjX6DvnsnCfuCnt2Js6jmvFc2PtND7wOFIWB1LNwrT2l3hMMKIHbbCRSw%2FvsvlkEuBNBY%2BUzoo3CUgCnBsPvpb4ih0VsPRZFZziu3BG9N8Wz0ViZIUR%2B753J5Sd6xmIGi8ei17LrHAyeTk7O%2BkWfEWiy658k3tsURyYCHR2%2BPwvqHfpOl7qB6ZyD%2BLOnGEyIIC1cepQ%2FRFSkhJ2GrAnbgmqnLvsC2i%2FWP0btWXylnMI9tE29utbgbyOrlB1A2m%2FycyhZjOC%2BM9nMAX%2BaX2P1x0%2BFRWTYGkfVA3Xo8i1y6gX1dWgqw1zRAwHcvfiMr2xA5sP%2B%2Bk2S1ZA%2F4s0Gf%2FJKuCWtfiluRv%2FO%2FwR4Exr%2ByetfAf%2FFwfxfjQrUUkG00E4yprWXeX1afAe9j9RZzETA6A4Yhfa4rWsvIJUDIJhhGb7%2BAcQeZPUiPfQ4r5UflQk2hQmHKdPlGZm2%2BffRlCBimNN3%2Bdau%2BDGjDYh9zJBjqkAbpmjAm3wNP9Du1ZEb4eD4FLqMnM8Q0jAxfGSHoH3gchniyyxD8AO8EKJkipk6gTvNnm1lzQAW91wRBjeX3YQyR8NDMl%2FhQ3HgHCDKqsmAd77PHqkAoxhX%2F%2BFfwkHkjuGsfpj2yAq9cg0UCbZtsyCb%2FGH%2BI13NsPOngnfIvx8BUl5Jaa19HQ3%2F5Yr6syO7PYR0ls1mf0s%2BehKR9HEY02WXVLq34f&X-Amz-Signature=af9745c30f42c4e9614dfa384ea1d7d427dd2652fc74591c3dcc8eae3456fa98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFY44SLK%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T181348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCOhBNiysPhjkPybhsfB6ElP4gr9%2Fxj75MzJwj80hA2gIhALmHP1k5mNGy79%2BpY4iCzImXNqOjkXW2J%2BLHsR6%2BN1URKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz1Y7hrIoTWf%2B448NQq3APaPknY%2BRh9ILhKPbIJLSDeWJR8XHAbitU4gpJQtujlvtEtq1yaf0njJ6GzJtnJW1SBWKJuxbJdcY1UiQzmA6tDcDOYzW3%2Bp90PN6w7%2FdAKCm3P3xh9hoSPqWPe%2FWX5Ej5%2B3%2FCOv2W4pfm9LRedT4SRmGXLf5rjX6DvnsnCfuCnt2Js6jmvFc2PtND7wOFIWB1LNwrT2l3hMMKIHbbCRSw%2FvsvlkEuBNBY%2BUzoo3CUgCnBsPvpb4ih0VsPRZFZziu3BG9N8Wz0ViZIUR%2B753J5Sd6xmIGi8ei17LrHAyeTk7O%2BkWfEWiy658k3tsURyYCHR2%2BPwvqHfpOl7qB6ZyD%2BLOnGEyIIC1cepQ%2FRFSkhJ2GrAnbgmqnLvsC2i%2FWP0btWXylnMI9tE29utbgbyOrlB1A2m%2FycyhZjOC%2BM9nMAX%2BaX2P1x0%2BFRWTYGkfVA3Xo8i1y6gX1dWgqw1zRAwHcvfiMr2xA5sP%2B%2Bk2S1ZA%2F4s0Gf%2FJKuCWtfiluRv%2FO%2FwR4Exr%2ByetfAf%2FFwfxfjQrUUkG00E4yprWXeX1afAe9j9RZzETA6A4Yhfa4rWsvIJUDIJhhGb7%2BAcQeZPUiPfQ4r5UflQk2hQmHKdPlGZm2%2BffRlCBimNN3%2Bdau%2BDGjDYh9zJBjqkAbpmjAm3wNP9Du1ZEb4eD4FLqMnM8Q0jAxfGSHoH3gchniyyxD8AO8EKJkipk6gTvNnm1lzQAW91wRBjeX3YQyR8NDMl%2FhQ3HgHCDKqsmAd77PHqkAoxhX%2F%2BFfwkHkjuGsfpj2yAq9cg0UCbZtsyCb%2FGH%2BI13NsPOngnfIvx8BUl5Jaa19HQ3%2F5Yr6syO7PYR0ls1mf0s%2BehKR9HEY02WXVLq34f&X-Amz-Signature=9feaf18ec0fa9534d3f72d85462e1a73dd457c75b86b4967d3818e4e6abe9851&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

