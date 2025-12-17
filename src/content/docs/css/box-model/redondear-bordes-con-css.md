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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4NPM66V%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T101113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH8E9p%2FJWCnMAw9HZ%2BmGzTQkkHogO7lbWTKTWHvqiob9AiEAr7V5m2fLweK5ToAWeXslUCoTI6dLfETqXElSOZXHOVAq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDCvhQIW%2BCO6aqodtlircA6vDQ2EkELEvxeJz8TIQFr9MMQPkBnh2mbIiLJEwyBDT%2BzM7EFSClbu1xOHIJg%2Fer4FPkyuYiHlhIUOKfmOHeWv8oSs1bSum6skzK9c45sCcfXHgRhSrDBMJNdOwecPUFGoZc6SW06XwqHlYsAfhB6WfeYY%2FKsE10X7WVAR1dw0qP0KFGVsPiltvTceLUVGVpBLeSNhGggcLip3RIAh0xSfRF5ck2r%2FWK%2Far2tTAssFMKnAWQCtl1Ad6mhyxFs7e15MS7ZtGrmh8eiHl%2F12S4GWoImScMVcR2wFhq0woH6n3LaCf21VGWv81ENh2E6VL2qOjj31UWgQZe2UGut92awPN4N4x2oq9dG1dYWVe0Wl%2B%2F0P9D6mA6Nf3u3isNm9vWRgRJ1RfDYJUOvD0jmbd9jch2738ZsrmiVia54Kr1ysrWZx%2BycFpc%2F9umMy%2FDLDkUZtJNmu7nE%2BAOG20suidgj9yKsMOuqZAL%2Bb64nrV7BrXhy1qQxKV0jzNE2DDTHYb0FBtziKlC6FHs8%2F7zzFummmaZ5hnIBDDpw1Z4YTBRKuSHM1lWKXpg1YNL1K2squkPpcIl2W%2Bsuqdv7G5whqt%2B6xybVM8nNIScmsrzB8awQwQLi%2Bvjd17fynhyOWGMPHvicoGOqUBFN%2BD5l0xSVnbQsVOlqS6%2BxwSF3TaO%2B8ctT2sx3l3FYfdvLLJ6DWaZ%2BCdAYC0FGWhAJbdclcPpoCMSUNCynX8mOy1kB4YiHBVAtBhueuG4I9evWwMJUFRJ6rEBFqealI2BEGKcSgpSfEcKJDvCOReGqGKM8o%2Bl3AGx%2F%2FsnqVNLNIZkMI5F%2Bi5EUS%2Fcx%2Bl3wk6NfJGMaen443gJ3IBowTXHj2GgG1M&X-Amz-Signature=9d25d2880f5ce412d0daf579f37e2b02ff2bd15b384b01b51eeab1b073fd8c38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4NPM66V%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T101113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH8E9p%2FJWCnMAw9HZ%2BmGzTQkkHogO7lbWTKTWHvqiob9AiEAr7V5m2fLweK5ToAWeXslUCoTI6dLfETqXElSOZXHOVAq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDCvhQIW%2BCO6aqodtlircA6vDQ2EkELEvxeJz8TIQFr9MMQPkBnh2mbIiLJEwyBDT%2BzM7EFSClbu1xOHIJg%2Fer4FPkyuYiHlhIUOKfmOHeWv8oSs1bSum6skzK9c45sCcfXHgRhSrDBMJNdOwecPUFGoZc6SW06XwqHlYsAfhB6WfeYY%2FKsE10X7WVAR1dw0qP0KFGVsPiltvTceLUVGVpBLeSNhGggcLip3RIAh0xSfRF5ck2r%2FWK%2Far2tTAssFMKnAWQCtl1Ad6mhyxFs7e15MS7ZtGrmh8eiHl%2F12S4GWoImScMVcR2wFhq0woH6n3LaCf21VGWv81ENh2E6VL2qOjj31UWgQZe2UGut92awPN4N4x2oq9dG1dYWVe0Wl%2B%2F0P9D6mA6Nf3u3isNm9vWRgRJ1RfDYJUOvD0jmbd9jch2738ZsrmiVia54Kr1ysrWZx%2BycFpc%2F9umMy%2FDLDkUZtJNmu7nE%2BAOG20suidgj9yKsMOuqZAL%2Bb64nrV7BrXhy1qQxKV0jzNE2DDTHYb0FBtziKlC6FHs8%2F7zzFummmaZ5hnIBDDpw1Z4YTBRKuSHM1lWKXpg1YNL1K2squkPpcIl2W%2Bsuqdv7G5whqt%2B6xybVM8nNIScmsrzB8awQwQLi%2Bvjd17fynhyOWGMPHvicoGOqUBFN%2BD5l0xSVnbQsVOlqS6%2BxwSF3TaO%2B8ctT2sx3l3FYfdvLLJ6DWaZ%2BCdAYC0FGWhAJbdclcPpoCMSUNCynX8mOy1kB4YiHBVAtBhueuG4I9evWwMJUFRJ6rEBFqealI2BEGKcSgpSfEcKJDvCOReGqGKM8o%2Bl3AGx%2F%2FsnqVNLNIZkMI5F%2Bi5EUS%2Fcx%2Bl3wk6NfJGMaen443gJ3IBowTXHj2GgG1M&X-Amz-Signature=b228d062d440f35b3ff4c5ede1d80135e7cf278e2e07f1f81f899572e24c0200&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
