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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJOYQ357%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T105925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDA12enUsOwvYX4KaciJjtMt%2BcyB1bwRERMLXW6xqPHRQIhAPsdpErgFoBR%2Fu58PYayCBVHjRTutrnzN8GV3xDYzQ6hKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz6x%2BiGppDH4UrHeB4q3APxi6ue27li21Wd6QMBx3mkkUSdEDNYjBRmIgHB7RnIx%2FZ78yohm6d1vtu6Om3gG7LwgLzwK1GJ4FhTpnP2WOoHW%2Fk8zdccAPc9PBSs0ym61uEiUGPDHY5Dfna4sfwD1oyo4OfTLkN2DaG%2FM2tOch2vH5C68fvCnM6DeZodoJiVRU1II0ZHbxRajOyxyH%2BbTQdeH%2F9kbr7tMwvtDLPfy4GM2sDSOo8OgaIxn1eI%2BEdKLVkBRM9FOBg2ak039bHJ2%2BEN%2FZX32CImW7DhcLt5EB9Ed4tMpssYL2rR%2BdITWgdUgA4BeS2G95axFGKFHoDsoX9QZCBS5KR0hi%2F4595xxRVPiEl0tQmityHCFleZ72%2Bt%2B4uuAW22DiBeH4stC2SQzTlfxsm5pkjuTdBkqW%2F12LxOVj81m5Ul8sPYwtB81YUoRUxIQGEJuOzfiNcVLwJmSYCf942er0AGzmTr6AY8TYYHmD4W0gQoio4cIRpLa6%2BjpUoLb3LuYMrEvnN1oLs5QOGGQvvhiZnqlsOORHXJMkXCGanM5UI6M%2FdEul97322%2BY22aDpyp%2B41jquoCe%2FmFYn%2BPONkFQV6I5icjIeuaToCyuWgyCSrZRL5nB7s13RnPCyLLco7Hv1jPqLUozzCz7tnJBjqkAfxGPLqI%2BkaXekdjFq%2B44ytb44DzGY8SIEU2OWaTdIdwPArliPqzbq4opOjT9eK2hCfXROyCjViU3N8hCWqT1SssKSMrfpp56qf7CIhe5DNd4lstfV8GfU1MH6CvTabGdoOmL2DOucAEYHS515wYwG7NgUJjfBEnRG%2Bmq%2BrBqnBpIRfk7%2FBmRWrGBZIRc7SlRhTTR%2Fklsmvs0Hq72Y9caXoURrkq&X-Amz-Signature=9f3980b053d30f42ff0a6b16b73b1a8bc49044561900ef4e406e9045c488a743&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJOYQ357%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T105925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDA12enUsOwvYX4KaciJjtMt%2BcyB1bwRERMLXW6xqPHRQIhAPsdpErgFoBR%2Fu58PYayCBVHjRTutrnzN8GV3xDYzQ6hKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz6x%2BiGppDH4UrHeB4q3APxi6ue27li21Wd6QMBx3mkkUSdEDNYjBRmIgHB7RnIx%2FZ78yohm6d1vtu6Om3gG7LwgLzwK1GJ4FhTpnP2WOoHW%2Fk8zdccAPc9PBSs0ym61uEiUGPDHY5Dfna4sfwD1oyo4OfTLkN2DaG%2FM2tOch2vH5C68fvCnM6DeZodoJiVRU1II0ZHbxRajOyxyH%2BbTQdeH%2F9kbr7tMwvtDLPfy4GM2sDSOo8OgaIxn1eI%2BEdKLVkBRM9FOBg2ak039bHJ2%2BEN%2FZX32CImW7DhcLt5EB9Ed4tMpssYL2rR%2BdITWgdUgA4BeS2G95axFGKFHoDsoX9QZCBS5KR0hi%2F4595xxRVPiEl0tQmityHCFleZ72%2Bt%2B4uuAW22DiBeH4stC2SQzTlfxsm5pkjuTdBkqW%2F12LxOVj81m5Ul8sPYwtB81YUoRUxIQGEJuOzfiNcVLwJmSYCf942er0AGzmTr6AY8TYYHmD4W0gQoio4cIRpLa6%2BjpUoLb3LuYMrEvnN1oLs5QOGGQvvhiZnqlsOORHXJMkXCGanM5UI6M%2FdEul97322%2BY22aDpyp%2B41jquoCe%2FmFYn%2BPONkFQV6I5icjIeuaToCyuWgyCSrZRL5nB7s13RnPCyLLco7Hv1jPqLUozzCz7tnJBjqkAfxGPLqI%2BkaXekdjFq%2B44ytb44DzGY8SIEU2OWaTdIdwPArliPqzbq4opOjT9eK2hCfXROyCjViU3N8hCWqT1SssKSMrfpp56qf7CIhe5DNd4lstfV8GfU1MH6CvTabGdoOmL2DOucAEYHS515wYwG7NgUJjfBEnRG%2Bmq%2BrBqnBpIRfk7%2FBmRWrGBZIRc7SlRhTTR%2Fklsmvs0Hq72Y9caXoURrkq&X-Amz-Signature=4ec5e6839befb0aac5d94a4d80bac2a59bc4dae6f81c62b2a0551e99e4517851&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
