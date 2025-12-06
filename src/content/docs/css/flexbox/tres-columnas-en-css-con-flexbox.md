---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466646O3M7U%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T055940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIARWedp1WOOitmjvnmCgSY0Cks8hJ9xkE3fyFluMklKqAiB23LUBWXNMQa4zMVorinbZEjAzdsO9If8ITyIfS4TLrSr%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIMUKolarmCKiSI06GaKtwDGNVKHVSOTDJ5ow95CYg0iY7BqCMD7alb3TDDJkVbFuLzf5xXVmO4Isac21dR27gErgr3whCWnEiBxo%2BPmDB4EAwyH3Gr2QHlOYPKpahdSleIQGxGAYHCvWUhrhVm7zVp4u%2F4DTvZe%2FEAOp7UHkat6LS3ChkP0eEk0AKjzExTp2qMl0yisnl%2BnWF8kFqzVI6vyCu0XMjC7tIWIQe6Xj0%2BTUSJSOEyK3QFR6fp35NpwlYCs8lU1eokdXlmnvVqiXwXBewg0wKprL7FFgV6WbkND39VPZJYYkMqouuq%2BlZni1q1dd9ONxrlaXt0oJu3XK0UotPOkDCSOVKoKnfU6YccyHRLR%2Fe5cb9YBstbD04pbZxzjy8EkWIgXY0MPzufXl1zhzWJmSMnIVzeiAisC3Z7e%2F7sjJJZSF6kqORpnDRhB8xwr96sIBB269ztI6QBbiB2pRKcaiH6w4exSVCkdlyI6PmDr1puLrZeb6QS%2FngIclOcrkBuywhGmOg0eH1sHaEWMxUlWVNAl%2FvzzmcvMIUwczr8YhvWtLBV4Gp75NLbtT7oT3QyiB0LBUIYZcqVd6eQzFAqY%2FhqsbHb2JglH5uItsOQIeXfSfHbxGpfpq7%2Bx0zrUttcRucsyQr%2F76Mw3fzOyQY6pgEzTfejhRXJIFTHqwWA3FoW0rje%2BAbst4NQo8anQgsP39gPxq4uf2LZoYoTmErGddU0la1BwLnbODxq8Mb1hP7ixehBj8KPL5uURrTb4L0CMEwLsVFJuotGhcKnyEnEhX%2BSpa6Egme9HMRa2VCkAPnCLngUiuUGd9Fm8%2BjeklvAksH1D%2BQ7tiGg9ZK%2B11rxgebSgeJRFLHNLZnMV2mTEhvATocvk9cm&X-Amz-Signature=65ba3b2a03077e5d9f2eaaac02567ae307c888c5a188231d6d2d1837c8cc6433&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466646O3M7U%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T055940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIARWedp1WOOitmjvnmCgSY0Cks8hJ9xkE3fyFluMklKqAiB23LUBWXNMQa4zMVorinbZEjAzdsO9If8ITyIfS4TLrSr%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIMUKolarmCKiSI06GaKtwDGNVKHVSOTDJ5ow95CYg0iY7BqCMD7alb3TDDJkVbFuLzf5xXVmO4Isac21dR27gErgr3whCWnEiBxo%2BPmDB4EAwyH3Gr2QHlOYPKpahdSleIQGxGAYHCvWUhrhVm7zVp4u%2F4DTvZe%2FEAOp7UHkat6LS3ChkP0eEk0AKjzExTp2qMl0yisnl%2BnWF8kFqzVI6vyCu0XMjC7tIWIQe6Xj0%2BTUSJSOEyK3QFR6fp35NpwlYCs8lU1eokdXlmnvVqiXwXBewg0wKprL7FFgV6WbkND39VPZJYYkMqouuq%2BlZni1q1dd9ONxrlaXt0oJu3XK0UotPOkDCSOVKoKnfU6YccyHRLR%2Fe5cb9YBstbD04pbZxzjy8EkWIgXY0MPzufXl1zhzWJmSMnIVzeiAisC3Z7e%2F7sjJJZSF6kqORpnDRhB8xwr96sIBB269ztI6QBbiB2pRKcaiH6w4exSVCkdlyI6PmDr1puLrZeb6QS%2FngIclOcrkBuywhGmOg0eH1sHaEWMxUlWVNAl%2FvzzmcvMIUwczr8YhvWtLBV4Gp75NLbtT7oT3QyiB0LBUIYZcqVd6eQzFAqY%2FhqsbHb2JglH5uItsOQIeXfSfHbxGpfpq7%2Bx0zrUttcRucsyQr%2F76Mw3fzOyQY6pgEzTfejhRXJIFTHqwWA3FoW0rje%2BAbst4NQo8anQgsP39gPxq4uf2LZoYoTmErGddU0la1BwLnbODxq8Mb1hP7ixehBj8KPL5uURrTb4L0CMEwLsVFJuotGhcKnyEnEhX%2BSpa6Egme9HMRa2VCkAPnCLngUiuUGd9Fm8%2BjeklvAksH1D%2BQ7tiGg9ZK%2B11rxgebSgeJRFLHNLZnMV2mTEhvATocvk9cm&X-Amz-Signature=576c92decfaec0108478edc3502f5265f2595457c9099ad9e95543ccfdb18e40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

