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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWG5VUXH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T110506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHlJP14NbL2kwP1JRt%2Bn6q6O0nUEO%2Bo0%2FPvNHfYWpfTMAiAWpbz5%2B6%2FUP1fqaR%2FzepP%2BDzClubqFuVD8c%2FM8tBublir%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMRFS8AFrk9gx1fRuNKtwDjtk0MBqq%2FfLBLxjQwbm3xJN9P2O6ieMVJZ87DojNk%2BK58FY0xhzzmSb%2BYHFlIpLYZt6hzmKdohs5fRSPWYc0759BPNzJr6iEdA9VTIe1XEYJrtDIETZvc06mwjZp%2FrKBtu7btIEQfKgPxxlTcohPkTyuvy6gYZLFffHrSHRE6o%2FSPBYlDH8zQdcEPmDsVyLZFVLimZ5CsYIHYcaxdr0G3ebQ9xI2I%2FetJqsV8l9aW2ahjxSYNLfSHfVNgQLmW%2FeoUonTzjOLAIa8c3oiVa0Pgj%2FHZkxffihTIPDXYVqJWcXABnIoxRCpfFS9QUiLAKEqWKyixBk37q7YJDzO4ZzNa2cckdyyLZSz43TK64LSBZco%2B8H1p7HSdXNJ2pk2Gxcc5rTZQzj7ypjutAP0gDVQDsb0A1yupg1R0pyQBnYMXLJBSv4L1csqLdbn1vVK6qk3B34lIxdJsJSD6kBMJ58efdQlcYMcXMBMPi3T3aHYJ%2BTDYWdTgk%2BDY5zIDx5jN5nmwN1MksAwsVM58kpE4bhvFOO5xtPkTMwSzrnuacMjcd7UZoEzqSOqGafFIXbTfB3ZEPlHMbYen7U%2Bx4zMofxnOFO1ACiuzRyHSvS5zcWVxiSe8AolfGTkcGNHDkMw2I6KygY6pgG%2F%2BErTXqvY7siTGaew7mIvhBSmO3kBf6XKWNnHPOp%2F3SS2U%2BKscwhROiB5OWsKEMINfDxjv1DDbf9ovVyKfX74%2BWyNaccY82AHh9NTMx3dXKLhH2aUureX4SUPDiS5ekn%2BBgKcKA5mnKN9aXNYN9u%2BQm0sTGlFdv1H0fJbds57fhAdFiFIeDW0mMX13n1SD0aPWESXq2wQjBEFtMw2K6juJKUug41z&X-Amz-Signature=b155d4a83529d33af94e09181d509888bad9cbd49d00a1622373065fc1ec3aca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWG5VUXH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T110506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHlJP14NbL2kwP1JRt%2Bn6q6O0nUEO%2Bo0%2FPvNHfYWpfTMAiAWpbz5%2B6%2FUP1fqaR%2FzepP%2BDzClubqFuVD8c%2FM8tBublir%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMRFS8AFrk9gx1fRuNKtwDjtk0MBqq%2FfLBLxjQwbm3xJN9P2O6ieMVJZ87DojNk%2BK58FY0xhzzmSb%2BYHFlIpLYZt6hzmKdohs5fRSPWYc0759BPNzJr6iEdA9VTIe1XEYJrtDIETZvc06mwjZp%2FrKBtu7btIEQfKgPxxlTcohPkTyuvy6gYZLFffHrSHRE6o%2FSPBYlDH8zQdcEPmDsVyLZFVLimZ5CsYIHYcaxdr0G3ebQ9xI2I%2FetJqsV8l9aW2ahjxSYNLfSHfVNgQLmW%2FeoUonTzjOLAIa8c3oiVa0Pgj%2FHZkxffihTIPDXYVqJWcXABnIoxRCpfFS9QUiLAKEqWKyixBk37q7YJDzO4ZzNa2cckdyyLZSz43TK64LSBZco%2B8H1p7HSdXNJ2pk2Gxcc5rTZQzj7ypjutAP0gDVQDsb0A1yupg1R0pyQBnYMXLJBSv4L1csqLdbn1vVK6qk3B34lIxdJsJSD6kBMJ58efdQlcYMcXMBMPi3T3aHYJ%2BTDYWdTgk%2BDY5zIDx5jN5nmwN1MksAwsVM58kpE4bhvFOO5xtPkTMwSzrnuacMjcd7UZoEzqSOqGafFIXbTfB3ZEPlHMbYen7U%2Bx4zMofxnOFO1ACiuzRyHSvS5zcWVxiSe8AolfGTkcGNHDkMw2I6KygY6pgG%2F%2BErTXqvY7siTGaew7mIvhBSmO3kBf6XKWNnHPOp%2F3SS2U%2BKscwhROiB5OWsKEMINfDxjv1DDbf9ovVyKfX74%2BWyNaccY82AHh9NTMx3dXKLhH2aUureX4SUPDiS5ekn%2BBgKcKA5mnKN9aXNYN9u%2BQm0sTGlFdv1H0fJbds57fhAdFiFIeDW0mMX13n1SD0aPWESXq2wQjBEFtMw2K6juJKUug41z&X-Amz-Signature=0d5c9615ed3ea5dfdea867be168ee77874bbbca72c45078a4db88e7e2d0bb148&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
