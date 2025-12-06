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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LF4FVOZ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T092203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQqWyfm32tJUtfA9oTLwT2pXvzb9%2F7I3m4PSWrpAQpJgIhAL%2F6tao%2FBwlMdQi3htj64p5XsjxAKzXCzMLoM1Hh%2B92uKv8DCHEQABoMNjM3NDIzMTgzODA1IgxAGubhIG1HgAJeVE4q3APh9HPK6wqjSP0HQ0ZPhoyQBOqZRo6adNPlVC8tyBs6C0d4LNRj2Gvu1COmdwGoHVRn7Cg5Y8RtwPtbbY6KqDeluAfjkpelVO%2F4tJO6aR0hXSXoT8ejasZwzl3eXf4jsx60tpE5hKXSGGHxxXvGiijSPOp6OwupVsmwUuEYDHdALw6FOgQKyDdQz2fDUlrT7iQlzGckPSWk75kds0ZOKW3n3SOQ3DDBhxBuZbVa47A5kTC%2BEijlskFQIpJ2%2F6DhfGYghmpUEfUPOIWLnRECvQ%2BK0jU%2FkyMc4HbErheHmyGywLySUwoQ6Xjqf0rT2OKh%2FKDUEZ3kLFMS%2FG%2FYRYYCQLHh%2BGrspsihOKWCdBjmofoxRp1JJ9gdnFTDeu%2Br7DVaKNmrfhjhrZ9j5Yv7lH4S4mytf%2Bbgi7QXAvmMgC8BDj7elEng2w8gWYfJYT2d4uiDtKHTAnfQFUOFQNlHALKIue%2Bqp3tmGwTynIhVr%2BKMJ%2FGnPv5PwqV%2BlRD%2B6TB2639jhJqZQTrJQTlxJvTQsTLiFHt6Tx%2F8791mXl22UBYo2G5AlmGJSPj6JVsWM12JkhbfYnfy%2Bw6xiB4Bp%2Ff9yL9F4hQhmzwOAkYennHweAeZ66leiTU6gzCCDGQbo72LvjCLvM%2FJBjqkARLbxGxK%2FunPtsm61KAPQ6M43wirupC9%2BE68EZERo4rpYzmFWRiX6AbN64GMbtVp%2FKdSdj8Cp5w2dvJmhgOzoe9WeHvPGLvFpijXcSJ3QxWbMAcJQOUBvWJeaLoznI3gBaetlmv4tPQIkh8eABxXX1OqpKGN%2BEH5ogO2us%2BkejydNvBFLrZ3v0EfofoJZQgVhS%2FRaCHji1CPKlpA0RVCsvI16CWp&X-Amz-Signature=3417c83875c8936722d9d1f1be6b72c378fdb3abeaad92cfb111905b5b82db43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LF4FVOZ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T092203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQqWyfm32tJUtfA9oTLwT2pXvzb9%2F7I3m4PSWrpAQpJgIhAL%2F6tao%2FBwlMdQi3htj64p5XsjxAKzXCzMLoM1Hh%2B92uKv8DCHEQABoMNjM3NDIzMTgzODA1IgxAGubhIG1HgAJeVE4q3APh9HPK6wqjSP0HQ0ZPhoyQBOqZRo6adNPlVC8tyBs6C0d4LNRj2Gvu1COmdwGoHVRn7Cg5Y8RtwPtbbY6KqDeluAfjkpelVO%2F4tJO6aR0hXSXoT8ejasZwzl3eXf4jsx60tpE5hKXSGGHxxXvGiijSPOp6OwupVsmwUuEYDHdALw6FOgQKyDdQz2fDUlrT7iQlzGckPSWk75kds0ZOKW3n3SOQ3DDBhxBuZbVa47A5kTC%2BEijlskFQIpJ2%2F6DhfGYghmpUEfUPOIWLnRECvQ%2BK0jU%2FkyMc4HbErheHmyGywLySUwoQ6Xjqf0rT2OKh%2FKDUEZ3kLFMS%2FG%2FYRYYCQLHh%2BGrspsihOKWCdBjmofoxRp1JJ9gdnFTDeu%2Br7DVaKNmrfhjhrZ9j5Yv7lH4S4mytf%2Bbgi7QXAvmMgC8BDj7elEng2w8gWYfJYT2d4uiDtKHTAnfQFUOFQNlHALKIue%2Bqp3tmGwTynIhVr%2BKMJ%2FGnPv5PwqV%2BlRD%2B6TB2639jhJqZQTrJQTlxJvTQsTLiFHt6Tx%2F8791mXl22UBYo2G5AlmGJSPj6JVsWM12JkhbfYnfy%2Bw6xiB4Bp%2Ff9yL9F4hQhmzwOAkYennHweAeZ66leiTU6gzCCDGQbo72LvjCLvM%2FJBjqkARLbxGxK%2FunPtsm61KAPQ6M43wirupC9%2BE68EZERo4rpYzmFWRiX6AbN64GMbtVp%2FKdSdj8Cp5w2dvJmhgOzoe9WeHvPGLvFpijXcSJ3QxWbMAcJQOUBvWJeaLoznI3gBaetlmv4tPQIkh8eABxXX1OqpKGN%2BEH5ogO2us%2BkejydNvBFLrZ3v0EfofoJZQgVhS%2FRaCHji1CPKlpA0RVCsvI16CWp&X-Amz-Signature=35813c790d56951e2c62374ff2af141c3c775413d9c82134613051f0653d3f47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
