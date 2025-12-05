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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMOX6XCM%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T075754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDX%2BKxhP%2BIDc4c0swD56fE38ptwGVsVIwvRRTbk%2FslIIQIgEskI7g%2BX4Cx2ERRtspYFJZToWAhMWJiPaWn%2F%2FdCc9gwq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDGM66%2Bi6eiig4qTfGircA98fzTMZWhf48PSyW5EXmCr4dLIsYiYFw2pcfGtHh8Tpbg%2BP4%2FYkd2%2FcX3T7gYHfPc05IN6Zmlzf7VdgtcPEa78JfZy7dyttk6rtuKwPgaHxZQ7P%2FvviWbawx%2FqgS9X%2Fl3y%2FoCFEW9VpJkdERE17c129fzS3JI0ZOt8EumghQclQgm%2B2W6Ij3vA%2FqVdqbioPYJB%2F9fiFpHjmUB6dSPAxqmLEhujdgRVGeEN1gqkC9x5z6z7d6eC21R4SNvvONVKuktUliXnOxXRoOaX9Dht56u92qg6GwbhUmfl9BptKz5i7Z5FXkNvHhHLIwBmYT3nTvF7IywdnirL3QkU0wJF9RgZuE7OTDRVoMPdM6H6xnGQCq%2Bpn5Goj%2B8pz5W3EJoVog2ytanCnKz9hEjH%2FZgCC%2FcW8%2F8ec%2FBKOibW5b0g9TTq6sM6m72KPiGevO%2FT6m7M5MzW3bq3OAZsBSvI2qoWsdFAPmZ2i3KUSQP%2B5K%2F55aoILhYrqxDEy9cPgoLA7CIqRV7Y0VDkdrLi%2B5PVdM%2BnmN5%2BJ%2F34TJSBQOqh3CD%2B3zctFWLEMADKLNxjCcUYjtWaIKcA9cQoMIwUox31CnA6obZZFjMuBNsVhEdvXPoAtz3LOgn8FAd8COEt9T16eMLGxyckGOqUBTtV8NFGnzDRfR6bNBOazQ4vyOG4yzyBBWNQ372qfYjY3VmKJSlBX%2BrZS8DVe3StCI%2Fo2RdKMR6CK7UmpsUOFahXwmsTrGkIXUUwOP6I%2FP5VlRAwTQzm0U7b9lu023n9v3wdQIWHiUFYvEUiaFQadHJTkwNsD8uQO1mi7MLw%2FHaqdZFr1I3%2FfL8jjNbSA6TKBfcNORufqwpoNr5gCjUlE3EKZ1TcY&X-Amz-Signature=1dd3f91dcc723d3b08554759031d38c5f06bec631dd0d73e442fa870bfe56752&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMOX6XCM%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T075754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDX%2BKxhP%2BIDc4c0swD56fE38ptwGVsVIwvRRTbk%2FslIIQIgEskI7g%2BX4Cx2ERRtspYFJZToWAhMWJiPaWn%2F%2FdCc9gwq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDGM66%2Bi6eiig4qTfGircA98fzTMZWhf48PSyW5EXmCr4dLIsYiYFw2pcfGtHh8Tpbg%2BP4%2FYkd2%2FcX3T7gYHfPc05IN6Zmlzf7VdgtcPEa78JfZy7dyttk6rtuKwPgaHxZQ7P%2FvviWbawx%2FqgS9X%2Fl3y%2FoCFEW9VpJkdERE17c129fzS3JI0ZOt8EumghQclQgm%2B2W6Ij3vA%2FqVdqbioPYJB%2F9fiFpHjmUB6dSPAxqmLEhujdgRVGeEN1gqkC9x5z6z7d6eC21R4SNvvONVKuktUliXnOxXRoOaX9Dht56u92qg6GwbhUmfl9BptKz5i7Z5FXkNvHhHLIwBmYT3nTvF7IywdnirL3QkU0wJF9RgZuE7OTDRVoMPdM6H6xnGQCq%2Bpn5Goj%2B8pz5W3EJoVog2ytanCnKz9hEjH%2FZgCC%2FcW8%2F8ec%2FBKOibW5b0g9TTq6sM6m72KPiGevO%2FT6m7M5MzW3bq3OAZsBSvI2qoWsdFAPmZ2i3KUSQP%2B5K%2F55aoILhYrqxDEy9cPgoLA7CIqRV7Y0VDkdrLi%2B5PVdM%2BnmN5%2BJ%2F34TJSBQOqh3CD%2B3zctFWLEMADKLNxjCcUYjtWaIKcA9cQoMIwUox31CnA6obZZFjMuBNsVhEdvXPoAtz3LOgn8FAd8COEt9T16eMLGxyckGOqUBTtV8NFGnzDRfR6bNBOazQ4vyOG4yzyBBWNQ372qfYjY3VmKJSlBX%2BrZS8DVe3StCI%2Fo2RdKMR6CK7UmpsUOFahXwmsTrGkIXUUwOP6I%2FP5VlRAwTQzm0U7b9lu023n9v3wdQIWHiUFYvEUiaFQadHJTkwNsD8uQO1mi7MLw%2FHaqdZFr1I3%2FfL8jjNbSA6TKBfcNORufqwpoNr5gCjUlE3EKZ1TcY&X-Amz-Signature=41420635a1ebb73b9cc93441774f30307ae01311d32f4914ed6160657bd7940d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
