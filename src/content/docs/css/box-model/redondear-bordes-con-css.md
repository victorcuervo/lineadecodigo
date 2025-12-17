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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662IU6HQT%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T035523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG9iPvA9zadAt6R9YE7uWHTA3GUOdcuAHP8GsUISCqQQAiBUenfE2w0r4kAOiLjTwcaiYFfHUN0qXEHIVPkQs%2BlkNyr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMxpNLC76p3rsny9b0KtwDbQOT6bHPYzU7mOYA5I9TIsW7kRPwx6Evg7wDCJTmZXntH2ckRkCcV%2B%2BbDdf9zmEmOLEepDmWJ%2BQXgSYBf3JDTdk5mHnvOKFxmMcUb8AsRRCdBpYG4qbD7E2piapI3Uvvj60r%2Btdqm%2B%2BFBWJTom5HeSOvrV6xb8fRe4xYS0HWqVuVxVrlmd78cp%2BIOC7y0XscdQ5SRw%2Bp%2BwuKC%2FjbLtU0K6jMm9yw%2F4Kk7L74Na%2FGScHKDmbYDPy5Z18yEVVUuviH9L4mjQa%2Bpj4xeBAVKz6mxSIRFjy6hddnoKe4UNPCoqW3zU7rKrCjAZ8QuQMLbUD9KjdC%2FZmqqUZvH75vZgbgrJMQzp%2FF%2B9WRD46Aw5tDdoo9ZTBZSUtdEbCehf6ED9mneRQevsedkMPZP2zCZJMMTz%2B7XMIL%2BSamtnsi1%2FEoJqi%2B%2BSaWTLwRRupRKS6p7mh2cKNNOKstQicnw5RvRyJ2DmPpbSFDAZH1XK1ynFwhep82vKDpeQzpeF5NKWIMM%2FyR%2BwlRC%2BSsWALBn8l46mcY8DIXLxIjZ%2Fv%2BsPnqNbCmP5CG5%2F7FTz7xqcHZfnoaA52qi8arQ%2BthhnF5lauVr0WGzFgazf%2BA5QOp98VyC4%2FBAsamLx6%2Bq392zwLos5Mwps6IygY6pgHh8nnkKHtDEGKY1BKcAjKyH7Xqs0FYIfdrak6ofvxAXVELJb3QrnyBW1%2Fd4a4jdf2OysBX1TrEaZ3ZBP8N%2FoWMcZ0Wc19JFcdUtpH1uuplyRO6J2%2FiS5hzOIbM7mWzqkBcv6NE7V8wmzANocL5D91cAQyMB3j0pHXy%2Fb61WDA2%2BYr99XBgcLNcrxO4OvUHOXRZMPu07o23Tt2wHinkx062hUpDj3UP&X-Amz-Signature=69c25d9fd44a5c4cacce82786a8a491aec95d3716fd9122026e2d80eab74bfc3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662IU6HQT%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T035523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG9iPvA9zadAt6R9YE7uWHTA3GUOdcuAHP8GsUISCqQQAiBUenfE2w0r4kAOiLjTwcaiYFfHUN0qXEHIVPkQs%2BlkNyr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMxpNLC76p3rsny9b0KtwDbQOT6bHPYzU7mOYA5I9TIsW7kRPwx6Evg7wDCJTmZXntH2ckRkCcV%2B%2BbDdf9zmEmOLEepDmWJ%2BQXgSYBf3JDTdk5mHnvOKFxmMcUb8AsRRCdBpYG4qbD7E2piapI3Uvvj60r%2Btdqm%2B%2BFBWJTom5HeSOvrV6xb8fRe4xYS0HWqVuVxVrlmd78cp%2BIOC7y0XscdQ5SRw%2Bp%2BwuKC%2FjbLtU0K6jMm9yw%2F4Kk7L74Na%2FGScHKDmbYDPy5Z18yEVVUuviH9L4mjQa%2Bpj4xeBAVKz6mxSIRFjy6hddnoKe4UNPCoqW3zU7rKrCjAZ8QuQMLbUD9KjdC%2FZmqqUZvH75vZgbgrJMQzp%2FF%2B9WRD46Aw5tDdoo9ZTBZSUtdEbCehf6ED9mneRQevsedkMPZP2zCZJMMTz%2B7XMIL%2BSamtnsi1%2FEoJqi%2B%2BSaWTLwRRupRKS6p7mh2cKNNOKstQicnw5RvRyJ2DmPpbSFDAZH1XK1ynFwhep82vKDpeQzpeF5NKWIMM%2FyR%2BwlRC%2BSsWALBn8l46mcY8DIXLxIjZ%2Fv%2BsPnqNbCmP5CG5%2F7FTz7xqcHZfnoaA52qi8arQ%2BthhnF5lauVr0WGzFgazf%2BA5QOp98VyC4%2FBAsamLx6%2Bq392zwLos5Mwps6IygY6pgHh8nnkKHtDEGKY1BKcAjKyH7Xqs0FYIfdrak6ofvxAXVELJb3QrnyBW1%2Fd4a4jdf2OysBX1TrEaZ3ZBP8N%2FoWMcZ0Wc19JFcdUtpH1uuplyRO6J2%2FiS5hzOIbM7mWzqkBcv6NE7V8wmzANocL5D91cAQyMB3j0pHXy%2Fb61WDA2%2BYr99XBgcLNcrxO4OvUHOXRZMPu07o23Tt2wHinkx062hUpDj3UP&X-Amz-Signature=caeb29f56b6fec50a064d73fc8661a0ec7ba0398ec103380c60f9e01156b82fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
