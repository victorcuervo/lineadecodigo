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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHYDQ6KW%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T010847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDD%2FhYx9ZE%2FQEF0IKdG4NRJsOFZjDFC02%2BJK8PJey%2FH9AiEAvVzmQuRwkgPldzMyMmvpIMSUhnHhMvJKlB5vqa7ie2cq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDDL6qvAgX1F8Z%2BLIFSrcA%2B5ZU63xIEQiMtdEpYdCslFBB88Kz9D3ap9Wv0PN3qowBqNx6D6aGVcMY362x9vJyycVOukZCueVhgtrwo%2Bl6YWNiYHFBYCJI9lEMwB5oKRYALGXXIy%2BXmvGaBFhufLIaa2Y%2FIDdvMdZX9YXseT5yFL3VnYyaEi2NAQB7BisP5kprcwgLhvQKoclNbBd35Ro3B25myNvaqFVl8hLB5wujgC4b%2FXUaJh%2BZeUPVxXSzs%2F1DsoPmneD1SjOzLfcaV%2FXpvugK6V%2B99mxxxn%2B37LBogGE23Y4Lj%2FspyDIn2ZsxqS86l9uw45ixXiabPAeKBUoqfIwM%2FJiZzSDl4cdLpqgzB0CkCi1DzqCn40r4n7VegVXCk00rxPZ7B%2FvRnAJ4GIhciTqfX2cjM7w9AURbBjormXz2W3Fx3lWsiL5a9btKBZJ1nSLpWCHJfcZ8jvxnFcBs8dM8XC%2FInkKL42C7rTzjo%2FAsvja117GxAPLDNpgjyaMNTJSRYZwDSUJTKEQk8oR2bDrQ5DkwyksjjorzooQvDVaPPQ1h68bHIsyDcL3JxVxuK9GPomBXpsYF%2FiS%2B0mMMXSScosv5%2Bjus1lPmNSihl6yeXWjbEL7A%2FN2cyEp%2FQJmISeAv0CFDumxB8uEMI37h8oGOqUBwewWym8iB5tAzAS0VBEttncdxVzGN7NGuVfcuhlY8iFvVL0RsknFskucYTOK80Dp40ut%2F2KyVZvIcVmQw9QYlxmSM9cslv5ia3VfbrUDsMg1i8x9EIg%2BO9kq1fp5y60knlDEwuog6ES3oLlkRQQ1t4vvme%2F%2BVuzQGSGsapHKKA%2FX0AVGwmAta25T5gPWnc06Ph0Xlhv8p12QKahXDR46pj%2FYj0Rf&X-Amz-Signature=38920a61c2b603064244e4fd1b194a2a674986725b8969219ab7d8555eb9f16e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHYDQ6KW%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T010847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDD%2FhYx9ZE%2FQEF0IKdG4NRJsOFZjDFC02%2BJK8PJey%2FH9AiEAvVzmQuRwkgPldzMyMmvpIMSUhnHhMvJKlB5vqa7ie2cq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDDL6qvAgX1F8Z%2BLIFSrcA%2B5ZU63xIEQiMtdEpYdCslFBB88Kz9D3ap9Wv0PN3qowBqNx6D6aGVcMY362x9vJyycVOukZCueVhgtrwo%2Bl6YWNiYHFBYCJI9lEMwB5oKRYALGXXIy%2BXmvGaBFhufLIaa2Y%2FIDdvMdZX9YXseT5yFL3VnYyaEi2NAQB7BisP5kprcwgLhvQKoclNbBd35Ro3B25myNvaqFVl8hLB5wujgC4b%2FXUaJh%2BZeUPVxXSzs%2F1DsoPmneD1SjOzLfcaV%2FXpvugK6V%2B99mxxxn%2B37LBogGE23Y4Lj%2FspyDIn2ZsxqS86l9uw45ixXiabPAeKBUoqfIwM%2FJiZzSDl4cdLpqgzB0CkCi1DzqCn40r4n7VegVXCk00rxPZ7B%2FvRnAJ4GIhciTqfX2cjM7w9AURbBjormXz2W3Fx3lWsiL5a9btKBZJ1nSLpWCHJfcZ8jvxnFcBs8dM8XC%2FInkKL42C7rTzjo%2FAsvja117GxAPLDNpgjyaMNTJSRYZwDSUJTKEQk8oR2bDrQ5DkwyksjjorzooQvDVaPPQ1h68bHIsyDcL3JxVxuK9GPomBXpsYF%2FiS%2B0mMMXSScosv5%2Bjus1lPmNSihl6yeXWjbEL7A%2FN2cyEp%2FQJmISeAv0CFDumxB8uEMI37h8oGOqUBwewWym8iB5tAzAS0VBEttncdxVzGN7NGuVfcuhlY8iFvVL0RsknFskucYTOK80Dp40ut%2F2KyVZvIcVmQw9QYlxmSM9cslv5ia3VfbrUDsMg1i8x9EIg%2BO9kq1fp5y60knlDEwuog6ES3oLlkRQQ1t4vvme%2F%2BVuzQGSGsapHKKA%2FX0AVGwmAta25T5gPWnc06Ph0Xlhv8p12QKahXDR46pj%2FYj0Rf&X-Amz-Signature=a997cc2d0bb6517646f6d9475b4f1103051c574e3da80a62004ed3b1e959848b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
