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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665G7OBX57%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T154807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJGMEQCIDLCbEEuslkzh4GJ0%2BWeJQWpMPi9qbjMuVMWVL9MxcOZAiATWUMCi5cX940rM0GDFQU78doiuQM4isUSOc2pC%2FZxbir%2FAwgwEAAaDDYzNzQyMzE4MzgwNSIMTFqW68Bs%2FQ%2ByjqW%2BKtwDFAB9EKzdbtrE%2BsAtuTmyra1lms%2F7QSG47qsJtyRC%2BclE3tpUDkp6y4yVphiypUewbi7QKX%2FYRyAgUkUT69irfpM0I4z4VXrg1ZxYvT2dj3XBxUp19eVCihRVjrIuVKac14CLWUfMvx6Dpf9VkdN7bAh1B%2FoiBsA%2FCOCxhjGtKA8SXW3ZV28Pbs%2FNkLa2bgOfdnb3kkOJSPAw5oakzLaH56Sg4VpsxkfXDIROun2Kw1j6t9emg5eJNlNpS%2FvDgLZx01ClE93SrpTIKSjRClUXCPbdoV1leaUN8jtyDySu7l0pno2DtXhcr11%2BlFoueoad4TNxWt0KQBH1rbBkuIlAXiJUCKivWTKj81W%2B2ofHnJ8tILwwhAHNEWOMA8wuCIKo%2F%2FFFII7jVezlfRrCvGzMoP%2Fo1VMr1sOxkidGXbDBKKF64130tDopMgO2%2FE9opn0w8YiDTda%2ByM8D0E%2B1Oc%2BXxVWgl2b4ENO6TTeC5Jfqo636uGQ7ozGu4P6zhxSAqORcF6BznV9ZE6dRTLr44pi7ExQa1bFh0WJHEuNZRNHQF8CKmDlnXOr8kK6nm0nEZEg5SdmU%2F4Umr%2BOrrZZkERJ2E9QKe56OA0mjR7YWH%2B3OxlfhtjjgbCTjwTFPDPow6qbByQY6pgEN87yQvJNGZnhgCwgEQikVN4aI12jv%2BDQI%2Fja6uKCjE9uIvvpbJcJ8vVy8YT8Gk%2BhD0%2F5mBvQlhLI6ZErg6LrLSPPobk3Hz2Z%2F7zmDwBMpdzVYotAB4YHuCg8XVLUDuSyRWhbGzB6n5RCjIlmMSKQ94QonA7V7KmLgznJyKQpPy1sW9eSETd7iwvN4zUZbiZfDPHxYDwkFLiAR9TlDlTczBpsC2fyx&X-Amz-Signature=6f11f58409b7369a1116e8b5e07068576593520d32de64894b6d9d87c6e5ed6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665G7OBX57%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T154807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJGMEQCIDLCbEEuslkzh4GJ0%2BWeJQWpMPi9qbjMuVMWVL9MxcOZAiATWUMCi5cX940rM0GDFQU78doiuQM4isUSOc2pC%2FZxbir%2FAwgwEAAaDDYzNzQyMzE4MzgwNSIMTFqW68Bs%2FQ%2ByjqW%2BKtwDFAB9EKzdbtrE%2BsAtuTmyra1lms%2F7QSG47qsJtyRC%2BclE3tpUDkp6y4yVphiypUewbi7QKX%2FYRyAgUkUT69irfpM0I4z4VXrg1ZxYvT2dj3XBxUp19eVCihRVjrIuVKac14CLWUfMvx6Dpf9VkdN7bAh1B%2FoiBsA%2FCOCxhjGtKA8SXW3ZV28Pbs%2FNkLa2bgOfdnb3kkOJSPAw5oakzLaH56Sg4VpsxkfXDIROun2Kw1j6t9emg5eJNlNpS%2FvDgLZx01ClE93SrpTIKSjRClUXCPbdoV1leaUN8jtyDySu7l0pno2DtXhcr11%2BlFoueoad4TNxWt0KQBH1rbBkuIlAXiJUCKivWTKj81W%2B2ofHnJ8tILwwhAHNEWOMA8wuCIKo%2F%2FFFII7jVezlfRrCvGzMoP%2Fo1VMr1sOxkidGXbDBKKF64130tDopMgO2%2FE9opn0w8YiDTda%2ByM8D0E%2B1Oc%2BXxVWgl2b4ENO6TTeC5Jfqo636uGQ7ozGu4P6zhxSAqORcF6BznV9ZE6dRTLr44pi7ExQa1bFh0WJHEuNZRNHQF8CKmDlnXOr8kK6nm0nEZEg5SdmU%2F4Umr%2BOrrZZkERJ2E9QKe56OA0mjR7YWH%2B3OxlfhtjjgbCTjwTFPDPow6qbByQY6pgEN87yQvJNGZnhgCwgEQikVN4aI12jv%2BDQI%2Fja6uKCjE9uIvvpbJcJ8vVy8YT8Gk%2BhD0%2F5mBvQlhLI6ZErg6LrLSPPobk3Hz2Z%2F7zmDwBMpdzVYotAB4YHuCg8XVLUDuSyRWhbGzB6n5RCjIlmMSKQ94QonA7V7KmLgznJyKQpPy1sW9eSETd7iwvN4zUZbiZfDPHxYDwkFLiAR9TlDlTczBpsC2fyx&X-Amz-Signature=9cce58cb7a796672b5167440ea5ed0750727e8574efc44147c942119fed7f8fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

