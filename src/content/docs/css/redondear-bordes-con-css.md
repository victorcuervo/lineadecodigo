---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YYXIPOM%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T095538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQDeHNSPYftaGNklbGG8Dd3smrs%2BsR0cYkqXANODVb8nPQIhAIC597WS1nOZ6BOXXXAoOSl%2F4v%2Fq4nGgS40oY8LbT4QhKv8DCEMQABoMNjM3NDIzMTgzODA1IgxYVxXvsKxLKf%2FZXaoq3AM883%2BRYI5lSFmXpePaezITJVQZ%2B5xwhE79alPEs4IjtzzUSlQj4YuzoI026z%2BGWfgzPFUaf%2FktNV3HxX4hqU6qtLqFISx79I4vBOOKb7AsQ8tOb7fo%2Fw2qEkCcwbpkkG4OH34EN1HxB7scaGX8zVtT55nYzjr33bXFq4lvslb2mqrf2Go4IYEK9tVhaR7jvJmqDAbA5S1g1rOZl5hk0MaxA%2BYepxMivfLqv%2FtaCPomqZMwzWPDAGFVeDdW4HmDUsBgFYHGDTO8Wq2q9dPBrAnIa3m%2FTuIDMYQi%2B8%2Filz3Bi9SsCGfTyq6kDED%2BkpACwAAN1qioATzV6KVGbPW24LpKhlUR1cCJgj%2BV6kkudoHO2Z9p7K%2BJ0%2Fo1Z1QLdGUVNCw3jRFv1hdFzIaFzSDjsxWqRNArVr5%2BRKXd602kyzBdOvCIoBfbi5gA5VZ0KIi1ywHW6E8oXGp2Ci6G5vJOFVF7s%2BTdQ8NBcrmVut5DdwDVaEFOa3ZpCko4l1rVDbrmG0W%2Bb1dteiwlEgF5ibU8v4AA%2FvuVFdYwDgpVlyvYZId9WztvSLGKMyzAvBplQyb%2B9%2FSCle5Gw2cFUxGMffpOJtn3sugvfRrJ6tRx73RoqAlt8l5Pa4U3C%2FrHPkn5%2FTDKq8XJBjqkASO%2F7cInejHxJeA2Y1JeGnlqRYcsmTttChxurViHYfKWWPbr13jEUE%2B6iFxB60pRi%2BuA%2FgYzKJshctbrVCiJOHTyc8V1PhSLyDUsyW7ILWgcPeGiWdDZ7xGn4Pe0FMeKI1PZCPnlJpVxfMsi1gPHidU95r3NbItTMsUqb0sEfg5SW42xByCBkltX632QjuzPLNapLJjCeSAGO5I7qgELG5WJGJD3&X-Amz-Signature=f9fe6919c51ac7c0e569891ef18003234c794a15c99b431f79a2bfc3cade961d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YYXIPOM%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T095538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQDeHNSPYftaGNklbGG8Dd3smrs%2BsR0cYkqXANODVb8nPQIhAIC597WS1nOZ6BOXXXAoOSl%2F4v%2Fq4nGgS40oY8LbT4QhKv8DCEMQABoMNjM3NDIzMTgzODA1IgxYVxXvsKxLKf%2FZXaoq3AM883%2BRYI5lSFmXpePaezITJVQZ%2B5xwhE79alPEs4IjtzzUSlQj4YuzoI026z%2BGWfgzPFUaf%2FktNV3HxX4hqU6qtLqFISx79I4vBOOKb7AsQ8tOb7fo%2Fw2qEkCcwbpkkG4OH34EN1HxB7scaGX8zVtT55nYzjr33bXFq4lvslb2mqrf2Go4IYEK9tVhaR7jvJmqDAbA5S1g1rOZl5hk0MaxA%2BYepxMivfLqv%2FtaCPomqZMwzWPDAGFVeDdW4HmDUsBgFYHGDTO8Wq2q9dPBrAnIa3m%2FTuIDMYQi%2B8%2Filz3Bi9SsCGfTyq6kDED%2BkpACwAAN1qioATzV6KVGbPW24LpKhlUR1cCJgj%2BV6kkudoHO2Z9p7K%2BJ0%2Fo1Z1QLdGUVNCw3jRFv1hdFzIaFzSDjsxWqRNArVr5%2BRKXd602kyzBdOvCIoBfbi5gA5VZ0KIi1ywHW6E8oXGp2Ci6G5vJOFVF7s%2BTdQ8NBcrmVut5DdwDVaEFOa3ZpCko4l1rVDbrmG0W%2Bb1dteiwlEgF5ibU8v4AA%2FvuVFdYwDgpVlyvYZId9WztvSLGKMyzAvBplQyb%2B9%2FSCle5Gw2cFUxGMffpOJtn3sugvfRrJ6tRx73RoqAlt8l5Pa4U3C%2FrHPkn5%2FTDKq8XJBjqkASO%2F7cInejHxJeA2Y1JeGnlqRYcsmTttChxurViHYfKWWPbr13jEUE%2B6iFxB60pRi%2BuA%2FgYzKJshctbrVCiJOHTyc8V1PhSLyDUsyW7ILWgcPeGiWdDZ7xGn4Pe0FMeKI1PZCPnlJpVxfMsi1gPHidU95r3NbItTMsUqb0sEfg5SW42xByCBkltX632QjuzPLNapLJjCeSAGO5I7qgELG5WJGJD3&X-Amz-Signature=331c7e083b500d0792deacd1b37827f65df8bb18f0787d20bb6eefcc5b396d2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
