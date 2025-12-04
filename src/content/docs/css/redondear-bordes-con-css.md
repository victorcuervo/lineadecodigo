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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VJHQUYX%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T040934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQDd4zFuBOi5zea7S9cjf3wmJ94oLEutTR5J86OxYiUmygIhAO4Vm2VnSuZ84pUYJm4C%2FO1eeF8eq%2BxaLz4E2Ktk1IbfKv8DCD0QABoMNjM3NDIzMTgzODA1IgzCAj08a3WBiQpLv5cq3AOhMOdYShBCreO4ho07wSjTJdjDMMVK9iOHJb5LW6P7s%2BHV%2FoynkeNTVF008zog9TBoM%2BSUDVm3key9noVNbCuaNoO5L185tYtBBAeB8%2FqzhidxnPsq28UC%2FdXw1pRgMpepOG13EEfctLgVywMiDmoEiILEkPCxh3tZ383Uzz7Z9t6EJOj8Q%2FCzZdDj%2BgPuF%2BYIvT7MF%2FdxfF3CiE%2Bepg%2Bslr8CEVsv7xZHFKe%2ByESo4tTl10PHk82NUuhl4bBacYZh%2FnC28aFPzXzoRAxws%2BRCozCy9%2BSb%2FvT70n1vJ89wLAhbaF%2BZkI8N%2FMF0uW3nuD0kFJx7ri5Y6q%2BqaSd2RX3FfFESkKQ7rsCImAfDJYAzkd2wnUVWMYwgXCqdP2%2FTJhxA8zSKNC6uSYpOGVDIEYEtGqMeILbnvuAp6d4mEmsF%2FrkecS89GP%2Bt3zD0zgZspsiTgpJAsI5YMUPC8FS1aqbVV%2FrQAoZORe%2Ff5qiBsNVB1PhG0QHRrrTcPZif6OWY6BxS5H54TRUHkqzTtb1FB6hZw0ZtSWqhbT2WZZlF%2FuCzAR7T%2FQtYNLOMYtdmCyoyujYSsifQvP5tJziZaf16MhU5oXLzMZKihbtf6ZbdL0gKXgfio2DJ3YJBafq9bzDEkMTJBjqkARxLo%2F1pioQ1W2LNoPC2R0ZwAy5gz%2FrVWGEKt5pUphQ52oWDVz9zLpq087AHL5h7Qh98rE0bmKx6eAHBskFEA65zI2uAmZNdruJcUYhaUoQs9dvDAVrwWwP2ukPKotDjstosDXh7OHX8eDeKaiQZg3watoJCGxIiNTqMRObltJQzE7wh8HOjA298Evu841vSP6wPlCsQt544y84EWFw9dK%2FIyFi0&X-Amz-Signature=2377cc0f552ba9552131afd006e27fd7a6dc08af3d9d56d25e2c1c5714376a97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VJHQUYX%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T040934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQDd4zFuBOi5zea7S9cjf3wmJ94oLEutTR5J86OxYiUmygIhAO4Vm2VnSuZ84pUYJm4C%2FO1eeF8eq%2BxaLz4E2Ktk1IbfKv8DCD0QABoMNjM3NDIzMTgzODA1IgzCAj08a3WBiQpLv5cq3AOhMOdYShBCreO4ho07wSjTJdjDMMVK9iOHJb5LW6P7s%2BHV%2FoynkeNTVF008zog9TBoM%2BSUDVm3key9noVNbCuaNoO5L185tYtBBAeB8%2FqzhidxnPsq28UC%2FdXw1pRgMpepOG13EEfctLgVywMiDmoEiILEkPCxh3tZ383Uzz7Z9t6EJOj8Q%2FCzZdDj%2BgPuF%2BYIvT7MF%2FdxfF3CiE%2Bepg%2Bslr8CEVsv7xZHFKe%2ByESo4tTl10PHk82NUuhl4bBacYZh%2FnC28aFPzXzoRAxws%2BRCozCy9%2BSb%2FvT70n1vJ89wLAhbaF%2BZkI8N%2FMF0uW3nuD0kFJx7ri5Y6q%2BqaSd2RX3FfFESkKQ7rsCImAfDJYAzkd2wnUVWMYwgXCqdP2%2FTJhxA8zSKNC6uSYpOGVDIEYEtGqMeILbnvuAp6d4mEmsF%2FrkecS89GP%2Bt3zD0zgZspsiTgpJAsI5YMUPC8FS1aqbVV%2FrQAoZORe%2Ff5qiBsNVB1PhG0QHRrrTcPZif6OWY6BxS5H54TRUHkqzTtb1FB6hZw0ZtSWqhbT2WZZlF%2FuCzAR7T%2FQtYNLOMYtdmCyoyujYSsifQvP5tJziZaf16MhU5oXLzMZKihbtf6ZbdL0gKXgfio2DJ3YJBafq9bzDEkMTJBjqkARxLo%2F1pioQ1W2LNoPC2R0ZwAy5gz%2FrVWGEKt5pUphQ52oWDVz9zLpq087AHL5h7Qh98rE0bmKx6eAHBskFEA65zI2uAmZNdruJcUYhaUoQs9dvDAVrwWwP2ukPKotDjstosDXh7OHX8eDeKaiQZg3watoJCGxIiNTqMRObltJQzE7wh8HOjA298Evu841vSP6wPlCsQt544y84EWFw9dK%2FIyFi0&X-Amz-Signature=a6bfa074442e9a7bcee34ef74cef02aa3c883a14f7c40f4479f8985c935018d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
