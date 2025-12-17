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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UYIYQFY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T003428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEPUbM%2FQjxcfvU9ZVA3Ac8uDBAtp2DIit9zlQNpv%2FgveAiAm4z3IueB6VQBRctJJlvCQ%2F1RmOlkyCMnAgey2QH%2BM3yr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMJ9RNNK4JwW4S%2FX1wKtwDKZFvhWAQGfqrSeeJ93sCc9INkSmG5PhfnHrexX%2FXHziMwNJE5CKk3d3g7pDgyPJV2IOYG0JB%2Bfc4dlUx4P4lSljJa%2F0TFjJGSYKFkPtMg7K0KJcYYjbMJOJAq11xssEW2qXXqPIWzMTJOHc7n8WevvscNAEdXQyiHg9JG%2FJByeugSv5RLAWn9LJl6i3XAcrPpwppI%2Bk3IYKMSQxPVW6bAYJq9oJrxDshjAxMQlDP52arJXbdODJjIhbVsYyVnot0V828z2raQ%2FierpWJG0V%2BTf8IRyxM7Q9PcqLghN%2BnbBK6hy0dK1iM2%2By%2FUemJAnCma%2BUMfAC8IXa1SzieV5aEdssvJEgyintXbUJWdOM5hvHar%2BMYescMRabGnn2les7JaceVnD6WQtfkXpYUgveicOKOQ0DB9SATaXQ9gWgDBHdlpMkEYenyfn9g1nze73iqoVUMiARphONO%2FW9WXD4arMvabOK9jE%2FTFM8Wq42%2FXjzhAepyc5yH56E%2Bm4yZ%2FdGdDsrIugNfUeLZB4W5FezbjMJqQo4zU1od2G%2Fwtk4Pov6k%2BnrK6Sf3NtBQzM9wvQGG023FUBXoIAWx4P1vYDedfSY0PUUNLDD2sHbQKSc2S8O1sbLp3FjML69K7Sow1N6HygY6pgFXbWzzhtwAbc6e0K0V29%2BisNqp7P0uJze%2FJeUlFv4PqTJaYnVhDyJ87ubO%2B5oHELe2FgyDDEhbYgzoE7o3XU50jBPCTln%2Fsiyf6Ce1fC2YA9KyQbDExTx8aXAP3s3uJHHbYYNFWYEEHTsOHncJ6JQQaP26g4PvHHxm%2FJ%2BVKAmQXsOdH%2FHPzSsPILSldtCPguFPoNJREt4FJD9c8WcXncXnn4ej%2Fym3&X-Amz-Signature=7a28ed612bffa1eb490def4672d1ad8dc8b708826148ab57ae1b818abe3d0f29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UYIYQFY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T003428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEPUbM%2FQjxcfvU9ZVA3Ac8uDBAtp2DIit9zlQNpv%2FgveAiAm4z3IueB6VQBRctJJlvCQ%2F1RmOlkyCMnAgey2QH%2BM3yr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMJ9RNNK4JwW4S%2FX1wKtwDKZFvhWAQGfqrSeeJ93sCc9INkSmG5PhfnHrexX%2FXHziMwNJE5CKk3d3g7pDgyPJV2IOYG0JB%2Bfc4dlUx4P4lSljJa%2F0TFjJGSYKFkPtMg7K0KJcYYjbMJOJAq11xssEW2qXXqPIWzMTJOHc7n8WevvscNAEdXQyiHg9JG%2FJByeugSv5RLAWn9LJl6i3XAcrPpwppI%2Bk3IYKMSQxPVW6bAYJq9oJrxDshjAxMQlDP52arJXbdODJjIhbVsYyVnot0V828z2raQ%2FierpWJG0V%2BTf8IRyxM7Q9PcqLghN%2BnbBK6hy0dK1iM2%2By%2FUemJAnCma%2BUMfAC8IXa1SzieV5aEdssvJEgyintXbUJWdOM5hvHar%2BMYescMRabGnn2les7JaceVnD6WQtfkXpYUgveicOKOQ0DB9SATaXQ9gWgDBHdlpMkEYenyfn9g1nze73iqoVUMiARphONO%2FW9WXD4arMvabOK9jE%2FTFM8Wq42%2FXjzhAepyc5yH56E%2Bm4yZ%2FdGdDsrIugNfUeLZB4W5FezbjMJqQo4zU1od2G%2Fwtk4Pov6k%2BnrK6Sf3NtBQzM9wvQGG023FUBXoIAWx4P1vYDedfSY0PUUNLDD2sHbQKSc2S8O1sbLp3FjML69K7Sow1N6HygY6pgFXbWzzhtwAbc6e0K0V29%2BisNqp7P0uJze%2FJeUlFv4PqTJaYnVhDyJ87ubO%2B5oHELe2FgyDDEhbYgzoE7o3XU50jBPCTln%2Fsiyf6Ce1fC2YA9KyQbDExTx8aXAP3s3uJHHbYYNFWYEEHTsOHncJ6JQQaP26g4PvHHxm%2FJ%2BVKAmQXsOdH%2FHPzSsPILSldtCPguFPoNJREt4FJD9c8WcXncXnn4ej%2Fym3&X-Amz-Signature=cab2567ce3bbe3db2844f68a6356a5ccebb9321abe3e2f23ba0e1a4023ecab82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
