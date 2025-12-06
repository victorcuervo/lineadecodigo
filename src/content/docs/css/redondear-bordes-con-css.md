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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGOKYZQ2%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T203039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCX9mLTRvTY%2FAhBrUkRaypvzbH1MPyvrnnaK5H2YGdX%2BwIhAODOOuDhtEZqjBGqpb9sHQq3UmWrtKyROJAPI0L4IoBFKv8DCHoQABoMNjM3NDIzMTgzODA1IgwUfgBQH2XzfIdl%2BbQq3APQy%2FeyNAdQAt6alkBpL66LTsuaONBb4fkYN4qPA7tmQzNu8n3ihkLXliqH6DeCpaMx%2B%2BwWI98zKQPXUyoT50mEscxrZAKm2QDUGMGkoR1UOL5I3HypqfS93gUGSlWN7nLKIHMFuA%2FDrGLq111MSJQC5IrrbzbmA%2FIEb7uVOYDGmYcDGXnogGEgRwkQoSng43WVhwH0YjIMql1htXBYQerpxH%2Bgti4ouQQlziahGLLBFEWqp53ZcJTg9z4cd2xerHyHzdsSRLMKsJZer2t924OcQ6%2BFpDCgItAdCnGWBo3TpubOJOc9gFxJ2majuLLU3gOJExEIirItqb2xcNGvOfvE7t06ZjWWX4X3zKaBx%2BtgC2aeVW7aRVTsh9tcDfq0MChXV9xn0Dh0sv542prEOhb0b7WACLpc5l0wOVzDd3VEv9sR%2BYW0Hlc9rw3UEHjs%2Fgy%2FqGg7LYIH6TtwSTfUP7Y6PlVtIMHUzjyk3eaScAzzmtleuu9eT6HH8EYc%2BbQ8S%2B4tY%2FnHwto3Mp%2F7xSdCSR%2BkAZ8Svp%2BLkd%2FixfVpUBG6GUw6zpy%2FOTPBKpXJCBSGgpH4e0mXgCo%2FYiI0RMjtwMUmdhxac5QaQ7dUEuSHCEPe%2FIgVhtaLVYpOuZnBxDDRxtHJBjqkARBlolq0GhN%2Fdq%2FeDWx0MkGGqJkY6t%2BfDtWEqqL%2FKsy02TuG0LNDtlZjXmKo8AlGb%2BxL3Swa0pl0nphORdk7toKdJgLMHCXtInwrPvIXiPtE9oQ%2FYr7LowuI0oUEf0pONy7y6Z80Q%2BOpYuKl474ed5S8cxoUsy6a8jZTS7nE%2BboFeFMOXVuHJPaZmhyThmX60xaNXduyKbTgouNDLzM0C4N3Dus2&X-Amz-Signature=a97633ecc50f53ccbe89ff4ac1f626789ba7e1826286f6c182339a20d04e57f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGOKYZQ2%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T203039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCX9mLTRvTY%2FAhBrUkRaypvzbH1MPyvrnnaK5H2YGdX%2BwIhAODOOuDhtEZqjBGqpb9sHQq3UmWrtKyROJAPI0L4IoBFKv8DCHoQABoMNjM3NDIzMTgzODA1IgwUfgBQH2XzfIdl%2BbQq3APQy%2FeyNAdQAt6alkBpL66LTsuaONBb4fkYN4qPA7tmQzNu8n3ihkLXliqH6DeCpaMx%2B%2BwWI98zKQPXUyoT50mEscxrZAKm2QDUGMGkoR1UOL5I3HypqfS93gUGSlWN7nLKIHMFuA%2FDrGLq111MSJQC5IrrbzbmA%2FIEb7uVOYDGmYcDGXnogGEgRwkQoSng43WVhwH0YjIMql1htXBYQerpxH%2Bgti4ouQQlziahGLLBFEWqp53ZcJTg9z4cd2xerHyHzdsSRLMKsJZer2t924OcQ6%2BFpDCgItAdCnGWBo3TpubOJOc9gFxJ2majuLLU3gOJExEIirItqb2xcNGvOfvE7t06ZjWWX4X3zKaBx%2BtgC2aeVW7aRVTsh9tcDfq0MChXV9xn0Dh0sv542prEOhb0b7WACLpc5l0wOVzDd3VEv9sR%2BYW0Hlc9rw3UEHjs%2Fgy%2FqGg7LYIH6TtwSTfUP7Y6PlVtIMHUzjyk3eaScAzzmtleuu9eT6HH8EYc%2BbQ8S%2B4tY%2FnHwto3Mp%2F7xSdCSR%2BkAZ8Svp%2BLkd%2FixfVpUBG6GUw6zpy%2FOTPBKpXJCBSGgpH4e0mXgCo%2FYiI0RMjtwMUmdhxac5QaQ7dUEuSHCEPe%2FIgVhtaLVYpOuZnBxDDRxtHJBjqkARBlolq0GhN%2Fdq%2FeDWx0MkGGqJkY6t%2BfDtWEqqL%2FKsy02TuG0LNDtlZjXmKo8AlGb%2BxL3Swa0pl0nphORdk7toKdJgLMHCXtInwrPvIXiPtE9oQ%2FYr7LowuI0oUEf0pONy7y6Z80Q%2BOpYuKl474ed5S8cxoUsy6a8jZTS7nE%2BboFeFMOXVuHJPaZmhyThmX60xaNXduyKbTgouNDLzM0C4N3Dus2&X-Amz-Signature=db01f701c3300ec82477759cdbf2eeefb95f398937fbc38138f4d00df9abfadf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
