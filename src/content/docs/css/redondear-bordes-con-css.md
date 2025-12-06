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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CHZDXGD%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T073009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxaV0XduFetD45vm%2F6M5w%2FucwAMz3hIzMHiYRBfFFeQQIhAPv7LhdR%2BftmzNM5MOrm8sbZxm1iS1Ec%2F3w4b8D0yjGnKv8DCHAQABoMNjM3NDIzMTgzODA1IgwlujDxNE55zUJkD5Mq3APQisj0aC1OJshYVbSNO5yi7th2UQjMDfEi%2FuZY0EXlKcGZrh0W4qWrZ%2B%2FYEO4KFpP0VF0s3ZsS9m58PHHT48MmWrj85Pohitf%2FWoJ3uBh56Zwpv2p3U%2Bq7KaG5CAmF%2FRdQxI6VR5EvxKFTIsRtzLA7cfr9z9wvIFJWSt%2FtHTvJ1ew3Qfrb4jHAa1YZBQaal2IofLQAVhJvAwrsyaGJZaOl1RFU92oDxePu%2FkVq3W0H422Dj7N0syzHM9gJcQUAri%2FdSAz6wFMVueDbmwzW8HtjTkoaPQIPS3b9IL4qltuS%2BibdywW0Om%2F%2BHuuSuM4sjDMFnmhlbqDqueBeg9PGOCRricv46S7baL9ofxBAtQnsU%2BmMxA1QLj2eJoukErFXDmNZpvILrQoeL%2B%2FcmD9npLOQGyev0dWGOpVDi8RuVVVb%2FUj%2Bv1dN9Jikk%2FKpLtrgexTHtWEWqTtQ8xSOIaOe%2Fl0zCvo%2FEyUaxEHF0L1J%2BjIFilHF28FbVLmsU4L4mJaIMLm7jwVgeRpl%2FsbQCblNWZR21CTYh2rG1xzw3mPucG30eoDCWDPJWnDNP663r9HSxS%2Bzz3wWeqZ%2F1pftTfhAlEltEAwXiLeBIA0rlB%2BFrlMd1NAlAe37FAABuLTb4DDDns%2FJBjqkAYMJoRdgSFkpYNeRoOvF7UoI4J50KASi4UCpEY4HlIjR1ywAaGlsnC707Kfwr12zMJIFiEcLgJxqBL4GSI9wuuYIw9NnYJYRk9oRt6ABmc28I%2F1tMBciV7I800n7gp6VG59mCxUEG5MuEVAS1nyH%2FcktoLnkFFeFt%2FCeph4TDh%2B7MpDIoa%2FfM7EMT1l7pR%2FlK%2FPIzL%2FKesElRLnqxZ6f9wTDs3qU&X-Amz-Signature=d2b15641b494ccf7b9a5eb17a3d2065fe509bb74206f65fc37e638821da832a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CHZDXGD%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T073009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxaV0XduFetD45vm%2F6M5w%2FucwAMz3hIzMHiYRBfFFeQQIhAPv7LhdR%2BftmzNM5MOrm8sbZxm1iS1Ec%2F3w4b8D0yjGnKv8DCHAQABoMNjM3NDIzMTgzODA1IgwlujDxNE55zUJkD5Mq3APQisj0aC1OJshYVbSNO5yi7th2UQjMDfEi%2FuZY0EXlKcGZrh0W4qWrZ%2B%2FYEO4KFpP0VF0s3ZsS9m58PHHT48MmWrj85Pohitf%2FWoJ3uBh56Zwpv2p3U%2Bq7KaG5CAmF%2FRdQxI6VR5EvxKFTIsRtzLA7cfr9z9wvIFJWSt%2FtHTvJ1ew3Qfrb4jHAa1YZBQaal2IofLQAVhJvAwrsyaGJZaOl1RFU92oDxePu%2FkVq3W0H422Dj7N0syzHM9gJcQUAri%2FdSAz6wFMVueDbmwzW8HtjTkoaPQIPS3b9IL4qltuS%2BibdywW0Om%2F%2BHuuSuM4sjDMFnmhlbqDqueBeg9PGOCRricv46S7baL9ofxBAtQnsU%2BmMxA1QLj2eJoukErFXDmNZpvILrQoeL%2B%2FcmD9npLOQGyev0dWGOpVDi8RuVVVb%2FUj%2Bv1dN9Jikk%2FKpLtrgexTHtWEWqTtQ8xSOIaOe%2Fl0zCvo%2FEyUaxEHF0L1J%2BjIFilHF28FbVLmsU4L4mJaIMLm7jwVgeRpl%2FsbQCblNWZR21CTYh2rG1xzw3mPucG30eoDCWDPJWnDNP663r9HSxS%2Bzz3wWeqZ%2F1pftTfhAlEltEAwXiLeBIA0rlB%2BFrlMd1NAlAe37FAABuLTb4DDDns%2FJBjqkAYMJoRdgSFkpYNeRoOvF7UoI4J50KASi4UCpEY4HlIjR1ywAaGlsnC707Kfwr12zMJIFiEcLgJxqBL4GSI9wuuYIw9NnYJYRk9oRt6ABmc28I%2F1tMBciV7I800n7gp6VG59mCxUEG5MuEVAS1nyH%2FcktoLnkFFeFt%2FCeph4TDh%2B7MpDIoa%2FfM7EMT1l7pR%2FlK%2FPIzL%2FKesElRLnqxZ6f9wTDs3qU&X-Amz-Signature=7765af05542f789eb1d5f1ec2ba234e15e2b1e037d1867ca6b7ac9428ff45623&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
