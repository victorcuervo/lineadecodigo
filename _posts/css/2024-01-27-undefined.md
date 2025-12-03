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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7UYPFF3%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T105833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQCCqdGo%2BY%2BEW8%2BFHyc7iv7RyvrRybGukJgpsZvRt5FanAIhAI5epW1vXDK4pQw7sTynNAR9apflxTqPGfw590crP4lhKv8DCCsQABoMNjM3NDIzMTgzODA1IgwCIBUrK2g4Jzgw4Vwq3ANlSb4nmmXTj%2B3a%2B2vP861gFamv4PquqRvgDu%2B4cWyXELrF1%2F%2BTET8XNi7aBogyujXBvNl7oxzo2z%2BmrNawouRM%2BmMpOR4O4bBwXy2MWw71miyNZgQ%2BTc0Hm4D0UuQoEVk3q%2B3mh72Azic5JmCZAXW%2FbjjOqJPljaVYxTod0o6KUX%2BBxERv%2FFSB%2B9h%2BKCokgX1Vzz5us5URs5DMOjq4tXRMq%2BstolNBqV1hDM5KG9NJgDj9Y9FaykmRGDwblYu0za29xQwJOJvgT1tcCQxBavhUGm1%2BpuXb6GvmZAAPYqpHs2hna%2FqnMsOKV3rxEcbZEp8dpjsDFhvWP11jdi6aKpVDQ1OPNkx0e3ypQKKcky%2F6BHuT%2FuDymrdFVLImcfXNC74jKCLjnrDBnbzE9orYreWsgiaW7EuVRnx7wP%2BuFvjHavfnNlZAX6RFpxPMBaGnhmXIFZut98kjgb8jb5NXOwPVYIIMpGlJxX2J6ZXCTiRkClSn3Gp0Bk4226AzFTd5VYY6duBXRuk4WPMEok9v2%2Bpjz6g0fo2omvEpXzUD4XWtfyVYi1uGn97knl%2BqWCLgVDlMlenPf3xKS9SeCGkZFdTsTGkMccFNTlogfX67AZkkGvoiSFK3a0dxQVZ%2FeDDZksDJBjqkAee1sEtfRtHdSqzt%2Fhv3UI3SQLEbD69iENiA9lK5QvDYDuCe6vsgPbi%2F3Jvlep8zWzc9TDHz0ooIVYhXl5JoZ51npJ7cQKJxEkIuyl0rI8lukKKO883sFJg1NDLHN1zoYJ9iK7FGTkFXivokTSnoSAiXYR%2BFC9szN5y7yape7CRyTx98pFZRw5RQ5T%2FDdeRF3D8MlXaBN5GcufnIezQA0ZrW5g5Y&X-Amz-Signature=5e52e0db38cdf68cc25e36e1a3c4b36b05630293b66db9c4279185a6b858c3f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7UYPFF3%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T105833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQCCqdGo%2BY%2BEW8%2BFHyc7iv7RyvrRybGukJgpsZvRt5FanAIhAI5epW1vXDK4pQw7sTynNAR9apflxTqPGfw590crP4lhKv8DCCsQABoMNjM3NDIzMTgzODA1IgwCIBUrK2g4Jzgw4Vwq3ANlSb4nmmXTj%2B3a%2B2vP861gFamv4PquqRvgDu%2B4cWyXELrF1%2F%2BTET8XNi7aBogyujXBvNl7oxzo2z%2BmrNawouRM%2BmMpOR4O4bBwXy2MWw71miyNZgQ%2BTc0Hm4D0UuQoEVk3q%2B3mh72Azic5JmCZAXW%2FbjjOqJPljaVYxTod0o6KUX%2BBxERv%2FFSB%2B9h%2BKCokgX1Vzz5us5URs5DMOjq4tXRMq%2BstolNBqV1hDM5KG9NJgDj9Y9FaykmRGDwblYu0za29xQwJOJvgT1tcCQxBavhUGm1%2BpuXb6GvmZAAPYqpHs2hna%2FqnMsOKV3rxEcbZEp8dpjsDFhvWP11jdi6aKpVDQ1OPNkx0e3ypQKKcky%2F6BHuT%2FuDymrdFVLImcfXNC74jKCLjnrDBnbzE9orYreWsgiaW7EuVRnx7wP%2BuFvjHavfnNlZAX6RFpxPMBaGnhmXIFZut98kjgb8jb5NXOwPVYIIMpGlJxX2J6ZXCTiRkClSn3Gp0Bk4226AzFTd5VYY6duBXRuk4WPMEok9v2%2Bpjz6g0fo2omvEpXzUD4XWtfyVYi1uGn97knl%2BqWCLgVDlMlenPf3xKS9SeCGkZFdTsTGkMccFNTlogfX67AZkkGvoiSFK3a0dxQVZ%2FeDDZksDJBjqkAee1sEtfRtHdSqzt%2Fhv3UI3SQLEbD69iENiA9lK5QvDYDuCe6vsgPbi%2F3Jvlep8zWzc9TDHz0ooIVYhXl5JoZ51npJ7cQKJxEkIuyl0rI8lukKKO883sFJg1NDLHN1zoYJ9iK7FGTkFXivokTSnoSAiXYR%2BFC9szN5y7yape7CRyTx98pFZRw5RQ5T%2FDdeRF3D8MlXaBN5GcufnIezQA0ZrW5g5Y&X-Amz-Signature=67e16def8bb0bb9c38e90d115acec7e0f2614141fd2cb94024d136bed400a630&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

