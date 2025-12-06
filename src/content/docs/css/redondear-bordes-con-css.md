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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOEW3T7F%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T045123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBwM1ls9w52Dlr11DdTqbHH1m4OfPyNF5qHCTLLpZCIpAiAChiF2xtN4hn1wdVFBQ7qRPv3DBSxRYb6EIfaq%2FmDTpyr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIM9dr0AF1%2BE122tI1dKtwD4m7Bqo%2BERWh4jLC5MTn8k8VMZvxIcIco0IPL73ayCvd084t1wWXueJ2rdNQog0OG1sGqR4u6rrqhbkRZBcU6LR2UwFOOkIihsRTQ%2BusrKVN%2Fy6FY1ZW2YIstD5r%2F0Yp%2Bxb0CNWFl%2B50Wn61cy1UZe6cybWvLfS7NI%2BZFWixHz8I1oCb7ymqc3urGjJxr1ImiOMhiuJNk7xkaQPJoVBbUmYf0pg9MtQTIVrGUOKzoGNjj%2FS6vX%2BXbzGdoMBPI8XisXgN80VviZsJT18pZ4Yq%2FetySLCyFH1ep1IcxRYUGH6a%2F24n7LsgY%2FaySuEEg2Y5ktF45e4hLZQSs6K9VHqiKkRbEcn5HniCk8j8cq8aE9KaCc2XPelg3bxFnmH6bfUWX1WhzAq3WJiOTnFugvokuilfezXp8ksW73IVVSVsTkM0LvKZPLYnYhjlQrJoUJpVn8TIyRvoCP24M9Vtao2Qh%2BOEGCHBSYysMH9WXFuLykXTOc%2FG3%2Fuz6ooueIwqKL0eE2IoMTn5NGLxv0OuGsZ4Okur2O7BjUwBybtwAgXJcaiU7cfwMowSGpUS9IZ3lwQMhZbvAiyal4K9ORUnGw%2Fe8H08qDZuybacAK38OjgrWsYNZErL2%2BNicJftwfiAwpt7OyQY6pgGch79tyUHsp22FokaI2KO8eGOzoee3A7IwYofdkF5g2dJQqBRDN8xjkRxL%2B7lIa1xEgYEd8FfTm5cUCHQNlXq%2BtQLxcXlMTKjK%2BzWraAulfM6tPtnKv01C6RhC2eo8ruz6Nw4hnLDRhsHdGjjS2ihjAleKWs9UWRmabSrMZYfd4AqmRYlKVK133FK9gNLiZWDLmz5exuor1YPyu687XoTnb1Xn9%2F4H&X-Amz-Signature=952d5d6359216361b2dff2359a208f90355b6623b9598f3a99a027daee838ac1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOEW3T7F%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T045123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBwM1ls9w52Dlr11DdTqbHH1m4OfPyNF5qHCTLLpZCIpAiAChiF2xtN4hn1wdVFBQ7qRPv3DBSxRYb6EIfaq%2FmDTpyr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIM9dr0AF1%2BE122tI1dKtwD4m7Bqo%2BERWh4jLC5MTn8k8VMZvxIcIco0IPL73ayCvd084t1wWXueJ2rdNQog0OG1sGqR4u6rrqhbkRZBcU6LR2UwFOOkIihsRTQ%2BusrKVN%2Fy6FY1ZW2YIstD5r%2F0Yp%2Bxb0CNWFl%2B50Wn61cy1UZe6cybWvLfS7NI%2BZFWixHz8I1oCb7ymqc3urGjJxr1ImiOMhiuJNk7xkaQPJoVBbUmYf0pg9MtQTIVrGUOKzoGNjj%2FS6vX%2BXbzGdoMBPI8XisXgN80VviZsJT18pZ4Yq%2FetySLCyFH1ep1IcxRYUGH6a%2F24n7LsgY%2FaySuEEg2Y5ktF45e4hLZQSs6K9VHqiKkRbEcn5HniCk8j8cq8aE9KaCc2XPelg3bxFnmH6bfUWX1WhzAq3WJiOTnFugvokuilfezXp8ksW73IVVSVsTkM0LvKZPLYnYhjlQrJoUJpVn8TIyRvoCP24M9Vtao2Qh%2BOEGCHBSYysMH9WXFuLykXTOc%2FG3%2Fuz6ooueIwqKL0eE2IoMTn5NGLxv0OuGsZ4Okur2O7BjUwBybtwAgXJcaiU7cfwMowSGpUS9IZ3lwQMhZbvAiyal4K9ORUnGw%2Fe8H08qDZuybacAK38OjgrWsYNZErL2%2BNicJftwfiAwpt7OyQY6pgGch79tyUHsp22FokaI2KO8eGOzoee3A7IwYofdkF5g2dJQqBRDN8xjkRxL%2B7lIa1xEgYEd8FfTm5cUCHQNlXq%2BtQLxcXlMTKjK%2BzWraAulfM6tPtnKv01C6RhC2eo8ruz6Nw4hnLDRhsHdGjjS2ihjAleKWs9UWRmabSrMZYfd4AqmRYlKVK133FK9gNLiZWDLmz5exuor1YPyu687XoTnb1Xn9%2F4H&X-Amz-Signature=7431e38a23742e347186ae9aed8499f270c592ca99682306a5eff23ea2edd0cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
