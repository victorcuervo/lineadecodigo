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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BYKLXKD%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T053137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFpUYA0TNhXZITNhzmlKwqyPvjTgXHvIj9h9dt8BkzC0AiAnSesi5Mt3v14Fx2BT1UP3YMrMOrOeD%2FZQAxsVXUvY1Cr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMKSVIvoR9%2FsMPNTKHKtwDRND0Mf816jCxCtyCg91cSQjiJzxNdn%2Fh9Q5ylxFg%2ByTVqbXfckl%2Bc2dtqiVm7NaWOmMU4P9hKx5E548PuSfdjGN1Hzk5AeHqAYW73Jt3nR1TdOBP1ulLP7KT2xqS4qwGFxYbdlt7k4GJbJZekwl1PTnEItZPHy%2BhIBPqOvIMb3Q8pglzeuvV47my9PW2fIrpNyQ2zNFbrR7eVhpDC1lPoLfvBsNsOyBAfS3VYkhV4Pfpu2kd%2BIERcXKU3jUXDv73yC3PzDu5o%2Fvni3Ob8IQOHaMlk33edjZjK6BnnP10OvmfIkkWOSx86ncQOX0wx91h5pckmMQUTilGnFJlp6qfs6TFH4n%2BmlGgQrx%2FaQ2Ndkoxalj14cqaW1a4oJYGcGgATCegDQ3PQXtSaT8X%2B8C2oHD39lGKOsG%2BTnZIy91MhRmilXXgF1zhDpg2d8IGqh3MZjxg0Rblwo0i%2Fl7aqtepWyXilSBwncaaKN4FdAmLQ9PF49WF%2BNFgBXr1%2B96nwRRPlrzLaQZ2I3bfJpszQ4bUf6dz4%2BrKRRTdqMDvaRsYM2J3HScFmRKyMM0TjHxXph8fkAqcSeW4TcA7XpmoGXdrGoR27eHZ2KvjwX5vq6LFcaTDkqgNRDDHdedCWB8w6umIygY6pgHHD0dil7Ed4rd02WwEaOxMaJepV8sSYEdpraHIr6kbxeyTyfQ3dBbypFyqpizQcfBlTQewj%2FHCwR5YBWlKGRpicWFpwijiPncYsNqT87PGK71v2VW4PVMRaMRjSWNayFoFW15qWs6bEUi2nOBvOnW751EDV60uiUQDD86JpdZ2GwtxnBkwxu%2BEi2B5xVDLM9uiktgYhj6FcwSwYxbZ6EelhdHtSsKd&X-Amz-Signature=6ffc292eb9ff2c9e509c193ae45aa27666131200554206b6b7c89b8b0d96b682&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BYKLXKD%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T053137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFpUYA0TNhXZITNhzmlKwqyPvjTgXHvIj9h9dt8BkzC0AiAnSesi5Mt3v14Fx2BT1UP3YMrMOrOeD%2FZQAxsVXUvY1Cr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMKSVIvoR9%2FsMPNTKHKtwDRND0Mf816jCxCtyCg91cSQjiJzxNdn%2Fh9Q5ylxFg%2ByTVqbXfckl%2Bc2dtqiVm7NaWOmMU4P9hKx5E548PuSfdjGN1Hzk5AeHqAYW73Jt3nR1TdOBP1ulLP7KT2xqS4qwGFxYbdlt7k4GJbJZekwl1PTnEItZPHy%2BhIBPqOvIMb3Q8pglzeuvV47my9PW2fIrpNyQ2zNFbrR7eVhpDC1lPoLfvBsNsOyBAfS3VYkhV4Pfpu2kd%2BIERcXKU3jUXDv73yC3PzDu5o%2Fvni3Ob8IQOHaMlk33edjZjK6BnnP10OvmfIkkWOSx86ncQOX0wx91h5pckmMQUTilGnFJlp6qfs6TFH4n%2BmlGgQrx%2FaQ2Ndkoxalj14cqaW1a4oJYGcGgATCegDQ3PQXtSaT8X%2B8C2oHD39lGKOsG%2BTnZIy91MhRmilXXgF1zhDpg2d8IGqh3MZjxg0Rblwo0i%2Fl7aqtepWyXilSBwncaaKN4FdAmLQ9PF49WF%2BNFgBXr1%2B96nwRRPlrzLaQZ2I3bfJpszQ4bUf6dz4%2BrKRRTdqMDvaRsYM2J3HScFmRKyMM0TjHxXph8fkAqcSeW4TcA7XpmoGXdrGoR27eHZ2KvjwX5vq6LFcaTDkqgNRDDHdedCWB8w6umIygY6pgHHD0dil7Ed4rd02WwEaOxMaJepV8sSYEdpraHIr6kbxeyTyfQ3dBbypFyqpizQcfBlTQewj%2FHCwR5YBWlKGRpicWFpwijiPncYsNqT87PGK71v2VW4PVMRaMRjSWNayFoFW15qWs6bEUi2nOBvOnW751EDV60uiUQDD86JpdZ2GwtxnBkwxu%2BEi2B5xVDLM9uiktgYhj6FcwSwYxbZ6EelhdHtSsKd&X-Amz-Signature=76f49da78cf859c736e523b11b3e0bccb6ae2553146848a0c333376314776634&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
