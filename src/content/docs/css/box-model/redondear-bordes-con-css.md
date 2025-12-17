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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667GRPZ7F%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T134640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCfkgEeCfWC8lGaiV98aoqs6QVJFKJgraKA0IPD%2BWNHgAIhAIETSJqdG%2BGQNCX4Q1iGxFXWmDKl%2F2fL%2BWp7LgKm%2Fz9YKv8DCH8QABoMNjM3NDIzMTgzODA1IgyJT70aCuKrY90vyMMq3APe21vlPi1cVW6MtES7k6ph8T9ePLxGNqWLBojdMZkoaPUdMPxddCbjdr6JPXpACfr4Z3b6Dqkf9avotnVEh1YzWmD1YjZrOxsN72%2B%2F2nbbxD0EEd1Yp0idkWyQcU8jppI0e7O%2Ff%2FQTAh7jZMZnYEXr%2FIaBtHmrEDEuxSwVKw%2FzI8O4QMCdznmAPmb7HSEo3P3gz%2BnGXmjuGxVLimlFOtUTNOR3jBH2AIqnNWNBlIzH6gU%2BGhJ04PvxSKu2kc4GxKApYTnDB%2BaHVY3o3qE7%2F3T30jjmbRQ5jSV67KP7xE8wRUfkzbQ1Zl1A9N5xzP18XxGoPq4aKF0fEUwgwO%2FqEqAYkvPyy9aMqe2UWrUvCN03kwvh6PhbGNYJwiaSXKqr1FHM7XNyyBgcvCkHmgWXEuqXxbQPTd11H%2BfpASBixCF8zYewyBm7h9IIQTY8xqOO%2BUB8aIDz4bHcnZPPUveFRxjtBRA8rKn%2F3rCSxG1cSrv8D6COTD05TJQsjh6awa0ayLEgj4%2BaZ2rZ3BjAranfWactV11ptvODfOVurAEGHAsBSZnoEAbfXkKIKcDNmObibW4iFGu2LQPk6su5MmM9jODhigv865Oa4mW%2BsEPM9%2FiLZ7Dtc%2BQGSQIfDC9anzCg44rKBjqkATbVh6o4LURBXB%2Ff%2FWwAC3DveAKzpWlocbRO35%2B8anTvTShFlacjRNuE3p935Njzv3BSnxFlw9PT3xFwqpzsZu70wvDOuUnScxwvD%2BaGAbKK6pnlNeCV0dssXe3x8mU7UaFUs1VbVJG%2Bl50VTA0rCmXzHIFCP%2BOQKrRuRoJ%2FnIKBrVlCaslLwekhX8JS4Uu0EkrkhJQYIQBkPSszO8l6K56OuCFO&X-Amz-Signature=689693b7649912ef2adc7f789c911f4d44c72eda657b5872912012c94de42e36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667GRPZ7F%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T134640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCfkgEeCfWC8lGaiV98aoqs6QVJFKJgraKA0IPD%2BWNHgAIhAIETSJqdG%2BGQNCX4Q1iGxFXWmDKl%2F2fL%2BWp7LgKm%2Fz9YKv8DCH8QABoMNjM3NDIzMTgzODA1IgyJT70aCuKrY90vyMMq3APe21vlPi1cVW6MtES7k6ph8T9ePLxGNqWLBojdMZkoaPUdMPxddCbjdr6JPXpACfr4Z3b6Dqkf9avotnVEh1YzWmD1YjZrOxsN72%2B%2F2nbbxD0EEd1Yp0idkWyQcU8jppI0e7O%2Ff%2FQTAh7jZMZnYEXr%2FIaBtHmrEDEuxSwVKw%2FzI8O4QMCdznmAPmb7HSEo3P3gz%2BnGXmjuGxVLimlFOtUTNOR3jBH2AIqnNWNBlIzH6gU%2BGhJ04PvxSKu2kc4GxKApYTnDB%2BaHVY3o3qE7%2F3T30jjmbRQ5jSV67KP7xE8wRUfkzbQ1Zl1A9N5xzP18XxGoPq4aKF0fEUwgwO%2FqEqAYkvPyy9aMqe2UWrUvCN03kwvh6PhbGNYJwiaSXKqr1FHM7XNyyBgcvCkHmgWXEuqXxbQPTd11H%2BfpASBixCF8zYewyBm7h9IIQTY8xqOO%2BUB8aIDz4bHcnZPPUveFRxjtBRA8rKn%2F3rCSxG1cSrv8D6COTD05TJQsjh6awa0ayLEgj4%2BaZ2rZ3BjAranfWactV11ptvODfOVurAEGHAsBSZnoEAbfXkKIKcDNmObibW4iFGu2LQPk6su5MmM9jODhigv865Oa4mW%2BsEPM9%2FiLZ7Dtc%2BQGSQIfDC9anzCg44rKBjqkATbVh6o4LURBXB%2Ff%2FWwAC3DveAKzpWlocbRO35%2B8anTvTShFlacjRNuE3p935Njzv3BSnxFlw9PT3xFwqpzsZu70wvDOuUnScxwvD%2BaGAbKK6pnlNeCV0dssXe3x8mU7UaFUs1VbVJG%2Bl50VTA0rCmXzHIFCP%2BOQKrRuRoJ%2FnIKBrVlCaslLwekhX8JS4Uu0EkrkhJQYIQBkPSszO8l6K56OuCFO&X-Amz-Signature=33e1f5f0697dae3e02e051ec1f4580a4df57a63a100f4daea3df321e418e9d4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
