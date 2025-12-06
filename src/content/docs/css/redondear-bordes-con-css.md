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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZTIBCQB%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T100728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCl4HMdxzSgrg5QNSq1EfZY%2BFGWyTjldHI7isM9DhnDTgIhAIO72oFQ1ffU2zIj7Y1blltN1QX3Tr8y9cYEuus1TlBLKv8DCHIQABoMNjM3NDIzMTgzODA1IgwWVZUMeHuVVelAfocq3AO%2FJoORYWuXe3mIoxpheTrPFn%2BEDx07pZS0iK4Y%2BxLHhbVYIYxKi1zRJzOkjCyXWfdkMKgRoWfAS%2F2FaHWgXDL%2FhCmZkxK9qgsWpyaVw3dN03uwkJS8AFCoOQv15uM1UG%2B62NfzAaskky%2FBxjNfV9H3g4hMFSy%2FfEIpUDKVzoZtO9KjiWH70DVRddlkZ%2F%2Feb2h3as7FOaCr%2FSZNoSdG3oZe62ssyYo5q3XaystSJqGZZMI1TYutpO1U%2BJ134kp2DtRJlwShl5SKgcLTUlObdZLJhUCBWAzFcDMCmRIXTL%2FtGa6c%2FWhx%2FlOxRQZ4ZK4kO8Z1aq4q7Y5i5V4z2lLhelMI9LaSHbbqwLoVK5%2BRC45HJNHd8MXvdX3pqbJQJKf2Wfn0wtX1ctrQspFDJ9H0uOzbFJhavsYY2Np2%2Bz1169EHux9n6zLNoikyu0crjBM%2FBx8R0iRrOLeFj9QQpJZZUNxfIw8f2joCdrlXzelccTA2ygWOPjN5TpGjAoEfxfS68rwwI4aOayy8RS5jLEhKxifEB2OSW5KDuJ8FieX2u%2Fq5ircR9skmUdUtxcb2eae8bmt1DdaCCBvTtvzLG9qD%2FuZdz8zpzITHkO4Df3l32V1ma8BARyMaf8EEwOTi7jCG68%2FJBjqkAciQv6SfV1nukMXwGhN6pr%2B5pcKAmEXNuP4huq9n%2FiP2O9T7eP14tpFVI0bSxdohaEvegfdfi36uSXVLtBeJFzH%2BOO8ZaVd6ua2ocwRpxL%2BaxD2Ua8akJqOQBdiqbESOpiJthNkDCawgYBStjDGKzSbje3n2yPnAgLazzEmTx5xLjUl%2FJlAUfuvk%2FfK%2FyP2yudvH7eceBfUpjxqhjwoOeh7RkIhk&X-Amz-Signature=dd4e65954ea83ea4fd8bd667bdbd7b374065e6d534513877f09005645a99733c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZTIBCQB%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T100728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCl4HMdxzSgrg5QNSq1EfZY%2BFGWyTjldHI7isM9DhnDTgIhAIO72oFQ1ffU2zIj7Y1blltN1QX3Tr8y9cYEuus1TlBLKv8DCHIQABoMNjM3NDIzMTgzODA1IgwWVZUMeHuVVelAfocq3AO%2FJoORYWuXe3mIoxpheTrPFn%2BEDx07pZS0iK4Y%2BxLHhbVYIYxKi1zRJzOkjCyXWfdkMKgRoWfAS%2F2FaHWgXDL%2FhCmZkxK9qgsWpyaVw3dN03uwkJS8AFCoOQv15uM1UG%2B62NfzAaskky%2FBxjNfV9H3g4hMFSy%2FfEIpUDKVzoZtO9KjiWH70DVRddlkZ%2F%2Feb2h3as7FOaCr%2FSZNoSdG3oZe62ssyYo5q3XaystSJqGZZMI1TYutpO1U%2BJ134kp2DtRJlwShl5SKgcLTUlObdZLJhUCBWAzFcDMCmRIXTL%2FtGa6c%2FWhx%2FlOxRQZ4ZK4kO8Z1aq4q7Y5i5V4z2lLhelMI9LaSHbbqwLoVK5%2BRC45HJNHd8MXvdX3pqbJQJKf2Wfn0wtX1ctrQspFDJ9H0uOzbFJhavsYY2Np2%2Bz1169EHux9n6zLNoikyu0crjBM%2FBx8R0iRrOLeFj9QQpJZZUNxfIw8f2joCdrlXzelccTA2ygWOPjN5TpGjAoEfxfS68rwwI4aOayy8RS5jLEhKxifEB2OSW5KDuJ8FieX2u%2Fq5ircR9skmUdUtxcb2eae8bmt1DdaCCBvTtvzLG9qD%2FuZdz8zpzITHkO4Df3l32V1ma8BARyMaf8EEwOTi7jCG68%2FJBjqkAciQv6SfV1nukMXwGhN6pr%2B5pcKAmEXNuP4huq9n%2FiP2O9T7eP14tpFVI0bSxdohaEvegfdfi36uSXVLtBeJFzH%2BOO8ZaVd6ua2ocwRpxL%2BaxD2Ua8akJqOQBdiqbESOpiJthNkDCawgYBStjDGKzSbje3n2yPnAgLazzEmTx5xLjUl%2FJlAUfuvk%2FfK%2FyP2yudvH7eceBfUpjxqhjwoOeh7RkIhk&X-Amz-Signature=e05629c0a1c1fd896ad0bcc01c22c24e7fcaca1ebc9308b08a67eb60547c4390&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
