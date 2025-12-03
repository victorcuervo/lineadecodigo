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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2NNH7UG%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T105654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIEgt%2FOYpiNZ3Qgm8UxyiOyvs77MFd5yaB9Vu85rApqB9AiEA4yqYjclTr1EziH8zQMpthOeIJI3fDyLioAtNXV%2FZG9Yq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDOUov8kTZv7l%2BeshiCrcA6%2BSc%2F35Gcvn8kilZ6uctHQFp4HFvjLOGVFw9Wi8%2FuyAvS65u%2FES8pAVqQk%2B8sOYwdxpIXkVxmC%2F6YMFkAAlObQZlSnaVPIkCJUgfmF4LBxExeTtQZYNJnEJRodO6f22%2BycHVSFaw5Gz76XVPxTkEvy90yWvFhQSyoL0s42VASgdWfpP5XpdDUoblAlVL6v9UYQkKUhQzjwcG3T0ACZpuw5sCBmt3XaYoNFcXeofZqJMtSmPCqiq3yORUFZgvodPVtSPf%2FNrmESRmjqvKWFKYipPcLftKW5yqbyPpYmmV0Tp5UHauLklwZzS6It%2FpLWiCvWZWw5re21mQyeHWBfyZUOXiXOqVCBTcfIjqG6ANb2hrWiB%2B3onBT56SnfgZ%2BTXYlp1xyFjFuqCtPDT%2B2wt7odYOzHYtmjAm1T%2B6lf6xvWu3Jib1Je%2FjACu3yrzZq%2FsgxV9Tdilh2YyxZQfGmxdsx4wWK0tnn%2BXKwUuhombsNgsiTaRgOnSNMaT%2FLDTOrkzjbX4iZLcRGsmhtaTK4tIXtRTzLcs%2BMY2dw33Qlb%2FsvqZ1kYi3%2BmNOZU3VcvnwThztyDv0i%2FSntjNKWfzvYZW%2BiFUtX4rEWtIlpY0c1K5rDlwhtG3hLartorRcyIFMOqTwMkGOqUBON7pIHymnFhsmlDiewd7vDHKZSXIZNVlpsIje8wySlSxNa6KJmsn8F2DpKJzMhJGMtZqluQjzv41PzEtT0SDpKrfAXKkkdsQ55xJ874LAX3NPhlFhkHrS%2BeS5%2BD8bnc2Mydk63EoGsrn4FcYwlyS788fyTct2jKHUkc8K%2BNuH0P2XpJ7Uu0vvkkkBVWlLuCeCEPiIQxU%2FXn7%2FCR6AURzvu7Z5uYw&X-Amz-Signature=16b8c3b1714c06c886b214c963b9062ce88f0995544d662335299ebcc5b22b26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2NNH7UG%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T105654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIEgt%2FOYpiNZ3Qgm8UxyiOyvs77MFd5yaB9Vu85rApqB9AiEA4yqYjclTr1EziH8zQMpthOeIJI3fDyLioAtNXV%2FZG9Yq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDOUov8kTZv7l%2BeshiCrcA6%2BSc%2F35Gcvn8kilZ6uctHQFp4HFvjLOGVFw9Wi8%2FuyAvS65u%2FES8pAVqQk%2B8sOYwdxpIXkVxmC%2F6YMFkAAlObQZlSnaVPIkCJUgfmF4LBxExeTtQZYNJnEJRodO6f22%2BycHVSFaw5Gz76XVPxTkEvy90yWvFhQSyoL0s42VASgdWfpP5XpdDUoblAlVL6v9UYQkKUhQzjwcG3T0ACZpuw5sCBmt3XaYoNFcXeofZqJMtSmPCqiq3yORUFZgvodPVtSPf%2FNrmESRmjqvKWFKYipPcLftKW5yqbyPpYmmV0Tp5UHauLklwZzS6It%2FpLWiCvWZWw5re21mQyeHWBfyZUOXiXOqVCBTcfIjqG6ANb2hrWiB%2B3onBT56SnfgZ%2BTXYlp1xyFjFuqCtPDT%2B2wt7odYOzHYtmjAm1T%2B6lf6xvWu3Jib1Je%2FjACu3yrzZq%2FsgxV9Tdilh2YyxZQfGmxdsx4wWK0tnn%2BXKwUuhombsNgsiTaRgOnSNMaT%2FLDTOrkzjbX4iZLcRGsmhtaTK4tIXtRTzLcs%2BMY2dw33Qlb%2FsvqZ1kYi3%2BmNOZU3VcvnwThztyDv0i%2FSntjNKWfzvYZW%2BiFUtX4rEWtIlpY0c1K5rDlwhtG3hLartorRcyIFMOqTwMkGOqUBON7pIHymnFhsmlDiewd7vDHKZSXIZNVlpsIje8wySlSxNa6KJmsn8F2DpKJzMhJGMtZqluQjzv41PzEtT0SDpKrfAXKkkdsQ55xJ874LAX3NPhlFhkHrS%2BeS5%2BD8bnc2Mydk63EoGsrn4FcYwlyS788fyTct2jKHUkc8K%2BNuH0P2XpJ7Uu0vvkkkBVWlLuCeCEPiIQxU%2FXn7%2FCR6AURzvu7Z5uYw&X-Amz-Signature=90ef72390edd3c6f8eb0a1f05def950d66f17dce04bc4d35db28eddd930230c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

