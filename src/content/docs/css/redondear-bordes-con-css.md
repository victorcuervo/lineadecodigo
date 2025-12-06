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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657HN66SB%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T061259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7Ya8yErKMI%2FWk9J25jY4k%2F1U5STbUZl07iZtfa1ZJ6QIgF6CpEltII67NlgRvVXzQ0nkFdG%2BnI%2BgSyrBEeVSCHbAq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDEQLsPuw7DS1AmeTYCrcA8gdxXINYkghb5xny4BNtMlFc%2BtYiqp99VKxzbHUk%2FWN2pMv4bWBkAq44cVLyLMnlXtm%2Bu4X6MTzHYqdSo5swC7c7yBQGIxW%2F%2FHn66k9A50ckwdJZ1au05x6UW9aug4lT%2BSo0UZ1d2ukrRNDa7TQlPNfv41%2BGT3pi7V2wCMjU%2FDjKxL%2BsCEdcpH5OKkJR6xRzBeWz2b%2BJ0ZXNZyQej2%2BUaL1C7vAPMzOaYPVW3A%2Fkh2wkSU9Ov6n1%2F2gB%2BUOxLUeyXWEfG%2FZuMQ6M8N5XY5nOvvVuonWRcYJBUY0k8hffsIJbLdmrG6e2RsTc1Ctzdxag8Vklo5gxzQ2RndJJ2vCNHTQazHx5uHzwYtq%2FW8gfjWWZbgB9iqubHhFNrkrctM3%2FBLaU%2FwR%2FeoIx%2FZZv6bFoYV2JzUFrkW8eX3sUiPui2YlshUd8XZLyIimD8waxyONWU0ppUNUb%2BLqZ5h%2FjyvI9SoZzYptXgGEZEWThsQz8MXyFpo8%2BB6EegRH6C4wssHMrKKwO14eelIYI7lHG%2FA4gI4c9m6pu6Zunrxy0Rw9%2Fgpp1uUAdm7M2Vx7Ho9YhiSGlTJx0%2Fxbf%2BuaoqLBuN1GtxVqSmDPkJRV%2BSF%2FLHuF8BYPOcmmbPgaO9YA9rzIML79zskGOqUBjZ8Ij06R5CPFbTvHxYAYP5vEcx6pc7Q6GC3z5CI%2FoRd56do4vKOpMq7ARV7Z1ZA92gmjQmnV1EE1ZaeedUZv9%2FGldYmkJN6ECj8qLmU2JYP8roL2v1uZtU%2F4%2Bzq5BRVR3%2B5eekJ9Th5%2B64QPhpPo1Yk0a%2FfOD3KxJR5tAKzhocCrOTHp33O3rEB50L5qRtcDsPVTv0MIIebR48NwN2EiqonMJGoN&X-Amz-Signature=566bfee4bc865e08ef76ada0449e2b592d711178604beb6ba37a2f17d46dab55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657HN66SB%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T061259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7Ya8yErKMI%2FWk9J25jY4k%2F1U5STbUZl07iZtfa1ZJ6QIgF6CpEltII67NlgRvVXzQ0nkFdG%2BnI%2BgSyrBEeVSCHbAq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDEQLsPuw7DS1AmeTYCrcA8gdxXINYkghb5xny4BNtMlFc%2BtYiqp99VKxzbHUk%2FWN2pMv4bWBkAq44cVLyLMnlXtm%2Bu4X6MTzHYqdSo5swC7c7yBQGIxW%2F%2FHn66k9A50ckwdJZ1au05x6UW9aug4lT%2BSo0UZ1d2ukrRNDa7TQlPNfv41%2BGT3pi7V2wCMjU%2FDjKxL%2BsCEdcpH5OKkJR6xRzBeWz2b%2BJ0ZXNZyQej2%2BUaL1C7vAPMzOaYPVW3A%2Fkh2wkSU9Ov6n1%2F2gB%2BUOxLUeyXWEfG%2FZuMQ6M8N5XY5nOvvVuonWRcYJBUY0k8hffsIJbLdmrG6e2RsTc1Ctzdxag8Vklo5gxzQ2RndJJ2vCNHTQazHx5uHzwYtq%2FW8gfjWWZbgB9iqubHhFNrkrctM3%2FBLaU%2FwR%2FeoIx%2FZZv6bFoYV2JzUFrkW8eX3sUiPui2YlshUd8XZLyIimD8waxyONWU0ppUNUb%2BLqZ5h%2FjyvI9SoZzYptXgGEZEWThsQz8MXyFpo8%2BB6EegRH6C4wssHMrKKwO14eelIYI7lHG%2FA4gI4c9m6pu6Zunrxy0Rw9%2Fgpp1uUAdm7M2Vx7Ho9YhiSGlTJx0%2Fxbf%2BuaoqLBuN1GtxVqSmDPkJRV%2BSF%2FLHuF8BYPOcmmbPgaO9YA9rzIML79zskGOqUBjZ8Ij06R5CPFbTvHxYAYP5vEcx6pc7Q6GC3z5CI%2FoRd56do4vKOpMq7ARV7Z1ZA92gmjQmnV1EE1ZaeedUZv9%2FGldYmkJN6ECj8qLmU2JYP8roL2v1uZtU%2F4%2Bzq5BRVR3%2B5eekJ9Th5%2B64QPhpPo1Yk0a%2FfOD3KxJR5tAKzhocCrOTHp33O3rEB50L5qRtcDsPVTv0MIIebR48NwN2EiqonMJGoN&X-Amz-Signature=49c8e267a619c1cb8f68c9f57af9debd57b98e91dd507f18a506312384ed54e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
