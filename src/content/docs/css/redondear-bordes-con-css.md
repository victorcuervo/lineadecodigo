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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WKUYL5T%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T115930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIApKLl0zXH2UCSiEmbo%2FmsvmHjqodC1kwUHbfnkKyzQ5AiEA2JAMqTS8ce9hke0%2Bcfprik%2BNzpr3HBbrxUpsI3t9Ivcq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDH%2BMDZy%2BOP5%2F7rsxZircA9M%2F2cyRXQ0DEjF8A5FT6Z%2B32eGF81c6cwgNSos1VoAUK6XsljoOLFQ%2FauYWsTvobq0sMb2JjbscX6R6646cNhQT1XQ25q16P4y5VYu6cOcjV%2BtQzI5Lm0Lq1qiv9mxIeJqDpV01Wod2oBUYcNuskVAnm%2BxLqT6ubx%2FT%2BevhUkAAJ5r8t47OZc6oG7vpgmwW77%2FdtMM5P70FZmMHmTADJdyVlGHr5rYENyxpLyiOY%2BZIJBLSh7YRMyrqjaAr%2FR%2BjS%2FAbJ13ww2c5tz%2Bt48fwSwwar82P4o4GL%2FMs4FQ22OiyuuBtlb47FDDEkw4drBJxY7B5rLlxCJL65MHu65zVEna0v3Y5sudLTY5q72kRFKzjZ%2FNBCw4KpywxaHnbD8q2Z38KTvYE2pd0y1Zs06gYamjPl6nDIVOWoZwHo8yvgJM1kz%2FXPfBIHqMxQKhdzoSULseBRE4Mt%2B%2Bk971yyf5x%2BRBFJ7cK9smcEV4FY1sK%2B5g9wTeDG9Dl1PZYvoJDLeMcDDL%2B%2By%2FBfxXxPLvFdsl0SQn7%2BsAlrk%2BV4woEZUIDzAANTq1bw%2BaBMNHVdK%2F63AyFLKGFrdPNWIQlS4zzhJ7sMnA4zF0qpaOP1g2id15FbEKS3DrbYrs2k6SSQ8XUMJTTyskGOqUB2STa42kdZ4pxoS1xcZcWuw%2B5qBjU%2F6Ycpqgd3yiRaYKzkmxB7HqETZOFECSwEAc0ltLNzEP7hMX%2FBBSwl%2Bfq7zbudpQZ5OclLBH5jJJ5LLzKp0hFgt0XzEPpDvkuDMDfgtC77sxp%2Bqu7ZXbMlJ1g5Ql0vQD%2B6HMcLFGChqXy%2FOBDAiBL1CqsdnAFnA8g%2BnpDRS2usk3joUq1SS856%2F%2FQJISkH921&X-Amz-Signature=842c98c4f8a9926e22e635fe55dcd77e756455b1af2438bcdfe769f181abfd92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WKUYL5T%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T115930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIApKLl0zXH2UCSiEmbo%2FmsvmHjqodC1kwUHbfnkKyzQ5AiEA2JAMqTS8ce9hke0%2Bcfprik%2BNzpr3HBbrxUpsI3t9Ivcq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDH%2BMDZy%2BOP5%2F7rsxZircA9M%2F2cyRXQ0DEjF8A5FT6Z%2B32eGF81c6cwgNSos1VoAUK6XsljoOLFQ%2FauYWsTvobq0sMb2JjbscX6R6646cNhQT1XQ25q16P4y5VYu6cOcjV%2BtQzI5Lm0Lq1qiv9mxIeJqDpV01Wod2oBUYcNuskVAnm%2BxLqT6ubx%2FT%2BevhUkAAJ5r8t47OZc6oG7vpgmwW77%2FdtMM5P70FZmMHmTADJdyVlGHr5rYENyxpLyiOY%2BZIJBLSh7YRMyrqjaAr%2FR%2BjS%2FAbJ13ww2c5tz%2Bt48fwSwwar82P4o4GL%2FMs4FQ22OiyuuBtlb47FDDEkw4drBJxY7B5rLlxCJL65MHu65zVEna0v3Y5sudLTY5q72kRFKzjZ%2FNBCw4KpywxaHnbD8q2Z38KTvYE2pd0y1Zs06gYamjPl6nDIVOWoZwHo8yvgJM1kz%2FXPfBIHqMxQKhdzoSULseBRE4Mt%2B%2Bk971yyf5x%2BRBFJ7cK9smcEV4FY1sK%2B5g9wTeDG9Dl1PZYvoJDLeMcDDL%2B%2By%2FBfxXxPLvFdsl0SQn7%2BsAlrk%2BV4woEZUIDzAANTq1bw%2BaBMNHVdK%2F63AyFLKGFrdPNWIQlS4zzhJ7sMnA4zF0qpaOP1g2id15FbEKS3DrbYrs2k6SSQ8XUMJTTyskGOqUB2STa42kdZ4pxoS1xcZcWuw%2B5qBjU%2F6Ycpqgd3yiRaYKzkmxB7HqETZOFECSwEAc0ltLNzEP7hMX%2FBBSwl%2Bfq7zbudpQZ5OclLBH5jJJ5LLzKp0hFgt0XzEPpDvkuDMDfgtC77sxp%2Bqu7ZXbMlJ1g5Ql0vQD%2B6HMcLFGChqXy%2FOBDAiBL1CqsdnAFnA8g%2BnpDRS2usk3joUq1SS856%2F%2FQJISkH921&X-Amz-Signature=0ea7d87ad1330a3e285e4820695aae005b691327082b4a44c11c66655d2cc70d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
