---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2025-12-17
slug: css/redondear-bordes-con-css
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TV7GFQAK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T034007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCYUfgaUJ6beU6a051%2FWItoK6ezWQR93mhYqTc6dNu1LgIhAMCJ8YQsEZYisqyrsd53juzMilBIXT4dOwEQ8V3SKePKKv8DCHQQABoMNjM3NDIzMTgzODA1Igzw8sxl%2Bc7bkFimUUAq3AMoyfYplx8MO24jGZPW%2FlHBBqQAdD1diWft12vGwyQbxereqlvecMD5QI8OLGFNrh1tfrbzNLtpr0E%2F6eFuWvJ0ugGe3qUDEqTC5g3RV3psC0kDh%2FSWe9xl5Y%2F34ZjB4EnhekFNX5BkvB2JTYUnzcDt0qecOpK%2BmTSEZB%2BKd2D1YojD0Bn8w3xmtNOBunGDdD0A9btsy1k8HdceVQ4lqnyjCKnkWBFfcAOJoHtKfFCjLbRdgf1U8envrndXNb92FVu%2F5AD1e7YYZtW%2BGE%2FCenHgdtis6qurpWUd%2F6M1Ck2H8Kmsqopza%2BI7o1X%2FuMXrVxpmZPo7EkuIvvkbnvR01ZbsaDLkbbPKue%2BOZBBqe3D9SFglYyPQlWZ08a3YN6dDBpb4P0uncRizLMkJZXcHf%2BxdYS80mWljKlfpjpRoGpIwA5l7f8Q%2FvVAw8rxxpuQH9OqHjhj02r80%2FYOINMCkbZrfqsCO0GphpcudM%2FNwODhnmaVrh0kJ8viIgmXikWy0YgxRplpQUWxKVdh3NNHjM7f%2FSKgKy8h0nG7pEwqLqPnqmVRdkOFAeedzhNcqqjCHrAgKLbnFFCWtnFSLIF78xpT%2B8zJaVdExKO8xAzBIwAuK5oHoOOc921Lz1OBgmzDHsojKBjqkAWS4QAkK2DdXuCc67DlUUw3QtFWgTUfye9zuNpRfD5e81xhtaeApvyV8JD5tnRfGdq2ftaCQPU65jRxhpSso31auX2U%2BEHc5pqN9FA2lTvcgVCvlhv4KSdrzGeM2blDCE3BmdBbb6LX2SqgTlYAyWGk3f3nYBF32udlc6Y3TUpoLxNmBlrBIY%2BDuBxwGlNGTVwL8fliiNAxJs2LwCYmL33ogPWqv&X-Amz-Signature=88df362c5cf022b3facde6fd52a524fea5434401b20ca394c1543766a1cc64cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TV7GFQAK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T034007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCYUfgaUJ6beU6a051%2FWItoK6ezWQR93mhYqTc6dNu1LgIhAMCJ8YQsEZYisqyrsd53juzMilBIXT4dOwEQ8V3SKePKKv8DCHQQABoMNjM3NDIzMTgzODA1Igzw8sxl%2Bc7bkFimUUAq3AMoyfYplx8MO24jGZPW%2FlHBBqQAdD1diWft12vGwyQbxereqlvecMD5QI8OLGFNrh1tfrbzNLtpr0E%2F6eFuWvJ0ugGe3qUDEqTC5g3RV3psC0kDh%2FSWe9xl5Y%2F34ZjB4EnhekFNX5BkvB2JTYUnzcDt0qecOpK%2BmTSEZB%2BKd2D1YojD0Bn8w3xmtNOBunGDdD0A9btsy1k8HdceVQ4lqnyjCKnkWBFfcAOJoHtKfFCjLbRdgf1U8envrndXNb92FVu%2F5AD1e7YYZtW%2BGE%2FCenHgdtis6qurpWUd%2F6M1Ck2H8Kmsqopza%2BI7o1X%2FuMXrVxpmZPo7EkuIvvkbnvR01ZbsaDLkbbPKue%2BOZBBqe3D9SFglYyPQlWZ08a3YN6dDBpb4P0uncRizLMkJZXcHf%2BxdYS80mWljKlfpjpRoGpIwA5l7f8Q%2FvVAw8rxxpuQH9OqHjhj02r80%2FYOINMCkbZrfqsCO0GphpcudM%2FNwODhnmaVrh0kJ8viIgmXikWy0YgxRplpQUWxKVdh3NNHjM7f%2FSKgKy8h0nG7pEwqLqPnqmVRdkOFAeedzhNcqqjCHrAgKLbnFFCWtnFSLIF78xpT%2B8zJaVdExKO8xAzBIwAuK5oHoOOc921Lz1OBgmzDHsojKBjqkAWS4QAkK2DdXuCc67DlUUw3QtFWgTUfye9zuNpRfD5e81xhtaeApvyV8JD5tnRfGdq2ftaCQPU65jRxhpSso31auX2U%2BEHc5pqN9FA2lTvcgVCvlhv4KSdrzGeM2blDCE3BmdBbb6LX2SqgTlYAyWGk3f3nYBF32udlc6Y3TUpoLxNmBlrBIY%2BDuBxwGlNGTVwL8fliiNAxJs2LwCYmL33ogPWqv&X-Amz-Signature=23acae82f1a52785ec361e4605d251e71066c3f7ff7485354235331b7e2fc43c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Si queremos modificar los dos radios de todas las esquinas podemos utilizar la versión reducida de [`border-radius`](https://w3api.com/CSS/border-radius/):


```css
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


```css
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
