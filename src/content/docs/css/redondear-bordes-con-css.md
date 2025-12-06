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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667L4THQOZ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T110658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCrxQgzvEEaE%2BNrL6c1GFy6APq2H5H2tUHtwzS5oHjNwQIgOxANMawPO7Tqf4GRuhvl39wIow3KZSu%2BF9sUyqq6Evkq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDGt31uBsxHRjmE7ePCrcA3Q1roUEryJO7h%2Fh93pA7geu1SuW1feMAv6b459BxJ50vDheFzMDG8ejzTr5cqpn9Tes2NB7lCl%2BJcaHSbyLCeGSNc1c1bdMTd6ZHyHD1DW%2Bm6w9hY1xJ4%2Bko2S6cl6OLnJaxsYJvCw4jzQe%2BpxKS9AQzn7g4VajXpd9k6nWvUpkOaKPEbWMxFANRdV5EUCSP%2FWZyjCRNi5OAaG0yDwPJ8GGIVsPi8o%2FihX%2BNm1Vg0os5GKVow%2F0d%2BaEeS%2BVpi4%2BZvf7mjURsY8Fe8sQgvwUdxxuqK1zyzFLgt%2BIQUWf1eYbmsiRLo6V5ybV5efWTwvvJjF4TBaNCFQ2swN2V4CSkpvfiuIpTpM%2BmO1J39lYgloZQadrKZL348Iw%2B%2Ft8jQ7gZcKUSgYOX0%2FTFXmJS2y3grP475%2BY787JSN6x5Mh2Mz50eKs8jPVutOPnUasnlhliyIjEwHtvq6JDv3qulwgD%2Fhq50dYLpNR2iYZg8qvUqtQzxBSOfeOElh2ajqaaMd%2BTvmLrhNV3vxI%2F6P%2BNEM%2BVdBF9FVRku%2F0JaGwvSkWMGdWoN4oKaeEbaXZFQqrMxIr0MoyombDj50fMXJmkZlNzYPRGd%2Fm%2BUZDCGxKykEMlyAwStt%2FwaiWph3VQdpwzMPmJ0MkGOqUBLvuniimEDVz6AeFyPj6iST%2FbIzVeq5nZczV6RT0PfqzBifaL8CbPSCFnOciROGGJ2IfXl68RbRwQ4DuzgJU1OLGLDGk9%2Bdj5MaDGtG6tcfZ%2B5xDblHet3iGO1MEc35l6cEV2q%2FCP4GGr4%2BHbMdHJDg5YPTflnUiMIooPKB%2BEQba3NE654kh2ggFiVsUhgn%2BC%2BNO%2B7tK1p2Q99EWyZSvsO%2B5jcclm&X-Amz-Signature=58cc2825da75cc4287c83be99d0807d67d3a915b0fb38a7192f6f207a2136991&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667L4THQOZ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T110658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCrxQgzvEEaE%2BNrL6c1GFy6APq2H5H2tUHtwzS5oHjNwQIgOxANMawPO7Tqf4GRuhvl39wIow3KZSu%2BF9sUyqq6Evkq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDGt31uBsxHRjmE7ePCrcA3Q1roUEryJO7h%2Fh93pA7geu1SuW1feMAv6b459BxJ50vDheFzMDG8ejzTr5cqpn9Tes2NB7lCl%2BJcaHSbyLCeGSNc1c1bdMTd6ZHyHD1DW%2Bm6w9hY1xJ4%2Bko2S6cl6OLnJaxsYJvCw4jzQe%2BpxKS9AQzn7g4VajXpd9k6nWvUpkOaKPEbWMxFANRdV5EUCSP%2FWZyjCRNi5OAaG0yDwPJ8GGIVsPi8o%2FihX%2BNm1Vg0os5GKVow%2F0d%2BaEeS%2BVpi4%2BZvf7mjURsY8Fe8sQgvwUdxxuqK1zyzFLgt%2BIQUWf1eYbmsiRLo6V5ybV5efWTwvvJjF4TBaNCFQ2swN2V4CSkpvfiuIpTpM%2BmO1J39lYgloZQadrKZL348Iw%2B%2Ft8jQ7gZcKUSgYOX0%2FTFXmJS2y3grP475%2BY787JSN6x5Mh2Mz50eKs8jPVutOPnUasnlhliyIjEwHtvq6JDv3qulwgD%2Fhq50dYLpNR2iYZg8qvUqtQzxBSOfeOElh2ajqaaMd%2BTvmLrhNV3vxI%2F6P%2BNEM%2BVdBF9FVRku%2F0JaGwvSkWMGdWoN4oKaeEbaXZFQqrMxIr0MoyombDj50fMXJmkZlNzYPRGd%2Fm%2BUZDCGxKykEMlyAwStt%2FwaiWph3VQdpwzMPmJ0MkGOqUBLvuniimEDVz6AeFyPj6iST%2FbIzVeq5nZczV6RT0PfqzBifaL8CbPSCFnOciROGGJ2IfXl68RbRwQ4DuzgJU1OLGLDGk9%2Bdj5MaDGtG6tcfZ%2B5xDblHet3iGO1MEc35l6cEV2q%2FCP4GGr4%2BHbMdHJDg5YPTflnUiMIooPKB%2BEQba3NE654kh2ggFiVsUhgn%2BC%2BNO%2B7tK1p2Q99EWyZSvsO%2B5jcclm&X-Amz-Signature=1cec781cbb12dc947eeeb8d2c57f4a7afc6219fe747fef58f600cdc63c469614&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
