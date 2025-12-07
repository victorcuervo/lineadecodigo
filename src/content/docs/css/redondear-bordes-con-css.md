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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJCTWH7I%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T134550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBH8TS8Y75a3N%2BF%2B%2BMMENIOT6tmj5CD2txgfStBRgNkHAiEA5oN13HvmAYFKY0EA708T91HQNzGeJeal4eNy5Vk75r0qiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBrkQRrMxOweP2QBlyrcA%2F3oxDaIZsprEX%2BH11o6iJdlibIuv6jyL%2Fi%2BeZD5D%2Blo4bFX7ELKPwXf1BgdYUJhOYAmsv2r8MwTP3Vpg48iUbIMakcOps0XM4ArK6Yx93pnQix2RYvqNt5dSm%2FY2e5pD4VEHK%2FIU8k9EsFcaI5PNzuGXbiZFuNOZ07iWCK0T3TNhy7YN4nWJz7XJQUoanHAj0BVT97%2BiT47NkI%2BIUZi6ckmIBf6TdOKBg6QlCkOlc7IhST9ik39cZ9GEGRUmiz05zlJyqognfw%2B9wpX8uTjFGmPYzYXr%2BvSvzkaYz0p19F2fd5%2FdwPYoYSUtrZNA6xXCkvaB32QlT7aLiv9SIu67GoJQ1JZsBxOGbkAQ2%2BTvn36AwOmv4juaGO3jm%2FKyAC6p0QGi8XMq%2F%2BsqEtyWd0SBReAqqmGqLmFCZp0%2BqD2NU9ApEQ2ro6W52VhyB7DoofCtuamCQqPHaPRKMZtS5fdlXHzrG4DDOl7zmaiCxrKgnrXXzRr0RDb8p8kEmrVYugtGi3avVDYOyDN5imxQnLSyZNfUXoLpeRh5EJq9b3kJ184fYk3jdT1mpvxX5Nx8bNzzGqDKtZ0tI%2FGtVS4XkAY5USLVgogBTD3dJvzKYZk581KR%2FBfgNqY02UtbcAmMLia1ckGOqUBGQyQJcMsZHDHOmwaIqbStuKrga5DQxuu1QnI%2FA%2BJ%2FW9Aq6rrL75AF0iVu2QuojxgwVti80XM2WTECJs%2Bmc4hhIMs28cFlFs078913TvI34Cir%2B2Y0acW0FySda2j%2Br2inL%2F%2F7FtWsvcfPpxFk98so%2F5yXVV4FhkgxudMWtcicaW6zgOSsJ2WzIEPkcpa8KATrIQ0wy9275m68v60qMQwA%2FWOtRje&X-Amz-Signature=16826ebc76f67dcec6ad10f391dbb9ee6e1ab7028a582dbf751db1272bd8c1a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJCTWH7I%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T134550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBH8TS8Y75a3N%2BF%2B%2BMMENIOT6tmj5CD2txgfStBRgNkHAiEA5oN13HvmAYFKY0EA708T91HQNzGeJeal4eNy5Vk75r0qiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBrkQRrMxOweP2QBlyrcA%2F3oxDaIZsprEX%2BH11o6iJdlibIuv6jyL%2Fi%2BeZD5D%2Blo4bFX7ELKPwXf1BgdYUJhOYAmsv2r8MwTP3Vpg48iUbIMakcOps0XM4ArK6Yx93pnQix2RYvqNt5dSm%2FY2e5pD4VEHK%2FIU8k9EsFcaI5PNzuGXbiZFuNOZ07iWCK0T3TNhy7YN4nWJz7XJQUoanHAj0BVT97%2BiT47NkI%2BIUZi6ckmIBf6TdOKBg6QlCkOlc7IhST9ik39cZ9GEGRUmiz05zlJyqognfw%2B9wpX8uTjFGmPYzYXr%2BvSvzkaYz0p19F2fd5%2FdwPYoYSUtrZNA6xXCkvaB32QlT7aLiv9SIu67GoJQ1JZsBxOGbkAQ2%2BTvn36AwOmv4juaGO3jm%2FKyAC6p0QGi8XMq%2F%2BsqEtyWd0SBReAqqmGqLmFCZp0%2BqD2NU9ApEQ2ro6W52VhyB7DoofCtuamCQqPHaPRKMZtS5fdlXHzrG4DDOl7zmaiCxrKgnrXXzRr0RDb8p8kEmrVYugtGi3avVDYOyDN5imxQnLSyZNfUXoLpeRh5EJq9b3kJ184fYk3jdT1mpvxX5Nx8bNzzGqDKtZ0tI%2FGtVS4XkAY5USLVgogBTD3dJvzKYZk581KR%2FBfgNqY02UtbcAmMLia1ckGOqUBGQyQJcMsZHDHOmwaIqbStuKrga5DQxuu1QnI%2FA%2BJ%2FW9Aq6rrL75AF0iVu2QuojxgwVti80XM2WTECJs%2Bmc4hhIMs28cFlFs078913TvI34Cir%2B2Y0acW0FySda2j%2Br2inL%2F%2F7FtWsvcfPpxFk98so%2F5yXVV4FhkgxudMWtcicaW6zgOSsJ2WzIEPkcpa8KATrIQ0wy9275m68v60qMQwA%2FWOtRje&X-Amz-Signature=33d778b1e2149c072f7632c709e35cc7b9c641260bd573eae5ccf0a9fa07bb8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
