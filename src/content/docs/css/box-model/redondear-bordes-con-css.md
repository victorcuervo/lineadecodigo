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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDMOPVR6%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T103343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCOQSLtEzZ%2F9KgYFoF5%2BPICiKbIwjWenvtSowHvWPQwRAIgNKUaJW0icNtZLicpo%2FMHZEHdilgN3ZXFSnv9hlGQjiUq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDGOwtpicx%2BDRpnFTESrcA7XcHG8P7FDUqxsYgeACn%2B2Xlp1cCk0WNyNpP8TLlCCW3CaVKaqIHRW0kIAA9wnYffwJ9ZS%2F%2B70FgrWyZopxsqnnvTtT6DrVaMZihB0OpwpBfoq9qcTiWqsPwjuQ6kwawXczOvT%2FzgqRo4jbV36yuQIM1k2A4TNYeE2oeKit0tx2EzU36mg5gP3xcsjzbtEUcgUoqRKHI81A%2By7we9E9ouaChGJ49kERX8DHb0jRoNrMDcuGRDQyN%2Bi%2By5ShoKp4CU6%2Fx9IpznZFWxvssXs7Sc5S7Ch%2FCRPRbcCe3lNFkSFeDS6LHYHMZYz3nnHsyEKI%2BUugGN%2FGJq%2BHYmUpoYMXgBUDCrJpGHMBYNF%2FmSNlW7QSyR3AjUm3Gg7YRAqugSO3H6k45W%2F%2BUgIgIlvybkT8Z7nR%2BwNmVFieeuCzyjjRd56yNd4rIfrhgYTpm8juQzinuEn7RKSoRHAZgTIkyxXHLPgre821r%2F44YOad2u3L6gAysH67siScdE2wGgswBp%2FWqAIQmFQc2rrtFqClMdv0imjHr3txrQhC5SkgFRFX0da1BFN4rgRnl73ngI4gHnVLoOGXp0z%2FJ0bv6RAsh4PUAZSD2ZfpcBrMZLWXLMa9W82QiPgxadU%2FSJR5J%2BlUMLzxicoGOqUBoxfWPv7qHnvnRyNFF%2BY8uehBU%2FtHOTSWgiixkBU9h%2B9bKPAc6Fk%2Flq39CbqYPR6TbBF1eyjKS6LZGy25XgNYS%2F%2BZnwPXarMHCOTU5ojgzl28UUtwWtOeJF9m%2F5P3s2mGQJLps5t9I0pPgq%2B46elsL3dSQz0dujORhoK%2BAJ4aEH1Qu22crlHYJ5jri6EjaT%2FxAo7TCjDet%2Bank1igvY0F5kWkGNqI&X-Amz-Signature=9aa28b8b9a32a6691e06f8ab5ee04259d258c6b1d5d34812b56e3fe072c2ab4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDMOPVR6%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T103343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCOQSLtEzZ%2F9KgYFoF5%2BPICiKbIwjWenvtSowHvWPQwRAIgNKUaJW0icNtZLicpo%2FMHZEHdilgN3ZXFSnv9hlGQjiUq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDGOwtpicx%2BDRpnFTESrcA7XcHG8P7FDUqxsYgeACn%2B2Xlp1cCk0WNyNpP8TLlCCW3CaVKaqIHRW0kIAA9wnYffwJ9ZS%2F%2B70FgrWyZopxsqnnvTtT6DrVaMZihB0OpwpBfoq9qcTiWqsPwjuQ6kwawXczOvT%2FzgqRo4jbV36yuQIM1k2A4TNYeE2oeKit0tx2EzU36mg5gP3xcsjzbtEUcgUoqRKHI81A%2By7we9E9ouaChGJ49kERX8DHb0jRoNrMDcuGRDQyN%2Bi%2By5ShoKp4CU6%2Fx9IpznZFWxvssXs7Sc5S7Ch%2FCRPRbcCe3lNFkSFeDS6LHYHMZYz3nnHsyEKI%2BUugGN%2FGJq%2BHYmUpoYMXgBUDCrJpGHMBYNF%2FmSNlW7QSyR3AjUm3Gg7YRAqugSO3H6k45W%2F%2BUgIgIlvybkT8Z7nR%2BwNmVFieeuCzyjjRd56yNd4rIfrhgYTpm8juQzinuEn7RKSoRHAZgTIkyxXHLPgre821r%2F44YOad2u3L6gAysH67siScdE2wGgswBp%2FWqAIQmFQc2rrtFqClMdv0imjHr3txrQhC5SkgFRFX0da1BFN4rgRnl73ngI4gHnVLoOGXp0z%2FJ0bv6RAsh4PUAZSD2ZfpcBrMZLWXLMa9W82QiPgxadU%2FSJR5J%2BlUMLzxicoGOqUBoxfWPv7qHnvnRyNFF%2BY8uehBU%2FtHOTSWgiixkBU9h%2B9bKPAc6Fk%2Flq39CbqYPR6TbBF1eyjKS6LZGy25XgNYS%2F%2BZnwPXarMHCOTU5ojgzl28UUtwWtOeJF9m%2F5P3s2mGQJLps5t9I0pPgq%2B46elsL3dSQz0dujORhoK%2BAJ4aEH1Qu22crlHYJ5jri6EjaT%2FxAo7TCjDet%2Bank1igvY0F5kWkGNqI&X-Amz-Signature=ad26e233c3430a128824a9872b8d3135835ebc1d5f1b05421a0651b1091ae066&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
