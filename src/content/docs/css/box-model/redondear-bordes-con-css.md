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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCOCH66T%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T115820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZvk7kwiuJoGijvjh58eEHOd5BfburUM3Gmm1bJy8alwIhANNE9BExx97Lww1s8lG%2FP120bhPoOkBxlz51CVymnuogKv8DCH0QABoMNjM3NDIzMTgzODA1IgwMUWQ4ZnAp3ZA7TLYq3ANgiy6pQnAnfzVVYt%2B60nhSA2l61wGzCn%2BtfF232aC%2FXUt5yCKw9w1nCZBOGC0%2FZ%2Bd%2Bk0nf7C2MNeqoE9scjeDz3TYZWx2wBOUN4aEYvTSt6SUyCbxn95rTh7pbTqjTdc0EocpaVRPoTwjGWCaux5q%2F5RiQ2v9wzCn6uupLlAa4AueDhZVc2COzyCbFEsCkfUkdFvzZvNePDX5AammZm69wXZyezq%2B7p2yDMmA%2BRaJbKCOMFnPUWnq7G72890x2hoC9pb6B%2BUBIeCp5IRTpYDy3JfMR6NzwCNyUgPO5sUnXh%2FG3f9Mr4aqYFcqISsfzJ1Gsx%2B4bzY%2Flx4JNb0N1Wn2oLPlQiKVDzNP11K8KjJabRE4DLNwz9AoaPoNEVo6iZj3rOQ37CP3%2FU18sSXfZivENgHEY5G41OnFeCWFDuzRIAAmQLmW30EAMzCX%2BDS1wWoelUrtOpHlpwyvogMAT%2BlrZKfSkvh%2FldQM0kDTJUI7IuwM4vZ8LibeSa%2FS3mgQAZaTFQVtegpmM0jtbQuNhkSTdwL2b93MwxWrNClkB9TQUPVmg3dO4TT6Vdxx1HbqYrEvrJFommkdkbnImHnfNhWO4RVunZj%2B%2FgJ8HdiXYhPcPmWPJCbH97uPJqdZEQDDMqorKBjqkARLhaXA1Pts63XcmphTMyfKmLk1%2B69S6v%2BxxE0Nmury1LkTu%2BvGLtVgxo46T13jF8hw3PwXL0pBPAR1V1oaYXmwDOo4LEilOWelW1zEKOCeoyUHhv%2F2ticLtlfBorugWb9ItjYVL38IyPBWvDy3XPkBd%2BjYLvCI1ue2StF1OId4M2DLci1QABg8HKhll9pvpB5fPX2af%2FM7Hzspkn0R100zFQ9xo&X-Amz-Signature=336b1487765cd81b4b9062b9dc66402098c9bed9450406f2665b6da7d115707e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCOCH66T%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T115820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZvk7kwiuJoGijvjh58eEHOd5BfburUM3Gmm1bJy8alwIhANNE9BExx97Lww1s8lG%2FP120bhPoOkBxlz51CVymnuogKv8DCH0QABoMNjM3NDIzMTgzODA1IgwMUWQ4ZnAp3ZA7TLYq3ANgiy6pQnAnfzVVYt%2B60nhSA2l61wGzCn%2BtfF232aC%2FXUt5yCKw9w1nCZBOGC0%2FZ%2Bd%2Bk0nf7C2MNeqoE9scjeDz3TYZWx2wBOUN4aEYvTSt6SUyCbxn95rTh7pbTqjTdc0EocpaVRPoTwjGWCaux5q%2F5RiQ2v9wzCn6uupLlAa4AueDhZVc2COzyCbFEsCkfUkdFvzZvNePDX5AammZm69wXZyezq%2B7p2yDMmA%2BRaJbKCOMFnPUWnq7G72890x2hoC9pb6B%2BUBIeCp5IRTpYDy3JfMR6NzwCNyUgPO5sUnXh%2FG3f9Mr4aqYFcqISsfzJ1Gsx%2B4bzY%2Flx4JNb0N1Wn2oLPlQiKVDzNP11K8KjJabRE4DLNwz9AoaPoNEVo6iZj3rOQ37CP3%2FU18sSXfZivENgHEY5G41OnFeCWFDuzRIAAmQLmW30EAMzCX%2BDS1wWoelUrtOpHlpwyvogMAT%2BlrZKfSkvh%2FldQM0kDTJUI7IuwM4vZ8LibeSa%2FS3mgQAZaTFQVtegpmM0jtbQuNhkSTdwL2b93MwxWrNClkB9TQUPVmg3dO4TT6Vdxx1HbqYrEvrJFommkdkbnImHnfNhWO4RVunZj%2B%2FgJ8HdiXYhPcPmWPJCbH97uPJqdZEQDDMqorKBjqkARLhaXA1Pts63XcmphTMyfKmLk1%2B69S6v%2BxxE0Nmury1LkTu%2BvGLtVgxo46T13jF8hw3PwXL0pBPAR1V1oaYXmwDOo4LEilOWelW1zEKOCeoyUHhv%2F2ticLtlfBorugWb9ItjYVL38IyPBWvDy3XPkBd%2BjYLvCI1ue2StF1OId4M2DLci1QABg8HKhll9pvpB5fPX2af%2FM7Hzspkn0R100zFQ9xo&X-Amz-Signature=e0124eb320b1b1902d44b9a9e8f07890821bc5d0fc22f6ffbd5dda875f95b633&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
