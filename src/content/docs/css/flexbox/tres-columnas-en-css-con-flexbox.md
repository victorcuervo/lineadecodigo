---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GEPF55W%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T102416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC0I9XmvDkrGeXmEFfvli0%2B51e98MUgQtNQg%2BGlzdr4KgIhAK6Pc1Wxt4uavUdJ7LjUqf0RZdDJ3OCDK38JRSch9CDTKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzQW4LS0IrrUKmrUUUq3ANkNskl8Qs1FRDG4D6RGcHHO7qJyY4ZFkemv9P4z2FNqP9Q%2FZ2sW4%2F6VFOaSKpp0BdYF24SKogVOpZ3S3S%2Bv9YeDHfWHB4TYOwb9PuWh%2BJeRw5OCVCD20RN4nsk9h6%2Fqao%2FlJlVwNxar5Ycis2K%2FblaXeQGl4FnIlsMsHzDhV5QW6zq6d5Ny95dmqLjTE%2B65E46yrR7r5YnRfYKnUtVPfTaMZ%2F%2Bru2P%2FL4%2FnNRjgRnsv7JKFxDcv7QHKXqaxwAclVL%2Bn0eUZ5h%2FQyzxwEQSTWWdR%2Fq1RUl0lubDGJSP2Mr0gzRGkG%2FVphwfSowQaQfaPI57hWHFq8gpaAeZLg%2FILjHcVvL3dmU%2Fvxzt6b8rO63yGhHD6kaHb6yt3N6MwM%2F4KvZrR9Lq5DG9qCaVzx2%2FcLozEYaISaH2BUEEZlzyxKq%2BJetHJI7WGDXC714Tuug%2FWrGSl6xH8EkVTagmGmWS5LhIeg%2BE6EV16UEdhc5FENxl6IDTbXCOGAy71LrtKZvJ0iC2BPHOoNhfO5A8cvplTwBLZgTULP%2Bj6D9oNDL5YRIaXTppmlPIID0trfuEZGkLU9kIdbg0r8IGsiSxCMz%2BaDxKkYdhsOf8tvakKfCCky6YOAodAngVQNtd%2FpQqRjC8mtXJBjqkAWls%2BdyxnqM2wxITeQEXNK%2FXZfnGdugvBUe9qTJodfwxV6Bp6XOu7GTgEwOVxMrEXM9hO8%2BcHSfskr0ykKpLlqnrLfUy0nMKF%2BPX1QKpzde0JpWmElcX6S2U7gByZ4LyqC5yMWQsz%2Fke2rbG%2FbgjtPvz1Dsi1L3OBaMg3uVNaF6JLCquk60aVCZtrxcR6lkEEDUOjZdFO%2FlEjo3Xn3sWnCSvuhWa&X-Amz-Signature=9f751adeeb58291dc8b0f1bd5640e5e79f6178313427ca6cbe56d69a2238a8bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GEPF55W%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T102416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC0I9XmvDkrGeXmEFfvli0%2B51e98MUgQtNQg%2BGlzdr4KgIhAK6Pc1Wxt4uavUdJ7LjUqf0RZdDJ3OCDK38JRSch9CDTKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzQW4LS0IrrUKmrUUUq3ANkNskl8Qs1FRDG4D6RGcHHO7qJyY4ZFkemv9P4z2FNqP9Q%2FZ2sW4%2F6VFOaSKpp0BdYF24SKogVOpZ3S3S%2Bv9YeDHfWHB4TYOwb9PuWh%2BJeRw5OCVCD20RN4nsk9h6%2Fqao%2FlJlVwNxar5Ycis2K%2FblaXeQGl4FnIlsMsHzDhV5QW6zq6d5Ny95dmqLjTE%2B65E46yrR7r5YnRfYKnUtVPfTaMZ%2F%2Bru2P%2FL4%2FnNRjgRnsv7JKFxDcv7QHKXqaxwAclVL%2Bn0eUZ5h%2FQyzxwEQSTWWdR%2Fq1RUl0lubDGJSP2Mr0gzRGkG%2FVphwfSowQaQfaPI57hWHFq8gpaAeZLg%2FILjHcVvL3dmU%2Fvxzt6b8rO63yGhHD6kaHb6yt3N6MwM%2F4KvZrR9Lq5DG9qCaVzx2%2FcLozEYaISaH2BUEEZlzyxKq%2BJetHJI7WGDXC714Tuug%2FWrGSl6xH8EkVTagmGmWS5LhIeg%2BE6EV16UEdhc5FENxl6IDTbXCOGAy71LrtKZvJ0iC2BPHOoNhfO5A8cvplTwBLZgTULP%2Bj6D9oNDL5YRIaXTppmlPIID0trfuEZGkLU9kIdbg0r8IGsiSxCMz%2BaDxKkYdhsOf8tvakKfCCky6YOAodAngVQNtd%2FpQqRjC8mtXJBjqkAWls%2BdyxnqM2wxITeQEXNK%2FXZfnGdugvBUe9qTJodfwxV6Bp6XOu7GTgEwOVxMrEXM9hO8%2BcHSfskr0ykKpLlqnrLfUy0nMKF%2BPX1QKpzde0JpWmElcX6S2U7gByZ4LyqC5yMWQsz%2Fke2rbG%2FbgjtPvz1Dsi1L3OBaMg3uVNaF6JLCquk60aVCZtrxcR6lkEEDUOjZdFO%2FlEjo3Xn3sWnCSvuhWa&X-Amz-Signature=77ce1261b5ba6939f72417ffb748d6240c38ace6174a372821bd32979dc2a91f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

