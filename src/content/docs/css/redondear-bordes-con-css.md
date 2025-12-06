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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YIGUASU%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T094100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbA%2FwO0nIoUNhNi0KCI5DvfNRwLiSd0PzD68n9tJY%2BpwIhALi%2FWHCK5OqiIHvWMcewqXdp5gEDoV%2FBYUalRRdSbYpSKv8DCHMQABoMNjM3NDIzMTgzODA1Igx403oiLXO1YAAmBugq3ANEjOQSv9QsjN45Z5XKSg5ZCSbBRetbCkJ0gHeuPJXpiJub%2Fql5i51gsB7Kt%2FqUB%2BTPyV5fCv0qWhl9NdLzU3rD4JPHiGX4rZ02qoEQSiJB7ltn0mERyfVOZOeAlYdBIKj7sU3fTwCB%2Bt3x9Pomi%2FcHpJEr99jOtn8huj36tMubMsy7MwTUBnj0y3VO5C8tRxudv9cTYvBiWP75izGcOCXnbBrPghQ8XvXOI6CEJ8FcO5FvtsC7RibiRFEYXbPBCaVSOBE2zBV5AJZHDEE1DIHv%2FIBt4iQqkc885VAmk5QSjzfJ5nbyl0YVeEnnwSe9ZTgOQg6QkkGShUPWD%2BSONovShTLzQym0igxgc0QZa6%2B5xzOMXXSqJgDbgOKpuSSNXDWlAEbhYmdbN3b%2BttC3FIZOlT1FJ1LABS%2F7OrGWrsR5AQwnnBs9NZfYKzaxSJ9m137MW4IoNnv2m9g3fzQUM0AnjgAkcWNbPhRqrQRYxuqCHeamo91rwvZRVfkBGzw0aomVGQBN3EcRG8jhvE8r9%2BoUCuit%2BD%2FH4jBTu6ieZxpPqjeltsMNNIYqoU75ImlEIjmLvmOAquQ9sK4pv30AFxXPJT6gHRZvTpXWS96uaccRuf9wCu86FY5JvliLuzDU68%2FJBjqkAUEyJp9KT1JQ%2Br60lke5z2hKT2oQsx3J98jE%2FN7G4vSeGf3cABODbmUPfpDr6vEXCE3jERzKxaZZtS0zF1QA42cAqOlO5PKm8JCH%2BRsdUqvvUz9BabCOtYZFPU%2FpskdI87OPIgplP7JeNt0tLM1q7RO9eP%2Btxma%2FWJxDQksxdkkqZl7wnIQdyetJaYDg1aN912CL%2FlYDB9q6SvoIDVwmoDUOZk86&X-Amz-Signature=c90649efb215140645b15f197c69df01fdfff195802e8323f2f90555b554e2b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YIGUASU%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T094100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbA%2FwO0nIoUNhNi0KCI5DvfNRwLiSd0PzD68n9tJY%2BpwIhALi%2FWHCK5OqiIHvWMcewqXdp5gEDoV%2FBYUalRRdSbYpSKv8DCHMQABoMNjM3NDIzMTgzODA1Igx403oiLXO1YAAmBugq3ANEjOQSv9QsjN45Z5XKSg5ZCSbBRetbCkJ0gHeuPJXpiJub%2Fql5i51gsB7Kt%2FqUB%2BTPyV5fCv0qWhl9NdLzU3rD4JPHiGX4rZ02qoEQSiJB7ltn0mERyfVOZOeAlYdBIKj7sU3fTwCB%2Bt3x9Pomi%2FcHpJEr99jOtn8huj36tMubMsy7MwTUBnj0y3VO5C8tRxudv9cTYvBiWP75izGcOCXnbBrPghQ8XvXOI6CEJ8FcO5FvtsC7RibiRFEYXbPBCaVSOBE2zBV5AJZHDEE1DIHv%2FIBt4iQqkc885VAmk5QSjzfJ5nbyl0YVeEnnwSe9ZTgOQg6QkkGShUPWD%2BSONovShTLzQym0igxgc0QZa6%2B5xzOMXXSqJgDbgOKpuSSNXDWlAEbhYmdbN3b%2BttC3FIZOlT1FJ1LABS%2F7OrGWrsR5AQwnnBs9NZfYKzaxSJ9m137MW4IoNnv2m9g3fzQUM0AnjgAkcWNbPhRqrQRYxuqCHeamo91rwvZRVfkBGzw0aomVGQBN3EcRG8jhvE8r9%2BoUCuit%2BD%2FH4jBTu6ieZxpPqjeltsMNNIYqoU75ImlEIjmLvmOAquQ9sK4pv30AFxXPJT6gHRZvTpXWS96uaccRuf9wCu86FY5JvliLuzDU68%2FJBjqkAUEyJp9KT1JQ%2Br60lke5z2hKT2oQsx3J98jE%2FN7G4vSeGf3cABODbmUPfpDr6vEXCE3jERzKxaZZtS0zF1QA42cAqOlO5PKm8JCH%2BRsdUqvvUz9BabCOtYZFPU%2FpskdI87OPIgplP7JeNt0tLM1q7RO9eP%2Btxma%2FWJxDQksxdkkqZl7wnIQdyetJaYDg1aN912CL%2FlYDB9q6SvoIDVwmoDUOZk86&X-Amz-Signature=6489ce64d0cfabb44a4d5f5a8d59ea198ca2b77d2b1430831ecff025fdfdbbed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
