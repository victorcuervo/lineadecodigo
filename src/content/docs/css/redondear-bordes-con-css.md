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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666O6JGRMN%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T142505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGpUEVhn537lyxpG3LsASRCBsNndRlkIkOetpnV4R1tRAiEAo7aoP6fOiV22dhV5l1RQ7V3pcOK3V%2FboNgP6EerTR08qiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCvkBB%2Bo4V5Udq3KXCrcAzA16Guup4b%2FMAbJoJ%2Bu7nO74slALCWGpQyrF0SZQvs9rbBw%2FsrrVJNil0BMIgDspr4Rx2Jy4r32dMaV1RPULWyokI8KtPF2NYGZ2Dur2MYNgKGGSG7NAsSPGqJLgrH7J%2FimLiZ1Um37vKSv0NHDbPmI%2FHB52kpCOreq%2Bddx5DsOL%2Bnw7atf8c8irIZnPCEhVhI9ahY4g%2BeTZW%2BMlQLdTAfQO79JL74BHTOCNgdD%2BvwpZzs6N8Yx9xPF4fF64ZMPznm4IJ3qrS0WJkT%2BitEJk7d%2FcxyK1CHhf8G8iZ9jlGMerQk0K%2Bca6Ff2vyi5TKNmOIsM%2F7yGnEkdfeYjBHfcOI3h9HtdXweEd9B1GRltPRJ8Q9Qr0xp1Iq1yEPXacWTRrEVrRo6Qy4Fn7QKoNnCkdqlMDc6lBByaWiJ%2F1PPMBUcD52RVXDaQIk6gPLYSJinDL70RX1Xs58%2B%2F%2B2%2BkiVpT5yl8qjJgQOM%2BwsN560h3XGT0CFCIMiwpdSdTbnzp4wHrxPZz1eqqaENojQ2n%2FPRsx4RsrBtsapXoZoCMf5yLagIbhTHIhw4W0eo%2FutqvjqWL5abKn37y6D1oEKshOgw05QgxOU8W3Jp9KCtrWd91R24bvG%2FwJljm%2B%2BIcnLgcMN2P28kGOqUBa2VQMn%2BMzb5sHM6udQ5lSlCo3LmfLviDIWPZOVCLhpTuO8HRW2bWRbzHUhAz4HcZZ9OwYOP5jx7hysDdwyyL1lQ6VjbP01zWkhW91yUmZvX5w5477IJCorK7x%2FS%2FF4xW6wMLG0xVT9%2BVtXOtyjhLamAk%2BeBm1L2u71P9QB%2BQmva2KL6%2BgZN9xfmlWeKbvoP4CQVx2zNxONG3bGNyIfyN%2B5FOuYPw&X-Amz-Signature=5039d2242afbe64b5c113d8f7fb0ed479ac151ce6d2d641ab169e52c680b0482&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666O6JGRMN%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T142505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGpUEVhn537lyxpG3LsASRCBsNndRlkIkOetpnV4R1tRAiEAo7aoP6fOiV22dhV5l1RQ7V3pcOK3V%2FboNgP6EerTR08qiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCvkBB%2Bo4V5Udq3KXCrcAzA16Guup4b%2FMAbJoJ%2Bu7nO74slALCWGpQyrF0SZQvs9rbBw%2FsrrVJNil0BMIgDspr4Rx2Jy4r32dMaV1RPULWyokI8KtPF2NYGZ2Dur2MYNgKGGSG7NAsSPGqJLgrH7J%2FimLiZ1Um37vKSv0NHDbPmI%2FHB52kpCOreq%2Bddx5DsOL%2Bnw7atf8c8irIZnPCEhVhI9ahY4g%2BeTZW%2BMlQLdTAfQO79JL74BHTOCNgdD%2BvwpZzs6N8Yx9xPF4fF64ZMPznm4IJ3qrS0WJkT%2BitEJk7d%2FcxyK1CHhf8G8iZ9jlGMerQk0K%2Bca6Ff2vyi5TKNmOIsM%2F7yGnEkdfeYjBHfcOI3h9HtdXweEd9B1GRltPRJ8Q9Qr0xp1Iq1yEPXacWTRrEVrRo6Qy4Fn7QKoNnCkdqlMDc6lBByaWiJ%2F1PPMBUcD52RVXDaQIk6gPLYSJinDL70RX1Xs58%2B%2F%2B2%2BkiVpT5yl8qjJgQOM%2BwsN560h3XGT0CFCIMiwpdSdTbnzp4wHrxPZz1eqqaENojQ2n%2FPRsx4RsrBtsapXoZoCMf5yLagIbhTHIhw4W0eo%2FutqvjqWL5abKn37y6D1oEKshOgw05QgxOU8W3Jp9KCtrWd91R24bvG%2FwJljm%2B%2BIcnLgcMN2P28kGOqUBa2VQMn%2BMzb5sHM6udQ5lSlCo3LmfLviDIWPZOVCLhpTuO8HRW2bWRbzHUhAz4HcZZ9OwYOP5jx7hysDdwyyL1lQ6VjbP01zWkhW91yUmZvX5w5477IJCorK7x%2FS%2FF4xW6wMLG0xVT9%2BVtXOtyjhLamAk%2BeBm1L2u71P9QB%2BQmva2KL6%2BgZN9xfmlWeKbvoP4CQVx2zNxONG3bGNyIfyN%2B5FOuYPw&X-Amz-Signature=b99a88afcc600dcf53967694732f84ebcf3c4cb86e3805b00521303f73c7489e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
