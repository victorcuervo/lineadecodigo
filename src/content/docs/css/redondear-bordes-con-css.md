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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJWNOTQH%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T144835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGQri4b0XyBtqbyj%2BEDWb5Oc2u6Ng1lmbFsaTSj5B%2FY9AiA7TUS0qy5SXbpOb9Baw8dG1dPAdBysxU7hIqfF5fP4yCqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOl1nzye67R6U1hgYKtwDNoycTcHwI6XxEcrqjmkgKxdbFhBI%2BZudF8m5ihiGkpPXLQhGbs1MsidCsL9aBlsGCwe8cMQTg8lyhSNOAIF9ZJvhBRduBZL25WyOSTOt0pGXjBN8%2F04FClOOvh5XXS8TzeqxSpCUuXSsGwye3aqVi9lzOJs%2FEly%2F6NYfU3VGJKgrT15PfthYfBG%2Fzr5xZq%2B7y6Zu83fDq39Fy9OuY20MeD3upkN%2FbZZ4SP3QiFlj4IQRFMvlldWxFgC%2BrTfEnnpeSKhkvmrtO37eLVCBI6M3JocjEjPtwsSz6KcT3h88rZFAYxcTYdkVTyuZF8aSV9Dch8kBrYeRjFTEsfBDaxrp1eLI0%2FSnLTFW7mE8oijVpbVxSwCZ1vFEUzCR05UoBCl8V1ed6gBVT5wRq0rZEI%2BgiIrl6%2FR%2FY0J%2FyLYO2agTa2VC3vjhAQRDLfRQ%2BVMLNZUcPgpdO%2Fr5PvN5kmCsyjGKn8fTmGE2iDjie1wvn%2FQgiLQrHrI6ZYvglAH4BW1Dmxt8HBcQRJ3QfvqINgA%2BGKnyj6P9sMHMwlTHIfVszvgQ1tn%2FOGQtp24tYTC6QXzx%2F6FTmT%2BWii3IAsBIfLB9eKd3X0LODidcnoPp3ZoAbH7YRdExH%2BHdHnwAM4HT%2FuUwqJnVyQY6pgFKJcv8Rq%2B4YmffdqY6%2FbrxSfqBpPW%2BmrrJ3xAWgs8laWDKDC%2F2afrsT%2BgB9Y4dO4BN%2FFywURUCk1KV9AODjQkXmjLAv2kk8A1jEC3i0UEgD9ddDvQwyPqzDUMqP8NPWJ%2BZSvvuTW6ropgsTcvcX5LDA%2FnmCoA%2BXwrYtc6pBXEWjxxzE63ctpMIFo9XAd%2B1gii2l8RSvGeooBi3%2BhBitIVv3ymeNvfI&X-Amz-Signature=22ad5aafa8d7e5172df2fd598a033603a4f587c450a9ecd5ac563244a6edfbf1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJWNOTQH%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T144835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGQri4b0XyBtqbyj%2BEDWb5Oc2u6Ng1lmbFsaTSj5B%2FY9AiA7TUS0qy5SXbpOb9Baw8dG1dPAdBysxU7hIqfF5fP4yCqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOl1nzye67R6U1hgYKtwDNoycTcHwI6XxEcrqjmkgKxdbFhBI%2BZudF8m5ihiGkpPXLQhGbs1MsidCsL9aBlsGCwe8cMQTg8lyhSNOAIF9ZJvhBRduBZL25WyOSTOt0pGXjBN8%2F04FClOOvh5XXS8TzeqxSpCUuXSsGwye3aqVi9lzOJs%2FEly%2F6NYfU3VGJKgrT15PfthYfBG%2Fzr5xZq%2B7y6Zu83fDq39Fy9OuY20MeD3upkN%2FbZZ4SP3QiFlj4IQRFMvlldWxFgC%2BrTfEnnpeSKhkvmrtO37eLVCBI6M3JocjEjPtwsSz6KcT3h88rZFAYxcTYdkVTyuZF8aSV9Dch8kBrYeRjFTEsfBDaxrp1eLI0%2FSnLTFW7mE8oijVpbVxSwCZ1vFEUzCR05UoBCl8V1ed6gBVT5wRq0rZEI%2BgiIrl6%2FR%2FY0J%2FyLYO2agTa2VC3vjhAQRDLfRQ%2BVMLNZUcPgpdO%2Fr5PvN5kmCsyjGKn8fTmGE2iDjie1wvn%2FQgiLQrHrI6ZYvglAH4BW1Dmxt8HBcQRJ3QfvqINgA%2BGKnyj6P9sMHMwlTHIfVszvgQ1tn%2FOGQtp24tYTC6QXzx%2F6FTmT%2BWii3IAsBIfLB9eKd3X0LODidcnoPp3ZoAbH7YRdExH%2BHdHnwAM4HT%2FuUwqJnVyQY6pgFKJcv8Rq%2B4YmffdqY6%2FbrxSfqBpPW%2BmrrJ3xAWgs8laWDKDC%2F2afrsT%2BgB9Y4dO4BN%2FFywURUCk1KV9AODjQkXmjLAv2kk8A1jEC3i0UEgD9ddDvQwyPqzDUMqP8NPWJ%2BZSvvuTW6ropgsTcvcX5LDA%2FnmCoA%2BXwrYtc6pBXEWjxxzE63ctpMIFo9XAd%2B1gii2l8RSvGeooBi3%2BhBitIVv3ymeNvfI&X-Amz-Signature=ad77f3b434bc946f3df82b6fcb9b79deca77f51e619ee272eeadacf61bda2405&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
