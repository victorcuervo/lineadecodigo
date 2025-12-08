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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YS4ALPV%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T002906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJWV5oN9dvPsyuONKcuy8IfhqIxehjN6KqdwqCjLsv4wIhAMDpwtLAZJOXyUie1xmhCjpWY5ZUJHruMYBGHumSlX0mKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzpqrSMHKnDRF%2FQ6F8q3AOnhYDlyUC1VH1gnJ7TzrVO12M3t9z6V7fCIe3VjqMWL%2BQEnYSQQ%2BO1QWTGlwwzdyJiHz22LQtm7UrC%2FjCOpuKLoJ%2B7y0YI4zt0O8dZV%2BxVM3NjvOR4Yle9OaOptMKK3SJk6fKGjbDbFvHV%2Bi27aVhdlxILzuvUbw%2FuF32FH39%2Frg62Rr3ydVUyvSHfYG5akF92fLIKYwAXr8LXqWPzSi1d5V1u%2FEg5W1U22%2BnDyC0RzmbJHrLN5QW7OwiPrUVxexdvYUK38RCz0f37DX6QB33dPB7XD2qhIFKdYyIRxkV7FUxnvAsoqzm0sKWdVzxjQ9FMagyqNFCG1ZrRtyy5AT05it6MR1PDKXzaZT4RPbJKSsyCEn529dPJPoDQg0aYL%2BpTwDKcRcjOFeiUqMcplUSK970enTuJpEGavBW2Rd7TUgDLF05MQtzfPnQqisSy0AtpZ0%2BCYZJDHrsJQd%2F4aIKBq69evb7lsq9QdvR0Oj0hSwf%2FqpeQB5Fkxtiw8gp%2B9QL2PUsJnpV799WpoDUxAY5CJW3mgwHv002z%2BpwdIyOC%2BDSFJtvnsd%2FLccW%2BEo9hMJS79YXev5rySZBqsCw%2FpIY58aGdOPQ1nzwkiumloeijNdI%2BwOQei50vxtTaNTC4odjJBjqkAairDaSIDOoaxv0pb3c5xVzXra4pUFu%2Bn6QDAmI5Sd7oZ3QqEzUlQndg%2BPmvD%2F%2BBrQADK04LkhOw6GrkLOjMRzIYas1eSsNiiNiYDWpejAqHWA45Lfr9H1WDBjZ6M64bK5xP2YEz6IBHXe2S8ixgaIq36yqeR8wnrIaiSGWUNxVfMPtY%2Fn%2BqqVt1jimSqdBz38BncoUCjUpaqRDJSLzum6s%2B32Nt&X-Amz-Signature=8333eadbad72b5a6dcbf8eb1dadc3071bf07f1a9a09f11326f0d5f2bd97566b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YS4ALPV%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T002906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJWV5oN9dvPsyuONKcuy8IfhqIxehjN6KqdwqCjLsv4wIhAMDpwtLAZJOXyUie1xmhCjpWY5ZUJHruMYBGHumSlX0mKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzpqrSMHKnDRF%2FQ6F8q3AOnhYDlyUC1VH1gnJ7TzrVO12M3t9z6V7fCIe3VjqMWL%2BQEnYSQQ%2BO1QWTGlwwzdyJiHz22LQtm7UrC%2FjCOpuKLoJ%2B7y0YI4zt0O8dZV%2BxVM3NjvOR4Yle9OaOptMKK3SJk6fKGjbDbFvHV%2Bi27aVhdlxILzuvUbw%2FuF32FH39%2Frg62Rr3ydVUyvSHfYG5akF92fLIKYwAXr8LXqWPzSi1d5V1u%2FEg5W1U22%2BnDyC0RzmbJHrLN5QW7OwiPrUVxexdvYUK38RCz0f37DX6QB33dPB7XD2qhIFKdYyIRxkV7FUxnvAsoqzm0sKWdVzxjQ9FMagyqNFCG1ZrRtyy5AT05it6MR1PDKXzaZT4RPbJKSsyCEn529dPJPoDQg0aYL%2BpTwDKcRcjOFeiUqMcplUSK970enTuJpEGavBW2Rd7TUgDLF05MQtzfPnQqisSy0AtpZ0%2BCYZJDHrsJQd%2F4aIKBq69evb7lsq9QdvR0Oj0hSwf%2FqpeQB5Fkxtiw8gp%2B9QL2PUsJnpV799WpoDUxAY5CJW3mgwHv002z%2BpwdIyOC%2BDSFJtvnsd%2FLccW%2BEo9hMJS79YXev5rySZBqsCw%2FpIY58aGdOPQ1nzwkiumloeijNdI%2BwOQei50vxtTaNTC4odjJBjqkAairDaSIDOoaxv0pb3c5xVzXra4pUFu%2Bn6QDAmI5Sd7oZ3QqEzUlQndg%2BPmvD%2F%2BBrQADK04LkhOw6GrkLOjMRzIYas1eSsNiiNiYDWpejAqHWA45Lfr9H1WDBjZ6M64bK5xP2YEz6IBHXe2S8ixgaIq36yqeR8wnrIaiSGWUNxVfMPtY%2Fn%2BqqVt1jimSqdBz38BncoUCjUpaqRDJSLzum6s%2B32Nt&X-Amz-Signature=40e1308989119cd8f259146ff9dec88b142d532129006d10e0272bf0eef29b6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
