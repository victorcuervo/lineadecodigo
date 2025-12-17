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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAZODY52%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T054347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBtzPJLQGe4%2FZWzcZWzp10NJw7v38Ec7zaKMqR%2FJ%2FcUEAiEA8QQ7B8iswQQGrpsiggX%2FS7Sk1GfPYDRheKPQzck8o6wq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDAIUNDgJEBf738BGkircA5a%2Fs02ITfmj68rgHpSySRryw7DSps%2Fs5n1oA56Smbv8Hgl0hiOoWdU0pyvM7mMhC8p6kZCSU7hlQ%2BKlDlulFyTzknQ9%2BFDeXjEmw%2FyD%2Bh%2BL5wfgMdS%2BPY%2Fw0XXz8Sw64jugNs669aptJsakF5RJvyAJ2zlpG1kfXhwDxJXsBSo%2B5tyW46isEbVbo0NF1j7CG1ReqYcH3DThUA7eo2UP%2FOVukxzRhKy%2FRO6%2BJ0K6qOR6%2FRUQFGA7D5c%2BCeVimlfg7oP%2F%2BoxqhnB46DK45doe8bW1MU4vS9N0qTkAnoAfyxeZzzhOtilXTMkuUiKkvemaogGrxJ6%2FyotHxgLitBEGXBWD94CyljYaeBXQq95sH6HyH5gqo%2Bp4e6n%2B6l2n5ikgVJc7qgI9Q%2FI8IaD5b5U2MJ3U447fA5y%2FZEDHtog0QJhFRewsr%2BR%2FKcoG5os5xFCIk6pkyEmRBTdrDc0z%2F%2FR8qo0Fnkvci29BDbwYQAzOgHojodrnxlhi1mzwOUWuEpH3hLJFB4f0A96fS0KTzSDkZTXjV7OA7SCGoVX2AbvUb5DnNWgcdrzAy10bSS6jDSruHKNS5bssBK9CGvdd9xIgcfomS%2BeZE5DmJ4KaFIiaylHiqOLhC2O4tBKB27fnMNGCicoGOqUBjvefLTByFl%2BEgFceLelJhic9ObMeVh%2FEM3x7I1XGBKQilsM1EmdDZuIu%2BDcfcKmCQshKzmlFk6GObEnIJnzFc5AV9f3SPNoEJASNZc2skDGYw14M%2B260lz5jdSg38huUVNwiHhPElvLimL4bTAyTMrLPPyaEbouz7BsPYFTeakfOSjoNsxa%2F8mSnjiogRBJewCJNDcgdRQvePG7zeqmk0%2Fv2pA8z&X-Amz-Signature=a90ff6584c19dc9bc263a1134ae50ac1d6b76d82b3a261afb037f2b3ef2b7380&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAZODY52%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T054347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBtzPJLQGe4%2FZWzcZWzp10NJw7v38Ec7zaKMqR%2FJ%2FcUEAiEA8QQ7B8iswQQGrpsiggX%2FS7Sk1GfPYDRheKPQzck8o6wq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDAIUNDgJEBf738BGkircA5a%2Fs02ITfmj68rgHpSySRryw7DSps%2Fs5n1oA56Smbv8Hgl0hiOoWdU0pyvM7mMhC8p6kZCSU7hlQ%2BKlDlulFyTzknQ9%2BFDeXjEmw%2FyD%2Bh%2BL5wfgMdS%2BPY%2Fw0XXz8Sw64jugNs669aptJsakF5RJvyAJ2zlpG1kfXhwDxJXsBSo%2B5tyW46isEbVbo0NF1j7CG1ReqYcH3DThUA7eo2UP%2FOVukxzRhKy%2FRO6%2BJ0K6qOR6%2FRUQFGA7D5c%2BCeVimlfg7oP%2F%2BoxqhnB46DK45doe8bW1MU4vS9N0qTkAnoAfyxeZzzhOtilXTMkuUiKkvemaogGrxJ6%2FyotHxgLitBEGXBWD94CyljYaeBXQq95sH6HyH5gqo%2Bp4e6n%2B6l2n5ikgVJc7qgI9Q%2FI8IaD5b5U2MJ3U447fA5y%2FZEDHtog0QJhFRewsr%2BR%2FKcoG5os5xFCIk6pkyEmRBTdrDc0z%2F%2FR8qo0Fnkvci29BDbwYQAzOgHojodrnxlhi1mzwOUWuEpH3hLJFB4f0A96fS0KTzSDkZTXjV7OA7SCGoVX2AbvUb5DnNWgcdrzAy10bSS6jDSruHKNS5bssBK9CGvdd9xIgcfomS%2BeZE5DmJ4KaFIiaylHiqOLhC2O4tBKB27fnMNGCicoGOqUBjvefLTByFl%2BEgFceLelJhic9ObMeVh%2FEM3x7I1XGBKQilsM1EmdDZuIu%2BDcfcKmCQshKzmlFk6GObEnIJnzFc5AV9f3SPNoEJASNZc2skDGYw14M%2B260lz5jdSg38huUVNwiHhPElvLimL4bTAyTMrLPPyaEbouz7BsPYFTeakfOSjoNsxa%2F8mSnjiogRBJewCJNDcgdRQvePG7zeqmk0%2Fv2pA8z&X-Amz-Signature=ede8714fcc60fc11a7c5ad2de7b3eee51f0d99ddd28d572120526e28587df8a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
