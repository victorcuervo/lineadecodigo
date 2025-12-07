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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGCJJ7HM%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T055240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA7bLLtgJ0Gm%2FxsX5%2Ff2Cz6MJFV6rNQwkCLTJbij6PHAAiEAw2evVks4XxqgEwkXqHK2J0pmo1A0GFkEfIVrF3Z4I60qiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCzJ2hRM7q7vTJNKGircAwvl9RoslYP5nuTP86GJ9lsJfAo9srWs54AFm507KazPfkHQ4z3QegAaZvfIVwSJyAxmQJ1cU3986o%2FAclWHHwAah0BKTblJVOtPgxrVIEkQIeVAQtF%2BjR7Et5G%2FprWYZO6BnDfV3bdKqm3T0KFMw9u6dADBtLMI9KbNvygaZQbmoCERZ6e6aOzfpm6ZCSV%2BMe%2ByUPGXC1qjeQ8yiI3IuO8cV8wN%2FtXsiuEZg5CojhCDxawoZsoN4WFPHBtsf%2FfhA%2BN38r2jmJqYXpkhrMn6Lh8fFN9FOE87JKDNP2pIgDR%2FMcAKVvg4jVcp051zktAJsA7ydekNMcGbXmRORtUSI%2FidSb6aawX3ALORzJZdNinKL1Kv4CgQPiOrVZq5Dpaa2GVJuWT8M%2B93oSZfaZ3bHpYS5hS65FtstRTmoBHp5mibJI2KUesyvbdsquCgFPgApOCB6WN78xKeZSQRsKS8Bok7wy3kfhrGsJYe73%2F%2FKHohgFZFGM2chSOt3c1hx%2BgQIAT5WiGPr6D7FOEin5y8qdLVueXUSPMo6UnGtuZKhQpIVIoaK5k7x5NcTRucJ%2FZkCL2bn6tg94klFMMszZvhHDFCF2pfGaxJL7duQRZP1BB%2B%2Ft2mlDT8dpgvSUdAMJOd1MkGOqUBe5cG%2FnlqYnzSF4r813pYcU27aXr%2BPLnBvNXXN%2Bec9pvais%2BJhWLMCFcf58zCQ5MUGJ4fHXmU6N0ZXIV0O1dMeizNaLkJBV2cgsrDbFN4gZKXbG811NDb4gtF0C0Gk0L%2Byhb4jaJyh50wJFSuDbQf2kGIVNzUA8V6qVAwqThKYzuY%2Bi0Bbjc5eEqtkeokc4LoNwXPp0tbCOrXzjzNvy0ndgTJHLtu&X-Amz-Signature=bd4c344d66f6e2413eb581603063a6866be1b03892c4b513a094f829717beecf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGCJJ7HM%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T055240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA7bLLtgJ0Gm%2FxsX5%2Ff2Cz6MJFV6rNQwkCLTJbij6PHAAiEAw2evVks4XxqgEwkXqHK2J0pmo1A0GFkEfIVrF3Z4I60qiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCzJ2hRM7q7vTJNKGircAwvl9RoslYP5nuTP86GJ9lsJfAo9srWs54AFm507KazPfkHQ4z3QegAaZvfIVwSJyAxmQJ1cU3986o%2FAclWHHwAah0BKTblJVOtPgxrVIEkQIeVAQtF%2BjR7Et5G%2FprWYZO6BnDfV3bdKqm3T0KFMw9u6dADBtLMI9KbNvygaZQbmoCERZ6e6aOzfpm6ZCSV%2BMe%2ByUPGXC1qjeQ8yiI3IuO8cV8wN%2FtXsiuEZg5CojhCDxawoZsoN4WFPHBtsf%2FfhA%2BN38r2jmJqYXpkhrMn6Lh8fFN9FOE87JKDNP2pIgDR%2FMcAKVvg4jVcp051zktAJsA7ydekNMcGbXmRORtUSI%2FidSb6aawX3ALORzJZdNinKL1Kv4CgQPiOrVZq5Dpaa2GVJuWT8M%2B93oSZfaZ3bHpYS5hS65FtstRTmoBHp5mibJI2KUesyvbdsquCgFPgApOCB6WN78xKeZSQRsKS8Bok7wy3kfhrGsJYe73%2F%2FKHohgFZFGM2chSOt3c1hx%2BgQIAT5WiGPr6D7FOEin5y8qdLVueXUSPMo6UnGtuZKhQpIVIoaK5k7x5NcTRucJ%2FZkCL2bn6tg94klFMMszZvhHDFCF2pfGaxJL7duQRZP1BB%2B%2Ft2mlDT8dpgvSUdAMJOd1MkGOqUBe5cG%2FnlqYnzSF4r813pYcU27aXr%2BPLnBvNXXN%2Bec9pvais%2BJhWLMCFcf58zCQ5MUGJ4fHXmU6N0ZXIV0O1dMeizNaLkJBV2cgsrDbFN4gZKXbG811NDb4gtF0C0Gk0L%2Byhb4jaJyh50wJFSuDbQf2kGIVNzUA8V6qVAwqThKYzuY%2Bi0Bbjc5eEqtkeokc4LoNwXPp0tbCOrXzjzNvy0ndgTJHLtu&X-Amz-Signature=caadbd86a7955fb71852c3262ccd5cf72d127ff316bcb8dc83796bfa0a963d54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
