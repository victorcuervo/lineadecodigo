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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633D2UIZP%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T024141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGhfYTvFhj3yeRJltz6xxoCF32iOO04WqMPevB2h7LYPAiEAqIlke1kQJOPA%2FaQon3mc0gz1tNXycNs8Qt%2BWdvwGJPEqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAQ5vAXXcxIqE%2BoAGyrcAyYIwfELkys2yrKyC8ZbsR88W3vcclQw%2B86s0Eat%2FKfgDE30kEiqA%2BqyeoSg5Kwd7elKQLUmtb2pGHm24Ol2qo%2BDcuoIwvMTBvg%2Fdc%2FS1LdjThYSAu3SGhESV4OVzcS8%2BCChiipLJxYpnnFc83A4IJq6tjhJiuG3xK2VDXyfQ2g1tZtsXqp9K%2FYbxlGXJx1Onz3AEKc391FEqKpdsLXpsOlWKgr30D0cEPD6wAJo%2BkAUltivRoiuSCjbyPW57%2FtvDeEhnnzqqRBxCuR5sTbFvlofqA2LieEUxaVO4Sy4jm3gfsinXL5unFSFCs0wc5%2Bt8z7Cvd9WKnrRxC0SXPpFVp0cgO%2FHk1ecdcdfoXpuyFkylB7F31GT9EUUmekNNjKsMZ%2Bk%2BMsyg8gfVbycOecXM42wLgaCBkkoExF%2F4Z6%2BwZN9dATrn8mlmoGHyiGxaNE20v5WCLsz6mh6jTReW9XMoWQFqtzquM6%2BxwnzKyGdjNwl%2F59gjBM95xtTV9K6dJdt42t3QH6HV0uc7NxkWqMp7tAdhByVX%2FggepTAgnDrO8apRK53JMlyMs0PkG0HSI9GZwouauiuIWklmOTQABZb1FRYJZL8dnf6paVdZtO2H62880uj%2FpP0ydB4tNfxMNPu2MkGOqUBgJenCrIOu22jo0kKPRFMPqq9m5c%2F5ijjw1%2BC1mkZZvButDXf4izTMCCWCbq%2FVY2wFq5aU6MDpRXu%2FtiyThz6BB23k6ZKfHeRS5LCtKW0XWHBY8sJcq5btzETO2nYv33dZgV6O46dRskY1oLDZVCRiE2NCxn9XT%2FDodnTPCT9loJBve0zZgl%2F1IITgrATTOtXpCY4bdilVG8DJObkJDOUn00haPwS&X-Amz-Signature=7595d5dd89f1873b79eb39ce3bd19ad4128547097ddef64da5edd47e3cb044d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633D2UIZP%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T024141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGhfYTvFhj3yeRJltz6xxoCF32iOO04WqMPevB2h7LYPAiEAqIlke1kQJOPA%2FaQon3mc0gz1tNXycNs8Qt%2BWdvwGJPEqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAQ5vAXXcxIqE%2BoAGyrcAyYIwfELkys2yrKyC8ZbsR88W3vcclQw%2B86s0Eat%2FKfgDE30kEiqA%2BqyeoSg5Kwd7elKQLUmtb2pGHm24Ol2qo%2BDcuoIwvMTBvg%2Fdc%2FS1LdjThYSAu3SGhESV4OVzcS8%2BCChiipLJxYpnnFc83A4IJq6tjhJiuG3xK2VDXyfQ2g1tZtsXqp9K%2FYbxlGXJx1Onz3AEKc391FEqKpdsLXpsOlWKgr30D0cEPD6wAJo%2BkAUltivRoiuSCjbyPW57%2FtvDeEhnnzqqRBxCuR5sTbFvlofqA2LieEUxaVO4Sy4jm3gfsinXL5unFSFCs0wc5%2Bt8z7Cvd9WKnrRxC0SXPpFVp0cgO%2FHk1ecdcdfoXpuyFkylB7F31GT9EUUmekNNjKsMZ%2Bk%2BMsyg8gfVbycOecXM42wLgaCBkkoExF%2F4Z6%2BwZN9dATrn8mlmoGHyiGxaNE20v5WCLsz6mh6jTReW9XMoWQFqtzquM6%2BxwnzKyGdjNwl%2F59gjBM95xtTV9K6dJdt42t3QH6HV0uc7NxkWqMp7tAdhByVX%2FggepTAgnDrO8apRK53JMlyMs0PkG0HSI9GZwouauiuIWklmOTQABZb1FRYJZL8dnf6paVdZtO2H62880uj%2FpP0ydB4tNfxMNPu2MkGOqUBgJenCrIOu22jo0kKPRFMPqq9m5c%2F5ijjw1%2BC1mkZZvButDXf4izTMCCWCbq%2FVY2wFq5aU6MDpRXu%2FtiyThz6BB23k6ZKfHeRS5LCtKW0XWHBY8sJcq5btzETO2nYv33dZgV6O46dRskY1oLDZVCRiE2NCxn9XT%2FDodnTPCT9loJBve0zZgl%2F1IITgrATTOtXpCY4bdilVG8DJObkJDOUn00haPwS&X-Amz-Signature=4ff797780109d6c42baa765db99bb32ff4aac564aa5a00c661aa408fd6dfb465&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
