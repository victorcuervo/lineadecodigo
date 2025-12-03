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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WK4DQ7FL%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T104314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQDQx%2F%2Bb%2BOrX9AhgvL5qj2c%2BXwymIJFzxj6EAlYmTTM11gIgeguMGtuYjXL2Qmoep9Kqx3NtaRgCo%2BuxhuzJf2h8a3Uq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDLIfdfeni7w%2F5XBvDSrcA%2FBrH%2FodGh4PQkwKgdQTdzQ2GLm4Z2aWK7ZUxUzFHWymt%2FOGmEfYOB1%2BZn9dKkZrVmYNsSe3FekwJsIyEA4NDhCacVNr%2Ffez%2FsLpymoZTk1830IxNAUdONhB87gFwVqfpQ1AqFsnqamWQcbTUHdRAToUiiUgatLReliqWPIOercN5sgw%2FGD3AKm42fXZ2GJLHLo15g0dRl6AXx86EBsm%2Brmaj0Ou4iI5p83hPW7CL12b4vCFI9okr5%2Fx%2FFytr9IXvtbAg2dgjF1sZ9q0FV4ZWEtNRdICtfEPzB3YpQ16whMzSISb0qS3tULew7BMZR5hvFBU9EZkgiJVDTioESgMkIdtj0ZEki28HBY%2F0%2F%2Ftr8pVoamx%2Bo0eg2xKORhE1%2BVAucIpkAi%2BRVqj8GJRvoEvI2%2BN7moUAcUk91McgbAY3cCYLZHVdTH4MHsXvVz4r3ZHvN8cXyR3ZHStBYx24znKZL0o8kq2nLuzUw9W%2Fwa9oG9qIXwmJN1c9aBfUERxcuPtCIadYgRepo7z9FgnMkyN9KPgLLZOX3a1Wgc5qdjyvQGxG4nsJMKPkfqmnCGQ%2BCSoBDEkvjQjKIhjXsiYNqr8nizNO1WITC1MJlUACkzqoHPV6%2BEktMs8r93C0qcaMOiSwMkGOqUBNIADrnXJdPegzRhc3upELh55i1PuebwhbC52NGt0ju4HkXzVQryl4f2UUetfIWetBgv2bVjXLRSZaqv6fetJn%2B8XXOtUEa9FpmA0j%2F8ToZQVAjVUrHnj756RkGkMG0KM%2BP2esL%2Frt1lLo6qmYqUr2azdb5SBLA%2F0iunAl6PP2h2p1uU9w%2FP6XUbecSpNMc%2FrVGT1s4%2FrB8p4NwO68G4jmnBCXzYo&X-Amz-Signature=d91b417170e88e377d3a3e21c3b6467c8fdcc2d32a78c5b6cc66a8b48c0d746c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WK4DQ7FL%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T104314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQDQx%2F%2Bb%2BOrX9AhgvL5qj2c%2BXwymIJFzxj6EAlYmTTM11gIgeguMGtuYjXL2Qmoep9Kqx3NtaRgCo%2BuxhuzJf2h8a3Uq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDLIfdfeni7w%2F5XBvDSrcA%2FBrH%2FodGh4PQkwKgdQTdzQ2GLm4Z2aWK7ZUxUzFHWymt%2FOGmEfYOB1%2BZn9dKkZrVmYNsSe3FekwJsIyEA4NDhCacVNr%2Ffez%2FsLpymoZTk1830IxNAUdONhB87gFwVqfpQ1AqFsnqamWQcbTUHdRAToUiiUgatLReliqWPIOercN5sgw%2FGD3AKm42fXZ2GJLHLo15g0dRl6AXx86EBsm%2Brmaj0Ou4iI5p83hPW7CL12b4vCFI9okr5%2Fx%2FFytr9IXvtbAg2dgjF1sZ9q0FV4ZWEtNRdICtfEPzB3YpQ16whMzSISb0qS3tULew7BMZR5hvFBU9EZkgiJVDTioESgMkIdtj0ZEki28HBY%2F0%2F%2Ftr8pVoamx%2Bo0eg2xKORhE1%2BVAucIpkAi%2BRVqj8GJRvoEvI2%2BN7moUAcUk91McgbAY3cCYLZHVdTH4MHsXvVz4r3ZHvN8cXyR3ZHStBYx24znKZL0o8kq2nLuzUw9W%2Fwa9oG9qIXwmJN1c9aBfUERxcuPtCIadYgRepo7z9FgnMkyN9KPgLLZOX3a1Wgc5qdjyvQGxG4nsJMKPkfqmnCGQ%2BCSoBDEkvjQjKIhjXsiYNqr8nizNO1WITC1MJlUACkzqoHPV6%2BEktMs8r93C0qcaMOiSwMkGOqUBNIADrnXJdPegzRhc3upELh55i1PuebwhbC52NGt0ju4HkXzVQryl4f2UUetfIWetBgv2bVjXLRSZaqv6fetJn%2B8XXOtUEa9FpmA0j%2F8ToZQVAjVUrHnj756RkGkMG0KM%2BP2esL%2Frt1lLo6qmYqUr2azdb5SBLA%2F0iunAl6PP2h2p1uU9w%2FP6XUbecSpNMc%2FrVGT1s4%2FrB8p4NwO68G4jmnBCXzYo&X-Amz-Signature=df800635288aaa7dbf180fdf434b6be9a0561ea2136ca7f880106225c4aaf48e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

