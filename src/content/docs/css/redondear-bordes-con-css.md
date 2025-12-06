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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667C3L3P2U%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T103057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkpVxCMQ3M80ngntw4wQywwj5%2Fwoh1zbGa2KVElYBqugIhAN%2F%2FmxwIaqvdbtbd%2FkCfTWYwZZ5L01HUs1dIYzFXVWlhKv8DCHQQABoMNjM3NDIzMTgzODA1IgwAKjSQA1F90Yxww%2BAq3AOqMhnD5PM62JSVUN2EHPzMEGlX6uuvNFQzIWxnkPcyDXku%2F5PBLT61puwn5KKaFrMxqW7FiRRsMHCc%2BVgnv8VSgm7nYbEN5okb%2BxjzRNEFdImi%2BEAs9MVOiiovTPS5gAzIbYZgJD5CexXwxx3fNrWSPDfs0HnSnOL3hRINj4XWJf3qh4qrYi4A9Y4QKwp3lOjb91mYIow1RG2T38YuRvumWyAQuKjbTm%2BwvSc5xuBAp9lnxKEhUEc89sqU%2B5vkJ3VORVor44wDCJnzhBpGh4ydIYpg%2Bx2BQnJqg5rMucxKsxSZgfwd4gARh7rcaRBOWSuXPqqPWUAIwNEUUxtKSDbRPTGgxGU9uFcpGDaAn%2FTxWEMliZzB4w%2BYdFWgIzxiD%2Bs5DTCOF6fHoCccHuYB%2BhlH5z4%2BmiF2qio0Lpm%2Bj7sHefAX%2F4YBYg6IxD%2FNLvT0N4wJ3QiWXTB1GRR%2FpN8z5Euk6WXwv%2Fm3J7NTPz2xmH%2FYbjgq%2Bs6Ml4y9m9557DwR66wF3TxYmbv82eGbHILePdT0efehWiMZJgBSRV2WEPw5yZ9u0mqK0FV1Na1GfH%2FOCu5aeHKPqtA%2FupxYnBW9B6x7Hf01qFY1MHllm%2B36GuQ9%2BAjsWQFeIr7lPaVbUjDhidDJBjqkAcpaD%2Fr%2FlmEvsuVFyB1tdBIMG2UrsoFLyfH%2Ff9gvhLo0oR1CQUUQa5nvhzTKGCxcR6eJ8I9jko7246SkEQhvkRVxooHbC8MFeoSXNlOEs%2BnECM2JXQzi7hx%2FaCFZLu9fVPCpDl6z%2BzLvsTJJgiYBE15I9VHDj7T0wBuvnUFJ30zPBjyZLP9R2xyNrKLGwM6qvExYiMXYBBz2YAhL5zfPEHqPF1D1&X-Amz-Signature=0972c2db133b461282b2eccf50c5eccf22b62097ca97266462507240d3f227d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667C3L3P2U%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T103057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkpVxCMQ3M80ngntw4wQywwj5%2Fwoh1zbGa2KVElYBqugIhAN%2F%2FmxwIaqvdbtbd%2FkCfTWYwZZ5L01HUs1dIYzFXVWlhKv8DCHQQABoMNjM3NDIzMTgzODA1IgwAKjSQA1F90Yxww%2BAq3AOqMhnD5PM62JSVUN2EHPzMEGlX6uuvNFQzIWxnkPcyDXku%2F5PBLT61puwn5KKaFrMxqW7FiRRsMHCc%2BVgnv8VSgm7nYbEN5okb%2BxjzRNEFdImi%2BEAs9MVOiiovTPS5gAzIbYZgJD5CexXwxx3fNrWSPDfs0HnSnOL3hRINj4XWJf3qh4qrYi4A9Y4QKwp3lOjb91mYIow1RG2T38YuRvumWyAQuKjbTm%2BwvSc5xuBAp9lnxKEhUEc89sqU%2B5vkJ3VORVor44wDCJnzhBpGh4ydIYpg%2Bx2BQnJqg5rMucxKsxSZgfwd4gARh7rcaRBOWSuXPqqPWUAIwNEUUxtKSDbRPTGgxGU9uFcpGDaAn%2FTxWEMliZzB4w%2BYdFWgIzxiD%2Bs5DTCOF6fHoCccHuYB%2BhlH5z4%2BmiF2qio0Lpm%2Bj7sHefAX%2F4YBYg6IxD%2FNLvT0N4wJ3QiWXTB1GRR%2FpN8z5Euk6WXwv%2Fm3J7NTPz2xmH%2FYbjgq%2Bs6Ml4y9m9557DwR66wF3TxYmbv82eGbHILePdT0efehWiMZJgBSRV2WEPw5yZ9u0mqK0FV1Na1GfH%2FOCu5aeHKPqtA%2FupxYnBW9B6x7Hf01qFY1MHllm%2B36GuQ9%2BAjsWQFeIr7lPaVbUjDhidDJBjqkAcpaD%2Fr%2FlmEvsuVFyB1tdBIMG2UrsoFLyfH%2Ff9gvhLo0oR1CQUUQa5nvhzTKGCxcR6eJ8I9jko7246SkEQhvkRVxooHbC8MFeoSXNlOEs%2BnECM2JXQzi7hx%2FaCFZLu9fVPCpDl6z%2BzLvsTJJgiYBE15I9VHDj7T0wBuvnUFJ30zPBjyZLP9R2xyNrKLGwM6qvExYiMXYBBz2YAhL5zfPEHqPF1D1&X-Amz-Signature=394f5207f8e92a766628e1375876341db273dc9ea7085e64ab3d96ab3d259ca0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
