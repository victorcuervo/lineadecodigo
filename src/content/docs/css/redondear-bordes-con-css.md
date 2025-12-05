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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y74FP7PV%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T170638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB4178S0fTKisXk6nz4jNXZDoImUfGSw0KvNJv%2BsI%2BCxAiEAv2UKM86xjQjPu7euysxssZRJOjCC3AS6tEVkYxscvIgq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDMmo91FM54fJj1%2BNbCrcAyWnNS%2F6NdW0Cejc%2BArrd40bd3VbT3OdYErGXyYOF3CA4MbLNHy9ZTvd9SxivpcEsDFcKfJM5%2BhHaVLjdYPAiJoouLyQGNrA2apmE68m29cmZS7sxE%2FE%2BQ7Zh0BwJeRtRdjRCN5uVg6JUweS8o7OKVuB0XFmAl%2BchhHYQkmKBgX8ALFI8SwmTf4l0udieWNQYcG1c8IG8uxLrweMR7g1wefmnJ3aBtceJE4R1koFHDV%2B2L81TrJ8QayWSyECrSen44T8efnKf8%2BZ%2FT1QPuhJ%2BFCm%2Bcj901u6ANvIr4hOl%2B3lEkhC5%2BGCHsPQEyLvrGhAY46%2FiJMK6On1txpapszQi%2FBbllFRvEwpizriZ29GKlVxa7dYjci%2FENwUxLGW49bA3lMcErTMaAqLoGC5BBPilCKqS2A5lMAoRP4VOuynVomstUEVp2hO7uNuE5lC2GxVcCzL0l%2BVP9qR2VvwTwUnH2P3H0BZK1E4KhGhTvw2gwXz78WGijP96KOeU43%2BXOdTaf7Etnj%2FkuTAu5tVQO52g6BB0tuwFib5y4BahLe%2B7b2IUgnA5ssjsMGFqZBsvf0N54kd1F1peTb5TUXTYnZlSdQ9JLz7%2FvzfauA%2BUJpCdrbGnRyisWe%2BG6a5EEXbMJzry8kGOqUBaDfLnxBjAEtuAdkiC4OfmYLJ0pd26IwVSDeU6asZgP6%2FXL4a1TmfI%2BYlrCH1vfiCzB2vbbjir7l2qbIVx2u%2B%2BhUyOfFg4ZwnjqRuMZursllyoM3tLAWvXdpWps62l03bQQZO72EjA%2FQZKivKMNSiDdJTM4I1bJmXDrK4coKtgMqiQ7bU3wr11PjPueHIppIZsV3FUjSkjptHAUoGevFi0f7QreUe&X-Amz-Signature=489c44c10262b5d5029249a4447345581c148c4a80fead373950bc207bb7fb22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y74FP7PV%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T170638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB4178S0fTKisXk6nz4jNXZDoImUfGSw0KvNJv%2BsI%2BCxAiEAv2UKM86xjQjPu7euysxssZRJOjCC3AS6tEVkYxscvIgq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDMmo91FM54fJj1%2BNbCrcAyWnNS%2F6NdW0Cejc%2BArrd40bd3VbT3OdYErGXyYOF3CA4MbLNHy9ZTvd9SxivpcEsDFcKfJM5%2BhHaVLjdYPAiJoouLyQGNrA2apmE68m29cmZS7sxE%2FE%2BQ7Zh0BwJeRtRdjRCN5uVg6JUweS8o7OKVuB0XFmAl%2BchhHYQkmKBgX8ALFI8SwmTf4l0udieWNQYcG1c8IG8uxLrweMR7g1wefmnJ3aBtceJE4R1koFHDV%2B2L81TrJ8QayWSyECrSen44T8efnKf8%2BZ%2FT1QPuhJ%2BFCm%2Bcj901u6ANvIr4hOl%2B3lEkhC5%2BGCHsPQEyLvrGhAY46%2FiJMK6On1txpapszQi%2FBbllFRvEwpizriZ29GKlVxa7dYjci%2FENwUxLGW49bA3lMcErTMaAqLoGC5BBPilCKqS2A5lMAoRP4VOuynVomstUEVp2hO7uNuE5lC2GxVcCzL0l%2BVP9qR2VvwTwUnH2P3H0BZK1E4KhGhTvw2gwXz78WGijP96KOeU43%2BXOdTaf7Etnj%2FkuTAu5tVQO52g6BB0tuwFib5y4BahLe%2B7b2IUgnA5ssjsMGFqZBsvf0N54kd1F1peTb5TUXTYnZlSdQ9JLz7%2FvzfauA%2BUJpCdrbGnRyisWe%2BG6a5EEXbMJzry8kGOqUBaDfLnxBjAEtuAdkiC4OfmYLJ0pd26IwVSDeU6asZgP6%2FXL4a1TmfI%2BYlrCH1vfiCzB2vbbjir7l2qbIVx2u%2B%2BhUyOfFg4ZwnjqRuMZursllyoM3tLAWvXdpWps62l03bQQZO72EjA%2FQZKivKMNSiDdJTM4I1bJmXDrK4coKtgMqiQ7bU3wr11PjPueHIppIZsV3FUjSkjptHAUoGevFi0f7QreUe&X-Amz-Signature=4b411acbe40df481c8029042f116e306961ca7b5d16455311972fb3f677818a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
