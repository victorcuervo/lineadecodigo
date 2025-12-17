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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFSRMHBX%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T032253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2BUD1ey2EC5JQ9kuReJVOgh1xlGobT9%2Ft7RQGVB41%2BoAiEA7Naj0g4eCaH30fAj2B4Qc26sr839rAuBWu83rTi3sIsq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDEhTOkSXA84et2F1FircA0Kyc5D3iWvXVaTt15pF5rYZ3q33FMX6GE1%2FTBr8eJJWQ0Op%2Fn3Wj3IdwL2yLXdgz7KdPqj8nnDqTCrWaYRLLOqUbpWJCF%2BwdZOr6VaUor7Nn4QBTXufTfiK%2FvHcwnq0vyL1VAT5zuCWeQ%2FC71VD8iSW2Nt10IMamM64FTSZUkV7TcyYj8SC%2FyUFZarAXbXhiHH5cOC%2BENmJ0dfr1nf2oCTHxRygt01nviXqj1gg3pQGnxTa2xbo6g%2FMPtjFW8gKPYvk4DFPTUY5TaK9JANRyNA1ZWANac62VCesp%2FA36V6vopg1RIYJ3F8KjGvU2rvE0k3AS92VdpWhIvDH0%2FqQ1FM3EBRjjmdzSi1c3rP3mlnxFltZLZKD1w4zaaPK%2B%2BYFhf%2FThpw58Q%2B1GDmBehwIF9V6SWph1qq7ELbKDQgIPXP4uJycwrW0XR72QaFM2VGvXw1jXE1RmB1JARKUGiO6VWwWEzsImswVnLtSHVIUNY9D0L5f3V8w2S4EN6TRb6y6xmYvpQqT%2B5bxuM89vehdTG2NR7Uzri4mlNizKwg4joM4hHIjCog9Yz%2BkZQYjDqx0hbU3%2BRCoXeIUifzA6YB%2FJ6ebu%2BGMlkbTJ7G2PCGPdS2o%2FqlvclqS5n8Pnf3zMNuyiMoGOqUBSeH4s5FINPpUkYhmKcz%2BqZTSWO8GQq2g85Fr87wDkgIdhon5p42su36pLKq9cMV4HCSKkFXvdbmStZrlCM8Epm8CRl2KTUZegP3PeTruausP7ZQHiNQxPo5IF5%2FZ5nDjEgs3fIXWvWZH%2BqJVeMBotYoBz7d0DKSN7Tb86tcAdj9ha9lIUxJ9AxgbQWi4xWyaWMWNMLOmdirKyIvW6YOmR4kzwsGo&X-Amz-Signature=39d54571a379fca02a121677522b1e1678f136cb48144d20ea46452447965455&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFSRMHBX%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T032253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2BUD1ey2EC5JQ9kuReJVOgh1xlGobT9%2Ft7RQGVB41%2BoAiEA7Naj0g4eCaH30fAj2B4Qc26sr839rAuBWu83rTi3sIsq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDEhTOkSXA84et2F1FircA0Kyc5D3iWvXVaTt15pF5rYZ3q33FMX6GE1%2FTBr8eJJWQ0Op%2Fn3Wj3IdwL2yLXdgz7KdPqj8nnDqTCrWaYRLLOqUbpWJCF%2BwdZOr6VaUor7Nn4QBTXufTfiK%2FvHcwnq0vyL1VAT5zuCWeQ%2FC71VD8iSW2Nt10IMamM64FTSZUkV7TcyYj8SC%2FyUFZarAXbXhiHH5cOC%2BENmJ0dfr1nf2oCTHxRygt01nviXqj1gg3pQGnxTa2xbo6g%2FMPtjFW8gKPYvk4DFPTUY5TaK9JANRyNA1ZWANac62VCesp%2FA36V6vopg1RIYJ3F8KjGvU2rvE0k3AS92VdpWhIvDH0%2FqQ1FM3EBRjjmdzSi1c3rP3mlnxFltZLZKD1w4zaaPK%2B%2BYFhf%2FThpw58Q%2B1GDmBehwIF9V6SWph1qq7ELbKDQgIPXP4uJycwrW0XR72QaFM2VGvXw1jXE1RmB1JARKUGiO6VWwWEzsImswVnLtSHVIUNY9D0L5f3V8w2S4EN6TRb6y6xmYvpQqT%2B5bxuM89vehdTG2NR7Uzri4mlNizKwg4joM4hHIjCog9Yz%2BkZQYjDqx0hbU3%2BRCoXeIUifzA6YB%2FJ6ebu%2BGMlkbTJ7G2PCGPdS2o%2FqlvclqS5n8Pnf3zMNuyiMoGOqUBSeH4s5FINPpUkYhmKcz%2BqZTSWO8GQq2g85Fr87wDkgIdhon5p42su36pLKq9cMV4HCSKkFXvdbmStZrlCM8Epm8CRl2KTUZegP3PeTruausP7ZQHiNQxPo5IF5%2FZ5nDjEgs3fIXWvWZH%2BqJVeMBotYoBz7d0DKSN7Tb86tcAdj9ha9lIUxJ9AxgbQWi4xWyaWMWNMLOmdirKyIvW6YOmR4kzwsGo&X-Amz-Signature=c9d9e91b14d9e73b89f7f8ace5305615187398f4fe8505f997cf0e015e0d54a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
