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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WP54RW4H%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T005319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID%2BF0fUX1kGrw1SzYtLQRAiNrTM7iw32AFoI08oNnShFAiA%2BCh3AkK8ELTEQJQz%2BYvEXMeiF39vRyT8uw2e9mzbWkCr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMHTH5dmDic%2Flz2WgqKtwDlA5P5P6mAwcYUlxyGIgYP%2BGLxeiYApnmK%2FDy9FZpQZ1mOLT2AqCiOJjvfdO0JCxE4JbuHYIBNbpk3ZlIQtIXCO8a9DfrsFxMR1GtxvDFmchdy%2F%2BMgzCENtAlzEWgg%2FHX4bGYwaPgniJsTqcBP1fMhi%2FNC6OCVve6%2B%2ByC0b3q3h4vihtIFezWJbEEv3IrfuFaBr4%2Bt4rJZAvvlo86WbohuJxLDcPITtQ94kk4s3cq2zK8VbwYg0GP1dQP%2BVgQ5jBvK56geAD50Os2T3ztRNwvctAOi5fithbw5lBmBhLXd7naviMRhHn61cKNRYDDbsMblnAfDudfFDbVZhXqZj%2FU0%2F3OmulTvqYJfj66mXExX2Ljw0aPWg6ks8slvoU%2BpjPhcM9hj7Fo%2FmWIIJ7vueujVKQPi58gOwnimeHRmHdAMyEx5VSVg07YFhQuPglvr%2FQ4urMDH3HtK55roWD9TNaBU3om0pQYt4IQ9DumiY3netXpuhQufmb0JA5imvrusbBFsdhRuRbwN3Bwzx5cCROQIQjmgWX62zIL8QbXPG69TAXxg5NRtvO47Us93%2Fr5BGvaboFw01WpUdXcV7%2Be8R8wGRrl0XL2FYyb3ngmvDkL2k4LN7P6drVExcTpjxEwrfqHygY6pgEdHbYAItJfu5oqbzGcng4c8z8bDi2JrUblvpPRorqLyJfz1M%2FUA5jytGg35uIv5Rm1Dlh1D%2FwQvagNCzHh9mHZb7CxBj%2FhV%2FTykIbFNVXFh8uHj7yzRcsl4cg1XMuZNhhcB670R9sU06%2FBVVupA5UnEiEMbf9hpmAvfchS6o3Imbc62k6E3BmuABvDCbcJgagTuFIyow98lM%2B9S2iAR4A8PmMbPVZE&X-Amz-Signature=4a58cd892ec39c560cbe06e6c2df3341803e959fe232697b2dd32a6f193cbbe7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WP54RW4H%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T005319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID%2BF0fUX1kGrw1SzYtLQRAiNrTM7iw32AFoI08oNnShFAiA%2BCh3AkK8ELTEQJQz%2BYvEXMeiF39vRyT8uw2e9mzbWkCr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMHTH5dmDic%2Flz2WgqKtwDlA5P5P6mAwcYUlxyGIgYP%2BGLxeiYApnmK%2FDy9FZpQZ1mOLT2AqCiOJjvfdO0JCxE4JbuHYIBNbpk3ZlIQtIXCO8a9DfrsFxMR1GtxvDFmchdy%2F%2BMgzCENtAlzEWgg%2FHX4bGYwaPgniJsTqcBP1fMhi%2FNC6OCVve6%2B%2ByC0b3q3h4vihtIFezWJbEEv3IrfuFaBr4%2Bt4rJZAvvlo86WbohuJxLDcPITtQ94kk4s3cq2zK8VbwYg0GP1dQP%2BVgQ5jBvK56geAD50Os2T3ztRNwvctAOi5fithbw5lBmBhLXd7naviMRhHn61cKNRYDDbsMblnAfDudfFDbVZhXqZj%2FU0%2F3OmulTvqYJfj66mXExX2Ljw0aPWg6ks8slvoU%2BpjPhcM9hj7Fo%2FmWIIJ7vueujVKQPi58gOwnimeHRmHdAMyEx5VSVg07YFhQuPglvr%2FQ4urMDH3HtK55roWD9TNaBU3om0pQYt4IQ9DumiY3netXpuhQufmb0JA5imvrusbBFsdhRuRbwN3Bwzx5cCROQIQjmgWX62zIL8QbXPG69TAXxg5NRtvO47Us93%2Fr5BGvaboFw01WpUdXcV7%2Be8R8wGRrl0XL2FYyb3ngmvDkL2k4LN7P6drVExcTpjxEwrfqHygY6pgEdHbYAItJfu5oqbzGcng4c8z8bDi2JrUblvpPRorqLyJfz1M%2FUA5jytGg35uIv5Rm1Dlh1D%2FwQvagNCzHh9mHZb7CxBj%2FhV%2FTykIbFNVXFh8uHj7yzRcsl4cg1XMuZNhhcB670R9sU06%2FBVVupA5UnEiEMbf9hpmAvfchS6o3Imbc62k6E3BmuABvDCbcJgagTuFIyow98lM%2B9S2iAR4A8PmMbPVZE&X-Amz-Signature=3d5c1f28e687c509b7d27836109cff5edab52dd95900e9244a1cef0a4e1baeb6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
