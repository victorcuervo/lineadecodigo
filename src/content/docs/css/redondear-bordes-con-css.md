---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
slug: /css/redondear-bordes-con-css/
author: victor_cuervo
---

Gracias a [CSS3](https://www.manualweb.net/css/) podemos redondear los bordes de los elementos. Y es que para redondear bordes con [CSS3](https://www.manualweb.net/css/) utilizaremos la propiedad [`border-radius`](https://w3api.com/CSS/border-radius/).


La sintaxis general de la propiedad [`border-radius`](https://w3api.com/CSS/border-radius/) es la siguiente:


```css
border-radius: [tamaño|porcentaje];
```


De esta forma podemos indicar **el tamaño o porcentaje** en el que se redondeará cada una de las esquinas de la capa. El valor corresponde con el radio de la circunferencia trazada en la esquina.


Así, si utilizamos:


```css
border-radius: 15px;
```


Veremos el siguiente resultado:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5QTTXDK%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T173143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEznYxsRdCqfNYc7Qo%2FUW%2FwOvZqir8FjpZ6OUZWHqrmAIhAPQebt52c7JQh6w65jiaHDBpUwGWOUBqZ9psKG4rmLg%2FKv8DCGAQABoMNjM3NDIzMTgzODA1IgwU0E4eBHN%2FQZ1qVsIq3AOU9VG8yufPxtwmQoNLZ4cJ4r56FVC2Ko0qN6oZRMwvVYRj4eS2EbC72gNGGBbAFVc9MSg6y0U4xroCtN%2FXTReGd%2BoFudvmgt46yK1H%2FTrUqnVUYAqfnsY%2FvNUvgJXWlUD4yxXMFRHtqZbIoqhkpXUCsxGmtJKx7%2F13daTv1FGjEMv%2BF69BTsBDCDDZDBH6yPYwevyP0Y5m07oX5I72lK6ptDZsAPr48SF0hIzWiV5ou%2Fu%2Ft1PHm6KYWre03ezn7Is5NsWgoXdB2eU1FuU5VBmncHX1hv%2BhGszUyk1GxZmTKVl09pyNhXV7L%2BgWcxnGUW2FeZLpBlc4ihqWFaMnCcA5X8iNqumaz9CUlXCf6mPM9x455WM%2F9rW2JuJ9SU0G5MK%2FdJNXUbo30ICe%2B9Cy2pPsrmSlIluSYrmAmWd34zNBo5jWtoFLmklp%2Fa2bhMTDJwGT8lZkYK6lMpZW0b3f%2FNUbcVefQAw%2Bx5Naz11519FHO%2F2qPiGw8DTe91U%2BpojEcpU4aSmqhzzjHdZiFrTC4WWvIBAhyBuQIdVDoA7rJVxvtsQ%2BB2mf9B%2F9wPIdbfYdZj8o4vHybY6%2BkB%2BdL6k6ibuMJpvmstcHwNcAcSBcvaTotzZmAeNOQayWOrdA8jCO8cvJBjqkAUONCouGponDerKZ%2FU5jo8IQGLYleML%2FoOcyRLTACvWU77dOjDjjOgVE0VNkazvu8o8sYw9owKoQUlnQ6KGvbQ%2FA5Yk7AZxjsgZRaoMp%2BfKfb4kmokDCP3ZCydXhK7YHLHffToWNq%2FZsHfb2JJnHFIcA62dM3THxfWSFTwf1Nt0H1gW81V%2BpU%2F4CoaQy5UbvafimHgbX%2FcHy6A7Uk1chN2C8wFzA&X-Amz-Signature=f0d4a678b53e92832ecd9676a686d206354e5acd6561c3d79675d57979be1fe8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Podemos especificar un radio para cada una de las esquinas. En este caso se aplicará el orden de las agujas del reloj, empezado por la esquina superior izquierda, siguiendo por la esquina superior derecha, esquina inferior derecha y esquina inferior izquierda.


```css
border-radius: 5px 30px 45px 60px;
```


Si bien tenemos la capacidad de indicar el tamaño de cada de las esquinas por separado mediante las propiedades: border-top-left-radius, border-bottom-left-radius, border-top-right-radius y border-bottom-right-radius.


```css
border-top-left-radius: [tamaño|porcentaje] [tamaño|porcentaje];
border-bottom-left-radius: [tamaño|porcentaje] [tamaño|porcentaje];
border-top-right-radius: [tamaño|porcentaje] [tamaño|porcentaje];
border-bottom-right-radius: [tamaño|porcentaje] [tamaño|porcentaje;
```


Cuando identificamos los radios de las esquinas por separado podemos indicar de forma diferente los dos radios que conforman la esquina. Por ejemplo, podríamos modificar la esquina superior izquierda de la siguiente forma:


```css
border-top-left-radius: 400px 200px;
```


Y obtendremos el siguiente resultado:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5QTTXDK%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T173143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEznYxsRdCqfNYc7Qo%2FUW%2FwOvZqir8FjpZ6OUZWHqrmAIhAPQebt52c7JQh6w65jiaHDBpUwGWOUBqZ9psKG4rmLg%2FKv8DCGAQABoMNjM3NDIzMTgzODA1IgwU0E4eBHN%2FQZ1qVsIq3AOU9VG8yufPxtwmQoNLZ4cJ4r56FVC2Ko0qN6oZRMwvVYRj4eS2EbC72gNGGBbAFVc9MSg6y0U4xroCtN%2FXTReGd%2BoFudvmgt46yK1H%2FTrUqnVUYAqfnsY%2FvNUvgJXWlUD4yxXMFRHtqZbIoqhkpXUCsxGmtJKx7%2F13daTv1FGjEMv%2BF69BTsBDCDDZDBH6yPYwevyP0Y5m07oX5I72lK6ptDZsAPr48SF0hIzWiV5ou%2Fu%2Ft1PHm6KYWre03ezn7Is5NsWgoXdB2eU1FuU5VBmncHX1hv%2BhGszUyk1GxZmTKVl09pyNhXV7L%2BgWcxnGUW2FeZLpBlc4ihqWFaMnCcA5X8iNqumaz9CUlXCf6mPM9x455WM%2F9rW2JuJ9SU0G5MK%2FdJNXUbo30ICe%2B9Cy2pPsrmSlIluSYrmAmWd34zNBo5jWtoFLmklp%2Fa2bhMTDJwGT8lZkYK6lMpZW0b3f%2FNUbcVefQAw%2Bx5Naz11519FHO%2F2qPiGw8DTe91U%2BpojEcpU4aSmqhzzjHdZiFrTC4WWvIBAhyBuQIdVDoA7rJVxvtsQ%2BB2mf9B%2F9wPIdbfYdZj8o4vHybY6%2BkB%2BdL6k6ibuMJpvmstcHwNcAcSBcvaTotzZmAeNOQayWOrdA8jCO8cvJBjqkAUONCouGponDerKZ%2FU5jo8IQGLYleML%2FoOcyRLTACvWU77dOjDjjOgVE0VNkazvu8o8sYw9owKoQUlnQ6KGvbQ%2FA5Yk7AZxjsgZRaoMp%2BfKfb4kmokDCP3ZCydXhK7YHLHffToWNq%2FZsHfb2JJnHFIcA62dM3THxfWSFTwf1Nt0H1gW81V%2BpU%2F4CoaQy5UbvafimHgbX%2FcHy6A7Uk1chN2C8wFzA&X-Amz-Signature=ab324f1568169ad3ac1ee6123018dcd36ce8e97c506f66af8ed6e8e6a8980f1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Si queremos modificar los dos radios de todas las esquinas podemos utilizar la versión reducida de [`border-radius`](https://w3api.com/CSS/border-radius/):


```text
border-radius: [tamaño|porcentaje] {1,4} [tamaño|porcentaje] {1,4};
```


Por último tenemos que ser conscientes del soporte de la propiedad [`border-radius`](https://w3api.com/CSS/border-radius/) de [CSS3](https://www.manualweb.net/css/). Ya que no todos los navegadores van a poder ejecutarla. En esos casos, los bordes que hayamos redondeado no se verán.


La implementación de [`border-radius`](https://w3api.com/CSS/border-radius/) que hemos visto es la de la [W3C](https://w3.org/). Hay implementaciones propietarias en los motores de renderizado de los browsers. Este es el caso de [Mozilla Firefox](https://www.ayudaenlaweb.com/navegadores/que-es-firefox/). Dónde las propiedades para redondear los borders con [CSS](https://www.manualweb.net/css/) están especificadas como:


```css
-moz-border-radius: [tamaño|porcentaje];
-moz-border-top-left-radius: [tamaño|porcentaje] [tamaño|porcentaje];
-moz-border-bottom-left-radius: [tamaño|porcentaje] [tamaño|porcentaje];
-moz-border-top-right-radius: [tamaño|porcentaje] [tamaño|porcentaje];
-moz-border-bottom-right-radius: [tamaño|porcentaje] [tamaño|porcentaje;
```


En el caso de Webkit (sería, por ejemplo, para versiones antiguas de [Safari](https://ayudaenlaweb.com/navegadores/que-es-safari/)) se soportaba mediante el prefijo `-webkit`:


```text
-webkit-border-radius: [tamaño|porcentaje];
-webkit-border-top-left-radius: [tamaño|porcentaje] [tamaño|porcentaje];
-webkit-border-bottom-left-radius: [tamaño|porcentaje] [tamaño|porcentaje];
-webkit-border-top-right-radius: [tamaño|porcentaje] [tamaño|porcentaje];
-webkit-border-bottom-right-radius: [tamaño|porcentaje] [tamaño|porcentaje;
```


Por lo cual, si queremos buscar compatibilidad con nuestros ejemplos anteriores podemos poner lo siguiente:


```css
border-radius: 15px;
-moz-border-radius: 15px;
-webkit-border-radius: 15px;
```


```css
border-radius: 5px 30px 45px 60px;
-moz-border-radius: 5px 30px 45px 60px;
-webkit-border-radius: 15px;
```


```css
border-top-left-radius: 400px 200px;
-moz-border-top-left-radius: 400px 200px;
-webkit-border-radius: 15px;
```


Los navegadores a partir de los cuales se empezó a dar soporte a [`border-radius`](https://w3api.com/CSS/border-radius/) son:

- [Chrome](https://ayudaenlaweb.com/navegadores/que-es-chrome/) 0.2 (con -webkit) y [Chrome](https://ayudaenlaweb.com/navegadores/que-es-chrome/) 4.0 (con el estándar)
- [Opera](https://ayudaenlaweb.com/navegadores/que-es-opera/) 10.5
- [Safari](https://ayudaenlaweb.com/navegadores/que-es-safari/) 3.0 (con -webkit) y [Safari](https://ayudaenlaweb.com/navegadores/que-es-safari/) 5.0 (con el estándar)
- [Firefox](https://www.ayudaenlaweb.com/navegadores/que-es-firefox/) 1.0 (con -moz) y [Firefox](https://www.ayudaenlaweb.com/navegadores/que-es-firefox/) 4.0 (con el estándar)
- [Internet Explorer](https://ayudaenlaweb.com/navegadores/que-es-internet-explorer/) 9
