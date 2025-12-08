---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q55K3PXT%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T234849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGot2eTfUOImmK4%2BUwh7cow4Y4UozRAT6vdVrKfh%2FWUDAiB%2BHjz25l07UfO3d1WnBTzDJYE0BUf%2FMiHvVkvCzA7oGSqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMa36BQZrZyU2P3gU%2BKtwDwHLmJ8yDW1qEa4NV3dhaJTddpMVhQ16yx5TqVBvEWoAr1Oyb3%2Ftyw%2Be66m195DIncdOPXpR%2BRE%2B2jYQuglKrCQ41XybOg8G%2FbCYJanTc6ni87qE0YnQl3wSzqm8G6EYeWq63xL0CItTkLb1HscsiM4%2FBJdlSQIjoaeNIQbvpIlD1EWbOdwwkYVzeH9Ia8vdp5Sd0dGizmomvHNIkz7orXxWSWE1F%2FV18iBLX4gGkPK72OE25LzUkU7GwcwLj4Y0qPqHXgEIxIj1ubRU%2BFJp2jiPvwZDRQdVMA7SVUjeORdihflJ1AeAUxt5s35JYHk2KuB2roHHdnZ%2FII0xLWsdvPiqsOM07NoyTTxkBLQvCccj%2F9zoWElaOm4rggT7PF9KGmY6bXX%2BRnhOTJVI6t6MGWIJmLcjItQXiGCLlb3IEq32wjLfwosUvDBfygtBNua%2FXLm0rwO2Ef%2F%2BVnRvnsB2rmee28LCFbnBLPPdvCcaMZj%2BQKUS7A%2BJ%2BpH4Dh5n9Qm1ADJYbB4KsO6LELELAGbnib6%2BnLJZ4pOeqrO1JL4hc3jOk53NgwOl6SnCdBd8UN1PBMOAsucGNq60ED0uZEiqHigZxelU3F1uMKSNfYkT63waX0hdpxFkf9O80rdcwusPdyQY6pgFPKh%2BHUjiV1mpVY59BHwYTs5jxl3kAg3WpogshKC%2B6ZKMKt8XaT6kAm35xyKhKdwJ%2Be4xxznmFzyHWnoaX4D5LknSor6ce%2FMgUiDIgLXJmvErGZ%2BeJPQTPpjik3UofcILNd%2FQtCWPxAchXWd2l%2BzCu5SEPEEoRAHSfM6wgsSEQ2jACfE95kwOHCcITs%2BMoaBImnUIVoX0R%2BnTZIE2kS6AENdfWtWNR&X-Amz-Signature=21403281ff4caf39e61f1e2769ac961c8a4255cc861c951fde2cbb00e08709b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q55K3PXT%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T234849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGot2eTfUOImmK4%2BUwh7cow4Y4UozRAT6vdVrKfh%2FWUDAiB%2BHjz25l07UfO3d1WnBTzDJYE0BUf%2FMiHvVkvCzA7oGSqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMa36BQZrZyU2P3gU%2BKtwDwHLmJ8yDW1qEa4NV3dhaJTddpMVhQ16yx5TqVBvEWoAr1Oyb3%2Ftyw%2Be66m195DIncdOPXpR%2BRE%2B2jYQuglKrCQ41XybOg8G%2FbCYJanTc6ni87qE0YnQl3wSzqm8G6EYeWq63xL0CItTkLb1HscsiM4%2FBJdlSQIjoaeNIQbvpIlD1EWbOdwwkYVzeH9Ia8vdp5Sd0dGizmomvHNIkz7orXxWSWE1F%2FV18iBLX4gGkPK72OE25LzUkU7GwcwLj4Y0qPqHXgEIxIj1ubRU%2BFJp2jiPvwZDRQdVMA7SVUjeORdihflJ1AeAUxt5s35JYHk2KuB2roHHdnZ%2FII0xLWsdvPiqsOM07NoyTTxkBLQvCccj%2F9zoWElaOm4rggT7PF9KGmY6bXX%2BRnhOTJVI6t6MGWIJmLcjItQXiGCLlb3IEq32wjLfwosUvDBfygtBNua%2FXLm0rwO2Ef%2F%2BVnRvnsB2rmee28LCFbnBLPPdvCcaMZj%2BQKUS7A%2BJ%2BpH4Dh5n9Qm1ADJYbB4KsO6LELELAGbnib6%2BnLJZ4pOeqrO1JL4hc3jOk53NgwOl6SnCdBd8UN1PBMOAsucGNq60ED0uZEiqHigZxelU3F1uMKSNfYkT63waX0hdpxFkf9O80rdcwusPdyQY6pgFPKh%2BHUjiV1mpVY59BHwYTs5jxl3kAg3WpogshKC%2B6ZKMKt8XaT6kAm35xyKhKdwJ%2Be4xxznmFzyHWnoaX4D5LknSor6ce%2FMgUiDIgLXJmvErGZ%2BeJPQTPpjik3UofcILNd%2FQtCWPxAchXWd2l%2BzCu5SEPEEoRAHSfM6wgsSEQ2jACfE95kwOHCcITs%2BMoaBImnUIVoX0R%2BnTZIE2kS6AENdfWtWNR&X-Amz-Signature=7d550104197f43e3e13e257f4570ff69021ab7010861ae6e3d9342e4e207bcd6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

