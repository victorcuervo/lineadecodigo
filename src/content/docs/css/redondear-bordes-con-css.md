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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SODCJXVI%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T055825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6qobR5RAnSwP918lqsNG3mRyfOMmmVwet6K8YZuW2zwIgBGKWOanoKZIZS6NMpjUVY0MElbxo7h8kt6ds2VhII7Iq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDAiRtk5M%2BcsaAvcNzCrcA%2BvCxceWF7LyDcnUaS7%2BpZ6irxddLBcAfpYnOoHJl22f1dngzWrUlGtz9JxKTmsCV4Fro%2FXhm9yApFZe1IpXrPWj4WY9r37Amt8iy2c%2BzVx80qIM93co28qpQHzy0ouq3RxW4mGSQz%2BXvVis3%2FlLbKR2MQEAaYo%2F5%2Fgj7YB2H1tIsk%2FURa9ebuMh1WuVrp2tZDmvDQzqnSJlpwjwN4I3P3p7Bc7pODRhcYWQ4GUL8FYIv5zCXTKioY6is9HWpJaeTs5lRBrXw2ceXz50%2FybGIM%2B6zKBqWvLBcDtl4tJWf4QoAQgsfoE3zAgL20jxIGsFsXm%2FLnC4ed2cUeIRpTn3nuf21I0oFpT7tmGJYU8SlGQPSjpu0po5kXAjagj4t032hF9dVue5O3r4jg2WtpEyRz1gCDgukg7XwnqZevrO7coMhqvZN9Es2G1l7CFEoriqf3uXPjJTTiH4hbzLO%2BoW0C0X54Outk1BEMdELiGo0YMcjzo8vajDoj8vHB24hwyh5bmblP7jsyHx%2B6QTLvXjj77fsfNr7Ndjs10qSFeNupUROdxil204MZnnwN9RQ2icmlEVE%2Fia%2BcGAG%2BvZ3iwSJ6PFY6LF5X6vpOZ7gKUNnhk5LGKd0X85SSw6QiFcMNT8zskGOqUBbwLhkUAQQ2AogeHawM5asKrS1C5yuY5GzgIUCYndPLST%2F9z9wSQfS5lUVVIUqdJhdJmO3gITDveAjjgvU%2FRJiIO6FfZLaVOr19A6jlu90UUoN%2B2orLq89AdattDlaLge4WB46Yc23JApyS3P0jYdJ011Pm1YG5ypjF8HISZv431sMwWP%2F7RgVLXe%2FyMS7wc6ucImDUozEqnoXqJYTfYNhcP5Q2Hb&X-Amz-Signature=e51ee6055f23907b119dd23d49604515e052fad7249314c8e060ecc80918e1b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SODCJXVI%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T055825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6qobR5RAnSwP918lqsNG3mRyfOMmmVwet6K8YZuW2zwIgBGKWOanoKZIZS6NMpjUVY0MElbxo7h8kt6ds2VhII7Iq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDAiRtk5M%2BcsaAvcNzCrcA%2BvCxceWF7LyDcnUaS7%2BpZ6irxddLBcAfpYnOoHJl22f1dngzWrUlGtz9JxKTmsCV4Fro%2FXhm9yApFZe1IpXrPWj4WY9r37Amt8iy2c%2BzVx80qIM93co28qpQHzy0ouq3RxW4mGSQz%2BXvVis3%2FlLbKR2MQEAaYo%2F5%2Fgj7YB2H1tIsk%2FURa9ebuMh1WuVrp2tZDmvDQzqnSJlpwjwN4I3P3p7Bc7pODRhcYWQ4GUL8FYIv5zCXTKioY6is9HWpJaeTs5lRBrXw2ceXz50%2FybGIM%2B6zKBqWvLBcDtl4tJWf4QoAQgsfoE3zAgL20jxIGsFsXm%2FLnC4ed2cUeIRpTn3nuf21I0oFpT7tmGJYU8SlGQPSjpu0po5kXAjagj4t032hF9dVue5O3r4jg2WtpEyRz1gCDgukg7XwnqZevrO7coMhqvZN9Es2G1l7CFEoriqf3uXPjJTTiH4hbzLO%2BoW0C0X54Outk1BEMdELiGo0YMcjzo8vajDoj8vHB24hwyh5bmblP7jsyHx%2B6QTLvXjj77fsfNr7Ndjs10qSFeNupUROdxil204MZnnwN9RQ2icmlEVE%2Fia%2BcGAG%2BvZ3iwSJ6PFY6LF5X6vpOZ7gKUNnhk5LGKd0X85SSw6QiFcMNT8zskGOqUBbwLhkUAQQ2AogeHawM5asKrS1C5yuY5GzgIUCYndPLST%2F9z9wSQfS5lUVVIUqdJhdJmO3gITDveAjjgvU%2FRJiIO6FfZLaVOr19A6jlu90UUoN%2B2orLq89AdattDlaLge4WB46Yc23JApyS3P0jYdJ011Pm1YG5ypjF8HISZv431sMwWP%2F7RgVLXe%2FyMS7wc6ucImDUozEqnoXqJYTfYNhcP5Q2Hb&X-Amz-Signature=d3becd5998f9989db690173978395dd973dcc2a9b366f62a319cb54abcfdaa65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
