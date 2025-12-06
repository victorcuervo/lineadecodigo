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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIKGMUMG%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T053014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDEIFCqAqUvMdGHNmMMZcv%2BxreZOhT9eppDcwRhWiI2ywIgVlG5O9OQMBQ6x3DB1U5oLRZA5ZA8yOURQ3N98zYtxrMq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDMcUvrSoiZBsSpVk7yrcA0Ps9h53ZgL%2BBdWFPBpfuq3GVTvAfezwC%2B1zSaf6rM820quMFHA9NY4T28DmLzxEUK2XQVijoAM1wpH8dpc1w%2BgMtp0jCyJmgmfAxF3zkdOVBngH9Q6Pq%2FGjW4vW7xVD8kdvNB1QelRa6%2FJj6hPK812DCOCV2%2B3dl3Ce%2FVdKmo03ayzfdUzOH10S3lTmidlNK9zv6bOxRjac2uNXyTgvTwNwT05IUJ6xm7f2IYUTeXSRq8H%2FjKhGtXpqiFOAJtzfz7flsj2kSR3PADv%2BXPawX3k1pLktbHZ03bWj2vRyMxu2D9jHHC0rkVnLmAfGHsYKaLssdmeagYd7VZUTAmiItrwnADv9wCPcr7g5MXOwldqynhc8i5uR2eVFO0fQdQqz1PrN%2B64dSis2cZQ3r3OztR5LjMGJIs8UM6YLEG4Yn5D0jtcBC1anxzK%2Faujq4t0DBiiiSF7wichTt6yGsNoNdE%2BZFz3sAfuAcBiUlffH2Tid180YfXq9JhqIYhZx%2FYE4eA%2Fx3FzUmVE4Mm9G1pzl%2BSvWCbi9eYFv3Wu2c8PPZyPVysALI4eEikDKtenVJrZ3D9mrdaJrg8cCh3HUKej%2BpipGjOISAJiFf7xwFM%2FEg9DQJJRNuMXJrzaZCQ0WMPL8zskGOqUBLndLtUpaejNv6n8MpLJsDWc1sX%2BmWI79PrcNXExL%2FZIXUJMjzs95Dd85nOGjW2yY%2Bi4FG3bdu8aEr85ec9KNEx1%2Bdqu8jUJY6bREyLNcPubl7yYInKYKAes1oDwf52xIDnygZ3GfTCwwOVmZy45VcmBD%2BiTPq1xkiytzMs18isCntokS882HiC45b7E0DWY9yX4uqDqeoEt2tv0EZfdHuon%2BoQDH&X-Amz-Signature=b1fc42ef94e7970299a1cfa0ec49e3992f61944f9bf03da9cda7568f350ffd89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIKGMUMG%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T053014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDEIFCqAqUvMdGHNmMMZcv%2BxreZOhT9eppDcwRhWiI2ywIgVlG5O9OQMBQ6x3DB1U5oLRZA5ZA8yOURQ3N98zYtxrMq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDMcUvrSoiZBsSpVk7yrcA0Ps9h53ZgL%2BBdWFPBpfuq3GVTvAfezwC%2B1zSaf6rM820quMFHA9NY4T28DmLzxEUK2XQVijoAM1wpH8dpc1w%2BgMtp0jCyJmgmfAxF3zkdOVBngH9Q6Pq%2FGjW4vW7xVD8kdvNB1QelRa6%2FJj6hPK812DCOCV2%2B3dl3Ce%2FVdKmo03ayzfdUzOH10S3lTmidlNK9zv6bOxRjac2uNXyTgvTwNwT05IUJ6xm7f2IYUTeXSRq8H%2FjKhGtXpqiFOAJtzfz7flsj2kSR3PADv%2BXPawX3k1pLktbHZ03bWj2vRyMxu2D9jHHC0rkVnLmAfGHsYKaLssdmeagYd7VZUTAmiItrwnADv9wCPcr7g5MXOwldqynhc8i5uR2eVFO0fQdQqz1PrN%2B64dSis2cZQ3r3OztR5LjMGJIs8UM6YLEG4Yn5D0jtcBC1anxzK%2Faujq4t0DBiiiSF7wichTt6yGsNoNdE%2BZFz3sAfuAcBiUlffH2Tid180YfXq9JhqIYhZx%2FYE4eA%2Fx3FzUmVE4Mm9G1pzl%2BSvWCbi9eYFv3Wu2c8PPZyPVysALI4eEikDKtenVJrZ3D9mrdaJrg8cCh3HUKej%2BpipGjOISAJiFf7xwFM%2FEg9DQJJRNuMXJrzaZCQ0WMPL8zskGOqUBLndLtUpaejNv6n8MpLJsDWc1sX%2BmWI79PrcNXExL%2FZIXUJMjzs95Dd85nOGjW2yY%2Bi4FG3bdu8aEr85ec9KNEx1%2Bdqu8jUJY6bREyLNcPubl7yYInKYKAes1oDwf52xIDnygZ3GfTCwwOVmZy45VcmBD%2BiTPq1xkiytzMs18isCntokS882HiC45b7E0DWY9yX4uqDqeoEt2tv0EZfdHuon%2BoQDH&X-Amz-Signature=8fb0ee1e31dc839152e33ba44087ba200ff81677ea9e7faeed5d906bd1fff3ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
