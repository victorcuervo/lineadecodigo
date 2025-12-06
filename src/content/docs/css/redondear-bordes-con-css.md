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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BIJHE6P%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T003217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2BJBK3xCysBWlo9d7CNjiWW%2B0z3JZ%2F5pw%2B81o5elKHpQIgKUA0%2B0jch0h86ofmMJyeYMo5oGJVy0mYEt7%2Bdw2hDuoq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDIVtagNVna7%2F2FpJyyrcA7ST%2Fp606WoC2cVsFO6maGOALD6LHAbN%2BrL%2Fm%2B7oh9BW2d7XFwvP%2FceRaiG7MOTxSWldCTBvKdqMCQgeVXQlSHjnu4%2BWkEEyC2EMUY%2F8CovmgdCeYi3BVbkjuoitoOLGknLCHma8umWS6%2Fvkd9Z5MuXbWI4tpJ6u7e1VtRkc00cAaAGLH5wXupKOY8gqWARMVGelxVbhP2jRmpxntBtNoPshF6YFZ7XghQMy3zhFOWXETzUYP0CMbOM2xNW0x2E%2B1OxdpY82RGUN1S1NIZkAaa2%2BAxv0kWg3%2FvlHOTPoG%2BqZECwdBv5olhMCbl2kvNwjXq%2B360aeJPXAdsdUQ0yMsLKjgeI%2B6RTx3gbXZtEh%2Fq1%2BFZ2hwFbIyzII0YUAJt5QnXhutHwQzvApzvWUvJteH5H50Xf7epnVy%2FCfvBb3nMGGVO2B1PDJh%2FjLkDpiw7Wsvu3gcgxYWbIQ%2FLOOHv5Jh7jsZat5gx5QHCcm1S0Kmyv9mknfj0yzNVrzLvldAuV8LhmwfCkFoHtQSXnRFrkQtIsCshql490VU%2Ff%2BAuY05ATFw8tg18u7xiCXdERAXOYsSxmzTj2w3Hwn9UUV3ZePkK98GEthKeLFW%2FHAE%2BZbPRmwGIawrOHey%2FZxZw1uMNLozckGOqUB5eYqIenYTEJ4i2P7nHMg7XaPoSi%2FU12S0gQoOmuSzrnxi4OhRnM8wYmB6nBs89b6rPPfy6TB2yMndf0NMDqfnWLFAKbJ2igviaJDv9SQsE63ESPr6S5txMtc1Sw0lnG1s%2F%2Fios7DV0EPcmN%2BUXtT7EjPK2jifXI3vlYumT1nji%2BtdFM25hyt49k6BXbfKFMd8hoPDxnRV3UVHEQG1Qe2d2vviuZx&X-Amz-Signature=c500f7270021ce8f1a1295fd18fa1e4bf583314958b3037e1d4767d8c534d28f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BIJHE6P%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T003217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2BJBK3xCysBWlo9d7CNjiWW%2B0z3JZ%2F5pw%2B81o5elKHpQIgKUA0%2B0jch0h86ofmMJyeYMo5oGJVy0mYEt7%2Bdw2hDuoq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDIVtagNVna7%2F2FpJyyrcA7ST%2Fp606WoC2cVsFO6maGOALD6LHAbN%2BrL%2Fm%2B7oh9BW2d7XFwvP%2FceRaiG7MOTxSWldCTBvKdqMCQgeVXQlSHjnu4%2BWkEEyC2EMUY%2F8CovmgdCeYi3BVbkjuoitoOLGknLCHma8umWS6%2Fvkd9Z5MuXbWI4tpJ6u7e1VtRkc00cAaAGLH5wXupKOY8gqWARMVGelxVbhP2jRmpxntBtNoPshF6YFZ7XghQMy3zhFOWXETzUYP0CMbOM2xNW0x2E%2B1OxdpY82RGUN1S1NIZkAaa2%2BAxv0kWg3%2FvlHOTPoG%2BqZECwdBv5olhMCbl2kvNwjXq%2B360aeJPXAdsdUQ0yMsLKjgeI%2B6RTx3gbXZtEh%2Fq1%2BFZ2hwFbIyzII0YUAJt5QnXhutHwQzvApzvWUvJteH5H50Xf7epnVy%2FCfvBb3nMGGVO2B1PDJh%2FjLkDpiw7Wsvu3gcgxYWbIQ%2FLOOHv5Jh7jsZat5gx5QHCcm1S0Kmyv9mknfj0yzNVrzLvldAuV8LhmwfCkFoHtQSXnRFrkQtIsCshql490VU%2Ff%2BAuY05ATFw8tg18u7xiCXdERAXOYsSxmzTj2w3Hwn9UUV3ZePkK98GEthKeLFW%2FHAE%2BZbPRmwGIawrOHey%2FZxZw1uMNLozckGOqUB5eYqIenYTEJ4i2P7nHMg7XaPoSi%2FU12S0gQoOmuSzrnxi4OhRnM8wYmB6nBs89b6rPPfy6TB2yMndf0NMDqfnWLFAKbJ2igviaJDv9SQsE63ESPr6S5txMtc1Sw0lnG1s%2F%2Fios7DV0EPcmN%2BUXtT7EjPK2jifXI3vlYumT1nji%2BtdFM25hyt49k6BXbfKFMd8hoPDxnRV3UVHEQG1Qe2d2vviuZx&X-Amz-Signature=2aa13c468c22c1e7686eed3ae667116c9f945fa438a30a38b02f1b29a1958150&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
