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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VB3K7MGG%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T135403Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIAbp8pUnLMjS%2FT1Qi7c9Po5RiyympLRBhCBlgqSW%2BujaAiAK%2BpEkVOS5vdVus5I%2FP1JSamnczH2FD2fmJAzVi7cXgir%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMWJaWiqziPF92%2FPNRKtwDjUE2lGqEcHnG0mudNmhHKd0TG%2Bd9Nc0icXouiMI3tdU03BQSJmqCIp0OnR%2FNKhp1vguZprpMjQwxb8rf38MiUmOvozsuiCYzOcRIlUCLFyFK5RzyPgPT7RgvuntkSLhzyDbCFhx7hWGQ61jEwilH5khKIujrXucQHaZ9IcOpVc%2BKKnPcanZ2u8RBtd3QOJsyKdWOKmcozR8BBHnPqDTAYiaUpCk9LsR02V566lGKb%2F0VrVRm8pA39doq27Q%2BRN5uN9%2BJb0vdpwaWioAMg8erAzWyO2c9E8ix8waEJ9BMcwerpkSCME73vQ2LXuhV4zrM17HWzFWEsFLK3FNxXpWsGPE79MJS8K2buYUWy%2BORwH9EUdJInigrp3ZyodUF2eObWkzCThQgNTd7CW1X95Jpm6EVT5Uiq%2BrMeJ8qxONbDqRp%2F%2FKZXqqSr%2B%2FtrXb6Fi4j9biD48NyVoaCX12Cl7mBaPTR1REEFoE5BuzVbcP1454Zr9jvCl38%2BCJhqRUYkLjPb3Gfcent4Jjrgxf%2FuJw3%2FWNUqWnslK0S2fYdeXV1VeMso5VEBkJ8cNMLQf1UPEO74SnGAoQ3IjZ71YJa04pGury18C%2Bl1QHfVg9ovhDQknvvpeNOqc333O%2BpE9gwkKHGyQY6pgG5Tv8DJ43tl9M5ehChf71T38i%2BV%2FgNsMcvmWQzSSAQjvARCJyJLid3MICebXWMdZbNnS3L%2FrvmcpubM7NMPyYUiVG74kHbMkkR4JLl5YRXrSJhaJQiKBM8ijUh156F5Ke0%2FdR5cLupY14cxjhakIpUpIvWKyzoZRVapWOaV%2B2LfO%2BRVo%2F62N%2B9VeIEzhsT3ufCQ4e8a4Mg6wg21niTt2VL9CCT5MH4&X-Amz-Signature=447415f2937c289e3f0d1a0c9fcda6f5324cac3650b9441bda5bca7747c5ef44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VB3K7MGG%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T135403Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIAbp8pUnLMjS%2FT1Qi7c9Po5RiyympLRBhCBlgqSW%2BujaAiAK%2BpEkVOS5vdVus5I%2FP1JSamnczH2FD2fmJAzVi7cXgir%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMWJaWiqziPF92%2FPNRKtwDjUE2lGqEcHnG0mudNmhHKd0TG%2Bd9Nc0icXouiMI3tdU03BQSJmqCIp0OnR%2FNKhp1vguZprpMjQwxb8rf38MiUmOvozsuiCYzOcRIlUCLFyFK5RzyPgPT7RgvuntkSLhzyDbCFhx7hWGQ61jEwilH5khKIujrXucQHaZ9IcOpVc%2BKKnPcanZ2u8RBtd3QOJsyKdWOKmcozR8BBHnPqDTAYiaUpCk9LsR02V566lGKb%2F0VrVRm8pA39doq27Q%2BRN5uN9%2BJb0vdpwaWioAMg8erAzWyO2c9E8ix8waEJ9BMcwerpkSCME73vQ2LXuhV4zrM17HWzFWEsFLK3FNxXpWsGPE79MJS8K2buYUWy%2BORwH9EUdJInigrp3ZyodUF2eObWkzCThQgNTd7CW1X95Jpm6EVT5Uiq%2BrMeJ8qxONbDqRp%2F%2FKZXqqSr%2B%2FtrXb6Fi4j9biD48NyVoaCX12Cl7mBaPTR1REEFoE5BuzVbcP1454Zr9jvCl38%2BCJhqRUYkLjPb3Gfcent4Jjrgxf%2FuJw3%2FWNUqWnslK0S2fYdeXV1VeMso5VEBkJ8cNMLQf1UPEO74SnGAoQ3IjZ71YJa04pGury18C%2Bl1QHfVg9ovhDQknvvpeNOqc333O%2BpE9gwkKHGyQY6pgG5Tv8DJ43tl9M5ehChf71T38i%2BV%2FgNsMcvmWQzSSAQjvARCJyJLid3MICebXWMdZbNnS3L%2FrvmcpubM7NMPyYUiVG74kHbMkkR4JLl5YRXrSJhaJQiKBM8ijUh156F5Ke0%2FdR5cLupY14cxjhakIpUpIvWKyzoZRVapWOaV%2B2LfO%2BRVo%2F62N%2B9VeIEzhsT3ufCQ4e8a4Mg6wg21niTt2VL9CCT5MH4&X-Amz-Signature=af062dae9680b15efd1c478108adc8a8fa5ddbcd4f0da63f5cc1c2c285f90a7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
