---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CQLOQEG%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T154127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJGMEQCIDSBf%2FBrHrGz2L2cDjwFBWE1PBm7pVr3yz%2BlibEEOctQAiBfprYCr8F0hwbTZzh%2F7YyaUn6TScPJQLYho1xinPehyyr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMgoW4Db8j7RHPkzv7KtwDSjA51cMTpysH8tdDRDPiFqM04XKTYtpRY6PnIVCimg8KOtYDoqRLLNVFKVF9P3XMBpmanYFkkBHQZkWFAsvjVtvMMa7H%2BdGXBE8ovzMFnApVWqNR9mphT1ummTqPwN3Ro%2BDgT78kMHG7HvDbcuvYWvzXal92CIr8%2F%2FagmXZCemZe1UwTQH0Hnq1lsddwzmrigzRlMc9EQ9xaZ9Pbsa191hYNrFuzcOhIDVje4wnTsq%2BtUzs40P0phsrVFX9dRCXvVw%2FP%2FMGco%2BzmwI%2FQenDL31yg058VS8Q8uM0zYJDjWpDCCU1lXR4yVJXG3A56pUxaYQZnbX0jrRDATO1BqiaxmMrXeiIXHrCI6kpRuUlxNDmsPj6MlxkdcVCrHKZVUFwWDBP9Octl7cpth3MVHqtax1CNszOrQh6CwdN%2F88%2FmgSk4CUvWpW9nda3ptFQ7bwyY3HYDB%2BO9Wd6T5G5%2FDrQRryIoxwVRyTuXBpfFYHAI%2FCPUyvKcVLoIOZo6A2Wncnl2QTO0vAQKxAZ5nPgXqii0UQ8puV6%2FOYox6Whd%2BfHm4JFrqn4bdEs%2BhXSxCxJAQeCpHR3ym0EqJs%2BEDNIVQd4OEr3p8aDf2yKQy%2F5dKkpF6QUcUBDeo8m4KNCx8Hcw9L7GyQY6pgEpOn3uh8moGndaeO8SpUhKY1Ccvh7Byeg09a3q5w6dMIr6j4Mtjnxd4vKZYTFSfi8PBt6N%2BbQAWVF7Exa5pTDqDfIjus5zxowtEZM6B7bWpYG52VK%2B2DW7SIzVcSLgwwuqCj9iYMeqSRXKX4eAx%2FUhc2uTeoXl%2Fk75kCLIkYjc%2Fg7P%2BdnEMur2e%2FBkVjgkObz3TJkP%2ByVxK0EJ2UiAsmKdaZQSlvl1&X-Amz-Signature=84cf6037e1be7e4926a90bf7f4f17a2b85576195b1805ffb3931d0059787acc8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CQLOQEG%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T154127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJGMEQCIDSBf%2FBrHrGz2L2cDjwFBWE1PBm7pVr3yz%2BlibEEOctQAiBfprYCr8F0hwbTZzh%2F7YyaUn6TScPJQLYho1xinPehyyr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMgoW4Db8j7RHPkzv7KtwDSjA51cMTpysH8tdDRDPiFqM04XKTYtpRY6PnIVCimg8KOtYDoqRLLNVFKVF9P3XMBpmanYFkkBHQZkWFAsvjVtvMMa7H%2BdGXBE8ovzMFnApVWqNR9mphT1ummTqPwN3Ro%2BDgT78kMHG7HvDbcuvYWvzXal92CIr8%2F%2FagmXZCemZe1UwTQH0Hnq1lsddwzmrigzRlMc9EQ9xaZ9Pbsa191hYNrFuzcOhIDVje4wnTsq%2BtUzs40P0phsrVFX9dRCXvVw%2FP%2FMGco%2BzmwI%2FQenDL31yg058VS8Q8uM0zYJDjWpDCCU1lXR4yVJXG3A56pUxaYQZnbX0jrRDATO1BqiaxmMrXeiIXHrCI6kpRuUlxNDmsPj6MlxkdcVCrHKZVUFwWDBP9Octl7cpth3MVHqtax1CNszOrQh6CwdN%2F88%2FmgSk4CUvWpW9nda3ptFQ7bwyY3HYDB%2BO9Wd6T5G5%2FDrQRryIoxwVRyTuXBpfFYHAI%2FCPUyvKcVLoIOZo6A2Wncnl2QTO0vAQKxAZ5nPgXqii0UQ8puV6%2FOYox6Whd%2BfHm4JFrqn4bdEs%2BhXSxCxJAQeCpHR3ym0EqJs%2BEDNIVQd4OEr3p8aDf2yKQy%2F5dKkpF6QUcUBDeo8m4KNCx8Hcw9L7GyQY6pgEpOn3uh8moGndaeO8SpUhKY1Ccvh7Byeg09a3q5w6dMIr6j4Mtjnxd4vKZYTFSfi8PBt6N%2BbQAWVF7Exa5pTDqDfIjus5zxowtEZM6B7bWpYG52VK%2B2DW7SIzVcSLgwwuqCj9iYMeqSRXKX4eAx%2FUhc2uTeoXl%2Fk75kCLIkYjc%2Fg7P%2BdnEMur2e%2FBkVjgkObz3TJkP%2ByVxK0EJ2UiAsmKdaZQSlvl1&X-Amz-Signature=42b62e2de42fbfeb50e048c049a8e1f6ab0c8fefa55753a21ab718341d5a5b94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
