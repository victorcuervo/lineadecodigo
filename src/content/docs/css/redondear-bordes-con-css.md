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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4REZS37%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T041724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGWpoJ8R5wEcVH8EWUreACgpXlrLDHAI86BRRSFoB56QIgJGEBOn47Ll7CqdInlE7jbprz5iLXEadVuvBN0sY1Y9AqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOia2ODpqQY7oPvo%2FCrcA%2Bp67%2Bp8lzXqUVQfx9Xc9cjPAeVXPP6brwBwALl78QjGl8VwX9U7FM7bpQvpj97%2BBmKSU7dDjhWL6DM72Pnwt7r45wad7uDK4f0SY7V0PodQQm8KMih5rjVwe4%2B2etgsoMsbmeXXnA1THM8322WJBDJp47FcHtvkXJEWUvR%2Bx1b%2BXAczy4PO7lbbgmj0DfeOaTlX1jiv3w0Jwl00O%2FHGj8EaI%2FOOZe4HqnGSOvhO0HKTcENZlmZ%2Fr62RqL7KJ5zXlCnrwrg%2FNb6q7l6T19P4GoTF80kJc0oIDpFVgEOI5Yf%2FsVMesFSV8fNqgldyEZVzsHs3%2FUrA757l47bZNZFd2eJyYX%2FaIuPl9xQKt3jI%2Bui0%2BtSu%2B8QEYoI%2FEc1B7o4VdNB9LHvq0x4VYIYxNGPvQiEYLGV0GM5CUTxpUy75EYaTDTSdZ4zDFTdckqg7w2OnJQlzVibtefLovHl5Yyw6OBto0SQ4qYJNcDR%2BxkKLGKiLnDV4WJf8Myq1RijY1tE1XxZx30%2FAL%2BFZRVfjkgJTgUKeIsCXtgrQviAin3YS7GTheWoOfgmNyRYQ68BmKGBkw9r7THGHhbmukaKquQP0V53okxwZEpJ%2BOImL2r19oTpOxJjOj3dpPp%2BU2FDGMOet3skGOqUBSHfGwfOJwif99zKdR3KADinhFxdvqZK968h8if1ZBbluCbFnm42RZEJI3OOAed3WwSn%2F70bFkU72f5Kw9%2Fjkt5gk70b4nsPSC3eCTGhoNVHShm0w98LaUMemBppp3X6L7EQK%2BB1O1gnU1YF84J1T4FYL5mSWbLXIIUre4AMao5yD2AI9dsgiQKkwXb15udekqGPwUVGp4GQ5CsDpKZ63LW3F45Lg&X-Amz-Signature=96ead4ad9292f8e0d5fa9374f0e2c2e9d55f910a737a5a84545401252c6cffba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4REZS37%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T041724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGWpoJ8R5wEcVH8EWUreACgpXlrLDHAI86BRRSFoB56QIgJGEBOn47Ll7CqdInlE7jbprz5iLXEadVuvBN0sY1Y9AqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOia2ODpqQY7oPvo%2FCrcA%2Bp67%2Bp8lzXqUVQfx9Xc9cjPAeVXPP6brwBwALl78QjGl8VwX9U7FM7bpQvpj97%2BBmKSU7dDjhWL6DM72Pnwt7r45wad7uDK4f0SY7V0PodQQm8KMih5rjVwe4%2B2etgsoMsbmeXXnA1THM8322WJBDJp47FcHtvkXJEWUvR%2Bx1b%2BXAczy4PO7lbbgmj0DfeOaTlX1jiv3w0Jwl00O%2FHGj8EaI%2FOOZe4HqnGSOvhO0HKTcENZlmZ%2Fr62RqL7KJ5zXlCnrwrg%2FNb6q7l6T19P4GoTF80kJc0oIDpFVgEOI5Yf%2FsVMesFSV8fNqgldyEZVzsHs3%2FUrA757l47bZNZFd2eJyYX%2FaIuPl9xQKt3jI%2Bui0%2BtSu%2B8QEYoI%2FEc1B7o4VdNB9LHvq0x4VYIYxNGPvQiEYLGV0GM5CUTxpUy75EYaTDTSdZ4zDFTdckqg7w2OnJQlzVibtefLovHl5Yyw6OBto0SQ4qYJNcDR%2BxkKLGKiLnDV4WJf8Myq1RijY1tE1XxZx30%2FAL%2BFZRVfjkgJTgUKeIsCXtgrQviAin3YS7GTheWoOfgmNyRYQ68BmKGBkw9r7THGHhbmukaKquQP0V53okxwZEpJ%2BOImL2r19oTpOxJjOj3dpPp%2BU2FDGMOet3skGOqUBSHfGwfOJwif99zKdR3KADinhFxdvqZK968h8if1ZBbluCbFnm42RZEJI3OOAed3WwSn%2F70bFkU72f5Kw9%2Fjkt5gk70b4nsPSC3eCTGhoNVHShm0w98LaUMemBppp3X6L7EQK%2BB1O1gnU1YF84J1T4FYL5mSWbLXIIUre4AMao5yD2AI9dsgiQKkwXb15udekqGPwUVGp4GQ5CsDpKZ63LW3F45Lg&X-Amz-Signature=7fed7732cb07503fd9d9b78e30cd1e71bf50dd3dbb79a0c6087796025c380c9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
