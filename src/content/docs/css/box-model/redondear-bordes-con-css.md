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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPXPRA64%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T035835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHJpOQHjEdWVPG44cUI5AwLt%2FGJ4EHoPp4noYlObbaYVAiEA7Og5klRv5Qjp2QDluk4AeRBzB6rPvVwx9LKYg85e%2FF4q%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDFsUdxjckX42N1LCTyrcA0d5VmpF6G0kmNjucUCrlpRohqMos%2FwCKXfqJbL7Aty9LlNhW%2BWGRXWK19W0ul2QHSO8u0rk071gyQQdPeYgcAj5DHpXgh87OBz5cjH%2F0WslqTT9%2BTxRmAAgDMSoL63MiHph7sUoGKntmY3PLCv4Tkvx10%2BbeEDQbSlPtqpjTKLv9hgbxPv293H22f9Xnn2disve8T%2FtnlJXPs%2FEqBE1B6lSKvvDBvIcgRjTLGCZ7ZHAQy2X5LynWMzUGAAaNVFdB8GSoLHtdF4On1WmjBBm0XSNJNSCO1hhnkp%2FZjmNyG4%2BxC3ZNU98I83DkjZNOamKZ9BIw1MuMA07gEL%2BCzX8tVeM3PjuyN%2FY1%2FoVtKyUGmpMhwseloqw3ktcLuDnTY6Zv5cwe20UrpyzNd5wOvp0L056xSxVz2v%2FO18gHOTL5UfFLyEXG36N7sn3VjiO2I5NUbRmKQAucp43CgO7kCfMNWjNX48YPnyMDAbCdzTJ25GU8cqeZmnmbS4jN2KkJZ9uLqmHUpxc7rc81EsAAylFmGyoQWByfzJWaQl%2FGlCL%2FpX9fuqENGjLKh%2BfjZ7CxXWOYHCkqz6mzjQUFoW1JYSF8sKz1bSWFLTPuRKFI%2BAp8ebMrxwkFJzPr5aWTLruMJbOiMoGOqUBpUilnkvr3%2FBM2ntjRKHXF%2FPvyohuCwt3mjRMy0JkaruJWvHuDQK%2FJ3S3lC0grnWzk8qA5eJY8ozBbnzKEil%2F%2FiRlmSzhAySfjT9DrxwL8xo6%2F0Pbh9CL3Ftb9UOoqtt0fd5aM3TMEPFFtGsYfzk%2BaFMX%2FtH3N5LGwuwWNbZjA7qElSwkrqNh%2BhYwaCZtdhOPkrX3AXOrQNGYxKz6gjRHC6FMKSsW&X-Amz-Signature=7e38a9646a3a1ed81a713303a0924a8211e9da74899ceadf30844372ee2cd2b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPXPRA64%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T035835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHJpOQHjEdWVPG44cUI5AwLt%2FGJ4EHoPp4noYlObbaYVAiEA7Og5klRv5Qjp2QDluk4AeRBzB6rPvVwx9LKYg85e%2FF4q%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDFsUdxjckX42N1LCTyrcA0d5VmpF6G0kmNjucUCrlpRohqMos%2FwCKXfqJbL7Aty9LlNhW%2BWGRXWK19W0ul2QHSO8u0rk071gyQQdPeYgcAj5DHpXgh87OBz5cjH%2F0WslqTT9%2BTxRmAAgDMSoL63MiHph7sUoGKntmY3PLCv4Tkvx10%2BbeEDQbSlPtqpjTKLv9hgbxPv293H22f9Xnn2disve8T%2FtnlJXPs%2FEqBE1B6lSKvvDBvIcgRjTLGCZ7ZHAQy2X5LynWMzUGAAaNVFdB8GSoLHtdF4On1WmjBBm0XSNJNSCO1hhnkp%2FZjmNyG4%2BxC3ZNU98I83DkjZNOamKZ9BIw1MuMA07gEL%2BCzX8tVeM3PjuyN%2FY1%2FoVtKyUGmpMhwseloqw3ktcLuDnTY6Zv5cwe20UrpyzNd5wOvp0L056xSxVz2v%2FO18gHOTL5UfFLyEXG36N7sn3VjiO2I5NUbRmKQAucp43CgO7kCfMNWjNX48YPnyMDAbCdzTJ25GU8cqeZmnmbS4jN2KkJZ9uLqmHUpxc7rc81EsAAylFmGyoQWByfzJWaQl%2FGlCL%2FpX9fuqENGjLKh%2BfjZ7CxXWOYHCkqz6mzjQUFoW1JYSF8sKz1bSWFLTPuRKFI%2BAp8ebMrxwkFJzPr5aWTLruMJbOiMoGOqUBpUilnkvr3%2FBM2ntjRKHXF%2FPvyohuCwt3mjRMy0JkaruJWvHuDQK%2FJ3S3lC0grnWzk8qA5eJY8ozBbnzKEil%2F%2FiRlmSzhAySfjT9DrxwL8xo6%2F0Pbh9CL3Ftb9UOoqtt0fd5aM3TMEPFFtGsYfzk%2BaFMX%2FtH3N5LGwuwWNbZjA7qElSwkrqNh%2BhYwaCZtdhOPkrX3AXOrQNGYxKz6gjRHC6FMKSsW&X-Amz-Signature=10f6334a73475ab64ed51529e2391575c37806e181f756a6b1a30e294a0e24c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
