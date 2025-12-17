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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5BDZRFV%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T100627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3%2BjswGwRO9x1o6OUnOrK43Fdv5H%2FY0tErr97G%2F70OoAIhAPxXeCY26%2FZDhRcFR5qjfhtcEcJex4ZLgZhsbRiDqWCcKv8DCHsQABoMNjM3NDIzMTgzODA1IgxHZ2MWhJ88vMH9Wugq3AOnZ1zr%2FJZg7kRhJS%2BEa%2BlJJwj0ZFgPPjRFfOs3JLLo0oql5LWczP1LQCMFL%2Bo1pRorWS%2FTy2f7Ltevh5oMpqrfeoOVsiAfODTv3FwKqDzCD0QZZmKpZqHMxRrYgAE2pbq7of7Yi3nTozjJ1sfH502%2BeodUK6FBv%2FCZJ9lXb%2FE%2BNRuO%2BOvvNWwmhlZJvH49OON326mDnDSSMjA4YT83qSvB1%2FAw5cXX%2FP%2FqryzE%2FyRNwPo%2FqZwhOOBGXJ%2FGb1e5WI%2FWcO6G5qM7fph4urxQ3GUsBTI5q9dQVt3JhHxZny4GAXJxpg3sAopO1OJ%2BHzOrCNRYZYjxK6uyRjasR58zaDvcT%2FzsPSycXC54n1CX6n3bi%2BTUb%2F54uX0RxLigyDt7CENhtiy%2B7yzKXfIGdMktbwibdNishLRzeMaIbpcXe%2FEi4WQsypAQhOHHPXgdiaT6EeYzhTkdUqYbCJJMzQJfsqq5lZYzh1br3tKrT7qAvgHpmEH5XzbkSpMlE2lHW0cRf%2Bbq4x4OKHXbAQ86aJgETpEJLw0PHgg9FZ6pKITa94iBcvnEbyjhrjvpS%2FwjWIKZEPofXMvAFh50KViScU2null6I22C0cDGNeFM5ZfyWIRmXmlZS%2Fcd26NU5rh78zD68InKBjqkAbpJh04hSJ%2FNOiNJPOcI0QARoTYlp93tWcf3XwQnFPu%2FvyNhdnun3dpyxXJmXqm1JRde1HTu3TUvzaMgFgeCipDdoRdjj3UrpqbzNgb%2FBm%2F896eGKSI1sjq5Ud10aDNcevkvVc5VHXww0R76U17%2FXGC0pQuFdLJMYThbmjMsMN3WFpLZygv%2Bsm7yuHV9HthpQjTb7xsExdgx9QdUup6dx38iMMaI&X-Amz-Signature=2531dcde3619820193743cd3420634ecd8e309ca021e537eef6e39695772de89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5BDZRFV%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T100627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3%2BjswGwRO9x1o6OUnOrK43Fdv5H%2FY0tErr97G%2F70OoAIhAPxXeCY26%2FZDhRcFR5qjfhtcEcJex4ZLgZhsbRiDqWCcKv8DCHsQABoMNjM3NDIzMTgzODA1IgxHZ2MWhJ88vMH9Wugq3AOnZ1zr%2FJZg7kRhJS%2BEa%2BlJJwj0ZFgPPjRFfOs3JLLo0oql5LWczP1LQCMFL%2Bo1pRorWS%2FTy2f7Ltevh5oMpqrfeoOVsiAfODTv3FwKqDzCD0QZZmKpZqHMxRrYgAE2pbq7of7Yi3nTozjJ1sfH502%2BeodUK6FBv%2FCZJ9lXb%2FE%2BNRuO%2BOvvNWwmhlZJvH49OON326mDnDSSMjA4YT83qSvB1%2FAw5cXX%2FP%2FqryzE%2FyRNwPo%2FqZwhOOBGXJ%2FGb1e5WI%2FWcO6G5qM7fph4urxQ3GUsBTI5q9dQVt3JhHxZny4GAXJxpg3sAopO1OJ%2BHzOrCNRYZYjxK6uyRjasR58zaDvcT%2FzsPSycXC54n1CX6n3bi%2BTUb%2F54uX0RxLigyDt7CENhtiy%2B7yzKXfIGdMktbwibdNishLRzeMaIbpcXe%2FEi4WQsypAQhOHHPXgdiaT6EeYzhTkdUqYbCJJMzQJfsqq5lZYzh1br3tKrT7qAvgHpmEH5XzbkSpMlE2lHW0cRf%2Bbq4x4OKHXbAQ86aJgETpEJLw0PHgg9FZ6pKITa94iBcvnEbyjhrjvpS%2FwjWIKZEPofXMvAFh50KViScU2null6I22C0cDGNeFM5ZfyWIRmXmlZS%2Fcd26NU5rh78zD68InKBjqkAbpJh04hSJ%2FNOiNJPOcI0QARoTYlp93tWcf3XwQnFPu%2FvyNhdnun3dpyxXJmXqm1JRde1HTu3TUvzaMgFgeCipDdoRdjj3UrpqbzNgb%2FBm%2F896eGKSI1sjq5Ud10aDNcevkvVc5VHXww0R76U17%2FXGC0pQuFdLJMYThbmjMsMN3WFpLZygv%2Bsm7yuHV9HthpQjTb7xsExdgx9QdUup6dx38iMMaI&X-Amz-Signature=15f799e3b6304d2936f5d0b97507bb65fc0062b5f65547b88fb7b3f33d4af490&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
