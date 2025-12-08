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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664S3SO6GP%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T100950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDkK2bX%2FxbLzFeGJoWKBBIxiFfQcthHrT2URS7y76OMgIgUgv7JUmOlE7ZGLOEoIc5njB9%2B89blOqd%2BV6V5cqjf%2BAqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGC201Z%2FPjYCnzCc3ircA17c1wsLn1CWOfN1Tth7Emu4Ms6%2BUCMDedAJVC06aW1e%2FlDNScN7etqde5Rx31%2FEX6nvyypkP%2F%2FdtSeZMTWfglyWODtzD48au7mVHP55qUauMi0Ku7OPXt9p5eO5WpYTrjeTnfSBdiK%2FOiDEoN96ILfrjqy56nQyrjoplNFl9u2iJtgSrXVaK8rmlIcp4azPaNcrkUaP6n3kvwIgk09Za9kjJqLd6IkUUVS%2BkmFcMcpZopNNdcJNkt8uPrEoHi0DcbMXtMe5UIgZPV9kLY16PqkMgKOlPQOa2yYk%2BUQPCJt8TAKwDH1Sd4EuPEprpEAjXenuuOz5TUDZIbYOEQnxU9iT68fD6kR6th%2BimpHwNXAxGXfayPGWVfMygt17iZ9aLjn9yj47PQDE59AJqExZlhO1cSU4ycRV3HqZ%2FuFLsvAIaRqdSLgbBWZMPqClxpcM5GhnLGSzI%2BnyrjofAuLwbOqxgcoQxGe0QgB6xVDG%2BcFU0UugaFlGs9v%2BEQehJYZQ3upnhLtc7Pc5B%2BKACF6f0dYGWQvu8zmBY%2FgbuogZV0mzipSTPBBQAMn51v2tPGcpfw7%2BXExem%2BfSKTFeSZFA853cgkjhNJ850TtBblID85q9WdSzr0V4Z4ITY1zZMP%2Ft2ckGOqUBxmKuclda4pWjjJkcedkTAHPy4LV7%2Bd5RiXyCZjDbE%2BJ3Z3Dl5hzgDbgMNq1OkNIt7tPHRUF3x4zoXI57YJkh3m6763Y3736TKRSgrkva2OT%2FrOawUIpZlcZCq8zHosO9ixXiH1tUpbmhvhKOstdwtcSKFTz1EiHS56bEI89kQOhHd6XYbOnDGUlew25MhsNTZ%2FExycb71oK1TDo%2BPPkzT%2BFeI2py&X-Amz-Signature=fe2e7a376c4b8e3e7cda5ff40a872fefff3aee3fd271b73d8191b8fc663261a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664S3SO6GP%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T100950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDkK2bX%2FxbLzFeGJoWKBBIxiFfQcthHrT2URS7y76OMgIgUgv7JUmOlE7ZGLOEoIc5njB9%2B89blOqd%2BV6V5cqjf%2BAqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGC201Z%2FPjYCnzCc3ircA17c1wsLn1CWOfN1Tth7Emu4Ms6%2BUCMDedAJVC06aW1e%2FlDNScN7etqde5Rx31%2FEX6nvyypkP%2F%2FdtSeZMTWfglyWODtzD48au7mVHP55qUauMi0Ku7OPXt9p5eO5WpYTrjeTnfSBdiK%2FOiDEoN96ILfrjqy56nQyrjoplNFl9u2iJtgSrXVaK8rmlIcp4azPaNcrkUaP6n3kvwIgk09Za9kjJqLd6IkUUVS%2BkmFcMcpZopNNdcJNkt8uPrEoHi0DcbMXtMe5UIgZPV9kLY16PqkMgKOlPQOa2yYk%2BUQPCJt8TAKwDH1Sd4EuPEprpEAjXenuuOz5TUDZIbYOEQnxU9iT68fD6kR6th%2BimpHwNXAxGXfayPGWVfMygt17iZ9aLjn9yj47PQDE59AJqExZlhO1cSU4ycRV3HqZ%2FuFLsvAIaRqdSLgbBWZMPqClxpcM5GhnLGSzI%2BnyrjofAuLwbOqxgcoQxGe0QgB6xVDG%2BcFU0UugaFlGs9v%2BEQehJYZQ3upnhLtc7Pc5B%2BKACF6f0dYGWQvu8zmBY%2FgbuogZV0mzipSTPBBQAMn51v2tPGcpfw7%2BXExem%2BfSKTFeSZFA853cgkjhNJ850TtBblID85q9WdSzr0V4Z4ITY1zZMP%2Ft2ckGOqUBxmKuclda4pWjjJkcedkTAHPy4LV7%2Bd5RiXyCZjDbE%2BJ3Z3Dl5hzgDbgMNq1OkNIt7tPHRUF3x4zoXI57YJkh3m6763Y3736TKRSgrkva2OT%2FrOawUIpZlcZCq8zHosO9ixXiH1tUpbmhvhKOstdwtcSKFTz1EiHS56bEI89kQOhHd6XYbOnDGUlew25MhsNTZ%2FExycb71oK1TDo%2BPPkzT%2BFeI2py&X-Amz-Signature=c0421c6c33bca67342081e016108ddd785f28d0254bb2ffdae20e365138ca3b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
