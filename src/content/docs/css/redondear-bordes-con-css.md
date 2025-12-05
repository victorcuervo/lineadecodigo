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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBTVYR4K%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T011835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCi2YejzyQM5ZUw6ag93BiS9nQp%2BLs5KkcF7%2FLLe%2BGNygIhAJBi3hwOJ9HAMgldC%2BeCOmQf1cRGKp0Aknnwjajvsh2jKv8DCE8QABoMNjM3NDIzMTgzODA1IgzqRltbiTF6dzhvTscq3AP1HsqllF3c%2Bde18xBqpyECQqTh1NhGTOLghCqnjo35Mx8EL77rcrJVjJeHTTHBO01YmJc4qhfa7%2BL%2BX5R5rb806yl1kssoUZkOfPmRHrhD9y8JfL48LVCabZTuReIvs10PwWkUqd83%2Bu0nwUGe%2BguuCAWKG9E1tEGYZEL7rsgaN%2BoFWpWOFyR15I7VInhmkxrdu8km8%2BS3HS5Aubm%2FfsaTShSi1UKVUVc7Vt6jzPfHw5FPFgkbfdBwm2LkHsAH9GaEXGFI6sE23EYRGzDpt4%2BR%2BVZnKWKryyDn3STlIutQLpyUx27qSz2r7IlPHmSMqhrvZ1faXaOT28vqETVbsguvA%2BvSmY02FPaBrv5E%2F1vZYqMshLVSbu%2FtVnsUzSP5e3FH7q4HYLPvfN7eVHV8eyhmqC7UclXSYDCymuvUJu7JgGU9LMyW%2FWeM1iGYlXW2hssgoQ%2Bz7qSaj2BwOzKY0cKJ2hcA6wGtTmu7L4SYJTHhDwzg7zjAyn5ET6Y6C7SPsZiETssOEr%2FLXf1HOM8eUohKqAhxgUWcTFmXJHKa%2BHQ6eLQ8UZr15IBVPvvgH%2By89%2FN2bguG6GiJm1uCc7kKVwODOTauUgYhmm2jsbA9BSsfDl31qe8VI9dsLziTVzDjjMjJBjqkAe5%2Fmi5Wu1negsCSnvfzLIKYUI%2F5fUpCASfsCqvJUe4rk3SMV7p2STh7yop2jsmMNSmzWcwpKifZ2zsZJ02ctMmGxkJ6Kmq2SnW3e6mDUD06oAvbxEq3G8HCicqYDGm7s6uaIrZKKTaRcCx8g%2BpZnYE%2F3oKlMASnmD3dLwNBtui2ZhDIN0IEwPfJoSjsltHN4D%2BW4xFMl7ceyG%2BQhPbmjWyTC6nr&X-Amz-Signature=fba5538af91ce34f36d3a6763770d6e2648b146a0fa4d692b5b9732346495190&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBTVYR4K%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T011835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCi2YejzyQM5ZUw6ag93BiS9nQp%2BLs5KkcF7%2FLLe%2BGNygIhAJBi3hwOJ9HAMgldC%2BeCOmQf1cRGKp0Aknnwjajvsh2jKv8DCE8QABoMNjM3NDIzMTgzODA1IgzqRltbiTF6dzhvTscq3AP1HsqllF3c%2Bde18xBqpyECQqTh1NhGTOLghCqnjo35Mx8EL77rcrJVjJeHTTHBO01YmJc4qhfa7%2BL%2BX5R5rb806yl1kssoUZkOfPmRHrhD9y8JfL48LVCabZTuReIvs10PwWkUqd83%2Bu0nwUGe%2BguuCAWKG9E1tEGYZEL7rsgaN%2BoFWpWOFyR15I7VInhmkxrdu8km8%2BS3HS5Aubm%2FfsaTShSi1UKVUVc7Vt6jzPfHw5FPFgkbfdBwm2LkHsAH9GaEXGFI6sE23EYRGzDpt4%2BR%2BVZnKWKryyDn3STlIutQLpyUx27qSz2r7IlPHmSMqhrvZ1faXaOT28vqETVbsguvA%2BvSmY02FPaBrv5E%2F1vZYqMshLVSbu%2FtVnsUzSP5e3FH7q4HYLPvfN7eVHV8eyhmqC7UclXSYDCymuvUJu7JgGU9LMyW%2FWeM1iGYlXW2hssgoQ%2Bz7qSaj2BwOzKY0cKJ2hcA6wGtTmu7L4SYJTHhDwzg7zjAyn5ET6Y6C7SPsZiETssOEr%2FLXf1HOM8eUohKqAhxgUWcTFmXJHKa%2BHQ6eLQ8UZr15IBVPvvgH%2By89%2FN2bguG6GiJm1uCc7kKVwODOTauUgYhmm2jsbA9BSsfDl31qe8VI9dsLziTVzDjjMjJBjqkAe5%2Fmi5Wu1negsCSnvfzLIKYUI%2F5fUpCASfsCqvJUe4rk3SMV7p2STh7yop2jsmMNSmzWcwpKifZ2zsZJ02ctMmGxkJ6Kmq2SnW3e6mDUD06oAvbxEq3G8HCicqYDGm7s6uaIrZKKTaRcCx8g%2BpZnYE%2F3oKlMASnmD3dLwNBtui2ZhDIN0IEwPfJoSjsltHN4D%2BW4xFMl7ceyG%2BQhPbmjWyTC6nr&X-Amz-Signature=c05f92da5750568b69acc6d546f7185a35df2ee0e550e50fb113cbe5d40ac3bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
