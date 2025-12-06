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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665C6PW7QY%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T194103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLhjF00EUEQ2DNmKuavlznEDC1WcBeq9P63XP6dsr63wIgeX61pvS5fsVt2rYUrSQV9kYsuuImDrDFX1mH4sC%2FEjIq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDJmDGEmQQLnJQ8Tb5ircA7EAihBy95ezpMFncJLpbQX1S1T5YhwRVgRxlru9e%2BzBZwJ5afuNtX6qC0BaHvP1BZ8MkFRC447CW7D6dBYJR778kuPFlxFnVywdziTR9%2F8o4%2BYp7IkXfOAQRaaSyJigG8GXWstphq4bVGXiqHuruLntolgWYmpqVQ4bxs%2BzYKLLZWQQ6GjrLMoGz9ueA1%2Fj0c5xmbV2SEqpleJ%2F8msWYE%2FjlVDXqtjlhebprkJchXgXycZ%2BwY2ahJOZtUHJPRzoWomt0K6On3TmIodgiHMi61dZvwtjzCfH3QVL7VuCZodG2HeaeTRp4GqeexuhEsaatyFp99MfE%2FEsRHNSrZ47s2fWAP5FJmYdt2eEOLxkx%2BkQGQKr10SwxJBXfoYf7E030%2BmWsymc6XRS7mn7xPEJgyMHVeVf2Jw1fZSq5XTPLtuGqa3Kzu6KIHph1AXdRUim1tnRyT51VgisQuv8ab4ypAcuzc0VqJvQJNiQ%2Fy%2BuClAR%2BKre7RyVvagkhnC7O2zNoWQbcZ74kdzCu8y8rJ9Qf4OGVnlQ1q27AA8xPUp0nvqznB%2BxRfxTXBS5tacbccl7gXm%2Bh%2F89bGJV5lomavJXIvbRmPhS6mf8%2Bj6%2FCt9I4ceeYk06Dw%2Fd83atujobMO%2B30ckGOqUBLaj6YL9Pc36yEBirjAyQZ50lkTsc1jMkh0y3Llt8Mqc7VmYhcXZZzM34Tvwox6U2OdralcUOdE03EuJ482%2Bqjg5F%2BJzhlImmT8iPA17g16%2FXe38%2FVY%2BHJCDmFjoxfYHysph3eFMr3rLu4y%2BtCDGZddgfdGnI1RBEBMVeNxE2SE3V2vlLQLg8xVrsKJzMx7V0gGdoQaaOFDBqEjVu6m3TzSsOiro1&X-Amz-Signature=09d29db462848c166f3951065ad6d857036f4e63b8cba56984ba8a3d94eb1eec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665C6PW7QY%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T194103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLhjF00EUEQ2DNmKuavlznEDC1WcBeq9P63XP6dsr63wIgeX61pvS5fsVt2rYUrSQV9kYsuuImDrDFX1mH4sC%2FEjIq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDJmDGEmQQLnJQ8Tb5ircA7EAihBy95ezpMFncJLpbQX1S1T5YhwRVgRxlru9e%2BzBZwJ5afuNtX6qC0BaHvP1BZ8MkFRC447CW7D6dBYJR778kuPFlxFnVywdziTR9%2F8o4%2BYp7IkXfOAQRaaSyJigG8GXWstphq4bVGXiqHuruLntolgWYmpqVQ4bxs%2BzYKLLZWQQ6GjrLMoGz9ueA1%2Fj0c5xmbV2SEqpleJ%2F8msWYE%2FjlVDXqtjlhebprkJchXgXycZ%2BwY2ahJOZtUHJPRzoWomt0K6On3TmIodgiHMi61dZvwtjzCfH3QVL7VuCZodG2HeaeTRp4GqeexuhEsaatyFp99MfE%2FEsRHNSrZ47s2fWAP5FJmYdt2eEOLxkx%2BkQGQKr10SwxJBXfoYf7E030%2BmWsymc6XRS7mn7xPEJgyMHVeVf2Jw1fZSq5XTPLtuGqa3Kzu6KIHph1AXdRUim1tnRyT51VgisQuv8ab4ypAcuzc0VqJvQJNiQ%2Fy%2BuClAR%2BKre7RyVvagkhnC7O2zNoWQbcZ74kdzCu8y8rJ9Qf4OGVnlQ1q27AA8xPUp0nvqznB%2BxRfxTXBS5tacbccl7gXm%2Bh%2F89bGJV5lomavJXIvbRmPhS6mf8%2Bj6%2FCt9I4ceeYk06Dw%2Fd83atujobMO%2B30ckGOqUBLaj6YL9Pc36yEBirjAyQZ50lkTsc1jMkh0y3Llt8Mqc7VmYhcXZZzM34Tvwox6U2OdralcUOdE03EuJ482%2Bqjg5F%2BJzhlImmT8iPA17g16%2FXe38%2FVY%2BHJCDmFjoxfYHysph3eFMr3rLu4y%2BtCDGZddgfdGnI1RBEBMVeNxE2SE3V2vlLQLg8xVrsKJzMx7V0gGdoQaaOFDBqEjVu6m3TzSsOiro1&X-Amz-Signature=ecb5b9de61ea907531bd9905e558fcaceebf8af52c0c4cc18768716951fe8c89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
