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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDVT5CGU%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T110910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQDmgo2AmIK%2F%2BEebetU1RZ7pAjezcmhzktph2vhtflaYvAIhAJqv23SGli0TaY8xpG9spDQTU121iDF9QvmpmYjrhycpKv8DCCwQABoMNjM3NDIzMTgzODA1IgxY3os8s%2BtS9BOIGq8q3AMhSzkvpAkjyzgMUxJy%2BT%2FNMc3tudfcondJvJ%2Ba9HUirABAfaM2rcV1OJ0Xg4nQ55TU3OTTP5QTmp5tR6UJdvI86d%2F8KMS%2Bj503ZthGX17gnEUvqeDODQeDgurDpCAaEW5XZzNiU7gU5GNlaZiAyWuLF8EVxQIL3REdvr93GIHBMWig8nsAFaMOR9SNA8P2ObN%2BjBo9pqjmKw7joVrRsgvGrwTXSr5nHsgyx4HALg%2FL1T7ktWanqmveVE1dSpaZn3A3PG72maaqDyeZwRi6zkmeGMi%2Bbrm9dJamrzGZTcw%2F%2FUY2hcp3y93%2FPefoc%2Fb6xxzl0yslw%2BxIPcrOYZhtXjtztRSPqF8olEx6yBG%2FIBGUSQU%2Bywvpz8ZJBY8A1NALnRsNMgw6KYFHE94CICNL6YCyIvTIUFNLbaYFRxG54XDT%2FHF6d36xcQN1EM0qUJwzZ2xW0ClpAu%2ByhV%2FhUqhBYT1fI2DqeBU%2FGU1Ekv68mJhIYr122hqLIC3ALT46Tq1M6gnXLGCl2BcS7S%2B4CBIajuzHwgT3q4HAJ%2BpcfrPJpbVIna1bmPQM%2Fe5o5nzM%2BCDQLGTJbJAPHHV0DQIc8dYG%2BIewkex56Mw5%2FO74HOPFfEUaKQNZhJHY%2Fkrr6U%2FW2TC8rsDJBjqkAS56ergKtWDX1AHEQt7xZRRClmyc4LIrSd5P0MJfdWlDfforSuHNMkrF7DxzvlwXYJ%2FxxNqTeRdLjDg2O%2Bw83m37dVbpbR2vpYAC9JJ%2Bu6SHDCpKuT%2BbhV6tqtKxX7cpzXpHVAFxxnZ2CtPJLkg0h7B51cAYoolxxFg0nGEaX26fad5%2B8UgWhmeGICeZk5LUH2PR6pxXeOtbRK8XRGBj88q9cmGX&X-Amz-Signature=66c6dfc9d9f967d1d7dc88cb2b0d102519a3af7c8b0c721cf124e0566d4b9937&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDVT5CGU%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T110910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQDmgo2AmIK%2F%2BEebetU1RZ7pAjezcmhzktph2vhtflaYvAIhAJqv23SGli0TaY8xpG9spDQTU121iDF9QvmpmYjrhycpKv8DCCwQABoMNjM3NDIzMTgzODA1IgxY3os8s%2BtS9BOIGq8q3AMhSzkvpAkjyzgMUxJy%2BT%2FNMc3tudfcondJvJ%2Ba9HUirABAfaM2rcV1OJ0Xg4nQ55TU3OTTP5QTmp5tR6UJdvI86d%2F8KMS%2Bj503ZthGX17gnEUvqeDODQeDgurDpCAaEW5XZzNiU7gU5GNlaZiAyWuLF8EVxQIL3REdvr93GIHBMWig8nsAFaMOR9SNA8P2ObN%2BjBo9pqjmKw7joVrRsgvGrwTXSr5nHsgyx4HALg%2FL1T7ktWanqmveVE1dSpaZn3A3PG72maaqDyeZwRi6zkmeGMi%2Bbrm9dJamrzGZTcw%2F%2FUY2hcp3y93%2FPefoc%2Fb6xxzl0yslw%2BxIPcrOYZhtXjtztRSPqF8olEx6yBG%2FIBGUSQU%2Bywvpz8ZJBY8A1NALnRsNMgw6KYFHE94CICNL6YCyIvTIUFNLbaYFRxG54XDT%2FHF6d36xcQN1EM0qUJwzZ2xW0ClpAu%2ByhV%2FhUqhBYT1fI2DqeBU%2FGU1Ekv68mJhIYr122hqLIC3ALT46Tq1M6gnXLGCl2BcS7S%2B4CBIajuzHwgT3q4HAJ%2BpcfrPJpbVIna1bmPQM%2Fe5o5nzM%2BCDQLGTJbJAPHHV0DQIc8dYG%2BIewkex56Mw5%2FO74HOPFfEUaKQNZhJHY%2Fkrr6U%2FW2TC8rsDJBjqkAS56ergKtWDX1AHEQt7xZRRClmyc4LIrSd5P0MJfdWlDfforSuHNMkrF7DxzvlwXYJ%2FxxNqTeRdLjDg2O%2Bw83m37dVbpbR2vpYAC9JJ%2Bu6SHDCpKuT%2BbhV6tqtKxX7cpzXpHVAFxxnZ2CtPJLkg0h7B51cAYoolxxFg0nGEaX26fad5%2B8UgWhmeGICeZk5LUH2PR6pxXeOtbRK8XRGBj88q9cmGX&X-Amz-Signature=6cb13a0964ab1bec5f8c7cf2a472755bcb6313e7cc95278772204121d5d237d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

