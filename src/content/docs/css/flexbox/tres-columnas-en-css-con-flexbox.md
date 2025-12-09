---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNLNE7NG%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T082731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICDEJaPvD1iQdGlm6lQyLZLflprNM6rfO1q9yR5hjVbnAiEA98YwTsC2aYaxZGXqmAe%2F%2Blk69f9f3mDIgjSKOLmaoYwqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMoVWlCYQsfIUzv3gSrcAzSj6Y%2B9IKYqSKQT%2BW6RCuKljnPyGJ6fxHGBb9X6ApVdwX8j1cuW4TdfOxuLorEUObwW%2FZxeAP46Yf67aSZhgkMHErZgg2bT2sknaMa5raUp%2FLvuRaVqgdD92UoZaOK3yb%2FzhvpNaXHBEdXfMNn8f%2Fzz5colnJ756THr%2FJGSs7xcNtqCEM5VCSjrH9RcSdfATJmtZk%2FUV%2F6q4M5VZhYiYToktD5vkHB%2B3XaxgZbZoPGk%2BS5m07aNgnAC03zq%2BfBstSvriL41qk88DPZvu%2BWnsTCADNnlszPEUEYd2g8VW6mObSv8WFlyk7ZeQcnAHhLo3T7%2BlK3OUxMfIuUf8Mhx7az4OtmtgopxGB4I%2FuZw1vHflWI0RJx2P7%2FdqsLttfGGun%2BO9%2BOhGNy3uTCCvVptoOPPvBKMnSFxwmujkvdbRI9eKwtwMdFQMS8i7GAubkOsaCrDVpuFJQKclB9TW%2FCLAkzMdG3v3gtOSO%2BprV808S3hb%2FnHICBjdH1KNWaabA2W6XHKyOvc9E7WHbZAvfCVQf%2BqO5jAtquk8nEFwjXDGXxKYvyUOTbkZVOeYE3mnjGKc0i4r2HV2vix%2BxFWRb0KA2ypHCDMdmW9KCGkGy3u3rKjhMNDIhIg7VN3TuhmMNOk38kGOqUBhc0o%2FVKn5D1paULDsg4nOn9h3t4kfdHcP8PxpaUJF7PANYEpxLC7KfnGiWrE0TG0At9NdBKTFEmVj8iZGy0o3hJDs3J9%2BVBcNSBLpt1vKpLCDEkrlXEnNJKoh2Nd6PzNWj%2BBdVFz%2BhViPgoHSBYkC4qvw9rGm2qVcAt92HClQjqKa7fzfjA5XIP4sGmH6IMG856oCTVCPYRsVU%2FKZFdCNGdBPklT&X-Amz-Signature=1f25d9c0dbb368fdc59ff74d989fa9ddf6b7c4410834966e9744e59eafca5cee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNLNE7NG%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T082731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICDEJaPvD1iQdGlm6lQyLZLflprNM6rfO1q9yR5hjVbnAiEA98YwTsC2aYaxZGXqmAe%2F%2Blk69f9f3mDIgjSKOLmaoYwqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMoVWlCYQsfIUzv3gSrcAzSj6Y%2B9IKYqSKQT%2BW6RCuKljnPyGJ6fxHGBb9X6ApVdwX8j1cuW4TdfOxuLorEUObwW%2FZxeAP46Yf67aSZhgkMHErZgg2bT2sknaMa5raUp%2FLvuRaVqgdD92UoZaOK3yb%2FzhvpNaXHBEdXfMNn8f%2Fzz5colnJ756THr%2FJGSs7xcNtqCEM5VCSjrH9RcSdfATJmtZk%2FUV%2F6q4M5VZhYiYToktD5vkHB%2B3XaxgZbZoPGk%2BS5m07aNgnAC03zq%2BfBstSvriL41qk88DPZvu%2BWnsTCADNnlszPEUEYd2g8VW6mObSv8WFlyk7ZeQcnAHhLo3T7%2BlK3OUxMfIuUf8Mhx7az4OtmtgopxGB4I%2FuZw1vHflWI0RJx2P7%2FdqsLttfGGun%2BO9%2BOhGNy3uTCCvVptoOPPvBKMnSFxwmujkvdbRI9eKwtwMdFQMS8i7GAubkOsaCrDVpuFJQKclB9TW%2FCLAkzMdG3v3gtOSO%2BprV808S3hb%2FnHICBjdH1KNWaabA2W6XHKyOvc9E7WHbZAvfCVQf%2BqO5jAtquk8nEFwjXDGXxKYvyUOTbkZVOeYE3mnjGKc0i4r2HV2vix%2BxFWRb0KA2ypHCDMdmW9KCGkGy3u3rKjhMNDIhIg7VN3TuhmMNOk38kGOqUBhc0o%2FVKn5D1paULDsg4nOn9h3t4kfdHcP8PxpaUJF7PANYEpxLC7KfnGiWrE0TG0At9NdBKTFEmVj8iZGy0o3hJDs3J9%2BVBcNSBLpt1vKpLCDEkrlXEnNJKoh2Nd6PzNWj%2BBdVFz%2BhViPgoHSBYkC4qvw9rGm2qVcAt92HClQjqKa7fzfjA5XIP4sGmH6IMG856oCTVCPYRsVU%2FKZFdCNGdBPklT&X-Amz-Signature=a81f6f6706ee861d0fbb6ac1bad5a20893dc55aec26e75c86c9b1f4b964f3888&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

