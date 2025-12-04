---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDADOJIW%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T053425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQCP%2BEuRFcsYN7MmN%2BL8%2FOxLXKprapL5L3%2F7C9xSwQ0rTQIgEx2%2FDu6T1YfEQvuDFwVW%2B%2Fsr2CccjzfYw6wCWvM9hIkq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDDJqu%2F3PApkxgipZ8CrcA13Nsle4tFJIhzdT8Rb%2FWjHELs%2BfdXDC1ElAB6elbrpM60T0HjJ4H2TRmqbgltQNd3G3OPu8wxM49op%2F81SJriajybY8mW1ft%2F3%2BKEsarDSJx0DNj8U%2B%2BjGDT4ZyEjKBHTYNPgyWb83NyFMq6qfRLZ7R31vH6Biu637ctdkoqxXkkZQDWmz%2BpDPRYnFJLYTldzQ%2FaedYyZh6R6DWolWRCmJ5Q%2FiZ38zmiCKB2HDL33zbsnGI27SwkDMhvX4H6P0kX9F1zY1uNBmbrc%2BR8Iu9LhpdnqKlxQTLMqf%2BXPauIyi1GEVS%2Fp1xx1iYig45Uo9vWRg4883Mp4je51iwYHyu59SkT7JZSq%2F11IaMuQuNU2uW0AHuaa88ulmhelR%2F2hxJBpu1AauFMrRa1%2BEQ%2FaYvVmndTVPmIFW9%2BMJ2nlngT35OLfHZAgHM9Qr0T4yEADRcN36u%2BxR3ImKc85pD60iF6ciLHIFUwgfIGKlqDaG%2BYpbdY8yEuTuPMXRX%2FJ%2FjZ7Aqq8G2%2B78T7YTdvsox5VWx0ICa0tWiVi3fRVur9zHiNUrLI3IoZYVe2dR3Td1t3BbZUIjaGwB4eeeszvVm22J%2BNj7nICH%2FftIayEcQcZg3D9vymJBdjAbrM8HfR%2FGiMNmuxMkGOqUBTgZmfizE7ty1qs2HzzU3MkBv8gmP%2FwX3GskZapz32FBybhV80z1qd1Ooa5pwlOqZznRSylsCMUbXc7GUs15PJljvuvyUgQVIXinq%2BIBjygc5pK6wxNbIwrkhuFCsw80qpZGImMKZScSx4lCIgP%2Fco6N7usd%2BGAGTz7bR6E%2Brhy%2Bu4huq34XNj3Q%2Fn8XsTlPi1wfH5eizMjR3Av6TFfwNyTqKXvyb&X-Amz-Signature=50bc721a528e419baad81c1d0890a8781694c41e3d303ca6b4bf61e12e9746fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDADOJIW%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T053425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQCP%2BEuRFcsYN7MmN%2BL8%2FOxLXKprapL5L3%2F7C9xSwQ0rTQIgEx2%2FDu6T1YfEQvuDFwVW%2B%2Fsr2CccjzfYw6wCWvM9hIkq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDDJqu%2F3PApkxgipZ8CrcA13Nsle4tFJIhzdT8Rb%2FWjHELs%2BfdXDC1ElAB6elbrpM60T0HjJ4H2TRmqbgltQNd3G3OPu8wxM49op%2F81SJriajybY8mW1ft%2F3%2BKEsarDSJx0DNj8U%2B%2BjGDT4ZyEjKBHTYNPgyWb83NyFMq6qfRLZ7R31vH6Biu637ctdkoqxXkkZQDWmz%2BpDPRYnFJLYTldzQ%2FaedYyZh6R6DWolWRCmJ5Q%2FiZ38zmiCKB2HDL33zbsnGI27SwkDMhvX4H6P0kX9F1zY1uNBmbrc%2BR8Iu9LhpdnqKlxQTLMqf%2BXPauIyi1GEVS%2Fp1xx1iYig45Uo9vWRg4883Mp4je51iwYHyu59SkT7JZSq%2F11IaMuQuNU2uW0AHuaa88ulmhelR%2F2hxJBpu1AauFMrRa1%2BEQ%2FaYvVmndTVPmIFW9%2BMJ2nlngT35OLfHZAgHM9Qr0T4yEADRcN36u%2BxR3ImKc85pD60iF6ciLHIFUwgfIGKlqDaG%2BYpbdY8yEuTuPMXRX%2FJ%2FjZ7Aqq8G2%2B78T7YTdvsox5VWx0ICa0tWiVi3fRVur9zHiNUrLI3IoZYVe2dR3Td1t3BbZUIjaGwB4eeeszvVm22J%2BNj7nICH%2FftIayEcQcZg3D9vymJBdjAbrM8HfR%2FGiMNmuxMkGOqUBTgZmfizE7ty1qs2HzzU3MkBv8gmP%2FwX3GskZapz32FBybhV80z1qd1Ooa5pwlOqZznRSylsCMUbXc7GUs15PJljvuvyUgQVIXinq%2BIBjygc5pK6wxNbIwrkhuFCsw80qpZGImMKZScSx4lCIgP%2Fco6N7usd%2BGAGTz7bR6E%2Brhy%2Bu4huq34XNj3Q%2Fn8XsTlPi1wfH5eizMjR3Av6TFfwNyTqKXvyb&X-Amz-Signature=4fa70bf754146e7b526f163b5f66ad51d9f128b1f842b3fac82a7b8e8daf0a09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

