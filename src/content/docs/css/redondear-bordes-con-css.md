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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWDICDFP%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T233404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAP6klj8UZa5OJ2css9snF%2BLoleqGbogtmYRTHuFcvOAAiEAyVlIubrznQxsk8zlQjrZRVlG4EpaxVmzdpwJ%2F38B2Ncq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDKCmF2cFqu%2FGK3DYpSrcAz03uJrVy7QASOyksdL3dFIs9%2BpeJvyqjNQe5huPE6anGzpoD7pSCvYVleUVE4nWfS%2BOjEAKnU0%2FqMhc8vHMa93n6Hjy6LzmWLSsL%2BQaefPZS%2BuBJJkH4bnMdC3EzkcEKar%2FNkU7BjPQeSPF6xzcvdcjRTJHudewndVYVDo3AJl3x02PmYc%2BiIzaBUZgw28XYmE6T8HC77bbgPcaNUfTp0ZA6NUkboy%2FwAFlMi4f0XhNZxJ4lsQXPe6aqXD7dKUS2G2Ipup8%2F5JAaHfUOKiv9clj1z14ZeKGBcvf3kBuA9VkfL%2F%2BDeDPv2554nu5zOW2GNfCAWWlYQrnDGr%2By80oLkd474rkhHbn1HVZze6sYmS%2F5ghiSX1ODT1RA0cVg9mnOUtblza4ACxOqTQnHdXkLUG8OnFelVXf1is7JxjLjYYQjZxwIt6wm699HyfFa0zvMJniTDWpEJjMpL097UHC7bTbjQtov2tWNMm33bCLih%2Bzl2Ui2OjgdxP%2BcvviIrCePTQn5tW9jUFxH%2FeV%2B4gtc5qeCdzcGYYDOep%2FsN7LDPnm8FKOgI0dv0ytYmZsDHe5fN1Mhks5FH%2FCxppdEnXUkb1I9yCMY5iPXf4WI2Ac1v%2F09sBiTDWS5m%2FTYwi4ML2MyMkGOqUB%2BLzyFmVId1H%2FpflR6ENrzLJhHOcjddL3q2ECnIyyPqv0OlBu3ivLPkcOZNN5n6zo8GUqi554W1%2FmBqctMAurhorJPD0MsxCpSCUCbnIIOUXiQoN7LX0bQ0Mj7a%2BR%2FLnZk4GPy4X9Z%2B9uq4xp2qNSEczQMCSBwdgyqBaaFSksVZQTilJulS2Er1TKOD8Tjh2slsFPYbpmscOSbFwT9mBORlJm%2Bv0%2F&X-Amz-Signature=eb443d7cda52354fa1248624d1495f52c2c0fa0614a376ea0cb9da510b6a5ced&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWDICDFP%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T233404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAP6klj8UZa5OJ2css9snF%2BLoleqGbogtmYRTHuFcvOAAiEAyVlIubrznQxsk8zlQjrZRVlG4EpaxVmzdpwJ%2F38B2Ncq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDKCmF2cFqu%2FGK3DYpSrcAz03uJrVy7QASOyksdL3dFIs9%2BpeJvyqjNQe5huPE6anGzpoD7pSCvYVleUVE4nWfS%2BOjEAKnU0%2FqMhc8vHMa93n6Hjy6LzmWLSsL%2BQaefPZS%2BuBJJkH4bnMdC3EzkcEKar%2FNkU7BjPQeSPF6xzcvdcjRTJHudewndVYVDo3AJl3x02PmYc%2BiIzaBUZgw28XYmE6T8HC77bbgPcaNUfTp0ZA6NUkboy%2FwAFlMi4f0XhNZxJ4lsQXPe6aqXD7dKUS2G2Ipup8%2F5JAaHfUOKiv9clj1z14ZeKGBcvf3kBuA9VkfL%2F%2BDeDPv2554nu5zOW2GNfCAWWlYQrnDGr%2By80oLkd474rkhHbn1HVZze6sYmS%2F5ghiSX1ODT1RA0cVg9mnOUtblza4ACxOqTQnHdXkLUG8OnFelVXf1is7JxjLjYYQjZxwIt6wm699HyfFa0zvMJniTDWpEJjMpL097UHC7bTbjQtov2tWNMm33bCLih%2Bzl2Ui2OjgdxP%2BcvviIrCePTQn5tW9jUFxH%2FeV%2B4gtc5qeCdzcGYYDOep%2FsN7LDPnm8FKOgI0dv0ytYmZsDHe5fN1Mhks5FH%2FCxppdEnXUkb1I9yCMY5iPXf4WI2Ac1v%2F09sBiTDWS5m%2FTYwi4ML2MyMkGOqUB%2BLzyFmVId1H%2FpflR6ENrzLJhHOcjddL3q2ECnIyyPqv0OlBu3ivLPkcOZNN5n6zo8GUqi554W1%2FmBqctMAurhorJPD0MsxCpSCUCbnIIOUXiQoN7LX0bQ0Mj7a%2BR%2FLnZk4GPy4X9Z%2B9uq4xp2qNSEczQMCSBwdgyqBaaFSksVZQTilJulS2Er1TKOD8Tjh2slsFPYbpmscOSbFwT9mBORlJm%2Bv0%2F&X-Amz-Signature=46bb18a65dcd8c01488b47a0318b3f2a11076a740076991b79558b5890bf1172&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
