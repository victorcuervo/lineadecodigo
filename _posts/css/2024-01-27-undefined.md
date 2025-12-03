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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKAAXTI2%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T172645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQD%2Bg2qt0CbWfjoZ5QnhATOWemSYtsyU%2Fgj8vYiL%2FlSSBgIgE89VPyKM%2BNVnlV6edX6uLH5hATraS%2FcWjAsCdZ%2BPbCIq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDFHesnPIDvhue1ihxSrcA6rCVJhfPM1GCTHT160%2BHAYEHMorGE88c0d%2BK0XZC4Q4LvyBnDZqCJuKjj2D5A2I9pqefReMA8oLH2T7sII%2FcARlIYxQEB%2Fv5WUQOiHLq2xtxPjW8OK%2FZEq5EQAoNVbxhqf2FK5ltEcFeCXVujkkFuWQ2XJOs1ZChkiun7MkyPzlzqAgfWE8A7P7kGA8Xr%2BbUkAs6xCp8%2BzjWvjtptaCtbVhE%2FMMOnd1Fy9t%2Fql0dt4O03FEYf4GomWnlX4l%2BVTa6ajxuEEzcL5J0FtvMpo4n4rEHDehkQLhaa%2BIGH%2Fei2V7K1nucC3JJt0I5lNOT7Mn9q3B0ETHVkAc2C1JbjMU3N3BrvGYHlkVNNKcqlnmBvoUV8Z%2FTviME8JAuXGROJUuRWKa1OOrl80cIMP3YO9AWTuzGrL%2ByibQMSE7waBHTRy0dT2l7JRmr7RooyfXHshKTNNOBYeBv8NFyS7kCTb5FJyVEjIHupWpKfBBkDAvqrtyXoGiQckA%2FexN4oYNCUJ8C2Wn9sShCb5Zsx3z7t871n2nKyE3ZkrFgbn%2BOp8Sx%2FTLOgrqiRB6ldbpX4MvhrDuawXsEUSLaLmlPtC%2FGRqjLcBxP24Ig%2BkeDgQppIeTsTIVFw2ABRhG431%2FbYq0MIzawckGOqUB1eRP7KBlt5WSUrg6pMt41NBO%2FwWFOItGl4xVq%2FQs8AVG2u%2FSsjcAcm2urPhLnxHl%2FMxgGu7oGjGLkxQ%2FyVwGYKVLWHAaQcCBCUDHQ6jpY6oNFzrjJDs4ggYz3jNuPMivEuqDi9R4LN5gw21j5KL8vL0HhzrHrGqAmrhjY%2BTljR6tBrI9WZPeY8y7%2Bg%2F2vkUvzvZvcpDHkL7q0drW%2BnLWpwWGI0BL&X-Amz-Signature=1a909bbd3aafc1cdf56febd1ee1477ecfff117fbc4d91c48da09404059839dd9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKAAXTI2%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T172645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQD%2Bg2qt0CbWfjoZ5QnhATOWemSYtsyU%2Fgj8vYiL%2FlSSBgIgE89VPyKM%2BNVnlV6edX6uLH5hATraS%2FcWjAsCdZ%2BPbCIq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDFHesnPIDvhue1ihxSrcA6rCVJhfPM1GCTHT160%2BHAYEHMorGE88c0d%2BK0XZC4Q4LvyBnDZqCJuKjj2D5A2I9pqefReMA8oLH2T7sII%2FcARlIYxQEB%2Fv5WUQOiHLq2xtxPjW8OK%2FZEq5EQAoNVbxhqf2FK5ltEcFeCXVujkkFuWQ2XJOs1ZChkiun7MkyPzlzqAgfWE8A7P7kGA8Xr%2BbUkAs6xCp8%2BzjWvjtptaCtbVhE%2FMMOnd1Fy9t%2Fql0dt4O03FEYf4GomWnlX4l%2BVTa6ajxuEEzcL5J0FtvMpo4n4rEHDehkQLhaa%2BIGH%2Fei2V7K1nucC3JJt0I5lNOT7Mn9q3B0ETHVkAc2C1JbjMU3N3BrvGYHlkVNNKcqlnmBvoUV8Z%2FTviME8JAuXGROJUuRWKa1OOrl80cIMP3YO9AWTuzGrL%2ByibQMSE7waBHTRy0dT2l7JRmr7RooyfXHshKTNNOBYeBv8NFyS7kCTb5FJyVEjIHupWpKfBBkDAvqrtyXoGiQckA%2FexN4oYNCUJ8C2Wn9sShCb5Zsx3z7t871n2nKyE3ZkrFgbn%2BOp8Sx%2FTLOgrqiRB6ldbpX4MvhrDuawXsEUSLaLmlPtC%2FGRqjLcBxP24Ig%2BkeDgQppIeTsTIVFw2ABRhG431%2FbYq0MIzawckGOqUB1eRP7KBlt5WSUrg6pMt41NBO%2FwWFOItGl4xVq%2FQs8AVG2u%2FSsjcAcm2urPhLnxHl%2FMxgGu7oGjGLkxQ%2FyVwGYKVLWHAaQcCBCUDHQ6jpY6oNFzrjJDs4ggYz3jNuPMivEuqDi9R4LN5gw21j5KL8vL0HhzrHrGqAmrhjY%2BTljR6tBrI9WZPeY8y7%2Bg%2F2vkUvzvZvcpDHkL7q0drW%2BnLWpwWGI0BL&X-Amz-Signature=a248137488c36dc0b3a61261b82965496dd5f9ef83385a2a754858ac920903f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

