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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5CEVJZU%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T075013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEgwEKIJjnntMguHNSpS%2By%2BAKKyDhzPa6Ni9JScwZB7UAiEAm72VhwNXkMM%2FnzGR6qqoclA8%2FEvDRHVui9llOy1BGnsqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAJb2X98e9EN2XRAYircAzedW6GXpROSb40dkLyRJtTWvmGM6REQT6UgIbChiWH8Kgb4l5p7mTKQZgsk29SBq4wXP4RpDRBKOUr0ZsET9wZyUC5ibnJ%2FbqxCcUlKTp4D0VmLGkLqsrgg%2FT6z32YzQhK0wg1lxtwKNkS0LmoJ7wZpxj4YnRRWBS5P4O230kY8Gccq6APWyxFr3IlTjqoRhVNz4PtYLfBXDUFNOaKU5zQv%2FXU6cbR6vsnyXuuw9MkqfE2ES8xhyFYuIbhpW07N0CzLXwmRM0D0NC%2BnGjpKbksOTaN49yrUO5HVrgeH8E%2FzlU7KRFvL%2FKxUbYRQ%2Fog%2BZ1xJC9P2Mr7QH%2BOEbqdSxieFJ0YxAsrxMOFfWhvACm9Fp%2BC32jZERb%2BXmeJ3RfsTamSMfDy6YXutikTZ4t2L2bLe9aY4XFQOcdvu3E4mmC9AiEPHIy06JpqNnumF7cYNaKk0s0BBnVxDJQO1oL6nsXQWf4zBFOn1JTdNTGtoKOyXHJpScmQCK9lT6hvvzq36XNZVat3Kzx7O9GJVCKwg0JfUq6CDTE5nI2Q%2BsBCoH%2F%2BobF8amvbR4cm1e%2Bt9Hagaam%2BrkKJvq4%2Fxm6m0KwwRIUYTX0DT0Kia%2F50300X59QODK4hdpESnWL%2BKOsYOMJOd1MkGOqUBpDysbBDyFO9V6Yh6hseAzarokebRRtxU%2FWxb8ItHm2f0ZY%2FEPaKDtyQBp7WRgBQEIhuHCjMUxUf6gXSi3cdtcDNNmBxG47KayKCjUaN1VQN6nB5zmeuzsEqS3f2pHh7lzmvtIpdE64k8yfU9iL0UZGqq1CaUS4Wqc8E%2FGKRTx9hAA%2BKrNpO1JZqkD13cNpwBDLsafOnonjPnD%2FRVx0p55cqRNMUP&X-Amz-Signature=c96ffcf22839fd0214414039964a0a4e5de96350d39e707da2ffc34c077c0c23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5CEVJZU%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T075013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEgwEKIJjnntMguHNSpS%2By%2BAKKyDhzPa6Ni9JScwZB7UAiEAm72VhwNXkMM%2FnzGR6qqoclA8%2FEvDRHVui9llOy1BGnsqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAJb2X98e9EN2XRAYircAzedW6GXpROSb40dkLyRJtTWvmGM6REQT6UgIbChiWH8Kgb4l5p7mTKQZgsk29SBq4wXP4RpDRBKOUr0ZsET9wZyUC5ibnJ%2FbqxCcUlKTp4D0VmLGkLqsrgg%2FT6z32YzQhK0wg1lxtwKNkS0LmoJ7wZpxj4YnRRWBS5P4O230kY8Gccq6APWyxFr3IlTjqoRhVNz4PtYLfBXDUFNOaKU5zQv%2FXU6cbR6vsnyXuuw9MkqfE2ES8xhyFYuIbhpW07N0CzLXwmRM0D0NC%2BnGjpKbksOTaN49yrUO5HVrgeH8E%2FzlU7KRFvL%2FKxUbYRQ%2Fog%2BZ1xJC9P2Mr7QH%2BOEbqdSxieFJ0YxAsrxMOFfWhvACm9Fp%2BC32jZERb%2BXmeJ3RfsTamSMfDy6YXutikTZ4t2L2bLe9aY4XFQOcdvu3E4mmC9AiEPHIy06JpqNnumF7cYNaKk0s0BBnVxDJQO1oL6nsXQWf4zBFOn1JTdNTGtoKOyXHJpScmQCK9lT6hvvzq36XNZVat3Kzx7O9GJVCKwg0JfUq6CDTE5nI2Q%2BsBCoH%2F%2BobF8amvbR4cm1e%2Bt9Hagaam%2BrkKJvq4%2Fxm6m0KwwRIUYTX0DT0Kia%2F50300X59QODK4hdpESnWL%2BKOsYOMJOd1MkGOqUBpDysbBDyFO9V6Yh6hseAzarokebRRtxU%2FWxb8ItHm2f0ZY%2FEPaKDtyQBp7WRgBQEIhuHCjMUxUf6gXSi3cdtcDNNmBxG47KayKCjUaN1VQN6nB5zmeuzsEqS3f2pHh7lzmvtIpdE64k8yfU9iL0UZGqq1CaUS4Wqc8E%2FGKRTx9hAA%2BKrNpO1JZqkD13cNpwBDLsafOnonjPnD%2FRVx0p55cqRNMUP&X-Amz-Signature=d8e7b26cf3e6ef1d54480b525e92fb6200a9b0550f8463c13c8a050843f7bda8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
