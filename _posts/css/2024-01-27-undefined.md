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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXQLKMWL%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T015223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQDdyY85zuHD4D84qvEoKsaalWfPtoGqD0g7nr92lD6%2BMQIhAIWviiGwMV%2BkCo9YEWA%2BC6Gpg40W5E4q%2BliuKi0SA7k0Kv8DCCIQABoMNjM3NDIzMTgzODA1IgyiQoeYXUCIzytFyHMq3AOWZZLh9ejnqdAgNYRRYfwHXzj6%2FiNadadqA4Jbi%2FbgNKHx5M7MAQY0v52b0YtG3pbQb%2BllpDOXdBvRJf9q44qj4i8nMeYMtIhA1NsRFkoOZRMDk5wb9b2T%2BnfPJoNh7P31TzsXD4PcP%2B3VtQVpcxm19w5Kf6IDE0ObNWUlQr6XX%2BPTALl%2Bkd86eB74bntlNOAWHghSIuo78yMHvnqgfm7j3a6ixiK0l2PfYiAuGbSRhgfOlWsRlXmxV3ofn4XT%2Bt7w2%2BS8uPWIrWjGZPHZ6eSfuGtzOGPYGQY2sNIljsldhm%2BPcIG99qVvSStGNLAqF7u8ZoThEAFc%2B0WDfKgpfk2Wni4aGneyC%2FuALbfjw%2ByF0SZOv2j%2Fxhydka%2BaYjElNgxgR%2FCyPN3G9OoZ7bn3ze0sQGrj44tzqGBvhFLMPHZC6yDtQzyq2o0hxZ5zeb39d6ZDKm7GB2W9Qpbg1XQlGs1oYx%2BqsOVS2MsGbe4p6g1XK%2FFDLuNjetjblE%2Fz1T4q9ZjMpriSoj9KP8Zf4PBZq6e2%2BIh7zRcTA%2BsPgBnPWf%2Bxln1OF1sHPWRyFTR69cpnGa2KB33xVw8Kc1yrrKe6joDHWeu6yK0fAJTVoi%2BVEGToWFP1xamfNcrUDYHrrDCWl77JBjqkAZcCKKL5FIK8g0EaU3VuJfV4pvFAStidXbW9kQJcQFi%2B2uMtJCYMCOUrgoiR8l4rkX0na%2BGhyWk5%2BqNSUeTIFYibDi%2BCfe7IbHmAWNp8HKPwU6WGZVTm1xEjXnxG8IS0f9Zwr7QvPXDkOAchLVflj%2BQqcEzJZZarxe7pSbAcs1K%2BikOtJNBYdMc792owAEGhL8y9%2BVrWkS3jPWbkCgJbsD2KBYhs&X-Amz-Signature=6613f06cbc6d4d983284aedf1323d95b96c1d4f7d57a6a72ce25c7d3891651b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXQLKMWL%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T015223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQDdyY85zuHD4D84qvEoKsaalWfPtoGqD0g7nr92lD6%2BMQIhAIWviiGwMV%2BkCo9YEWA%2BC6Gpg40W5E4q%2BliuKi0SA7k0Kv8DCCIQABoMNjM3NDIzMTgzODA1IgyiQoeYXUCIzytFyHMq3AOWZZLh9ejnqdAgNYRRYfwHXzj6%2FiNadadqA4Jbi%2FbgNKHx5M7MAQY0v52b0YtG3pbQb%2BllpDOXdBvRJf9q44qj4i8nMeYMtIhA1NsRFkoOZRMDk5wb9b2T%2BnfPJoNh7P31TzsXD4PcP%2B3VtQVpcxm19w5Kf6IDE0ObNWUlQr6XX%2BPTALl%2Bkd86eB74bntlNOAWHghSIuo78yMHvnqgfm7j3a6ixiK0l2PfYiAuGbSRhgfOlWsRlXmxV3ofn4XT%2Bt7w2%2BS8uPWIrWjGZPHZ6eSfuGtzOGPYGQY2sNIljsldhm%2BPcIG99qVvSStGNLAqF7u8ZoThEAFc%2B0WDfKgpfk2Wni4aGneyC%2FuALbfjw%2ByF0SZOv2j%2Fxhydka%2BaYjElNgxgR%2FCyPN3G9OoZ7bn3ze0sQGrj44tzqGBvhFLMPHZC6yDtQzyq2o0hxZ5zeb39d6ZDKm7GB2W9Qpbg1XQlGs1oYx%2BqsOVS2MsGbe4p6g1XK%2FFDLuNjetjblE%2Fz1T4q9ZjMpriSoj9KP8Zf4PBZq6e2%2BIh7zRcTA%2BsPgBnPWf%2Bxln1OF1sHPWRyFTR69cpnGa2KB33xVw8Kc1yrrKe6joDHWeu6yK0fAJTVoi%2BVEGToWFP1xamfNcrUDYHrrDCWl77JBjqkAZcCKKL5FIK8g0EaU3VuJfV4pvFAStidXbW9kQJcQFi%2B2uMtJCYMCOUrgoiR8l4rkX0na%2BGhyWk5%2BqNSUeTIFYibDi%2BCfe7IbHmAWNp8HKPwU6WGZVTm1xEjXnxG8IS0f9Zwr7QvPXDkOAchLVflj%2BQqcEzJZZarxe7pSbAcs1K%2BikOtJNBYdMc792owAEGhL8y9%2BVrWkS3jPWbkCgJbsD2KBYhs&X-Amz-Signature=62f4c4816fe34bdecd778b20b9769b12ce61d701c64f1880d26eaeb4fec3ea2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

