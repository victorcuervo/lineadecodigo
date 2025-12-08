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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Z4T77UG%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T094426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0XC9rmX0nUS9iTA%2BulQMRrqT0adIFHhtyQGay7yAY1wIgRlMcpopHWeOptNxs6PT%2FLtwaip4WpOdARuS99pQ9558qiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJv9duHUGexvXovORCrcA6P2b6qvW8XClDx8h4zRf1MbX7YZ2TXiGNe%2BCEcJWLGzxN2ottpIkeEaXQ3%2BB92aTyaNZ9oNbGPe5L%2FP7C9G4CDBvFZVFSLtUGCw1AJuRWK%2BWdMXmv3mMAyLrRoHdInPqMlnHSh4yRejgmAktzik3hTaJZHrkpZOene79Q7DPf1Jppo6WA7ZgD0Y4Uu0hnhV9mmxCi24SeqpojjU0AhsIhP%2B58MwUBuWNR4MbtwUhyaL8DOWK%2BxN7e13aRZecnDZ9sbkxlqR01tbzRT4%2FVicTM8Vxo0Ti%2FRfE43U%2F3OlfQsSOHG%2BB%2B5zICeJ85YdaRp4H%2FeT7WVKMLmHYbPTKau0w%2F%2FG77%2B6HTBgPlWfW7wiNeH2gHcSP0%2FhjjhL9iaIdC7kkPCzsSFm0I0OENMcofrKX%2BjfW8dejjFmroSynzFAA9cFFmYLiPxkkShbq5jz1uOchVPPTM4Ps1NErhJOM7VqMqVH7mp%2BkUzzmFcvoaR%2BtSe7AUxYTU6ktIrC7iuFk3aahwRCddJ7dLH0%2F3JIUsrQEMq7tjtQalyNPS4b1gC9MzLXm7gy4oVm0pG90YsaQu3LOE92zRwQOYjUX1Ty3afZKvBssBsu5fiNxVOcoF8kC0CZGhvkULTki%2FHlPxzAMJDu2ckGOqUBe8rbsimW5DwHyPhsoyF3VnuNpx9Fe5UaKZ6leFIsUN%2BswMpE0KdVOubEeE4Rw8fxksRCU%2B%2FSCfY0wEOZpXHb2HfsfBChZ8HXagOpUbfd%2BNRRlngX6l7XIbPa2Rdn6cUUOEo93j5k96mE1VWG0MV%2BqZbQ%2Fk848XlKDvPDXl%2BZD1mWuYwoHewGEhFBLY04O2KeD2KxXDpA%2BBnSyhgUD9n5EvvYcuUd&X-Amz-Signature=0ac667fe17eb6b1a77a80b0be7e02b842d27439babff5767302b473f2e7d13d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Z4T77UG%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T094426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0XC9rmX0nUS9iTA%2BulQMRrqT0adIFHhtyQGay7yAY1wIgRlMcpopHWeOptNxs6PT%2FLtwaip4WpOdARuS99pQ9558qiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJv9duHUGexvXovORCrcA6P2b6qvW8XClDx8h4zRf1MbX7YZ2TXiGNe%2BCEcJWLGzxN2ottpIkeEaXQ3%2BB92aTyaNZ9oNbGPe5L%2FP7C9G4CDBvFZVFSLtUGCw1AJuRWK%2BWdMXmv3mMAyLrRoHdInPqMlnHSh4yRejgmAktzik3hTaJZHrkpZOene79Q7DPf1Jppo6WA7ZgD0Y4Uu0hnhV9mmxCi24SeqpojjU0AhsIhP%2B58MwUBuWNR4MbtwUhyaL8DOWK%2BxN7e13aRZecnDZ9sbkxlqR01tbzRT4%2FVicTM8Vxo0Ti%2FRfE43U%2F3OlfQsSOHG%2BB%2B5zICeJ85YdaRp4H%2FeT7WVKMLmHYbPTKau0w%2F%2FG77%2B6HTBgPlWfW7wiNeH2gHcSP0%2FhjjhL9iaIdC7kkPCzsSFm0I0OENMcofrKX%2BjfW8dejjFmroSynzFAA9cFFmYLiPxkkShbq5jz1uOchVPPTM4Ps1NErhJOM7VqMqVH7mp%2BkUzzmFcvoaR%2BtSe7AUxYTU6ktIrC7iuFk3aahwRCddJ7dLH0%2F3JIUsrQEMq7tjtQalyNPS4b1gC9MzLXm7gy4oVm0pG90YsaQu3LOE92zRwQOYjUX1Ty3afZKvBssBsu5fiNxVOcoF8kC0CZGhvkULTki%2FHlPxzAMJDu2ckGOqUBe8rbsimW5DwHyPhsoyF3VnuNpx9Fe5UaKZ6leFIsUN%2BswMpE0KdVOubEeE4Rw8fxksRCU%2B%2FSCfY0wEOZpXHb2HfsfBChZ8HXagOpUbfd%2BNRRlngX6l7XIbPa2Rdn6cUUOEo93j5k96mE1VWG0MV%2BqZbQ%2Fk848XlKDvPDXl%2BZD1mWuYwoHewGEhFBLY04O2KeD2KxXDpA%2BBnSyhgUD9n5EvvYcuUd&X-Amz-Signature=89445c02c99244bee4278ad79533d7921fbc485299083d97af2252fa5766a9fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
